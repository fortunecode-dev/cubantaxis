"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const supportedLangs = ["es", "en", "fr", "de", "ru", "pt"];

const messages: any = {
  es: {
    text: "¿Prefieres ver este sitio en Español?",
    button: "Cambiar a Español",
  },
  en: {
    text: "Would you prefer to view this site in English?",
    button: "Switch to English",
  },
  fr: {
    text: "Préférez-vous voir ce site en Français ?",
    button: "Passer au Français",
  },
  de: {
    text: "Möchten Sie diese Seite auf Deutsch sehen?",
    button: "Zu Deutsch wechseln",
  },
  ru: {
    text: "Предпочитаете просматривать сайт на русском?",
    button: "Переключиться на русский",
  },
  pt: {
    text: "Prefere ver este site em Português?",
    button: "Mudar para Português",
  },
};

export default function LanguageSuggestor() {
  const pathname = usePathname();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
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

      // Fade out before hiding
      const fadeTimer = setTimeout(() => setFadeOut(true), 5000 - 500); // inicia fade 0.5s antes
      const hideTimer = setTimeout(() => setShow(false), 5000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [pathname]);

  if (!show) return null;

  const msg = messages[suggestedLang as keyof typeof messages] || messages["es"];

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] sm:w-auto 
        flex items-center gap-3 px-5 py-3 rounded-2xl shadow-lg border 
        bg-white/95 backdrop-blur 
        transition-all duration-500 ease-in-out
        ${fadeOut ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
    >
      <p className="text-sm text-gray-800 flex-1">{msg.text}</p>

      <button
        onClick={() => {
          setShow(false);
          router.push(`/${suggestedLang}`);
        }}
        className="px-3 py-1.5 text-xs bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
      >
        {msg.button}
      </button>

      <button
        onClick={() => setShow(false)}
        className="px-2 py-1 text-xs text-gray-600 rounded-full hover:bg-gray-200 transition"
      >
        ✕
      </button>
    </div>
  );
}
