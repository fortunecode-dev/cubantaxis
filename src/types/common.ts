export type LocaleParams = Promise<{
  lang:
  "en"
  | "es"
  | "fr"
  | "de"
  | "ru"
  | "pt"
}>
export enum VehicleTypeEnum {
  "tour",
  "van",
  "classic"
}
export enum DestinationsEnum {
  "hav-airport",
  "var-airport",
  "var",
  "hab",
  "cayo-coco",
  "cfg",
  "santa-clara",
  "trinidad",
  "vinales",
  "cayo-santa-maria",
  "cayo-guillermo"
}
export type HeaderItems = Array<{
  key: string;
  label: string;
  items?: Item[];
  href?: string;
  allHref?: string;
  allLabel?: string;
}>
type Item = { title: string; href: string };
