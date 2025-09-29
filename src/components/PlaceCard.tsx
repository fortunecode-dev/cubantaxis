// components/PlaceSEOCard.tsx — Server Component
// - Encabezados rojos (text-accent), textos azules (text-primary)
// - Sin next/head, sin hooks, sin estado
// - CTAs de booking
// - JSON-LD embebido

import Image from "next/image";
import Link from "next/link";

type HreflangMap = Record<string, string>;

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  robots?: string;
  siteName?: string;
  locale?: string;
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
type OpeningHours = string[];

type PlaceProps = {
  name: string;
  alternateName?: string;
  image: string;
  images?: string[];
  description: string;
  address?: Address;
  phone?: string;
  email?: string;
  website?: string;
  ratingValue?: number;
  reviewCount?: number;
  geo?: Geo;
  openingHours?: OpeningHours;
};

type ServiceItem = {
  class: string;
  icon: string;
  name: string;
  description?: string;
};

type Breadcrumb = { name: string; item: string };
type SchemaKind = "Place" | "LocalBusiness" | "TouristAttraction";

type Props = {
  seo: SEOProps;
  place: PlaceProps;
  services: ServiceItem[];
  breadcrumbs?: Breadcrumb[];
  schemaType?: SchemaKind;
  faq?: { question: string; answer: string }[];
  className?: string;
  lang?: "en" | "es" | "fr" | "de" | "ru" | "pt" | (string & {});
  ctaText?: {
    customBooking?: string; // "Book your trip in advance"
    fastBooking?: string;   // "Quick Booking"
  };
};

function groupByClass(items: ServiceItem[]) {
  const map = new Map<string, ServiceItem[]>();
  for (const it of items) {
    const key = it.class || "other";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(it);
  }
  return Array.from(map.entries()).map(([klass, list]) => ({ klass, list }));
}

