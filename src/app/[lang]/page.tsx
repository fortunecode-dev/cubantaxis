// app/[lang]/page.tsx
import type { Metadata } from "next";
import Hero from "@/modules/layout/Hero";
import FaqSection from "@/components/Faqs";
import { getTranslation } from "./locales";
import { LocaleParams } from "@/types/common";
import { buildMetaTags } from "../../seoUtils/seo-builder";
import CubanTaxisAboveTheFold from "@/components/ComponenteSeoPrincipal";
import Link from "next/link";

// ✅ Tipar params como Promise
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  const metadata = buildMetaTags(idioma.metadata.landingPage as any);
  return metadata;
}

// Helpers — estructura SERP internacionalizada
function buildRoutes(lang: string) {
  // Ajusta si usas un prefijo distinto o rutas diferentes
  return {
    home: `/${lang}`,
    quick: `/${lang}/cuba-taxi-booking`,
    custom: `/${lang}/private-transfer-booking`,
    prices: `/${lang}/blog/how-much-is-a-taxi-in-cuba`,
    faqs: `/${lang}/#faqs`, // si no tienes página /faqs, puedes usar ancla: `/${lang}#frequently-asked-questions`
    // search: `/${lang}/search`, // para Sitelinks SearchBox
  };
}

function getSerpTexts(idioma: any) {
  // Puedes mover estos textos a tu sistema de i18n: idioma.nav / idioma.routes / idioma.content
  return {
    home: idioma?.nav?.home ?? "Home",
    quick: idioma?.nav?.quick ?? "Quick booking",
    custom: idioma?.nav?.custom ?? "Custom transfer",
    prices: idioma?.nav?.prices ?? "How much is a taxi in Cuba",
    faqs: idioma?.nav?.faqs ?? "FAQs",
    navLabel: idioma?.nav?.label ?? "Primary",
    breadcrumbsHome: idioma?.breadcrumbs?.home ?? "Home",
  };
}


export default async function Home(
  { params }: { params: Promise<LocaleParams> }
) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  const routes = buildRoutes(lang);
  const texts = getSerpTexts(idioma);



  return (
    <main id="main" className="font-sans">


      {/* Nav primario (accesible) — ayuda a Google a entender jerarquía */}
      <nav aria-label={texts.navLabel} className="mx-auto max-w-7xl px-4 pt-4 hidden" >
        <ul className="flex flex-wrap gap-3 text-sm md:text-base">
          <li><Link className="underline-offset-4 hover:underline" href={routes.home}>{texts.home}</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href={routes.quick}>{texts.quick}</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href={routes.custom}>{texts.custom}</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href={routes.prices}>{texts.prices}</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href={routes.faqs}>{texts.faqs}</Link></li>
        </ul>
      </nav>

      {/* Contenido */}
      <Hero lang={idioma.content.hero} />
      <CubanTaxisAboveTheFold idioma={idioma.mainSeo} />

      {/* FAQs (asegura que exista la página o la sección con el mismo ID si usas ancla) */}
      <section className="mt-12 pt-3" id="frequently-asked-questions">
        <FaqSection
          faqs={idioma.FAQs.items}
          title={idioma.FAQs.title}
        />
      </section>
    </main>
  );
}
