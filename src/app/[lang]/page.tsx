// page.tsx
import { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";
import { buildMetaTags } from "../../seoUtils/seo-builder";
// ✅ Tipar params como Promise
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.landingPage as any)
  return metadata
}

// ✅ También aquí Promise<LocaleParams>
export default async function Home(
  { params }: { params: Promise<LocaleParams> }
) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  return (
    <main id="main" className="font-sans">
      <Hero lang={idioma.content.hero} />
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title={idioma.FAQs.title}
        />
      </section>
    </main>
  );
}
