"use client";

import Link from "next/link";

const proofItems = [
  "Festpreis 89 €",
  "Kein Abo",
  "Standardisiertes PDF",
  "Dokument-ID",
  "Nicht CSRD/ESRS",
];

function PrimaryLink() {
  return (
    <Link
      href="/de/erstellen"
      className="inline-flex min-h-[56px] items-center justify-center rounded-lg bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
    >
      CO2e-Bescheinigung erstellen - 89 €
    </Link>
  );
}

function SampleLink() {
  return (
    <a
      href="/api/sample?lang=de"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[56px] items-center justify-center rounded-lg border border-[#0B3A63]/20 bg-white px-8 py-4 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
    >
      Kostenloses Beispiel laden
    </a>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-7 w-7 rounded-full border-[4px] border-[#0B3A63]">
        <span className="absolute -bottom-1 -left-1 h-4 w-6 rounded-b-full border-b-[4px] border-l-[4px] border-[#1FB6C1]" />
        <span className="absolute left-[7px] top-[7px] h-2.5 w-4 rotate-[-45deg] border-b-[3px] border-l-[3px] border-[#0B3A63]" />
      </div>
      <div className="text-[15px] font-extrabold tracking-tight text-[#0B3A63] md:text-[18px]">
        Certif-<span className="text-[#1FB6C1]">Scope</span>
      </div>
    </div>
  );
}

function MiniQr() {
  return (
    <div className="grid h-14 w-14 grid-cols-7 grid-rows-7 gap-0.5 bg-white p-1 shadow-sm md:h-16 md:w-16">
      {Array.from({ length: 49 }).map((_, index) => {
        const active = [0, 1, 2, 4, 5, 6, 7, 13, 14, 16, 18, 20, 21, 27, 28, 29, 31, 34, 35, 37, 38, 40, 42, 43, 44, 46, 47, 48].includes(index);
        return <span key={index} className={active ? "bg-[#0B3A63]" : "bg-transparent"} />;
      })}
    </div>
  );
}

function HeroChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute z-30 rounded-[14px] border-2 border-[#0B3A63] bg-white/92 px-4 py-3 text-[#334155] shadow-[0_10px_24px_rgba(11,58,99,0.16)] backdrop-blur-sm md:rounded-[18px] md:px-6 md:py-4 ${className}`}
    >
      {children}
    </div>
  );
}

function DocumentMockup() {
  return (
    <div
      aria-label="Mockup einer deutschen Certif-Scope CO2e-Bescheinigung"
      className="relative mx-auto aspect-[3/2] w-full max-w-[760px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_58%_52%,rgba(31,182,193,0.18),transparent_38%),linear-gradient(135deg,#ffffff_0%,#F8FAFC_46%,#EAF7F8_100%)] shadow-[0_28px_80px_rgba(11,58,99,0.10)]"
    >
      <HeroChip className="left-[4%] top-[7%] text-[13px] font-semibold md:text-2xl lg:text-[28px]">
        Daten → Berechnung → Bescheinigung
      </HeroChip>

      <HeroChip className="bottom-[12%] left-[5%] text-[14px] font-semibold md:text-2xl lg:text-[30px]">
        Standardisiertes PDF
      </HeroChip>

      <HeroChip className="bottom-[10%] right-[4%] max-w-[42%] text-[12px] font-semibold md:text-xl lg:text-2xl">
        <div className="flex items-start gap-3">
          <span className="text-3xl leading-none text-[#0B3A63] md:text-5xl">✓</span>
          <div>
            <div className="font-extrabold text-[#334155]">Geprüft</div>
            <div className="mt-1 text-[10px] font-medium text-[#64748B] md:text-base lg:text-lg">
              Eindeutige ID : CS-2024-01829
            </div>
          </div>
        </div>
      </HeroChip>

      <div className="absolute left-[40%] top-[13%] z-10 w-[38%] origin-center rotate-[13deg] rounded-[2px] border border-[#d8e2ea] bg-white/95 p-4 shadow-[0_28px_45px_rgba(11,58,99,0.18)] md:p-6">
        <div className="flex items-start justify-between gap-3">
          <LogoMark />
          <MiniQr />
        </div>

        <div className="mt-7 text-center">
          <h3 className="text-[15px] font-semibold leading-tight text-[#0B3A63] md:text-2xl">
            Indikative CO2e-Bescheinigung
          </h3>
          <p className="mx-auto mt-2 max-w-[90%] border-y border-[#0B3A63]/30 py-2 text-[6px] uppercase tracking-[0.08em] text-[#334155] md:text-[9px]">
            Standardisiertes indikatives Dokument für Kunden-, Lieferanten- und Finanzierungsanfragen
          </p>
        </div>

        <div className="mt-4 border-2 border-[#0B3A63] px-3 py-3 text-center">
          <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#64748B] md:text-[10px]">
            Aggregiertes Ergebnis
          </p>
          <p className="mt-1 font-serif text-2xl font-black text-[#0B3A63] md:text-4xl">
            15 tCO₂e
          </p>
          <p className="text-[7px] text-[#64748B] md:text-[10px]">
            indikativ · spend-based
          </p>
        </div>

        <div className="mt-4 grid gap-2 text-[6px] text-[#334155] md:text-[9px]">
          {[
            "1. Identifikation der Einheit",
            "2. Angewandte Methodik",
            "3. Ergebnis und Referenzen",
            "4. Methodische Grenzen",
          ].map((item) => (
            <div key={item} className="border-b border-[#d8e2ea] pb-1 font-semibold">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-center text-[6px] text-[#64748B] md:text-[9px]">
          <div>
            <div className="mx-auto h-8 w-16 rounded-full border-b border-[#0B3A63]" />
            <p className="mt-1 font-semibold">Certif-Scope</p>
          </div>
          <div>
            <div className="mx-auto h-8 w-16 rounded-full border-b border-[#0B3A63]" />
            <p className="mt-1 font-semibold">Dokument-ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroDE() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative overflow-hidden bg-[#F8FAFC]"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        Indikative CO2e-Bescheinigung für einfache dokumentarische Anfragen.
      </span>

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <p
              itemProp="about"
              className="inline-flex items-center gap-3 rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63] shadow-sm md:text-xs"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
              Anfrage von Kunde, Lieferant, Bank, Versicherung oder Vergabe
            </p>

            <h1
              itemProp="headline"
              className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl lg:mx-0 lg:text-6xl"
            >
              CO2-Bilanz für KMU angefragt?
              <br />
              Erstellen Sie eine indikative CO2e-Bescheinigung.
            </h1>

            <p
              itemProp="description"
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#0B3A63]/80 md:text-lg lg:mx-0"
            >
              Ein standardisiertes, datiertes und dokumentarisch kontrollierbares
              PDF für einfache Anfragen aus Einkauf, Lieferantenmanagement,
              Finanzierung, Versicherung oder Ausschreibung - ohne ein umfassendes
              THG-Inventar zu starten.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <PrimaryLink />
              <SampleLink />
            </div>

            <div className="mt-8 lg:hidden">
              <DocumentMockup />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-semibold text-[#0B3A63] shadow-sm md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block lg:pl-4">
            <DocumentMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
