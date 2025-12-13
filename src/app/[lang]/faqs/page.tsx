import FaqSection from "@/components/Faqs";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { buildMetaTags } from "@/seoUtils/seo-builder";
import { Metadata } from "next";
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { lang } = await params;

  const {
    metadata,
    booking: {
      fastBooking: { form },
    },
  } = getTranslation(lang);

  return {
    ...buildMetaTags(metadata.faqs as any),
  };
}
export default async function BlogPage({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const {
    FAQs,
    booking: {
      fastBooking: { form },
    },
    priceFaq,
  } = await getTranslation(lang);

  return (
    <main className="min-h-screen bg-white">
      <FaqSection
        faqs={FAQs.items.slice(4, FAQs.items.length)}
        title={FAQs.title}
        structuredData
        idioma={{ ...form, priceFaq }}
      />
    </main>
  );
}
