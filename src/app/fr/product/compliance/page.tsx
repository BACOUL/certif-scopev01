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
  title: "Conformité et limites de l’attestation CO₂e | Certif-Scope",
  description:
    "Cadre légal de l’attestation CO₂e Certif-Scope : document indicatif, non audit, non inventaire GES complet, non reporting CSRD/ESRS, responsabilités et limites d’usage.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/compliance/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/compliance/",
    },
  },
  openGraph: {
    title: "Conformité et limites de l’attestation CO₂e | Certif-Scope",
    description:
      "Limites juridiques, responsabilités, usages autorisés et non-équivalence réglementaire de l’attestation CO₂e indicative Certif-Scope.",
    url: "https://www.certif-scope.com/fr/product/compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function CompliancePage() {
  return (
    <section
      id="compliance"
      data-section="compliance"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER CANONIQUE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Conformité
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Cadre de conformité & limites juridiques
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cadre juridique et de conformité applicable à l’attestation CO₂e :
          document indicatif, non audit, non inventaire GES complet, non reporting
          CSRD/ESRS, responsabilités de l’utilisateur, usages autorisés et limites
          d’interprétation.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE DES MATIÈRES */}
      <nav
        aria-label="Sections conformité"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li>
            <a
              href="#compliance-scope-legal-boundaries"
              className="hover:text-[#1FB6C1] transition"
            >
              Périmètre de conformité & limites juridiques
            </a>
          </li>
          <li>
            <a
              href="#regulatory-alignment-non-equivalence"
              className="hover:text-[#1FB6C1] transition"
            >
              Alignement réglementaire & non-équivalence
            </a>
          </li>
          <li>
            <a
              href="#legal-boundary-interpretation"
              className="hover:text-[#1FB6C1] transition"
            >
              Limites d’interprétation juridique
            </a>
          </li>
          <li>
            <a
              href="#regulatory-non-equivalence-misuse-prevention"
              className="hover:text-[#1FB6C1] transition"
            >
              Non-équivalence réglementaire & prévention des usages abusifs
            </a>
          </li>
          <li>
            <a
              href="#data-boundaries-prohibited-interpretations"
              className="hover:text-[#1FB6C1] transition"
            >
              Limites des données & interprétations interdites
            </a>
          </li>
          <li>
            <a
              href="#legal-non-equivalence-regulatory-disclosures"
              className="hover:text-[#1FB6C1] transition"
            >
              Non-équivalence avec les publications réglementaires
            </a>
          </li>
          <li>
            <a
              href="#prohibited-claims-misuse-prevention"
              className="hover:text-[#1FB6C1] transition"
            >
              Allégations interdites & prévention des usages abusifs
            </a>
          </li>
          <li>
            <a
              href="#disclaimers-liability-legal-safeguards"
              className="hover:text-[#1FB6C1] transition"
            >
              Clauses, responsabilité & protections juridiques
            </a>
          </li>
          <li>
            <a
              href="#auditability-independent-verification-boundaries"
              className="hover:text-[#1FB6C1] transition"
            >
              Auditabilité & limites de vérification documentaire
            </a>
          </li>
          <li>
            <a
              href="#liability-framework-legal-responsibilities"
              className="hover:text-[#1FB6C1] transition"
            >
              Cadre de responsabilité juridique
            </a>
          </li>
        </ol>
      </nav>

      {/* CONTENU */}
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
