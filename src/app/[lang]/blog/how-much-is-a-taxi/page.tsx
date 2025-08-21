import { LocaleLink } from "@/libs/i18n-nav";
import Image from "next/image";
import { getTranslation } from "../../locales";
import { LocaleParams } from "@/types/common";

// ✅ SEO Metadata for Next.js App Router
export const metadata = {
  title: "How much does a taxi cost in Cuba in 2025? 🚖 Prices & Travel Guide",
  description:
    "Updated taxi prices in Cuba for 2025. Find out how much taxis cost from Havana Airport, Varadero, Viñales, Trinidad, and more. Safe and reliable transfer guide for tourists.",
  keywords: [
    "Taxi Cuba 2025",
    "Cuba taxi prices",
    "Havana airport taxi cost",
    "Varadero taxi 2025",
    "Taxi Havana Trinidad",
    "Cuba private transfers",
    "Taxi guide Cuba"
  ],
  openGraph: {
    title: "Taxi Prices in Cuba 2025 | Havana, Varadero, Viñales, Trinidad",
    description:
      "Full guide to taxi fares in Cuba 2025. Check updated costs for routes from Havana to Varadero, Viñales, Trinidad and more.",
    url: "https://cubantaxis.com/blog/taxi-cuba-2025",
    siteName: "Taxi Cuba Blog",
    images: [
      {
        url: "/cuba-cabs.jpg",
        width: 900,
        height: 500,
        alt: "Classic taxi in Havana, Cuba",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default async function BlogTaxiCuba({ params }: { params: LocaleParams }) {
  const { lang } = await params;
  const idioma = getTranslation(lang);

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* SEO Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          How much does a taxi cost in Cuba in 2025? 🚖
        </h1>
        <p className="text-gray-600">
          Updated guide to taxi prices in Cuba: Havana, Varadero, Viñales, Trinidad, and more.
        </p>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="/cuba-cabs.jpg"
          alt="Classic taxi in Havana, Cuba"
          width={900}
          height={500}
          className="rounded-xl shadow-lg mx-auto"
          priority
        />
      </div>

      {/* SEO Content */}
      <section className="prose prose-lg max-w-none text-justify">
        <h2>Taxi prices in Cuba by route</h2>
        <p>
          The price of a <strong>taxi in Cuba</strong> depends on the route,
          the type of vehicle (classic, modern, or minivan), and whether it’s a
          private or shared transfer. Below are some reference prices for 2025:
        </p>

        <ul>
          <li>
            <strong>Havana Airport to downtown:</strong> from 30 USD.
          </li>
          <li>
            <strong>Havana – Varadero:</strong> between 100 and 160 USD.
          </li>
          <li>
            <strong>Havana – Viñales:</strong> from 120 USD.
          </li>
          <li>
            <strong>Havana – Trinidad:</strong> between 200 and 250 USD.
          </li>
          <li>
            <strong>Varadero – Cienfuegos:</strong> from 120 USD.
          </li>
        </ul>

        <h2>What factors affect the price?</h2>
        <p>
          Taxi prices in Cuba vary depending on the <strong>distance</strong>,
          the <strong>type of car</strong> (classic cars, modern ones, or minivans),
          the <strong>time of day</strong> (day/night), and whether it is a <strong>private</strong>
          or <strong>shared</strong> service.
        </p>

        <h2>Tips for tourists</h2>
        <p>
          To avoid surprises, it’s best to <strong>book your taxi in advance</strong>.
          Companies like <em>Cubantaxis</em> offer fixed prices and trusted drivers,
          ensuring safety and comfort during your trip.
        </p>

        <blockquote>
          ✅ Tip: If you want safe transfers at the best price, you can book your taxi in Cuba
          directly from our website in the{" "}
          <LocaleLink href="/book-a-travel">Book</LocaleLink> section.
        </blockquote>

        <h2>Conclusion</h2>
        <p>
          A taxi in Cuba costs between <strong>30 and 250 USD</strong> depending on the route.
          The most recommended option for tourists is to book a <strong>private transfer</strong>
          for greater comfort and safety.
        </p>
      </section>
    </article>
  );
}
