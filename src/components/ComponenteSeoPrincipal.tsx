import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// import Link from "next/link"; // links se agregan luego


// --------------------------------------
// Responsive Table: cards (<md) / table (md+)
// --------------------------------------
type TableSpec = { headers: string[]; rows: (string | number)[][]; note?: string };

function ResponsiveTable({ spec }: { spec: TableSpec }) {
  return (
    <>
      {/* Mobile: cards */}
      <div className="space-y-3 md:hidden">
        {spec.rows.map((row, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            {row.map((cell, i) => (
              <div key={i} className="grid grid-cols-[130px_1fr] gap-2 py-1 text-sm">
                <div className="font-medium text-gray-900">{spec.headers[i]}</div>
                <div className="text-gray-700 break-words whitespace-normal">{cell}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop: true table without forced min-width or overflow */}
      <div className="hidden md:block">
        <table className="w-full table-auto text-left text-sm text-gray-700">
          <thead>
            <tr className="border-b">
              {spec.headers.map((h) => (
                <th key={h} className="py-2 pr-4 font-semibold text-gray-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b align-top">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-2 pr-4 break-words whitespace-normal">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {spec.note && <p className="mt-2 text-xs text-gray-500">{spec.note}</p>}
    </>
  );
}

// ========================
// Component (server-ready)
// ========================
export default function CubanTaxisLandingContent({idioma}:any) {
  return (
    <section className={idioma.container}>
      {idioma.sections.map((s: { id: Key | null | undefined; reverse: any; headingLevel: string; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; bullets: any[]; bulletsGrid: any[]; ordered: any[]; list: any[]; table: TableSpec; media: { src: string | StaticImport; alt: string; }; }, idx: number) => (
        <article
          key={s.id}
          className={`mb-12 grid gap-6 md:grid-cols-2 ${s.reverse ? "md:[&>div:first-child]:order-last" : ""}`}
        >
          {/* Text column */}
          <div className="flex flex-col justify-center">
            {s.headingLevel === "h2" ? (
              <h2 className="text-2xl font-bold text-primary">{s.title}</h2>
            ) : (
              <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
            )}

            <p className="mt-3 text-primary">{s.text}</p>

            {s.bullets && (
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                {s.bullets.map((b: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                  <li key={b as never} className="marker:text-accent">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {s.bulletsGrid && (
              <ul className="mt-3 grid grid-cols-1 gap-1 text-gray-700 md:grid-cols-2">
                {s.bulletsGrid.map((b: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                  <li key={b as never} className="marker:text-accent">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {s.ordered && (
              <ol className="mt-3 list-decimal pl-5 text-gray-700">
                {s.ordered.map((b: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                  <li key={b as never} className="marker:text-accent">
                    {b}
                  </li>
                ))}
              </ol>
            )}

            {s.list && (
              <ul className="mt-3 text-gray-700">
                {s.list.map((b: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                  <li key={b as never} className="marker:text-accent">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {s.table && (
              <div className="mt-4">
                <ResponsiveTable spec={s.table} />
              </div>
            )}

            {/* NOTA: los TODOs están comentados arriba en el objeto CONTENT */}
          </div>

          {/* Media column */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={s.media.src}
              alt={s.media.alt}
              fill
              className="object-cover"
              loading={idx === 0 ? undefined : "lazy"}
            />
          </div>
        </article>
      ))}

      {/* Price snapshot */}
      <article className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-primary">{idioma.priceSnapshot.title}</h2>
        <div className="mt-3">
          <ResponsiveTable spec={idioma.priceSnapshot} />
        </div>
      </article>
    </section>
  );
}
