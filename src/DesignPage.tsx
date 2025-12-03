import { Helmet } from "react-helmet-async";

export default function DesignPage() {
  return (
    <div className="min-h-screen font-sans text-neutral-800 bg-white">
      
      {/* 🔵 SEO TAGS FOR DESIGN PAGE */}
      <Helmet>
        <title>Design Services | Distinctive House Builders LLC</title>

        <meta
          name="description"
          content="Full-service design including architectural collaboration, material selections, cabinet design, detailed scopes, and rendering support in Jupiter & Palm Beach County."
        />

        <meta
          name="keywords"
          content="home design Jupiter, architectural design Jupiter FL, kitchen design Palm Beach, luxury home design Jupiter, remodeling design Jupiter Florida"
        />

        <link
          rel="canonical"
          href="https://distinctivehousebuilders.com/design"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Design Services | Distinctive House Builders LLC" />
        <meta
          property="og:description"
          content="Professional design services including concept-to-permit, materials & finishes, cabinet design, renderings, and detailed scheduling."
        />
        <meta
          property="og:url"
          content="https://distinctivehousebuilders.com/design"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://distinctivehousebuilders.com/assets/db-logo.png"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Jupiter" />
        <meta name="geo.position" content="26.9342;-80.0942" />
        <meta name="ICBM" content="26.9342, -80.0942" />
      </Helmet>

      {/* PAGE HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Design Services</h1>
          <a href="/" className="text-neutral-600 hover:text-black">
            Back to Home
          </a>
        </div>
      </header>

      {/* PAGE BODY */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Full-Service Design</h2>
        <p className="text-neutral-600 mb-6">
          We provide concept-to-permit design services including architectural collaboration,
          detailed scopes, cabinet design, and rendering support.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li>Concept to permit</li>
          <li>Material & finish selections</li>
          <li>Cabinet design & renderings</li>
          <li>Detailed scopes & schedules</li>
        </ul>
      </main>
    </div>
  );
}
