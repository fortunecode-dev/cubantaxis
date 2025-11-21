// app/[lang]/page.tsx
import type { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";
import { buildMetaTags } from "../../seoUtils/seo-builder";
import AboveTheFold from "@/components/AboveTheFold";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  const metadata = buildMetaTags(idioma.metadata.landingPage as any);
  const updated = new Date().toISOString();
  return {...metadata,other: {
    "article:published_time": updated,
    "article:modified_time": updated,
  },};
}

export default async function Home({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  return (
    <main id="main" className="font-sans">
      <Hero lang={idioma.content.hero} />
      <AboveTheFold idioma={idioma.mainSeo} />
      <FaqSection faqs={idioma.FAQs.items} title={idioma.FAQs.title} />
    </main>
  );
}
