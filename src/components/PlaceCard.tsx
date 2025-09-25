"use client";

import Head from "next/head";
import Image from "next/image";
import { Fragment, useMemo } from "react";

/* ────────────────────────────
   Tipos de Props
────────────────────────────── */

type HreflangMap = Record<string, string>; // ej: { "en": "https://site.com/en/place", "es": "https://site.com/es/lugar" }

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  robots?: string; // ej: "index,follow"
  siteName?: string;
  locale?: string; // ej: "es_ES"
  ogImage?: string;
  ogType?: "website" | "article" | "place" | "business.business" | "profile";
  twitterCard?: "summary" | "summary_large_image";
  hreflangAlternates?: HreflangMap;
  noindex?: boolean;
};

type Address = {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

type Geo = { latitude: number; longitude: number };

type OpeningHours = string[]; // ej: ["Mo-Fr 09:00-18:00","Sa 10:00-14:00"]

type PlaceProps = {
  name: string;
  alternateName?: string;
  image: string; // URL principal
  images?: string[]; // adicionales
  description: string;
  address?: Address;
  phone?: string;
  email?: string;
  website?: string;
  ratingValue?: number; // 4.8
  reviewCount?: number; // 128
  geo?: Geo;
  openingHours?: OpeningHours;
};

type ServiceItem = {
  class: string;       // ej: "transfers", "excursions", "amenities"
  icon: string;        // ej: "car", "map", "wifi"
  name: string;        // ej: "Airport Transfer"
  description?: string;
};

type LinkItem = {
  label: string;
  href: string;
  rel?: string;
  target?: "_blank" | "_self";
};

type Breadcrumb = { name: string; item: string };

type SchemaKind = "Place" | "LocalBusiness" | "TouristAttraction";

type Props = {
  seo: SEOProps;
  place: PlaceProps;
  services: ServiceItem[];
  links: LinkItem[];
  breadcrumbs?: Breadcrumb[];
  schemaType?: SchemaKind;
  faq?: { question: string; answer: string }[]; // opcional: genera FAQPage
  className?: string;
};

/* ────────────────────────────
   Utilidad: agrupar servicios por clase
────────────────────────────── */

function groupByClass(items: ServiceItem[]) {
  const map = new Map<string, ServiceItem[]>();
  for (const it of items) {
    const key = it.class || "other";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(it);
  }
  return Array.from(map.entries()).map(([klass, list]) => ({ klass, list }));
}

/* ────────────────────────────
   JSON-LD builders
────────────────────────────── */

function buildPlaceJsonLd(
  place: PlaceProps,
  schemaType: SchemaKind = "Place"
) {
  const base: any = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: place.name,
    description: place.description,
    image: [place.image, ...(place.images ?? [])].filter(Boolean),
  };

  if (place.alternateName) base.alternateName = place.alternateName;
  if (place.website) base.url = place.website;

  if (place.address) {
    base.address = {
      "@type": "PostalAddress",
      ...place.address,
    };
  }

  if (place.phone) base.telephone = place.phone;
  if (place.email) base.email = place.email;

  if (place.geo) {
    base.geo = {
      "@type": "GeoCoordinates",
      latitude: place.geo.latitude,
      longitude: place.geo.longitude,
    };
  }

  if (place.openingHours?.length) {
    base.openingHours = place.openingHours;
  }

  if (place.ratingValue && place.reviewCount) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: place.ratingValue,
      reviewCount: place.reviewCount,
    };
  }

  return base;
}

function buildBreadcrumbsJsonLd(breadcrumbs?: Breadcrumb[]) {
  if (!breadcrumbs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.name,
      item: bc.item,
    })),
  };
}

