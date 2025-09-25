// components/FaqSection.tsx
import Link from "next/link";
import Script from "next/script";

interface FaqItem {
  question: string;
  answer: string; // admite [label](/ruta) o [label](https://externo)
}
interface Props {
  title: string;
  faqs: FaqItem[];
  structuredData?: boolean; // default: true
  prefetchInternalLinks?: boolean; // default: false (evita descargar páginas innecesarias)
}

// --- Utils (precompiladas para no recrearlas por render) ---
const LINK_TOKEN_RE = /(\[.*?\]\(.*?\))/g;
const LINK_FULL_RE = /^\[(.*?)\]\((.*?)\)$/;

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function renderAnswer(text: string, prefetchInternalLinks: boolean) {
  const parts = text.split(LINK_TOKEN_RE);
  return parts.map((part, i) => {
    const match = part.match(LINK_FULL_RE);
    if (!match) return <span key={i}>{part}</span>;

    const [, label, href] = match;
    const isInternal = href.startsWith("/");

    return isInternal ? (
      <Link
        key={i}
        href={href}
        prefetch={prefetchInternalLinks}
        className="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500"
      >
        {label}
      </Link>
    ) : (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500"
      >
        {label}
      </a>
    );
  });
}

export default function FaqSection({
  title,
  faqs,
  structuredData = true,
  prefetchInternalLinks = false,
}: Props) {
  // Server Component: todo se calcula una vez por render, sin hooks.
  const withIds = faqs.map((f,i) => ({ ...f, id: slugify(f.question)+i }));

  // Genera JSON-LD solo si se va a inyectar
  const jsonLd = structuredData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: withIds.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <section className="bg-white dark:bg-black" aria-labelledby="faq-title">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-10 lg:px-6">
        <h2
          id="faq-title"
          className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          {title}
        </h2>

        {/* Índice interno si hay suficientes preguntas */}
        {withIds.length > 3 && (
          <nav aria-label="FAQ quick links" className="mb-6">
            <ul className="flex flex-wrap gap-3 text-sm">
              {withIds.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="underline text-primary-600 hover:no-underline dark:text-primary-400"
                  >
                    {item.question}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <div className="flex flex-wrap gap-6">
            {withIds.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="mb-8 min-w-[280px] max-w-[580px] flex-1 scroll-mt-24"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="mb-3 flex items-center text-base font-medium text-gray-900 dark:text-white"
                  itemProp="name"
                >
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
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
                  <div itemProp="text">
                    {renderAnswer(item.answer, prefetchInternalLinks)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {structuredData && jsonLd && (
        <Script
          id="ld-faq"
          type="application/ld+json"
          // JSON.stringify en servidor: nada de hooks, nada al bundle del cliente
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </section>
  );
}
