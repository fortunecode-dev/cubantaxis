"use client";

import { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import type { AppTexts } from "@/app/[lang]/locales/types";

interface BookingData {
  phone: string;
  from?: string;
  to?: string;
  date: string;
  time: string;
  vehicle?: string;
  passengers: string;
  luggage: string;
}

interface Props {
  idioma: AppTexts;
}

export default function QuickBookingForm({ idioma }: Props) {
  const [formData, setFormData] = useState<BookingData>({
    phone: "",
    from: idioma.locations?.[0],
    to: idioma.locations?.[1],
    date: "",
    time: "",
    vehicle: idioma.vehicles[0],
    passengers: "1",
    luggage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const message = `
${idioma.quickBookingForm.messageTitle}
📞 ${idioma.quickBookingForm.phone}: ${formData.phone}
📍 ${idioma.quickBookingForm.from}: ${formData.from}
🏁 ${idioma.quickBookingForm.to}: ${formData.to}
📅 ${idioma.quickBookingForm.date}: ${formData.date}
🕒 ${idioma.quickBookingForm.time}: ${formData.time}
🚗 ${idioma.quickBookingForm.vehicleType}: ${formData.vehicle}
👥 ${idioma.quickBookingForm.passengers}: ${formData.passengers}
🎒 ${idioma.quickBookingForm.luggage}: ${formData.luggage}`.trim();

  const sendReservation = async (platform: "whatsapp" | "telegram") => {
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, String(value));
      });

      await fetch("/api/telegram-booking?formSource=Reserva rápida", {
        method: "POST",
        body: form,
      });

      // Copiar plantilla al portapapeles
      await navigator.clipboard.writeText(message);

      if (platform === "whatsapp") {
        // Nota: en el cliente deben ser variables NEXT_PUBLIC_ si usas process.env
        const whatsappNumber =
          (process.env.NEXT_PUBLIC_CONTACT_NUMBER as string) ||
          (process.env.CONTACT_NUMBER as string) ||
          ""; // fallback
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(url, "_blank");
      } else {
        // Mostrar toast (multilenguaje) antes de abrir Telegram
        toast.success(idioma.clipboardTemplate.copied, { duration: 3000 });

        setTimeout(() => {
          const tgUser =
            (process.env.NEXT_PUBLIC_TELEGRAM_USER as string) ||
            (process.env.TELEGRAM_USER as string) ||
            ""; // fallback
          const url = `https://t.me/${tgUser}`;
          window.open(url, "_blank");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(idioma.clipboardTemplate.error);
    }
  };

  return (
      <form
        className="mx-auto max-w-3xl bg-white p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-2 pb-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // base para todos
            className:
              "rounded-xl shadow-lg text-xl  ring-1 ring-amber-300/70 bg-white/95 text-neutral-800 px-4 py-3 backdrop-blur-sm",
            duration: 2600,
            // variantes
            success: {
              iconTheme: { primary: "#16a34a", secondary: "#fff" }, // verde
              className:
                "rounded-xl shadow-lg ring-1 ring-green-300/70 bg-white/95 text-neutral-800",
            },
            error: {
              iconTheme: { primary: "#dc2626", secondary: "#fff" }, // rojo
              className:
                "rounded-xl shadow-lg ring-1 ring-red-300/70 bg-white/95 text-neutral-800",
            },
          }}
        />
        {/* Teléfono y pasajeros juntos */}
        <div className="flex gap-2 col-span-1 md:col-span-2">
          <div className="flex flex-col flex-1 min-w-0">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-gray-800 mb-1"
            >
              {idioma.quickBookingForm.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+53 555 432 748"
              value={formData.phone}
              onChange={handleChange}
              inputMode="tel"
              autoComplete="tel"
              pattern="^[+0-9\\s()-]{6,}$"
              aria-label={idioma.quickBookingForm.phone}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <label
              htmlFor="passengers"
              className="text-sm font-semibold text-gray-800 mb-1"
            >
              {idioma.quickBookingForm.passengers}
            </label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              min={1}
              max={10}
              step={1}
              inputMode="numeric"
              value={formData.passengers}
              onChange={handleChange}
              aria-label={idioma.quickBookingForm.passengers}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Fecha y hora en la misma fila */}
        <div className="flex gap-2 col-span-1 md:col-span-2">
          <div className="flex flex-col flex-1 min-w-0">
            <label
              htmlFor="date"
              className="text-sm font-semibold text-gray-800 mb-1"
            >
              {idioma.quickBookingForm.date}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={handleChange}
              aria-label={idioma.quickBookingForm.date}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <label
              htmlFor="time"
              className="text-sm font-semibold text-gray-800 mb-1"
            >
              {idioma.quickBookingForm.time}
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-label={idioma.quickBookingForm.time}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Equipaje */}
        <div className="flex flex-col">
          <label
            htmlFor="luggage"
            className="text-sm font-semibold text-gray-800 mb-1"
          >
            {idioma.quickBookingForm.luggage}
          </label>
          <input
            type="text"
            id="luggage"
            name="luggage"
            placeholder={idioma.quickBookingForm.luggage}
            value={formData.luggage}
            onChange={handleChange}
            aria-label={idioma.quickBookingForm.luggage}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Vehículo */}
        <div className="flex flex-col">
          <label
            htmlFor="vehicle"
            className="text-sm font-semibold text-gray-800 mb-1"
          >
            🚗 {idioma.quickBookingForm.vehicleType}
          </label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            aria-label={idioma.quickBookingForm.vehicleType}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {idioma.vehicles.map((v: string) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        {/* From / To */}
        {(["from", "to"] as const).map((key) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="text-sm font-semibold text-gray-800 mb-1"
            >
              {key === "from"
                ? "📍 " + idioma.quickBookingForm.from
                : "🏁 " + idioma.quickBookingForm.to}
            </label>
            <select
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              aria-label={
                key === "from"
                  ? idioma.quickBookingForm.from
                  : idioma.quickBookingForm.to
              }
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              {idioma.locations
                .filter(
                  (l: string) =>
                    l !== (key === "from" ? formData.to : formData.from)
                )
                .map((loc: string) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
            </select>
          </div>
        ))}

        {/* Botones */}
        <div className="md:col-span-2 flex flex-col gap-3 mt-4">
          <button
            type="button"
            onClick={() => sendReservation("whatsapp")}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            {idioma.quickBookingForm.whatsapp}
          </button>
          <button
            type="button"
            onClick={() => sendReservation("telegram")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <FaTelegramPlane className="text-xl" />
            {idioma.quickBookingForm.telegram}
          </button>
        </div>
      </form>
  );
}
