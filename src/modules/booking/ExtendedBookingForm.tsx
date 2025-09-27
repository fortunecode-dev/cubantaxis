"use client";

import { useState } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import type { AppTexts } from "@/app/[lang]/locales/types";

type BookingData = {
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
};

type Props = { idioma: AppTexts };

export default function ExtendedBookingForm({ idioma }: Props) {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    vehicle: idioma.vehicles?.[0] || "Sedan",
    from: idioma.locations?.[0] || "Havana",
    to: idioma.locations?.[1] || "Varadero",
    date: "",
    time: "",
    passengers: "1",
    luggage: "",
    details: "",
    images: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") (value as File[]).forEach((f) => form.append("images", f));
        else form.append(key, String(value));
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
      toast.success(idioma.clipboardTemplate.copied, { duration: 2200 });

      setTimeout(() => {
        const tgUser =
          (process.env.NEXT_PUBLIC_TELEGRAM_USER as string) ||
          (process.env.TELEGRAM_USER as string) ||
          "";
        window.open(`https://t.me/${tgUser}`, "_blank");
      }, 2200);
    } catch (err) {
      console.error(err);
      toast.error(idioma.clipboardTemplate.error);
    }
  };

  // Nuevo estilo helpers
  const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label
      {...props}
      className={["mb-1 block text-sm font-bold text-accent", props.className || ""].join(" ")}
    />
  );

  const inputBase =
    "w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-2xl border border-primary/15 bg-white p-4 pb-0 shadow-sm"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "rounded-xl shadow-lg ring-1 ring-primary/20 bg-white text-primary px-4 py-3",
          success: { className: "rounded-xl shadow-lg ring-1 ring-primary/30 bg-white text-primary" },
          error: { className: "rounded-xl shadow-lg ring-1 ring-accent/30 bg-white text-primary" },
        }}
      />

      {/* Header */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-extrabold text-accent">
          {idioma?.bookingForm?.title}
        </h3>
        <p className="mt-1 text-sm text-primary">
          {idioma?.bookingForm?.subtitle}
        </p>
      </div>

      {/* GRID principal */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {/* Nombre */}
        <div>
          <Label htmlFor="name">📛 {idioma.bookingForm.fullName}</Label>
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
        <div>
          <Label htmlFor="email">✉️ {idioma.bookingForm.email}</Label>
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

        {/* Teléfono + Pasajeros */}
        <div className="md:col-span-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col">
              <Label htmlFor="phone">📞 {idioma.bookingForm.phone}</Label>
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
              <Label htmlFor="passengers">👥 {idioma.bookingForm.passengers}</Label>
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

        {/* Fecha + Hora */}
        <div className="md:col-span-2">
          <div className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col">
              <Label htmlFor="date">📅 {idioma.bookingForm.date}</Label>
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
              <Label htmlFor="time">🕒 {idioma.bookingForm.time}</Label>
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
        <div>
          <Label htmlFor="vehicle">🚗 {idioma.bookingForm.vehicleType}</Label>
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
        <div>
          <Label htmlFor="from">📍 {idioma.bookingForm.from}</Label>
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
        <div>
          <Label htmlFor="to">🏁 {idioma.bookingForm.to}</Label>
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
        <div>
          <Label htmlFor="luggage">🎒 {idioma.bookingForm.luggage}</Label>
          <input
            id="luggage"
            name="luggage"
            type="text"
            placeholder={idioma.bookingForm.luggaageExample /* mantener key existente */}
            className={inputBase}
            value={formData.luggage}
            onChange={handleChange}
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <Label htmlFor="details">📝 {idioma.bookingForm.details}</Label>
          <textarea
            id="details"
            name="details"
            placeholder={idioma.bookingForm.detailsExample}
            className={`${inputBase} min-h-[110px]`}
            value={formData.details}
            onChange={handleChange}
          />
          <span className="mt-1 block text-xs text-primary/70">
            {idioma.bookingForm.example}
          </span>
        </div>

        {/* Images */}
        <div className="md:col-span-2">
          <Label htmlFor="images">📎 {idioma.bookingForm.attachImages}</Label>
          <label
            htmlFor="images"
            className="block cursor-pointer rounded-2xl border-2 border-dashed border-primary/25 bg-primary/5 p-4 text-center text-sm text-primary hover:bg-primary/10 transition"
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
            <div className="mt-2 text-xs text-primary/80">
              {formData.images.length} file(s) selected
            </div>
          )}
        </div>
      </div>

      {/* CTAs (nuevo estilo): principal = acento sólido; secundario = primario suave */}
      <div className="mt-6 mb-4 flex flex-col gap-3 md:flex-row">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          <FaTelegramPlane className="text-lg" aria-hidden />
          {idioma.quickBookingForm.telegram}
        </button>

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
              if (key === "images") (value as File[]).forEach((f) => form.append("images", f));
              else form.append(key, String(value));
            });

            await fetch("/api/telegram-booking?formSource=Traslado Personalizado", {
              method: "POST",
              body: form,
            });

            const whatsappNumber =
              (process.env.NEXT_PUBLIC_CONTACT_NUMBER as string) ||
              (process.env.CONTACT_NUMBER as string) ||
              "";
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 transition hover:bg-primary/10"
        >
          <FaWhatsapp className="text-lg" aria-hidden />
          {idioma.quickBookingForm.whatsapp}
        </button>
      </div>
    </form>
  );
}
