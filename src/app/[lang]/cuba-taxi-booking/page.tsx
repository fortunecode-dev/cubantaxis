import type { Metadata } from "next";
import { buildAlternates, buildMetaTags, Locale } from "../../../seoUtils/seo-builder";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import Head from "next/head";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
// import QuickBookingForm from "@/modules/booking/QuickBookingForm";

export const dynamic = "force-static"; // o como prefieras

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.fastBooking as any)
  return metadata
}

export default async function FastBookingPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  return (
    <>
      <section className="min-h-screen px-2 py-13 md:py-24 m-auto bg-gradient-to-br from-amber-100 to-yellow-50">
        <div className="max-w-2xl bg-white rounded-2xl shadow-xl m-auto">
          <h1 className="text-2xl md:text-3xl pt-5 font-bold text-center text-amber-600 mb-3">
            {idioma.bookingForm.page.title}
          </h1>
          <QuickBookingForm idioma={idioma} />

          <div className="p-3 px-5 text-center">
            <LocaleLink href="/" className="w-full inline-block px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition">
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
