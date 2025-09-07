// app/components/FloatingContacts.tsx
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { redirect } from "next/navigation";
import { headers } from "next/headers";              // ⬅️ nuevo
import { getTranslation } from "@/app/[lang]/locales";

type Platform = "whatsapp" | "telegram";

function buildMessage() {
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

  return `🚕 Quick Booking Request:
📞 Phone: ${formData.phone}
📍 From: ${formData.from}
🏁 To: ${formData.to}
📅 Date: ${formData.date}
🕒 Time: ${formData.time}
🚗 Vehicle: ${formData.vehicle}
👥 Passengers: ${formData.passengers}
🎒 Luggage: ${formData.luggage}`;
}

async function logSourceOnServer(source: string) {
  "use server";                                      // ⬅️ opcional pero claro
  const h = headers();
  const host = (await h).get("x-forwarded-host") ?? (await h).get("host");
  const proto = (await h).get("x-forwarded-proto") ?? "http";
  if (!host) return;                                 // sin host, no hacemos fetch

  const baseUrl = `${proto}://${host}`;

  const form = new FormData();
  form.append("source", source);

  // OJO: ruta absoluta (con slash) y base absoluta
  await fetch(`${baseUrl}/api/telegram-booking`, {
    method: "POST",
    body: form,
  });
}

async function handleSubmit(platform: Platform) {
  "use server";
  const message = buildMessage();

  await logSourceOnServer(`BotónFlotante ${platform}`);

  if (platform === "whatsapp") {
    const phone = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "";
    redirect(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  } else {
    const user = process.env.NEXT_PUBLIC_TELEGRAM_USER || "";
    redirect(`https://t.me/${user}`);
  }
}

export default async function FloatingContacts({ lang }: { lang: string }) {
  const idioma = getTranslation(lang);

  const submitWhatsApp = handleSubmit.bind(null, "whatsapp" as const);
  const submitTelegram = handleSubmit.bind(null, "telegram" as const);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <form action={submitWhatsApp}>
        <button type="submit" aria-label="WhatsApp" className="relative flex items-center justify-center">
          <span className="absolute w-16 h-16 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaWhatsapp size={28} />
          </div>
        </button>
      </form>

      <form action={submitTelegram}>
        <button type="submit" aria-label="Telegram" className="relative flex items-center justify-center">
          <span className="absolute w-16 h-16 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <FaTelegramPlane size={26} />
          </div>
        </button>
      </form>
    </div>
  );
}
