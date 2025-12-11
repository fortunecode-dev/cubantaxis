import PlaceSEOCard from "@/components/PlaceCard";
import { buildMetaTags } from "../../../../seoUtils/seo-builder";
import type { Metadata } from "next";
import { getTranslation } from "../../locales";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang);
  const metadata = buildMetaTags(
    idioma.metadata.interestingPlaces?.meliaLasAmericas as any
  );
  return metadata;
}
export default function Example() {
  return (
    <PlaceSEOCard
      seo={{
        title:
          "Taxi Pickup at José Martí International Airport (HAV) | Cuban Taxis",
        description:
          "Private airport pickup at HAV with professional drivers. Fixed prices, flight tracking and 24/7 support.",
        keywords: ["taxi cuba", "havana airport transfer", "cuban taxis"],
        canonical:
          "https://cubantaxis.com/interesting-places-in-cuba/melia-las-americas",
        robots: "index,follow",
        siteName: "Cuban Taxis",
        locale: "en_US",
        ogImage: "https://cubantaxis.com/og/havana-transfer.jpg",
        ogType: "place",
        twitterCard: "summary_large_image",
        hreflangAlternates: {
          en: "https://cubantaxis.com/havana-airport-transfer",
        },
      }}
      place={{
        name: "Meliá Las Américas",
        alternateName: "Resort solo adultos frente al golf",
        image: "/melia-las-americas.jpg", // falta
        description:
          "Hotel 5 estrellas solo adultos (18+) en Varadero. Acceso directo al Varadero Golf Club, habitaciones frente al mar y servicio exclusivo The Level.",
        address: {
          streetAddress: "Playa de Las Américas",
          addressLocality: "Varadero",
          addressRegion: "Matanzas",
          addressCountry: "CU",
        },
        phone: "+53 45 667600",
        email: "jefe.ventas.mla@meliacuba.com",
        website:
          "https://www.melia.com/hotels/cuba/varadero/melia-las-americas",
      }}
      services={[
        { class: "golf", icon: "map", name: "Acceso directo al golf" },
        { class: "amenities", icon: "star", name: "Adults Only 18+" },
        { class: "amenities", icon: "wifi", name: "Internet" },
        { class: "sports", icon: "beach", name: "Deportes acuáticos" },
      ]}
      breadcrumbs={[
        { name: "Home", item: "https://cubantaxis.com" },
        { name: "Transfers", item: "https://cubantaxis.com/transfers" },
        {
          name: "HAV Airport",
          item: "https://cubantaxis.com/havana-airport-transfer",
        },
      ]}
      schemaType="LocalBusiness"
      faq={[
        {
          question: "¿El precio es por coche o por persona?",
          answer: "Siempre por coche (servicio privado).",
        },
        {
          question: "¿Monitorean vuelos?",
          answer: "Sí, ajustamos la recogida a retrasos del vuelo sin costo.",
        },
      ]}
      className="mt-6"
    />
  );
}
