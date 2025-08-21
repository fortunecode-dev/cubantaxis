import DestinationsCard from "@/modules/catalog/DestinationsCard";
import { getTranslation } from "./locales";
import Hero from "@/modules/layout/Hero";
import { destinos } from "@/content/destinations";
import { excursiones } from "@/content/excursions";
import { LocaleParams } from "@/types/common";
import FaqSection from "@/components/Faqs";
import UnderHeroLinks from "@/components/UnderHeroLinks";

export default async function Home({ params }: { params:LocaleParams}) {
  const {lang}=await params
  const idioma = getTranslation(lang)

  return (
    <main id="main" className="font-sans">
      <Hero idioma={idioma} lang={lang}/>
      <UnderHeroLinks/>
    </main>
  );
}
