import Link from "next/link";
import type { EuLocale } from "@/lib/eu-locales-core";

const copy: Record<EuLocale, readonly [string, string]> = {
  fr: ["Références méthodologiques", "principes"],
  en: ["Methodological references", "principles"],
  de: ["Methodische Referenzen", "Grundsätze"],
  es: ["Referencias metodológicas", "principios"],
  it: ["Riferimenti metodologici", "principi"],
  pl: ["Odniesienia metodologiczne", "zasady"],
  bg: ["Методологични референции", "принципи"],
  hr: ["Metodološke reference", "načela"],
  cs: ["Metodické reference", "principy"],
  da: ["Metodiske referencer", "principper"],
  nl: ["Methodologische referenties", "principes"],
  et: ["Metoodilised viited", "põhimõtted"],
  fi: ["Menetelmälliset viitteet", "periaatteet"],
  el: ["Μεθοδολογικές αναφορές", "αρχές"],
  hu: ["Módszertani hivatkozások", "elvek"],
  ga: ["Tagairtí modheolaíochta", "prionsabail"],
  lv: ["Metodoloģiskās atsauces", "principi"],
  lt: ["Metodologinės nuorodos", "principai"],
  mt: ["Referenzi metodoloġiċi", "prinċipji"],
  pt: ["Referências metodológicas", "princípios"],
  ro: ["Referințe metodologice", "principii"],
  sk: ["Metodické referencie", "princípy"],
  sl: ["Metodološke reference", "načela"],
  sv: ["Metodreferenser", "principer"],
};

export default function MethodologyBadge({ locale }: { locale: EuLocale }) {
  const [label, principles] = copy[locale];
  const href =
    locale === "fr"
      ? "/fr/product/methodology/"
      : locale === "de"
        ? "/de/methodik/"
        : "/en/product/methodology/";
  return (
    <Link
      href={href}
      data-methodology-badge={locale}
      className="inline-flex max-w-full flex-col gap-1 rounded-lg border border-[#0B3A63]/10 bg-[#F0FAFC] px-4 py-2 text-[#0B3A63] shadow-sm transition-colors hover:border-[#0B3A63]/30 hover:bg-[#E5F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3A63] focus-visible:ring-offset-2"
    >
      <span className="text-[11px] font-semibold leading-snug tracking-wide">
        {label}
      </span>
      <span className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-xs font-semibold leading-snug lg:justify-start">
        <span>VSME</span>
        <span aria-hidden="true">·</span>
        <span>GHG Protocol</span>
        <span aria-hidden="true">·</span>
        <span>{principles} ISO 14064-1</span>
      </span>
    </Link>
  );
}