function buildFAQJsonLd(
  faq?: { question: string; answer: string }[]
) {
  if (!faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/* ────────────────────────────
   Icono mínimo (si no usas librería)
────────────────────────────── */

function EmojiIcon({ name }: { name: string }) {
  // Mapea algunos nombres comunes a emojis (puedes cambiar a lucide-react si quieres)
  const dictionary: Record<string, string> = {
    car: "🚕",
    map: "🗺️",
    star: "⭐",
    wifi: "📶",
    phone: "📞",
    mail: "✉️",
    guide: "🧭",
    beach: "🏖️",
    museum: "🏛️",
    clock: "⏰",
    check: "✔️",
  };
  return <span aria-hidden="true">{dictionary[name] ?? "•"}</span>;
}

/* ────────────────────────────
   Componente principal (layout minimalista 2 columnas)
────────────────────────────── */

export default function PlaceSEOCard({
  seo,
  place,
  services,
  links,
  breadcrumbs,
  schemaType = "Place",
  faq,
  className,
}: Props) {
  const grouped = useMemo(() => groupByClass(services), [services]);

  // JSON-LD
  const placeLd = useMemo(() => buildPlaceJsonLd(place, schemaType), [place, schemaType]);
  const bcLd = useMemo(() => buildBreadcrumbsJsonLd(breadcrumbs), [breadcrumbs]);
  const faqLd = useMemo(() => buildFAQJsonLd(faq), [faq]);

  const noindex = seo.noindex || /noindex/i.test(seo.robots ?? "");

  return (
    <Fragment>
      {/* ─ Meta tags SEO ─ */}
      <Head>
        <title>{seo.title}</title>
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.keywords?.length ? (
          <meta name="keywords" content={seo.keywords.join(", ")} />
        ) : null}
        {seo.robots && <meta name="robots" content={seo.robots} />}
        {/* hreflang alternates */}
        {seo.hreflangAlternates &&
          Object.entries(seo.hreflangAlternates).map(([lang, href]) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={href} />
          ))}
        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content={seo.ogType ?? "place"} />
        {seo.siteName && <meta property="og:site_name" content={seo.siteName} />}
        {seo.locale && <meta property="og:locale" content={seo.locale} />}
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        {place.website && <meta property="og:url" content={place.website} />}
        {/* Twitter */}
        <meta name="twitter:card" content={seo.twitterCard ?? "summary_large_image"} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
        {/* Noindex hard (seguridad) */}
        {noindex && <meta name="googlebot" content="index,follow" />}
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeLd) }} />
        {bcLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcLd) }} />
        )}
        {faqLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}
      </Head>

      {/* ─ Título arriba ─ */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          <span itemProp="name">{place.name}</span>
        </h1>
        {place.alternateName && (
          <p className="mt-1 text-sm text-neutral-500" itemProp="alternateName">
            {place.alternateName}
          </p>
        )}
      </div>

      {/* ─ Contenido + Servicios (2 columnas) ─ */}
      <article
        className={[
          "mx-auto mt-4 max-w-5xl rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm",
          "dark:bg-neutral-900/70 dark:border-white/10",
          className
        ].join(" ")}
        itemScope
        itemType={`https://schema.org/${schemaType}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Columna izquierda: contenido */}
          <div className="md:col-span-8 p-5 sm:p-8">
            {/* Imagen hero simple (opcional) */}
            <div className="relative overflow-hidden rounded-xl border border-black/5">
              <Image
                src={place.image}
                alt={place.name}
                width={1280}
                height={720}
                className="h-56 w-full object-cover"
                priority
              />
            </div>

            {/* Meta info */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <address className="not-italic text-sm">
                <div className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">Dirección</div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  {place.address?.streetAddress && (
                    <div>
                      <span itemProp="streetAddress">{place.address.streetAddress}</span>
                    </div>
                  )}
                  <div className="text-neutral-600 dark:text-neutral-400">
                    {place.address?.addressLocality && (
                      <span itemProp="addressLocality">{place.address.addressLocality}</span>
                    )}
                    {place.address?.addressRegion && (
                      <span>, <span itemProp="addressRegion">{place.address.addressRegion}</span></span>
                    )}
                    {place.address?.postalCode && <> {place.address.postalCode}</>}
                    {place.address?.addressCountry && (
                      <span>, <span itemProp="addressCountry">{place.address.addressCountry}</span></span>
                    )}
                  </div>
                </div>
              </address>

              <ul className="text-sm space-y-1">
                {place.phone && (
                  <li>
                    <span className="inline-flex items-center gap-2">
                      <EmojiIcon name="phone" />
                      <a className="hover:underline" href={`tel:${place.phone}`} itemProp="telephone">
                        {place.phone}
                      </a>
                    </span>
                  </li>
                )}
                {place.email && (
                  <li>
                    <span className="inline-flex items-center gap-2">
                      <EmojiIcon name="mail" />
                      <a className="hover:underline" href={`mailto:${place.email}`} itemProp="email">
                        {place.email}
                      </a>
                    </span>
                  </li>
                )}
                {place.website && (
                  <li>
                    <span className="inline-flex items-center gap-2">
                      <EmojiIcon name="map" />
                      <a className="hover:underline" href={place.website} itemProp="url" rel="noopener" target="_blank">
                        {place.website}
                      </a>
                    </span>
                  </li>
                )}
                {place.ratingValue && place.reviewCount && (
                  <li className="mt-1">
                    <span className="inline-flex items-center gap-2">
                      <EmojiIcon name="star" />
                      <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                        <span itemProp="ratingValue" className="font-semibold">{place.ratingValue}</span>/5 ·{" "}
                        <span itemProp="reviewCount">{place.reviewCount}</span> reviews
                      </span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Descripción */}
            <p className="mt-5 text-base leading-relaxed text-neutral-800 dark:text-neutral-300" itemProp="description">
              {place.description}
            </p>

            {/* Links finales */}
            {links.length > 0 && (
              <div className="mt-6">
                <h2 className="text-base font-semibold">Enlaces útiles</h2>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {links.map((lk, i) => (
                    <li key={i}>
                      <a
                        href={lk.href}
                        rel={lk.rel}
                        target={lk.target ?? "_self"}
                        className="group inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 hover:border-black/40 transition"
                      >
                        
                        <span className=" group-hover:decoration-black">
                          {lk.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Columna derecha: servicios (sidebar minimalista) */}
          <aside className="md:col-span-4 p-5 md:p-6 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/10">
            <div className="md:sticky md:top-4">
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Servicios</h2>
              {grouped.length > 0 ? (
                <div className="mt-3 space-y-5">
                  {grouped.map(({ klass, list }) => (
                    <div key={klass}>
                      <div className="mb-2 text-xs uppercase tracking-wide text-neutral-500 flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
                        {klass}
                      </div>
                      <ul className="space-y-2">
                        {list.map((srv, idx) => (
                          <li
                            key={`${klass}-${idx}`}
                            className="rounded-md border border-black/10 px-3 py-2 hover:border-yellow-400/70 transition"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-base leading-none translate-y-[1px]">
                                <EmojiIcon name={srv.icon} />
                              </span>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                                  {srv.name}
                                </div>
                                {srv.description && (
                                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 line-clamp-3">
                                    {srv.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-neutral-500">Sin servicios listados.</p>
              )}
            </div>
          </aside>
        </div>
      </article>
    </Fragment>
  );
}
