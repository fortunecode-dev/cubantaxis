export const articles = {
    howMuchIsATaxiInCuba: {
        seo: {
            headline: "Taxi prices in Cuba 2025",
            description:
                "Updated taxi fares and transfer guide for Cuba in 2025. Havana (HAV) and Varadero (VRA) airport transfers, plus intercity routes.",
            image: "https://cubantaxis.com/cuba-cabs.jpg",
            mainEntityOfPage: "https://cubantaxis.com/blog/taxi-cuba-2025",
            authorName: "Cuban Taxis",
            publisherName: "Cuban Taxis",
            publisherLogo: "https://cubantaxis.com/logo.png",
        },
        ui: {
            heroSizes: "(min-width: 1024px) 900px, 100vw",
            bgGradientClass: "bg-gradient-to-b",
            tableNote:
                "Prices are per car (private service). Final quote depends on car type (classic/modern or minivan), pick-up point, night supplements and optional stops.",
            ctaAltQuestion:
                "Need a different route or a classic convertible for a city tour?",
        },
        breadcrumb: {
            homeLabel: "Home",
            blogLabel: "Blog",
            current: "Taxi prices in Cuba 2025",
        },
        badges: [
            { label: "2025 Prices", tone: "accent" },
            { label: "Private transfers", tone: "primary" },
            { label: "English-speaking drivers", tone: "primary" },
        ],
        hero: {
            h1: "How much does a taxi cost in Cuba in 2025?",
            introP1:
                "Updated guide to Cuba taxi prices and airport transfers. See real costs from Havana (HAV / José Martí) and Varadero (VRA) to Varadero, Viñales, Trinidad, Cienfuegos and more. Fixed rates per car, not per person.",
            ctaPrimary: { label: "Book a private transfer", href: "/cuba-taxi-booking" },
            ctaSecondary: { label: "View price table", href: "#prices" },
            subNotePrefix: "Updated",
            subNoteSuffix: "· Prices per car (classic/modern or minivan)",
            heroImage: {
                src: "/cuba-cabs.jpg",
                alt: "Classic taxi in Havana, Cuba",
                width: 900,
                height: 630,
            },
        },
        valueProps: [
            {
                title: "Transparent pricing",
                desc: "Confirmed quotes for airports and intercity routes. No hidden fees.",
            },
            {
                title: "Right vehicle for you",
                desc: "Classic cars for city tours or comfortable minivans for families.",
            },
            {
                title: "Pick-ups you can trust",
                desc: "English-speaking drivers and flight monitoring for airport arrivals.",
            },
        ],
        prices: {
            title: "Taxi prices in Cuba by route (2025)",
            intro:
                "Prices are per car (private service). Final quote depends on car type (classic/modern or minivan), pick-up point, night supplements and optional stops.",
            columns: {
                route: "Route",
                classicModern: "Classic / Modern",
                minivan: "Minivan",
                notes: "Notes",
            },
            rows: [
                { route: "Havana Airport (HAV) → Downtown", classicModern: "$30", minivan: "$55", notes: "Typical arrival transfer" },
                { route: "Havana → Varadero", classicModern: "$100", minivan: "$180", notes: "Same-day return available" },
                { route: "Havana → Viñales", classicModern: "$130", minivan: "$200", notes: "Round-trip on request" },
                { route: "Havana → Trinidad", classicModern: "$250", minivan: "$320", notes: "Via Cienfuegos optional" },
                { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
                { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
                { route: "Varadero Airport (VRA) → Hotels", classicModern: "$40", minivan: "$60–70" },
            ],
            footnote:
                "Prices may vary for pick-ups far from Havana’s KM-0 (Capitolio) and for night hours.",
            cta: { label: "Get a quote", href: "/cuba-taxi-booking" },
        },
        tips: {
            whatAffects: {
                title: "What affects the price?",
                items: [
                    "Distance and travel time between cities",
                    "Vehicle type: classic/modern car or minivan",
                    "Day vs. night pick-ups, airport parking and waiting time",
                    "Private vs. shared transfer and optional sightseeing stops",
                ],
            },
            touristTips: {
                title: "Tips for tourists",
                paragraphPrefix:
                    "Book in advance to lock a fixed fare and share your flight number for airport pick-ups. Private transfers are the most convenient and safe option. You can",
                link: { label: "book your taxi online", href: "/private-transfer-booking" },
                paragraphSuffix: "and pay on arrival.",
            },
        },
    }
}