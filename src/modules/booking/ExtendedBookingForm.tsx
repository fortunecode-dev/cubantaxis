"use client";

import { AppTexts } from "@/app/[lang]/locales/types";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  details: string;
  images: File[];
}

interface Props {
  idioma: AppTexts;
}
export default function ExtendedBookingForm({ idioma }: Props) {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "Sedan",
    from: "Havana",
    to: "Varadero",
    date: "",
    time: "",
    passengers: "1",
    luggage: "",
    details: "",
    images: [],
  });

  const locations = ["Havana", "Varadero", "Viñales", "Trinidad"];
  const vehicles = ["Sedan", "Van", "SUV"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") {
          (value as File[]).forEach((file) => form.append("images", file));
        } else {
          form.append(key, value);
        }
      });

      await fetch("/api/telegram-booking", {
        method: "POST",
        body: form,
      });

      alert("Reserva enviada correctamente por Telegram");
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Hubo un error al enviar la reserva. Inténtalo de nuevo.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-3 max-w-4xl bg-white p-6 md:p-10 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 border border-yellow-100"
    >
      {[
        { id: "name", label: "📛 Full Name", type: "text", placeholder: "John Doe" },
        { id: "email", label: "✉️ Email", type: "email", placeholder: "john@example.com" },
        { id: "phone", label: "📞 Phone", type: "tel", placeholder: "+53 555 432 748" },
        { id: "date", label: "📅 Date", type: "date", min: new Date().toISOString().split("T")[0] },
        { id: "time", label: "🕒 Time", type: "time" },
        { id: "passengers", label: "👥 Passengers", type: "number", min: 1, max: 10 },
        { id: "luggage", label: "🎒 Luggage", type: "text", placeholder: "2 suitcases + 1 backpack" },
      ].map((field) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="text-sm font-semibold text-gray-800 mb-1">
            {field.label}
          </label>
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
          🚗 Vehicle Type
        </label>
        <select
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        >
          {vehicles.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      {[
        { id: "from", label: "📍 From", options: locations.filter((l) => l !== formData.to) },
        { id: "to", label: "🏁 To", options: locations.filter((l) => l !== formData.from) },
      ].map((field) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="text-sm font-semibold text-gray-800 mb-1">
            {field.label}
          </label>
          <select
            name={field.id}
            value={(formData as any)[field.id]}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {field.options.map((loc: string) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="flex flex-col md:col-span-2">
        <label htmlFor="details" className="text-sm font-semibold text-gray-800 mb-1">
          📝 Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          placeholder="Any special requests or info..."
        />
      </div>

      <div className="flex flex-col md:col-span-2">
        <label htmlFor="images" className="text-sm font-semibold text-gray-800 mb-1">
          📎 Attach Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md text-center"
      >
        <FaWhatsapp className="inline-block mr-2" /> Reservar vía Telegram
      </button>
    </form>
  );
}
