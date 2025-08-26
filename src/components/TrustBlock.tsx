type Props = { lang: string };
export default function TrustBlock({ lang }: Props) {
    const t = (en: string, es: string) => (lang === "es" ? es : en);
    return (
        <div className="rounded-2xl border p-5 grid md:grid-cols-3 gap-6">
            {[{
                h: t("24/7 Support", "Soporte 24/7"),
                p: t("Fast responses on WhatsApp and email.", "Respuestas rápidas por WhatsApp y correo."),
            }, {
                h: t("English‑speaking drivers", "Conductores que hablan inglés"),
                p: t("Tourist‑friendly, clear communication.", "Pensado para turistas, comunicación clara."),
            }, {
                h: t("Fixed quotes", "Precios fijos"),
                p: t("No surprises. Confirm before booking.", "Sin sorpresas. Precio confirmado antes de reservar."),
            }].map((b) => (
                <div key={b.h} className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-1">{b.h}</h3>
                    <p className="text-sm opacity-80">{b.p}</p>
                </div>
            ))}
        </div>
    );
}