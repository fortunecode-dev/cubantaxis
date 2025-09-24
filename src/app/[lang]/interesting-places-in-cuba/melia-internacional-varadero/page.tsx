import PlaceSEOCard from "@/components/PlaceCard";
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
const path = `/${lang}/interesting-places-in-cuba/melia-internacional-varadero`;
  const url = `${base}${path}`;
  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Interesting Place In Varadero | Meliá Internacional | Hotel",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
     alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/interesting-places-in-cuba/melia-internacional-varadero`,
        en: `${base}/en/interesting-places-in-cuba/melia-internacional-varadero`,
        es: `${base}/es/interesting-places-in-cuba/melia-internacional-varadero`,
        fr: `${base}/fr/interesting-places-in-cuba/melia-internacional-varadero`,
        de: `${base}/de/interesting-places-in-cuba/melia-internacional-varadero`,
        ru: `${base}/ru/interesting-places-in-cuba/melia-internacional-varadero`,
        pt: `${base}/pt/interesting-places-in-cuba/melia-internacional-varadero`,
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
                canonical: "https://cubantaxis.com/interesting-places-in-cuba/melia-internacional-varadero",
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
                name: "Meliá Internacional Varadero",
                alternateName: "Resort 5 estrellas Varadero",
                image: "/melia-internacional-varadero.webp", // falta
                description: "Resort de lujo frente al mar con habitaciones modernas, gastronomía variada, YHI Spa y acceso a una de las playas más famosas del Caribe. Ideal para familias o adultos.",
                address: {
                    streetAddress: "Avenida Las Américas, Km 1",
                    addressLocality: "Varadero",
                    addressRegion: "Matanzas",
                    addressCountry: "CU",
                },
                phone: "+53 45 623100",
                email: "melia.internacional@meliacuba.com",
                website: "https://www.melia.com/en/hotels/cuba/varadero/melia-internacional-varadero",
            }}
            services={[
                { class: "general", icon: "star", name: "Todo incluido" },
                { class: "amenities", icon: "wifi", name: "Internet" },
                { class: "wellness", icon: "spa", name: "YHI Spa" },
                { class: "family", icon: "car", name: "Actividades familiares" },
                { class: "sports", icon: "beach", name: "Deportes acuáticos" },
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
