import { Link } from "react-router-dom";
import NavLink from "../NavLink";

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center gap-6 px-4 py-3">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          WeddingWeather
        </Link>
        <div className="flex gap-4 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/results">Results</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
