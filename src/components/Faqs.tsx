"use client"

import Link from "next/link"
import { AppTexts } from "@/app/[lang]/locales/types"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection({ title, faqs }: { title: string, faqs: FaqItem[] }) {
  const renderAnswer = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);

    return parts.map((part, i) => {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, label, href] = match;
        const isInternal = href.startsWith("/");
        return isInternal ? (
          <Link key={i} href={href} className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">{label}</Link>
        ) : (
          <a key={i} href={href} className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">{label}</a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
        <h2 className="mb-6 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="pt-6 text-left border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-6">
            {faqs.map((item, index) => (
              <div key={index} className="flex-1 min-w-[280px] max-w-[580px] mb-8">
                <h3 className="flex items-center mb-3 text-base font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.question}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">{renderAnswer(item.answer)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
