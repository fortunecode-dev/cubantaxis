import PlaceSEOCard from "@/components/PlaceCard";
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe

  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Interesting Place In Havana | Hotel Mystique Regis | Hotel",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
    alternates: {
      canonical:base,
      languages: {
        "x-default": `${base}/en/`,
        en: `${base}/en/`,
      },
    },
    openGraph: { url: base, locale: "en" },
  };
}
export default function Example() {
    return (
        <PlaceSEOCard
            seo={{
                title: "Taxi Pickup at José Martí International Airport (HAV) | Cuban Taxis",
                description:
                    "Private airport pickup at HAV with professional drivers. Fixed prices, flight tracking and 24/7 support.",
                keywords: ["taxi cuba", "havana airport transfer", "cuban taxis"],
                canonical: "https://cubantaxis.com/intresting-places-in-cuba/hotel-mystique-regis-habana",
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
                name: "Mystique Regis Habana",
                alternateName: "Hotel boutique en Habana Vieja",
                image: "/hotel-mystique-regis-habana.webp", // falta
                description: "Inspirado en el glamour de 1900, este hotel boutique combina elegancia histórica con comodidades modernas. Ubicado en Habana Vieja, cerca de sitios UNESCO.",
                address: {
                    addressLocality: "La Habana",
                    addressRegion: "La Habana Vieja",
                    addressCountry: "CU",
                },
                website: "https://www.royaltonresorts.com",
            }}
            services={[
                { class: "amenities", icon: "star", name: "Boutique exclusivo" },
                { class: "amenities", icon: "wifi", name: "Internet" },
                { class: "location", icon: "map", name: "Ubicación céntrica" },
            ]}
            links={[
                { label: "See all destinations", href: "/destinations-in-cuba" },
                { label: "Contact on WhatsApp", href: "https://wa.me/5354447931", rel: "noopener", target: "_blank" },
            ]}
            breadcrumbs={[
                { name: "Home", item: "https://cubantaxis.com/" },
                { name: "Transfers", item: "https://cubantaxis.com/transfers" },
                { name: "HAV Airport", item: "https://cubantaxis.com/en/hav-airport-transfer" },
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
