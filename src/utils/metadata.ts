// utils/browserInfo.ts
export function browserInfoString(
  req: Request,
  opts: { multiline?: boolean; langFormat?: "short" | "full" } = {}
): string {
  const { multiline = true, langFormat = "short" } = opts;

  const headers = req.headers;
  const referer = headers.get("referer") || "";

  // --- Accept-Language (primario) ---
  const acceptRaw = headers.get("accept-language") || "";
  const primaryLocaleRaw = acceptRaw.split(",")[0]?.split(";")[0]?.trim() || ""; // p.ej. "es-ES"
  const primaryShort = primaryLocaleRaw.split("-")[0]?.toLowerCase() || "";     // "es"

  // --- Lang desde path del referrer: /en | /es | /fr | /de | /ru | /pt ---
  const SUPPORTED = new Set(["en", "es", "fr", "de", "ru", "pt"]);
  let langFromRef = "";
  if (referer) {
    try {
      const u = new URL(referer);
      const seg = u.pathname.split("/").filter(Boolean)[0]?.toLowerCase() || "";
      if (SUPPORTED.has(seg)) langFromRef = seg; // dos letras
    } catch { /${bold} ref inválido, ignorar ${bold}/ }
  }

  // Idioma efectivo: prioriza ref; si no hay, usa accept según formato deseado
  // - Si langFormat = "full" → usa "es-ES" (si existe), si no, el corto.
  const acceptEffective = (langFormat === "full" && primaryLocaleRaw) ? primaryLocaleRaw : primaryShort;
  const effectiveLang = langFromRef || acceptEffective;

  // --- UA básico ---
  const ua = (headers.get("user-agent") || "").toLowerCase();
  const deviceType = /mobi|iphone|android|ipad|ipod/.test(ua) ? "mobile" : "desktop";

  let os = "desconocido";
  if (/android/.test(ua)) os = "Android";
  else if (/iphone|ipad|ipod|ios/.test(ua)) os = "iOS";
  else if (/windows/.test(ua)) os = "Windows";
  else if (/mac os x/.test(ua)) os = "macOS";
  else if (/linux/.test(ua)) os = "Linux";

  let browser = "desconocido";
  if (/edg\//.test(ua)) browser = "Edge";
  else if (/opr\//.test(ua)) browser = "Opera";
  else if (/chrome\//.test(ua)) browser = "Chrome";
  else if (/firefox\//.test(ua)) browser = "Firefox";
  else if (/safari/.test(ua) && !/chrome/.test(ua)) browser = "Safari";

  // --- Bandera del idioma ---
  const flag = langFlagEmoji(effectiveLang, primaryLocaleRaw);

  const lines = [
    referer && `🌐: ${referer}`,
    effectiveLang && `🏳️: ${flag} ${effectiveLang}`,
    `🖥️: ${deviceType}`,
    `💿: ${os}`,
    `🔍: ${browser}`,
  ].filter(Boolean) as string[];

  if (!lines.length) return "";

  return multiline
    ? `🔎 Datos del navegador:\n${lines.join("\n")}`
    : `🔎 Datos del navegador — ${lines.join(" · ")}`;
}

// Mapea idioma a bandera. Si viene "es-ES" y no hay langFromRef, usa país "ES".
// Si solo viene "es", usa un país por defecto (ES, US, FR, DE, RU, PT).
function langFlagEmoji(effectiveLang: string, primaryLocaleRaw: string): string {
  if (!effectiveLang) return "🏳️";
  // Si es "xx-YY", intenta por país "YY"
  if (effectiveLang.includes("-")) {
    const cc = effectiveLang.split("-")[1]?.toUpperCase() || "";
    if (cc) return countryToFlag(cc);
  }
  // Si es corto "xx", intenta por mapping por defecto
  const map: Record<string, string> = {
    en: "US", es: "ES", fr: "FR", de: "DE", ru: "RU", pt: "PT",
  };
  const lang = effectiveLang.toLowerCase();
  const cc = map[lang];
  if (cc) return countryToFlag(cc);

  // Como fallback, intenta extraer del accept full (p.ej. pt-BR)
  const ccFromFull = primaryLocaleRaw.split("-")[1]?.toUpperCase() || "";
  if (ccFromFull) return countryToFlag(ccFromFull);

  return "🏳️"; // bandera blanca (desconocido)
}

function countryToFlag(cc: string): string {
  // Convierte código ISO-3166 a bandera
  if (!/^[A-Z]{2}$/.test(cc)) return "🏳️";
  const codePoints = [...cc].map(c => 0x1F1E6 - 65 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
// --- ya lo tienes ---
// export function browserInfoString(...) { ... }

// === NUEVO: detectar idioma efectivo desde Request (ref -> accept) ===
export function detectEffectiveLang(
  req: Request,
  opts: { supported?: Array<"en"|"es"|"fr"|"de"|"ru"|"pt">, acceptFormat?: "short"|"full" } = {}
): "en"|"es"|"fr"|"de"|"ru"|"pt" {
  const { supported = ["en","es","fr","de","ru","pt"], acceptFormat = "short" } = opts;
  const headers = req.headers;
  const referer = headers.get("referer") || "";

  // 1) Lang del path del referrer: /en|/es|/fr|/de|/ru|/pt
  if (referer) {
    try {
      const u = new URL(referer);
      const seg = u.pathname.split("/").filter(Boolean)[0]?.toLowerCase() || "";
      if (supported.includes(seg as any)) return seg as any;
      else return "en"
    } catch {/${bold} ignore ${bold}/}
  }

  // 2) Accept-Language
  const raw = headers.get("accept-language") || "";
  const primary = raw.split(",")[0]?.split(";")[0]?.trim() || ""; // ej "es-ES"
  const short = primary.split("-")[0]?.toLowerCase() || "es";

  return (supported.includes(short as any) ? short : "es") as any;
}

// === NUEVO: mensaje de contacto multilenguaje ===
type ContactFields = {
  name?: string;
  from?: string;
  to?: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicle?: string;
  confirmation:string
};

function getCubaHourNum() {
  const tz = "America/Havana";
  return Number(new Intl.DateTimeFormat("es-ES", { timeZone: tz, hour: "2-digit", hour12: false }).format(new Date()));
}

function greetingByLang(lang: string, hourNum: number) {
  if (lang === "en") return hourNum < 12 ? "Good morning" : hourNum < 19 ? "Good afternoon" : "Good evening";
  if (lang === "fr") return hourNum < 12 ? "Bonjour" : hourNum < 19 ? "Bon après-midi" : "Bonsoir";
  if (lang === "de") return hourNum < 12 ? "Guten Morgen" : hourNum < 19 ? "Guten Tag" : "Guten Abend";
  if (lang === "ru") return hourNum < 12 ? "Доброе утро" : hourNum < 19 ? "Добрый день" : "Добрый вечер";
  if (lang === "pt") return hourNum < 12 ? "Bom dia" : hourNum < 19 ? "Boa tarde" : "Boa noite";
  return hourNum < 12 ? "Buenos días" : hourNum < 19 ? "Buenas tardes" : "Buenas noches"; // es
}

export function buildContactMessageByLang(
  lang: "en"|"es"|"fr"|"de"|"ru"|"pt",
  f: ContactFields,
  tz = "America/Havana",
): string {
  const nn = (s?: string) => (s ? String(s).trim() : "");
  const name = nn(f.name);
  const from = nn(f.from);
  const to = nn(f.to);
  const date = nn(f.date);
  const time = nn(f.time);
  const passengers = nn(f.passengers);
  const vehicle = nn(f.vehicle);

  const H = getCubaHourNum();
  const G = greetingByLang(lang, H);
  const namePart = name ? `, ${name}` : "";
  const bold=f.confirmation==="whatsapp"?"*":"**"
  if (lang === "en") {
    return [
      `${G}${namePart}. This is the CubanTaxis team.`,
      [from && to ? `Regarding your reservation ${bold}${from} → ${to}${bold}` : "", date ? `for ${bold}${date}${bold}` : "", time ? `at ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
      passengers ? `${bold}Passengers:${bold} ${passengers}` : "",
      vehicle ? `${bold}Vehicle:${bold} ${vehicle}` : "",
      `The estimated price of your trip is ___ USD.`,
      `If you agree, please let us know the exact pickup point and your preferred payment method to complete your booking.`,
      `We remain at your disposal. Thank you very much.`,
      `— CubanTaxis`,
    ].filter(Boolean).join("\n");
  }

  if (lang === "fr") {
    return [
      `${G}${namePart}. Ici l’équipe de CubanTaxis.`,
      [from && to ? `Concernant votre réservation ${bold}${from} → ${to}${bold}` : "", date ? `pour le ${bold}${date}${bold}` : "", time ? `à ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
      passengers ? `${bold}Passagers ${bold}: ${passengers}` : "",
      vehicle ? `${bold}Véhicule ${bold}: ${vehicle}` : "",
      `Le prix estimé de votre trajet est de ___ USD.`,
      `Si vous êtes d’accord, veuillez nous indiquer le point précis de prise en charge et le mode de paiement pour finaliser votre réservation.`,
      `Nous restons à votre disposition. Merci beaucoup.`,
      `— CubanTaxis`,
    ].filter(Boolean).join("\n");
  }

  if (lang === "de") {
    return [
      `${G}${namePart}. Hier schreibt Ihnen das Team von CubanTaxis.`,
      [from && to ? `Bezüglich Ihrer Reservierung ${bold}${from} → ${to}${bold}` : "", date ? `am ${bold}${date}${bold}` : "", time ? `um ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
      passengers ? `${bold}Fahrgäste:${bold} ${passengers}` : "",
      vehicle ? `${bold}Fahrzeug:${bold} ${vehicle}` : "",
      `Der geschätzte Preis Ihrer Fahrt beträgt ___ USD.`,
      `Wenn Sie einverstanden sind, teilen Sie uns bitte den genauen Abholort und die bevorzugte Zahlungsmethode mit, um Ihre Buchung abzuschließen.`,
      `Wir stehen Ihnen gerne zur Verfügung. Vielen Dank.`,
      `— CubanTaxis`,
    ].filter(Boolean).join("\n");
  }

  if (lang === "ru") {
    return [
      `${G}${namePart}. Пишет команда CubanTaxis.`,
      [from && to ? `По поводу вашей брони ${bold}${from} → ${to}${bold}` : "", date ? `на ${bold}${date}${bold}` : "", time ? `в ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
      passengers ? `${bold}Пассажиры:${bold} ${passengers}` : "",
      vehicle ? `${bold}Авто:${bold} ${vehicle}` : "",
      `Предварительная стоимость вашей поездки — ___ USD.`,
      `Если всё подходит, пожалуйста, укажите точное место подачи и предпочтительный способ оплаты, чтобы завершить бронирование.`,
      `Мы на связи. Большое спасибо.`,
      `— CubanTaxis`,
    ].filter(Boolean).join("\n");
  }

  if (lang === "pt") {
    return [
      `${G}${namePart}. Aqui é a equipe da CubanTaxis.`,
      [from && to ? `Sobre a sua reserva ${bold}${from} → ${to}${bold}` : "", date ? `para ${bold}${date}${bold}` : "", time ? `às ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
      passengers ? `${bold}Passageiros:${bold} ${passengers}` : "",
      vehicle ? `${bold}Veículo:${bold} ${vehicle}` : "",
      `O preço estimado da sua viagem é ___ USD.`,
      `Se estiver de acordo, por favor informe o ponto exato de recolha e o método de pagamento para concluir a sua reserva.`,
      `Continuamos à disposição. Muito obrigado.`,
      `— CubanTaxis`,
    ].filter(Boolean).join("\n");
  }

  // default ES
  return [
    `${G}${namePart}. Le escribe el equipo de CubanTaxis.`,
    [from && to ? `Con respecto a su reserva ${bold}${from} → ${to}${bold}` : "", date ? `para el ${bold}${date}${bold}` : "", time ? `a las ${bold}${time}${bold}` : ""].filter(Boolean).join(" "),
    passengers ? `${bold}Pasajeros:${bold} ${passengers}` : "",
    vehicle ? `${bold}Vehículo:${bold} ${vehicle}` : "",
    `El precio estimado de su viaje es ___ USD.`,
    `Si está de acuerdo, por favor indíquenos el punto exacto de recogida y el método de pago para completar su reserva.`,
    `Quedamos atentos. Muchas gracias.`,
    `— CubanTaxis`,
  ].filter(Boolean).join("\n");
}
