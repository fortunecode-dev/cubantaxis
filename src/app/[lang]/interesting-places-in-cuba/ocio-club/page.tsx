import PlaceSEOCard from "@/components/PlaceCard";
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
const path = `/${lang}/interesting-places-in-cuba/ocio-club`;
  const url = `${base}${path}`;
  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Interesting Place In Varadero | Ocio Club | Place For Childrens",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
    alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/interesting-places-in-cuba/ocio-club`,
        en: `${base}/en/interesting-places-in-cuba/ocio-club`,
        es: `${base}/es/interesting-places-in-cuba/ocio-club`,
        fr: `${base}/fr/interesting-places-in-cuba/ocio-club`,
        de: `${base}/de/interesting-places-in-cuba/ocio-club`,
        ru: `${base}/ru/interesting-places-in-cuba/ocio-club`,
        pt: `${base}/pt/interesting-places-in-cuba/ocio-club`,
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
