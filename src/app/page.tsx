import LanguageSuggestor from "@/components/LanguageSuggestor";
import Home from "./[lang]/page";

export default function RootHome() {
  return (
    <>
      <LanguageSuggestor />
      <Home params={Promise.resolve({ lang: "en" })} />
    </>
  );
}
