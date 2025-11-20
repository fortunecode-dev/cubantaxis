// app/blog/private-taxi-or-car-rental/page.tsx
import Image from "next/image";
import Script from "next/script";
import { LocaleLink } from "@/libs/i18n-nav";
import { LocaleParams } from "@/types/common";
import type { Metadata } from "next";
import { getTranslation } from "../../locales";

/**
 * Nota: este archivo **incluye inline** el objeto `privateTaxiOrCarRental`
 * con TODO el contenido creado previamente. De esta forma la página
 * renderiza exactamente ese contenido sin depender de archivos externos.
 */


/* ------------------ end objeto ------------------ */

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  // Si ya usas tu builder, mantenlo
  return (idioma.metadata.blog?.privateTaxiOrCarRental ?? {}) as Metadata;
}
function formatUpdatedDate(d = new Date()) {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", opts).format(d);
}

export default async function BlogPrivateTaxiOrCarRental({ params }: { params: LocaleParams }) {
  // aunque recibimos params, usamos el objeto inline (contenido consistente garantizado)
  const { lang } =await  params as any;
  const {articles:{privateTaxiOrCarRental}} = getTranslation(lang);
  const updatedAt = formatUpdatedDate();

  return (
    <main className="relative">
      <div className={`pointer-events-none absolute inset-0 -z-10`} />

      {/* HERO */}
      <header className="mx-auto max-w-6xl px-4 pb-4 pt-7 sm:pt-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">{privateTaxiOrCarRental.hero.h1}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-primary">{privateTaxiOrCarRental.hero.introP1}</p>

        <div className="mt-6">
          <LocaleLink href={privateTaxiOrCarRental.hero.ctaPrimary.href} prefetch={false} className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-accent/50 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70">
            {privateTaxiOrCarRental.hero.ctaPrimary.label}
          </LocaleLink>

          <a href={privateTaxiOrCarRental.hero.ctaSecondary.href} className="ml-3 inline-flex items-center justify-center rounded-lg border border-primary/30 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/5">
            {privateTaxiOrCarRental.hero.ctaSecondary.label}
          </a>

          <p className="mt-2 text-xs text-primary/80">
            {privateTaxiOrCarRental.hero.subNotePrefix} {updatedAt} {privateTaxiOrCarRental.hero.subNoteSuffix && ` ${privateTaxiOrCarRental.hero.subNoteSuffix}`}
          </p>
        </div>
      </header>

      {/* imagen destacada */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-primary/15 shadow-sm">
          <Image
            src={privateTaxiOrCarRental.hero.heroImage.src}
            alt={privateTaxiOrCarRental.hero.heroImage.alt}
            width={privateTaxiOrCarRental.hero.heroImage.width}
            height={privateTaxiOrCarRental.hero.heroImage.height}
            sizes={privateTaxiOrCarRental.ui.heroSizes}
            priority
            fetchPriority="high"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* VALUE PROPS */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {privateTaxiOrCarRental.valueProps.map((c: any) => (
            <div key={c.title} className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-base font-semibold text-accent">{c.title}</h3>
              <p className="mt-1 text-sm text-primary">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS: privateTaxi & carRental (exposición adicional) */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-accent">{privateTaxiOrCarRental.sections.privateTaxi.title}</h3>
            <p className="mt-2 text-sm text-primary">{privateTaxiOrCarRental.sections.privateTaxi.paragraph1}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-primary">
              {privateTaxiOrCarRental.sections.privateTaxi.advantages.map((a: string) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold text-primary">Sample prices</h4>
            <ul className="mt-2 text-sm text-primary">
              {privateTaxiOrCarRental.sections.privateTaxi.samplePrices.map((s: any) => (
                <li key={s.route}>{s.route}: {s.price}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-accent">{privateTaxiOrCarRental.sections.carRental.title}</h3>
            <p className="mt-2 text-sm text-primary">{privateTaxiOrCarRental.sections.carRental.paragraph1}</p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <h5 className="font-semibold text-primary">Pros</h5>
                <ul className="list-disc pl-5 text-sm text-primary">
                  {privateTaxiOrCarRental.sections.carRental.pros.map((p: string) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-primary">Cons</h5>
                <ul className="list-disc pl-5 text-sm text-primary">
                  {privateTaxiOrCarRental.sections.carRental.cons.map((c: string) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm text-primary"><strong>Estimated costs:</strong> {privateTaxiOrCarRental.sections.carRental.estimatedCosts}</p>
          </article>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison" className="mx-auto max-w-6xl px-4">
        <h2 className="mt-12 text-xl font-bold text-accent">{privateTaxiOrCarRental.sections.comparison.title}</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0.5 text-sm">
              <thead>
                <tr className="text-left text-primary">
                  {privateTaxiOrCarRental.sections.comparison.table.columns.map((col: string) => (
                    <th key={col} className="px-4 py-3 font-bold text-accent">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {privateTaxiOrCarRental.sections.comparison.table.rows.map((row: any, i: number) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-medium text-primary">{row.option}</td>
                    <td className="px-4 py-3 text-primary">{row.totalPrice}</td>
                    <td className="px-4 py-3 text-primary">{row.comfort}</td>
                    <td className="px-4 py-3 text-primary">{row.flexibility}</td>
                    <td className="px-4 py-3 text-primary">{row.effort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-primary/80">{privateTaxiOrCarRental.sections.comparison.verdict}</div>
        </div>
      </section>

      {/* HYBRID / TOURS */}
      <section className="mx-auto max-w-6xl px-4">
        <h2 className="mt-12 text-lg font-bold text-accent">{privateTaxiOrCarRental.sections.hybridOption.title}</h2>
        <p className="mt-2 text-sm text-primary">{privateTaxiOrCarRental.sections.hybridOption.paragraph}</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-primary">
          {privateTaxiOrCarRental.sections.hybridOption.examples.map((ex: string) => <li key={ex}>{ex}</li>)}
        </ul>
        <div className="mt-4">
          <LocaleLink href={privateTaxiOrCarRental.sections.hybridOption.cta.href} prefetch={false} className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95">
            {privateTaxiOrCarRental.sections.hybridOption.cta.label}
          </LocaleLink>
        </div>
      </section>

      {/* PRICES TABLE */}
      <section id="prices" className="mx-auto max-w-6xl px-4">
        <h2 className="mt-12 text-xl font-bold text-accent">{privateTaxiOrCarRental.prices.title}</h2>
        <p className="mt-1 text-sm text-primary">{privateTaxiOrCarRental.prices.intro}</p>

        <div className="mt-4 overflow-hidden rounded-xl border border-primary/15 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-0.5 text-sm">
              <thead>
                <tr className="text-left text-primary">
                  <th className="px-4 py-3 font-bold text-accent">{privateTaxiOrCarRental.prices.columns.route}</th>
                  <th className="px-4 py-3 font-bold text-accent">{privateTaxiOrCarRental.prices.columns.classicModern}</th>
                  <th className="px-4 py-3 font-bold text-accent">{privateTaxiOrCarRental.prices.columns.minivan}</th>
                  <th className="px-4 py-3 font-bold text-accent">{privateTaxiOrCarRental.prices.columns.notes}</th>
                </tr>
              </thead>
              <tbody>
                {privateTaxiOrCarRental.prices.rows.map((row: any, i: number) => (
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
            {privateTaxiOrCarRental.prices.footnote}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary shadow-sm sm:flex-row sm:items-center">
          <span>{privateTaxiOrCarRental.ui.comparisonNote}</span>
          <div className="flex gap-3">
            <LocaleLink href={privateTaxiOrCarRental.prices.cta.href} prefetch={false} className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95">
              {privateTaxiOrCarRental.prices.cta.label}
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="mx-auto max-w-6xl px-4">
        <h2 className="mt-12 text-lg font-bold text-accent">{privateTaxiOrCarRental.tips.whatAffects.title}</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-primary sm:grid-cols-2">
          {privateTaxiOrCarRental.tips.whatAffects.items.map((it: string) => <li key={it}>{it}</li>)}
        </ul>

        <h2 className="mt-10 text-lg font-bold text-accent">{privateTaxiOrCarRental.tips.touristTips.title}</h2>
        <p className="mt-2 text-sm text-primary">
          {privateTaxiOrCarRental.tips.touristTips.paragraphPrefix}{" "}
          <LocaleLink href={privateTaxiOrCarRental.tips.touristTips.link.href} prefetch={false} className="font-bold text-accent underline-offset-2 hover:underline">
            {privateTaxiOrCarRental.tips.touristTips.link.label}
          </LocaleLink>{" "}
          {privateTaxiOrCarRental.tips.touristTips.paragraphSuffix}
        </p>
      </section>

      {/* CONCLUSION */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mt-12 text-lg font-bold text-accent">{privateTaxiOrCarRental.sections.conclusion.title}</h2>
        <p className="mt-2 text-sm text-primary">{privateTaxiOrCarRental.sections.conclusion.paragraph1}</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-primary">
          {privateTaxiOrCarRental.sections.conclusion.bulletSummary.map((b: string) => <li key={b}>{b}</li>)}
        </ul>
        <p className="mt-4 text-sm text-primary/80">{privateTaxiOrCarRental.sections.conclusion.closingNote}</p>
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
            headline: privateTaxiOrCarRental.seo.headline,
            description: privateTaxiOrCarRental.seo.description,
            author: { "@type": "Organization", name: privateTaxiOrCarRental.seo.authorName },
            publisher: {
              "@type": "Organization",
              name: privateTaxiOrCarRental.seo.publisherName,
              logo: { "@type": "ImageObject", url: privateTaxiOrCarRental.seo.publisherLogo },
            },
            image: privateTaxiOrCarRental.seo.image,
            mainEntityOfPage: privateTaxiOrCarRental.seo.mainEntityOfPage,
          }),
        }}
      />
    </main>
  );
}
