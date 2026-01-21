/* =========================================================
   Certif-Scope — Attestation i18n Index
   Single source of truth for available locales
   ========================================================= */

import { ATTESTATION_EN } from "./en";
import { ATTESTATION_FR } from "./fr";
import { ATTESTATION_DE } from "./de";

/**
 * Supported attestation locales
 * - Add a locale ONLY when its dictionary is complete
 * - English ("en") is the legal reference language
 */
export type AttestationLocale =
  | "en"
  | "fr"
  | "de";

/**
 * Attestation dictionaries registry
 * - One file per language
 * - Strict 1:1 key parity across all dictionaries
 */
export const ATTESTATION_I18N = {
  en: ATTESTATION_EN,
  fr: ATTESTATION_FR,
  de: ATTESTATION_DE,
} as const;

/**
 * Default / fallback locale (legal reference)
 */
export const DEFAULT_ATTESTATION_LOCALE: AttestationLocale = "en";
