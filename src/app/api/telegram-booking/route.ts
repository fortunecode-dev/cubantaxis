import { NextResponse } from "next/server";
import { Readable } from "stream";
import formidable, { File } from "formidable";
import fs from "fs";
import axios from "axios";
import FormDataNode from "form-data";
import { browserInfoString, buildContactMessageByLang, detectEffectiveLang } from "@/utils/metadata";
import { booking } from "@/app/[lang]/locales/booking/es";

// Transforma Request a objeto compatible con formidable
async function parseFormData(request: Request): Promise<{ fields: any; files: any }> {

  const form = formidable({ multiples: true, keepExtensions: true });

  const contentType = request.headers.get("content-type") || "";
  const contentLength = request.headers.get("content-length") || "0";

  const reader = request.body?.getReader();
  const stream = new Readable({
    async read() {
      if (!reader) return this.push(null);
      const { done, value } = await reader.read();
      if (done) return this.push(null);
      this.push(Buffer.from(value));
    },
  });

  return new Promise((resolve, reject) => {
    form.parse(
      Object.assign(stream, {
        headers: {
          "content-type": contentType,
          "content-length": contentLength,
        },
      }) as any,
      (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      }
    );
  });
}

export async function POST(request: Request) {
  try {
    const navInfo = browserInfoString(request); // por defecto multilínea

    const { fields, files } = await parseFormData(request);
    const { searchParams } = new URL(request.url);

    const formSource = (searchParams.get("formSource") || "").trim();
    const confirmation = (searchParams.get("confirmation") || "").trim().toLowerCase(); // "whatsapp" | "telegram"

    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

    // Campos del form (evitar undefined)
    const {
      name = "",
      email = "",
      phone = "",
      vehicle = "",
      from = "",
      to = "",
      date = "",
      time = "",
      passengers = "",
      luggage = "",
      details = "",
    } = fields || {};

    // Imágenes
    const imageList = Array.isArray(files?.images)
      ? files.images
      : files?.images
        ? [files.images]
        : [];

    // === Helpers ===
    const tz = "America/Havana";
    const now = new Date();
    const fechaCuba = new Intl.DateTimeFormat("es-ES", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now);
    const horaCuba = new Intl.DateTimeFormat("es-ES", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

    const escapeHTML = (s = "") =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const nonEmpty = (s?: string) => (s ? String(s).trim() : "");

    const line = (emoji: string, label: string, value?: string) => {
      const v = nonEmpty(value);
      return v ? `${emoji} <b>${label}:</b> ${escapeHTML(v)}` : "";
    };

    // Normalizaciones para links
    const onlyDigits = (s = "") => s.toString().replace(/[^\d]/g, "");
    const waPhone = onlyDigits(phone);
    const tgPhone = onlyDigits(phone);

    // === 1) Mensaje-resumen de la reserva (HTML, sin campos vacíos) ===
    const parts = [
      formSource ? `🧾 <b>${escapeHTML(formSource)}</b>` : "",
      line("📛", "Nombre", name),
      line("✉️", "Email", email),
      line("📞", "Teléfono", phone),
      line("📍", "Desde", (booking.fastBooking.form as any)[from]),
      line("🏁", "Hasta", (booking.fastBooking.form as any)[to]),
      line("📅", "Fecha", date),
      line("🕒", "Hora", time),
      line("🚗", "Vehículo", (booking.fastBooking.form as any)[vehicle]),
      line("👥", "Pasajeros", passengers),
      line("🎒", "Equipaje", luggage),
      line("📝", "Detalles", details),
      imageList.length ? "🖼 <b>Imágenes adjuntas a continuación…</b>" : "",
      // Al final: registro con fecha/hora (sin mencionar zona/país)
      `🕘 <i>Registro realizado el ${fechaCuba} ${horaCuba}</i>`,
    ].filter(Boolean);

    const resumenHTML = parts.join("\n");
    // 🔥 Idioma efectivo desde navegación
    const effectiveLang = detectEffectiveLang(request);

    // 🔥 Mensaje de contacto en ese idioma
    const contactMsgPlain = buildContactMessageByLang(effectiveLang, {
      name, from: (booking.fastBooking.form as any)[from], to:(booking.fastBooking.form as any)[to], date, time, passengers, vehicle:(booking.fastBooking.form as any)[vehicle], confirmation
    });

    // === 3) Enviar el resumen principal a Telegram (HTML) con botón condicional ===
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: resumenHTML,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            confirmation === "whatsapp"
              ? {
                text: "📱 Escribir por WhatsApp",
                url: `https://wa.me/${waPhone}?text=${encodeURIComponent(contactMsgPlain)}`,
              }
              : {
                text: "📩 Escribir por Telegram",
                url: tgPhone ? `tg://resolve?phone=${tgPhone}` : `https://t.me/`,
              },
          ],
        ],
      },
    });

    // === 4) Si la vía de confirmación es Telegram, manda el mensaje de contacto como bloque Markdown para copiar ===
    if (confirmation === "telegram") {
      // Evitar que backticks rompan el bloque
      const blockSafe = contactMsgPlain.replace(/`/g, "'");
      const mdBlock = `"${blockSafe}"`;
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: contactMsgPlain,
      });
    }
    // Evitar que backticks rompan el bloque
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: navInfo,
    });

    // === 5) Enviar imágenes (si existen) ===
    for (const file of imageList) {
      const formData = new FormDataNode();
      formData.append("chat_id", TELEGRAM_CHAT_ID);
      formData.append("photo", fs.createReadStream((file as any).filepath));
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`,
        formData,
        { headers: formData.getHeaders() }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en /telegram-booking:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

