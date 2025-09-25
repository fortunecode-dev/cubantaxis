import type { Metadata } from "next";
import { buildAlternatesA } from "../../../utils/seo";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import Head from "next/head";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
// import QuickBookingForm from "@/modules/booking/QuickBookingForm";

export const dynamic = "force-static"; // o como prefieras

export async function generateMetadata(): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const slugNoLang = "/cuba-taxi-booking";
  const { canonicalNeutral, languages } = buildAlternatesA(slugNoLang);

  const title = "Book A Taxi In Cuba | Fast Booking & Airport Transfers (HAV & VRA)";
  const description =
    "Best way to book a taxi in Cuba. Send your info and customize your trip. Choose your preferred car and destinations.";
  const ogImage = `${base}/og/cubantaxis-1200x630.jpg`;

  return {
    alternates: {
      canonical: canonicalNeutral, // canónica = neutra
      languages,                   // incluye en + x-default = neutra
    },
    openGraph: {
      url: canonicalNeutral,
      type: "website",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Classic taxi in Havana, Cuba" }],
      locale: "en_US",
      siteName: "CubanTaxis",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
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
