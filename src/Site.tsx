
import React, { useState } from "react";
import "./index.css";
import { Pencil, Hammer, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Site({ initialSection }: SiteProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleContactSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };



/** Simple gradient fallback if an image fails */
const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#e5e7eb'/><stop offset='100%' stop-color='#f3f4f6'/>
      </linearGradient></defs>
      <rect width='1200' height='800' fill='url(#g)'/>
    </svg>`
  );


function HeroCarousel({
  images,
  title,
  small = false,
}: {
  images: string[];
  title?: string;
  small?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [err, setErr] = useState(false);

  const hasImages = Array.isArray(images) && images.length > 0;
  const shown = err || !hasImages ? FALLBACK : images[idx];
  const next = (d: number) => {
    if (!hasImages) return;
    setIdx(i => (i + d + images.length) % images.length);
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${
        small ? "min-h-[35vh]" : "min-h-[55vh] md:min-h-[65vh]"
      }`}
    >
      <img
        src={shown}
        onError={() => setErr(true)}
        alt={title || ""}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {hasImages && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => next(-1)}
            aria-label="Previous"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 px-3 py-2 shadow"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => next(1)}
            aria-label="Next"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 px-3 py-2 shadow"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
function ImgCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  return (
    <img
      src={broken ? FALLBACK : src}
      alt={alt || ""}
      onError={() => setBroken(true)}
      className={`block w-full h-56 md:h-64 lg:h-72 object-cover rounded-x1 ${className}`}
    />
  );
}




/* ================================ Data ================================= */

type Project = {
  id: string;
  name: string;
  location: string;
  style: string;
  hero: string;
  gallery: { src: string; alt: string }[];
  facts: { label: string; value: string }[];
};


