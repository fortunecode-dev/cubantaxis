import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSelect({ currentLang }: { currentLang: string }) {
  const langs = [
    { code: "en", label: "English", emoji: "us" },
    { code: "es", label: "Español", emoji: "es" },
    { code: "fr", label: "Français", emoji: "fr" },
    { code: "pt", label: "Português", emoji: "pt" },
    { code: "de", label: "Deutsch", emoji: "de" },
    { code: "ru", label: "Русский", emoji: "ru" },
  ];
console.log(currentLang);
  const current = langs.find((l) => l.code === currentLang) || langs[0];

  return (
    <details className="relative group select-none">
      <summary
        className="
          inline-flex items-center cursor-pointer list-none 
          text-primary text-xs font-medium px-1 py-2 
          rounded-md hover:bg-primary/10
        "
      >
       <svg className="text-sm" width={"20px"} xmlns="http://www.w3.org/2000/svg" fill="#41517c" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1"><path d="M39,18.67H35.42l-4.2,11.12A29,29,0,0,1,20.6,24.91a28.76,28.76,0,0,0,7.11-14.49h5.21a2,2,0,0,0,0-4H19.67V2a2,2,0,1,0-4,0V6.42H2.41a2,2,0,0,0,0,4H7.63a28.73,28.73,0,0,0,7.1,14.49A29.51,29.51,0,0,1,3.27,30a2,2,0,0,0,.43,4,1.61,1.61,0,0,0,.44-.05,32.56,32.56,0,0,0,13.53-6.25,32,32,0,0,0,12.13,5.9L22.83,52H28l2.7-7.76H43.64L46.37,52h5.22Zm-15.3-8.25a23.76,23.76,0,0,1-6,11.86,23.71,23.71,0,0,1-6-11.86Zm8.68,29.15,4.83-13.83L42,39.57Z"/></svg>
      </summary>
      <div
        className="
          absolute right-0 mt-1 w-36
          bg-white border border-primary/20 rounded-md shadow-lg z-50
        "
      >
        <ul className="p-2 space-y-1">
          {langs.map((l) => (
            <li key={l.code}>
              <Link
                href={`/${l.code=="en"?"":l.code}`}
                className="
                  flex items-center w-full rounded-md
                  px-2 py-1.5 text-xs text-primary
                  hover:bg-primary/5 hover:text-accent transition
                "
              >
                <span className={`fi fi-${l.emoji} mr-2 text-sm`} />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
