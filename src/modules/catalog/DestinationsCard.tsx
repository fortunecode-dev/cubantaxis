"use client"

import { AppTexts } from "@/app/[lang]/locales/types"
import Image from "next/image"

interface Destination {
  id: number
  title: string
  description: string
  main_image: string
}

interface DestinationsCardProps {
  destinations: Destination[]
  idioma: AppTexts
  name:string
}

export default function DestinationsCard({ destinations, idioma,name }: DestinationsCardProps) {
  return (
    <section className="py-9 px-0 sm:px-6 lg:px-8 bg-white" id={name}>
      <div className="max-w-7xl mx-auto text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {idioma.destinationsCard.title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          {idioma.destinationsCard.subTitle}
        </p>
      </div>

      <div className="px-1 pb-16">
        {/* Carrusel horizontal en móviles */}
        <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {destinations?.map((dest, index) => (
            <article
              key={dest.id}
              className={`snap-start shrink-0 w-72 group rounded-xl overflow-hidden flex flex-col justify-between transition-transform transform hover:shadow-2xl ${
                index === 0 ? "pl-4 sm:pl-0" : ""
              }`}
            >
              <Image
                alt={dest.title}
                src={dest.main_image}
                title={dest.title}
                width={400}
                height={250}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">{dest.title}</h3>
                  </a>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                    {dest.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="text-yellow-600 font-medium hover:underline">
                    {idioma.seeMore}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Grid en pantallas md+ con columnas variables */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations?.map((dest) => (
            <article
              key={dest.id}
              className="group rounded-xl overflow-hidden flex flex-col justify-between transition-transform transform hover:shadow-2xl"
            >
              <Image
                alt={dest.title}
                src={dest.main_image}
                width={600}
                height={350}
                className="h-64 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <a href="#">
                    <h3 className="text-xl font-semibold text-gray-900">{dest.title}</h3>
                  </a>
                  <p className="mt-2 text-sm text-gray-500">{dest.description}</p>
                </div>
                <div className="mt-4">
                  <button className="text-yellow-600 font-medium hover:underline">
                    {idioma.seeMore}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
