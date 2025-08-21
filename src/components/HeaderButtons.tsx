"use client"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getTranslation } from "@/app/[lang]/locales";

export default function HeaderButtons({ lang }: { lang: any }) {
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
        <>
            <button
                onClick={() => sendEmptyReservation("whatsapp")}
                aria-label="WhatsApp"

                className="hover:text-green-600 transition-colors"
            >
                <FaWhatsapp color="black" />
            </button>
            <button
                onClick={() => sendEmptyReservation("telegram")}
                aria-label="Telegram"

                className="hover:text-blue-500 transition-colors"
            >
                <FaTelegramPlane color="black" />
            </button>
        </>


    );
}
