/* =========================================================
   Certif-Scope — Attestation i18n Index
   Single source of truth for available locales
   ========================================================= */

import { ATTESTATION_EN } from "./en";
import { ATTESTATION_FR } from "./fr";

/**
 * Supported attestation locales
 * - Add a locale ONLY when its dictionary is complete
 * - English ("en") is the legal reference language
 */
export type AttestationLocale =
  | "en"
  | "fr";

/**
 * Attestation dictionaries registry
 */
export const ATTESTATION_I18N = {
  en: ATTESTATION_EN,
  fr: ATTESTATION_FR,
} as const;

/**
 * Default / fallback locale (legal reference)
 */
export const DEFAULT_ATTESTATION_LOCALE: AttestationLocale = "en";
