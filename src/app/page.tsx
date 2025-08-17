import LanguageSuggestor from "@/components/LanguageSuggestor";
import Home from "./[lang]/page";
import Script from "next/script";

export default function RootHome() {
  return (
    <>
      <LanguageSuggestor />
      <Home params={Promise.resolve({ lang: "en" })} />
      <Script id="ld-taxi" type="application/ld+json" strategy="afterInteractive">
{JSON.stringify({
  "@context": "https://www.cubantaxis.com",
  "@type": "TaxiService",
  "name": "CubanTaxis",
  "url": "https://www.cubantaxis.com",
  "areaServed": "Cuba",
  "telephone": "+53 5444 7931",
  "sameAs": [
    "https://www.facebook.com/CubanTaxis/",
    "https://www.instagram.com/cubantaxis/"
  ],
})}
</Script>
    </>
  );
}