function EmojiIcon({ name }: { name: string }) {
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

// ---- JSON-LD builders (sin hooks) ----
function buildPlaceJsonLd(place: PlaceProps, schemaType: SchemaKind = "Place") {
  if (!place.name?.trim()) {
    throw new Error("PlaceSEOCard: place.name es obligatorio para schema.org");
  }
  const base: any = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: place.name,
    description: place.description,
    image: [place.image, ...(place.images ?? [])].filter(Boolean),
  };
  if (place.alternateName) base.alternateName = place.alternateName;
  if (place.website) base.url = place.website;
  if (place.address) base.address = { "@type": "PostalAddress", ...place.address };
  if (place.phone) base.telephone = place.phone;
  if (place.email) base.email = place.email;
  if (place.geo) base.geo = { "@type": "GeoCoordinates", latitude: place.geo.latitude, longitude: place.geo.longitude };
  if (place.openingHours?.length) base.openingHours = place.openingHours;
  if (place.ratingValue && place.reviewCount) {
    base.aggregateRating = { "@type": "AggregateRating", ratingValue: place.ratingValue, reviewCount: place.reviewCount };
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

function buildFAQJsonLd(faq?: { question: string; answer: string }[]) {
  if (!faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

const BLUR_1x1 = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

export default function PlaceSEOCard({
  seo,
  place,
  services,
  breadcrumbs,
  schemaType = "Place",
  faq,
  className,
  lang = "en",
  ctaText = {
    customBooking: "Book your trip in advance",
    fastBooking: "Quick Booking",
  },
}: Props) {
  // Rutas CTA (idénticas a tu Hero)
  const base = ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const bookingHref = `${base}/private-transfer-booking`;
  const quickBookingHref = `${base}/cuba-taxi-booking`;

  // JSON-LD
  const placeLd = buildPlaceJsonLd(place, schemaType);
  const bcLd = buildBreadcrumbsJsonLd(breadcrumbs);
  const faqLd = buildFAQJsonLd(faq);
  const bookingLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "CubanTaxis — Private transfers in Cuba",
    areaServed: "Cuba",
    availableLanguage: ["es", "en", "fr", "de", "ru", "pt"],
    potentialAction: [
      { "@type": "ReserveAction", name: ctaText.customBooking, target: bookingHref },
      { "@type": "ReserveAction", name: ctaText.fastBooking, target: quickBookingHref },
    ],
  };

  const grouped = groupByClass(services);

  return (
    <>
      {/* JSON-LD inline (Server Rendered) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeLd) }} />
      {bcLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcLd) }} />}
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingLd) }} />

      {/* CONTENEDOR PRINCIPAL CON ITEM SCOPE */}
      <article
        className={[
          "mx-auto mt-18 max-w-5xl rounded-2xl border border-primary/15 bg-white shadow-sm",
          className || "",
        ].join(" ")}
        itemScope
        itemType={`https://schema.org/${schemaType}`}
      >
        {/* TÍTULO DENTRO DEL ITEM SCOPE */}
        <header className="px-4 pb-0 pt-6 sm:px-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-accent sm:text-3xl">
            <span itemProp="name">{place.name}</span>
          </h1>
          {place.alternateName && (
            <p className="mt-1 text-sm text-primary/80" itemProp="alternateName">
              {place.alternateName}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          {/* Columna izquierda */}
          <div className="md:col-span-8 p-5 sm:p-8">
            {/* Imagen principal */}
            <div className="relative overflow-hidden rounded-xl border border-primary/15">
              <Image
                src={place.image}
                alt={place.name}
                width={1280}
                height={720}
                sizes="(min-width:1024px) 800px, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_1x1}
                className="h-56 w-full object-cover"
                priority
                itemProp="image"
              />
            </div>

            {/* Datos */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <address className="not-italic text-sm">
                <div className="mb-1 font-semibold text-accent">Address</div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  {place.address?.streetAddress && (
                    <div className="text-primary">
                      <span itemProp="streetAddress">{place.address.streetAddress}</span>
                    </div>
                  )}
                  <div className="text-primary/80">
                    {place.address?.addressLocality && (
                      <span itemProp="addressLocality">{place.address.addressLocality}</span>
                    )}
                    {place.address?.addressRegion && (
                      <span>
                        , <span itemProp="addressRegion">{place.address.addressRegion}</span>
                      </span>
                    )}
                    {place.address?.postalCode && <> {place.address.postalCode}</>}
                    {place.address?.addressCountry && (
                      <span>
                        , <span itemProp="addressCountry">{place.address.addressCountry}</span>
                      </span>
                    )}
                  </div>
                </div>
              </address>

              <ul className="space-y-1 text-sm">
                {place.phone && (
                  <li>
                    <span className="inline-flex items-center gap-2 text-primary">
                      <EmojiIcon name="phone" />
                      <a className="font-bold underline hover:no-underline" href={`tel:${place.phone}`} itemProp="telephone">
                        {place.phone}
                      </a>
                    </span>
                  </li>
                )}
                {place.email && (
                  <li>
                    <span className="inline-flex items-center gap-2 text-primary">
                      <EmojiIcon name="mail" />
                      <a className="font-bold underline hover:no-underline" href={`mailto:${place.email}`} itemProp="email">
                        {place.email}
                      </a>
                    </span>
                  </li>
                )}
                {place.website && (
                  <li>
                    <span className="inline-flex items-center gap-2 text-primary">
                      <EmojiIcon name="map" />
                      <a
                        className="font-bold underline hover:no-underline"
                        href={place.website}
                        itemProp="url"
                        rel="noopener"
                        target="_blank"
                      >
                        {place.website}
                      </a>
                    </span>
                  </li>
                )}
                {place.ratingValue && place.reviewCount && (
                  <li className="mt-1">
                    <span className="inline-flex items-center gap-2 text-primary">
                      <EmojiIcon name="star" />
                      <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                        <span itemProp="ratingValue" className="font-semibold">
                          {place.ratingValue}
                        </span>
                        /5 · <span itemProp="reviewCount">{place.reviewCount}</span> reviews
                      </span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Descripción */}
            <p className="mt-5 text-base leading-relaxed text-primary" itemProp="description">
              {place.description}
            </p>

            {/* CTAs de booking */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={bookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10"
                aria-label="Book your trip in advance"
              >
                {ctaText.customBooking}
              </Link>
              <Link
                href={quickBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                aria-label="Quick Booking"
              >
                {ctaText.fastBooking}
                <span className="-mr-1" aria-hidden>
                  »
                </span>
              </Link>
            </div>
          </div>

          {/* Sidebar servicios */}
          <aside className="border-t border-primary/15 p-5 md:col-span-4 md:border-l md:border-t-0 md:p-6">
            <div className="md:sticky md:top-4">
              <h2 className="text-base font-bold text-accent">Services</h2>
              {grouped.length > 0 ? (
                <div className="mt-3 space-y-5">
                  {grouped.map(({ klass, list }) => (
                    <div key={klass}>
                      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-primary/70">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        {klass}
                      </div>
                      <ul className="space-y-2">
                        {list.map((srv, idx) => (
                          <li
                            key={`${klass}-${idx}`}
                            className="rounded-md border border-primary/20 px-3 py-2 transition hover:bg-primary/5"
                          >
                            <div className="flex items-start gap-2">
                              <span className="translate-y-[1px] text-base leading-none">
                                <EmojiIcon name={srv.icon} />
                              </span>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-primary">{srv.name}</div>
                                {srv.description && (
                                  <p className="mt-0.5 line-clamp-3 text-xs text-primary/80">
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
                <p className="mt-2 text-sm text-primary/70">No services listed.</p>
              )}
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
