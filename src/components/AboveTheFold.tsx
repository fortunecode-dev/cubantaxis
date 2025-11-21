import { ResponsiveTable, TableSpec } from "@/utils/fragments";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export default function AboveTheFold({ idioma }: any) {
  return (
    <section className={idioma.container}>
      {idioma.sections.map(
        (
          s: {
            id: Key | null | undefined;
            reverse: any;
            headingLevel: string;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
            text:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
            bullets: any[];
            bulletsGrid: any[];
            ordered: any[];
            list: any[];
            todos: any[];
            table: TableSpec;
            media: { src: string | StaticImport; alt: string };
          },
          idx: number
        ) => (
          <article
            key={s.id}
            className={`mb-12 grid gap-6 md:grid-cols-2 ${
              s.reverse ? "md:[&>div:first-child]:order-last" : ""
            }`}
          >
            {/* Text column */}
            <div className="flex flex-col justify-center">
              {s.headingLevel === "h2" ? (
                <h2 className="text-2xl font-bold text-primary">{s.title}</h2>
              ) : (
                <h3 className="text-xl font-semibold text-primary">
                  {s.title}
                </h3>
              )}

              <p className="mt-3 text-primary">{s.text}</p>

              {s.bullets && (
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                  {s.bullets.map(
                    (
                      b:
                        | boolean
                        | Key
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactPortal
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    ) => (
                      <li key={b as never} className="marker:text-accent">
                        {b}
                      </li>
                    )
                  )}
                </ul>
              )}

              {s.bulletsGrid && (
                <ul className="mt-3 grid grid-cols-1 gap-1 text-gray-700 md:grid-cols-2">
                  {s.bulletsGrid.map(
                    (
                      b:
                        | boolean
                        | Key
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactPortal
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    ) => (
                      <li key={b as never} className="marker:text-accent">
                        {b}
                      </li>
                    )
                  )}
                </ul>
              )}

              {s.ordered && (
                <ol className="mt-3 list-decimal pl-5 text-gray-700">
                  {s.ordered.map(
                    (
                      b:
                        | boolean
                        | Key
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactPortal
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    ) => (
                      <li key={b as never} className="marker:text-accent">
                        {b}
                      </li>
                    )
                  )}
                </ol>
              )}

              {s.list && (
                <ul className="mt-3 text-gray-700">
                  {s.list.map(
                    (
                      b:
                        | boolean
                        | Key
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactPortal
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined
                    ) => (
                      <li key={b as never} className="marker:text-accent">
                        {b}
                      </li>
                    )
                  )}
                </ul>
              )}

              {s.table && (
                <div className="mt-4">
                  <ResponsiveTable spec={s.table} />
                </div>
              )}
              {s.todos?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.todos.map((t) => (
                    <Link
                      key={t.href}
                      title={t.label}
                      href={`https://cubantaxis.com${t.href}`}
                      className="rounded-full border border-dashed border-gray-400 px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              {/* NOTA: los TODOs están comentados arriba en el objeto CONTENT */}
            </div>

            {/* Media column */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={s.media.src}
                alt={s.media.alt}
                fill
                className="object-cover"
                loading={idx === 0 ? undefined : "lazy"}
              />
            </div>
          </article>
        )
      )}

      {/* Price snapshot */}
      <article className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-primary">
          {idioma.priceSnapshot.title}
        </h2>
        <div className="mt-3">
          <ResponsiveTable spec={idioma.priceSnapshot} />
        </div>
      </article>
    </section>
  );
}
