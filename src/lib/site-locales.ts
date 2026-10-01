import type { Metadata } from "next";

export const SITE_LOCALES = ["fr", "en", "de"] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];
export const localeNames = { fr: "Français", en: "English", de: "Deutsch" };
export const numberLocales = { fr: "fr-FR", en: "en-GB", de: "de-DE" };
export const paths = {
  fr: {
    home: "/fr/",
    generate: "/fr/generate/",
    product: "/fr/product/",
    pricing: "/fr/pricing/",
    methodology: "/fr/product/methodology/",
    compliance: "/fr/product/compliance/",
    verify: "/fr/verify/",
    contact: "/fr/contact/",
    legal: "/fr/legal/",
    privacy: "/fr/privacy/",
    terms: "/fr/terms/",
    cookies: "/fr/cookies/",
    data: "/fr/data-processing/",
    success: "/success/",
  },
  en: {
    home: "/en/",
    generate: "/en/generate/",
    product: "/en/product/",
    pricing: "/en/pricing/",
    methodology: "/en/product/methodology/",
    compliance: "/en/product/compliance/",
    verify: "/en/verify/",
    contact: "/en/contact/",
    legal: "/en/legal/",
    privacy: "/en/privacy/",
    terms: "/en/terms/",
    cookies: "/en/cookies/",
    data: "/en/data-processing/",
    success: "/en/success/",
  },
  de: {
    home: "/de/",
    generate: "/de/erstellen/",
    product: "/de/produkt/",
    pricing: "/de/preise/",
    methodology: "/de/methodik/",
    compliance: "/de/grenzen-und-compliance/",
    verify: "/de/pruefen/",
    contact: "/de/kontakt/",
    legal: "/de/impressum/",
    privacy: "/de/datenschutz/",
    terms: "/de/agb/",
    cookies: "/de/cookies/",
    data: "/de/datenverarbeitung/",
    success: "/de/erfolg/",
  },
} as const;
export type PageKey = keyof typeof paths.fr;
export function siteLocale(input: unknown): SiteLocale {
  return SITE_LOCALES.includes(input as SiteLocale)
    ? (input as SiteLocale)
    : "fr";
}
export function pageMetadata(
  locale: SiteLocale,
  page: PageKey,
  title: string,
  description: string,
): Metadata {
  const url = `https://www.certif-scope.com${paths[locale][page]}`;
  return {
    title: `${title} | Certif-Scope`,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries([
        ...SITE_LOCALES.map((l) => [
          l,
          `https://www.certif-scope.com${paths[l][page]}`,
        ]),
        ["x-default", `https://www.certif-scope.com${paths.fr[page]}`],
      ]),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Certif-Scope",
      type: "website",
      locale: { fr: "fr_FR", en: "en_GB", de: "de_DE" }[locale],
    },
    robots: { index: page !== "success", follow: page !== "success" },
  };
}

export const SECTORS = [
  {
    value: "professional_services",
    fr: "Services aux entreprises",
    en: "Business services",
    de: "Unternehmensdienstleistungen",
  },
  {
    value: "information_technology",
    fr: "Numérique, informatique & technologies",
    en: "Digital, IT & technology",
    de: "Digitales, IT & Technologien",
  },
  {
    value: "manufacturing",
    fr: "Industrie, fabrication & production",
    en: "Industry, manufacturing & production",
    de: "Industrie, Fertigung & Produktion",
  },
  {
    value: "construction",
    fr: "BTP, construction & immobilier",
    en: "Construction & real estate",
    de: "Bau, Immobilien & Gebäudewirtschaft",
  },
  {
    value: "wholesale_retail",
    fr: "Commerce, distribution & vente",
    en: "Trade, distribution & retail",
    de: "Handel, Vertrieb & Verkauf",
  },
  {
    value: "transport_logistics",
    fr: "Transport, logistique & livraison",
    en: "Transport, logistics & delivery",
    de: "Transport, Logistik & Lieferung",
  },
  {
    value: "hospitality_events",
    fr: "Hôtellerie, restauration, tourisme & événementiel",
    en: "Hospitality, tourism & events",
    de: "Hotellerie, Gastronomie, Tourismus & Veranstaltungen",
  },
  {
    value: "other",
    fr: "Autres activités",
    en: "Other activities",
    de: "Sonstige Tätigkeiten",
  },
] as const;
export function sectorLabel(value: string, locale: SiteLocale): string {
  const sector = SECTORS.find(
    (s) =>
      s.value === value || s.fr === value || s.en === value || s.de === value,
  );
  return sector ? sector[locale] : value;
}
