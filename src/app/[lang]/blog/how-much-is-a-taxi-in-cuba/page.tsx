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
function formatUpdatedDate(d = new Date()) {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", opts).format(d);
}
export default async function BlogTaxiCuba({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const {articles:{howMuchIsATaxiInCuba}} = getTranslation(lang);
  const updatedAt = formatUpdatedDate();

  return (
    <main className="relative">
      {/* fondo suave */}
      <div className={`pointer-events-none absolute inset-0 -z-10 ${howMuchIsATaxiInCuba.ui.bgGradientClass}`} />

      {/* migas */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 pt-6">
        <ol className="flex items-center gap-1 text-xs">
          <li>
            <a
              href={lang === "en" ? "/" : `/${lang}`}
              className="text-primary hover:text-accent hover:underline"
              prefetch-data="false"
            >
              {howMuchIsATaxiInCuba.breadcrumb.homeLabel}
            </a>
          </li>
          <li aria-hidden="true" className="text-primary">›</li>
          <li>
            <a
              href={`${lang === "en" ? "" : `/${lang}`}/blog`}
              className="text-primary hover:text-accent hover:underline"
              prefetch-data="false"
            >
              {howMuchIsATaxiInCuba.breadcrumb.blogLabel}
            </a>
          </li>
          <li aria-hidden="true" className="text-primary">›</li>
          <li className="text-primary">{howMuchIsATaxiInCuba.breadcrumb.current}</li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-4 pb-4 pt-10 sm:pt-14">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {howMuchIsATaxiInCuba.badges.map((b:any) => (
            <span
              key={b.label}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                b.tone === "accent"
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-primary/30 bg-primary/10 text-primary"
              }`}
            >
              {b.label}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
          {howMuchIsATaxiInCuba.hero.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-primary">
          {howMuchIsATaxiInCuba.hero.introP1}
        </p>

        <div className="mt-6">
          <LocaleLink
            href={howMuchIsATaxiInCuba.hero.ctaPrimary.href}
            prefetch={false}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-accent/50 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {howMuchIsATaxiInCuba.hero.ctaPrimary.label}
          </LocaleLink>

          <a
            href={howMuchIsATaxiInCuba.hero.ctaSecondary.href}
            className="ml-3 inline-flex items-center justify-center rounded-lg border border-primary/30 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/5"
          >
            {howMuchIsATaxiInCuba.hero.ctaSecondary.label}
          </a>

          <p className="mt-2 text-xs text-primary/80">
            {howMuchIsATaxiInCuba.hero.subNotePrefix} {updatedAt} {howMuchIsATaxiInCuba.hero.subNoteSuffix && ` ${howMuchIsATaxiInCuba.hero.subNoteSuffix}`}
          </p>
        </div>
      </header>

      {/* imagen destacada */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
          <Image
            src={howMuchIsATaxiInCuba.hero.heroImage.src}
            alt={howMuchIsATaxiInCuba.hero.heroImage.alt}
            width={howMuchIsATaxiInCuba.hero.heroImage.width}
            height={howMuchIsATaxiInCuba.hero.heroImage.height}
            sizes={howMuchIsATaxiInCuba.ui.heroSizes}
            priority
            fetchPriority="high"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* VALOR */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {howMuchIsATaxiInCuba.valueProps.map((c:any) => (
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
        <h2 className="mt-12 text-xl font-bold text-accent">{howMuchIsATaxiInCuba.prices.title}</h2>
        <p className="mt-1 text-sm text-primary">
          {howMuchIsATaxiInCuba.prices.intro}
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0.5 text-sm">
              <thead>
                <tr className="text-left text-primary">
                  <th className="px-4 py-3 font-bold text-accent">{howMuchIsATaxiInCuba.prices.columns.route}</th>
                  <th className="px-4 py-3 font-bold text-accent">{howMuchIsATaxiInCuba.prices.columns.classicModern}</th>
                  <th className="px-4 py-3 font-bold text-accent">{howMuchIsATaxiInCuba.prices.columns.minivan}</th>
                  <th className="px-4 py-3 font-bold text-accent">{howMuchIsATaxiInCuba.prices.columns.notes}</th>
                </tr>
              </thead>
              <tbody>
                {howMuchIsATaxiInCuba.prices.rows.map((row:any, i:number) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-medium text-primary">{row.route}</td>
                    <td className="px-4 py-3 text-primary">{row.classicModern}</td>
                    <td className="px-4 py-3 text-primary">{row.minivan}</td>
                    <td className="px-4 py-3 text-primary/80">{row.notes ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-primary/10 px-4 py-3 text-xs text-primary/80">
            {howMuchIsATaxiInCuba.prices.footnote}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary shadow-sm sm:flex-row sm:items-center">
          <span>{howMuchIsATaxiInCuba.ui.ctaAltQuestion}</span>
          <div className="flex gap-3">
            <LocaleLink
              href={howMuchIsATaxiInCuba.prices.cta.href}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              {howMuchIsATaxiInCuba.prices.cta.label}
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* TIPS SEO */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mt-12 text-lg font-bold text-accent">{howMuchIsATaxiInCuba.tips.whatAffects.title}</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-primary sm:grid-cols-2">
          {howMuchIsATaxiInCuba.tips.whatAffects.items.map((it:any) => (
            <li key={it}>{it}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-bold text-accent">{howMuchIsATaxiInCuba.tips.touristTips.title}</h2>
        <p className="mt-2 text-sm text-primary">
          {howMuchIsATaxiInCuba.tips.touristTips.paragraphPrefix}{" "}
          <LocaleLink
            href={howMuchIsATaxiInCuba.tips.touristTips.link.href}
            prefetch={false}
            className="font-bold text-accent underline-offset-2 hover:underline"
          >
            {howMuchIsATaxiInCuba.tips.touristTips.link.label}
          </LocaleLink>{" "}
          {howMuchIsATaxiInCuba.tips.touristTips.paragraphSuffix}
        </p>
      </section>

      {/* JSON-LD Article (desde el objeto) */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: howMuchIsATaxiInCuba.seo.headline,
            description: howMuchIsATaxiInCuba.seo.description,
            author: { "@type": "Organization", name: howMuchIsATaxiInCuba.seo.authorName },
            publisher: {
              "@type": "Organization",
              name: howMuchIsATaxiInCuba.seo.publisherName,
              logo: { "@type": "ImageObject", url: howMuchIsATaxiInCuba.seo.publisherLogo },
            },
            image: howMuchIsATaxiInCuba.seo.image,
            mainEntityOfPage: howMuchIsATaxiInCuba.seo.mainEntityOfPage,
          }),
        }}
      />
    </main>
  );
}