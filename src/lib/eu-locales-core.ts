export const EU_LOCALES = [
  "bg", "hr", "cs", "da", "nl", "en", "et", "fi", "fr", "de", "el", "hu",
  "ga", "it", "lv", "lt", "mt", "pl", "pt", "ro", "sk", "sl", "es", "sv",
] as const;

export type EuLocale = (typeof EU_LOCALES)[number];

export const EU_LOCALE_LABELS: Record<EuLocale, string> = {
  bg: "Български", hr: "Hrvatski", cs: "Čeština", da: "Dansk", nl: "Nederlands",
  en: "English", et: "Eesti", fi: "Suomi", fr: "Français", de: "Deutsch",
  el: "Ελληνικά", hu: "Magyar", ga: "Gaeilge", it: "Italiano", lv: "Latviešu",
  lt: "Lietuvių", mt: "Malti", pl: "Polski", pt: "Português", ro: "Română",
  sk: "Slovenčina", sl: "Slovenščina", es: "Español", sv: "Svenska",
};

export const EU_HOME_URLS = Object.fromEntries(
  EU_LOCALES.map((locale) => [locale, `/${locale}/`]),
) as Record<EuLocale, string>;

export const EU_HOME_ALTERNATES = Object.fromEntries([
  ...EU_LOCALES.map((locale) => [
    locale,
    `https://www.certif-scope.com/${locale}/`,
  ]),
  ["x-default", "https://www.certif-scope.com/fr/"],
]);

export function isEuLocale(value: string): value is EuLocale {
  return EU_LOCALES.includes(value as EuLocale);
}
