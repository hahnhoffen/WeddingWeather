function HowItWorks() {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Pick your dream location</h2>
        <p className="text-sm text-slate-300">
          Choose the city or region where you want to get married. Coastal, city, or countryside – it all matters.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">2. Explore historical weather</h2>
        <p className="text-sm text-slate-300">
          See temperature, rainfall and sunshine trends for your chosen date based on many years of climate data.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Pick the most promising date</h2>
        <p className="text-sm text-slate-300">
          Compare dates and choose the one that statistically gives you the best chance of good weather.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
