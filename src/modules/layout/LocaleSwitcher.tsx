"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "pt", label: "Português" },
];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname?.split("/")[1] || "en";
  const [selected, setSelected] = useState(currentLocale);
  const [isOpen, setIsOpen] = useState(true); // control de visibilidad

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setSelected(newLocale);

    const segments = pathname?.split("/") || [];
    if (locales.some((l) => l.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.push(segments.join("/"));
  };

  if (!isOpen) return null;

  return (
    <div className="relative inline-block bg-white p-4 border border-gray-300 rounded-md shadow-md">
      {/* Botón de cierre tipo “X” */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-1 right-2 text-gray-500 hover:text-red-500 text-xl"
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Selector de idioma */}
      <select
        value={selected}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 mt-2 bg-white text-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>

      {/* Botón Cancelar opcional */}
      <button
        onClick={() => setIsOpen(false)}
        className="mt-3 text-sm text-gray-600 hover:underline hover:text-red-500"
      >
        Cancel
      </button>
    </div>
  );
}
