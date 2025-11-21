import Link from "next/link";
import Image from "next/image";
import { emphasizeNodes } from "@/utils/fragments";

const BLUR = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="; // OK

export default function HeroCubanTaxis({ lang }:any) {
  const gridSizes = "(min-width:1024px) 25vw, 50vw";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 pt-22 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1
              className="text-4xl leading-tight font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl text-wrap:balance"
              aria-label={typeof lang.h1Title === "string" ? lang.h1Title : "Book a Taxi in Cuba"}
            >
              {emphasizeNodes(lang.h1Title, lang.emphasis)}
            </h1>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-primary">
              {lang.h2SubTitle}
            </h2>
            <p className="mt-5 max-w-xl text-gray-600">{lang.introParagraph}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={lang.link.href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg underline px-5 py-3 text-sm font-semibold text-primary"
                aria-label="More about taxis in Cuba"
              >
                {lang.link.label}
              </Link>
              <Link
                href={lang.cta.customBookingHref}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/10"
                aria-label="Book your trip in advance"
              >
                {lang.cta.customBooking}
              </Link>
              <Link
                href={lang.cta.fastBookingHref}
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
          <div
            className="relative hidden lg:block"
            style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }} // LCP+: no bloquea render
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-beaches.avif"
                  alt="cuba beaches near havana by taxi"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src="/havana-capitol.avif"
                  alt="el capitolio havana landmark taxi"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src="/cuba-coco-taxi.avif"
                  alt="coco taxi havana cuba"
                  fill
                  sizes={gridSizes}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src="/vinales.avif"
                  alt="vinales valley taxi tour"
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
        </div>
      </div>
    </section>
  );
}
