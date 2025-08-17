"use client";

import Link from "next/link";
import { useCallback } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaTelegram } from "react-icons/fa";

export default function Footer() {
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
const form = new FormData();

    form.append("source", String("Footer " + platform));

    await fetch("/api/telegram-booking", {
      method: "POST",
      body: form,
    });
    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "header" }),
      });

      if (platform === "whatsapp") {
        window.open(`https://wa.me/5355432748?text=${encodeURIComponent(message)}`, "_blank");
      } else if (platform === "telegram") {
        window.open(`https://t.me/lralfonsoc?start=${encodeURIComponent(message)}`, "_blank");
      }
    } catch (error) {
      console.error("Error al enviar plantilla vacía:", error);
    }
  }, []);
  return (
    <footer className="mt-16 bg-amber-50/80 border-t border-amber-200/70 text-neutral-800 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-10">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                CubanTaxis
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700/90 dark:text-gray-300">
              Traslados privados en Cuba: Aeropuerto, <span className="font-medium">Habana</span>,{" "}
              <span className="font-medium">Varadero</span>, <span className="font-medium">Viñales</span>,{" "}
              <span className="font-medium">Trinidad</span> y más. Servicio fiable, precios cerrados y
              atención 24/7.
            </p>

            {/* Socials */}
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
          </div>

          {/* Enlaces rápidos (SEO)
          <nav aria-label="Enlaces de navegación" className="text-sm">
            <h3 className="mb-3 text-base font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/transfers" className="hover:underline">
                  Traslados Aeropuerto José Martí &rarr; La Habana / Varadero
                </Link>
              </li>
              <li>
                <Link href="/city-tours" className="hover:underline">
                  City Tours en La Habana (clásicos y descapotables)
                </Link>
              </li>
              <li>
                <Link href="/excursions" className="hover:underline">
                  Excursiones a Viñales, Trinidad, Cienfuegos
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:underline">
                  Precios por coche (no por persona)
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:underline">
                  Reservas rápidas por WhatsApp/Telegram
                </Link>
              </li>
            </ul>
          </nav>

          Zonas populares (keywords)
          <nav aria-label="Zonas populares" className="text-sm">
            <h3 className="mb-3 text-base font-semibold">Zonas populares</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/transfers/havana-varadero" className="hover:underline">
                  Taxi La Habana &larr;&rarr; Varadero
                </Link>
              </li>
              <li>
                <Link href="/transfers/havana-vinales" className="hover:underline">
                  Taxi La Habana &larr;&rarr; Viñales
                </Link>
              </li>
              <li>
                <Link href="/transfers/havana-trinidad" className="hover:underline">
                  Taxi La Habana &larr;&rarr; Trinidad
                </Link>
              </li>
              <li>
                <Link href="/transfers/varadero-airport" className="hover:underline">
                  Aeropuerto de Varadero &larr;&rarr; Hoteles
                </Link>
              </li>
              <li>
                <Link href="/transfers/havana-airport" className="hover:underline">
                  Aeropuerto de La Habana &rarr; Centro Habana / Vedado
                </Link>
              </li>
            </ul>
          </nav>

          Contacto / CTA
          <div className="text-sm">
            <h3 className="mb-3 text-base font-semibold">Contacto inmediato</h3>
            <p className="mb-3">
              ¿Necesitas un taxi ahora? Escríbenos y te confirmamos en minutos.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/5355432748?text=Hola%20CubanTaxis%2C%20quiero%20reservar%20un%20traslado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-amber-400/90 px-4 py-2 font-semibold text-neutral-900 hover:bg-amber-400 transition-colors"
              >
                Reservar por WhatsApp
              </a>
              <a
                href="https://t.me/TaxiCubaBot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-4 py-2 font-medium text-neutral-800 hover:bg-white transition-colors dark:bg-gray-800/70 dark:hover:bg-gray-800"
              >
                Hablar por Telegram
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-600/90 dark:text-gray-400">
              Atención 24/7 · Traslados privados · Conductores profesionales
            </p>
          </div> */}

        </div>

        {/* Bottom
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-amber-200/70 pt-6 text-xs md:flex-row dark:border-gray-800">
          <p>
            © {year} CubanTaxis. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Políticas de privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                Política de cookies
              </Link>
            </li>
            <li>
              <a href="#top" className="hover:underline">
                Volver arriba
              </a>
            </li>
          </ul>
        </div> */}
      </div>

      {/* JSON-LD: SEO Local/Servicio */}
      <script
        type="application/ld+json"
        // Nota: usa tu dominio real en "url" cuando lo tengas
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://cubantaxis.com",
            "@type": "TaxiService",
            "name": "CubanTaxis",
            "areaServed": "Cuba",
            "serviceArea": "Cuba",
            "availableLanguage": ["es", "en", "fr", "de", "ru", "pt"],
            "priceRange": "$$",
            "telephone": "+53 5543 2748",
            "sameAs": [
              "https://www.facebook.com/CubanTaxis/",
              "https://www.instagram.com/cubantaxis/",
              "https://t.me/TaxiCubaBot",
              "https://wa.me/5355432748"
            ],
            "openingHours": "Mo-Su 00:00-23:59",
          }),
        }}
      />
    </footer>
  );
}
