// components/FaqSection.tsx
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string; // admite [label](/ruta) o [label](https://externo)
}
interface Props {
  title: string;
  faqs: FaqItem[];
  structuredData?: boolean; // default: true
  prefetchInternalLinks?: boolean; // default: false (ahorra ancho de banda)
}

// --- Utils ---
const LINK_TOKEN_RE = /(\[.*?\]\(.*?\))/g;
const LINK_FULL_RE = /^\[(.*?)\]\((.*?)\)$/;

function slugify(input: string) {
  return input
    .normalize("NFD") // quita acentos
    .replace(/[\u0300-\u036f]/g, "")
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
}: Props) {
  // Server Component: cálculo en SSR
  const withIds = faqs.map((f, i) => ({
    ...f,
    id: `${slugify(f.question)}-${i}`,
  }));

  return (
    <section
      className="bg-white mt-12 pt-3"
      id="frequently-asked-questions"
      aria-labelledby="faq-title"
      // 💡 Speed Insights: difiere trabajo hasta ser visible sin provocar CLS
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        {/* Título — rojo y negrita */}
        <h2
          id="faq-title"
          className="mb-6 text-3xl font-extrabold tracking-tight text-accent"
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
            {withIds.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="mb-6 min-w-[280px] max-w-[580px] flex-1 scroll-mt-24"
                itemScope
                itemType="https://schema.org/Question"
              >
                {/* Pregunta — rojo y negrita */}
                <h3
                  className="mb-3 flex items-center text-base font-bold text-accent"
                  itemProp="name"
                >
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-accent"
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

                {/* Respuesta — texto azul */}
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
      </div>

      {/* {structuredData && jsonLd && (
        // ✅ Server-rendered JSON-LD sin next/script (0 JS cliente)
        <script
          id="ld-faq"
          type="application/ld+json"
          // Nota: No interpoles objetos, siempre serializa
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )} */}
    </section>
  );
}
