import DestinationsCard from "@/modules/catalog/DestinationsCard";
import { getTranslation } from "./locales";
import Hero from "@/modules/layout/Hero";
import { destinos } from "@/content/destinations";
import { excursiones } from "@/content/excursions";
import { LocaleParams } from "@/types/common";
import FaqSection from "@/components/Faqs";

export default async function Home({ params }: { params:LocaleParams}) {
  const {lang}=await params
  const idioma = getTranslation(lang)

  return (
    <main id="main" className="font-sans">
      <Hero idioma={idioma} lang={lang}/>
      <DestinationsCard name={"destinations"} destinations={destinos[lang]?.destinations} idioma={idioma} title={idioma.destinationsCard.title} subTitle={idioma.destinationsCard.subTitle} />
      <DestinationsCard name={"excursions"} destinations={excursiones[lang]?.excursions} idioma={idioma}  title={idioma.excursionsCard.title} subTitle={idioma.excursionsCard.places} />
    </main>
  );
}
