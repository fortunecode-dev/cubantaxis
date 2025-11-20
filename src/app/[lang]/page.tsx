// app/[lang]/page.tsx
import type { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";
import { buildMetaTags } from "../../seoUtils/seo-builder";
import CubanTaxisAboveTheFold from "@/components/ComponenteSeoPrincipal";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  const metadata = buildMetaTags(idioma.metadata.landingPage as any);
  return metadata;
}
function buildRoutes(lang: string) {
  return {
    quick: `/${lang}/cuba-taxi-booking`,
    custom: `/${lang}/private-transfer-booking`,
    blog: `/${lang}/blog`,
    faqs: `/${lang}/#faqs`, // si no tienes página /faqs, puedes usar ancla: `/${lang}#frequently-asked-questions`
  };
}

function getSerpTexts(idioma: any) {
  return {
    quick: idioma?.nav?.quick ?? "Quick booking",
    custom: idioma?.nav?.custom ?? "Custom transfer",
    blog: idioma?.nav?.blog ?? "How much is a taxi in Cuba",
    faqs: idioma?.nav?.faqs ?? "FAQs",
  };
}
export default async function Home({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  
  const routes = buildRoutes(lang);
  const texts = getSerpTexts(idioma);
  return (
    <main id="main" className="font-sans">
      <Hero lang={idioma.content.hero} />
      <CubanTaxisAboveTheFold idioma={idioma.mainSeo} />
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection faqs={idioma.FAQs.items} title={idioma.FAQs.title} />
      </section>
       <Script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: texts.quick,
                    item: `https://cubantaxis.com/${routes.quick}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: texts.custom,
                    item: `https://cubantaxis.com/${routes.custom}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: texts.blog,
                    item: `https://cubantaxis.com/${routes.blog}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: texts.faqs,
                    item: `https://cubantaxis.com/${routes.faqs}`,
                  },
                ],
              })}
            </Script>
    </main>
  );
}
