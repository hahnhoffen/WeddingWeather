import { WeatherSearch } from "../components/weather/WeatherSearch";

export default function Calendar() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">
            Wedding weather calendar
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Choose your wedding date and location to explore the most likely weather
            conditions based on long-term climate patterns.
          </p>
        </div>

        <WeatherSearch />
      </section>
    </main>
  );
}