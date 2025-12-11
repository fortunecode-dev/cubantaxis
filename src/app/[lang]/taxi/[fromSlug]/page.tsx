import type { Metadata } from "next";
import { buildMetaTags, buildTaxiBookingJsonLd } from "@/seoUtils/seo-builder";

import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../../locales";

type PageProps = {
  params: {
    lang: string;
    fromSlug?: string;
    toSlug?: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, fromSlug, toSlug } = await params;
  const {
    metadata,
    booking: {
      fastBooking: { form },
    },
  } = getTranslation(lang);

  // base metadata (title, og, description, etc.)
  let meta = metadata.fastBooking;

  // if dynamic route → adjust SEO title
  if (fromSlug && toSlug) {
    meta = {
      ...meta,
      title: `${metadata.fastBooking?.title} | ${fromSlug} → ${toSlug}`,
      description: `Private taxi from ${form[fromSlug]} to ${form[toSlug]}. Book now.`,
    };
  }

  return buildMetaTags(meta as any);
}

export default function TaxiPage({ params }: PageProps) {
  const { lang, fromSlug, toSlug } = params;

  const {
    booking: {
      fastBooking: { h1, h2, p, form },
    },
    backToHome,
    confirmationTexts,
  } = getTranslation(lang);

  const baseUrl = `https://cubantaxis.com/${lang}/taxi`;

  // ---------- JSON-LD BASE ----------
  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    url: baseUrl,
    potentialAction: {
      "@type": "ReserveAction",
      target: baseUrl,
    },
  };

  // ---------- JSON-LD DINÁMICO SI EXISTEN SLUGS ----------
  let routeJsonLd = null;
  if (fromSlug && toSlug) {
    routeJsonLd = buildTaxiBookingJsonLd({
      from: fromSlug,
      to: toSlug,
      lang,
      priceCurrency: "USD",
      translations: form,
    });
  }

  return (
    <main className="min-h-screen bg-white p-2 mt-16">
      {/* JSON-LD BASE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseJsonLd) }}
      />

      {/* JSON-LD DINÁMICO SOLO SI HAY RUTA COMPLETA */}
      {routeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeJsonLd) }}
        />
      )}

      {/* HERO */}
      <section className="mx-auto max-w-3xl mb-6">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-accent">
          {h1}
        </h1>

        <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
          <h2 className="font-semibold">{h2}</h2>
          <p className="mt-1">{p}</p>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm p-5">
          <QuickBookingForm
            idioma={{ ...form, h1, h2, confirmationTexts }}
            fromSlug={fromSlug}
            toSlug={toSlug}
          />

          <div className="p-4 text-center">
            <LocaleLink
              href={`/`}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              {backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </main>
  );
}
