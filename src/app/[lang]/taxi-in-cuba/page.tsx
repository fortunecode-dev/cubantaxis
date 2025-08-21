// app/blog/taxi-cuba-2025/page.tsx
import FaqSection from "@/components/Faqs";
import Script from "next/script";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";

export const metadata = {
  title: "Taxi in Cuba 2025 | Prices, Booking, Airport Transfers (HAV & VRA)",
  description:
    "Full 2025 guide to taxi services in Cuba. Check updated prices for transfers from Havana Airport (HAV) and Varadero Airport (VRA) to Varadero, Viñales, Trinidad, Cienfuegos and more. Book private taxis, classic cars, or minivans with reliable English-speaking drivers.",
  keywords: [
    "taxis Cuba",
    "cuban taxis",
    "urban taxi in Cuba",
    "cuba taxi",
    "cuba cab",
    "Havana International Airport",
    "MUHA airport",
    "Jose Marti International Airport",
    "HAV airport",
    "VRA airport",
    "Varadero airport",
    "Cuba excursions from Havana",
    "Cuba map",
    "taxi Havana Trinidad",
    "Havana to Varadero taxi",
    "Cuba private transfers",
    "taxi Cuba prices",
    "taxis en Cuba"
  ],
  openGraph: {
    title: "Taxi Prices in Cuba 2025 | Havana & Varadero Transfers",
    description:
      "Updated taxi fares in Cuba for 2025. Find transfers from Havana and Varadero airports to popular destinations including Viñales, Trinidad, Cienfuegos and Santa Clara. Reliable Cuban taxis, classic cars and minivans available.",
    url: "https://cubantaxis.com/blog/taxi-cuba-2025",
    siteName: "Cuban Taxis",
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
    title: "Taxi in Cuba 2025 | Prices, Booking & Airport Transfers",
    description:
      "Your complete 2025 guide to Cuban taxis. From Havana (HAV) and Varadero (VRA) airports to Varadero, Viñales, Trinidad, and more. Book reliable private transfers today.",
    images: ["/cuba-cabs.jpg"],
  },
};

function formatUpdatedDate(d = new Date()) {
  // server component: runs on server, safe to format
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", opts).format(d);
}

export default async function TaxiCubaPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  const updatedAt = formatUpdatedDate();

  return (
    <main className="relative">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black" />

      {/* HERO */}
      <section className="px-4">
        <div className="mx-auto max-w-5xl pb-6 pt-12 sm:pt-16">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              2025 Guide
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              English‑speaking drivers
            </span>
            <span className="inline-flex items-center rounded-full border border-sky-300 bg-sky-100/60 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              Classic cars & Minivans
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Taxi in Cuba 2025: Prices, Booking & Airport Transfers
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
            Planning your trip to Cuba? Discover the most reliable taxi services with updated{" "}
            <strong>2025 taxi prices</strong>. Book transfers from{" "}
            <strong>Havana International Airport (HAV / José Martí)</strong> and{" "}
            <strong>Varadero Airport (VRA)</strong> to top destinations such as Varadero, Viñales,
            Trinidad, Cienfuegos, and Santa Clara. Choose between private taxis, classic American
            cars, or minivans with English‑speaking drivers.
          </p>

          {/* Airport chips */}
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
            <a
              href="#frequently-asked-questions"
              className="inline-flex items-center justify-center rounded-lg  bg-white px-5 py-3 text-sm font-light underline text-gray-800  transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
             Frequently Asked Questions
            </a>
            <LocaleLink
              href="/transfer-booking"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Book a private transfer
            </LocaleLink>
            <a
              href="#popular-routes"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              See popular routes
            </a>
            
          </div>

          {/* Meta line */}
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Updated {updatedAt} · Estimated reading: 5–7 min
          </p>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Fixed, transparent pricing",
              desc:
                "No hidden fees. Confirmed prices for airport pick‑ups and intercity routes.",
            },
            {
              title: "English‑speaking drivers",
              desc:
                "Professional drivers who know the best routes and the must‑see stops.",
            },
            {
              title: "Classic cars & minivans",
              desc:
                "From vintage convertibles for city tours to comfy minivans for families.",
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

      {/* POPULAR ROUTES */}
      <section id="popular-routes" className="px-4 pt-4">
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/60">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Popular routes</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Frequently booked transfers from HAV (José Martí) and VRA (Varadero) airports:
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Havana Airport → Varadero (hotel zones)",
              "Havana → Viñales (round‑trip available)",
              "Havana → Trinidad (via Cienfuegos optional)",
              "Varadero → Havana (same‑day return)",
              "Varadero → Trinidad",
              "Havana City Tour in classic car",
            ].map((r) => (
              <div
                key={r}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900"
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-none text-amber-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
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
              Looking for a different route? We cover Cienfuegos, Santa Clara, Cayo Santa María,
              Cayo Coco, and more.
            </p>
            <LocaleLink
              href="/taxi"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Get a quote
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* SUPPORTING KEYWORDS (subtle SEO section) */}
      <section className="px-4">
        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            What you can book
          </h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
            <li>Havana airport taxi (HAV / MUHA)</li>
            <li>Varadero airport transfer (VRA)</li>
            <li>Cuba cab & urban taxi in Cuba</li>
            <li>Cuba excursions from Havana (city tours & beaches)</li>
            <li>Classic car tours in Old Havana</li>
            <li>Private transfers for families (minivan)</li>
          </ul>
        </div>
      </section>

      {/* FAQ SECTION (tal cual) */}
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title="All About Taxis In Cuba, Pricing, Booking, Airport Transfers"
        />
      </section>

      {/* JSON-LD Schema.org for Article */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Taxi in Cuba 2025: Prices, Booking & Airport Transfers",
            description:
              "Complete 2025 guide for Cuban taxis. Airport transfers, city tours, classic cars and excursions from Havana and Varadero.",
            author: { "@type": "Organization", name: "Cuban Taxis" },
            publisher: {
              "@type": "Organization",
              name: "Cuban Taxis",
              logo: {
                "@type": "ImageObject",
                url: "https://cubantaxis.com/logo.png",
              },
            },
            image: "https://cubantaxis.com/cuba-cabs.jpg",
            mainEntityOfPage: "https://cubantaxis.com/blog/taxi-in-cuba",
          }),
        }}
      />
    </main>
  );
}
