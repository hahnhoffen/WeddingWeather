function About() {
  return (
   <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">About WeddingWeather</h1>
        <p className="text-slate-200 text-sm md:text-base">
          WeddingWeather is a planning tool for couples who want to reduce the risk of bad
          weather on their wedding day by looking at historical climate data instead of guessing.
        </p>
        <p className="text-slate-400 text-xs md:text-sm">
          This version is built as a portfolio project to demonstrate modern frontend architecture
          with React, TypeScript and Tailwind CSS, together with a custom .NET backend and database.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What the app will do</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Search for a wedding location and see typical weather for that area.</li>
          <li>Compare different dates based on historical temperature and rainfall.</li>
          <li>Visualize trends using charts so it is easier to make a decision.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Technical overview</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Frontend: React, TypeScript, Vite, Tailwind CSS.</li>
          <li>Architecture: separate frontend and backend, feature branches and PR workflow.</li>
          <li>Backend: planned .NET 8 API with a relational database for weather and city data.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
