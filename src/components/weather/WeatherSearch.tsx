import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function WeatherSearch() {
  const [cityInput, setCityInput] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

        if (!cityInput || !date) {
      return;
    }

    const params = new URLSearchParams({
      city: cityInput,
      date,
    }).toString();

    navigate(`/results?${params}`);
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white/90 rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">
        Find your wedding weather
      </h2>
      <p className="text-sm text-slate-600">
        Choose a city and date to see the most likely weather conditions based on historical data.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-800">
            City
          </label>
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city name or ID"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-800">
            Wedding date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Show weather prediction
        </button>
      </form>
    </div>
  );
}
