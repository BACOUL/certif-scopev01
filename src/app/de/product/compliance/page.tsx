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

export const metadata: Metadata = {
  title: "Compliance und Grenzen der CO₂e-Bescheinigung | Certif-Scope",
  description:
    "Rechtlicher Rahmen der Certif-Scope CO₂e-Bescheinigung: indikatives Dokument, kein Audit, kein vollständiges THG-Inventar, kein CSRD-/ESRS-Reporting, Verantwortlichkeiten und Nutzungsgrenzen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/product/compliance/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/compliance/",
      de: "https://www.certif-scope.com/de/product/compliance/",
    },
  },
  openGraph: {
    title: "Compliance und Grenzen der CO₂e-Bescheinigung | Certif-Scope",
    description:
      "Rechtliche Grenzen, Verantwortlichkeiten, zulässige Nutzungen und regulatorische Nicht-Gleichwertigkeit der indikativen CO₂e-Bescheinigung Certif-Scope.",
    url: "https://www.certif-scope.com/de/product/compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function CompliancePageDE() {
  return (
    <section id="compliance" data-section="compliance" className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <div id="top" />
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">CO₂e-Bescheinigung — Compliance</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">Compliance-Rahmen und rechtliche Grenzen</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">Rechtlicher und methodischer Rahmen der CO₂e-Bescheinigung: indikatives Dokument, kein Audit, kein vollständiges THG-Inventar, kein CSRD-/ESRS-Reporting, Verantwortlichkeiten des Nutzers, zulässige Nutzungen und Interpretationsgrenzen.</p>
        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>
      <nav aria-label="Compliance-Abschnitte" className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li><a href="#compliance-scope-legal-boundaries" className="hover:text-[#1FB6C1] transition">Compliance-Umfang und rechtliche Grenzen</a></li>
          <li><a href="#regulatory-alignment-non-equivalence" className="hover:text-[#1FB6C1] transition">Regulatorische Ausrichtung und Nicht-Gleichwertigkeit</a></li>
          <li><a href="#legal-boundary-interpretation" className="hover:text-[#1FB6C1] transition">Rechtliche Interpretationsgrenze</a></li>
          <li><a href="#regulatory-non-equivalence-misuse-prevention" className="hover:text-[#1FB6C1] transition">Nicht-Gleichwertigkeit und Missbrauchsprävention</a></li>
          <li><a href="#data-boundaries-prohibited-interpretations" className="hover:text-[#1FB6C1] transition">Datengrenzen und verbotene Interpretationen</a></li>
          <li><a href="#legal-non-equivalence-regulatory-disclosures" className="hover:text-[#1FB6C1] transition">Keine Gleichwertigkeit mit regulatorischen Offenlegungen</a></li>
          <li><a href="#prohibited-claims-misuse-prevention" className="hover:text-[#1FB6C1] transition">Verbotene Aussagen und Missbrauchsprävention</a></li>
          <li><a href="#disclaimers-liability-legal-safeguards" className="hover:text-[#1FB6C1] transition">Haftungsausschlüsse und Schutzklauseln</a></li>
          <li><a href="#auditability-independent-verification-boundaries" className="hover:text-[#1FB6C1] transition">Auditierbarkeit und Grenzen der Verifizierung</a></li>
          <li><a href="#liability-framework-legal-responsibilities" className="hover:text-[#1FB6C1] transition">Verantwortlichkeiten</a></li>
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
      </div>
    </section>
  );
}
