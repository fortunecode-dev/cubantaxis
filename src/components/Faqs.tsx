// components/FaqSection.tsx
import { buildTaxiFaqFromKey } from "@/seoUtils/seo-builder";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  faqs: FaqItem[];
  structuredData?: boolean;
  prefetchInternalLinks?: boolean;
  seeMore?: null | string;
  idioma?: any;
}

// --- Utils ---
const LINK_TOKEN_RE = /(\[.*?\]\(.*?\))/g;
const LINK_FULL_RE = /^\[(.*?)\]\((.*?)\)$/;

function slugify(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function stripLinks(text: string) {
  return text.replace(LINK_TOKEN_RE, (token) => {
    const match = token.match(LINK_FULL_RE);
    return match ? match[1] : token;
  });
}

function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripLinks(f.answer),
      },
    })),
  };
}

function renderAnswer(text: string, prefetchInternalLinks: boolean) {
  const parts = text.split(LINK_TOKEN_RE);
  return parts.map((part, i) => {
    const match = part.match(LINK_FULL_RE);
    if (!match) return <span key={i}>{part}</span>;

    const [, label, href] = match;
    const isInternal = href.startsWith("/");

    const cls =
      "font-bold underline text-primary hover:text-accent underline-offset-2 hover:no-underline";

    return isInternal ? (
      <Link
        key={i}
        href={href}
        prefetch={prefetchInternalLinks}
        className={cls}
      >
        {label}
      </Link>
    ) : (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
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
  seeMore = null,
  idioma,
}: Props) {
  const priceFaqs = seeMore ? [] : buildTaxiFaqFromKey(idioma);
  const withIds = faqs.map((f, i) => ({
    ...f,
    id: `${slugify(f.question)}-${i}`,
  }));
  const priceWithIds = priceFaqs.map((f, i) => ({
    ...f,
    id: `${slugify(f.question)}-${i}`,
  }));
  const allFaqs = [...withIds, ...priceWithIds];

  const jsonLd = structuredData ? buildFaqJsonLd(allFaqs) : null;

  return (
    <section
      className="bg-white mt-12 pt-3"
      id="frequently-asked-questions"
      aria-labelledby="faq-title"
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <h2
          id="faq-title"
          className="mb-6 text-3xl font-extrabold tracking-tight text-accent"
        >
          {title}
        </h2>

        {withIds.length > 3 && (
          <nav aria-label="FAQ quick links" className="mb-6">
            <ul className="flex flex-wrap gap-3 text-sm">
              {withIds.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-primary font-bold underline underline-offset-2 hover:text-accent hover:no-underline"
                  >
                    {item.question}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="border-t border-primary/15 pt-6">
          <div className="flex flex-wrap gap-8">
            {allFaqs.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="mb-6 min-w-[280px] max-w-[580px] flex-1 scroll-mt-24"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="mb-3 flex items-center text-base font-bold text-accent"
                  itemProp="name"
                >
                  {item.question}
                </h3>

                <div
                  className="text-sm text-primary"
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

        {seeMore && (
          <div className="mt-10 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 rounded-xl border border-accent px-6 py-3 text-sm font-bold text-accent hover:bg-accent hover:text-white transition-colors"
            >
              {seeMore}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>

      {/* ✅ JSON-LD FAQPage (SSR, 0 JS cliente) */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </section>
  );
}
