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
                website: "https://cubantaxis.com/intresting-places-in-cuba/ocio-club",
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
