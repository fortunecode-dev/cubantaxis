// app/[lang]/custom-booking/page.tsx (o donde corresponda por ruta)
// Nuevo estilo: headings rojos (text-accent), textos azules (text-primary)
// Server Component; renderiza ExtendedBookingForm (client)

import type { Metadata } from "next";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";
import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";

// ✅ SSG + revalidate para buen TTFB (el form es client y funciona igual)
export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return buildMetaTags(idioma.metadata.customBooking as any);
}

export default async function BookAReservationPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  // JSON-LD: WebPage + ReserveAction (para SEO)
  const base = ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const pageHref = `${base}/custom-booking`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: idioma.bookingForm.page.title,
    url: `https://cubantaxis.com${pageHref}`,
    description: idioma.bookingForm.page.description,
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: `https://cubantaxis.com${pageHref}`,
        name: idioma.bookingForm?.page?.title ?? "Custom booking",
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

      {/* HERO */}
      <section className="mt-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-1 sm:py-10 sm:pb-1">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
            {idioma.bookingForm.page.title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-primary">
            {idioma.bookingForm.page.description}
          </p>
        </div>
      </section>

      {/* CARD con el formulario extendido */}
      <section className="mx-auto max-w-3xl px-4 py-1 sm:py-10">
        <div className="rounded-2xl bg-white">
          <div className="p-1">
            <ExtendedBookingForm idioma={idioma} />
          </div>

          {/* CTA secundaria / volver al home */}
          <div className=" p-4 text-center">
            <LocaleLink
              href={`/`}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </main>
  );
}
