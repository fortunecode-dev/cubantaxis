// app/[lang]/taxi-in-cuba/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import PriceTable from "@/components/PriceTable";
import TrustBlock from "@/components/TrustBlock";
import { buildAlternates, Locale } from "../../../seoUtils/seo-builder";

type Params = {
  params: Promise<{
    lang: "en" | "es"
    | "fr"
    | "de"
    | "ru"
    | "pt"
  }>
};

// Helpers
function t(lang: "en" | "es"
  | "fr"
  | "de"
  | "ru"
  | "pt", en: string, es: string) {
  return lang === "es" ? es : en;
}
function formatUpdatedDate(d = new Date(), lang: "en" | "es"
  | "fr"
  | "de"
  | "ru"
  | "pt" = "en") {
  const locale = lang === "es" ? "es-ES" : "en-US";
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat(locale, opts).format(d);
}

// --- METADATA ---
// Nota: usamos canonical autoconsistente y un único esquema de hreflang (genérico por idioma)
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params;
  const  slugNoLang =  `/taxi-in-cuba`;
  const { canonicalNeutral, languages, canonicalFor } = buildAlternates(slugNoLang);

  const title =
    lang === "es"
      ? "Taxi en Cuba 2025 | Precio, Reservas, Transfer de Aeropuerto"
      : "Taxi in Cuba 2025 | Prices, Booking & Transfers (HAV & VRA)";

  const description =
    lang === "es"
      ? "Guía 2025 de taxis en Cuba: precios fijos, taxis privados/compartidos y traslados de aeropuerto desde La Habana (HAV) y Varadero (VRA). Reserva rápida."
      : "2025 Cuba taxi guide: fixed prices, private/shared rides, and airport transfers from Havana (HAV) & Varadero (VRA). Fast booking.";

  const ogImage = `${base}/og/cubantaxis-1200x630.jpg`; // Asegúrate de que exista 1200×630

  return {
    title,
    description,
    icons: "icon.ico",
  
   alternates: {
      canonical: canonicalNeutral, // canónica = neutra
      languages,                   // incluye en + x-default = neutra
    },
    openGraph: {
      url:canonicalNeutral,
      type: "article",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Classic taxi in Havana, Cuba" }],
      locale: lang === "es" ? "es_ES" : "en_US",
      siteName: "CubanTaxis",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// --- PAGE ---
export default async function CubaTaxiPage({ params }: Params) {
  const { lang } = await params;
  const updatedHuman = formatUpdatedDate(new Date(), lang);

  return (
    <main className="relative">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black" />

      {/* HERO */}
      <section className="px-4">
        <div className="mx-auto max-w-5xl pb-6 pt-12 sm:pt-16">
          {/* Chips */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              {t(lang, "2025 Guide", "Guía 2025")}
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              {t(lang, "English-speaking drivers", "Conductores que hablan inglés")}
            </span>
            <span className="inline-flex items-center rounded-full border border-sky-300 bg-sky-100/60 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              {t(lang, "Classic cars & minivans", "Autos clásicos y minivanes")}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t(
              lang,
              "Taxi in Cuba 2025: Prices, Booking & Airport Transfers",
              "Taxi en Cuba 2025: Precios, Reservas y Traslados de Aeropuerto"
            )}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
            {t(
              lang,
              `Planning your trip to Cuba? Discover reliable taxi services with updated 2025 prices. Book transfers from Havana (HAV / José Martí) and Varadero (VRA) to top destinations like Varadero, Viñales, Trinidad and Cienfuegos. Choose private taxis, classic cars or minivans.`,
              `¿Planeas tu viaje a Cuba? Descubre taxis fiables con precios 2025 actualizados. Reserva traslados desde La Habana (HAV / José Martí) y Varadero (VRA) hacia destinos como Varadero, Viñales, Trinidad y Cienfuegos. Elige taxis privados, autos clásicos o minivanes.`
            )}
          </p>

          {/* Airport chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["HAV", "MUHA", "VRA", t(lang, "Old Havana", "La Habana Vieja")].map((chip) => (
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
            <a
              href="/#frequently-asked-questions"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-light underline text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              {t(lang, "Frequently Asked Questions", "Preguntas frecuentes")}
            </a>
            <Link
              href={`/${lang}/private-transfer-booking`}
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {t(lang, "Book a private transfer", "Reservar traslado privado")}
            </Link>
            <a
              href="#popular-routes"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              {t(lang, "See popular routes", "Ver rutas populares")}
            </a>
          </div>

          {/* Meta line */}
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            {t(lang, "Updated", "Actualizado")} {updatedHuman} · {t(lang, "Reading time", "Tiempo de lectura")}: 5–7 min
          </p>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: t(lang, "Fixed, transparent pricing", "Precios fijos y transparentes"),
              desc: t(
                lang,
                "No hidden fees. Confirmed prices for airport pick-ups and intercity routes.",
                "Sin tarifas ocultas. Precios confirmados para aeropuertos y rutas interurbanas."
              ),
            },
            {
              title: t(lang, "English-speaking drivers", "Conductores que hablan inglés"),
              desc: t(
                lang,
                "Professional drivers who know the best routes and must-see stops.",
                "Conductores profesionales que conocen las mejores rutas y paradas clave."
              ),
            },
            {
              title: t(lang, "Classic cars & minivans", "Autos clásicos y minivanes"),
              desc: t(
                lang,
                "Vintage city tours or comfy minivans for families and groups.",
                "City tours en autos clásicos o minivanes cómodas para familias y grupos."
              ),
            },
          ].map((c) => (
            <div
              key={c.title as string}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section id="popular-routes" className="px-4 pt-4">
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/60">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t(lang, "Popular routes", "Rutas populares")}
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {t(
              lang,
              "Frequently booked transfers from HAV (José Martí) and VRA (Varadero) airports:",
              "Traslados más reservados desde los aeropuertos HAV (José Martí) y VRA (Varadero):"
            )}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              t(lang, "Havana Airport → Varadero (hotel zones)", "Aeropuerto La Habana → Varadero (zonas hoteleras)"),
              t(lang, "Havana → Viñales (round-trip available)", "La Habana → Viñales (ida y vuelta disponible)"),
              t(lang, "Havana → Trinidad (via Cienfuegos optional)", "La Habana → Trinidad (opción vía Cienfuegos)"),
              t(lang, "Varadero → Havana (same-day return)", "Varadero → La Habana (regreso el mismo día)"),
              t(lang, "Varadero → Trinidad", "Varadero → Trinidad"),
              t(lang, "Havana City Tour in classic car", "City Tour en La Habana en auto clásico"),
            ].map((r) => (
              <div
                key={r}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900"
              >
                <svg className="mt-0.5 h-5 w-5 flex-none text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172 7.707 9.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-800 dark:text-gray-200">{r}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t(
                lang,
                "Looking for a different route? We also cover Cienfuegos, Santa Clara, Cayo Santa María, Cayo Coco, and more.",
                "¿Buscas otra ruta? También cubrimos Cienfuegos, Santa Clara, Cayo Santa María, Cayo Coco y más."
              )}
            </p>
            <Link
              href={`/${lang}/cuba-taxi-booking`}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              {t(lang, "Get a quote", "Solicitar precio")}
            </Link>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section id="prices" className="px-4">
        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t(lang, "Popular routes & prices", "Rutas populares y precios")}
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {t(
              lang,
              "Indicative fares for the most requested transfers. Ask for a fixed quote before booking.",
              "Tarifas indicativas para los traslados más solicitados. Pide un precio cerrado antes de reservar."
            )}
          </p>
          <div className="mt-4">
            <PriceTable lang={lang} />
          </div>
        </div>
      </section>

      {/* <section className="px-4">
        <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="group rounded-2xl border border-black/10 p-5 hover:border-black/30 hover:shadow-[0_6px_0_0_#000] transition-all">
            <h3 className="font-semibold text-lg">
              HAV – {t(lang, "José Martí (Havana)", "José Martí (La Habana)")}
            </h3>
            <p className="text-sm opacity-80 mt-1">
              {t(lang, "Direct pickups with meet & greet.", "Recogidas directas con meet & greet.")}
            </p>
            <Link
              className="inline-flex items-center gap-1 mt-3 underline decoration-yellow-400/60 underline-offset-2 group-hover:translate-x-0.5 transition-transform"
              href={`/${lang}/havana/airport-transfers`}
            >
              {t(lang, "See Havana transfers", "Ver traslados en La Habana")} →
            </Link>
          </div>

          <div className="group rounded-2xl border border-black/10 p-5 hover:border-black/30 hover:shadow-[0_6px_0_0_#000] transition-all">
            <h3 className="font-semibold text-lg">VRA – Varadero</h3>
            <p className="text-sm opacity-80 mt-1">
              {t(lang, "Reliable transfers to/from VRA.", "Traslados confiables desde/hacia VRA.")}
            </p>
            <Link
              className="inline-flex items-center gap-1 mt-3 underline decoration-yellow-400/60 underline-offset-2 group-hover:translate-x-0.5 transition-transform"
              href={`/${lang}/varadero/airport-transfers`}
            >
              {t(lang, "See Varadero transfers", "Ver traslados en Varadero")} →
            </Link>
          </div>
        </div>
      </section> */}

      {/* TRUST / REVIEWS */}
      <section className="mt-12 px-4">
        <div className="mx-auto max-w-5xl">
          <TrustBlock lang={lang} />
        </div>
      </section>

      {/* INTERNAL LINKS
      <nav className="mt-10 px-4 text-sm">
        <ul className="mx-auto max-w-5xl list-disc space-y-1 pl-6">
          <li>
            <Link
              href={`/how-much-is-a-taxi-in-cuba`}
              className="underline decoration-yellow-400/60 underline-offset-2 hover:decoration-yellow-400 transition-colors"
            >
              {t(lang, "Planning your trip? See our Cuba taxi guide.", "¿Planeas tu viaje? Mira nuestra guía de taxi en Cuba.")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/blog/taxi-cuba-2025`}
              className="underline decoration-yellow-400/60 underline-offset-2 hover:decoration-yellow-400 transition-colors"
            >
              {t(lang, "Taxi prices in Cuba (2025)", "Precios de taxi en Cuba (2025)")}
            </Link>
          </li>
        </ul>
      </nav> */}

      {/* --- JSON-LD (Breadcrumb + FAQ + Service) --- */}
      <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t(lang, "Home", "Inicio"), item: `https://cubantaxis.com/${lang}/` },
            { "@type": "ListItem", position: 2, name: t(lang, "Taxi in Cuba", "Taxi en Cuba"), item: `https://cubantaxis.com/${lang}/taxi-in-cuba` },
          ],
        })}
      </Script>

      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: t(lang, "How much is a taxi in Cuba in 2025?", "¿Cuánto cuesta un taxi en Cuba en 2025?"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t(
                  lang,
                  "Private transfers typically range by distance (e.g., Havana–Varadero has a fixed quote). Ask for a final price before booking.",
                  "Los traslados privados varían según la distancia (por ej., La Habana–Varadero tiene precio cerrado). Solicita precio final antes de reservar."
                ),
              },
            },
            {
              "@type": "Question",
              name: t(lang, "Do you provide airport taxis from HAV and VRA?", "¿Ofrecen taxis de aeropuerto desde HAV y VRA?"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t(
                  lang,
                  "Yes, direct pickups from Havana (HAV) and Varadero (VRA) with meet-and-greet, English-speaking drivers, and fixed prices.",
                  "Sí, recogidas directas desde La Habana (HAV) y Varadero (VRA) con meet-and-greet, conductores que hablan inglés y precios fijos."
                ),
              },
            },
          ],
        })}
      </Script>

      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "CubanTaxis",
          areaServed: "Cuba",
          url: `https://cubantaxis.com/${lang}/taxi-in-cuba`,
          availableLanguage: ["en", "es"
            , "fr"
            , "de"
            , "ru"
            , "pt"],
          priceRange: "$$",
        })}
      </Script>
    </main>
  );
}
