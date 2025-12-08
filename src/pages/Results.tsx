import { useSearchParams } from "react-router-dom";

export default function Results() {
  const [searchParams] = useSearchParams();

  const city = searchParams.get("city") ?? "";
  const date = searchParams.get("date") ?? "";

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
      </section>
    </main>
  );
}
