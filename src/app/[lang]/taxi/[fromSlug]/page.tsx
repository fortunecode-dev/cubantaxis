import type { Metadata } from "next";
import {
  buildMetaTags,
  buildTaxiBookingJsonLd,
  buildTaxiProductJsonLd,
  textToHowToSteps,
} from "@/seoUtils/seo-builder";

import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../../locales";
import { notFound } from "next/navigation";
import { prices } from "@/utils/constants";

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

  // idioma en URL
  const langPrefix = lang === "en" ? "" : `/${lang}`;

  // --- CANONICAL DINÁMICO ---
  let canonical = `https://cubantaxis.com${langPrefix}/taxi`;

  if (fromSlug) canonical += `/${fromSlug}`;
  if (toSlug) canonical += `/${toSlug}`;

  // --- TITLE + DESCRIPTION DINÁMICOS ---
  let title = metadata.fastBooking?.title || "Taxi Booking in Cuba";
  let description =
    metadata.fastBooking?.description || "Private taxi service in Cuba";

  if (fromSlug && toSlug) {
    const fromText = form[fromSlug] || fromSlug;
    const toText = form[toSlug] || toSlug;

    title = `${fromText} → ${toText} | Private Taxi Transfer`;
    description = `Private taxi from ${fromText} to ${toText}. Fast taxi booking. Fixed price and 24/7 assistance.`;
  }

  if (fromSlug && !toSlug) {
    const fromText = form[fromSlug] || fromSlug;
    title = `Taxi from ${fromText} | Private Transfers`;
    description = `Book a private taxi departing from ${fromText}. Safe, fast and reliable.`;
  }
  let partialMetadata = { ...metadata.fastBooking, title, description };
  if (partialMetadata.alternates) {
    partialMetadata.alternates.canonical = canonical;
  }

  return {
    ...buildMetaTags({ ...metadata.fastBooking, title, description }),
    alternates: {
      canonical,
    },
  };
}

export default async function TaxiPage({ params }: PageProps) {
  const { lang, fromSlug, toSlug } = await params;

  const {
    booking: {
      fastBooking: { h1, h2, p, form },
    },
    backToHome,
    confirmationTexts,
  } = getTranslation(lang);

  const langPrefix = lang === "en" ? "" : `/${lang}`;
  const baseUrl = `https://cubantaxis.com${langPrefix}/taxi`;
  const bookingUrl = `${baseUrl}/${fromSlug}/${toSlug}`;
  const productJsonLd =
    fromSlug && toSlug
      ? buildTaxiProductJsonLd({
          from: fromSlug,
          to: toSlug,
          lang,
          translations: form,
        })
      : null;
  // --- JSON-LD BASE ---
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: lang === "es" ? "Cómo reservar un taxi" : "How to book a taxi",
    description: h2,
    step: textToHowToSteps(p),
  };

  const actionJsonLd =
    fromSlug && toSlug
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: h1,
          url: bookingUrl, // https://cubantaxis.com/taxi/havana/varadero
          potentialAction: {
            "@type": "ReserveAction",
            name: "Book this Taxi",
            target: {
              "@type": "EntryPoint",
              urlTemplate: bookingUrl,
              actionPlatform: [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform",
              ],
            },
            result: {
              "@type": "TaxiReservation",
              name: `Taxi Booking: ${form[fromSlug]} → ${form[toSlug]}`,
            },
          },
        }
      : null;

  // --- JSON-LD DINÁMICO ---
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
  const routeExists =
    fromSlug && toSlug
      ? prices.some((p) => p.from === fromSlug && p.to === toSlug)
      : true;

  if (!routeExists) {
    return notFound();
  }
  return (
    <main className="min-h-screen bg-white p-2 mt-5">
      {/* JSON-LD BASE */}
      {actionJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(actionJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
      {/* JSON-LD RUTA COMPLETA */}
      {routeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeJsonLd) }}
        />
      )}

      {/* HERO */}
      <section
        className="mx-auto max-w-3xl mb-6"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        {/* Título principal de la página */}
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-accent">
          {h1}
        </h1>

        {/* BLOQUE HOW TO */}
        <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
          {/* Título del HowTo */}
          <h2 className="font-semibold" itemProp="name">
            {h2}
          </h2>

          {/* Descripción general del proceso */}
          <p className="mt-1" itemProp="description">
            {p}
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm p-3">
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
