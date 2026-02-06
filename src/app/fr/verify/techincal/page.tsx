// src/app/fr/verify/techincal/page.tsx

import type { Metadata } from "next";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";

/* ======================================================
   SEO METADATA — TECHNICAL VERIFICATION (FR)
====================================================== */

export const metadata: Metadata = {
  title: "Vérification technique — Attestation CO₂e | Certif-Scope",
  description:
    "Documentation technique complète expliquant comment vérifier une attestation CO₂e Certif-Scope de manière indépendante, y compris la vérification cryptographique et hors ligne.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/verify/techincal",
  },
  openGraph: {
    title: "Vérification technique — Attestation CO₂e | Certif-Scope",
    description:
      "Guide pas à pas pour développeurs, auditeurs et équipes sécurité afin de vérifier des attestations CO₂e Certif-Scope de façon indépendante et hors ligne.",
    url: "https://www.certif-scope.com/fr/verify/techincal",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyTechnicalFRPage() {
  return (
    <section
      id="verify-technical"
      data-section="verify-technical"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — TECHNICAL WEBPAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vérification technique des attestations CO₂e",
            description:
              "Documentation technique pour vérifier de manière indépendante l’authenticité et l’intégrité des attestations CO₂e Certif-Scope.",
            url: "https://www.certif-scope.com/fr/verify/techincal",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Vérification technique
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Guide de vérification technique
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette page fournit une explication complète, au niveau
          implémentation, pour vérifier techniquement une attestation CO₂e
          Certif-Scope. Elle est destinée aux développeurs, auditeurs, équipes
          sécurité et relecteurs techniques ayant besoin d’une vérification
          indépendante, reproductible et possible hors ligne.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="Sections de vérification technique"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#verification-model">1. Modèle de vérification</a>
          </li>
          <li>
            <a href="#cryptographic-foundations">
              2. Fondations cryptographiques
            </a>
          </li>
          <li>
            <a href="#signed-data-structure">3. Structure des données signées</a>
          </li>
          <li>
            <a href="#public-key-and-trust">
              4. Clé publique & modèle de confiance
            </a>
          </li>
          <li>
            <a href="#verification-scope">5. Ce qui est vérifié (et ce qui ne l’est pas)</a>
          </li>
          <li>
            <a href="#verification-workflows">6. Parcours de vérification</a>
          </li>
          <li>
            <a href="#step-by-step-verification">
              7. Vérification pas à pas (CLI & code)
            </a>
          </li>
          <li>
            <a href="#security-assumptions">
              8. Hypothèses de sécurité & modèle de menace
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </section>
  );
}
