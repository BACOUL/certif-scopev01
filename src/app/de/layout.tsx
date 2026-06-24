import Link from "next/link";

import "../../styles/index.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  ["Startseite", "/de/"],
  ["CO2-Bilanz KMU", "/de/co2-bilanz-kmu/"],
  ["Produkt", "/de/produkt/"],
  ["Methodik", "/de/methodik/"],
  ["Prüfen", "/de/pruefen/"],
  ["Preise", "/de/preise/"],
] as const;

const footerProductLinks = [
  ["Überblick", "/de/produkt/"],
  ["Methodik", "/de/methodik/"],
  ["Grenzen & Compliance", "/de/grenzen-und-compliance/"],
  ["Nachweis prüfen", "/de/pruefen/"],
  ["Preise", "/de/preise/"],
] as const;

const footerUseCaseLinks = [
  ["Warum Unternehmen CO2-Angaben anfordern", "/de/warum-unternehmen-co2-angaben-anfordern/"],
  ["CO2-Nachweis Lieferanten", "/de/co2-nachweis-lieferanten/"],
  ["CO2-Angaben Ausschreibung", "/de/co2-angaben-ausschreibung/"],
  ["Bank- und ESG-Unterlagen", "/de/bank-esg-unterlagen-kmu/"],
] as const;

const footerLegalLinks = [
  ["Kontakt", "/de/kontakt/"],
  ["Impressum", "/de/impressum/"],
  ["Datenschutz", "/de/datenschutz/"],
  ["AGB", "/de/agb/"],
  ["Cookies", "/de/cookies/"],
  ["Datenverarbeitung", "/de/datenverarbeitung/"],
] as const;

function HeaderDE() {
  return (
    <header className="sticky top-0 z-[1000] border-b border-[#0B3A63]/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
        <Link href="/de/" aria-label="Certif-Scope Deutschland" className="text-lg font-extrabold text-[#0B3A63]">
          Certif-Scope
        </Link>

        <nav aria-label="Hauptnavigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="font-medium text-[#475569] transition-colors hover:text-[#0B3A63]">
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/de/erstellen/" className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,182,193,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#19AAB4]">
          Erstellen
        </Link>
      </div>
    </header>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <nav aria-label={title} className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="text-sm leading-relaxed text-[#64748B] transition-colors hover:text-[#0B3A63]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterDE() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#0B3A63]/10 bg-[#F8FAFC] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr]">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-7 shadow-[0_18px_40px_rgba(11,58,99,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Certif-Scope Deutschland</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63]">
              Indikative CO2e-Bescheinigung
              <br />
              zum Weitergeben
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Ein spend-based CO2e-Dokument für einfache Kunden-, Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsanfragen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/de/erstellen/" className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#19AAB4]">
                Erstellen
              </Link>
              <Link href="/de/preise/" className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white">
                Preise
              </Link>
              <Link href="/de/pruefen/" className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white">
                Prüfen
              </Link>
            </div>
          </div>

          <FooterColumn title="Produkt" links={footerProductLinks} />
          <FooterColumn title="Praxisfälle" links={footerUseCaseLinks} />
          <FooterColumn title="Unternehmen & Rechtliches" links={footerLegalLinks} />
        </div>

        <div className="mt-10 rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Indikative CO2e-Schätzung auf spend-based Grundlage. Kein CSRD-/ESRS-Bericht, keine Zertifizierung, kein Audit und kein vollständiges THG-Inventar.
          </p>
        </div>

        <p className="mt-8 border-t border-[#0B3A63]/10 pt-8 text-center text-sm text-[#64748B]">
          © {year} Certif-Scope. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

export default function DELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="de" className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <HeaderDE />
      <main>{children}</main>
      <FooterDE />
    </div>
  );
}
