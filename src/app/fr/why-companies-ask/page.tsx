import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — POURQUOI LES ENTREPRISES LE DEMANDENT
====================================================== */

export const metadata: Metadata = {
  title: "Pourquoi les entreprises demandent une attestation CO₂e — Certif-Scope",
  description:
    "Raisons institutionnelles pour lesquelles les acheteurs, banques et assureurs demandent une attestation CO₂e aux fournisseurs : screening, onboarding, cadre d’usage et limites.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
    },
  },
  openGraph: {
    title: "Pourquoi les entreprises demandent une attestation CO₂e — Certif-Scope",
    description:
      "Comprendre pourquoi les organisations demandent une attestation CO₂e standardisée aux fournisseurs, et ce que ce document représente — et ne représente pas.",
    url: "https://www.certif-scope.com/fr/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskPageFR() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pourquoi les entreprises demandent une attestation CO₂e",
            url: "https://www.certif-scope.com/fr/why-companies-ask",
            description:
              "Raisons institutionnelles expliquant pourquoi les organisations demandent une attestation CO₂e aux fournisseurs et comment ces documents sont utilisés.",
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

      {/* EN-TÊTE PAGE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Exigence fournisseur
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Pourquoi les entreprises la demandent
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les acheteurs, banques, assureurs et institutions publiques demandent
          de plus en plus une attestation CO₂e standardisée à leurs fournisseurs.
          Cette page explique la logique institutionnelle derrière cette demande,
          ainsi que ce que l’attestation représente — et ce qu’elle ne représente pas.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Classification du risque fournisseur (procurement)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les grandes organisations doivent classer les fournisseurs selon
            l’exposition environnementale, dans le cadre de la gouvernance achats
            et des dispositifs de gestion des risques ESG, y compris des référentiels
            d’achats responsables comme l’ISO 20400.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>screening ESG fournisseur</li>
            <li>indicateurs environnementaux requis dans les appels d’offres</li>
            <li>alignement avec des politiques achats internes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Banques, assureurs et pression réglementaire
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les banques et assureurs font face à des exigences croissantes
            d’évaluation des risques environnementaux via des cadres comme la
            taxonomie UE, certaines lignes directrices EBA et des exigences
            prudentielles (ex. Solvabilité II). Une attestation CO₂e standardisée
            facilite la documentation d’une exposition fournisseur sans exiger
            un inventaire complet de type CSRD/ESRS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due diligence et onboarding fournisseur
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De nombreuses organisations demandent une estimation CO₂e dans le cadre
            de la due diligence et de l’onboarding. L’attestation fournit un document
            structuré et vérifiable, compatible avec des gabarits institutionnels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cela permet aux PME de répondre à des exigences qui nécessitaient
            auparavant des consultants ou des audits complexes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibilité pour les fournisseurs non techniques
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La majorité des PME ne peuvent pas produire des rapports CSRD/ESRS ni
            des inventaires GES détaillés. L’attestation fournit un indicateur
            exploitable au format institutionnel à partir des seules dépenses annuelles,
            sans expertise technique.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Accélération des cycles d’approbation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L’approbation fournisseur est souvent ralentie par l’absence d’information
            environnementale ou par des formats incohérents. Un document CO₂e standardisé
            réduit le temps de revue et accélère les décisions d’onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Vérification immédiate et indépendante
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>un identifiant unique d’attestation</li>
            <li>des éléments d’intégrité intégrés au document</li>
            <li>une URL de vérification permanente</li>
            <li>un QR code utilisable dans des systèmes institutionnels</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les équipes de revue peuvent vérifier l’authenticité en quelques secondes
            et confirmer que le document n’a pas été modifié.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Acceptation multi-juridictions (Europe)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le format est conçu pour s’aligner sur les attentes achats et diligence
            dans plusieurs juridictions européennes, avec un langage simple et un
            périmètre strictement défini.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Ce que cette attestation n’est pas
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>pas une certification</li>
            <li>pas un audit</li>
            <li>pas une mission d’assurance</li>
            <li>pas un rapport carbone réglementaire</li>
            <li>pas un reporting CSRD/ESRS</li>
            <li>pas un inventaire Scope 1, Scope 2 ou Scope 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Périmètre légal et usage prévu
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette attestation est indicative. Elle ne constitue pas un audit,
            une certification, une mission d’assurance ni une empreinte légalement
            opposable. Son usage est limité aux besoins de screening, d’onboarding
            et de diligence, dans les limites méthodologiques décrites.
          </p>
        </section>
      </div>
    </section>
  );
}
