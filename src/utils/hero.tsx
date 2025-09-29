import { ReactNode } from "react";

export function emphasizeNodes(text: string, phrases?: string[] | string): ReactNode {
  const terms = Array.isArray(phrases) ? termsFilter(phrases) : phrases ? [phrases] : [];
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const i = m.index;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(<span key={`emp-${i}`} className="text-accent">{m[0]}</span>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function termsFilter(arr: string[]) {
  return arr.filter(Boolean);
}