import { Helmet } from "react-helmet-async";

export default function CustomHomesPage() {
  return (
    <div className="min-h-screen font-sans text-neutral-800 bg-white">

      <Helmet>
        <title>Custom Home Builder | Luxury Homes in Jupiter & Palm Beach County</title>

        <meta 
          name="description" 
          content="Distinctive House Builders specializes in luxury custom homes in Jupiter, Palm Beach Gardens, and West Palm Beach. Expert craftsmanship, high-end design, and transparent project execution." 
        />

        <meta 
          name="keywords" 
          content="custom home builder Jupiter, luxury homes Jupiter FL, Palm Beach custom homes, home builders Palm Beach Gardens, new home construction Jupiter, luxury contractor Florida" 
        />

        <link rel="canonical" href="https://distinctivehousebuilders.com/custom-homes" />

        {/* Open Graph */}
        <meta property="og:title" content="Luxury Custom Homes | Distinctive House Builders" />
        <meta 
          property="og:description" 
          content="Expert custom home construction in Jupiter & Palm Beach County. High-end craftsmanship, timeless architecture, and a seamless client experience." 
        />
        <meta property="og:url" content="https://distinctivehousebuilders.com/custom-homes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://distinctivehousebuilders.com/assets/db-logo.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Jupiter" />
        <meta name="geo.position" content="26.9342;-80.0942" />
        <meta name="ICBM" content="26.9342, -80.0942" />
      </Helmet>
