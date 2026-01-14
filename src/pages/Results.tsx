import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { weatherApi } from "../integrations/api/weatherApi";
import type { WeatherPredictionResponse } from "../lib/types";

export default function Results() {
  const [searchParams] = useSearchParams();

  const city = searchParams.get("city") ?? "";
  const date = searchParams.get("date") ?? "";

  const hasSearch = city !== "" && date !== "";

  const [prediction, setPrediction] =
    useState<WeatherPredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasPrediction = prediction !== null;

useEffect(() => {
  if (!hasSearch) {
    setPrediction(null);
    setError(null);
    setIsLoading(false);
    return;
  }

  const controller = new AbortController();

  setIsLoading(true);
  setError(null);
  setPrediction(null);

  weatherApi
    .getPrediction({ cityId: city, date })
    .then((data) => {
      setPrediction(data);
      setIsLoading(false);
    })
    .catch((err) => {
      if (controller.signal.aborted) {
        return;
      }

      if (import.meta.env.DEV) {
        setPrediction({
          cityName: city,
          date,
          probabilitySunny: 0.55,
          probabilityCloudy: 0.25,
          probabilityRain: 0.2,
          averageTemperatureC: 18,
        });
        setIsLoading(false);
        setError(null);
        return;
      }

      setPrediction(null);
      setIsLoading(false);
      setError(err instanceof Error ? err.message : "Something went wrong");
    });

  return () => controller.abort();
}, [city, date, hasSearch]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">
            Weather Prediction
          </h1>
          <p className="text-sm text-slate-600">
            Based on long-term climate data and historical weather patterns.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Search Summary
          </h2>

          <div className="space-y-1">
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900">City:</span> {city}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900">Wedding Date:</span>{" "}
              {date}
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-slate-600">Loading prediction...</p>
          </div>
        )}

        {!isLoading && error && (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-2">
            <p className="text-sm font-medium text-slate-900">
              Could not load prediction
            </p>
            <p className="text-sm text-slate-600">{error}</p>
          </div>
        )}

        {!isLoading && !error && !hasPrediction && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-slate-600">
              Enter a city and date from the calendar page to see a prediction.
            </p>
          </div>
        )}

        {hasPrediction && (
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  Prediction for {prediction.cityName}
                </h2>
                <p className="text-sm text-slate-600">{prediction.date}</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-600">Avg temperature</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {prediction.averageTemperatureC}°C
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700">Sunny</span>
                <span className="font-medium text-slate-900">
                  {Math.round(prediction.probabilitySunny * 100)}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-sky-500"
                  style={{ width: `${prediction.probabilitySunny * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700">Cloudy</span>
                <span className="font-medium text-slate-900">
                  {Math.round(prediction.probabilityCloudy * 100)}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-slate-700"
                  style={{ width: `${prediction.probabilityCloudy * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700">Rain</span>
                <span className="font-medium text-slate-900">
                  {Math.round(prediction.probabilityRain * 100)}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: `${prediction.probabilityRain * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
