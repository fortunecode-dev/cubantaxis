import DestinationsCard from "@/modules/catalog/DestinationsCard";
import { getTranslation } from "./locales";
import Hero from "@/modules/layout/Hero";
import { destinos } from "@/content/destinations";
import { excursiones } from "@/content/excursions";
import { LocaleParams } from "@/types/common";

export default async function Home({ params }: { params:LocaleParams}) {
  const {lang}=await params
  const idioma = getTranslation(lang)

  return (
    <div className="font-sans">
      <Hero idioma={idioma} lang={lang}/>
      <DestinationsCard name={"destinations"} destinations={destinos[lang]?.destinations} idioma={idioma} />
      <DestinationsCard name={"excursions"} destinations={excursiones[lang]?.excursions} idioma={idioma} />
    </div>
  );
}
