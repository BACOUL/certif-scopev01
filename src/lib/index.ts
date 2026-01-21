/* =========================================================
   Certif-Scope — Attestation i18n Index
   Single source of truth for available locales
   ========================================================= */

import { ATTESTATION_EN } from "./en";
import { ATTESTATION_FR } from "./fr";

/**
 * List of supported attestation locales.
 * IMPORTANT:
 * - Add a locale here ONLY when its file is 100% complete
 * - English ("en") is the legal reference language
 */
export type AttestationLocale =
  | "en"
  | "fr";

/**
 * Attestation dictionaries registry
 * - One file per language
 * - No fallback magic at dictionary level
 */
export const ATTESTATION_I18N = {
  en: ATTESTATION_EN,
  fr: ATTESTATION_FR,
} as const;

/**
 * Default / fallback locale (legal reference)
 */
export const DEFAULT_ATTESTATION_LOCALE: AttestationLocale = "en";
