import PlaceSEOCard from "@/components/PlaceCard";

export default function Example() {
  return (
    <PlaceSEOCard
      seo={{
        title: "Taxi Pickup at José Martí International Airport (HAV) | Cuban Taxis",
        description:
          "Private airport pickup at HAV with professional drivers. Fixed prices, flight tracking and 24/7 support.",
        keywords: ["taxi cuba", "havana airport transfer", "cuban taxis"],
        canonical: "https://www.cubantaxis.com/en/hav-airport-transfer",
        robots: "index,follow",
        siteName: "Cuban Taxis",
        locale: "en_US",
        ogImage: "https://www.cubantaxis.com/og/hav-transfer.jpg",
        ogType: "place",
        twitterCard: "summary_large_image",
        hreflangAlternates: {
          en: "https://www.cubantaxis.com/hav-airport-transfer",
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
        { name: "Home", item: "https://www.cubantaxis.com/" },
        { name: "Transfers", item: "https://www.cubantaxis.com/transfers" },
        { name: "HAV Airport", item: "https://www.cubantaxis.com/en/hav-airport-transfer" },
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
