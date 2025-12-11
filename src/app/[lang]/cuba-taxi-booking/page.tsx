import type { Metadata } from "next";
import {
  buildMetaTags,
  buildTaxiBookingJsonLd,
} from "../../../seoUtils/seo-builder";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const {
    booking,
    metadata: { fastBooking },
  } = getTranslation(lang);
  return buildMetaTags(fastBooking as any);
}

export default async function FastBookingPage({
  params,
  searchParams,
}: {
  params: LocaleParams;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { lang } = await params;

  const {
    booking: {
      fastBooking: { h1, h2, p, form },
    },
    backToHome,
    confirmationTexts,
  } = getTranslation(lang);

  const base = ["en", "es", "fr", "de", "ru", "pt"].includes(lang)
    ? `/${lang}`
    : "/en";

  const quickBookingHref = `${base}/cuba-taxi-booking`;

  // GET SEARCH PARAMS FROM SERVER
  const from = (await searchParams).from;
  const to = (await searchParams).to;

  // BASE JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    url: `https://cubantaxis.com${quickBookingHref}`,
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: `https://cubantaxis.com${quickBookingHref}`,
        name: h1 ?? "Quick Booking",
      },
    ],
  };

  // DYNAMIC BOOKING ACTION (ONLY IF from & to EXIST)
  const serp =
    from && to
      ? buildTaxiBookingJsonLd({
          from,
          to,
          lang,
          priceCurrency: "USD",
          translations: form,
        })
      : null;

  return (
    <main className="min-h-screen bg-white p-2">
      {/* JSON-LD BASE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* JSON-LD DINÁMICO */}
      {serp && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serp) }}
        />
      )}

      {/* HERO */}
      <section className="bg-white mt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
            {h1}
          </h1>
          <div className="rounded-lg p-4 bg-primary/5 border border-primary/20 text-sm text-gray-700 mt-4">
            <h2 className="font-semibold text-primary mb-2">ℹ️ {h2}</h2>
            <p className="mx-auto mt-1 max-w-2xl text-sm text-primary">{p}</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-3xl m-2">
        <div className="border border-primary/15 bg-white shadow-sm mx-auto max-w-3xl rounded-2xl p-5 pb-0">
          <QuickBookingForm idioma={{ ...form, h1, h2, confirmationTexts }} />
          <div className="p-4 text-center">
            <LocaleLink
              href={`/`}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              {backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </main>
  );
}
