type Props = { lang: string };


const rows = [
    { routeEn: "Havana → Varadero", routeEs: "La Habana → Varadero", price: "US$ 95" },
    { routeEn: "Havana → Viñales", routeEs: "La Habana → Viñales", price: "US$ 100" },
    { routeEn: "Havana → Trinidad", routeEs: "La Habana → Trinidad", price: "US$ 180" },
    { routeEn: "HAV Airport → Havana", routeEs: "Aeropuerto HAV → La Habana", price: "US$ 25" },
];


export default function PriceTable({ lang }: Props) {
    return (
        <div className="overflow-x-auto rounded-2xl border">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left">{lang === "es" ? "Ruta" : "Route"}</th>
                        <th className="px-4 py-3 text-left">{lang === "es" ? "Precio" : "Price"}</th>
                        <th className="px-4 py-3 text-left">{lang === "es" ? "Acción" : "Action"}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.routeEn} className="border-t">
                            <td className="px-4 py-3">{lang === "es" ? r.routeEs : r.routeEn}</td>
                            <td className="px-4 py-3">{r.price}</td>
                            <td className="px-4 py-3">
                                <a href="/cuba-taxi-booking" className="rounded-md px-3 py-2 bg-yellow-400 font-medium hover:brightness-95">
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