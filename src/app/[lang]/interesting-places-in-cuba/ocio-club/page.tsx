import PlaceSEOCard from "@/components/PlaceCard";
import { buildAlternates, buildMetaTags, Locale } from "../../../../seoUtils/seo-builder";
import type { Metadata } from "next";
import { getTranslation } from "../../locales";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  const metadata = buildMetaTags(idioma.metadata.interestingPlaces?.ocioClub as any)
  return metadata
}
export default function Example() {
    return (
        <PlaceSEOCard
            seo={{
                title: "Taxi Pickup at José Martí International Airport (HAV) | Cuban Taxis",
                description:
                    "Private airport pickup at HAV with professional drivers. Fixed prices, flight tracking and 24/7 support.",
                keywords: ["taxi cuba", "havana airport transfer", "cuban taxis"],
                canonical: "https://cubantaxis.com/interesting-places-in-cuba/ocio-club",
                robots: "index,follow",
                siteName: "Cuban Taxis",
                locale: "en_US",
                ogImage: "https://cubantaxis.com/og/hav-transfer.jpg",
                ogType: "place",
                twitterCard: "summary_large_image",
                hreflangAlternates: {
                    en: "https://cubantaxis.com/hav-airport-transfer",
                },
            }}
            place={{
                name: "Ocio Club",
                alternateName: "Centro recreativo familiar en Varadero",
                image: "/ocio-club.webp", // falta imagen real
                description: "Centro recreativo en Varadero con juegos electrónicos y mecánicos de última generación, realidad virtual y atracciones para todas las edades. Ideal para familias.",
                address: {
                    streetAddress: "Avenida 1ra entre calle 44 y 46",
                    addressLocality: "Varadero",
                    addressRegion: "Matanzas",
                    addressCountry: "CU",
                },
                phone: "+53 45 667147",
                website: "https://cubantaxis.com/interesting-places-in-cuba/ocio-club",
            }}
            services={[
                { class: "amenities", icon: "map", name: "Juegos electrónicos" },
                { class: "amenities", icon: "star", name: "Atracciones mecánicas" },
                { class: "experiences", icon: "guide", name: "Realidad virtual" },
            ]}
             
            breadcrumbs={[
                { name: "Home", item: "https://cubantaxis.com" },
                { name: "Transfers", item: "https://cubantaxis.com/transfers" },
                { name: "HAV Airport", item: "https://cubantaxis.com/hav-airport-transfer" },
            ]}
            schemaType="LocalBusiness"
            faq={[
                { question: "¿El precio es por coche o por persona?", answer: "Siempre por coche (servicio privado)." },
                { question: "¿Monitorean vuelos?", answer: "Sí, ajustamos la recogida a retrasos del vuelo sin costo." },
            ]}
            className="mt-6"
        />
    );
}
