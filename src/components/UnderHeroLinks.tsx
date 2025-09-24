// app/components/SeoLinks.tsx
import { AppTexts } from "@/app/[lang]/locales/types";
import Link from "next/link";

type Page = { href: string; title: string; description: string };

// Mueve los datos fuera del componente (no se recrean en cada render)
const PAGES: ReadonlyArray<Page> = [
  {
    href: "/blog/how-much-is-a-taxi-in-cuba",
    title: "How Much is a Taxi in Cuba?",
    description:
      "Learn about real taxi prices in Cuba, from Havana to Varadero, including airport transfers and long-distance routes.",
  },
  {
    href: "/destinations-in-cuba",
    title: "Popular Destinations in Cuba",
    description:
      "Explore detailed information about the main destinations in Cuba such as Havana, Varadero, Viñales, and Trinidad.",
  },
  {
    // ✅ corrige el typo: interesting → interesting
    href: "/interesting-places-in-cuba",
    title: "Attractions & Places of Interest in Cuba",
    description:
      "Discover top attractions in Cuba: Varadero resorts, Havana landmarks, hotels, and family activities with full details.",
  },
  {
    href: "/cuba-taxi-booking",
    title: "Quick Taxi Reservation",
    description:
      "Book a quick taxi ride across Cuba with just a few clicks. Fast and reliable service.",
  },
  {
    href: "/private-transfer-booking",
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
] as const;

export default function SeoLinks({ idioma,prefetch = false }: {idioma:AppTexts, prefetch?: boolean }) {
  return (
    <section
      className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3"
      aria-labelledby="seo-links-heading"
    >
      <h2 id="seo-links-heading" className="sr-only">
        {idioma.underHeroTitle}
      </h2>

      {idioma.underHeroLinks.map(({ href, title, description }) => (
        <Link
          key={href}
          href={href}
          prefetch={prefetch} // 🚀 evita prefetch por defecto (anulable vía prop)
          className="group block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition 
                     hover:border-yellow-400 hover:shadow-[0_4px_12px_rgba(250,204,21,0.6)]
                     focus-visible:border-yellow-500
                     dark:border-neutral-800 dark:bg-neutral-900"
          itemScope
          itemType="https://schema.org/WebPage"
          aria-label={title}
        >
          <h3
            itemProp="name"
            className="text-lg font-semibold text-neutral-900 group-hover:text-amber-400 group-hover:underline dark:text-neutral-100"
          >
            {title}
          </h3>
          <p
            itemProp="description"
            className="mt-2 text-sm text-neutral-600 group-hover:text-neutral-100 dark:text-neutral-400"
          >
            {description}
          </p>
        </Link>
      ))}
    </section>
  );
}
