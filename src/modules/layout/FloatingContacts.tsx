"use client"

import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"
import { useCallback } from "react"
import toast, { Toaster } from "react-hot-toast"
import { getTranslation } from "@/app/[lang]/locales";

export default function FloatingContacts({ lang }: { lang: any }) {
    const idioma = getTranslation(lang)
    //TODO: Poner multilingüe
  const sendEmptyReservation = useCallback(
    async (platform: "whatsapp" | "telegram") => {
      const formData = {
        phone: "",
        from: "",
        to: "",
        date: "",
        time: "",
        vehicle: "",
        passengers: "",
        luggage: "",
      }

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

      const form = new FormData()
      form.append("source", String("BotónFlotante " + platform))

      await fetch("/api/telegram-booking", {
        method: "POST",
        body: form,
      })

      try {
        if (platform === "whatsapp") {
          window.open(
            `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}?text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          )
        } else if (platform === "telegram") {
          toast.success(idioma.clipboardTemplate.copied, { duration: 3000 })
          setTimeout(() => {
            window.open(`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USER}`, "_blank")
          }, 3000)
        }
      } catch (error) {
        console.error("Error:", error)
        toast.error(idioma.clipboardTemplate.error)
      }
    },
    [idioma]
  )

  return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          onClick={() => sendEmptyReservation("whatsapp")}
          aria-label="WhatsApp"
          className="relative flex items-center justify-center"
        >
          <span className="absolute w-16 h-16 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaWhatsapp size={28} />
          </div>
        </button>

        <button
          onClick={() => sendEmptyReservation("telegram")}
          aria-label="Telegram"
          className="relative flex items-center justify-center"
        >
          <span className="absolute w-16 h-16 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaTelegramPlane size={26} />
          </div>
        </button>
      </div>
  )
}
