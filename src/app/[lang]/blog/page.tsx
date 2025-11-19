// Nuevo estilo + optimizada para velocidad

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LocaleLink } from "@/libs/i18n-nav";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { JsonLdBlog } from "./jsondl";

const BLUR_1x1 =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return buildMetaTags(idioma.metadata.blog?.self as any);
}

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
  const { content: { blog } } = await getTranslation(lang);

  const cardSizes =
    "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw";

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-primary/15 bg-white mt-5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-accent">
                {blog.h1}
              </h1>

              <h2 className="mt-3 max-w-2xl text-base leading-7 text-primary">
                {blog.h2}
              </h2>

              {/* 📌 Nuevo contenido largo para mejorar Text/HTML ratio */}
              <p className="mt-4 max-w-3xl text-primary/80 leading-7 text-[15px]">
                {blog.longIntro}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`${lang === "en" ? "" : `/${lang}`}${blog.cta.customBookingHref}`}
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blog.list.map((p: any) => (
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
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-accent">
                  <LocaleLink href={p.href} prefetch={false} className="hover:underline">
                    {p.h3}
                  </LocaleLink>
                </h3>

                <p className="mt-2 text-sm text-primary leading-6">{p.p}</p>

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
                    href={`${lang === "en" ? "" : `/${lang}`}${blog.cta.fastBookingHref}`}
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

      {/* ABOUT SECTION (para SEO + más texto real) */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-accent mt-10">
          {blog.aboutTitle}
        </h2>

        <p className="mt-3 max-w-3xl text-primary leading-7 text-[15px]">
          {blog.aboutText}
        </p>
      </section>

      {/* JSON-LD minimal */}
      <JsonLdBlog />
    </main>
  );
}
