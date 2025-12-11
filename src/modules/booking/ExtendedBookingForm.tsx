"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { AppTexts } from "@/app/[lang]/locales/types";
import { cars, places } from "@/utils/constants";
// @ts-ignore
// import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

type BookingData = {
  name: string;
  email: string;
  phone: string;
  vehicle: string; // ahora guarda la key
  from: string; // key
  to: string; // key
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  details: string;
  images: File[];
};

type Props = { idioma: AppTexts | any };

export default function ExtendedBookingForm({ idioma }: Props) {
  const router = useRouter();

  const initialData = useMemo<BookingData>(
    () => ({
      name: "",
      email: "",
      phone: "",
      vehicle: cars?.[0],
      from: places?.[0],
      to: places?.[1],
      date: "",
      time: "",
      passengers: "1",
      luggage: "",
      details: "",
      images: [],
    }),
    []
  );

  const [formData, setFormData] = useState<BookingData>(initialData);

  // Evitar difs de hidratación para min en <input type="date">
  const [minDate, setMinDate] = useState(() => new Date().toISOString().slice(0, 10));



  // Modal simple de confirmación
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const native = (e as any).nativeEvent;
    const confirmation = native?.submitter?.id || "telegram";
    e.preventDefault();

    // Mostrar el modal inmediatamente (UX simple)
    setModalOpen(true);

    // Enviar en segundo plano (sin bloquear modal); al terminar, limpiar
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") (value as File[]).forEach((f) => form.append("images", f));
        else form.append(key, String(value));
      });

      await fetch(
        `/api/telegram-booking?formSource=Traslado Personalizado&confirmation=${confirmation}`,
        { method: "POST", body: form }
      );

      setFormData(initialData);
    } catch (err) {
      console.error(err);
      // Mantén el modal simple; no mostramos error aquí por pedido explícito
    }
  };


  const inputBase =
    "w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl rounded-2xl bg-white p-4 pb-0">
      {/* Header */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-extrabold text-accent">{idioma?.h1}</h3>
        <p className="mt-1 text-sm text-primary">{idioma?.h2}</p>
      </div>

      {/* 1) Teléfono | Nombre — 50/50 */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="phone" required>📞 {idioma?.phone}</Label>
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
        <div>
          <Label htmlFor="name">📛 {idioma?.fullName}</Label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className={inputBase}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 2) Fecha | Hora — 50/50 */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="date" required>📅 {idioma?.date}</Label>
          <input
            id="date"
            name="date"
            type="date"
            min={minDate}
            suppressHydrationWarning
            className={inputBase}
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="time" required>🕒 {idioma?.time}</Label>
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

      {/* 3) From | To — 50/50 */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="from" required>📍 {idioma?.from}</Label>
          <select
            id="from"
            name="from"
            className={inputBase}
            value={formData.from}
            onChange={handleChange}
            required
          >
            {places
              .filter((l: any) => l !== formData.to)
              .map((loc: any) => (
                <option key={loc} value={loc}>
                  {idioma[loc]}
                </option>
              ))}
          </select>
        </div>
        <div>
          <Label htmlFor="to" required>🏁 {idioma?.to}</Label>
          <select
            id="to"
            name="to"
            className={inputBase}
            value={formData.to}
            onChange={handleChange}
            required
          >
            {places
              .filter((l: any) => l !== formData.from)
              .map((loc: any) => (
                <option key={loc} value={loc}>
                  {idioma[loc]}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* 4) Vehicle | Passengers — 50/50 */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="vehicle" required>🚗 {idioma?.vehicleType}</Label>
          <select
            id="vehicle"
            name="vehicle"
            className={inputBase}
            value={formData.vehicle}
            onChange={handleChange}
            required
          >
            {cars.map((v: string) => (
              <option key={v} value={v}>
                {idioma[v]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="passengers">👥 {idioma?.passengers}</Label>
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
          />
        </div>
      </div>

      {/* 5) Luggage | Email — 50/50 */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="luggage">🎒 {idioma?.luggage}</Label>
          <input
            id="luggage"
            name="luggage"
            type="text"
            placeholder={idioma?.luggageExample}
            className={inputBase}
            value={formData.luggage}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="email">✉️ {idioma?.email}</Label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className={inputBase}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-3">
        <Label htmlFor="details">📝 {idioma?.details}</Label>
        <textarea
          id="details"
          name="details"
          placeholder={idioma?.detailsExample}
          className={`${inputBase} min-h-[110px]`}
          value={formData.details}
          onChange={handleChange}
        />
        <span className="mt-1 block text-xs text-primary/70">{idioma?.example}</span>
      </div>

      {/* Images */}
      <div className="mt-3">
        <Label htmlFor="images">📎 {idioma?.attachImages}</Label>
        <label
          htmlFor="images"
          className="block cursor-pointer rounded-2xl border-2 border-dashed border-primary/25 bg-primary/5 p-4 text-center text-sm text-primary transition hover:bg-primary/10"
        >
          {idioma?.upload}
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

      {/* CTAs */}
      <div className="mb-4 mt-6 flex flex-col gap-3">
        <button
          type="submit"
          id="whatsapp"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 transition hover:bg-primary/10"
        >
          {/* <FaWhatsapp className="text-lg" aria-hidden /> */}
          {idioma?.confirmations?.whatsapp}
        </button>
        <button
          type="submit"
          id="telegram"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          {/* <FaTelegram className="text-lg" aria-hidden /> */}
          {idioma?.confirmations?.telegram}
        </button>
      </div>

      {/* Modal simple con fondo difuminado (igual al de referencia) */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm backdrop-saturate-150 p-4 transition-opacity duration-300"
        >
          <div className="w-full max-w-md rounded-2xl bg-white/95 shadow-2xl ring-1 ring-primary/10 backdrop-blur-[1px] p-6">
            <h4 className="text-center text-lg font-bold text-accent">{idioma.confirmationTexts.title}</h4>
            <p className="mt-2 text-center text-sm text-primary">
              {idioma.confirmationTexts.message}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  router.push("/"); // Navegar al inicio
                }}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                {idioma.confirmationTexts.button}
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
  const Label = ({
    required,
    children,
    ...props
  }: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) => (
    <label {...props} className="mb-1 block text-sm font-bold text-accent">
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
