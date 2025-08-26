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
