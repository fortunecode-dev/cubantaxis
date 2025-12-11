import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import PriceTable from "@/components/PriceTable";
import TrustBlock from "@/components/TrustBlock";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";
type Params = { params: Promise<{ lang: Lang }> };

// Helpers
function t(lang: Lang, en: string, es: string) {
  return lang === "es" ? es : en;
}

function formatUpdatedDate(d = new Date(), lang: Lang = "en") {
  const locale = lang === "es" ? "es-ES" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.taxiInCuba as any)
  return metadata
}

// --------------------------------------------------------------
//                         PAGE
// --------------------------------------------------------------
export default async function Page({ params }: Params) {
  const { lang } = await params;
  const updated = formatUpdatedDate(new Date(), lang);
  const prefix = lang === "en" ? "" : `/${lang}`;

  return (
    <main className="relative bg-white">
      {/* HERO */}
      <header className="mx-auto max-w-6xl px-4 pb-4 pt-10 sm:pt-14">

        {/* CHIPS */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-accent/10 text-accent font-semibold px-3 py-1 text-xs">
            {t(lang, "2025 Guide", "Guía 2025")}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary font-medium px-3 py-1 text-xs">
            {t(lang, "English-speaking drivers", "Conductores que hablan inglés")}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary font-medium px-3 py-1 text-xs">
            {t(lang, "Classic cars & minivans", "Autos clásicos y minivanes")}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-accent">
          {t(
            lang,
            "Taxi in Cuba 2025: Prices, Booking & Airport Transfers",
            "Taxi en Cuba 2025: Precios, Reservas y Traslados de Aeropuerto"
          )}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-primary">
          {t(
            lang,
            `Discover reliable taxi services in Cuba with updated 2025 prices. Book transfers from Havana (HAV / José Martí) and Varadero (VRA) to popular destinations such as Varadero, Viñales, Trinidad and Cienfuegos.`,
            `Descubre taxis fiables en Cuba con precios 2025 actualizados. Reserva traslados desde La Habana (HAV / José Martí) y Varadero (VRA) hacia destinos como Varadero, Viñales, Trinidad y Cienfuegos.`
          )}
        </p>

        {/* AIRPORT CHIPS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["HAV", "MUHA", "VRA", t(lang, "Old Havana", "La Habana Vieja")].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href={`${prefix}/private-transfer-booking`}
            prefetch={false}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
          >
            {t(lang, "Book a private transfer", "Reservar traslado privado")}
          </Link>

          <a
            href="#popular-routes"
            className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary px-5 py-3 text-sm font-semibold shadow-sm hover:bg-primary/15 transition"
          >
            {t(lang, "See popular routes", "Ver rutas populares")}
          </a>
        </div>

        {/* META LINE */}
        <p className="mt-4 text-xs text-primary/60">
          {t(lang, "Updated", "Actualizado")} {updated} • {t(lang, "Reading time", "Tiempo de lectura")}: 5–7 min
        </p>
      </header>

      {/* VALUE CARDS */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: t(lang, "Fixed, transparent pricing", "Precios fijos y transparentes"),
              desc: t(lang,
                "No hidden fees. Confirmed prices for airport pick-ups and intercity routes.",
                "Sin tarifas ocultas. Precios confirmados para aeropuertos y rutas interurbanas."
              )
            },
            {
              title: t(lang, "English-speaking drivers", "Conductores que hablan inglés"),
              desc: t(lang,
                "Professional drivers who know the best routes and must-see stops.",
                "Conductores profesionales que conocen las mejores rutas y paradas clave."
              )
            },
            {
              title: t(lang, "Classic cars & minivans", "Autos clásicos y minivanes"),
              desc: t(lang,
                "Vintage city tours or comfy minivans for families and groups.",
                "City tours en autos clásicos o minivanes cómodas para familias y grupos."
              )
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-base font-bold text-accent">{item.title}</h2>
              <p className="mt-1 text-sm text-primary/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section id="popular-routes" className="mx-auto max-w-6xl px-4 pt-16">
        <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-accent">
            {t(lang, "Popular routes", "Rutas populares")}
          </h2>

          <p className="mt-1 text-sm text-primary/80">
            {t(
              lang,
              "Frequently booked transfers from Havana (HAV) and Varadero (VRA).",
              "Traslados más reservados desde La Habana (HAV) y Varadero (VRA)."
            )}
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              t(lang, "Havana Airport → Varadero (hotel zones)", "Aeropuerto La Habana → Varadero (zonas hoteleras)"),
              t(lang, "Havana → Viñales (round-trip available)", "La Habana → Viñales (ida y vuelta disponible)"),
              t(lang, "Havana → Trinidad (via Cienfuegos optional)", "La Habana → Trinidad (opción vía Cienfuegos)"),
              t(lang, "Varadero → Havana (same-day return)", "Varadero → La Habana (regreso el mismo día)"),
              t(lang, "Varadero → Trinidad", "Varadero → Trinidad"),
              t(lang, "Havana City Tour in classic car", "City Tour en La Habana en auto clásico"),
            ].map((route) => (
              <div
                key={route}
                className="flex items-start gap-3 rounded-xl border border-primary/10 bg-white p-4 shadow-sm"
              >
                <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  ✓
                </div>
                <span className="text-sm text-primary">{route}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-primary/60 max-w-md">
              {t(
                lang,
                "We also cover Cienfuegos, Santa Clara, Cayo Santa María, Cayo Coco, and more.",
                "También cubrimos Cienfuegos, Santa Clara, Cayo Santa María, Cayo Coco y más."
              )}
            </p>

            <Link
              href={`${prefix}/cuba-taxi-booking`}
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:opacity-95"
            >
              {t(lang, "Get a quote", "Solicitar precio")}
            </Link>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section id="prices" className="mx-auto max-w-6xl px-4 pt-16">
        <h2 className="text-xl font-bold text-accent">
          {t(lang, "Popular routes & prices", "Rutas populares y precios")}
        </h2>
        <p className="mt-1 text-sm text-primary/80">
          {t(
            lang,
            "Indicative fares for the most requested transfers.",
            "Tarifas indicativas para los traslados más solicitados."
          )}
        </p>

        <div className="mt-4">
          <PriceTable lang={lang} />
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20">
        <TrustBlock lang={lang} />
      </section>
    </main>
  );
}
