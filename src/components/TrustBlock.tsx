type Props = { lang: string };

export default function TrustBlock({ lang }: Props) {
  const t = (en: string, es: string) => (lang === "es" ? es : en);

  const blocks = [
    {
      h: t("24/7 Support", "Soporte 24/7"),
      p: t("Fast responses on WhatsApp.", "Respuestas rápidas por WhatsApp y correo."),
    },
    {
      h: t("English‑speaking drivers", "Conductores que hablan inglés"),
      p: t("Tourist‑friendly, clear communication.", "Pensado para turistas, comunicación clara."),
    },
    {
      h: t("Fixed quotes", "Precios fijos"),
      p: t("No surprises. Confirm before booking.", "Sin sorpresas. Precio confirmado antes de reservar."),
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mx-auto max-w-6xl px-4">
      {blocks.map((b) => (
        <div
          key={b.h}
          className="
            rounded-2xl bg-white/80
            p-5 shadow-sm border border-primary/10
            transition hover:shadow-md
          "
        >
          <h3 className="text-lg font-bold text-accent mb-2">{b.h}</h3>
          <p className="text-sm text-primary/80">{b.p}</p>
        </div>
      ))}
    </div>
  );
}
