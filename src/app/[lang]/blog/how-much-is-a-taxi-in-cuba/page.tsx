// app/blog/taxi-cuba-2025/page.tsx
import Image from "next/image";
import Script from "next/script";
import { LocaleLink } from "@/libs/i18n-nav"; // si no lo usas, elimina esta import
import { getTranslation } from "../../locales";
import { LocaleParams } from "@/types/common";

export const metadata = {
  title: "How much does a taxi cost in Cuba in 2025? 🚖 Prices & Travel Guide",
  description:
    "Updated taxi prices in Cuba for 2025. Find out how much taxis cost from Havana Airport, Varadero, Viñales, Trinidad, and more. Safe transfer guide for tourists.",
  keywords: [
    "Taxi Cuba 2025",
    "Cuba taxi prices",
    "Havana airport taxi cost",
    "Varadero taxi 2025",
    "Taxi Havana Trinidad",
    "Cuba private transfers",
    "Taxi guide Cuba"
  ],
    icons:"icon.ico",

  openGraph: {
    title: "Taxi Prices in Cuba 2025 | Havana, Varadero, Viñales, Trinidad",
    description:
      "Full guide to taxi fares in Cuba 2025. Check updated costs for routes from Havana to Varadero, Viñales, Trinidad and more.",
    url: "https://cubantaxis.com/blog/taxi-cuba-2025",
    siteName: "Taxi Cuba Blog",
    images: [
      {
        url: "/cuba-cabs.jpg",
        width: 1200,
        height: 630,
        alt: "Classic taxi in Havana, Cuba",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Prices in Cuba 2025 | Havana, Varadero, Viñales, Trinidad",
    description:
      "Full guide to taxi fares in Cuba 2025. Check updated costs for routes from Havana to Varadero, Viñales, Trinidad and more.",
    images: ["/cuba-cabs.jpg"],
  },
};

function formatUpdatedDate(d = new Date()) {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", opts).format(d);
}

export default async function BlogTaxiCuba({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const t = getTranslation(lang);
  const updatedAt = formatUpdatedDate();

  return (
    <main className="relative">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black" />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 pt-6">
        <ol className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li aria-hidden="true">›</li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-800 dark:text-gray-200">Taxi prices in Cuba 2025</li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-4 pb-4 pt-10 sm:pt-14">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
            2025 Prices
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            Private transfers
          </span>
          <span className="inline-flex items-center rounded-full border border-sky-300 bg-sky-100/60 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
            English‑speaking drivers
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          How much does a taxi cost in Cuba in 2025?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
          Updated guide to <strong>Cuba taxi prices</strong> and airport transfers. See real costs
          from <strong>Havana (HAV / José Martí)</strong> and <strong>Varadero (VRA)</strong> to
          Varadero, Viñales, Trinidad, Cienfuegos and more. Fixed rates per car, not per person.
        </p>

        <div className="mt-6">
          <LocaleLink
            href="/cuba-taxi-booking"
            className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Book a private transfer
          </LocaleLink>
          <a
            href="#prices"
            className="ml-3 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
          >
            View price table
          </a>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Updated {updatedAt} · Prices per car (classic/modern or minivan)
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-white/10">
          <Image
            src="/cuba-cabs.jpg"
            alt="Classic taxi in Havana, Cuba"
            width={900}
            height={630}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* VALUE CARDS */}
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
              title: "Pick‑ups you can trust",
              desc: "English‑speaking drivers and flight monitoring for airport arrivals.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE TABLE */}
      <section id="prices" className="mx-auto max-w-5xl px-4">
        <h2 className="mt-12 text-xl font-bold text-gray-900 dark:text-white">
          Taxi prices in Cuba by route (2025)
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Prices are per car (private service). Final quote depends on car type (classic/modern or
          minivan), pick‑up point, night supplements and optional stops.
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0.5 text-sm">
              <thead>
                <tr className="text-left text-gray-600 dark:text-gray-300">
                  <th className="px-4 py-3">Route</th>
                  <th className="px-4 py-3">Classic / Modern</th>
                  <th className="px-4 py-3">Minivan</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    r: "Havana Airport (HAV) → Downtown",
                    c: "$30",
                    m: "$55",
                    n: "Typical arrival transfer",
                  },
                  {
                    r: "Havana → Varadero",
                    c: "$100",
                    m: "$180",
                    n: "Same‑day return available",
                  },
                  { r: "Havana → Viñales", c: "$130", m: "$200", n: "Round‑trip on request" },
                  { r: "Havana → Trinidad", c: "$250", m: "$320", n: "Via Cienfuegos optional" },
                  { r: "Varadero → Cienfuegos", c: "$120", m: "$205", n: "" },
                  { r: "Varadero → Trinidad", c: "$250", m: "$270", n: "" },
                  { r: "Varadero Airport (VRA) → Varadero hotels", c: "$40", m: "$60–70", n: "" },
                ].map((row, i) => (
                  <tr key={i} className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-100">{row.r}</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">{row.c}</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">{row.m}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{row.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 px-4 py-3 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
            Prices may vary for pick‑ups far from Havana’s KM‑0 (Capitolio) and for night hours.
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200 sm:flex-row sm:items-center">
          <span>Need a different route or a classic convertible for a city tour?</span>
          <div className="flex gap-3">
            <LocaleLink
              href="/cuba-taxi-booking"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Get a quote
            </LocaleLink>
            {/* <a
              href="/tours/havana"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              See Havana city tours
            </a> */}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS (SEO section) */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mt-12 text-lg font-semibold text-gray-900 dark:text-white">What affects the price?</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
          <li>Distance and travel time between cities</li>
          <li>Vehicle type: classic/modern car or minivan</li>
          <li>Day vs. night pick‑ups, airport parking and waiting time</li>
          <li>Private vs. shared transfer and optional sightseeing stops</li>
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white">Tips for tourists</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Book in advance to lock a fixed fare and share your flight number for airport pick‑ups.
          Private transfers are the most convenient and safe option. You can{" "}
          <LocaleLink href="/private-transfer-booking" className="font-medium underline hover:no-underline">
            book your taxi online
          </LocaleLink>{" "}
          and pay on arrival.
        </p>
      </section>

      {/* JSON‑LD Article */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
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
