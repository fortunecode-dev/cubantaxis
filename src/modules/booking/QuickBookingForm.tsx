"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cars, places } from "@/utils/constants";
// @ts-ignore
// import { FaWhatsapp, FaTelegram } from "react-icons/fa6";

type BookingData = {
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: string;
  luggage?: string; // opcional
};

type Props = { idioma: any };

export default function QuickBookingForm({ idioma }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const initialData: BookingData = {
    phone: "",
    from: from ? (places.includes(from) ? from : places?.[0]) : "",
    to: to ? (places.includes(to) ? to : places?.[1]) : "",
    date: "",
    time: "",
    vehicle: idioma.vehicles?.[0] || "",
    passengers: "1",
    luggage: "",
  };

  const [formData, setFormData] = useState<BookingData>(initialData);

  // Evitar hydration: min date solo en cliente
  const [minDate, setMinDate] = useState("1970-01-01");
  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  // Modal “Datos enviados”
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Ref al <form> para usar reportValidity()
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendReservation = async (platform: "whatsapp" | "telegram") => {
    // Valida nativo (sin alert)
    const ok = formRef.current?.reportValidity();
    if (!ok) return;

    try {
      setSubmitting(true);
      // Muestra el modal ya (UX simple)
      setModalOpen(true);

      const form = new FormData();
      Object.entries(formData).forEach(([k, v]) => form.append(k, String(v)));

      await fetch(
        `/api/telegram-booking?formSource=ReservaRápida&confirmation=${platform}`,
        { method: "POST", body: form }
      );

      // Éxito: limpiar
      setFormData(initialData);
    } catch (err) {
      console.error(err);
      // Mantenerlo simple: no mostramos error aquí por tu pedido
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
      {/* Teléfono + Pasajeros */}
      <div className="grid grid-cols-2 gap-3">
        <Field
          id="phone"
          label={idioma.phone}
          type="tel"
          placeholder="+53 555 432 748"
          required
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
          label={idioma.passengers}
          type="number"
          required
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
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Field
          id="date"
          label={idioma.date}
          type="date"
          required
          value={formData.date}
          onChange={handleChange}
          inputProps={{
            name: "date",
            min: minDate,
            required: true,
            suppressHydrationWarning: true as any,
          }}
        />
        <Field
          id="time"
          label={idioma.time}
          type="time"
          required
          value={formData.time}
          onChange={handleChange}
          inputProps={{ name: "time", required: true }}
        />
      </div>

      {/* From + To */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {(["from", "to"] as const).map((key) => (
          <div key={key}>
            <Label htmlFor={key} required>
              {key === "from" ? `📍 ${idioma.from}` : `🏁 ${idioma.to}`}
            </Label>
            <select
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              aria-label={key === "from" ? idioma.from : idioma.to}
              className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/40"
              disabled={submitting}
            >
              {places
                .filter(
                  (l: string) =>
                    l !== (key === "from" ? formData.to : formData.from)
                )
                .map((loc: string) => (
                  <option key={loc} value={loc}>
                    {idioma[loc]}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>

      {/* Vehicle + Luggage */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <Label htmlFor="vehicle" required>{`🚗 ${idioma.vehicleType}`}</Label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            aria-label={idioma.vehicleType}
            className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/40"
            disabled={submitting}
          >
            {cars.map((v: string) => (
              <option key={v} value={v}>
                {idioma[v]}
              </option>
            ))}
          </select>
        </div>
        <Field
          id="luggage"
          label={idioma.info}
          type="text"
          placeholder={idioma.infoPlaceHolder}
          value={formData.luggage || ""}
          onChange={handleChange}
          inputProps={{ name: "luggage" }} // opcional
        />
      </div>

      {/* Botones */}
      <div className="mt-5 flex flex-col gap-3 md:col-span-2">
        <button
          type="button"
          onClick={() => sendReservation("whatsapp")}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
        >
          {/* <FaWhatsapp className="text-lg" aria-hidden /> */}
          {idioma.confirmations.whatsapp}
        </button>

        <button
          type="button"
          onClick={() => sendReservation("telegram")}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 transition hover:bg-primary/10 disabled:opacity-60"
        >
          {/* <FaTelegram className="text-lg" aria-hidden /> */}
          {idioma.confirmations.telegram}
        </button>
      </div>

      {/* Modal con fondo difuminado (mismo que el Extended) */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm backdrop-saturate-150 p-4 transition-opacity duration-300"
        >
          <div className="w-full max-w-md rounded-2xl bg-white/95 shadow-2xl ring-1 ring-primary/10 backdrop-blur-[1px] p-6">
            <h4 className="text-center text-lg font-bold text-accent">
              {idioma.confirmationTexts.title}
            </h4>
            <p className="mt-2 text-center text-sm text-primary">
              {idioma.confirmationTexts.message}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  setFormData(initialData); // 👈 resetea el formulario
                  router.push("/"); // 👈 navega al inicio
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

/* ───────── helpers UI ───────── */
function Label({
  required,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      {...props}
      className={[
        "mb-1 block text-sm font-bold text-accent",
        props.className || "",
      ].join(" ")}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
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
  required,
}: {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  required?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
        required={required}
        className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
        {...inputProps}
      />
    </div>
  );
}
