import { AppTexts } from "@/app/[lang]/locales/types";
import Image from "next/image";

interface Destination {
  id: number;
  title: string;
  description: string;
  main_image: string;
}

interface DestinationsCardProps {
  destinations: Destination[];
  idioma: AppTexts;
}

export default function ExcursionCard({ destinations, idioma }: DestinationsCardProps) {
  return (
    <section className="py-4 bg-white">
      <div className="px-2 max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
          {idioma.excursionsCard.title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          {idioma.destinationsCard.subTitle}
        </p>

        {/* Carrusel en móvil, grilla en escritorio */}
        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 px-1 sm:px-0 scrollbar-hide snap-x sm:snap-none">
          {destinations?.map((dest, index) => (
            <article
              key={dest.id}
              className="group min-w-575 sm:min-w-0 snap-start bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Imagen */}
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  alt={dest.title}
                  src={dest.main_image}
                  width={400}
                  height={250}
                  className="h-56 w-full object-cover transition duration-300 group-hover:grayscale-[50%]"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.title}</h3>
                  <p className="line-clamp-3 text-sm/relaxed text-gray-600">
                    {dest.description}
                  </p>
                </div>

                {/* Botón */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-yellow-600 hover:underline transition"
                  >
                    {idioma.seeMore}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
