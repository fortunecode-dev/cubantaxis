// app/components/SeoLinks.tsx
import Link from "next/link";

export default async function SeoLinks() {
  const pages = [
    {
      href: "/blog/how-much-is-a-taxi",
      title: "How Much is a Taxi in Cuba?",
      description:
        "Learn about real taxi prices in Cuba, from Havana to Varadero, including airport transfers and long-distance routes.",
    },
    {
      href: "/destinations",
      title: "Popular Destinations in Cuba",
      description:
        "Explore detailed information about the main destinations in Cuba such as Havana, Varadero, Viñales, and Trinidad.",
    },
    {
      href: "/lugares-interes",
      title: "Attractions & Places of Interest in Cuba",
      description:
        "Discover top attractions in Cuba: Varadero resorts, Havana landmarks, hotels, and family activities with full details.",
    },
    {
      href: "/taxi",
      title: "Quick Taxi Reservation",
      description:
        "Book a quick taxi ride across Cuba with just a few clicks. Fast and reliable service.",
    },
    {
      href: "/transfer-booking",
      title: "Detailed Transfer Booking",
      description:
        "Plan your transfer with detailed options for vehicles, routes, and schedules.",
    },
    {
      href: "/taxi-in-cuba",
      title: "Taxi in Cuba – Guide & FAQs",
      description:
        "Informative guide about taking a taxi in Cuba, including frequently asked questions.",
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-labelledby="seo-links-heading"
    >
      <h2 id="seo-links-heading" className="sr-only">
        Key pages about taxis in Cuba
      </h2>

      {pages.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm transition-all 
                     hover:border-yellow-400 hover:shadow-[0_4px_12px_rgba(250,204,21,0.6)] focus-visible:border-yellow-500"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <h3
            itemProp="name"
            className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-black group-hover:underline"
          >
            {item.title}
          </h3>
          <p
            itemProp="description"
            className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800"
          >
            {item.description}
          </p>
        </Link>
      ))}
    </section>
  );
}
