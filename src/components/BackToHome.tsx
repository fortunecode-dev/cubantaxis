// app/components/BackToHome.tsx
import Link from "next/link";

type BackToHomeProps = {
  label?: string; // Texto visible del link
  className?: string; // Clases Tailwind adicionales
  lang?: string; // Soporte multilenguaje
};

export default async function BackToHome({ lang }: any) {
  // Texto por idioma
  const textMap: Record<string, string> = {
    en: "Back to Home",
    es: "Volver al inicio",
    pt: "Voltar para Início",
    fr: "Retour à l'accueil",
    de: "Zur Startseite",
    ru: "На главную",
  };

  return (
    <div className="flex justify-center items-center h-screen p-3">
      {" "}
      {/* Contenedor centrado */}
      <Link
        href={lang === "en" ? "/" : `/${lang}`}
        prefetch={false}
        className={[
          "inline-flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition",
        ].join(" ")}
        aria-label={textMap[lang] ?? textMap.en}
      >
        {/* Emoji opcional para mejor UX */}
        <span aria-hidden>🏠</span>
        {textMap[lang] ?? textMap.en}
      </Link>
    </div>
  );
}
