// components/FaqSection.tsx
import Link from "next/link";
import Script from "next/script";
import { useMemo } from "react";

interface FaqItem {
  question: string;
  answer: string; // supports inline markdown-style links: [label](/path)
}

interface Props {
  title: string;
  faqs: FaqItem[];
  /**
   * If true, injects FAQPage JSON-LD (recommended once per page).
   * If you already add FAQ JSON-LD elsewhere, set this to false to avoid duplicates.
   */
  structuredData?: boolean;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function renderAnswer(text: string) {
  // Split on [label](href) preserving the match group
  const parts = text.split(/(\[.*?\]\(.*?\))/g);

  return parts.map((part, i) => {
    const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (match) {
      const [, label, href] = match;
      const isInternal = href.startsWith("/");
      return isInternal ? (
        <Link
          key={i}
          href={href}
          className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
        >
          {label}
        </Link>
      ) : (
        <a
          key={i}
          href={href}
          className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function FaqSection({ title, faqs, structuredData = true }: Props) {
  // Build stable anchors and JSON-LD only once
  const { withIds, jsonLd } = useMemo(() => {
    const withIds = faqs.map((f) => ({ ...f, id: slugify(f.question) }));
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: withIds.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer, // can include basic HTML; Google will render safely
        },
      })),
    };
    return { withIds, jsonLd };
  }, [faqs]);

  return (
    <section
      className="bg-white dark:bg-gray-900"
      aria-labelledby="faq-title"
    >
      <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
        {/* Use H2 for on-page hierarchy; avoid multiple H1s */}
        <h2
          id="faq-title"
          className="mb-6 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {title}
        </h2>

        {/* Optional jump list for better UX/SEO (internal anchors) */}
        {withIds.length > 3 && (
          <nav aria-label="FAQ quick links" className="mb-6">
            <ul className="flex flex-wrap gap-3 text-sm">
              {withIds.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-primary-600 dark:text-primary-400 underline hover:no-underline"
                  >
                    {item.question}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="pt-6 text-left border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-6">
            {withIds.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="flex-1 min-w-[280px] max-w-[580px] mb-8 scroll-mt-24"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="flex items-center mb-3 text-base font-medium text-gray-900 dark:text-white"
                  itemProp="name"
                >
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.question}
                </h3>

                <div
                  className="text-sm text-gray-600 dark:text-gray-300"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{renderAnswer(item.answer)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD for rich results (emit only once per page) */}
      {structuredData && (
        <Script
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </section>
  );
}
