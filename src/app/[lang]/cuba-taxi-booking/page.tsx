import type { Metadata } from "next";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
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
  searchParams: Record<string, string | undefined>;
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
  const from = searchParams.from;
  const to = searchParams.to;

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
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: h1,
          description: h2,
          serviceType: "Taxi Booking",
          provider: {
            "@type": "Organization",
            name: "CubanTaxis",
            url: "https://cubantaxis.com",
          },
          areaServed: "Cuba",
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `https://cubantaxis.com/cuba-taxi-booking?from=${from}&to=${to}`,
              actionPlatform: [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform",
              ],
            },
            result: {
              "@type": "TaxiReservation",
              name: `Taxi Transfer from ${form[from]} to ${form[to]}`,
            },
          },
        }
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
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm">
          <QuickBookingForm
            idioma={{ ...form, h1, h2, confirmationTexts }}
            fromPlace={from}
            toPlace={to}
          />

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
