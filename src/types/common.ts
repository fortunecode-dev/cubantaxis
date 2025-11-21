export type LocaleParams = Promise<{
  lang:
  "en"
  | "es"
  | "fr"
  | "de"
  | "ru"
  | "pt"
}>


export type HeaderItems = Array<{
  key: string;
  label: string;
  items?: Item[];
  href?: string;
  allHref?: string;
  allLabel?: string;
}>
type Item = { title: string; href: string };
