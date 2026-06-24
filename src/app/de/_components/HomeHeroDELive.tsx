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
      <div className="text-[12px] font-extrabold tracking-tight text-[#0B3A63]">
        Certif-<span className="text-[#1FB6C1]">Scope</span>
      </div>
    </div>
  );
}

function MiniQr() {
  return (
    <div className="grid h-12 w-12 grid-cols-5 grid-rows-5 gap-0.5 rounded-md border border-[#d7e2ea] bg-white p-1">
      {Array.from({ length: 25 }).map((_, index) => {
        const active = [0, 1, 3, 4, 5, 8, 11, 12, 14, 16, 18, 20, 21, 23, 24].includes(index);
        return <span key={index} className={active ? "bg-[#0B3A63]" : "bg-transparent"} />;
      })}
    </div>
  );
}

function DocumentMockup() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[760px] overflow-hidden rounded-[28px] bg-white shadow-[0_28px_80px_rgba(11,58,99,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_55%,rgba(31,182,193,0.16),transparent_42%)]" />

      <div className="absolute left-4 top-[16%] z-20 rounded-lg border border-[#0B3A63]/50 bg-white/95 px-3 py-2 text-[10px] font-bold text-[#0B3A63] shadow-md md:left-8 md:text-sm">
        Daten → Berechnung → Bescheinigung
      </div>

      <div className="absolute bottom-[22%] left-5 z-20 rounded-lg border border-[#0B3A63]/50 bg-white/95 px-4 py-2 text-[11px] font-bold text-[#0B3A63] shadow-md md:left-10 md:text-sm">
        Standardisiertes PDF
      </div>

      <div className="absolute bottom-[26%] right-5 z-20 rounded-lg border border-[#0B3A63]/50 bg-white/95 px-4 py-2 text-[11px] font-bold text-[#0B3A63] shadow-md md:right-10 md:text-sm">
        <span className="mr-1">✓</span> Geprüft
        <div className="text-[9px] font-medium text-[#64748B] md:text-xs">ID eindeutig: CS-SAMPLE-DE</div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] rounded-xl border border-[#d8e2ea] bg-white p-5 shadow-[0_26px_45px_rgba(11,58,99,0.18)] md:w-[50%] md:p-7">
        <div className="mb-4 flex items-start justify-between gap-3 border-b-2 border-[#0B3A63] pb-4">
          <div>
            <LogoMark />
            <p className="mt-2 text-[7px] leading-tight text-[#64748B] md:text-[9px]">
              Automatisierte Ausstellung · Standardisierte indikative Bescheinigung
            </p>
          </div>
          <MiniQr />
        </div>

        <div className="text-center">
          <p className="text-[7px] font-extrabold uppercase tracking-[0.22em] text-[#1FB6C1] md:text-[9px]">
            Indikatives CO2e-Dokument
          </p>
          <h3 className="mt-1 text-[15px] font-extrabold leading-tight text-[#0B3A63] md:text-[22px]">
            CO2e-Bescheinigung
          </h3>
          <p className="text-[7px] text-[#64748B] md:text-[9px]">
            Standardisiert · datiert · dokumentarisch prüfbar
          </p>
        </div>

        <div className="mt-5 rounded-lg border-2 border-[#0B3A63] bg-white px-3 py-3 text-center">
          <p className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-[#64748B] md:text-[9px]">
            Aggregiertes Ergebnis
          </p>
          <p className="mt-1 font-serif text-2xl font-black text-[#0B3A63] md:text-4xl">
            15 tCO₂e
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-[#d8e2ea] p-2">
            <p className="text-[6px] font-extrabold uppercase text-[#94A3B8] md:text-[8px]">ID</p>
            <p className="text-[8px] font-bold text-[#0B3A63] md:text-[10px]">CS-SAMPLE-DE</p>
          </div>
          <div className="rounded-md border border-[#d8e2ea] p-2">
            <p className="text-[6px] font-extrabold uppercase text-[#94A3B8] md:text-[8px]">Status</p>
            <p className="text-[8px] font-bold text-[#0B3A63] md:text-[10px]">Indikativ</p>
          </div>
          <div className="rounded-md border border-[#d8e2ea] p-2">
            <p className="text-[6px] font-extrabold uppercase text-[#94A3B8] md:text-[8px]">Daten</p>
            <p className="text-[8px] font-bold text-[#0B3A63] md:text-[10px]">Aggregiert</p>
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
