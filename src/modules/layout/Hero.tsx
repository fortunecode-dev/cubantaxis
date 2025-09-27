// app/components/HeroCubanTaxis.tsx
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslation } from "@/app/[lang]/locales";

const BLUR =
  "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="; // 1x1 transparente, evita CLS sin pesar



type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt" | (string & {});

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
    parts.push(<span key={`emp-${i}`} className="text-accent">{m[0]}</span>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function HeroCubanTaxis({ lang = "en" }: { lang?: Lang }) {
  const base =
    ["en", "es", "fr", "de", "ru", "pt"].includes(lang as string) ? `/${lang}` : "/en";
  const idioma = getTranslation(lang);

  const bookingHref = `${base}/private-transfer-booking`;
  const quickBookingHref = `${base}/cuba-taxi-booking`;

  // Tamaños responsive:
  // - En ≥1024px, el héroe es 2 columnas; el bloque derecho ocupa ~50vw, cada imagen ~25vw (2 columnas).
  // - En <1024px, el grid ocupa todo el ancho; cada imagen ~50vw.
  const gridSizes = "(min-width:1024px) 25vw, 50vw";

  return (
    <section className="bg-white">
      {/* separador top para header fijo */}
      <div className="h-16" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 pt-6 md:pt-10 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Izquierda: copy SSR (0 JS en cliente) */}
          <div>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {emphasizeNodes(idioma.content.hero.h1Title, idioma.content.hero.emphasis)}
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl font-bold text-primary">
              {idioma.content.hero.h2SubTitle}
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">{idioma.content.hero.introParagraph}</p>

            {/* CTAs — prefetch off para ahorrar ancho de banda si no están en viewport */}
            <div className="mt-7 flex flex-wrap gap-3">
               <Link
                href={idioma.content.hero.link.href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg underline px-5 py-3 text-sm font-semibold text-primary"
                aria-label="More about taxis in cuba"
              >
                {idioma.content.hero.link.label}
              </Link>
              <Link
                href={bookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10"
                aria-label="Book your trip in advance"
              >
                {idioma.content.hero.cta.customBooking}
              </Link>
              <Link
                href={quickBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                aria-label="Quick Booking"
              >
                {idioma.content.hero.cta.fastBooking}
                <span className="-mr-1" aria-hidden>»</span>
              </Link>
            </div>

            {/* Lista de servicios */}
            <div className="mt-10">
              <h3 id={idioma.content.hero.list.id} className="text-base font-semibold text-gray-900">
                {idioma.content.hero.list.h2}
              </h3>
              <ul className="mt-3 grid list-disc gap-x-8 gap-y-2 pl-5 sm:grid-cols-2 text-gray-700">
                {idioma.content.hero.list.items.map((item:any) => (
                  <li key={item} className="marker:text-accent">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Derecha: grid 2x2 con next/image optimizado */}
          <div className="relative">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* Imagen 1: arriba-izq — prioritaria para mejorar LCP si suele quedar visible */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-beaches.jpg"
                  alt="Beaches near Havana"
                  fill
                  sizes={gridSizes}
                  priority
                  fetchPriority="high"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Imagen 2 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/havana-capitol.png"
                  alt="Capitolio of Havana"
                  fill
                  sizes={gridSizes}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Imagen 3 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-coco-taxi.jpg"
                  alt="Coco taxi in Havana"
                  fill
                  sizes={gridSizes}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Imagen 4 */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/vinales.jpg"
                  alt="Viñales valley tour"
                  fill
                  sizes={gridSizes}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
