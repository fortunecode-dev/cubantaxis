// app/places/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import { LocaleLink } from "@/libs/i18n-nav";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.interestingPlaces?.self as any)
  return metadata
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
      url: `https://cubantaxis.com/places/${p.slug}`,
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
    url: "https://cubantaxis.com/interesting-places-in-cuba",
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
export default async function PlacesPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  return (
    <main className="mx-auto max-w-6xl px-4">
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
            href={`${lang=="en"?"":`/${lang}`}/interesting-places-in-cuba/${p.slug}`}
            prefetch={false}
            className={[
              "group relative overflow-hidden rounded-2xl",
              "border border-primary/15 bg-white shadow-sm transition",
              "hover:border-primary/40 hover:shadow-md",
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
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              {/* Tag */}
              <div className="pointer-events-none absolute left-3 top-3">
                <span className="inline-flex rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                  Featured
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-base sm:text-lg font-bold text-accent">
                {p.name}
              </h2>
              <p className="mt-1 line-clamp-3 text-sm text-primary">
                {p.description}
              </p>

              {/* Minimal CTA (nuevo estilo) */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-[10px] transition group-hover:opacity-90">
                  ⇲
                </span>
                <span className="font-bold text-primary underline decoration-accent underline-offset-2 group-hover:text-accent">
                  View details
                </span>
              </div>
            </div>

            {/* Animated underline (accent) */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
          </LocaleLink>
        ))}

      </section>
    </main>
  );
}
