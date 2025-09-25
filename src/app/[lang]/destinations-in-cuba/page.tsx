// app/destinations-in-cuba/page.tsx
import { DestinationsGrid } from "@/components/DestinationGrid";
import { buildAlternates, buildMetaTags, Locale } from "../../../seoUtils/seo-builder";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getTranslation } from "../locales";

// ---------- SEO ----------
type Params = {
  params: Promise<{
    lang: "en"
    | "es"
    | "fr"
    | "de"
    | "ru"
    | "pt"
  }>
};
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.destinationsInCuba as any)
  return metadata
}
// ---------- Data ----------
type Destination = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  short: string;
  long: string;
  tags?: string[];
};

const DESTINATIONS: Destination[] = [
  {
    slug: "havana",
    title: "Havana (La Habana)",
    image: "/havana.webp",
    alt: "View of Havana's Malecón and classic cars",
    short: "Old Havana, Malecón, classic cars, nightlife.",
    long:
      "Havana is the capital and cultural heart of Cuba. From Old Havana’s UNESCO-listed streets to the oceanfront Malecón, visitors enjoy colonial plazas, live music, iconic bars like El Floridita and La Bodeguita, and panoramic views from El Morro fortress. Airport code: HAV (José Martí International).",
    tags: ["City", "Culture", "Nightlife"],
  },
  {
    slug: "varadero",
    title: "Varadero",
    image: "/varadero.webp",
    alt: "Aerial of Varadero beach with turquoise water",
    short: "Cuba’s top beach destination on a narrow peninsula.",
    long:
      "Varadero offers 20+ km of fine white sand and calm, turquoise waters. It’s ideal for families and couples who want resorts, watersports, golf, and easy day trips to Cárdenas, Cayo Blanco or Matanzas. Airport code: VRA (Juan Gualberto Gómez International).",
    tags: ["Beach", "Resorts"],
  },
  {
    slug: "vinales",
    title: "Viñales",
    image: "/vinales.webp",
    alt: "Viñales Valley mogotes and tobacco fields",
    short: "Mogotes, tobacco farms, caves, and rural life.",
    long:
      "Viñales Valley is famous for its limestone mogotes, tobacco plantations, horseback rides, and caves like Cueva del Indio. A perfect day trip or overnight from Havana for nature lovers and photographers.",
    tags: ["Nature", "Tobacco"],
  },
  {
    slug: "trinidad",
    title: "Trinidad",
    image: "/trinidad.webp",
    alt: "Cobbled street and colorful colonial houses in Trinidad",
    short: "UNESCO gem with cobbled streets and live music.",
    long:
      "One of Cuba’s best-preserved colonial towns. Explore Plaza Mayor, craft markets, live music houses, and nearby attractions like Playa Ancón and the Valle de los Ingenios.",
    tags: ["UNESCO", "Colonial"],
  },
  {
    slug: "cienfuegos",
    title: "Cienfuegos",
    image: "/cienfuegos.webp",
    alt: "Cienfuegos bay and seaside architecture",
    short: "Elegant bay city known as the Pearl of the South.",
    long:
      "Cienfuegos mixes French-influenced architecture with a laid-back bayfront vibe. Don’t miss Parque José Martí, the Palacio de Valle, and the Punta Gorda promenade.",
    tags: ["Bay", "Architecture"],
  },
  {
    slug: "santa-clara",
    title: "Santa Clara",
    image: "/santa-clara.webp",
    alt: "Che Guevara Mausoleum in Santa Clara",
    short: "Historic city with the Che Guevara Mausoleum.",
    long:
      "Santa Clara is known for the Che Guevara Mausoleum and key events of the Cuban Revolution. It’s also a strategic hub for trips to the northern keys.",
    tags: ["History", "Hub"],
  },
  {
    slug: "playas-del-este",
    title: "Playas del Este (Havana Beaches)",
    image: "/playa-del-este.webp",
    alt: "Santa María del Mar beach near Havana",
    short: "Closest beaches to Havana, great for a half‑day.",
    long:
      "A chain of beaches 20–30 minutes from central Havana (e.g., Santa María del Mar). Perfect for quick sun-and-sea escapes without leaving the city long.",
    tags: ["Beach", "Near Havana"],
  },
  {
    slug: "cayo-coco",
    title: "Cayo Coco",
    image: "/cayo-coco.webp",
    alt: "Cayo Coco turquoise waters and wooden walkway",
    short: "All‑inclusive resorts and stunning coral reefs.",
    long:
      "Part of Cuba’s Jardines del Rey archipelago, Cayo Coco features white-sand beaches, excellent snorkeling, and quiet resort life. Popular for honeymoons and families.",
    tags: ["Keys", "Resorts"],
  },
  {
    slug: "cayo-guillermo",
    title: "Cayo Guillermo",
    image: "/cayo-guillermo.webp",
    alt: "Cayo Guillermo shallow waters and sandbar",
    short: "Famous for shallow waters and kitesurfing.",
    long:
      "Neighbor to Cayo Coco, this key is known for Playa Pilar, towering dunes, and kitesurf spots. Calm waters and postcard views everywhere.",
    tags: ["Keys", "Watersports"],
  },
  {
    slug: "cayo-santa-maria",
    title: "Cayo Santa María",
    image: "/cayo-santa-maria.webp",
    alt: "Cayo Santa María beach at golden hour",
    short: "Long virgin beaches and upscale resorts.",
    long:
      "Linked by a scenic causeway from the mainland, Cayo Santa María offers tranquil beaches, spa resorts, and easy access to Remedios and Santa Clara.",
    tags: ["Keys", "Relax"],
  },
  {
    slug: "varadero-airport",
    title: "Varadero Airport (VRA)",
    image: "/varadero-airport.webp",
    alt: "Varadero Airport exterior",
    short: "Gateway to Varadero and nearby resorts.",
    long:
      "Juan Gualberto Gómez International (VRA) serves Varadero’s hotel strip and nearby towns. We offer private transfers to any hotel, day or night.",
    tags: ["Airport", "Transfers"],
  },
  {
    slug: "hav-airport",
    title: "Havana Airport (HAV / José Martí)",
    image: "/havana-capitol.webp",
    alt: "Classic car near Havana Capitol building",
    short: "Main international gateway to Cuba.",
    long:
      "José Martí International (HAV) is Cuba’s busiest airport. We provide reliable pickups to Havana Centro, Vedado, Miramar, and beyond (Varadero, Viñales, Trinidad).",
    tags: ["Airport", "Transfers"],
  },
];

