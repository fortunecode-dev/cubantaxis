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
                { label: "See all destinations", href: "/destinations" },
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
