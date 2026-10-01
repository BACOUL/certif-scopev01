"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  paths,
  SITE_LOCALES,
  type PageKey,
  type SiteLocale,
} from "@/lib/site-locales";
import {
  EU_LOCALES,
  EU_LOCALE_LABELS,
  isEuLocale,
  type EuLocale,
} from "@/lib/eu-locales-core";

function isCoreLocale(locale: EuLocale): locale is SiteLocale {
  return SITE_LOCALES.includes(locale as SiteLocale);
}

type SharedFlowPage = "home" | "generate" | "success" | "verify";

export default function LanguageSwitcher({ locale }: { locale: EuLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const normalizedPath = `${pathname.replace(/\/$/, "") || ""}/`;
  const coreLocale = isCoreLocale(locale) ? locale : null;

  const corePage: PageKey = coreLocale
    ? (Object.keys(paths[coreLocale]) as PageKey[]).find(
        (key) => paths[coreLocale][key] === normalizedPath,
      ) || "home"
    : "home";

  const segments = pathname.split("/").filter(Boolean);
  const nonCoreRoute = !coreLocale ? segments[1] || "" : "";
  const sharedPage: SharedFlowPage = coreLocale
    ? corePage === "generate" || corePage === "success" || corePage === "verify"
      ? corePage
      : "home"
    : nonCoreRoute === "generate" || nonCoreRoute === "success" || nonCoreRoute === "verify"
      ? nonCoreRoute
      : "home";

  const parameter = sharedPage === "success" ? "session_id" : sharedPage === "verify" ? "v" : null;
  const value = parameter ? search.get(parameter) : null;
  const suffix = parameter && value ? `?${parameter}=${encodeURIComponent(value)}` : "";

  const destinationFor = (target: EuLocale) => {
    if (isCoreLocale(target)) {
      if (coreLocale && sharedPage === "home") return paths[target][corePage];
      return `${paths[target][sharedPage]}${suffix}`;
    }

    if (sharedPage === "home") return `/${target}/`;
    return `/${target}/${sharedPage}/${suffix}`;
  };

  const label =
    locale === "fr"
      ? "Langue du site"
      : locale === "de"
        ? "Sprache der Website"
        : locale === "en"
          ? "Site language"
          : "Language";

  return (
    <label className="relative inline-flex shrink-0 items-center">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => {
          const target = event.target.value;
          if (isEuLocale(target)) router.push(destinationFor(target));
        }}
        className="min-h-[42px] max-w-[150px] cursor-pointer rounded-xl border border-[#0B3A63]/15 bg-white px-3 py-2 pr-8 text-sm font-semibold text-[#0B3A63] shadow-sm outline-none transition hover:border-[#0B3A63]/30 focus:border-[#1FB6C1] focus:ring-2 focus:ring-[#1FB6C1]/20 sm:max-w-[180px]"
      >
        {EU_LOCALES.map((target) => (
          <option key={target} value={target} lang={target}>
            {EU_LOCALE_LABELS[target]}
          </option>
        ))}
      </select>
    </label>
  );
}
