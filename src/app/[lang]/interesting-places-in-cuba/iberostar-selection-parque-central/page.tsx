import PlaceSEOCard from "@/components/PlaceCard";
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
const path = `/${lang}/interesting-places-in-cuba/iberostar-selection-parque-central`;
  const url = `${base}${path}`;
  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Interesting Place In Havana | Iberostar Selection Parque Central | Hotel",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
     alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/interesting-places-in-cuba/iberostar-selection-parque-central`,
        en: `${base}/en/interesting-places-in-cuba/iberostar-selection-parque-central`,
        es: `${base}/es/interesting-places-in-cuba/iberostar-selection-parque-central`,
        fr: `${base}/fr/interesting-places-in-cuba/iberostar-selection-parque-central`,
        de: `${base}/de/interesting-places-in-cuba/iberostar-selection-parque-central`,
        ru: `${base}/ru/interesting-places-in-cuba/iberostar-selection-parque-central`,
        pt: `${base}/pt/interesting-places-in-cuba/iberostar-selection-parque-central`,
      },
    },
     robots: {
    index: true,   // Permite indexar (por defecto ya es true)
    follow: true,  // Permite seguir enlaces (por defecto ya es true)
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
                canonical: "https://cubantaxis.com/interesting-places-in-cuba/iberostar-selection-parque-central",
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
                name: "Iberostar Selection Parque Central",
                alternateName: "Hotel 5 estrellas en el corazón de La Habana",
                image: "/iberostar-selection-parque-central.jpg", // falta
                description: "Hotel colonial y moderno en el centro de La Habana, con vistas al Capitolio. Rooftop con piscina, Capitol Level exclusivo y servicios de conferencias y eventos.",
                address: {
                    streetAddress: "Neptuno, entre Prado y Zulueta",
                    addressLocality: "La Habana",
                    postalCode: "10100",
                    addressCountry: "CU",
                },
                phone: "+53 78 606627",
                email: "reservations3@hotelparquecentral.tur.cu",
                website: "https://www.iberostar.com",
            }}
            services={[
                { class: "amenities", icon: "pool", name: "Piscina rooftop" },
                { class: "business", icon: "map", name: "Salas de reuniones" },
                { class: "amenities", icon: "wifi", name: "Wi-Fi gratis" },
                { class: "entertainment", icon: "star", name: "Shows profesionales" },
            ]}
            links={[
                { label: "See all destinations", href: "/destinations-in-cuba" },
                { label: "Contact on WhatsApp", href: "https://wa.me/5354447931", rel: "noopener", target: "_blank" },
            ]}
            breadcrumbs={[
                { name: "Home", item: "https://cubantaxis.com" },
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
