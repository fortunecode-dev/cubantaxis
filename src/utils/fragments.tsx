import { ReactNode } from "react";
export type TableSpec = {
  headers: string[];
  rows: (string | number)[][];
  note?: string;
};
export function emphasizeNodes(text: string, phrases?: string[] | string): ReactNode {
  const terms = Array.isArray(phrases) ? phrases.filter(Boolean) : phrases ? [phrases] : [];
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const i = m.index;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(
      <span key={`emp-${i}`} className="text-accent">
        {m[0]}
      </span>
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
export function ResponsiveTable({ spec }: { spec: TableSpec }) {
  return (
    <>
      <div className="space-y-3 md:hidden">
        {spec.rows.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
          >
            {row.map((cell, i) => (
              <div
                key={i}
                className="grid grid-cols-[130px_1fr] gap-2 py-1 text-sm"
              >
                <div className="font-medium text-gray-900">
                  {spec.headers[i]}
                </div>
                <div className="text-gray-700 wrap-break-word whitespace-normal">
                  {cell}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop: true table without forced min-width or overflow */}
      <div className="hidden md:block">
        <table className="w-full table-auto text-left text-sm text-gray-700">
          <thead>
            <tr className="border-b">
              {spec.headers.map((h) => (
                <th key={h} className="py-2 pr-4 font-semibold text-gray-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b align-top">
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="py-2 pr-4 break-words whitespace-normal"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {spec.note && <p className="mt-2 text-xs text-gray-500">{spec.note}</p>}
    </>
  );
}