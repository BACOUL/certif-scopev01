import type { EuLocale } from "@/lib/eu-locales-core";

export type EuNonCoreLocale = Exclude<EuLocale, "fr" | "en" | "de">;

export type SectorCode =
  | "professional_services"
  | "information_technology"
  | "manufacturing"
  | "construction"
  | "wholesale_retail"
  | "transport_logistics"
  | "hospitality_events"
  | "other";

export type FlowCopy = {
  steps: string[];
  company: string;
  sector: string;
  sectorPlaceholder: string;
  identifier: string;
  year: string;
  country: string;
  expenseIntro: string;
  categories: string[];
  sectors: Record<SectorCode, string>;
  continue: string;
  back: string;
  review: string;
  edit: string;
  result: string;
  indicative: string;
  summary: string;
  accepted: string;
  keyTitle: string;
  keyLabel: string;
  keyCheck: string;
  keyInvalid: string;
  keyNetwork: string;
  pay: string;
  processing: string;
  submitError: string;
  success: {
    title: string;
    ready: string;
    archive: string;
    download: string;
    preparing: string;
    missing: string;
    error: string;
    another: string;
  };
  verify: {
    title: string;
    intro: string;
    invalid: string;
    documentId: string;
    issuer: string;
    issued: string;
    validUntil: string;
    method: string;
    factor: string;
  };
  pdf: {
    title: string;
    subtitle: string;
    resultLabel: string;
    entityTitle: string;
    company: string;
    sector: string;
    country: string;
    year: string;
    issued: string;
    validUntil: string;
    reference: string;
    methodTitle: string;
    methodText: string;
    useTitle: string;
    useText: string;
    limitsTitle: string;
    limitsText: string;
    verificationTitle: string;
    verificationText: string;
    responsibilityTitle: string;
    responsibilityText: string;
    languageNotice: string;
    englishPrevails: string;
    scan: string;
    footer: string;
  };
};
