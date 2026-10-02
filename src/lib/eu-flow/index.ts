import { EU_FLOW_COPY_PART1 } from "./part1";
import { EU_FLOW_COPY_PART2 } from "./part2";
import { EU_FLOW_COPY_PART3 } from "./part3";
import type { EuNonCoreLocale, FlowCopy, SectorCode } from "./types";
import { EU_LOCALES, type EuLocale } from "@/lib/eu-locales-core";

export type { EuNonCoreLocale, FlowCopy, SectorCode } from "./types";

export const EU_NON_CORE_LOCALES = EU_LOCALES.filter(
  (locale): locale is EuNonCoreLocale =>
    locale !== "fr" && locale !== "en" && locale !== "de",
);

export const EU_FLOW_COPY = {
  ...EU_FLOW_COPY_PART1,
  ...EU_FLOW_COPY_PART2,
  ...EU_FLOW_COPY_PART3,
} as Record<EuNonCoreLocale, FlowCopy>;

export function isEuNonCoreLocale(value: string): value is EuNonCoreLocale {
  return EU_NON_CORE_LOCALES.includes(value as EuNonCoreLocale);
}

export function getEuFlowCopy(locale: EuNonCoreLocale): FlowCopy {
  return EU_FLOW_COPY[locale];
}

export const EU_COUNTRY_CODES = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE",
] as const;

export const DEFAULT_COUNTRY_BY_LOCALE: Record<EuLocale, string> = {
  bg: "BG", hr: "HR", cs: "CZ", da: "DK", nl: "NL", en: "IE", et: "EE",
  fi: "FI", fr: "FR", de: "DE", el: "GR", hu: "HU", ga: "IE", it: "IT",
  lv: "LV", lt: "LT", mt: "MT", pl: "PL", pt: "PT", ro: "RO", sk: "SK",
  sl: "SI", es: "ES", sv: "SE",
};

export function localizedCountryName(locale: EuLocale, region: string): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(region) || region;
  } catch {
    return region;
  }
}