const PROJECTS: Project[] = [
  {
    id: "ranch-colony",
    name: "Jupiter Ranch Colony — Spanish Mediterranean Estate",
    location: "Jupiter, FL",
    style: "Spanish Mediterranean",
    hero: "/assets/projects/ranch-colony/ranch-colony-1.jpg",
gallery: [
  { src: "/assets/projects/ranch-colony/ranch-colony-1.jpg", alt: "Spanish Mediterranean luxury estate in Jupiter Ranch Colony – exterior front elevation" },
  { src: "/assets/projects/ranch-colony/ranch-colony-2.jpg", alt: "Luxury Spanish Mediterranean home in Jupiter Ranch Colony with detailed architectural stonework" },
  { src: "/assets/projects/ranch-colony/ranch-colony-3.jpg", alt: "High-end custom home interior – open concept living room in Jupiter Ranch Colony" },
  { src: "/assets/projects/ranch-colony/ranch-colony-4.jpg", alt: "Luxury kitchen remodel with premium finishes in Jupiter Ranch Colony home" },
  { src: "/assets/projects/ranch-colony/ranch-colony-5.jpg", alt: "Elegant dining room design with custom lighting in Spanish Mediterranean home" },
  { src: "/assets/projects/ranch-colony/ranch-colony-6.jpg", alt: "Custom woodwork and high-end craftsmanship in Jupiter Ranch Colony residence" },
  { src: "/assets/projects/ranch-colony/ranch-colony-7.jpg", alt: "Luxury bathroom renovation with premium tile and fixtures in Jupiter Ranch Colony home" },
  { src: "/assets/projects/ranch-colony/ranch-colony-8.jpg", alt: "Backyard and outdoor living design in luxury Ranch Colony home – high-end custom construction" },
],


    facts: [
      { label: "Size", value: "8,000 sq ft" },
      { label: "Architecture", value: "Spanish Mediterranean" },
      { label: "Location", value: "Jupiter Ranch Colony, FL" },
      {
        label: "Highlights",
        value:
          "Infinity-edge pool, grand foyer, chef’s kitchen, master suite, guest spa bath",
      },
    ],
  },

  {
    id: "old-trail",
    name: "Old Trail — West Indies Modern Transitional Estate",
    location: "Jupiter, FL",
    style: "Modern Transitional",
    hero: "/assets/projects/old-trail/old-trail-1.jpg",
gallery: [
  {
    src: "/assets/projects/old-trail/old-trail-1.jpg",
    alt: "Old Trail custom home — front exterior West Indies modern elevation",
  },
  {
    src: "/assets/projects/old-trail/old-trail-2.jpg",
    alt: "Old Trail custom home — backyard pool and outdoor living",
  },
  {
    src: "/assets/projects/old-trail/old-trail-3.jpg",
    alt: "Old Trail great room — open-concept living and kitchen",
  },
  {
    src: "/assets/projects/old-trail/old-trail-4.jpg",
    alt: "Old Trail kitchen — high-end cabinetry and island",
  },
  {
    src: "/assets/projects/old-trail/old-trail-5.jpg",
    alt: "Old Trail master suite — bedroom with custom finishes",
  },
  {
    src: "/assets/projects/old-trail/old-trail-6.jpg",
    alt: "Old Trail bathroom — spa-inspired shower and tub",
  },
  {
    src: "/assets/projects/old-trail/old-trail-7.jpg",
    alt: "Old Trail office / study — custom millwork and built-ins",
  },
  {
    src: "/assets/projects/old-trail/old-trail-8.jpg",
    alt: "Old Trail staircase and foyer detail",
  },
  {
    src: "/assets/projects/old-trail/old-trail-9.jpg",
    alt: "Old Trail outdoor living — lanai and seating area",
  },
  {
    src: "/assets/projects/old-trail/old-trail-10.jpg",
    alt: "Old Trail dining room with custom lighting",
  },
  {
    src: "/assets/projects/old-trail/old-trail-11.jpg",
    alt: "Old Trail nighttime exterior view",
  },

  // ⭐ NEW IMAGES (12–18)
  {
    src: "/assets/projects/old-trail/old-trail-12.jpg",
    alt: "Old Trail interior — living room detail",
  },
  {
    src: "/assets/projects/old-trail/old-trail-13.jpg",
    alt: "Old Trail architectural ceiling detail",
  },
  {
    src: "/assets/projects/old-trail/old-trail-14.jpg",
    alt: "Old Trail luxury bathroom — glass shower and tile design",
  },
  {
    src: "/assets/projects/old-trail/old-trail-15.jpg",
    alt: "Old Trail spa bathroom — shower and modern finishes",
  },
  {
    src: "/assets/projects/old-trail/old-trail-16.jpg",
    alt: "Old Trail bonus room — upstairs retreat",
  },
  {
    src: "/assets/projects/old-trail/old-trail-17.jpg",
    alt: "Old Trail hallway / loft — modern railing and lighting",
  },
  {
    src: "/assets/projects/old-trail/old-trail-18.jpg",
    alt: "Old Trail coffered ceiling detail — luxury interior finish",
  },
],


    facts: [
      { label: "Size", value: "7,200 sq ft" },
      { label: "Architecture", value: "Modern Transitional" },
      { label: "Location", value: "Jupiter, FL" },
      {
        label: "Highlights",
        value:
          "Front exterior, private office, spa-inspired master bath, and open-concept great room",
      },
    ],
  },

  {
    id: "log-cabin",
    name: "Lake Thunderbird — Luxury Log Estate",
    location: "Lake Thunderbird, IL",
    style: "Luxury Log Home",
    hero: "/assets/projects/lake-thunderbird/log-cabin-1.jpg",
   gallery: [
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-1.jpg",
    alt: "Lake Thunderbird log cabin – front exterior with timber architecture",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-2.jpg",
    alt: "Lake Thunderbird log cabin – great room with vaulted wood ceilings",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-3.jpg",
    alt: "Lake Thunderbird log cabin – kitchen with rustic cabinetry",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-4.jpg",
    alt: "Lake Thunderbird log cabin – custom stone fireplace and living area",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-5.jpg",
    alt: "Lake Thunderbird log cabin – bedroom suite with natural wood interiors",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-6.jpg",
    alt: "Lake Thunderbird log cabin – bathroom with log walls and upgraded finishes",
  },
  {
    src: "/assets/projects/lake-thunderbird/log-cabin-7.jpg",
    alt: "Lake Thunderbird log cabin – lakeside exterior and landscape",
  },
],

    facts: [
      { label: "Size", value: "4,000 sq ft" },
      { label: "Architecture", value: "Luxury Log" },
      { label: "Location", value: "Lake Thunderbird, IL" },
      {
        label: "Highlights",
        value:
          "Timber construction, lake-facing deck, chef’s kitchen, open family room",
      },
    ],
  },

  {
    id: "briarcliffe",
    name: "Briarcliffe Estates — Old World Craftsmanship",
    location: "Lemont, IL",
    style: "Old World",
    hero: "/assets/projects/briarcliffe-estates/briarcliffe-estates-1.jpg",
gallery: [
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-1.jpg",
    alt: "Briarcliffe Estates custom home – front exterior, stone and stucco elevation",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-2.jpg",
    alt: "Briarcliffe Estates – kitchen with premium cabinetry and island",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-3.jpg",
    alt: "Briarcliffe Estates – open concept living and dining area",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-4.jpg",
    alt: "Briarcliffe Estates – outdoor living and covered lanai",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-5.jpg",
    alt: "Briarcliffe Estates – pool and backyard landscape design",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-6.jpg",
    alt: "Briarcliffe Estates – primary suite bedroom design",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-7.jpg",
    alt: "Briarcliffe Estates – spa inspired master bathroom",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-8.jpg",
    alt: "Briarcliffe Estates – custom staircase and foyer lighting",
  },
  {
    src: "/assets/projects/briarcliffe-estates/briarcliffe-estates-9.jpg",
    alt: "Briarcliffe Estates – evening exterior architectural lighting",
  },
],


    facts: [
      { label: "Size", value: "5,000 sq ft" },
      { label: "Architecture", value: "Old World Craftsmanship" },
      { label: "Location", value: "Lemont, IL" },
      {
        label: "Highlights",
        value:
          "custom bar, chef’s kitchen, outdoor firepit, formal dining.",
      },
    ],
  },
];


