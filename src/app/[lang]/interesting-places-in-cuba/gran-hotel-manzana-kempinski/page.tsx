import PlaceSEOCard from "@/components/PlaceCard";
import { buildAlternates, Locale } from "../../../../seoUtils/seo-builder";
import { Metadata } from "next";
export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params; // ya no rompe
  const  slugNoLang =  `/interesting-places-in-cuba/gran-hotel-manzana-kempinski`;
  const { canonicalNeutral, languages, canonicalFor } = buildAlternates(slugNoLang);
  const pathByLang: Record<string, string> = { en: "/en/" };

  return {
    title: "Interesting Place In Havana | Gran Hotel Manzana Kempinski | Hotel",
    description:
      "Book a Cuba taxi for airport transfer or tour online with the fast booking form. Fixed prices, rides, English-speaking drivers in Havana and Varadero.",
   alternates: {
      canonical: canonicalFor(lang as Locale), // canónica = neutra
      languages,                   // incluye en + x-default = neutra
    },
     robots: {
    index: true,   // Permite indexar (por defecto ya es true)
    follow: true,  // Permite seguir enlaces (por defecto ya es true)
  },
    openGraph: { url:canonicalNeutral },
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
        canonical: "https://cubantaxis.com/interesting-places-in-cuba/gran-hotel-manzana-kempinski",
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
        name: "Gran Hotel Manzana Kempinski",
        alternateName: "Primer hotel de lujo en La Habana",
        image: "/gran-hotel-manzana-kempinski.jpg", // falta
        description: "Hotel de lujo en el corazón de La Habana Vieja, rodeado de sitios Patrimonio de la Humanidad. Habitaciones con vistas a la ciudad y spa exclusivo.",
        address: {
          streetAddress: "Calle San Rafael",
          addressLocality: "La Habana",
          postalCode: "10100",
          addressCountry: "CU",
        },
        phone: "+53 7 8699100",
        email: "reservations.lahabana@kempinski.com",
        website: "https://www.kempinski.com",
      }}
      services={[
        { class: "wellness", icon: "spa", name: "Spa exclusivo" },
        { class: "amenities", icon: "star", name: "Habitaciones Deluxe" },
        { class: "food", icon: "map", name: "Restaurantes gourmet" },
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
