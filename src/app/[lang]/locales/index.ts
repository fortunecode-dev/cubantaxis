
import { es } from "./es";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { pt } from "./pt";
import { ru } from "./ru";
import { AppTexts } from "./types";

// Objeto con todas las traducciones
const translations: Record<string, AppTexts> = {
  en,
  es,
   fr,
   de,
   ru,
   pt,
};

// Tipo de idioma válido
export type Locale = keyof typeof translations;

// Función para obtener la traducción según el locale
export function getTranslation(locale: string): AppTexts {
  // Si el locale no existe, usa "en"
  return translations[locale as Locale] || translations.en;
}
