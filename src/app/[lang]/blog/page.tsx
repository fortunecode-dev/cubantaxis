// app/blog/page.tsx
// Nuevo estilo + optimizada para velocidad

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LocaleLink } from "@/libs/i18n-nav";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";

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
    location: "Cuba",
    tags: ["pricing", "transfers"],
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

export default async function BlogPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const {content:{blog}} = await getTranslation(lang)
  // En desktop 3 columnas (~33vw por tarjeta), en tablet 2 cols (~50vw), en móvil 100vw
  const cardSizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-primary/15 bg-white mt-5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              {/* <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                Blog CubanTaxis
              </span> */}
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-accent">
                {blog.h1}
              </h1>
              <h2 className="mt-3 max-w-2xl text-base leading-7 text-primary">
                {blog.h2}
              </h2>
            </div>
            <div className="flex gap-3">
              <Link
                href={`${lang=="en"?"":`/${lang}`}/private-transfer-booking`}
                prefetch={false}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                aria-label="Book a private transfer"
              >
                {blog.cta.customBooking}
              </Link>
              <Link
                href="#categories"
                prefetch={false}
                className="rounded-lg border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                 {blog.anchor}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blog.list.map((p:any) => (
            <article
              key={p.href}
              className="overflow-hidden rounded-2xl border border-primary/15 bg-white transition hover:shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.image}
                  alt={p.h3}
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
                <h3 className="text-xl font-bold text-accent">
                  <LocaleLink href={p.href} prefetch={false} className="hover:underline">
                    {p.h3}
                  </LocaleLink>
                </h3>

                <p className="mt-2 text-sm text-primary">{p.p}</p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-primary/80">
                  <span>{formatDate(p.date)}</span>
                  <span>• {p.readMins} min</span>
                  {p.location && <span>• {p.location}</span>}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={p.href}
                    prefetch={false}
                    className="rounded-lg border border-primary/30 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary/5"
                    aria-label={`Read: ${p.h3}`}
                  >
                    {blog.readArticle}
                  </Link>
                  <Link
                    href={`${lang=="en"?"":`/${lang}`}/cuba-taxi-booking`}
                    prefetch={false}
                    className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                     {blog.cta.fastBooking}
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
