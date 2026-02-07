// PATH: src/app/fr/partners/page.tsx

import type { Metadata } from "next";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

/* ======================================================
   SEO METADATA — PARTENAIRES (FR)
====================================================== */

export const metadata: Metadata = {
  title: "Partenariats & Packs — Certif-Scope",
  description:
    "Découvrez comment les partenaires utilisent Certif-Scope via des packs prépayés et des clés partenaires pour générer des attestations CO₂e à la demande, sans API ni intégration.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/partners",
    languages: {
      en: "https://www.certif-scope.com/partners",
      fr: "https://www.certif-scope.com/fr/partners",
    },
  },
  openGraph: {
    title: "Partenariats & Packs — Certif-Scope",
    description:
      "Modèle partenaire pour générer des attestations CO₂e via des packs prépayés et une clé partenaire. Sans API, sans compte, sans intégration.",
    url: "https://www.certif-scope.com/fr/partners",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function PartnersPageFR() {
  return (
    <section
      id="partners"
      data-section="partners"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-COMMERCIAL CLAIMS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Partenaires Certif-Scope",
            url: "https://www.certif-scope.com/fr/partners",
            description:
              "Explication du modèle partenaire Certif-Scope via des packs prépayés et des clés partenaires pour générer des attestations CO₂e.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            inLanguage: "fr-FR",
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestations CO₂e — Partenaires
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Partenaires — Packs & modèle de clé partenaire
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette page explique comment les partenaires utilisent Certif-Scope en
          V1 : achat de packs prépayés, réception d’une clé partenaire, et
          génération d’attestations CO₂e à la demande. Sans API, sans compte,
          sans intégration.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="Sections partenaires"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              1. Présentation du modèle partenaire
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              2. Packs & crédits
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              3. Émission de la clé partenaire
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              4. Validité de la clé & limites d’usage
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              5. Modèle de sécurité & récupération
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              6. API & accès volume élevé (à venir)
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl space-y-24">
        <div id="s1" className="scroll-mt-28">
          <Section1 />
        </div>
        <div id="s2" className="scroll-mt-28">
          <Section2 />
        </div>
        <div id="s3" className="scroll-mt-28">
          <Section3 />
        </div>
        <div id="s4" className="scroll-mt-28">
          <Section4 />
        </div>
        <div id="s5" className="scroll-mt-28">
          <Section5 />
        </div>
        <div id="s6" className="scroll-mt-28">
          <Section6 />
        </div>
      </div>
    </section>
  );
}
