// app/components/HeaderButtons.tsx  (Server Component)
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
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
  "use server";
  const h = headers();
  const host = (await h).get("x-forwarded-host") ?? (await h).get("host");
  const proto = (await h).get("x-forwarded-proto") ?? "http";
  if (!host) return; // sin host, evitamos fetch

  const baseUrl = `${proto}://${host}`;
  const form = new FormData();
  form.append("source", source);

  await fetch(`${baseUrl}/api/telegram-booking`, {
    method: "POST",
    body: form,
  });
}

async function handleHeaderSubmit(platform: Platform) {
  "use server";
  const message = buildMessage();

  // registra el origen en tu API
  await logSourceOnServer(`Header ${platform}`);

  if (platform === "whatsapp") {
    const phone = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    redirect(url);
  } else {
    const user = process.env.NEXT_PUBLIC_TELEGRAM_USER || "";
    redirect(`https://t.me/${user}`);
  }
}

export default async function HeaderButtons({ lang }: { lang: string }) {
  // si necesitas textos más adelante:
  // const idioma = getTranslation(lang);

  const submitWhatsApp = handleHeaderSubmit.bind(null, "whatsapp" as const);
  const submitTelegram = handleHeaderSubmit.bind(null, "telegram" as const);

  return (
    <>
      {/* WhatsApp (log + redirect) */}
      <form action={submitWhatsApp} className="inline">
        <button
          type="submit"
          aria-label="WhatsApp"
          className="hover:text-green-600 transition-colors"
          title="Contactar por WhatsApp"
        >
          <FaWhatsapp color="black" />
        </button>
      </form>

      {/* Telegram (log + redirect) */}
      <form action={submitTelegram} className="inline">
        <button
          type="submit"
          aria-label="Telegram"
          className="hover:text-blue-500 transition-colors"
          title="Contactar por Telegram"
        >
          <FaTelegramPlane color="black" />
        </button>
      </form>
    </>
  );
}
