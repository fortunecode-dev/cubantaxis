"use client"

import { AppTexts } from "@/app/[lang]/locales/types"
import React from "react"

const servicios = [
    "Traslados privados",
    "City Tours",
    "Excursiones",
    "Taxis Colectivos",
    "Viajes a Playas",
    "Servicio de guía"
]

export default function Hero({ idioma }: { idioma: AppTexts }) {
    return (
        <header className="relative bg-black overflow-hidden mt-[25px] pt-5 rounded-b-lg">
            {/* Fondo Masonry */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="hero-background grid grid-cols-3 md:grid-cols-6 gap-2 p-1 pt-5">
                    {[
                        "/images/cienfuegos.jpg", "/images/cayo-coco.jpg", "/images/havana-capitol.jpg",
                        "/images/trinidad.jpg", "/images/varadero-view.jpg", "/images/cayo-santa-maria.webp",
                        "/images/viñales.jpg", "/images/santa-clara.jpeg", "/images/havana-tour.jpg",
                        "/images/playa-del-este.jpg", "/images/cayo-guillermo.png", "/images/varadero.jpg"
                    ].map((src, i) => (
                        <div key={i}>
                            <img className="h-auto w-full rounded-lg object-cover" src={src} alt={`Imagen de ${src.split("/").pop()?.split(".")[0]}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 px-4 py-8 mx-auto max-w-screen-xl lg:py-24">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-4 xl:gap-6 lg:justify-start">

                    {/* Título y descripción */}
                    <div className="flex-1 lg:max-w-[65%]">
                        <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white mb-4 md:text-5xl xl:text-6xl">
                            {idioma.hero.title}
                        </h1>
                        <p className="text-lg font-light text-gray-300 mb-6 max-w-2xl md:text-xl">
                            {idioma.hero.subtitle}
                        </p>

                        {/* Botones en columna en mobile y fila en md+ */}
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <a
                                href="#excursions"
                                className="w-full md:w-auto border border-amber-400 text-yellow-500 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-xl font-semibold transition text-center"
                            >
                                {idioma.hero.buttons.excursions}
                            </a>

                            <button className="w-full md:w-auto bg-amber-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold transition">
                                {idioma.hero.buttons.fastBooking}
                            </button>
                        </div>
                    </div>

                    {/* Lista de servicios: más cercana al texto en ≥lg */}
                    <ul className="mt-6 lg:mt-2 lg:ml-4 flex flex-wrap lg:flex-col gap-2 text-amber-400 text-base font-semibold list-disc list-inside pl-4 md:pl-6">
                        {servicios.map((item, index) => (
                            <li key={index} className="whitespace-nowrap text-xl font-bold">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}
