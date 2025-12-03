function Calendar() {
  return (
<div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">Wedding date calendar</h1>
        <p className="text-slate-200 text-sm md:text-base">
          This page will let you explore different wedding dates and see how the weather typically
          looks for each option based on historical data.
        </p>
        <p className="text-slate-400 text-xs md:text-sm">
          In the final version you will be able to pick a location, choose a date range and compare
          which days look most promising.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Planned features</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Select city or region for the wedding.</li>
          <li>Choose a month or custom date range.</li>
          <li>See a visual calendar with color-coded days.</li>
          <li>Click a day to open detailed weather statistics.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Status</h2>
        <p className="text-sm text-slate-300">
          The calendar logic and charts will be added after the backend and weather data API are in place.
          For now, this page describes how the feature will work in the final version.
        </p>
      </section>
    </div>
  );
}

export default Calendar;
