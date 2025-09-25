// page.tsx
import { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import UnderHeroLinks from "@/components/UnderHeroLinks";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";
import { buildAlternates, Locale } from "../../seoUtils/seo-builder";

// ✅ Tipar params como Promise
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
  const  slugNoLang =  ``;
  const { canonicalNeutral, languages, canonicalFor } = buildAlternates(slugNoLang);
  return {
    title: "Cuba Taxi Booking Online  | Airport Transfers & Tours",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
   alternates: {
      canonical: canonicalFor(lang as Locale), // canónica = neutra
      languages,                   // incluye en + x-default = neutra
    },
    openGraph: { url:canonicalNeutral },
  };
}

// ✅ También aquí Promise<LocaleParams>
export default async function Home(
  { params }: { params: Promise<LocaleParams> }
) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  return (
    <main id="main" className="font-sans">
      <Hero idioma={idioma} lang={lang} />
      <UnderHeroLinks idioma={idioma} />
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title="All About Taxis In Cuba, Pricing, Booking, Airport Transfers"
        />
      </section>
    </main>
  );
}
