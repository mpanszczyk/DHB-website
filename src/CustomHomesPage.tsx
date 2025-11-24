export default function CustomHomesPage() {
  return (
    <div className="min-h-screen font-sans text-neutral-800 bg-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Custom Homes</h1>
          <a href="/" className="text-neutral-600 hover:text-black">← Back to Home</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Ground-Up Luxury Builds</h2>
        <p className="text-neutral-600 mb-6">
          We deliver premium craftsmanship, seamless communication, and owner’s-rep level oversight
          from lot analysis through final closeout.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li>Lot analysis & feasibility</li>
          <li>Schedule & trade management</li>
          <li>Concierge punch & closeout</li>
        </ul>
      </main>
    </div>
  );
}
