import { AppTexts } from "@/app/[lang]/locales/types";
import Image from "next/image";
import { LocaleLink } from "@/libs/i18n-nav";
// Import estático → habilita blur automático y mejor LCP
import heroImg from "./cuba-cabs.jpg";

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default function Hero({ idioma, lang }: { idioma: AppTexts; lang: Lang }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative isolate overflow-hidden rounded-b-3xl bg-gray-900
        before:absolute before:inset-0 before:bg-black/50
      "
    >
      {/* Imagen de fondo (LCP optimizada) */}
      <Image
        src={heroImg}
        alt="Classic taxi in Havana, Cuba"
        title="Cuba Taxi Transfers 2025"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 z-[-20] object-cover object-center opacity-30"
      />

      <div className="relative z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Texto principal */}
          <header className="max-w-2xl flex-1 text-center lg:text-left">
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              {idioma.hero.h1}
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-amber-300 font-medium">
              {idioma.hero.h2a}
              {idioma.hero.transfer}
              {", "}
              {idioma.hero.shared}{" "}
              {idioma.hero.and}{" "}
              {idioma.hero.interCity}
              {idioma.hero.h2b}
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              {idioma.hero.p}{" "}
              <LocaleLink
                href="/taxi-in-cuba"
                className="underline underline-offset-4 hover:text-amber-200"
              >
                {idioma.taxiGuide}
              </LocaleLink>
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <LocaleLink
                href="/private-transfer-booking"
                className="
                  w-full sm:w-auto rounded-xl px-6 py-3 text-center font-semibold transition
                  border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black
                "
                aria-label="Book a private transfer in Cuba"
              >
                {idioma.hero.buttons.booking}
              </LocaleLink>

              <LocaleLink
                href="/cuba-taxi-booking"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3
                  bg-amber-400 text-black font-semibold shadow-md
                  hover:bg-amber-300 active:bg-amber-500
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  focus-visible:ring-amber-500 ring-offset-gray-900 transition
                "
                aria-label="Fast online taxi booking in Cuba"
              >
                {idioma.hero.buttons.fastBooking}
              </LocaleLink>
            </div>
          </header>

          {/* Lista de servicios */}
          <div>
            <ul className="list-disc pl-5 pb-4 flex flex-col gap-3 text-yellow-300 font-semibold text-lg lg:text-xl">
              {idioma.hero.services.map((item, i) => (
                <li key={`${i}-${item}`} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>

            <LocaleLink
              href="/destinations-in-cuba"
              className="m-5 text-yellow-400 font-medium underline underline-offset-4 hover:text-yellow-300 transition-colors"
              aria-label="Explore destinations in Cuba"
            >
              {idioma.exploreDestinations}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
}
