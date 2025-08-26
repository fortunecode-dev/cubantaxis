import { getTranslation } from "./locales";
import Hero from "@/modules/layout/Hero";
import { LocaleParams } from "@/types/common";
import UnderHeroLinks from "@/components/UnderHeroLinks";
import { Metadata } from "next";
import FaqSection from "@/components/Faqs";
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const base = "https://www.cubantaxis.com";
  const { lang } = await params;
  const pathByLang: Record<string, string> = {
    en: "/en/",
    // es: "/es/",
    // fr: "/fr/",
    // de: "/de/",
    // ru: "/ru/",
    // pt: "/pt/",
  };
  const canonical = `${base}${pathByLang[lang] ?? "/en/"}`;


  return {
    title: "Taxis in Cuba – Quick Booking",
    description: "Book Cuba taxis: private/shared rides and airport transfers from HAV/VRA. English‑speaking drivers.",
    alternates: {
      canonical,
      languages: {
        "x-default": `${base}/en/`,
        "en": `${base}/en/`,
      },
    },
    openGraph: { url: canonical, locale: "en" },
  };
}
export default async function Home({ params }: { params: LocaleParams }) {
  const { lang } = await params
  const idioma = getTranslation(lang)

  return (
    <main id="main" className="font-sans">
      <Hero idioma={idioma} lang={lang} />
      <UnderHeroLinks />
      {/* FAQ SECTION (tal cual) */}
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title="All About Taxis In Cuba, Pricing, Booking, Airport Transfers"
        />
      </section>
    </main>
  );
}
