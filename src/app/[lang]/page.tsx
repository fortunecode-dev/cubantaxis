// page.tsx
import { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import UnderHeroLinks from "@/components/UnderHeroLinks";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";

// ✅ Tipar params como Promise
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://www.cubantaxis.com";
  const { lang } = await params; // ya no rompe

  const pathByLang: Record<string, string> = { en: "/en/" };
  const canonical = `${base}${pathByLang[lang] ?? "/en/"}`;

  return {
    title: "Taxis in Cuba – Quick Booking",
    description:
      "Book Cuba taxis: private/shared rides and airport transfers from HAV/VRA. English-speaking drivers.",
    alternates: {
      canonical,
      languages: {
        "x-default": `${base}/en/`,
        en: `${base}/en/`,
      },
    },
    openGraph: { url: canonical, locale: "en" },
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
      <UnderHeroLinks />
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title="All About Taxis In Cuba, Pricing, Booking, Airport Transfers"
        />
      </section>
    </main>
  );
}
