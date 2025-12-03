function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} WeddingWeather</span>
        <span>Built for portfolio use</span>
      </div>
    </footer>
  );
}

export default Footer;
