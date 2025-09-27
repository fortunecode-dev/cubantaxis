// app/[lang]/cuba-taxi-booking/page.tsx (o donde corresponda por ruta)
// Nuevo estilo: headings rojos (text-accent), textos azules (text-primary)
// Server Component; usa el QuickBookingForm (client) que ya convertimos

import type { Metadata } from "next";
import { buildMetaTags } from "../../../seoUtils/seo-builder";
import QuickBookingForm from "@/modules/booking/QuickBookingForm"; // ← client component previo
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";

// ✅ SSG/ISR para reducir TTFB (el form funciona igual al ser client)
export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return buildMetaTags(idioma.metadata.fastBooking as any);
}

export default async function FastBookingPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  // JSON-LD mínimo para WebPage + acción de reserva (ayuda SEO)
  const base =
    ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const quickBookingHref = `${base}/cuba-taxi-booking`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: idioma.bookingForm.page.title,
    url: `https://cubantaxis.com${quickBookingHref}`,
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: `https://cubantaxis.com${quickBookingHref}`,
        name: idioma.quickBookingForm?.page.title ?? "Quick Booking",
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
      <section className=" bg-white mt-10">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
            {idioma.quickBookingForm.page.title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-primary">
            {idioma.quickBookingForm.page.description ?? ""}
          </p>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm">
          <div className="p-4 sm:p-6">
            <QuickBookingForm idioma={idioma} />
          </div>

          {/* CTA secundaria / volver */}
          <div className="border-t border-primary/15 p-4 text-center">
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
