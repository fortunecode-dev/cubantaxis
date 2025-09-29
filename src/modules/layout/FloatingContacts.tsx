// app/components/FloatingContacts.tsx
// Server Component con Server Actions — sin "use client"
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getTranslation } from "@/app/[lang]/locales";

type Platform = "whatsapp" | "telegram";

function buildMessage() {
  // Mantén el template simple (no interpolar undefined)
  return [
    "🚕 Quick Booking Request:",
    "📞 Phone: ",
    "📍 From: ",
    "🏁 To: ",
    "📅 Date: ",
    "🕒 Time: ",
    "🚗 Vehicle: ",
    "👥 Passengers: ",
    "🎒 Luggage: ",
  ].join("\n");
}

// Log auxiliar en el servidor (no bloquear redirección)
async function logSourceOnServer(source: string) {
  "use server";
  const h = await headers(); // no es async
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) return;
  const baseUrl = `${proto}://${host}`;

  const form = new FormData();
  form.append("source", source);

  // Dispara y NO esperes (no bloquea la UX)
  fetch(`${baseUrl}/api/telegram-booking`, { method: "POST", body: form }).catch(() => {});
}

// Server Action: decide y redirige (log paralelo)
async function handleSubmit(platform: Platform) {
  "use server";

  const message = buildMessage();
  // No aguardamos el log
  logSourceOnServer(`BotónFlotante ${platform}`);

  if (platform === "whatsapp") {
    const phone =
      process.env.WHATSAPP_PHONE ||
      process.env.NEXT_PUBLIC_CONTACT_NUMBER ||
      "";
    const url = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`;
    redirect(url);
  } else {
    const user =
      process.env.TELEGRAM_USER ||
      process.env.NEXT_PUBLIC_TELEGRAM_USER ||
      "";
    redirect(`https://t.me/${encodeURIComponent(user)}`);
  }
}

export default function FloatingContacts({ lang }: { lang: string }) {
  // getTranslation suele ser síncrona; si lo es, quita el await donde la uses
  const t = getTranslation(lang);

  const submitWhatsApp = handleSubmit.bind(null, "whatsapp" as const);
  const submitTelegram = handleSubmit.bind(null, "telegram" as const);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      // Contención de pintura/layout para aislar repintados
      style={{ contain: "layout paint" }}
    >
      {/* WhatsApp */}
      <form action={submitWhatsApp}>
        <button
          type="submit"
          aria-label="WhatsApp"
          className="relative flex items-center justify-center"
        >
          {/* Animación: solo si el usuario no prefiere reducir movimiento y solo en hover (desktop) */}
          <span className="pointer-events-none absolute h-16 w-16 rounded-full bg-green-400 opacity-75 motion-safe:hover:animate-ping hidden md:block" />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform will-change-transform hover:scale-110">
            {/* SVG inline (sin react-icons) */}
            <svg aria-hidden viewBox="0 0 32 32" className="h-7 w-7">
              <path
                fill="currentColor"
                d="M16 3C9.37 3 4 8.37 4 15c0 2.09.53 4.05 1.47 5.77L4 29l8.44-1.39A12 12 0 1 0 16 3Zm0 2a10 10 0 1 1-5.6 18.3l-.4-.27-4 .66.95-3.84-.26-.4A9.98 9.98 0 0 1 16 5Zm-5.1 6.1c.21-.46.48-.47.7-.47h.6c.2 0 .47-.07.72.36.25.43.86 1.52.94 1.63.08.11.12.25.02.41c-.1.16-.15.26-.3.41-.15.15-.32.35-.46.47-.15.15-.3.31-.13.6.18.3.8 1.3 1.72 2.1 1.19 1.06 2.2 1.39 2.5 1.55.3.15.48.13.66-.08.18-.2.77-.9.98-1.22.22-.31.41-.26.68-.16.28.1 1.75.83 2.05.98.3.15.5.23.58.36.08.13.08.75-.18 1.46-.25.72-1.46 1.38-2.02 1.47-.56.08-1.07.08-1.85-.12-.77-.2-1.77-.73-2.9-1.46-1.05-.68-1.87-1.52-2.6-2.5-.72-.98-1.32-2.1-1.48-2.43-.16-.33-.02-.52.12-.67.13-.15.3-.33.46-.53.15-.2.31-.41.4-.55Z"
              />
            </svg>
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
          <span className="pointer-events-none absolute h-16 w-16 rounded-full bg-blue-400 opacity-75 motion-safe:hover:animate-ping hidden md:block" />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform will-change-transform hover:scale-110">
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
              <path
                fill="currentColor"
                d="M9.04 15.03 8.9 18.3c.32 0 .46-.14.62-.31l1.49-1.43 3.09 2.27c.57.31.98.15 1.13-.53l2.05-9.63c.2-.9-.33-1.26-.9-1.04l-12 4.62c-.82.32-.8.78-.14.99l3.06.95 7.1-4.48c.33-.2.63-.09.38.13l-5.74 5.46Z"
              />
            </svg>
          </div>
        </button>
      </form>
    </div>
  );
}
