import LanguageSuggestor from "@/components/LanguageSuggestor";
import Home from "./[lang]/page";
import Script from "next/script";
import { LocaleParams } from "@/types/common";

export default async function RootHome(
  { params }: { params: Promise<LocaleParams> }
) {
  return (
    <>
      <LanguageSuggestor />
      <Home params={params} />
      <Script id="ld-taxi" type="application/ld+json" strategy="afterInteractive">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "CubanTaxis",
  "url": "https://www.cubantaxis.com",
  "areaServed": "Cuba",
  "sameAs": [
    "https://www.facebook.com/CubanTaxis/",
    "https://www.instagram.com/cubantaxis/"
  ],
})}
</Script>
    </>
  );
}
