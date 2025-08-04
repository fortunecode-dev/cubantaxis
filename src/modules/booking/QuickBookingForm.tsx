"use client";
import { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { AppTexts } from "@/app/[lang]/locales/types";

interface BookingData {
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: string;
  luggage: string;
}

interface Props {
  idioma: AppTexts;
}

export default function QuickBookingForm({ idioma }: Props) {
  const [formData, setFormData] = useState<BookingData>({
    phone: "",
    from: "Havana",
    to: "Varadero",
    date: "",
    time: "",
    vehicle: "Sedan",
    passengers: "1",
    luggage: "",
  });

  const locations = idioma.quickForm.locations;
  const vehicles = idioma.quickForm.vehicles;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const message = `${idioma.quickForm.requestTitle}
📞 ${idioma.quickForm.phone}: ${formData.phone}
📍 ${idioma.quickForm.from}: ${formData.from}
🏁 ${idioma.quickForm.to}: ${formData.to}
📅 ${idioma.quickForm.date}: ${formData.date}
🕒 ${idioma.quickForm.time}: ${formData.time}
🚗 ${idioma.quickForm.vehicle}: ${formData.vehicle}
👥 ${idioma.quickForm.passengers}: ${formData.passengers}
🎒 ${idioma.quickForm.luggage}: ${formData.luggage}`;

  const sendReservation = async (platform: "whatsapp" | "telegram") => {
    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (platform === "whatsapp") {
        const whatsappNumber = "+5355432748";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
      } else {
        const telegramUsername = "TaxiCubaBot";
        window.open(`https://t.me/${telegramUsername}?start=${encodeURIComponent(message)}`, "_blank");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className="mx-auto max-w-3xl bg-white p-6 md:p-10 rounded-2xl border-amber-100 border-1 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {[
        { id: "phone", label: idioma.quickForm.phone, type: "tel", placeholder: "+53 555 432 748" },
        { id: "date", label: idioma.quickForm.date, type: "date", min: new Date().toISOString().split("T")[0] },
        { id: "time", label: idioma.quickForm.time, type: "time" },
        { id: "passengers", label: idioma.quickForm.passengers, type: "number", min: 1, max: 10 },
        { id: "luggage", label: idioma.quickForm.luggage, type: "text", placeholder: idioma.quickForm.luggagePlaceholder },
      ].map((field) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="text-sm font-semibold text-gray-800 mb-1">{field.label}</label>
          <input
            {...field}
            name={field.id}
            value={(formData as any)[field.id]}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required={field.type !== "text"}
          />
        </div>
      ))}

      <div className="flex flex-col">
        <label htmlFor="vehicle" className="text-sm font-semibold text-gray-800 mb-1">
          🚗 {idioma.quickForm.vehicle}
        </label>
        <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none">
          {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      {["from", "to"].map((key) => (
        <div key={key} className="flex flex-col">
          <label htmlFor={key} className="text-sm font-semibold text-gray-800 mb-1">
            {key === "from" ? "📍 " + idioma.quickForm.from : "🏁 " + idioma.quickForm.to}
          </label>
          <select
            name={key}
            value={(formData as any)[key]}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {locations.filter((l) => l !== (key === "from" ? formData.to : formData.from)).map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="md:col-span-2 flex flex-col gap-3 mt-4">
        <button
          type="button"
          onClick={() => sendReservation("whatsapp")}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
        >
          <FaWhatsapp className="text-xl" />
          {idioma.quickForm.bookViaWhatsapp}
        </button>
        <button
          type="button"
          onClick={() => sendReservation("telegram")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
        >
          <FaTelegramPlane className="text-xl" />
          {idioma.quickForm.bookViaTelegram}
        </button>
      </div>
    </form>
  );
}
