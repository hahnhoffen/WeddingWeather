function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-slate-300 mb-4">Page not found.</p>
      <p className="text-slate-500 text-sm">
        The page you are looking for does not exist (yet).
      </p>
    </div>
  );
}

export default NotFound;
