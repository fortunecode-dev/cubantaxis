
import "./[lang]/globals.css";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LocaleParams } from "@/types/common";
export async function generateStaticParams() {
  const languages = ["en", "fr", "de", "ru", "pt"];
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: LocaleParams
}>) {
  const { lang } = await params;
  return (
    <html lang={lang||"en"}>
      <head>
        {/* preconnect para handshake más rápido */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.addEventListener('load', () => {
        (window.requestIdleCallback || setTimeout)(() => {
          gtag('js', new Date());
          gtag('config', 'G-HB26WDN91W', { send_page_view: true });
        }, 800);
      });
    `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </head>
      <body className="antialiased">
        <Header lang={"en"} />
        {children}
        <FloatingContacts lang={"en"} />
        <Footer lang={"en"} />
      </body>
    </html>
  );
}
