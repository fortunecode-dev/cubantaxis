"use client"

import { AppTexts } from "@/app/[lang]/locales/types"
import React from "react"
import Link from 'next/link'
import Image from "next/image"

export default function Hero({ idioma, lang }: { idioma: AppTexts, lang: string }) {
    return (
        <header className="relative bg-black overflow-hidden mt-6 pt-8 rounded-b-3xl">
            {/* Fondo Masonry difuminado */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="hero-background grid grid-cols-3 md:grid-cols-6 gap-2 p-2 pt-5">
                    {[
                        "/cienfuegos.webp", "/cayo-coco.webp", "/havana-capitol.webp",
                        "/trinidad.webp", "/varadero-view.webp", "/cayo-santa-maria.webp",
                        "/viñales.webp", "/santa-clara.webp", "/havana-tour.webp",
                        "/playa-del-este.webp", "/cayo-guillermo.webp", "/varadero.webp"
                    ].map((src, i) => (
                        <div key={i}>
                            <Image
                                className="h-auto w-full rounded-lg object-cover"
                                src={src}
                                alt={`Taxi Cuba ${src.split("/").pop()?.split(".")[0]}`}
                                title={`Traslado ${src.split("/").pop()?.split(".")[0]}`}
                                width={400}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 px-4 py-12 mx-auto max-w-screen-xl lg:py-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                    {/* Columna izquierda: texto y acciones */}
                    <div className="flex-1 max-w-[700px]">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
                            {idioma.hero.h1}
                        </h1>

                        <h2 className="text-xl text-amber-300 font-medium mb-6">
                            {idioma.hero.h2}
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Link href={`/${lang}/book-travel-reservation`}
                                className="w-full sm:w-auto border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-xl font-semibold text-center transition">
                                {idioma.hero.buttons.booking}
                            </Link>

                            <Link href={`/${lang}/book-a-travel`}
                                className="w-full sm:w-auto bg-amber-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold text-center transition">
                                {idioma.hero.buttons.fastBooking}
                            </Link>
                        </div>

                        {/* Texto final SEO friendly */}
                        <p className="text-base md:text-lg text-gray-300 mt-4 max-w-xl">
                            {idioma.hero.p}
                        </p>
                    </div>

                    {/* Columna derecha: servicios destacados */}
                    <ul className="flex flex-col justify-center items-start gap-3 text-yellow-400 text-lg font-semibold list-disc pl-6">
                        {idioma.hero.services.map((item, index) => (
                            <li key={index} className="text-xl font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}
