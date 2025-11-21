export const articles = {
    howMuchIsATaxiInCuba: {
        seo: {
            headline: "Taxi prices in Cuba 2025",
            description:
                "Updated taxi fares and transfer guide for Cuba in 2025. Havana (HAV) and Varadero (VRA) airport transfers, plus intercity routes.",
            image: "https://cubantaxis.com/cuba-cabs.jpg",
            mainEntityOfPage: "https://cubantaxis.com/blog/taxi-cuba-2025",
            authorName: "CubanTaxis",
            publisherName: "CubanTaxis",
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
    },
    privateTaxiOrCarRental: {
        seo: {
            headline: "Private Taxi or Car Rental — What’s Better for Traveling in Cuba?",
            description:
                "Compare private taxis vs. car rentals in Cuba. Discover which option fits your travel style, budget, and comfort for trips from Havana, Varadero, Trinidad, or Viñales.",
            image: "https://cubantaxis.com/blog/private-taxi-vs-car-rental.png",
            mainEntityOfPage: "https://cubantaxis.com/blog/private-taxi-vs-car-rental-cuba",
            authorName: "CubanTaxis",
            publisherName: "CubanTaxis",
            publisherLogo: "https://cubantaxis.com/logo.png",
        },
        ui: {
            heroSizes: "(min-width: 1024px) 900px, 100vw",
            // bgGradientClass: "bg-gradient-to-b from-sky-50 to-white",
            comparisonNote:
                "All prices are per car (private service). Based on standard transfers in modern or classic vehicles. Night or long-distance supplements may apply.",
            ctaAltQuestion:
                "Need a private transfer or want to combine both options in your itinerary?",
        },
        breadcrumb: {
            homeLabel: "Home",
            blogLabel: "Blog",
            current: "Private Taxi or Car Rental — What’s Better?",
        },
        badges: [
            { label: "Travel Tips", tone: "accent" },
            { label: "Cuba Transfers", tone: "primary" },
            { label: "2025 Update", tone: "neutral" },
        ],
        hero: {
            h1: "Private Taxi or Car Rental — What’s Better for Traveling in Cuba?",
            introP1:
                "Wondering whether to book a private taxi or rent a car in Cuba? Here’s a detailed guide comparing comfort, cost, flexibility, and convenience for routes like Havana–Varadero, Viñales, and Trinidad.",
            ctaPrimary: { label: "Book a private taxi", href: "/cuba-taxi-booking" },
            ctaSecondary: { label: "See route prices", href: "#comparison" },
            subNotePrefix: "Updated 2025",
            subNoteSuffix: "· Prices per car (classic/modern or minivan)",
            heroImage: {
                src: "/private-taxi-vs-car-rental.png",
                alt: "Traveler choosing between private taxi and car rental in Cuba",
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
        sections: {
            privateTaxi: {
                title: "Private Taxi: Comfort Without the Stress",
                paragraph1:
                    "A private taxi in Cuba offers the perfect balance of comfort, reliability, and local expertise. It’s ideal if you want to enjoy your trip without worrying about navigation or road conditions.",
                advantages: [
                    "No need to drive — your local driver handles everything.",
                    "Fixed route prices avoid hidden costs or fuel surprises.",
                    "Flexibility to stop for photos or meals along the way.",
                    "Bilingual drivers who know Cuba’s best spots.",
                ],
                samplePrices: [
                    { route: "Havana → Varadero", price: "from $100 (modern car) / $180 (minivan)" },
                    { route: "Havana → Viñales", price: "$180–$200" },
                    { route: "Havana → Cayo Santa María", price: "$350 (private car)" },
                ],
                bestFor:
                    "Couples, families, or travelers seeking a relaxing experience with reliable door-to-door service.",
            },
            carRental: {
                title: "Car Rental: Freedom Comes with Responsibility",
                paragraph1:
                    "Renting a car in Cuba offers complete independence to explore at your own rhythm. However, it requires preparation and tolerance for the island’s unique road challenges.",
                pros: [
                    "Full freedom to choose your own route and schedule.",
                    "Ideal for long stays or off-the-beaten-path destinations.",
                    "Perfect for travelers with adventure in mind.",
                ],
                cons: [
                    "Limited vehicle availability, especially in high season.",
                    "Maintenance or comfort issues with older rental models.",
                    "Hidden costs: insurance, deposits, and fuel.",
                    "Navigation difficulties and weak mobile signal in rural areas.",
                ],
                estimatedCosts:
                    "Rental cars in Cuba usually cost $70–$120 per day, plus insurance and fuel. A 5-day trip can exceed $500, similar to hiring a private driver.",
            },
            comparison: {
                title: "Cost & Comfort Comparison — Havana ↔ Varadero Round Trip",
                table: {
                    columns: ["Option", "Total Price", "Comfort", "Flexibility", "Effort"],
                    rows: [
                        {
                            option: "Private Taxi",
                            totalPrice: "$100–$180",
                            comfort: "★★★★★",
                            flexibility: "★★★★☆",
                            effort: "Minimal",
                        },
                        {
                            option: "Car Rental",
                            totalPrice: "$150–$250",
                            comfort: "★★★☆☆",
                            flexibility: "★★★★★",
                            effort: "High",
                        },
                    ],
                },
                verdict:
                    "For most visitors, private taxis provide better value and peace of mind. Rentals suit those who prioritize independence over convenience.",
            },
            hybridOption: {
                title: "Private Taxi Tours — The Best of Both Worlds",
                paragraph:
                    "If you want to explore without driving, private taxi tours are a perfect hybrid. You get freedom and flexibility with the comfort of a local driver.",
                examples: [
                    "Havana City Tour (3h): from $75–$120 per car",
                    "Viñales Valley Tour (10h): from $280–$360 per car",
                ],
                cta: { label: "See all tours", href: "/destinations-in-cuba" },
            },
            conclusion: {
                title: "Final Thoughts — Which One Should You Choose?",
                paragraph1:
                    "Both private taxis and car rentals have their merits. The right choice depends on your travel personality and goals.",
                bulletSummary: [
                    "Choose a private taxi if you want safety, comfort, and local insight.",
                    "Choose a car rental if you love freedom and don’t mind challenges.",
                ],
                closingNote:
                    "Whichever you pick, every Cuban road tells a story — from Havana’s vintage convertibles to Viñales’ peaceful valleys.",
            },
        },
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
        ctaFooter: {
            text: "Ready to plan your next route in Cuba?",
            primary: { label: "Book a transfer", href: "/cuba-taxi-booking" },
            secondary: { label: "Explore private tours", href: "/destinations-in-cuba" },
        },
    }
}