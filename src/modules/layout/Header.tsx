"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useCallback } from "react";

export default function Header() {
  const sendEmptyReservation = useCallback(async (platform: "whatsapp" | "telegram") => {
    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "header",
          phone: "",
          from: "",
          to: "",
          date: "",
          time: "",
          vehicle: "",
          passengers: "",
          luggage: "",
        }),
      });

      const baseMessage = "🚕 Hola, quiero hacer una reserva.";

      if (platform === "whatsapp") {
        window.open(`https://wa.me/55432748?text=${encodeURIComponent(baseMessage)}`, "_blank");
      } else if (platform === "telegram") {
        window.open(`https://t.me/55432748?start=${encodeURIComponent(baseMessage)}`, "_blank");
      }
    } catch (error) {
      console.error("Error al enviar plantilla vacía:", error);
    }
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-amber-400 border-b border-white/30 px-4 py-2 flex justify-end items-center rounded-b-lg">
      <div className="flex gap-4 text-neutral-800 text-2xl">
        <a
          href="https://www.facebook.com/CubanTaxis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/cubantaxis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Instagram"
        >
          <FaInstagram />
        </a>
        <button
          onClick={() => sendEmptyReservation("whatsapp")}
          aria-label="Contáctanos por WhatsApp"
          className="hover:text-green-600"
        >
          <FaWhatsapp />
        </button>
        <button
          onClick={() => sendEmptyReservation("telegram")}
          aria-label="Contáctanos por Telegram"
          className="hover:text-blue-500"
        >
          <FaTelegram />
        </button>
      </div>
    </header>
  );
}