type Renovation = {
  id: string;
  name: string;
  before: string[];
  after: string[];
};

const RENOVATIONS: Renovation[] = [
  {
    id: "jonathans-landing",
    name: "Jonathan’s Landing — Renovation",
    before: [
      "/assets/renovations/jonathans-landing/before-1.jpg",
      "/assets/renovations/jonathans-landing/before-2.jpg",
      // add more if you upload them:
      // "/assets/renovations/jonathans-landing/before-3.jpg",
    ],
    after: [
      "/assets/renovations/jonathans-landing/after-1.jpg",
      "/assets/renovations/jonathans-landing/after-2.jpg",
      "/assets/renovations/jonathans-landing/after-3.jpg",
      "/assets/renovations/jonathans-landing/after-4.jpg",
      "/assets/renovations/jonathans-landing/after-5.jpg",
    ],
  },

  {
    id: "old-trail",
    name: "Old Trail — Renovation",
    before: [
      "/assets/renovations/old-trail/before-1.jpg",
      "/assets/renovations/old-trail/before-2.jpg",
    ],
    after: [
      "/assets/renovations/old-trail/after-1.jpg",
      "/assets/renovations/old-trail/after-2.jpg",
    ],
  },

  {
    id: "jupiter-country-club",
    name: "Jupiter Country Club — Renovation",
    before: [
      "/assets/renovations/jupiter-country-club/before-1.jpg",
      "/assets/renovations/jupiter-country-club/before-2.jpg",
      "/assets/renovations/jupiter-country-club/before-3.jpg",
      "/assets/renovations/jupiter-country-club/before-4.jpg",
    ],
    after: [
      "/assets/renovations/jupiter-country-club/after-1.jpg",
      "/assets/renovations/jupiter-country-club/after-2.jpg",
      "/assets/renovations/jupiter-country-club/after-3.jpg",
      "/assets/renovations/jupiter-country-club/after-4.jpg",
    ],
  },

  {
    id: "jupiter-farms",
    name: "Jupiter Farms — Renovation",
    before: [
      "/assets/renovations/jupiter-farms/before-1.jpg",
      "/assets/renovations/jupiter-farms/before-2.jpg",
      "/assets/renovations/jupiter-farms/before-3.jpg",
    ],
    after: [
      "/assets/renovations/jupiter-farms/after-1.jpg",
      "/assets/renovations/jupiter-farms/after-2.jpg",
      "/assets/renovations/jupiter-farms/after-3.jpg",
    ],
  },

  {
    id: "drake-tower",
    name: "Drake Tower — Renovation",
    before: ["/assets/renovations/drake-tower/before-1.jpg"],
    after: ["/assets/renovations/drake-tower/after-1.jpg"],
  },
];



