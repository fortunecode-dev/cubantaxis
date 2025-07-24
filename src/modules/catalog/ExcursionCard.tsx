import { AppTexts } from "@/app/[lang]/locales/types";
import Image from "next/image";

interface Excursion {
  id: number;
  title: string;
  image: string;
  places: string[];
}

interface ExcursionsCardProps {
  excursions: Excursion[];
  idioma: AppTexts

}

export default function ExcursionsCard({ excursions, idioma }: ExcursionsCardProps) {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">{idioma.excursionsCard.title}</h2>
      <div className=" py-20 flex overflow-x-auto gap-6 px-4 scrollbar-hide snap-x snap-mandatory">
        {excursions.map((exc) => (
          <article
            key={exc.id}
            className="group min-w-[300px] snap-start bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Imagen con bordes redondeados en todo el contorno */}
            <div className="overflow-hidden rounded-xl">
              <Image
                alt={exc.title}
                src={exc.image}
                width={400}
                height={250}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:grayscale-[30%] group-hover:brightness-90"
              />
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <a href="#">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exc.title}</h3>
                </a>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm marker:text-yellow-500">
                  {exc.places.map((place, index) => (
                    <li key={index} className="pl-1">{place}</li>
                  ))}
                </ul>
              </div>

              {/* Botón */}
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg transition hover:bg-yellow-600 hover:shadow-[0_0_10px_rgba(255,200,0,0.7)] focus:ring-4 focus:outline-none focus:ring-yellow-300"
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
    </section>
  );
}
