// components/DestinationGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { LocaleLink } from "@/libs/i18n-nav";

type Destination = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  short: string;
  long: string;
  tags?: string[];
};

export function DestinationsGrid({
  items,
  lang = "en",
}: {
  items: Destination[];
  lang?: string;
}) {
  const cardSizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw";
  const BLUR_1x1 = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

  // rutas de booking (como en Hero)
  const base =
    ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const bookingHref = `${base}/private-transfer-booking`;
  const quickBookingHref = `${base}/cuba-taxi-booking`;

  const cta = {
    customBooking: "Book your trip in advance",
    fastBooking: "Quick Booking",
  };

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7"
      role="list"
      aria-label="Destination cards"
    >
      {items.map((d) => (
        <article
          key={d.slug}
          id={d.slug}
          role="listitem"
          className="group overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm transition hover:shadow-md"
        >
          {/* Imagen */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={d.image}
              alt={d.alt}
              fill
              sizes={cardSizes}
              placeholder="blur"
              blurDataURL={BLUR_1x1}
              decoding="async"
              fetchPriority="low"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
            {/* Tags */}
            {d.tags?.length ? (
              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium text-primary shadow-sm ring-1 ring-primary/20 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {/* Cuerpo */}
          <div className="p-4 sm:p-5">
            <h2 className="text-lg font-bold tracking-tight text-accent sm:text-xl">
              {d.title}
            </h2>

            <p className="mt-2 text-sm text-primary">{d.short}</p>

            {/* Descripción plegable */}
            <details className="mt-3 rounded-xl border border-primary/15 bg-primary/5 p-3 text-sm leading-relaxed text-primary [&[open]>summary>svg]:rotate-180">
              <summary className="flex cursor-pointer select-none list-none items-center justify-between font-bold text-accent outline-none [&::-webkit-details-marker]:hidden">
                <span>Read more</span>
                <svg
                  className="ml-2 h-4 w-4 shrink-0 text-accent transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-2">{d.long}</div>
            </details>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={bookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10"
                aria-label="Book your trip in advance"
              >
                {cta.customBooking}
              </Link>
              <Link
                href={quickBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                aria-label="Quick Booking"
              >
                {cta.fastBooking}
                <span className="-mr-1" aria-hidden>
                  »
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
