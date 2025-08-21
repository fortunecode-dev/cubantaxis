"use client";
import { LocaleLink } from "@/libs/i18n-nav";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Destination = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  short: string;
  long: string;
  tags?: string[];
};

export function DestinationsGrid({ items }: { items: Destination[] }) {
  const [open, setOpen] = useState<Destination | null>(null);

  return (
    <>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7"
        role="list"
        aria-label="Destination cards"
      >
        {items.map((d) => (
          <article
            key={d.slug}
            id={d.slug}
            role="listitem"
            className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:shadow-md dark:border-amber-500/20 dark:bg-zinc-900"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={d.image}
                alt={d.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
              {/* Tags */}
              {d.tags?.length ? (
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-amber-200/70 backdrop-blur dark:bg-zinc-900/80 dark:text-gray-100 dark:ring-amber-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5">
              <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                {d.title}
              </h2>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {d.short}
              </p>

              {/* ---- Detailed description ---- */}
              {/* Desktop/Tablet (>= sm): inline visible */}
              <div className="mt-3 hidden rounded-xl border border-amber-100 bg-amber-50 p-3 text-sm leading-relaxed text-gray-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-gray-200 sm:block">
                {d.long}
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Mobile only: See more (opens modal) */}
                <button
                  type="button"
                  onClick={() => setOpen(d)}
                  aria-label={`See more about ${d.title}`}
                  aria-haspopup="dialog"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:hidden"
                >
                  See more
                </button>

                {/* Quick booking (visible everywhere) */}
                <LocaleLink
                  href="/taxi"
                  aria-label={`Quick booking to ${d.title}`}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-sky-400"
                >
                  Quick booking
                </LocaleLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile-only Modal: render but only accesible via mobile button */}
      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.title}>
        {open && (
          <div className="space-y-4">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">{open.long}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/taxi"
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-amber-500/60 transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Quick booking
              </Link>
              <button
                onClick={() => setOpen(null)}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 dark:border-white/10 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-sky-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel (drawer on mobile, modal on desktop) */}
      <div className="relative w-full rounded-t-2xl bg-white p-5 shadow-xl sm:max-w-2xl sm:rounded-2xl sm:p-6 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
