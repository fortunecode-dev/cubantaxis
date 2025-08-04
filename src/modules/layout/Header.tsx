"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useCallback } from "react";

export default function Header() {
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

    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "header" }),
      });

      if (platform === "whatsapp") {
        window.open(`https://wa.me/5355432748?text=${encodeURIComponent(message)}`, "_blank");
      } else if (platform === "telegram") {
        window.open(`https://t.me/TaxiCubaBot?start=${encodeURIComponent(message)}`, "_blank");
      }
    } catch (error) {
      console.error("Error al enviar plantilla vacía:", error);
    }
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-amber-400 border-b border-white/30 px-4 py-2 flex justify-end items-center rounded-b-lg">
               {/* Redes sociales */}
        <div className="flex items-center gap-4 text-xl mx-5">
          <a
            href="https://www.facebook.com/CubanTaxis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/cubantaxis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors"
          >
            <FaInstagram />
          </a>
          <button
            onClick={() => sendEmptyReservation('whatsapp')}
            aria-label="WhatsApp"
            className="hover:text-green-600 transition-colors"
          >
            <FaWhatsapp />
          </button>
          <button
            onClick={() => sendEmptyReservation('telegram')}
            aria-label="Telegram"
            className="hover:text-blue-500 transition-colors"
          >
            <FaTelegram />
          </button>
        </div>
      
    </header>
  );
}
