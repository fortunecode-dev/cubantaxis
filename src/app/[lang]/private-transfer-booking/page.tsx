// app/[lang]/custom-booking/page.tsx (o donde corresponda por ruta)
// Nuevo estilo: headings rojos (text-accent), textos azules (text-primary)
// Server Component; renderiza ExtendedBookingForm (client)

import type { Metadata } from "next";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";
import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return buildMetaTags(idioma.metadata.customBooking as any);
}

export default async function BookAReservationPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
    const { booking: { customBooking: { h1, h2, p, form } } ,backToHome,confirmationTexts} = getTranslation(lang);


  // JSON-LD: WebPage + ReserveAction (para SEO)
  const base = ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const pageHref = `${base}/custom-booking`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    url: `https://cubantaxis.com${pageHref}`,
    description:h2,
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: `https://cubantaxis.com${pageHref}`,
        name: h1 ?? "Custom booking",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD inline (server rendered) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO / encabezado */}
      <section className=" bg-white mt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
            {h1}
          </h1>
          <div className="rounded-lg p-4 bg-primary/5 border border-primary/20 text-sm text-gray-700 mt-4">
            <h2 className="font-semibold text-primary mb-2">
              ℹ️ {h2}
            </h2> <p className="mx-auto mt-1 max-w-2xl text-sm text-primary">
              {p}</p> </div>

        </div>
      </section>

      {/* FORM CARD */}
      <section className="mx-auto max-w-3xl m-2">
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm">
          < ExtendedBookingForm idioma={{...form,confirmationTexts}} />
          {/* CTA secundaria / volver */}
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
