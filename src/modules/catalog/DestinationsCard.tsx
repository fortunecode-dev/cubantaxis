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

export default function DestinationsCard({ destinations, idioma }: DestinationsCardProps) {
  return (
    <section className="py-4 px-0 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {idioma.destinationsCard.title}
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          {idioma.destinationsCard.subTitle}
        </p>
      </div>

      {/* Abanico en móvil / centrado en desktop */}
      <div className="flex sm:flex-wrap sm:justify-center gap-6 overflow-x-auto sm:overflow-visible px-1 pb-16 scrollbar-hide snap-x snap-mandatory">
        {destinations?.map((dest, index) => (
          <article
            key={dest.id}
            className={`snap-start shrink-0 w-72 sm:w-90 group rounded-xl overflow-hidden flex flex-col justify-between transition-transform transform hover:shadow-2xl ${
              index === 0 ? "pl-4 sm:pl-0" : ""
            }`}
          >
            <Image
              alt={dest.title}
              src={dest.main_image}
              width={400}
              height={250}
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">{dest.title}</h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
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
    </section>
  );
}
