import { AppTexts } from "@/app/[lang]/locales/types"
import React from "react"
import Image from "next/image"
import { LocaleLink } from "@/libs/i18n-nav"

export default function Hero({ idioma, lang }: { idioma: AppTexts, lang: string }) {
    return (
        <section className="relative isolate overflow-hidden bg-gray-900 rounded-b-3xl">
            {/* Imagen de fondo */}
            <Image
                src="/cuba-cabs.jpg"
                alt="Classic taxi in Havana Cuba"
                title="Cuba Taxi Transfers 2025"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1200px"
                className="absolute inset-0 -z-10 object-cover object-center opacity-30"
            />

            {/* Overlay para mejor contraste */}
            <div className="absolute inset-0 bg-black/50 -z-10" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

                    {/* Texto principal */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            {idioma.hero.h1}
                        </h1>

                        <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-amber-300 font-medium">
                            {idioma.hero.h2a}{idioma.hero.transfer}, {idioma.hero.shared} {idioma.hero.and}{idioma.hero.interCity}{idioma.hero.h2b}
                        </h2>

                        <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
                            {idioma.hero.p}
                        </p>

                        {/* Botones */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <LocaleLink
                                href={`transfer-booking`}
                                className="w-full sm:w-auto border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-xl font-semibold text-center transition"
                            >
                                {idioma.hero.buttons.booking}
                            </LocaleLink>

                            <LocaleLink
                                href={`taxi`}
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3
                bg-amber-400 text-black font-semibold shadow-md
                hover:bg-amber-300 active:bg-amber-500
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                focus-visible:ring-amber-500 ring-offset-gray-900 transition"
                            >
                                {idioma.hero.buttons.fastBooking}
                            </LocaleLink>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 pb-4 text-yellow-300 font-semibold text-lg lg:text-xl list-disc pl-5">
                            {idioma.hero.services.map((item, index) => (
                                <li key={index} className="leading-snug">{item}</li>
                            ))}
                        </ul>
                        <LocaleLink
                            href="/destinations"
                            lang={lang}
                            className="text-yellow-400 font-medium underline underline-offset-4 m-5 hover:text-yellow-300 transition-colors"
                        >
                            Explore destinations →
                        </LocaleLink>
                    </div>

                </div>
            </div>
        </section>
    )
}
