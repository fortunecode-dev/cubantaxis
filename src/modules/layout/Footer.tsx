// app/modules/layout/Footer.tsx
import Link from "next/link";
import { getTranslation } from "@/app/[lang]/locales";

export default async function Footer({ lang }: { lang: string }) {
  const year = new Date().getFullYear();
  const t = getTranslation(lang); // si es async, añade await

  return (
    <footer className="mt-16 border-t border-primary/15 bg-white text-primary ">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* CONTENIDOS */}
        <div className="grid gap-8 md:grid-cols-2">
          <nav aria-label="Contents" className="text-sm">
            <h3 className="mb-3 text-base font-bold text-accent">Contents</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/taxi-in-cuba`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  All About Taxis In Cuba
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/private-transfer-booking`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  Private Transfer Booking
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/cuba-taxi-booking`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  Quick Booking
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/blog`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/blog/how-much-is-a-taxi-in-cuba`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  {t.howMuchIsATaxi}
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/interesting-places-in-cuba`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  Interesting Places in Cuba
                </Link>
              </li>
              <li>
                <Link href={`${lang=="en"?"":`/${lang}`}/#frequently-asked-questions`} prefetch={false} className="text-primary hover:text-accent hover:underline">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </nav>

          {/* REDES SOCIALES */}
          <div className="text-sm">
            <h3 className="mb-3 text-base font-bold text-accent">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/CubanTaxis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  aria-label="CubanTaxis on Facebook"
                >
                  {/* Facebook azul */}
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
          </div>
        </div>

        {/* Bottom minimal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 text-xs md:flex-row">
          <p className="text-primary">© {year} CubanTaxis.</p>
          <a href="#top" className="text-primary hover:text-accent hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
