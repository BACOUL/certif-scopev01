"use client";

import Image from "next/image";
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

function DocumentMockup() {
  return (
    <div className="relative mx-auto aspect-[3/2] w-full max-w-[760px] overflow-hidden rounded-[28px] bg-white shadow-[0_28px_80px_rgba(11,58,99,0.10)]">
      <Image
        src="/de-home-hero-exact.svg"
        alt="Deutsches Certif-Scope Mockup mit Bescheinigung, Standardisiertes PDF und Geprüft-Hinweis"
        fill
        sizes="(max-width: 1024px) 100vw, 760px"
        className="object-cover"
        priority
      />
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
