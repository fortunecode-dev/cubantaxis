"use client";

import { AppTexts } from "@/app/[lang]/locales/types";
import { useState } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

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
          form.append(key, String(value));
        }
      });

      await fetch("/api/telegram-booking?formSource=Traslado Personalizado", {
        method: "POST",
        body: form,
      });

      const msg = `${idioma.bookingForm.title}
📛 ${idioma.bookingForm.fullName}: ${formData.name}
✉️ ${idioma.bookingForm.email}: ${formData.email}
📞 ${idioma.bookingForm.phone}: ${formData.phone}
📍 ${idioma.bookingForm.from}: ${formData.from}
🏁 ${idioma.bookingForm.to}: ${formData.to}
📅 ${idioma.bookingForm.date}: ${formData.date}
🕒 ${idioma.bookingForm.time}: ${formData.time}
🚗 ${idioma.bookingForm.vehicleType}: ${formData.vehicle}
👥 ${idioma.bookingForm.passengers}: ${formData.passengers}
🎒 ${idioma.bookingForm.luggage}: ${formData.luggage}
📝 ${idioma.bookingForm.details}: ${formData.details}`.trim();

      await navigator.clipboard.writeText(msg);

      // Toast multilenguaje usando idioma.clipboardTemplate
      toast.success(idioma.clipboardTemplate.copied, { duration: 3000 });

      setTimeout(() => {
        const tgUser =
          (process.env.NEXT_PUBLIC_TELEGRAM_USER as string) ||
          (process.env.TELEGRAM_USER as string) ||
          "";
        const url = `https://t.me/${tgUser}`;
        window.open(url, "_blank");
      }, 3000);
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      toast.error(idioma.clipboardTemplate.error);
    }
  };

  // estilos base para inputs
  const inputBase =
    "rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-3xl  bg-white/90 p-4 pb-0 pt-0 "
    >
      {/* Header */}
      <div className="mb-4 md:mb-6">
        {/* <h3 className="text-xl md:text-2xl font-semibold text-neutral-800">
          {idioma?.bookingForm?.title}
        </h3> */}
        <p className="text-sm text-neutral-500 text-center">
          {idioma?.bookingForm?.subtitle}
        </p>
      </div>

      {/* GRID principal */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {/* Nombre */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-semibold text-gray-800">
            📛 {idioma.bookingForm.fullName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className={inputBase}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-800">
            ✉️ {idioma.bookingForm.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className={inputBase}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Teléfono + Pasajeros (fila) */}
        <div className="md:col-span-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col">
              <label htmlFor="phone" className="mb-1 text-sm font-semibold text-gray-800">
                📞 {idioma.bookingForm.phone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="^[+0-9\\s()-]{6,}$"
                placeholder="+53 555 432 748"
                className={inputBase}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <label htmlFor="passengers" className="mb-1 text-sm font-semibold text-gray-800">
                👥 {idioma.bookingForm.passengers}
              </label>
              <input
                id="passengers"
                name="passengers"
                type="number"
                min={1}
                max={10}
                step={1}
                inputMode="numeric"
                className={inputBase}
                value={formData.passengers}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Fecha + Hora (fila) */}
        <div className="md:col-span-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col">
              <label htmlFor="date" className="mb-1 text-sm font-semibold text-gray-800">
                📅 {idioma.bookingForm.date}
              </label>
              <input
                id="date"
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className={inputBase}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <label htmlFor="time" className="mb-1 text-sm font-semibold text-gray-800">
                🕒 {idioma.bookingForm.time}
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className={inputBase}
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Vehicle */}
        <div className="flex flex-col">
          <label htmlFor="vehicle" className="mb-1 text-sm font-semibold text-gray-800">
            🚗 {idioma.bookingForm.vehicleType}
          </label>
          <select
            id="vehicle"
            name="vehicle"
            className={inputBase}
            value={formData.vehicle}
            onChange={handleChange}
          >
            {idioma.vehicles.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        {/* From */}
        <div className="flex flex-col">
          <label htmlFor="from" className="mb-1 text-sm font-semibold text-gray-800">
            📍 {idioma.bookingForm.from}
          </label>
          <select
            id="from"
            name="from"
            className={inputBase}
            value={formData.from}
            onChange={handleChange}
          >
            {idioma.locations
              .filter((l) => l !== formData.to)
              .map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
          </select>
        </div>

        {/* To */}
        <div className="flex flex-col">
          <label htmlFor="to" className="mb-1 text-sm font-semibold text-gray-800">
            🏁 {idioma.bookingForm.to}
          </label>
          <select
            id="to"
            name="to"
            className={inputBase}
            value={formData.to}
            onChange={handleChange}
          >
            {idioma.locations
              .filter((l) => l !== formData.from)
              .map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
          </select>
        </div>

        {/* Luggage */}
        <div className="flex flex-col">
          <label htmlFor="luggage" className="mb-1 text-sm font-semibold text-gray-800">
            🎒 {idioma.bookingForm.luggage}
          </label>
          <input
            id="luggage"
            name="luggage"
            type="text"
            placeholder={idioma.bookingForm.luggaageExample /* (sic) mantener la misma key que ya usas */}
            className={inputBase}
            value={formData.luggage}
            onChange={handleChange}
          />
        </div>

        {/* Details (full width) */}
        <div className="md:col-span-2 flex flex-col">
          <label htmlFor="details" className="mb-1 text-sm font-semibold text-gray-800">
            📝 {idioma.bookingForm.details}
          </label>
          <textarea
            id="details"
            name="details"
            placeholder={idioma.bookingForm.detailsExample}
            className={`${inputBase} min-h-[100px]`}
            value={formData.details}
            onChange={handleChange}
          />
          <span className="mt-1 text-xs text-neutral-400">
            {idioma.bookingForm.example}
          </span>
        </div>

        {/* Images */}
        <div className="md:col-span-2">
          <label htmlFor="images" className="mb-1 block text-sm font-semibold text-gray-800">
            📎 {idioma.bookingForm.attachImages}
          </label>
          <label
            htmlFor="images"
            className="block cursor-pointer rounded-2xl border-2 border-dashed border-amber-200 bg-amber-50/40 p-4 text-center text-sm text-neutral-600 hover:bg-amber-50 transition"
          >
            {idioma.bookingForm.upload}
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="sr-only"
            />
          </label>
          {formData.images.length > 0 && (
            <div className="mt-2 text-xs text-neutral-500">
              {formData.images.length} file(s) selected
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-600"
        >
          <FaTelegramPlane className="text-lg" />
          {idioma.quickBookingForm.telegram}
        </button>

        {/* Botón alternativo WhatsApp */}
        <button
          type="button"
          onClick={async () => {
            const msg = `Booking request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
From: ${formData.from}
To: ${formData.to}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.vehicle}
Passengers: ${formData.passengers}
Luggage: ${formData.luggage}
Details: ${formData.details}`;

            const form = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
              if (key === "images") {
                (value as File[]).forEach((file) => form.append("images", file));
              } else {
                form.append(key, String(value));
              }
            });

            await fetch("/api/telegram-booking?formSource=Traslado Personalizado", {
              method: "POST",
              body: form,
            });

            const whatsappNumber =
              (process.env.NEXT_PUBLIC_CONTACT_NUMBER as string) ||
              (process.env.CONTACT_NUMBER as string) ||
              "";

            window.open(
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
              "_blank"
            );
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"
        >
          <FaWhatsapp className="text-lg" />
          {idioma.quickBookingForm.whatsapp}
        </button>
      </div>
    </form>
  );
}
