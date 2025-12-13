"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cars, places } from "@/utils/constants";

type BookingData = {
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: string;
  luggage?: string;
};

type Props = {
  idioma: any;
  fromSlug?: string; // opcional
  toSlug?: string; // opcional
};

export default function QuickBookingForm({ idioma, fromSlug, toSlug }: Props) {
  const router = useRouter();
  const initialData: BookingData = {
    phone: "",
    from: fromSlug && places.includes(fromSlug) ? fromSlug : "",
    to: toSlug && places.includes(toSlug) ? toSlug : "",
    date: "",
    time: "",
    vehicle: idioma.vehicles?.[0] || "",
    passengers: "1",
    luggage: "",
  };

  const [formData, setFormData] = useState<BookingData>(initialData);

  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendReservation = async (platform: "whatsapp" | "telegram") => {
    const ok = formRef.current?.reportValidity();
    if (!ok) return;

    try {
      setSubmitting(true);
      setModalOpen(true);

      const form = new FormData();
      Object.entries(formData).forEach(([k, v]) => form.append(k, String(v)));

      await fetch(
        `/api/telegram-booking?formSource=ReservaRápida&confirmation=${platform}`,
        { method: "POST", body: form }
      );

      setFormData(initialData);
    } catch (err) {
      console.error(err);
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
          required
          placeholder="+53 555 432 748"
          value={formData.phone}
          onChange={handleChange}
          inputProps={{
            name: "phone",
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
          inputProps={{ name: "date", min: minDate, required: true }}
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
              disabled={submitting}
              className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary"
            >
              {places
                .filter(
                  (p) => p !== (key === "from" ? formData.to : formData.from)
                )
                .map((loc) => (
                  <option key={loc} value={loc}>
                    {idioma[loc]}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>

      {/* Vehículo + Equipaje */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <Label htmlFor="vehicle" required>{`🚗 ${idioma.vehicleType}`}</Label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
            disabled={submitting}
            className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary"
          >
            {cars.map((v) => (
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
          inputProps={{ name: "luggage" }}
        />
      </div>

      {/* Botones */}
      <div className="mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => sendReservation("whatsapp")}
          disabled={submitting}
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white"
        >
          {idioma.confirmations.whatsapp}
        </button>

        <button
          type="button"
          onClick={() => sendReservation("telegram")}
          disabled={submitting}
          className="rounded-lg bg-primary/5 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-primary/20"
        >
          {idioma.confirmations.telegram}
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl">
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
                  setFormData(initialData);
                  router.push("/");
                }}
                className="rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white"
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

/* UI Helpers */
function Label({ required, children, ...props }: any) {
  return (
    <label {...props} className="mb-1 block text-sm font-bold text-accent">
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
}: any) {
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
        required={required}
        {...inputProps}
        className="w-full rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm text-primary"
      />
    </div>
  );
}
