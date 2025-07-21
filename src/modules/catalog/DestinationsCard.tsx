import Image from "next/image";

interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface DestinationsCardProps {
  destinations: Destination[];
}

export default function DestinationsCard({ destinations }: DestinationsCardProps) {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
      <div className=" py-20 flex overflow-x-auto gap-6 px-4 scrollbar-hide snap-x snap-mandatory">
        {destinations.map((dest) => (
          <article
            key={dest.id}
            className="group min-w-[300px] snap-start rounded-xl overflow-hidden flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              alt={dest.title}
              src={dest.image}
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
                  Ver más
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
