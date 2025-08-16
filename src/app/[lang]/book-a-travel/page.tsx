import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import Link from "next/link";
import Head from "next/head";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";

export default async function FastBookingPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  return (
    <>
      <Head>
        <title>{idioma.bookingForm.page.title}</title>
        <meta name="description" content={idioma.bookingForm.page.description} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="min-h-screen px-4 py-16 md:py-24 bg-gradient-to-br from-amber-100 to-yellow-50">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-amber-600 mb-6">
            {idioma.bookingForm.page.title}
          </h1>
          <QuickBookingForm idioma={idioma} />

          <div className="mt-10 text-center">
            <LocaleLink href="/" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition">
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
