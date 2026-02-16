import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — POURQUOI LES ENTREPRISES LE DEMANDENT
====================================================== */

export const metadata: Metadata = {
  title:
    "Pourquoi les entreprises demandent une attestation CO₂e — Certif-Scope",
  description:
    "Comprendre pourquoi les acheteurs, banques et assureurs demandent une attestation CO₂e standardisée aux fournisseurs : screening des risques, onboarding, et cadre d’utilisation.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
      de: "https://www.certif-scope.com/de/why-companies-ask",
    },
  },
  openGraph: {
    title:
      "Pourquoi les entreprises demandent une attestation CO₂e — Certif-Scope",
    description:
      "Comprendre pourquoi les organisations demandent des attestations CO₂e standardisées et ce que ces documents représentent — et ne représentent pas.",
    url: "https://www.certif-scope.com/fr/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskPage() {
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
              "Explication institutionnelle des raisons pour lesquelles les organisations demandent des attestations CO₂e à leurs fournisseurs et de leur usage.",
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

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Exigence fournisseur
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Pourquoi les entreprises la demandent
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les directions achats, les banques, les assureurs et les institutions
          publiques demandent de plus en plus une attestation CO₂e standardisée
          à leurs fournisseurs. Cette page explique les raisons institutionnelles
          de cette demande, ainsi que ce que représente réellement cette
          attestation — et ce qu’elle ne constitue pas.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Classification du risque fournisseurs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les grandes organisations doivent classer leurs fournisseurs selon
            leur exposition environnementale dans le cadre de leur gouvernance
            achats et de leurs politiques ESG, notamment dans les démarches
            d’achats responsables comme ISO 20400.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>screening ESG des fournisseurs</li>
            <li>indicateurs environnementaux requis dans les appels d’offres</li>
            <li>alignement avec les politiques achats internes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Pression réglementaire sur les institutions financières
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les banques et les assureurs doivent intégrer les risques
            environnementaux dans leurs processus d’analyse conformément à des
            cadres tels que la Taxonomie européenne, les guidelines de l’EBA ou
            Solvabilité II. Une attestation CO₂e standardisée permet de documenter
            l’exposition environnementale d’un fournisseur sans exiger un
            reporting CSRD ou ESRS complet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due diligence et onboarding fournisseurs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De nombreuses organisations demandent une estimation CO₂e dans le
            cadre des procédures de due diligence fournisseurs. L’attestation
            fournit un document structuré et vérifiable compatible avec les
            modèles d’onboarding institutionnels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Elle permet aux PME de répondre à des exigences auparavant réservées
            à des démarches longues ou à des audits coûteux.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibilité pour les fournisseurs non techniques
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La majorité des PME ne peuvent pas produire de reporting CSRD ou ESRS
            ni d’inventaire complet des émissions de gaz à effet de serre.
            L’attestation fournit un indicateur compréhensible au niveau
            institutionnel à partir des seules données de dépenses annuelles,
            sans expertise technique requise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Accélération des cycles d’approbation fournisseurs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les processus d’approbation fournisseurs sont souvent ralentis par
            l’absence d’informations environnementales cohérentes. Un document
            CO₂e standardisé réduit le temps d’analyse et facilite les décisions
            d’onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Vérification immédiate et indépendante
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>identifiant unique d’attestation</li>
            <li>garanties d’intégrité intégrées au document</li>
            <li>URL de vérification permanente</li>
            <li>QR code utilisable dans les systèmes institutionnels</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Les réviseurs peuvent vérifier l’authenticité du document en quelques
            secondes et confirmer qu’il n’a pas été modifié.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Acceptation transfrontalière
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le format d’attestation est aligné avec les attentes des directions
            achats et des institutions financières dans plusieurs juridictions
            européennes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Ce que cette attestation n’est pas
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ce n’est pas une certification</li>
            <li>ce n’est pas un audit</li>
            <li>ce n’est pas une mission d’assurance</li>
            <li>ce n’est pas un reporting carbone réglementaire</li>
            <li>ce n’est pas un reporting CSRD ou ESRS</li>
            <li>ce n’est pas un inventaire Scope 1, Scope 2 ou Scope 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Portée légale et usage prévu
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cette attestation est indicative uniquement. Elle ne constitue ni un
            audit, ni une certification, ni une mission d’assurance, ni une
            empreinte carbone juridiquement opposable.
          </p>
        </section>
      </div>
    </section>
  );
             }