// === Before/After thumbnail with draggable handle ============================
function BAThumb({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState<number>(50);

  return (
    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-xl border bg-neutral-100">
      {/* BEFORE layer (full) */}
      <img src={before} alt={`${alt} before`} className="absolute inset-0 h-full w-full object-cover" />

      {/* AFTER layer (clipped by range position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
        aria-hidden="true"
      >
        <img src={after} alt={`${alt} after`} className="h-full w-full object-cover" />
      </div>

      {/* Divider / handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-[2px] bg-white/90 shadow" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-white px-2 py-1 text-xs font-semibold shadow">
          ⇆
        </div>
      </div>

      {/* Transparent range input on top */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

// === Renovations cards + modal ==============================================

function RenovationsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = RENOVATIONS.find((r) => r.id === openId) ?? null;

  return (
   

    <section id="renovations" className="bg-neutral-50 border-y">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">Before &amp; After Renovations</h2>
        <p className="mt-2 text-neutral-600">
          See how thoughtful design and craftsmanship transform everyday living.
        </p>

        {/* Cards grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {RENOVATIONS.map((r) => {
            // safe single-pair fallback
            const b = r.before[0] || r.after[0];
            const a = r.after[0] || r.before[0];

            return (
              <div key={r.id} className="rounded-2xl bg-white p-5 border shadow-sm">
                <BAThumb before={b} after={a} alt={r.name} />

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(r.id)}
                    className="px-3 py-2 rounded-lg border text-sm hover:bg-black hover:text-white transition"
                    aria-label={`Open ${r.name}`}
                  >
                    View Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with full gallery */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenId(null)}
        >
          <div
            className="mx-auto w-[min(1000px,calc(100vw-2rem))] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top thumb (first pair) */}
            <div className="relative">
              <BAThumb
                before={active.before[0] || active.after[0]}
                after={active.after[0] || active.before[0]}
                alt={active.name}
              />
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="absolute top-3 right-3 z-20 rounded-full bg-white/90 px-3 py-2"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Details + full pairs */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{active.name}</h3>
              <p className="mt-2 text-neutral-700">
                Tap and drag the handle to compare each space before and after.
              </p>

              <div className="mt-5 grid gap-5">
                {Array.from({ length: Math.max(active.before.length, active.after.length) })
                  .map((_, i) => ({
                    before: active.before[i] || active.after[i],
                    after: active.after[i] || active.before[i],
                  }))
                  .map((p, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border">
                      <BAThumb
                        before={p.before!}
                        after={p.after!}
                        alt={`${active.name} ${i + 1}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




// === Projects grid + modal ===========================
function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
  



    <section id="projects" className="bg-neutral-50 border-y">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">Featured Projects</h2>
        <p className="mt-2 text-neutral-600">Tap a card to view the full project.</p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
          {PROJECTS.map((p) => (
            <div key={p.id} className="grid">
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                className="group text-left w-full"
                aria-label={`Open ${p.name}`}
              >
  <div className="rounded-xl overflow-hidden border">
  <ImgCard src={p.hero} alt={p.name} />
</div>


                {/* Card text */}
                <div className="mt-3 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-widest text-neutral-500">{p.style}</p>
                  <h3 className="text-lg font-semibold leading-snug min-h-[3.25rem]">{p.name}</h3>
                  <p className="text-sm text-neutral-600">{p.location}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-lg border text-sm self-start group-hover:bg-black group-hover:text-white transition">
                    View Project
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenId(null)}
        >
          <div
            className="mx-auto w-[min(1000px,calc(100vw-2rem))] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* top image / carousel */}
            <div className="relative rounded-t-2xl overflow-hidden">
              <HeroCarousel
  title={active.name}
  images={active.gallery.map((image) => image.src)}
/>

              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="absolute top-3 right-3 z-20 rounded-full bg-white/90 px-3 py-2"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* details + gallery */}
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold">{active.name}</h3>
                <p className="mt-2 text-neutral-700">
                  Custom estate with high-end luxury finishes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {active.facts.map((f) => (
                  <div key={f.label} className="rounded-xl border p-4">
                    <p className="text-xs font-semibold text-neutral-500">{f.label}</p>
                    <p className="text-sm">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold text-neutral-600 mb-3">Gallery</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
{active.gallery.map((image, i) => (
  <ImgCard
    key={i}
    src={image.src}
    alt={image.alt}
    className="w-full h-40 object-cover rounded-xl"
  />
))}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
/* ============================= end Projects section ============================= */









/* ============================ Page ============================ */

type SiteProps = {
  initialSection?: string; // e.g., "services", "projects", etc.
};

export default function Site({ initialSection }: SiteProps) {
  // Scroll to the section if one was provided (for routed pages)
  useEffect(() => {
    if (!initialSection) return;
    const el = document.getElementById(initialSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [initialSection]);

  return (
    <div
      className="min-h-screen font-sans text-neutral-800"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Header */}
      ...


      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="leading-tight">
            <p className="text-lg font-semibold">Distinctive House Builders LLC</p>
            <p className="text-xs text-neutral-500">Jupiter • Palm Beach Gardens • West Palm Beach</p>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-black/70">Home</a>
            <a href="#services" className="hover:text-black/70">Services</a>
            <a href="#about" className="hover:text-black/70">About</a>
            <a href="#projects" className="hover:text-black/70">Projects</a>
            <a href="#contact" className="px-3 py-2 rounded-xl border hover:bg-black hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <HeroCarousel
          title="Ranch Colony"
          images={["/assets/projects/ranch-colony/ranch-colony-1.jpg", "/assets/projects/ranch-colony/ranch-colony-2.jpg", "/assets/projects/ranch-colony/ranch-colony-3.jpg"]}
        />
      </section>
{/* Primary SEO Heading */}
<h1 className="text-4xl md:text-5xl font-bold text-center mt-20 text-neutral-900 px-6 leading-tight">
  Luxury Custom Home Builder
</h1>

<h2 className="text-2xl md:text-3xl font-semibold text-center mt-3 text-neutral-700 px-6">
  Jupiter • Palm Beach Gardens • Palm Beach
</h2>

<p className="text-lg text-neutral-600 text-center mt-1 max-w-3xl mx-auto px-6">
  Specializing in high-end custom homes, luxury kitchens, premium renovations, 
  and whole-home transformations across South Florida.
  </p>
<p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto px-6 mt-4">
  Serving Jupiter, Palm Beach Gardens, and Palm Beach, Distinctive House Builders 
  is recognized as one of South Florida’s leading luxury home builders — delivering 
  premium craftsmanship, architectural excellence, and fully custom homebuilding 
  experiences.
</p>




{/* ====================== SERVICES (Updated with <Link>) ====================== */}
<section id="services" className="bg-white">
  <div className="max-w-7xl mx-auto px-4 pt-6 pb-16 md:pt-10 md:pb-24">

    {/* Logo */}
    <div className="flex justify-center mt-1 mb-10">
      <img
        src="/assets/db-logo.png"
        alt="Distinctive Builders Logo"
        className="h-40 w-auto"
      />
    </div>

    <h2 className="text-3xl md:text-4xl font-semibold text-center">Services</h2>
    <p className="mt-2 text-neutral-600 text-center">
      <Link to="/design" className="underline hover:text-black">Design</Link> |
      <Link to="/renovations" className="underline hover:text-black mx-2">Renovations</Link> |
      <Link to="/custom-homes" className="underline hover:text-black">Custom Homes</Link>
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {/* ================= DESIGN CARD ================= */}
      <Link to="/design" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition block">
        <div className="flex justify-center mb-4">
          <Pencil className="h-8 w-8 text-neutral-700" />
        </div>
        <h3 className="text-xl font-semibold text-center">Design</h3>
        <p className="mt-2 text-neutral-600 text-center">
          Pre-construction planning, budgets, architecture collaboration.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 space-y-1">
          <li>Concept to permit</li>
          <li>Material & finish selections</li>
          <li>Cabinet design & renderings</li>
          <li>Detailed scopes & schedules</li>
        </ul>
      </Link>

      {/* ================= RENOVATIONS CARD ================= */}
      <Link to="/renovations" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition block">
        <div className="flex justify-center mb-4">
          <Hammer className="h-8 w-8 text-neutral-700" />
        </div>
        <h3 className="text-xl font-semibold text-center">Renovations</h3>
        <p className="mt-2 text-neutral-600 text-center">
          Kitchens, baths, additions, outdoor living, whole-home updates.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 space-y-1">
          <li>Occupied-home best practices</li>
          <li>Transparent cost control</li>
          <li>Permit & HOA coordination</li>
        </ul>
      </Link>

      {/* ================= CUSTOM HOMES CARD ================= */}
      <Link to="/custom-homes" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition block">
        <div className="flex justify-center mb-4">
          <Home className="h-8 w-8 text-neutral-700" />
        </div>
        <h3 className="text-xl font-semibold text-center">Custom Homes</h3>
        <p className="mt-2 text-neutral-600 text-center">
          Ground-up luxury builds with premium craftsmanship.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 space-y-1">
          <li>Lot analysis & feasibility</li>
          <li>Schedule & trade management</li>
          <li>Concierge punch & closeout</li>
        </ul>
      </Link>

    </div>
  </div>
</section>





{/* About */}
<section id="about" className="bg-neutral-50 border-y">
  <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-3 gap-8">
    <div className="md:col-span-2">
      <h2 className="text-3xl md:text-4xl font-semibold">About</h2>

      <p className="mt-3 text-neutral-700">
        Distinctive House Builders is a boutique general contractor focused on
        high-end custom homes and large renovations throughout Palm Beach & Martin County.
        We take on only a handful of projects at a time so we can obsess over
        the details and provide a client experience that’s clear, responsive,
        and enjoyable from concept through completion.
      </p>

      <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-5">
        <li>Selective workload — a few builds at a time for full attention.</li>
        <li>Principal involvement on site and in the details.</li>
        <li>Transparent budgets, schedules, and communication.</li>
        <li>Craftsmanship-first trades and proven vendors.</li>
      </ul>

      <p className="mt-6 font-semibold text-neutral-800">
        We build with <span className="underline decoration-2 underline-offset-4">
        passion, precision, and purpose
        </span>.
      </p>
    </div>

    <div className="rounded-2xl border p-6 bg-white">
      <p className="text-sm font-semibold text-neutral-500">License</p>
      <p className="mt-1 text-sm">Florida CBC1267817 • Fully insured</p>

      <p className="text-sm font-semibold text-neutral-500 mt-4">Service Areas</p>
      <p className="mt-1 text-sm">Jupiter • Palm Beach Gardens • West Palm Beach</p>
    </div>
  </div>
</section>


      <ProjectsSection />


      {/* New: Before & After Renovations */}
      <RenovationsSection />



      {/* Contact */}
      <section id="contact" className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Ready to Start Your Project?</h2>
            <p className="mt-3 text-white/80">Call (708) 257-0115 or email distinctivebuilders@hotmail.com</p>
          </div>
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={handleContactSubmit}
  className="bg-white text-neutral-800 rounded-2xl p-6 grid gap-4"
>



  {/* identify form for Netlify */}
  <input type="hidden" name="form-name" value="contact" />

  {/* Honeypot for bots */}
  <p className="hidden">
    <label>
      Don’t fill this out if you’re human:{" "}
      <input name="bot-field" />
    </label>
  </p>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="first" placeholder="First name" className="border rounded-xl px-3 py-2" />
              <input name="last" placeholder="Last name" className="border rounded-xl px-3 py-2" />
            </div>
            <input name="email" type="email" placeholder="Email" className="border rounded-xl px-3 py-2" />
            <input name="phone" placeholder="Phone" className="border rounded-xl px-3 py-2" />
            <textarea name="message" placeholder="Project details" rows={5} className="border rounded-xl px-3 py-2" />
         <button
  type="submit"
  className="mt-2 px-5 py-3 rounded-xl bg-black text-white"
  disabled={isSubmitting}
>
  {isSubmitting ? "Sending..." : "Send"}
</button>

{isSubmitted && (
  <p className="mt-2 text-sm text-green-600">
    Thank you for reaching out. We received your inquiry and will be getting
    back to you shortly.
  </p>
)}

{submitError && (
  <p className="mt-2 text-sm text-red-600">
    {submitError}
  </p>
)}

          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-800">Distinctive House Builders LLC</p>
            <p>Licensed & Insured • Florida CBC1267817</p>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800">Quick Links</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-neutral-800">Follow</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="https://www.instagram.com/distinctivehomebuilderllc/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="hover:underline" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
