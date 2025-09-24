// app/en/places/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LocaleLink } from "@/libs/i18n-nav";
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
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params;
  const path = `/${lang}/interesting-places-in-cuba`;
  const url = `${base}${path}`;
  return {
    title: "Places of Interest in Cuba | Cuban Taxis",
  description:
    "Curated selection of hotels and points of interest in Havana and Varadero. Browse highlights and jump into detailed pages with services, contacts and how to get there.",
     alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/interesting-places-in-cuba`,
        en: `${base}/en/interesting-places-in-cuba`,
        es: `${base}/es/interesting-places-in-cuba`,
        fr: `${base}/fr/interesting-places-in-cuba`,
        de: `${base}/de/interesting-places-in-cuba`,
        ru: `${base}/ru/interesting-places-in-cuba`,
        pt: `${base}/pt/interesting-places-in-cuba`,
      },
    },
     robots: {
    index: true,   // Permite indexar (por defecto ya es true)
    follow: true,  // Permite seguir enlaces (por defecto ya es true)
  },
  openGraph: {
    title: "Places of Interest in Cuba | Cuban Taxis",
    description:
      "Explore top hotels and attractions in Havana and Varadero. Photos, descriptions, contacts and travel info.",
    type: "website",
    url,
    siteName: "Cuban Taxis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Places of Interest in Cuba | Cuban Taxis",
    description:
      "Top hotels and attractions in Havana and Varadero with quick links to details.",
  }
  ,keywords: [
    "taxis Cuba",
    "cuban taxis",
    "urban taxi in Cuba",
    "cuba taxi",
    "cuba cab",
    "Havana International Airport",
    "MUHA airport",
    "José Martí International Airport",
    "HAV airport",
    "VRA airport",
    "Varadero airport",
    "Cuba excursions from Havana",
    "taxi Havana Trinidad",
    "Havana to Varadero taxi",
    "Cuba private transfers",
    "taxi Cuba prices",
    "taxis en Cuba"
  ],
  };
}


// ───────── Data (images: replace with real files in /public/images/...) ─────────
const PLACES = [
  {
    slug: "ocio-club",
    name: "Ocio Club",
    description:
      "Family entertainment center in Varadero with electronic and mechanical games and virtual‑reality experiences.",
    image: "/ocio-club.webp",
  },
  {
    slug: "melia-internacional-varadero",
    name: "Meliá Internacional Varadero",
    description:
      "Luxury beachfront all‑inclusive with modern rooms, wide dining options and YHI Spa on one of the Caribbean’s most famous beaches.",
    image: "/melia-internacional-varadero.webp",
  },
  {
    slug: "melia-las-americas",
    name: "Meliá Las Américas",
    description:
      "Adults‑only (18+) beachfront resort with direct access to Varadero Golf Club, sea‑view rooms and The Level service.",
    image: "/melia-las-americas.jpg",
  },
  {
    slug: "iberostar-selection-parque-central",
    name: "Iberostar Selection Parque Central",
    description:
      "5‑star icon in the heart of Havana; colonial + modern buildings, rooftop pool with Capitol views and event facilities.",
    image: "/iberostar-selection-parque-central.jpg",
  },
  {
    slug: "gran-hotel-manzana-kempinski",
    name: "Gran Hotel Manzana Kempinski",
    description:
      "Havana’s first luxury hotel, steps from UNESCO heritage sites; elegant rooms, fine dining and an exclusive spa.",
    image: "/gran-hotel-manzana-kempinski.jpg",
  },
  {
    slug: "hotel-mystique-regis-habana",
    name: "Mystique Regis Habana",
    description:
      "Boutique hotel inspired by early‑1900s glamour; historical elegance with modern comforts near Old Havana.",
    image: "/hotel-mystique-regis-habana.webp",
  },
];

// ───────── Helper: JSON‑LD (CollectionPage + ItemList) ─────────
function CollectionJsonLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PLACES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://cubantaxis.com/en/places/${p.slug}`,
      name: p.name,
      description: p.description,
    })),
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Places of Interest in Cuba",
    description:
      "Curated selection of hotels and points of interest in Havana and Varadero by Cuban Taxis.",
    url: "https://cubantaxis.com/en/interesting-places-in-cuba",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

// ───────── Page ─────────
export default function PlacesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 pt-16">
      {/* JSON-LD for SEO */}
      <CollectionJsonLd />

      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Places of Interest
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Hand‑picked hotels and must‑see spots across Havana and Varadero.
          Tap a card to open a detailed page with services, contacts and how to get there.
        </p>
      </header>

      {/* Cards Grid */}
      <section
        aria-label="Places list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {PLACES.map((p) => (
          <LocaleLink
            key={p.slug}
            href={`/interesting-places-in-cuba/${p.slug}`}
            className={[
              // reference style: yellow/black, link-like cards
              "group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm",
              "hover:border-black hover:shadow-md transition",
              "dark:bg-neutral-900 dark:border-white/10 dark:hover:border-yellow-400",
            ].join(" ")}
            aria-label={`Open details: ${p.name}`}
          >
            {/* Image */}
            <div className="relative h-40 w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
              {/* Tag */}
              <div className="pointer-events-none absolute left-3 top-3">
                <span className="inline-flex rounded-full bg-yellow-400 px-2 py-0.5 text-[11px] font-semibold text-black shadow">
                  Featured
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                {p.name}
              </h2>
              <p className="mt-1 line-clamp-3 text-sm text-neutral-700 dark:text-neutral-300">
                {p.description}
              </p>

              {/* Minimal CTA */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-yellow-300 text-[10px] group-hover:bg-yellow-400 group-hover:text-black transition">
                  ⇲
                </span>
                <span className="underline decoration-yellow-400 group-hover:decoration-black">
                  View details
                </span>
              </div>
            </div>

            {/* Animated yellow underline */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </LocaleLink>
        ))}
      </section>
    </main>
  );
}