// ---------- Page ----------
export default function DestinationsPage() {
  const itemListElements = DESTINATIONS.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://cubantaxis.com/destinations-in-cuba#${d.slug}`,
    name: d.title,
  }));

  return (
    <>
      {/* JSON‑LD: ItemList of destinations */}
      <Script
        id="ld-json-destinations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: itemListElements,
          }),
        }}
      />

      <main className="relative bg-white dark:bg-black">
        {/* Background accent */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black" />

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6">
          <ol className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/destinations-in-cuba" className="hover:underline">Destinations</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-800 dark:text-gray-200">Cuba 2025</li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="mx-auto max-w-6xl px-4 pb-4 pt-10 sm:pt-14">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              2025 Guide
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              Private transfers
            </span>
            <span className="inline-flex items-center rounded-full border border-sky-300 bg-sky-100/60 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              English‑speaking drivers
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Popular Taxi Destinations in Cuba (2025)
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
            Browse the most requested <strong>taxi routes in Cuba</strong> — from{" "}
            <strong>Havana (HAV)</strong> and <strong>Varadero (VRA)</strong> to{" "}
            <strong>Viñales, Trinidad, Cienfuegos, Santa Clara</strong> and the northern cays.
            Photos, highlights, and a quick way to{" "}
            <Link href="/cuba-taxi-booking" className="font-medium underline hover:no-underline">
              book your transfer
            </Link>.
          </p>

          {/* Chips / quick hints */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["HAV", "MUHA", "VRA", "Varadero", "Old Havana"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-zinc-800 dark:text-gray-200"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cuba-taxi-booking"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Book a private transfer
            </Link>
            <a
              href="#grid"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              Explore destinations
            </a>
          </div>
        </header>

        {/* GRID */}
        <section id="grid" className="mx-auto max-w-6xl px-4 pt-14 pb-20">
          <DestinationsGrid items={DESTINATIONS} />
        </section>
      </main>
    </>
  );
}
