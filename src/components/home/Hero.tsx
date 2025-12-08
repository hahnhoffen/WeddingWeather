function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
          Plan the perfect wedding day
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Find the most promising wedding date
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          WeddingWeather helps you explore typical weather conditions for your wedding date
          based on historical climate data, so you can choose a day with confidence.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <button className="rounded-md bg-sky-500 px-6 py-2 text-sm font-medium text-white hover:bg-sky-400 transition">
          Start exploring dates
        </button>
        <button className="rounded-md border border-slate-600 px-6 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition">
          Learn how it works
        </button>
      </div>
    </section>
  );
}

export default Hero;