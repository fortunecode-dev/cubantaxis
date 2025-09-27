// app/blog/page.tsx
// Nuevo estilo + optimizada para velocidad

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LocaleLink } from "@/libs/i18n-nav";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";

// ✅ Permite SSG/ISR (HTML cacheado en edge)
export const dynamic = "force-static";
export const revalidate = 3600; // 1h (ajusta según necesidad)

// Blur minúsculo (evita CLS sin coste de red)
const BLUR_1x1 =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return buildMetaTags(idioma.metadata.blog?.self as any);
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
  } catch {
    return iso;
  }
}

export default async function BlogPage() {
  // En desktop 3 columnas (~33vw por tarjeta), en tablet 2 cols (~50vw), en móvil 100vw
  const cardSizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-primary/15 bg-white mt-5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                Blog CubanTaxis
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-accent">
                Taxi prices, transfers and travel tips in Cuba
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-primary">
                Practical content for travelers: real fares, airport transfers and local tips to move easily around Cuba.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/private-transfer-booking"
                prefetch={false}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                aria-label="Book a private transfer"
              >
                Book a transfer
              </Link>
              <Link
                href="#categories"
                prefetch={false}
                className="rounded-lg border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                Browse categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-primary/15 bg-white transition hover:shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes={cardSizes}
                  placeholder="blur"
                  blurDataURL={BLUR_1x1}
                  decoding="async"
                  fetchPriority="low"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-accent">
                  <LocaleLink href={`/blog/${p.slug}`} prefetch={false} className="hover:underline">
                    {p.title}
                  </LocaleLink>
                </h2>

                <p className="mt-2 text-sm text-primary">{p.excerpt}</p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-primary/80">
                  <span>{formatDate(p.date)}</span>
                  <span>• {p.readMins} min</span>
                  {p.location && <span>• {p.location}</span>}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={`/blog/${p.slug}`}
                    prefetch={false}
                    className="rounded-lg border border-primary/30 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary/5"
                    aria-label={`Read: ${p.title}`}
                  >
                    Read article
                  </Link>
                  <Link
                    href="/cuba-taxi-booking"
                    prefetch={false}
                    className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* JSON-LD minimal para el listado (sin hidración) */}
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
