import Head from "next/head";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";
import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import type { Metadata } from "next";
import { buildAlternates, buildMetaTags, Locale } from "../../../seoUtils/seo-builder";


type Params = {
  params: Promise<{
    lang: "en" 
    | "es"
    | "fr"
    | "de"
    | "ru"
    | "pt"
  }>
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.customBooking as any)
  return metadata
}
export default async function BookAReservationPage({
  params,
}: {
  params: LocaleParams;
}) {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  return (
    <>
      <Head>
        <title>{idioma.bookingForm.page.title}</title>
        <meta name="description" content={idioma.bookingForm.page.description} />
      </Head>

      <section className="min-h-screen px-2 py-13 md:py-24 m-auto bg-gradient-to-br from-amber-100 to-yellow-50">
        <div className="max-w-2xl bg-white rounded-2xl shadow-xl m-auto">
          <h1 className="text-2xl md:text-3xl pt-5 font-bold text-center text-amber-600 mb-0">
            {idioma.bookingForm.page.title}
          </h1>
          <ExtendedBookingForm idioma={idioma} />

          <div className="p-3 px-4 pt-2 text-center">
            <LocaleLink href="/" className="w-full inline-block px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition">
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
