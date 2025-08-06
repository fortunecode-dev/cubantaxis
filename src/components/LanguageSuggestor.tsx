"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const supportedLangs = ["es", "en", "fr", "de", "ru", "pt"];

const messages: any = {
  es: {
    text: "¿Prefieres ver este sitio en Español?",
    button: "Cambiar a Español"
  },
  en: {
    text: "Would you prefer to view this site in English?",
    button: "Switch to English"
  },
  fr: {
    text: "Préférez-vous voir ce site en Français ?",
    button: "Passer au Français"
  },
  de: {
    text: "Möchten Sie diese Seite auf Deutsch sehen?",
    button: "Zu Deutsch wechseln"
  },
  ru: {
    text: "Предпочитаете просматривать сайт на русском?",
    button: "Переключиться на русский"
  },
  pt: {
    text: "Prefere ver este site em Português?",
    button: "Mudar para Português"
  }
};

export default function LanguageSuggestor() {
  const pathname = usePathname();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [suggestedLang, setSuggestedLang] = useState("es");

  useEffect(() => {
    if (!pathname) return;

    const userLang = navigator.language?.slice(0, 2) || "en";
    const currentLang = pathname.split("/")[1];

    const isRootPath = pathname === "/" || pathname === `/${currentLang}`;

    if (
      isRootPath &&
      supportedLangs.includes(userLang) &&
      userLang !== currentLang
    ) {
      setSuggestedLang(userLang);
      setShow(true);
    }
  }, [pathname]);

  if (!show) return null;

  const msg = messages[suggestedLang as keyof typeof messages] || messages["es"];

  return (
    <div className="fixed bottom-4 left-4 right-4 mx-auto bg-white border shadow-lg p-4 rounded-xl z-50 max-w-sm">
      <p className="text-sm text-gray-800">{msg.text}</p>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => {
            setShow(false)
            router.push(`/${suggestedLang}`)
          }}
          className="flex-1 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        >
          {msg.button}
        </button>

        <button
          onClick={() => setShow(false)}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
