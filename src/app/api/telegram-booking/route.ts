import { NextResponse } from "next/server";
import { Readable } from "stream";
import formidable, { File } from "formidable";
import fs from "fs";
import axios from "axios";
import FormDataNode from "form-data";

// Desactiva el body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

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
    const { fields, files } = await parseFormData(request);
    const { searchParams } = new URL(request.url);

    const formSource = searchParams.get("formSource");
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
    console.log({ TELEGRAM_CHAT_ID, TELEGRAM_TOKEN })
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
    } = fields;
    // Enviar imágenes
    const imageList = Array.isArray(files.images)
      ? files.images
      : files.images
        ? [files.images]
        : [];

    const message = `${formSource}
🚖 ${formSource != "Reserva rápida" ? `📛 Nombre: ${name}` : ""}
✉️ Email: ${email}
📞 Teléfono: ${phone}
📍 Desde: ${from}
🏁 Hasta: ${to}
📅 Fecha: ${date}
🕒 Hora: ${time}
🚗 Vehículo: ${vehicle}
👥 Pasajeros: ${passengers}
🎒 Equipaje: ${luggage}
${formSource != "Reserva rápida" ? `📝 Detalles: ${details}` : ""}
${!!imageList.length ? "Imágenes a continuación..." : ""}`;

    // Enviar texto
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: fields.source ? `Mensaje directo a través de: ${fields.source} ${(new Date()).toLocaleDateString("es-ES")} ${(new Date()).toLocaleTimeString("es-ES")}` : `${message}
      ${(new Date()).toLocaleDateString("es-ES")}`,
    });


    for (const file of imageList) {
      const formData = new FormDataNode();
      formData.append("chat_id", TELEGRAM_CHAT_ID);
      formData.append("photo", fs.createReadStream((file as File).filepath));

      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`,
        formData,
        {
          headers: formData.getHeaders(),
        }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en /telegram-booking:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

