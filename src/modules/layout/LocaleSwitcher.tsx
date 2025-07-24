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

  // Detecta el idioma actual
  const currentLocale = pathname?.split("/")[1] || "en";
  const [selected, setSelected] = useState(currentLocale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setSelected(newLocale);

    // Ajusta el pathname con el nuevo idioma
    const segments = pathname?.split("/") || [];
    if (locales.some((l) => l.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.push(segments.join("/"));
  };

  return (
    <div className="relative inline-block">
      <select
        value={selected}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}
