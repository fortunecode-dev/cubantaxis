
"use client"
import { useCallback } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaTelegram } from "react-icons/fa";

export default function Socials() {
  // TODO: Poner multilingüe
  const year = new Date().getFullYear();
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

const form = new FormData();

    form.append("source", String("Footer " + platform));

    await fetch("/api/telegram-booking", {
      method: "POST",
      body: form,
    });
    try {
       

      if (platform === "whatsapp") {
        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
      } else if (platform === "telegram") {
        window.open(`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USER}`, "_blank");
      }
    } catch (error) {
      console.error("Error al enviar plantilla vacía:", error);
    }
  }, []);
  return (
            <div className="mt-4 flex items-center gap-4 text-xl">
              <a
                href="https://www.facebook.com/CubanTaxis/"
                aria-label="Facebook CubanTaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
                title="CubanTaxis en Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/cubantaxis/"
                aria-label="Instagram CubanTaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
                title="CubanTaxis en Instagram"
              >
                <FaInstagram />
              </a>
              <button
                onClick={() => sendEmptyReservation("whatsapp")}
                aria-label="WhatsApp"
                className="hover:text-green-600 transition-colors"
              >
                <FaWhatsapp />
              </button>
              <button
                onClick={() => sendEmptyReservation("telegram")}
                aria-label="Telegram"
                className="hover:text-blue-500 transition-colors"
              >
                <FaTelegram />
              </button>

            </div>
         
  );
}
