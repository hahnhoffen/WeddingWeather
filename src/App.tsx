import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Simple top nav just for now */}
        <header className="border-b border-slate-700">
          <nav className="max-w-5xl mx-auto flex items-center gap-6 px-4 py-3">
            <span className="font-semibold text-xl">WeddingWeather</span>
            <Link to="/" className="hover:text-sky-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-sky-300 transition-colors">
              About
            </Link>
            <Link to="/calendar" className="hover:text-sky-300 transition-colors">
              Calendar
            </Link>
            <Link to="/results" className="hover:text-sky-300 transition-colors">
              Results
            </Link>
          </nav>
        </header>

        {/* Page content */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
