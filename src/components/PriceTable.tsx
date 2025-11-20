type Props = { lang: string };

const rows = [
  { routeEn: "Havana → Varadero", routeEs: "La Habana → Varadero", price: "US$ 95" },
  { routeEn: "Havana → Viñales", routeEs: "La Habana → Viñales", price: "US$ 100" },
  { routeEn: "Havana → Trinidad", routeEs: "La Habana → Trinidad", price: "US$ 180" },
  { routeEn: "HAV Airport → Havana", routeEs: "Aeropuerto HAV → La Habana", price: "US$ 25" },
];

export default function PriceTable({ lang }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-primary/10">
          <tr>
            <th className="px-4 py-3 text-left text-primary font-semibold">{lang === "es" ? "Ruta" : "Route"}</th>
            <th className="px-4 py-3 text-left text-primary font-semibold">{lang === "es" ? "Precio" : "Price"}</th>
            <th className="px-4 py-3 text-left text-primary font-semibold">{lang === "es" ? "Acción" : "Action"}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.routeEn} className="border-t border-primary/10 hover:bg-primary/5 transition">
              <td className="px-4 py-3 text-primary">{lang === "es" ? r.routeEs : r.routeEn}</td>
              <td className="px-4 py-3 text-primary font-medium">{r.price}</td>
              <td className="px-4 py-3">
                <a
                  href={`https://cubantaxis.com${lang === "en" ? "" : `/${lang}`}/cuba-taxi-booking`}
                  className="
                    inline-flex items-center justify-center
                    rounded-full bg-accent/20 text-accent font-semibold
                    px-3 py-1.5 text-xs transition hover:bg-accent/30
                  "
                >
                  {lang === "es" ? "Reservar" : "Book"}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
