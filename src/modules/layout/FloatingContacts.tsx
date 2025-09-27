// app/components/FloatingContacts.tsx
// Server Component con Server Actions — sin "use client"
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
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

// Log auxiliar en el servidor (opcional)
async function logSourceOnServer(source: string) {
  "use server";
  const h = await headers(); // ✅ no await
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return;

  const baseUrl = `${proto}://${host}`;

  const form = new FormData();
  form.append("source", source);

  await fetch(`${baseUrl}/api/telegram-booking`, {
    method: "POST",
    body: form,
    // cache: "no-store"  // si necesitas evitar caché en este POST
  });
}

// Server Action: decide y redirige
async function handleSubmit(platform: Platform) {
  "use server";

  const message = buildMessage();
  await logSourceOnServer(`BotónFlotante ${platform}`);

  if (platform === "whatsapp") {
    // Usa vars de entorno del servidor (mejor que NEXT_PUBLIC en server)
    const phone =
      process.env.WHATSAPP_PHONE ||
      process.env.NEXT_PUBLIC_CONTACT_NUMBER || // fallback si ya la tienes así
      "";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    redirect(url);
  } else {
    const user =
      process.env.TELEGRAM_USER ||
      process.env.NEXT_PUBLIC_TELEGRAM_USER || // fallback
      "";
    redirect(`https://t.me/${user}`);
  }
}

export default async function FloatingContacts({ lang }: { lang: string }) {
  // Si getTranslation es síncrona, quita el await
  const t = await getTranslation(lang);

  // Preconfigura Server Actions con el parámetro de plataforma
  const submitWhatsApp = handleSubmit.bind(null, "whatsapp" as const);
  const submitTelegram = handleSubmit.bind(null, "telegram" as const);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <form action={submitWhatsApp}>
        <button
          type="submit"
          aria-label="WhatsApp"
          className="relative flex items-center justify-center"
        >
          <span className="absolute h-16 w-16 animate-ping rounded-full bg-green-400 opacity-75" />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110">
            <FaWhatsapp size={28} aria-hidden />
          </div>
        </button>
      </form>

      {/* Telegram */}
      <form action={submitTelegram}>
        <button
          type="submit"
          aria-label="Telegram"
          className="relative flex items-center justify-center"
        >
          <span className="absolute h-16 w-16 animate-ping rounded-full bg-blue-400 opacity-75" />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110">
            <FaTelegramPlane size={26} aria-hidden />
          </div>
        </button>
      </form>
    </div>
  );
}
