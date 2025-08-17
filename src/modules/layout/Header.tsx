"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { useCallback } from "react";
import { LocaleLink } from "@/libs/i18n-nav";
import toast, { Toaster } from "react-hot-toast";
import { getTranslation } from "@/app/[lang]/locales";

export default function Header({ lang }: { lang: any }) {
  // TODO: Poner multilingüe
      const idioma = getTranslation(lang)

  const sendEmptyReservation = useCallback(async (platform: "whatsapp" | "telegram") => {
      const formData = {
        phone: "",
        from: "",
        to: "",
        date: "",
        time: "",
        vehicle: "",
        passengers: "",
        luggage: "",
      };

    const message = `🚕 Quick Booking Request:
📞 Phone: ${formData.phone}
📍 From: ${formData.from}
🏁 To: ${formData.to}
📅 Date: ${formData.date}
🕒 Time: ${formData.time}
🚗 Vehicle: ${formData.vehicle}
👥 Passengers: ${formData.passengers}
🎒 Luggage: ${formData.luggage}`;
      await navigator.clipboard.writeText(message);

      try {
        const form = new FormData();
        form.append("source", String("Header " + platform));

        await fetch("/api/telegram-booking", {
          method: "POST",
          body: form,
        });

        if (platform === "whatsapp") {
          window.open(
            `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        } else if (platform === "telegram") {
          toast.success(idioma.clipboardTemplate.copied, { duration: 3000 });
          setTimeout(() => {
            window.open(`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USER}`, "_blank");
          }, 3000);
        }
      } catch (error) {
        console.error("Error al enviar plantilla vacía:", error);
        toast.error(idioma.clipboardTemplate.error);
      }
    },
    [idioma]
  );

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
        <button
          onClick={() => sendEmptyReservation("whatsapp")}
          aria-label="WhatsApp"

          className="hover:text-green-600 transition-colors"
        >
          <FaWhatsapp color="black"/>
        </button>
        <button
          onClick={() => sendEmptyReservation("telegram")}
          aria-label="Telegram"
      
          className="hover:text-blue-500 transition-colors"
        >
          <FaTelegramPlane color="black" />
        </button>
      </div>
    </header>
  );
}
