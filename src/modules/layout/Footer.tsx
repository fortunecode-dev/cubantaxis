// app/modules/layout/Footer.tsx
import Link from "next/link";
import { getTranslation } from "@/app/[lang]/locales";

export default function Footer({ lang }: { lang: string }) {
  const year = new Date().getFullYear();
  const t = getTranslation(lang); // si fuera async, usa await en el caller
  const prefix = lang === "en" ? "" : `/${lang}`;

  // JSON-LD opcional: navegación del sitio (refuerza SEO; no afecta performance)
  const siteNavLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "All About Taxis In Cuba",
      "Private Transfer Booking",
      "Quick Booking",
      "Blog",
      t.howMuchIsATaxi,
      "Interesting Places in Cuba",
      "Frequently Asked Questions",
    ],
    url: [
      `${prefix}/taxi-in-cuba`,
      `${prefix}/private-transfer-booking`,
      `${prefix}/cuba-taxi-booking`,
      `${prefix}/blog`,
      `${prefix}/blog/how-much-is-a-taxi-in-cuba`,
      `${prefix}/interesting-places-in-cuba`,
      `${prefix}/#frequently-asked-questions`,
    ],
  };

  const links: Array<{ href: string; label: string }> = [
    { href: `${prefix}/taxi-in-cuba`, label: "All About Taxis In Cuba" },
    { href: `${prefix}/private-transfer-booking`, label: "Private Transfer Booking" },
    { href: `${prefix}/cuba-taxi-booking`, label: "Quick Booking" },
    { href: `${prefix}/blog`, label: "Blog" },
    { href: `${prefix}/blog/how-much-is-a-taxi-in-cuba`, label: t.howMuchIsATaxi },
    { href: `${prefix}/interesting-places-in-cuba`, label: "Interesting Places in Cuba" },
    { href: `${prefix}/#frequently-asked-questions`, label: "Frequently Asked Questions" },
  ];

  return (
    <footer
      className="mt-16 border-t border-primary/15 bg-white text-primary"
      // Diferir layout/pintura bajo el pliegue sin CLS
      style={{ contentVisibility: "auto", containIntrinsicSize: "680px" }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* CONTENIDOS */}
        <div className="grid gap-8 md:grid-cols-2">
          <nav aria-labelledby="footer-contents" className="text-sm">
            <h2 id="footer-contents" className="mb-3 text-base font-bold text-accent">
              Contents
            </h2>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    prefetch={false}
                    className="text-primary hover:text-accent hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* REDES SOCIALES */}
          <nav aria-labelledby="footer-social" className="text-sm">
            <h2 id="footer-social" className="mb-3 text-base font-bold text-accent">
              Social
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/CubanTaxis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  aria-label="CubanTaxis on Facebook"
                >
                  {/* Facebook azul (SVG inline para cero dependencias) */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" aria-hidden>
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.68 9.18 8.49 9.94v-7.03H7.9v-2.9h2.59V9.96c0-2.56 1.52-3.98 3.85-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62v1.94h2.85l-.46 2.9h-2.39V22c4.81-.76 8.49-4.92 8.49-9.94z" />
                  </svg>
                  <span className="text-primary font-bold">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cubantaxis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  aria-label="CubanTaxis on Instagram"
                >
                  {/* Instagram rojo */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ED4341" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                  <span className="text-primary font-bold">Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom minimal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 text-xs md:flex-row">
          <p className="text-primary">© {year} CubanTaxis.</p>
          <a href="#top" className="text-primary hover:text-accent hover:underline">
            Back to top
          </a>
        </div>
      </div>

      {/* JSON-LD server-rendered (0 JS cliente) */}
      <script
        id="ld-sitenav"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavLd) }}
      />
    </footer>
  );
}
