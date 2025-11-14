// import LanguageSuggestor from "@/components/LanguageSuggestor";
import Home from "./[lang]/page";
import { LocaleParams } from "@/types/common";
import type { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any" }],
    apple: "/apple-icon.png",
  },
};
export default async function RootHome({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  return (
    <>
      {/* <LanguageSuggestor /> */}
      <Home params={params} />
    </>
  );
}
