// app/blog/taxi-cuba-2025/page.tsx
import Image from "next/image";
import Script from "next/script";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../../locales";
import { LocaleParams } from "@/types/common";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  // Si ya usas tu builder, mantenlo
  return (idioma.metadata.blog?.howMuchIsATaxiInCuba ?? {}) as Metadata;
}

// util: fecha visible
function formatUpdatedDate(d = new Date()) {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", opts).format(d);
}

export default async function BlogTaxiCuba({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const t = getTranslation(lang);
  const updatedAt = formatUpdatedDate();

  // Tamaños de la imagen destacada (optimiza bytes por viewport)
  const heroSizes = "(min-width: 1024px) 900px, 100vw";

  return (
    <main className="relative">
      {/* fondo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b " />

      {/* migas */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 pt-6">
        <ol className="flex items-center gap-1 text-xs">
          <li><a href="/" className="text-primary hover:text-accent hover:underline" prefetch-data="false">Home</a></li>
          <li aria-hidden="true" className="text-primary">›</li>
          <li><a href="/blog" className="text-primary hover:text-accent hover:underline" prefetch-data="false">Blog</a></li>
          <li aria-hidden="true" className="text-primary">›</li>
          <li className="text-primary">Taxi prices in Cuba 2025</li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-4 pb-4 pt-10 sm:pt-14">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            2025 Prices
          </span>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Private transfers
          </span>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            English-speaking drivers
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
          How much does a taxi cost in Cuba in 2025?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-primary">
          Updated guide to <strong className="text-accent font-bold">Cuba taxi prices</strong> and airport transfers. See real costs
          from <strong className="text-accent font-bold">Havana (HAV / José Martí)</strong> and <strong className="text-accent font-bold">Varadero (VRA)</strong> to
          Varadero, Viñales, Trinidad, Cienfuegos and more. Fixed rates per car, not per person.
        </p>

        <div className="mt-6">
          <LocaleLink
            href="/cuba-taxi-booking"
            prefetch={false}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-accent/50 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            Book a private transfer
          </LocaleLink>
          <a
            href="#prices"
            className="ml-3 inline-flex items-center justify-center rounded-lg border border-primary/30 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/5"
          >
            View price table
          </a>
          <p className="mt-2 text-xs text-primary/80">
            Updated {updatedAt} · Prices per car (classic/modern or minivan)
          </p>
        </div>
      </header>

      {/* imagen destacada */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
          <Image
            src="/cuba-cabs.jpg"
            alt="Classic taxi in Havana, Cuba"
            width={900}
            height={630}
            sizes={heroSizes}
            priority
            fetchPriority="high"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* VALOR */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Transparent pricing",
              desc: "Confirmed quotes for airports and intercity routes. No hidden fees.",
            },
            {
              title: "Right vehicle for you",
              desc: "Classic cars for city tours or comfortable minivans for families.",
            },
            {
              title: "Pick-ups you can trust",
              desc: "English-speaking drivers and flight monitoring for airport arrivals.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-accent">{c.title}</h3>
              <p className="mt-1 text-sm text-primary">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABLA DE PRECIOS */}
      <section id="prices" className="mx-auto max-w-5xl px-4">
        <h2 className="mt-12 text-xl font-bold text-accent">Taxi prices in Cuba by route (2025)</h2>
        <p className="mt-1 text-sm text-primary">
          Prices are per car (private service). Final quote depends on car type (classic/modern or
          minivan), pick-up point, night supplements and optional stops.
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0.5 text-sm">
              <thead>
                <tr className="text-left text-primary">
                  <th className="px-4 py-3 font-bold text-accent">Route</th>
                  <th className="px-4 py-3 font-bold text-accent">Classic / Modern</th>
                  <th className="px-4 py-3 font-bold text-accent">Minivan</th>
                  <th className="px-4 py-3 font-bold text-accent">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { r: "Havana Airport (HAV) → Downtown", c: "$30",  m: "$55",  n: "Typical arrival transfer" },
                  { r: "Havana → Varadero",                c: "$100", m: "$180", n: "Same-day return available" },
                  { r: "Havana → Viñales",                 c: "$130", m: "$200", n: "Round-trip on request" },
                  { r: "Havana → Trinidad",                c: "$250", m: "$320", n: "Via Cienfuegos optional" },
                  { r: "Varadero → Cienfuegos",            c: "$120", m: "$205", n: "" },
                  { r: "Varadero → Trinidad",              c: "$250", m: "$270", n: "" },
                  { r: "Varadero Airport (VRA) → Hotels",  c: "$40",  m: "$60–70", n: "" },
                ].map((row, i) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-medium text-primary">{row.r}</td>
                    <td className="px-4 py-3 text-primary">{row.c}</td>
                    <td className="px-4 py-3 text-primary">{row.m}</td>
                    <td className="px-4 py-3 text-primary/80">{row.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-primary/10 px-4 py-3 text-xs text-primary/80">
            Prices may vary for pick-ups far from Havana’s KM-0 (Capitolio) and for night hours.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary shadow-sm sm:flex-row sm:items-center">
          <span>Need a different route or a classic convertible for a city tour?</span>
          <div className="flex gap-3">
            <LocaleLink
              href="/cuba-taxi-booking"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Get a quote
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* TIPS SEO */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mt-12 text-lg font-bold text-accent">What affects the price?</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-primary sm:grid-cols-2">
          <li>Distance and travel time between cities</li>
          <li>Vehicle type: classic/modern car or minivan</li>
          <li>Day vs. night pick-ups, airport parking and waiting time</li>
          <li>Private vs. shared transfer and optional sightseeing stops</li>
        </ul>

        <h2 className="mt-10 text-lg font-bold text-accent">Tips for tourists</h2>
        <p className="mt-2 text-sm text-primary">
          Book in advance to lock a fixed fare and share your flight number for airport pick-ups.
          Private transfers are the most convenient and safe option. You can{" "}
          <LocaleLink href="/private-transfer-booking" prefetch={false} className="font-bold text-accent underline-offset-2 hover:underline">
            book your taxi online
          </LocaleLink>{" "}
          and pay on arrival.
        </p>
      </section>

      {/* JSON-LD Article */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Taxi prices in Cuba 2025",
            description:
              "Updated taxi fares and transfer guide for Cuba in 2025. Havana (HAV) and Varadero (VRA) airport transfers, plus intercity routes.",
            author: { "@type": "Organization", name: "Cuban Taxis" },
            publisher: {
              "@type": "Organization",
              name: "Cuban Taxis",
              logo: { "@type": "ImageObject", url: "https://cubantaxis.com/logo.png" },
            },
            image: "https://cubantaxis.com/cuba-cabs.jpg",
            mainEntityOfPage: "https://cubantaxis.com/blog/taxi-cuba-2025",
          }),
        }}
      />
    </main>
  );
}
