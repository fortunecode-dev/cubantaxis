import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { useCallback } from "react";
import { LocaleLink } from "@/libs/i18n-nav";
import { getTranslation } from "@/app/[lang]/locales";
import HeaderButtons from "@/components/HeaderButtons";

export default function Header({ lang }: { lang: any }) {
  // TODO: Poner multilingüe
      const idioma = getTranslation(lang)

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-amber-400 border-b border-white/30 px-4 py-2 flex justify-between items-center rounded-b-lg">
      {/* Logo / título */}
      <LocaleLink
        href="/"
        className="text-xl font-bold text-neutral-800 hover:text-neutral-600 transition-colors"
      >
        CubanTaxis
      </LocaleLink>

      {/* Redes sociales */}
      <div className="flex items-center gap-4 text-xl mx-5">
        <a
          href="https://www.facebook.com/CubanTaxis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook Page"
          color="black"
          className="hover:text-blue-700 transition-colors"
        >
          <FaFacebookF color="black"/>
        </a>
        <a
          href="https://www.instagram.com/cubantaxis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram Profile"
          color="black"

          className="hover:text-pink-600 transition-colors"
        >
          <FaInstagram color="black"/>
        </a>
        <HeaderButtons lang={lang}/>
      </div>
    </header>
  );
}
