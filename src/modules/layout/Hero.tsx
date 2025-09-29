// app/components/HeroCubanTaxis.tsx
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const BLUR =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="; // 1x1 transparente, evita CLS sin pesar

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt" | (string & {});
type Props = { lang: any };

function emphasizeNodes(text: string, phrases?: string[] | string): ReactNode {
  const terms = Array.isArray(phrases) ? phrases.filter(Boolean) : phrases ? [phrases] : [];
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const i = m.index;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(
      <span key={`emp-${i}`} className="text-accent">
        {m[0]}
      </span>
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function HeroCubanTaxis({ lang }: Props) {
  // En ≥1024px, cada imagen ≈ 25vw; en móvil ≈ 50vw (el grid está oculto en móvil)
  const gridSizes = "(min-width:1024px) 25vw, 50vw";

  return (
    <section className="bg-white">
      {/* separador top para header fijo */}
      <div className="h-16" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 pt-6 md:pt-10 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Izquierda: todo lo importante ABOVE-THE-FOLD (SEO + LCP) */}
          <div>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {emphasizeNodes(lang.h1Title, lang.emphasis)}
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl font-bold text-primary">
              {lang.h2SubTitle}
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">{lang.introParagraph}</p>

            {/* CTAs — sin prefetch para no ensuciar la red desde el hero */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={lang.link.href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg underline px-5 py-3 text-sm font-semibold text-primary"
                aria-label="More about taxis in cuba"
              >
                {lang.link.label}
              </Link>
              <Link
                href={lang.cta.fastBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10"
                aria-label="Book your trip in advance"
              >
                {lang.cta.customBooking}
              </Link>
              <Link
                href={lang.cta.customBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                aria-label="Quick Booking"
              >
                {lang.cta.fastBooking}
                <span className="-mr-1" aria-hidden>
                  »
                </span>
              </Link>
            </div>

            {/* Lista de servicios (sigue visible sobre el pliegue) */}
            <div className="mt-10">
              <h3 id={lang.list.id} className="text-base font-semibold text-gray-900">
                {lang.list.h2}
              </h3>
              <ul className="mt-3 grid list-disc gap-x-8 gap-y-2 pl-5 sm:grid-cols-2 text-gray-700">
                {lang.list.items.map((item: string) => (
                  <li key={item} className="marker:text-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Derecha: grid decorativo (SSR + SEO-friendly). Oculto en móvil. Lazy en desktop. */}
          <div
            className="relative hidden lg:block"
            // Difere trabajo de pintura y layout hasta que sea necesario (no afecta HTML para SEO)
            style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* Img 1 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-beaches.avif"
                  alt="Beaches near Havana"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Img 2 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/havana-capitol.avif"
                  alt="Capitolio of Havana"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Img 3 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-coco-taxi.avif"
                  alt="Coco taxi in Havana"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Img 4 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/vinales.avif"
                  alt="Viñales valley tour"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          {/* /Derecha */}
        </div>
      </div>
    </section>
  );
}
