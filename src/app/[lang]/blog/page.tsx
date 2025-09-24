import Link from "next/link";

// Blog page: light, airy design with Tailwind only
// One article: How much is a taxi in Cuba
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
  const path = `/${lang}/taxi-in-cuba`;
  const url = `${base}${path}`;
  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Cuban Taxis Blog | Prices, Tips, Advices and Info",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
     alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/taxi-in-cuba`,
        en: `${base}/en/taxi-in-cuba`,
        es: `${base}/es/taxi-in-cuba`,
        fr: `${base}/fr/taxi-in-cuba`,
        de: `${base}/de/taxi-in-cuba`,
        ru: `${base}/ru/taxi-in-cuba`,
        pt: `${base}/pt/taxi-in-cuba`,
      },
    },
    openGraph: { url },
  };
}
const POSTS = [
  {
    slug: "how-much-is-a-taxi-in-cuba",
    title: "How much is a taxi in Cuba in 2025? Realistic prices & tips",
    excerpt:
      "Average taxi fares, airport transfers, classic vs modern cars, and how to avoid overpaying across the main routes.",
    date: "2025-09-01",
    readMins: 7,
    image: "/cuba-cabs.jpg",
    tags: ["pricing", "transfers"],
    location: "Cuba",
  },
];

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return iso;
  }
}

export default async function BlogPage() {
  return (
    <main className="min-h-screen mt-3 bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-800">
                Blog CubanTaxis
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
                Taxi prices, transfers and travel tips in Cuba
              </h1>
              <p className="mt-3 max-w-2xl text-base text-gray-600">
                Practical content for travelers: real fares, airport transfers and local tips to move easily around Cuba.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/private-transfer-booking"
                className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-95"
              >
                Book a transfer
              </Link>
              <Link
                href="#categories"
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Browse categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(p.date)}</span>
                  <span>• {p.readMins} min</span>
                  {p.location && <span>• {p.location}</span>}
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Read article
                  </Link>
                  <Link
                    href="/cuba-taxi-booking"
                    className="rounded-lg bg-yellow-500 px-3 py-1.5 text-sm font-semibold text-black hover:brightness-95"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promo blocks
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Transparent prices</h3>
            <p className="mt-2 text-sm text-gray-700">Real routes and cars (classic, modern, minivan). Prices per car, not per person.</p>
            <Link
              href="/transfers"
              className="mt-3 inline-block rounded-lg border border-yellow-400 bg-white px-3 py-1.5 text-sm font-medium text-yellow-700 hover:bg-yellow-100"
            >
              See transfers
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">City tours & excursions</h3>
            <p className="mt-2 text-sm text-gray-700">Havana in 3h, Viñales in one day, Playas del Este. With or without guide.</p>
            <Link
              href="/tours"
              className="mt-3 inline-block rounded-lg border border-yellow-400 bg-white px-3 py-1.5 text-sm font-medium text-yellow-700 hover:bg-yellow-100"
            >
              Explore tours
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Fast WhatsApp support</h3>
            <p className="mt-2 text-sm text-gray-700">We coordinate routes and handle flight changes or late arrivals.</p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-lg border border-yellow-400 bg-white px-3 py-1.5 text-sm font-medium text-yellow-700 hover:bg-yellow-100"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "CubanTaxis Blog",
            url: "https://cubantaxis.com/blog",
            description: "Taxi prices, transfers and local tips for traveling in Cuba.",
          }),
        }}
      />
    </main>
  );
}