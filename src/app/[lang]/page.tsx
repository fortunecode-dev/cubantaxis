import DestinationsCard from "@/modules/catalog/DestinationsCard";
import { getTranslation } from "./locales";
import { destinos, excursiones } from "@/content";
import Hero from "@/modules/layout/Hero";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" | "fr" | "de" | "ru" | "pt" }> }) {
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
