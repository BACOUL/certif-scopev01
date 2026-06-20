"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

const primaryCta = {
  href: "/generate",
  label: "CO2e-Bescheinigung erstellen - 89 €",
};

const sampleCta = {
  href: "/api/sample",
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
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-[#0B3A63]/80 md:text-base"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UseCaseDecisionTableDE() {
  return (
    <section id="cas-adaptes" aria-labelledby="cas-adaptes-title" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/70 md:text-sm">
            Schnelle Einordnung
          </p>
          <h2 id="cas-adaptes-title" className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
            Passt das zu Ihrer Anfrage?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#0B3A63]/80 md:text-lg">
            Certif-Scope ist für einfache dokumentarische Anfragen gedacht. Wenn
            ein umfassendes Inventar, ein bestimmter Standard oder eine externe
            fachliche Prüfung verlangt wird, muss diese Anforderung eingehalten werden.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <DecisionList title="Geeignet" items={adaptedCases} />
          <DecisionList title="Nicht geeignet" items={notAdaptedCases} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryLink />
          <SampleLink />
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    title: "Reale Anfrage, unklare Nachweistiefe",
    text: "Ein Kunde, Einkäufer oder eine Ausschreibung fragt nach einer CO2-Bilanz oder einem CO2e-Beleg, ohne Format und Detailgrad eindeutig zu beschreiben.",
  },
  {
    title: "Klassische Lösungen sind oft zu aufwendig",
    text: "Umfangreiche Klimabilanz-Projekte sind für eine kurzfristige operative Anfrage häufig zu langsam, zu teuer und zu umfangreich.",
  },
  {
    title: "Die Antwort wird zeitnah erwartet",
    text: "Meist geht es darum, schnell ein klares Dokument zu senden und einen Vorgang, Lieferantenprozess oder eine Chance nicht aufzuhalten.",
  },
];

export function ProblemSolutionDE() {
  return (
    <section id="problem-solution" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_60%,#F8FAFC_100%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Anfrage verstehen"
          title="Warum eine CO2-Bilanz angefragt wird und warum die Antwort oft unklar bleibt"
          text="In der Praxis ist die Anfrage real, aber erwarteter Detailgrad, Format und passende Antwort sind für KMU häufig nicht eindeutig."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <div key={item.title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-semibold leading-snug text-[#0B3A63]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-7 text-center md:p-10">
          <h3 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
            Das Problem ist nicht immer das Fehlen einer Lösung.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Die Reibung entsteht oft zwischen einer unscharfen Anfrage und Lösungen,
            die für den konkreten Bedarf zu umfangreich sind.
          </p>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            {[
              ["Zeitverlust", "Suche nach zu komplexen oder unpassenden Optionen."],
              ["Vertriebsreibung", "Schwierigkeit, Kunden oder Einkauf klar zu antworten."],
              ["Vorgang verzögert", "Späte Antworten können Chancen oder Freigaben ausbremsen."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
                <p className="text-sm font-semibold text-[#0B3A63]">{title}</p>
                <p className="mt-2 text-sm text-[#64748B]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Was angefragt wird, was bremst und was meist erwartet wird
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
                Unklare Anfrage - aufwendige Suche - einfache Antwort erwartet
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
                In vielen Fällen geht es nicht um eine tiefgehende Analyse,
                sondern um eine nachvollziehbare Antwort auf eine konkrete Anfrage.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01 · Anfrage", "CO2e-Beleg wird verlangt", "Kunde, Einkauf, Vergabe, Lieferantenportal, Bank oder Versicherung."],
                ["02 · Reibung", "Klassische Wege wirken zu umfangreich", "Lange Projekte, hohe Kosten und mehr Komplexität als nötig."],
                ["Erwartete Antwort", "Ein klares, standardisiertes Dokument", "Lesbar, schnell weiterzugeben und unmittelbar einzuordnen."],
              ].map(([kicker, title, text]) => (
                <div key={title} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{kicker}</p>
                  <p className="mt-2 text-base font-semibold text-[#0B3A63]">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <div className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-2 text-center text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm">
                Dieser Dokumenttyp ist für einfache Kunden-, Lieferanten- oder Vergabeanfragen gedacht.
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-lg font-semibold leading-relaxed text-[#0B3A63] md:text-xl">
            In vielen Fällen wird ein klares, standardisiertes und schnell übermittelbares CO2e-Dokument erwartet.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-[#475569] md:text-lg">
            Certif-Scope erstellt eine{" "}
            <strong className="font-semibold text-[#0B3A63]">
              einfache, standardisierte und dokumentarisch kontrollierbare CO2e-Bescheinigung
            </strong>{" "}
            für solche Anfragen, ohne ein umfassendes THG-Inventar zu starten.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryLink>CO2e-Dokument erstellen</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

const valueCards = [
  ["Schnelle Antwort im passenden Umfang", "Liefern Sie zeitnah ein klares, lesbares und weitergabefähiges CO2e-Dokument."],
  ["Standardisiertes Format", "Ein Dokument, das Kunden, Einkauf oder Partner ohne lange Erklärung einordnen können."],
  ["Dokumentarische Kontrolle", "Jede Bescheinigung enthält eine Dokument-ID für eine einfache Zuordnung."],
  ["Ohne unnötige Komplexität", "Kein Abo und kein langes Projekt, sondern ein kurzer Ablauf für einen konkreten Bedarf."],
];

const comparisonRows = [
  ["Hauptziel", "Schnell auf eine externe Anfrage antworten", "Umfassende interne Analyse und Steuerung"],
  ["Aufwand", "Kurzer, standardisierter Ablauf", "Projekt mit Datenerhebung und fachlichem Zuschnitt"],
  ["Ergebnis", "Standardisierte CO2e-Bescheinigung", "Umfangreiche Klimabilanz"],
  ["Typische Nutzung", "Kunde, Lieferant, Bank, Versicherung, Vergabe", "Strategie, Reporting und internes Management"],
  ["Zeithorizont", "Schnelle dokumentarische Antwort", "Längeres Vorhaben"],
];

export function DifferentiationDE() {
  return (
    <section id="differentiation" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Abgrenzung"
          title="Eine einfache Alternative, wenn keine umfassende Klimabilanz verlangt wird"
          text="In vielen Anfragen geht es nicht um ein langes Projekt, sondern um ein klares, standardisiertes und schnell übermittelbares CO2e-Dokument."
        />

        <div className="mt-16 overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_22px_55px_rgba(11,58,99,0.08)]">
          <div className="grid border-b border-[#0B3A63]/8 bg-[#F8FAFC] md:grid-cols-[0.85fr_1.075fr_1.075fr]">
            <div className="hidden border-r border-[#0B3A63]/8 px-6 py-5 md:block" />
            <div className="border-r border-[#1FB6C1]/20 bg-[#1FB6C1]/5 px-6 py-5">
              <span className="mb-2 inline-block rounded-full bg-[#1FB6C1]/10 px-3 py-1 text-[10px] font-semibold text-[#1FB6C1]">
                Häufig passend bei einfachen Anfragen
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Certif-Scope</p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">Schnelle dokumentarische Antwort</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Umfassende Klimabilanz</p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">Vertiefte Betrachtung</p>
            </div>
          </div>
          <div className="divide-y divide-[#0B3A63]/8">
            {comparisonRows.map(([label, certif, full]) => (
              <div key={label} className="grid md:grid-cols-[0.85fr_1.075fr_1.075fr]">
                <div className="border-r border-[#0B3A63]/8 px-6 py-5">
                  <p className="text-sm font-semibold text-[#0B3A63]">{label}</p>
                </div>
                <div className="border-r border-[#1FB6C1]/15 bg-[#1FB6C1]/5 px-6 py-5">
                  <p className="text-sm text-[#475569]">{certif}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-[#475569]">{full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 text-center">
          <p className="text-sm font-semibold text-[#0B3A63]">Beispiel für das Ergebnis</p>
          <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
            CO2e-PDF mit Ergebnis, Methode, Grenzen und Dokument-ID
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map(([title, text]) => (
            <div key={title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0B3A63]">{title}</h3>
              <p className="mt-3 text-sm text-[#64748B]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[28px] border border-[#1FB6C1]/16 bg-[#1FB6C1]/5 p-7 text-center md:p-9">
          <h3 className="text-2xl font-extrabold text-[#0B3A63]">
            Dieses Dokument ist keine umfassende Klimabilanz
          </h3>
          <p className="mt-4 text-base text-[#475569]">
            Es handelt sich um eine indikative CO2e-Bescheinigung auf spend-based
            Grundlage. Sie ist kein vollständiges THG-Inventar und kein CSRD-/ESRS-Bericht.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#0B3A63]/80">
            Ein einfaches Dokument, wenn der reale Bedarf keine umfangreiche Projektarbeit verlangt.
          </p>
          <PrimaryLink>CO2e-Dokument erstellen</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

const featureItems = [
  ["01", "Lesbares CO2e-Ergebnis", "Ein aggregiertes Ergebnis, das Kunden, Einkauf, Bank oder Partner schnell einordnen können."],
  ["02", "Methode ausgewiesen", "Eine spend-based Einordnung mit kurzem Rahmen zu Umfang, Annahmen und indikativem Charakter."],
  ["03", "Referenzen genannt", "Emissionsfaktoren aus anerkannten Referenzrahmen für eine konsistente Schätzung."],
  ["04", "Dokumentarische Kontrolle", "Eine eindeutige Dokument-ID unterstützt die einfache Zuordnung des PDFs."],
];

const proofPills = ["Aggregiertes Ergebnis", "Methodik kurz erklärt", "Dokument-ID", "Standardformat"];

export function FeaturesDE() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="CO2e-Bescheinigung"
          title="Das ist das Dokument, das Sie weitergeben"
          text="Ein Dokument für Kundenanfragen, Ausschreibungen, Lieferantenportale oder einfache Finanzierungs- und Versicherungsprozesse."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="relative">
            <div className="relative mx-auto max-w-[720px]">
              <p className="mb-3 text-center text-xs uppercase tracking-[0.18em] text-[#64748B]">
                Dokumentvorschau
              </p>
              <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_28px_70px_rgba(11,58,99,0.14)]">
                <Image
                  src="/preview.webp"
                  alt="Beispiel einer Certif-Scope CO2e-Bescheinigung"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {proofPills.map((pill) => (
                  <span key={pill} className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {featureItems.map(([id, title, text]) => (
              <div key={id} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                    {id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B3A63]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">{text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[26px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Wichtige Klarstellung
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#475569] md:text-lg">
                Es handelt sich um eine{" "}
                <strong className="font-semibold text-[#0B3A63]">indikative Bescheinigung</strong>{" "}
                auf Basis deklarierter Ausgaben. Das Dokument ist kein umfassendes
                THG-Inventar und kein CSRD-/ESRS-Bericht.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Ein Dokument, das unmittelbar weitergegeben werden kann.
          </p>
          <a
            href="#references-officielles"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
          >
            Methodischen Rahmen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

const recipientItems = [
  "Name des Unternehmens",
  "Bezugsjahr",
  "Aggregiertes CO2e-Ergebnis",
  "Ausgewiesene Methode",
  "Sichtbare Grenzen",
  "Ausstellungsdatum",
  "Dokument-ID",
  "Hinweis: indikativ, nicht für Pflichtberichte gedacht",
];

export function RecipientViewDE() {
  return (
    <section id="pdf-destinataire" aria-labelledby="pdf-destinataire-title" className="bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/70 md:text-sm">
              Übermitteltes Dokument
            </p>
            <h2 id="pdf-destinataire-title" className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Was der Empfänger im PDF sieht
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0B3A63]/80 md:text-lg">
              Ziel ist ein lesbares, archivierbares und vorsichtig formuliertes
              Dokument mit ausgewiesener Methode und sichtbaren Grenzen.
            </p>
            <p className="mt-6 rounded-lg border border-[#0B3A63]/12 bg-white p-5 text-sm leading-relaxed text-[#0B3A63]/80 shadow-sm md:text-base">
              Das Dokument verspricht keine automatische Annahme durch Kunden,
              Banken, Versicherungen oder Einkaufsteams. Es liefert eine klare,
              standardisierte und dokumentarisch kontrollierbare CO2e-Antwort,
              wenn die Anfrage einfach dokumentarisch bleibt.
            </p>
            <div className="mt-7">
              <SampleLink>Beispiel-PDF ansehen</SampleLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recipientItems.map((item) => (
              <div key={item} className="rounded-lg border border-[#0B3A63]/12 bg-white p-5 shadow-sm">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#1FB6C1]" />
                <p className="text-base font-semibold leading-snug text-[#0B3A63]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const officialTexts = [
  ["Freiwilliger KMU-Standard", "EFRAG - Voluntary Sustainability Reporting Standard for non-listed SMEs", "Rahmen für proportionierte Nachhaltigkeitsinformationen nicht kapitalmarktorientierter KMU.", "https://www.efrag.org/en/smes-and-sustainability-reporting"],
  ["Europäische Kommission", "Voluntary sustainability reporting standard for SMEs", "Offizielle Kommunikation zum freiwilligen KMU-Standard und zur Entlastung bei Nachhaltigkeitsanfragen.", "https://finance.ec.europa.eu/publications/commission-presents-voluntary-sustainability-reporting-standard-ease-burden-smes_en"],
  ["CO2e-Methode", "GHG Protocol - Scope 3 Calculation Guidance", "Methodischer Rahmen für die Berechnung indirekter Emissionen.", "https://ghgprotocol.org/scope-3-calculation-guidance-2"],
  ["Spend-based Ansatz", "GHG Protocol - Category 1: Purchased Goods and Services", "Kapitel zu Methoden für eingekaufte Waren und Dienstleistungen, einschließlich spend-based Ansatz.", "https://ghgprotocol.org/sites/default/files/2022-12/Chapter1.pdf"],
  ["Europäischer Kontext", "Directive (EU) 2022/2464 - CSRD", "Europäischer Rahmen für Nachhaltigkeitsberichterstattung betroffener Unternehmen.", "https://eur-lex.europa.eu/eli/dir/2022/2464/oj"],
  ["Europäische Standards", "Delegated Regulation (EU) 2023/2772 - ESRS", "Delegierte Verordnung zu European Sustainability Reporting Standards.", "https://eur-lex.europa.eu/eli/reg_del/2023/2772/oj"],
  ["Deutscher Kontext", "Handelsgesetzbuch - Nachhaltigkeitsberichterstattung", "Deutscher Rechtsrahmen für betroffene Unternehmen; nicht gleichzusetzen mit einer einfachen CO2e-Bescheinigung.", "https://www.gesetze-im-internet.de/hgb/"],
];

const officialReferences = [
  ["KMU < 250 Mitarbeitende", "VSME - nicht kapitalmarktorientierte KMU", "Der VSME bietet einen freiwilligen Rahmen für proportionierte Nachhaltigkeitsinformationen, passend zu den Möglichkeiten vieler KMU.", "EFRAG - VSME", "https://www.efrag.org/en/smes-and-sustainability-reporting"],
  ["Kunden & Finanzpartner", "Europäische Kommission - Nachhaltigkeitsanfragen", "Die Kommission erkennt an, dass KMU Anfragen großer Unternehmen oder Finanzinstitute erhalten können, und unterstützt einen freiwilligen Standard zur Entlastung.", "European Commission - VSME", "https://finance.ec.europa.eu/publications/commission-presents-voluntary-sustainability-reporting-standard-ease-burden-smes_en"],
  ["CO2e-Methode", "GHG Protocol - spend-based Methode", "Die Scope-3-Guidance beschreibt spend-based Methoden als möglichen Ansatz für bestimmte indirekte Emissionen aus wirtschaftlichen Daten.", "GHG Protocol - Scope 3 Guidance", "https://ghgprotocol.org/scope-3-calculation-guidance-2"],
];

export function OfficialReferencesDE() {
  return (
    <section id="references-officielles" data-section="official-references" className="relative overflow-hidden bg-white py-20 md:py-28" aria-labelledby="official-references-title">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Offizieller Rahmen und Methode"
          title="Eine Methode für proportionierte KMU-Antworten"
          text="Certif-Scope orientiert sich an Referenzen, die zwei Realitäten anerkennen: KMU erhalten ESG- oder CO2e-Anfragen, und die Antwort sollte zum tatsächlichen Umfang der Anfrage passen."
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#64748B] md:text-base">
          Der freiwillige VSME-Ansatz von EFRAG und Europäischer Kommission zielt
          auf proportionierte Informationen. Für die CO2e-Einordnung nutzt
          Certif-Scope einen spend-based Ansatz, angelehnt an das GHG Protocol Scope 3.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryLink>CO2e-Dokument erstellen</PrimaryLink>
        </div>

        <div id="sources-officielles" className="mx-auto mt-14 max-w-5xl rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
          <div className="flex flex-col gap-4 border-b border-[#0B3A63]/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Genannte Texte und Standards
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
                Regulatorische und methodische Quellen
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#64748B]">
              Diese Links dienen als Kontext zu Methode, Umfang und Einordnung.
              Sie machen aus der Bescheinigung keinen Pflichtbericht.
            </p>
          </div>
          <div className="mt-6 divide-y divide-[#0B3A63]/8">
            {officialTexts.map(([category, title, description, href]) => (
              <div key={title} className="grid gap-4 py-5 md:grid-cols-[190px_1fr_auto] md:items-center">
                <span className="inline-flex w-fit rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                  {category}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug text-[#0B3A63] md:text-base">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{description}</p>
                </div>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/15 px-4 py-2 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1FB6C1]/50 hover:bg-[#F8FAFC] hover:text-[#1FB6C1]">
                  Quelle ansehen
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {officialReferences.map(([label, title, description, source, href]) => (
            <article key={title} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
              <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                {label}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-[#0B3A63]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">{description}</p>
              <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-[#0B3A63] underline decoration-[#1FB6C1]/50 underline-offset-4 transition-colors hover:text-[#1FB6C1]">
                {source}
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Was diese Referenzen einordnen
            </p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
              KMU-Anfrage - proportionierte Antwort - nutzbares Dokument
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Certif-Scope beantwortet einen konkreten Bedarf: eine erste CO2e-Information
              klar zu strukturieren, wenn eine einfache dokumentarische Anfrage vorliegt.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["01 · KMU betroffen", "Ein Unternehmen erhält eine Anfrage", "Auslöser ist häufig Kunde, Auftraggeber, Bank, Versicherung oder ein kommerzieller Vorgang."],
              ["02 · Passendes Format", "Nicht jede Anfrage verlangt eine umfassende Klimabilanz", "Europäische Referenzen betonen proportionierte Informationen für KMU."],
              ["Certif-Scope-Antwort", "Indikative CO2e-Bescheinigung", "Ein standardisiertes Dokument mit aggregierter spend-based Schätzung."],
            ].map(([kicker, title, text]) => (
              <div key={title} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{kicker}</p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#0B3A63]/10 bg-white p-5 text-center">
          <p className="text-sm leading-relaxed text-[#64748B]">
            Umfang: Certif-Scope stellt eine indikative CO2e-Bescheinigung bereit.
            Das Dokument ist kein CSRD-/ESRS-Bericht, keine umfassende Klimabilanz
            und keine behördliche Anerkennung.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <PrimaryLink>CO2e-Dokument erstellen</PrimaryLink>
          <a href="#sources-officielles" className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-8 py-4 text-base font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white">
            Quellen erneut ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Eingabe", "Sie erfassen Ihre Daten", "Geben Sie Jahresausgaben, Bezugsjahr und einige Basisinformationen ein, um die Berechnung zu starten.", "Deklarierte Daten • kurzer Ablauf • einfache Eingabe"],
  ["02", "Berechnung", "Der Motor wendet eine standardisierte Methode an", "Der Ablauf nutzt eine indikative spend-based Logik auf Basis referenzierter Faktoren, um ein lesbares CO2e-Ergebnis zu erzeugen.", "Indikative Methode • Standardisierung • aggregiertes Ergebnis"],
  ["03", "Ausgabe", "Sie erhalten ein Dokument zum Weitergeben", "Laden Sie ein standardisiertes PDF mit Dokument-ID herunter, passend für Kunden-, Lieferanten- oder Finanzpartneranfragen.", "PDF • Dokument-ID • dokumentarische Kontrolle"],
];

export function HowItWorksDE() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Ablauf"
          title="So erhalten Sie schnell ein CO2e-Dokument für Ihr KMU"
          text="Daten erfassen, indikative spend-based Berechnung erhalten und ein standardisiertes Dokument zum Weitergeben erzeugen."
        />
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          <div className="space-y-5">
            {steps.map(([id, eyebrow, title, text, meta]) => (
              <div key={id} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                    {id}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">{eyebrow}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[#0B3A63]">{title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {meta.split(" • ").map((item) => (
                    <span key={item} className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1 text-xs text-[#0B3A63]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Vereinfachter Ablauf
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63] md:text-2xl">
                Daten - Berechnung - Dokument
              </h3>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01 · Daten", "Jahresausgaben und Basisinformationen"],
                ["02 · Berechnung", "Indikative spend-based Methode"],
                ["03 · Dokument", "PDF-Bescheinigung erstellt"],
              ].map(([kicker, text]) => (
                <div key={kicker} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{kicker}</p>
                  <p className="mt-2 text-sm font-semibold text-[#0B3A63]">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {["Schnelle Antwort", "Kein langes Projekt", "Klare Grenzen"].map((item) => (
                <div key={item} className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-3 text-center text-xs text-[#0B3A63]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-[#1FB6C1]/20 bg-[#1FB6C1]/5 p-4 text-center">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Ein kurzer Ablauf für ein schnell übermittelbares Dokument.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#0B3A63]/80">
            Kein Abo. Kein langes Projekt. Keine unnötige Komplexität.
          </p>
          <PrimaryLink>CO2e-Dokument erstellen</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  ["01", "Auf eine Lieferantenanfrage antworten", "Ein Kunde oder Lieferantenportal fragt einen CO2e-Beleg an. Ziel ist, zeitnah ein klares Dokument zu senden.", "Lieferantenfall ansehen", "/de/why-companies-ask"],
  ["02", "Auf eine Ausschreibung reagieren", "Die Unterlagen nennen einen CO2e-Punkt, ohne eine vertiefte Methode festzulegen. Ein standardisiertes Dokument kann passend sein.", "Ausschreibungsfall ansehen", "/de/why-companies-ask"],
  ["03", "Schnell lesbar und zuordenbar machen", "Häufig braucht der Empfänger ein PDF mit Ergebnis, Methode, Grenzen und Dokument-ID.", "Beispiel ansehen", "/api/sample"],
];

export function TestimonialsDE() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Anwendungsfälle"
          title="Wann dieses Dokument konkret hilft"
          text="Typische Situationen, in denen nicht ein umfangreiches Klimaprojekt gestartet werden soll, sondern schnell ein klares CO2e-Dokument gebraucht wird."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_24px_60px_rgba(11,58,99,0.10)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Konkrete Projektion
            </p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
              Externe Anfrage - Reibung - Antwort zum Weitergeben
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Meist geht es nicht darum, eine große Studie zu erstellen, sondern
              das passende Dokument im passenden Umfang zu liefern.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01 · Situation", "CO2e-Anfrage kommt", "Kunde, Bank, Versicherung, Lieferantenportal oder Ausschreibung."],
                ["02 · Reibung", "Klassische Antworten sind zu aufwendig", "Zu viel Aufwand für eine einfache dokumentarische Anfrage."],
                ["03 · Antwort", "Standardisiertes Dokument", "Aggregiertes Ergebnis, Methode, Grenzen und Dokument-ID."],
              ].map(([kicker, title, text]) => (
                <div key={title} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{kicker}</p>
                  <p className="mt-2 text-base font-semibold text-[#0B3A63]">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Schnelle Antwort", "Lesbares Format", "Dokument-ID"].map((item) => (
                <span key={item} className="rounded-full border border-[#0B3A63]/12 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] md:text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {useCases.map(([id, title, text, ctaLabel, ctaHref]) => (
              <div key={id} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                    {id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-[#0B3A63] md:text-[1.06rem]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">{text}</p>
                    <Link href={ctaHref} className="mt-5 inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white">
                      {ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingDE() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Preis"
          title="Ein einfacher Preis für ein unmittelbar nutzbares Dokument"
          text="In vielen Fällen geht es darum, schnell ein klares CO2e-Dokument zu liefern, ohne ein langes Projekt zu starten."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_60px_rgba(11,58,99,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Hauptangebot</p>
            <h3 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">CO2e-Bescheinigung</h3>
            <div className="mt-6 flex items-end justify-center">
              <span className="text-5xl font-extrabold text-[#0B3A63]">89€</span>
              <span className="mb-1 ml-2 text-sm text-[#64748B]">/ Dokument</span>
            </div>
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Aggregiertes CO2e-Ergebnis",
                "Jahr und Ausstellungsdatum",
                "Methode und Grenzen sichtbar",
                "Standardisiertes PDF",
                "Eindeutige Dokument-ID",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <PrimaryLink>Dokument erstellen</PrimaryLink>
              <Link href="/de/pricing" className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:bg-[#0B3A63] hover:text-white">
                Details ansehen
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">Anwendungsfall</p>
            <h3 className="mt-3 text-xl font-extrabold text-[#0B3A63]">
              Lieferantendossier / Ausschreibung
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Ein lesbares, standardisiertes CO2e-Dokument für Kunden-, Lieferanten-
              oder Vergabekontexte, wenn keine vertiefte fachliche Prüfung verlangt wird.
            </p>
            <div className="mt-6 space-y-3">
              {[
                ["CO2e-Anfragen verstehen", "/de/why-companies-ask"],
                ["Beispiel-PDF ansehen", "/api/sample"],
                ["Dokument erstellen", "/generate"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="block rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm text-[#0B3A63] transition hover:bg-[#0B3A63] hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Wichtig</p>
            <h3 className="mt-3 text-xl font-extrabold">Was es nicht ist</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Kein umfassendes THG-Inventar</li>
              <li>• Kein detailliertes Scope-1-/2-/3-Projekt</li>
              <li>• Kein CSRD-/ESRS-Bericht</li>
              <li>• Keine Aussage über automatische Akzeptanz</li>
            </ul>
            <div className="mt-6">
              <a href="#cas-adaptes" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-4 py-2 text-sm transition hover:bg-white/10">
                Umfang einordnen
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-[#64748B] md:text-base">
            Wenn eine umfassende Klimabilanz, ein bestimmter Standard oder eine externe fachliche
            Prüfung verlangt wird, ist ein anderer Ansatz erforderlich. Certif-Scope ist für
            schnelle dokumentarische Anfragen gedacht.
          </p>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  ["Ist eine CO2-Bilanz für KMU verpflichtend?", "In vielen Fällen nein. Viele KMU erhalten CO2e-Anfragen aus Kunden-, Lieferanten-, Bank- oder Versicherungskontexten, ohne dass daraus automatisch eine allgemeine Pflicht entsteht."],
  ["Warum fragen Kunden oder Einkaufsteams CO2e-Informationen an?", "Größere Unternehmen integrieren ESG- und Klimainformationen zunehmend in Einkaufs- und Lieferantenprozesse. Oft dient ein CO2e-Indikator einer ersten Einordnung."],
  ["Kann ich schnell ein CO2e-Dokument für eine Ausschreibung oder Lieferantenanfrage erhalten?", "Ja, wenn die Anfrage eine einfache dokumentarische Antwort erlaubt. Certif-Scope erstellt ein standardisiertes PDF auf Basis eingegebener Daten."],
  ["Worin unterscheidet sich Certif-Scope von einer umfassenden Klimabilanz?", "Certif-Scope liefert eine indikative CO2e-Schätzung auf spend-based Grundlage. Es ersetzt kein umfassendes THG-Inventar und keinen CSRD-/ESRS-Bericht."],
  ["Brauche ich Energieabrechnungen, Kilometer oder technische Aktivitätsdaten?", "Nein. Der Ansatz ist spend-based. Es werden Ausgabenkategorien genutzt, keine technischen Detaildaten wie kWh, Liter Kraftstoff oder gefahrene Kilometer."],
  ["Wie läuft die Erstellung ab?", "Sie erfassen Ausgaben und Basisinformationen. Danach wird eine indikative CO2e-Schätzung erzeugt und als standardisiertes PDF ausgegeben."],
  ["Wie lange dauert die Erstellung?", "Der Ablauf ist kurz und hängt von den eingegebenen Informationen ab. Es ist kein langes Beratungsprojekt vorgesehen."],
  ["Was enthält das PDF?", "Das PDF enthält ein aggregiertes CO2e-Ergebnis, Metadaten, methodische Hinweise, sichtbare Grenzen und eine Dokument-ID."],
  ["Kann das Dokument für Banken oder Versicherungen genutzt werden?", "Es kann genutzt werden, wenn ein einfacher CO2e-Indikator im Rahmen einer Vorprüfung oder ESG-Abfrage genügt. Die Entscheidung über Akzeptanz liegt beim Empfänger."],
  ["Akzeptieren Kunden oder Einkaufsteams dieses Format?", "Das hängt von der konkreten Anfrage ab. Certif-Scope ist als indikatives, strukturiertes Dokument für einfache Anfragen positioniert."],
  ["Welche Methodik wird genutzt?", "Certif-Scope nutzt eine spend-based Logik: Ausgaben werden mit Emissionsfaktoren verknüpft, um eine aggregierte CO2e-Schätzung zu erzeugen."],
  ["Wie funktioniert die Kontrolle des Dokuments?", "Das Dokument enthält eine Dokument-ID und Angaben zur Zuordnung. Diese Kontrolle betrifft das Dokument, nicht eine externe Validierung des CO2e-Ergebnisses."],
  ["Werden detaillierte Finanzdaten dauerhaft gespeichert?", "Der Dienst ist datensparsam konzipiert. Detaillierte Eingaben werden nicht als dauerhafte Finanzhistorie aufgebaut."],
  ["Welche Grenzen hat die Bescheinigung?", "Sie ist indikativ, spend-based und vom Nutzerinput abhängig. Sie deckt kein umfassendes Scope-Inventar ab und ersetzt keine formelle Berichterstattung."],
];

export function FAQDE() {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" data-section="faq" className="relative w-full bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC]" />
      <div className="mx-auto max-w-4xl px-6">
        <p className="mx-auto mb-5 inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm md:text-xs">
          FAQ • CO2-Bilanz KMU • Ausschreibungen • Banken
        </p>
        <h2 className="mb-5 text-center text-3xl font-extrabold tracking-tight text-[#0B3A63] md:text-4xl">
          Häufige Fragen zur CO2-Bilanz für KMU
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-[#475569]">
          Diese FAQ ordnet typische Fragen zu CO2e-Anfragen, KMU, Ausschreibungen,
          Bankunterlagen und dem Unterschied zwischen einfacher Schätzung und
          umfassender Klimabilanz ein.
        </p>
        <div className="space-y-4" role="list">
          {faqItems.map(([q, a], i) => {
            const btnId = `faq-de-${uid}-btn-${i}`;
            const panelId = `faq-de-${uid}-panel-${i}`;
            return (
              <div key={q} role="listitem" className="overflow-hidden rounded-[20px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <button
                  id={btnId}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1FB6C1] focus-visible:outline-offset-2"
                >
                  <span className="font-semibold leading-relaxed text-[#0B3A63]">{q}</span>
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-xl font-semibold text-[#1FB6C1]">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i ? (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="px-6 pb-6 text-sm leading-relaxed text-[#475569] md:text-[15px]">
                    <p>{a}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/de/why-companies-ask" className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:border-[#1FB6C1]/30 hover:text-[#1FB6C1]">
            Hintergrund zu CO2e-Anfragen lesen
          </Link>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm md:p-6">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Indikative Schätzung auf Basis deklarierter Ausgaben. Kein CSRD-/ESRS-Bericht,
            keine umfassende Scope-Abdeckung und kein Ersatz für ein vollständiges THG-Inventar.
            Die Aussagekraft hängt von den Angaben des Nutzers ab.
          </p>
        </div>
      </div>
    </section>
  );
}
