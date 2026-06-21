import type { Metadata } from "next";

import AssessmentFormDE from "./AssessmentFormDE";

export const metadata: Metadata = {
  title: "CO₂e-Bescheinigung erstellen | Certif-Scope Deutschland",
  description:
    "Erstellen Sie eine indikative CO₂e-Bescheinigung für KMU auf Basis deklarierter Ausgaben, ohne vollständiges Treibhausgasinventar und ohne Speicherung detaillierter Finanzdaten.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/erstellen/",
    languages: {
      de: "https://www.certif-scope.com/de/erstellen/",
    },
  },
  openGraph: {
    title: "CO₂e-Bescheinigung erstellen | Certif-Scope Deutschland",
    description:
      "Ein einfacher Formularfluss für eine indikative, überprüfbare CO₂e-Bescheinigung für Lieferanten-, Bank-, Versicherungs- oder Ausschreibungsunterlagen.",
    url: "https://www.certif-scope.com/de/erstellen/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function CreateDEPage() {
  return (
    <section
      id="erstellen"
      data-section="generate"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Indikative CO₂e-Bescheinigung — Erstellung für KMU
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Indikative CO₂e-Bescheinigung für Ihr Unternehmen erstellen
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Füllen Sie ein einfaches Formular aus, um eine indikative
          CO₂e-Bescheinigung auf Basis deklarierter Ausgaben zu erstellen. Das
          Dokument ist für einfache Lieferanten-, Bank-, Versicherungs- oder
          Ausschreibungsanfragen gedacht, ohne ein vollständiges
          Treibhausgasinventar zu starten.
        </p>

        <div className="mt-6 grid gap-3 text-sm text-[#475569] md:grid-cols-3">
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">
              Ohne umfassende Erhebung
            </strong>
            <span>
              Indikatives Screening-Dokument, keine CSRD-/ESRS-Berichterstattung.
            </span>
          </div>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">Begrenzte Daten</strong>
            <span>
              Detaillierte Finanzdaten werden nicht dauerhaft gespeichert.
            </span>
          </div>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
            <strong className="block text-[#0B3A63]">Überprüfbares PDF</strong>
            <span>Standardisierte, datierte und kontrollierbare Bescheinigung.</span>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="max-w-4xl">
        <AssessmentFormDE />
      </div>
    </section>
  );
}
