import type { Metadata } from "next";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";
import Section11 from "./sections/Section11";
import Section12 from "./sections/Section12";

export const metadata: Metadata = {
  title: "Spend-based Methodik CO₂e KMU | Certif-Scope",
  description:
    "Verstehen Sie die Certif-Scope Methodik: indikative CO₂e-Schätzung auf Ausgabenbasis, Emissionsfaktoren, Grenzen, Datenschutz, Versionierung und nicht-auditierter Rahmen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/methodik/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/methodology/",
      de: "https://www.certif-scope.com/de/product/methodik/",
    },
  },
  openGraph: {
    title: "Spend-based Methodik CO₂e KMU | Certif-Scope",
    description:
      "Spend-based Methode, Emissionsfaktoren, indikative Berechnung, Grenzen und Datenschutz der Certif-Scope CO₂e-Bescheinigung.",
    url: "https://www.certif-scope.com/de/product/methodik/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function MethodologyPageDE() {
  return (
    <section id="methodology" data-section="methodology" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <div id="top" />
      <header className="mb-14">
        <p data-i18n="methodology.label" className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Methodik</p>
        <h1 data-i18n="methodology.h1" className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Spend-based Methodik der CO₂e-Bescheinigung</h1>
        <p data-i18n="methodology.subtitle" className="text-lg text-gray-700 leading-relaxed max-w-3xl">Diese Seite erklärt, wie Certif-Scope ein indikatives CO₂e-Ergebnis aus deklarierten Ausgaben schätzt: spend-based Modell, Emissionsfaktoren, Berechnungslogik, Update-Regeln, Datenschutz und Nutzungsgrenzen.</p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>
      <nav aria-label="Methodik-Abschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li><a href="#methodology-scope-objective" className="hover:text-[#1FB6C1] transition">Umfang und Ziel der Methodik</a></li>
          <li><a href="#theoretical-foundations" className="hover:text-[#1FB6C1] transition">Theoretische Grundlagen</a></li>
          <li><a href="#mathematical-model" className="hover:text-[#1FB6C1] transition">Mathematisches Modell</a></li>
          <li><a href="#categories-boundaries" className="hover:text-[#1FB6C1] transition">Kategorien und Grenzen</a></li>
          <li><a href="#input-normalization" className="hover:text-[#1FB6C1] transition">Normalisierung der Eingaben</a></li>
          <li><a href="#transformation-chain" className="hover:text-[#1FB6C1] transition">Transformationskette</a></li>
          <li><a href="#emission-factor-assignment" className="hover:text-[#1FB6C1] transition">Zuweisung der Emissionsfaktoren</a></li>
          <li><a href="#calculation-flow-formulas" className="hover:text-[#1FB6C1] transition">Berechnungsfluss und Formeln</a></li>
          <li><a href="#internal-controls-safeguards" className="hover:text-[#1FB6C1] transition">Interne Kontrollen</a></li>
          <li><a href="#factor-versioning" className="hover:text-[#1FB6C1] transition">Versionierung der Faktoren</a></li>
          <li><a href="#dataset-update-cycle" className="hover:text-[#1FB6C1] transition">Update-Zyklus der Datensätze</a></li>
          <li><a href="#data-privacy-gdpr" className="hover:text-[#1FB6C1] transition">Daten, Datenschutz und DSGVO</a></li>
        </ol>
      </nav>
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
    </section>
  );
}
