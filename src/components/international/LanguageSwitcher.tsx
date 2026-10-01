"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  localeNames,
  paths,
  SITE_LOCALES,
  type PageKey,
  type SiteLocale,
} from "@/lib/site-locales";
export default function LanguageSwitcher({ locale }: { locale: SiteLocale }) {
  const pathname = usePathname().replace(/\/$/, "") + "/";
  const search = useSearchParams();
  const page =
    (Object.keys(paths[locale]) as PageKey[]).find(
      (k) => paths[locale][k] === pathname,
    ) || "home";
  const parameter =
    page === "success" ? "session_id" : page === "verify" ? "v" : null;
  const value = parameter ? search.get(parameter) : null;
  const suffix =
    parameter && value ? `?${parameter}=${encodeURIComponent(value)}` : "";
  return (
    <nav
      aria-label={
        {
          fr: "Langue du site",
          en: "Site language",
          de: "Sprache der Website",
        }[locale]
      }
      className="flex shrink-0 flex-wrap items-center gap-1 text-xs font-semibold"
    >
      {SITE_LOCALES.map((l) => (
        <Link
          key={l}
          href={`${paths[l][page]}${suffix}`}
          hrefLang={l}
          lang={l}
          aria-label={localeNames[l]}
          aria-current={l === locale ? "page" : undefined}
          className={`rounded-md px-2 py-2 ${l === locale ? "bg-[#0B3A63] text-white" : "text-[#0B3A63] hover:bg-[#F8FAFC]"}`}
        >
          <span className="sm:hidden">{l.toUpperCase()}</span>
          <span className="hidden sm:inline">{localeNames[l]}</span>
        </Link>
      ))}
    </nav>
  );
}
