import { Helmet } from "react-helmet-async";


export default function RenovationsPage() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Luxury Home Renovations | Distinctive House Builders LLC</title>
        <meta
          name="description"
          content="Distinctive House Builders specializes in luxury home renovations in Jupiter and Palm Beach Gardens — kitchens, baths, additions, and whole-home transformations with transparent cost control."
        />
        <meta
          name="keywords"
          content="home renovations Jupiter, luxury kitchen remodel, bathroom remodel Palm Beach Gardens, home additions, whole-home renovation, Distinctive House Builders"
        />
        <link
          rel="canonical"
          href="https://distinctivehousebuilders.com/renovations"
        />

        {/* Open Graph / social sharing */}
        <meta
          property="og:title"
          content="Luxury Home Renovations | Distinctive House Builders LLC"
        />
        <meta
          property="og:description"
          content="Transform your home with high-end renovations — kitchens, baths, interior updates, additions, and more in Jupiter & Palm Beach Gardens."
        />
        <meta
          property="og:url"
          content="https://distinctivehousebuilders.com/renovations"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://distinctivehousebuilders.com/assets/db-logo.png"
        />
      </Helmet>

      <div className="min-h-screen font-sans text-neutral-800 bg-white">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Renovations</h1>
            <a href="/" className="text-neutral-600 hover:text-black">
              ← Back to Home
            </a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-4">
            Transformations &amp; Additions
          </h2>
          <p className="text-neutral-600 mb-6">
            We specialize in luxury kitchens, baths, interior updates, additions,
            and full-home renovation projects with a transparent cost-control
            process.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Occupied-home best practices</li>
            <li>Transparent cost control</li>
            <li>Permit &amp; HOA coordination</li>
          </ul>
        </main>
      </div>
    </>
  );
}

