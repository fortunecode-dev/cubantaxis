// app/components/Socials.tsx  (Server Component)
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

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
  if (!host) return;

  const baseUrl = `${proto}://${host}`;
  const form = new FormData();
  form.append("source", source);

  await fetch(`${baseUrl}/api/telegram-booking`, {
    method: "POST",
    body: form,
  });
}

async function handleFooterSubmit(platform: Platform) {
  "use server";
  const message = buildMessage();

  // Log del origen "Footer ..."
  await logSourceOnServer(`Footer ${platform}`);

  if (platform === "whatsapp") {
    const phone = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "";
    redirect(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  } else {
    const user = process.env.NEXT_PUBLIC_TELEGRAM_USER || "";
    redirect(`https://t.me/${user}`);
  }
}

export default async function Socials() {
  const submitWhatsApp = handleFooterSubmit.bind(null, "whatsapp" as const);
  const submitTelegram = handleFooterSubmit.bind(null, "telegram" as const);

  return (
    <div className="mt-4 flex items-center gap-4 text-xl">
      {/* Enlaces directos (no necesitan Server Action) */}
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

      {/* WhatsApp via Server Action (log + redirect) */}
      <form action={submitWhatsApp}>
        <button
          type="submit"
          aria-label="WhatsApp"
          className="hover:text-green-600 transition-colors"
          title="Contactar por WhatsApp"
        >
          <FaWhatsapp />
        </button>
      </form>

      {/* Telegram via Server Action (log + redirect) */}
      <form action={submitTelegram}>
        <button
          type="submit"
          aria-label="Telegram"
          className="hover:text-blue-500 transition-colors"
          title="Contactar por Telegram"
        >
          <FaTelegram />
        </button>
      </form>
    </div>
  );
}
