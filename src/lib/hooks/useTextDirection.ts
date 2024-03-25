import { useLocale } from "next-intl";

const isRtlLang = (locale: string) => ["ar"].includes(locale);

export function useTextDirection(locale: string) {
  const defaultLocale = useLocale();
  if (!locale) locale = defaultLocale;
  return isRtlLang(locale) ? "rtl" : "ltr";
}
