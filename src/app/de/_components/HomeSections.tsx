"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

const primaryCta = {
  href: "/de/erstellen",
  label: "CO2e-Bescheinigung erstellen - 89 €",
};

const sampleCta = {
  href: "/api/sample?locale=de",
  label: "Kostenloses Beispiel laden",
};

const proofItems = [
  "Festpreis 89 €",
  "Kein Abo",
  "Standardisiertes PDF",
  "Dokument-ID",
  "Nicht CSRD/ESRS",
];

function PrimaryLink({ children = primaryCta.label }: { children?: string }) {
  return (
    <Link
      href={primaryCta.href}
      className="inline-flex min-h-[56px] items-center justify-center rounded-lg bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}

function SampleLink({ children = sampleCta.label }: { children?: string }) {
  return (
    <a
      href={sampleCta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[56px] items-center justify-center rounded-lg border border-[#0B3A63]/20 bg-white px-8 py-4 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
        {text}
      </p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[780px]">
      <Image
        itemProp="primaryImageOfPage"
        src="/hero-attestation.webp"
        alt="Beispiel einer indikativen CO2e-Bescheinigung mit aggregiertem Ergebnis, Methode und Dokument-ID."
        width={1600}
        height={1200}
        priority
        className="h-auto w-full"
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
              Wird eine CO2-Bilanz angefragt?
              <br />
              Erstellen Sie eine indikative CO2e-Bescheinigung zum Weitergeben.
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
              <HeroVisual />
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
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

const adaptedCases = [
  "Kunde fragt eine einfache CO2e-Information an",
  "Lieferantenportal verlangt einen CO2e-Beleg",
  "Bank bittet um ESG- oder Klimainformation",
  "Versicherung fragt Umweltinformationen ab",
  "Ausschreibung nennt kein festes Verfahren",
];

const notAdaptedCases = [
  "Umfassendes THG-Inventar erforderlich",
  "Bestimmte Norm oder Methode verbindlich vorgegeben",
  "Detaillierte Scope-1-, Scope-2- und Scope-3-Erfassung verlangt",
  "Externe fachliche Prüfung verpflichtend",
  "CSRD-/ESRS-Berichterstattung gefordert",
];

function DecisionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-[#0B3A63]/12 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-xl font-extrabold text-[#0B3A63]">{title}</h3>
      <ul className="mt-4 space-y-3 text-left text-sm leading-relaxed text-[#475569] md:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1FB6C1]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
