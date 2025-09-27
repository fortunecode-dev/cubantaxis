"use client";

import { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import type { AppTexts } from "@/app/[lang]/locales/types";

type BookingData = {
  phone: string;
  from?: string;
  to?: string;
  date: string;
  time: string;
  vehicle?: string;
  passengers: string;
  luggage: string;
};

type Props = { idioma: AppTexts };

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
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
      Object.entries(formData).forEach(([k, v]) => form.append(k, String(v)));

      await fetch("/api/telegram-booking?formSource=Reserva rápida", {
        method: "POST",
        body: form,
      });

      await navigator.clipboard.writeText(message);

      if (platform === "whatsapp") {
        const whatsappNumber =
          (process.env.NEXT_PUBLIC_CONTACT_NUMBER as string) ||
          (process.env.CONTACT_NUMBER as string) ||
          "";
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(url, "_blank");
      } else {
        toast.success(idioma.clipboardTemplate.copied, { duration: 2200 });
        setTimeout(() => {
          const tgUser =
            (process.env.NEXT_PUBLIC_TELEGRAM_USER as string) ||
            (process.env.TELEGRAM_USER as string) ||
            "";
          window.open(`https://t.me/${tgUser}`, "_blank");
        }, 2200);
      }
    } catch (err) {
      console.error(err);
      toast.error(idioma.clipboardTemplate.error);
    }
  };

  return (
    <form
      className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-white p-5 pb-0 shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "rounded-xl shadow-lg ring-1 ring-primary/20 bg-white text-primary px-4 py-3",
          success: {
            className:
              "rounded-xl shadow-lg ring-1 ring-primary/30 bg-white text-primary",
          },
          error: {
            className:
              "rounded-xl shadow-lg ring-1 ring-accent/30 bg-white text-primary",
          },
        }}
      />

      {/* Teléfono + Pasajeros */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Field
          id="phone"
          label={idioma.quickBookingForm.phone}
          type="tel"
          placeholder="+53 555 432 748"
          value={formData.phone}
          onChange={handleChange}
          inputProps={{
            name: "phone",
            inputMode: "tel",
            autoComplete: "tel",
            pattern: "^[+0-9\\s()-]{6,}$",
            required: true,
          }}
        />

        <Field
          id="passengers"
          label={idioma.quickBookingForm.passengers}
          type="number"
          value={formData.passengers}
          onChange={handleChange}
          inputProps={{
            name: "passengers",
            min: 1,
            max: 10,
            step: 1,
            inputMode: "numeric",
            required: true,
          }}
        />
      </div>

      {/* Fecha + Hora */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Field
          id="date"
          label={idioma.quickBookingForm.date}
          type="date"
          value={formData.date}
          onChange={handleChange}
          inputProps={{
            name: "date",
            min: new Date().toISOString().split("T")[0],
            required: true,
          }}
        />
        <Field
          id="time"
          label={idioma.quickBookingForm.time}
          type="time"
          value={formData.time}
          onChange={handleChange}
          inputProps={{ name: "time", required: true }}
        />
      </div>

      {/* Equipaje */}
      <div className="mt-3">
        <Field
          id="luggage"
          label={idioma.quickBookingForm.luggage}
          type="text"
          placeholder={idioma.quickBookingForm.luggage}
          value={formData.luggage}
          onChange={handleChange}
          inputProps={{ name: "luggage" }}
        />
      </div>

      {/* Vehículo */}
      <div className="mt-3">
        <Label htmlFor="vehicle">{`🚗 ${idioma.quickBookingForm.vehicleType}`}</Label>
        <select
          id="vehicle"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          aria-label={idioma.quickBookingForm.vehicleType}
          className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          {idioma.vehicles.map((v: string) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      {/* From / To */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        {(["from", "to"] as const).map((key) => (
          <div key={key}>
            <Label htmlFor={key}>
              {key === "from"
                ? `📍 ${idioma.quickBookingForm.from}`
                : `🏁 ${idioma.quickBookingForm.to}`}
            </Label>
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
              className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/40"
            >
              {idioma.locations
                .filter((l: string) => l !== (key === "from" ? formData.to : formData.from))
                .map((loc: string) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>

      {/* Botones (nuevo estilo: acento sólido + primario suave) */}
      <div className="md:col-span-2 mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => sendReservation("whatsapp")}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
        >
          <FaWhatsapp className="text-lg" aria-hidden />
          {idioma.quickBookingForm.whatsapp}
        </button>

        <button
          type="button"
          onClick={() => sendReservation("telegram")}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 transition hover:bg-primary/10"
        >
          <FaTelegramPlane className="text-lg" aria-hidden />
          {idioma.quickBookingForm.telegram}
        </button>
      </div>
    </form>
  );
}

/* ───────── helpers UI (nuevo estilo: headings rojos, textos azules) ───────── */

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={[
        "mb-1 block text-sm font-bold text-accent",
        props.className || "",
      ].join(" ")}
    />
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  inputProps,
}: {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="flex min-w-0 flex-col">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
        className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
        {...inputProps}
      />
    </div>
  );
}
