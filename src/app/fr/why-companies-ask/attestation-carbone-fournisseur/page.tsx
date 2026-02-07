import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — ATTESTATION CARBONE FOURNISSEUR
====================================================== */

export const metadata: Metadata = {
  title:
    "Attestation carbone fournisseur — pourquoi elle est demandée | Certif-Scope",
  description:
    "Pourquoi les acheteurs et grandes entreprises demandent une attestation carbone aux fournisseurs : screening ESG, onboarding, appels d’offres et limites du document.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    languages: {
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
      en: "https://www.certif-scope.com/why-companies-ask/attestation-carbon-supplier",
    },
  },
  openGraph: {
    title:
      "Attestation carbone fournisseur — pourquoi elle est demandée",
    description:
      "Comprendre pourquoi les organisations demandent une attestation carbone aux fournisseurs et dans quels contextes elle est utilisée.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function AttestationCarboneFournisseurPageFR() {
  return (
    <section
      id="attestation-carbone-fournisseur"
      data-section="attestation-carbone-fournisseur"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Attestation carbone fournisseur",
            url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
            description:
              "Explication des raisons pour lesquelles les entreprises demandent une attestation carbone aux fournisseurs dans les processus achats et de due diligence.",
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
          Attestation CO₂e — Fournisseurs
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Pourquoi une attestation carbone est demandée aux fournisseurs
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les grandes entreprises, acheteurs publics, banques et assureurs
          demandent de plus en plus une information carbone standardisée aux
          fournisseurs. Cette demande ne correspond pas nécessairement à un
          audit carbone complet, mais à un besoin opérationnel de classification,
          de comparaison et de documentation environnementale.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Pourquoi les acheteurs demandent une information carbone
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les directions achats doivent aujourd’hui intégrer des critères
            environnementaux dans l’évaluation des fournisseurs. Cette évolution
            provient à la fois de politiques internes ESG, de demandes clients et
            de cadres réglementaires européens incitant à mieux documenter les
            chaînes d’approvisionnement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L’objectif n’est pas d’obtenir un inventaire complet des émissions,
            mais un indicateur cohérent permettant de comparer les fournisseurs
            et d’identifier les expositions environnementales potentielles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Le rôle dans le référencement fournisseur
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lors de l’onboarding fournisseur, les entreprises collectent des
            informations standardisées : données financières, assurances,
            conformité juridique et, désormais, indicateurs environnementaux.
            Une attestation CO₂e permet de compléter ce dossier sans nécessiter
            une étude carbone complète.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Pourquoi les PME sont concernées
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les PME sont de plus en plus intégrées dans des chaînes
            d’approvisionnement soumises à des exigences ESG. Même sans obligation
            réglementaire directe, elles doivent fournir des informations
            environnementales pour continuer à travailler avec certains clients
            ou répondre à des appels d’offres.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Différence avec un bilan carbone complet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une attestation carbone fournisseur ne remplace pas un bilan carbone
            détaillé ni un audit GES. Elle fournit une estimation indicative
            utilisable dans des contextes opérationnels rapides.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>pas d’audit des données</li>
            <li>pas de calcul des Scopes 1, 2 ou 3 détaillés</li>
            <li>pas de reporting réglementaire</li>
            <li>pas de certification environnementale</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Ce que les acheteurs attendent réellement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dans la majorité des cas, les acheteurs recherchent un format simple,
            cohérent et vérifiable, permettant de documenter une décision ou de
            compléter un dossier fournisseur. La priorité est la comparabilité et
            la traçabilité du document, plutôt que la précision scientifique d’un
            inventaire complet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Limites et périmètre d’usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Une attestation carbone fournisseur reste un document indicatif. Elle
            ne constitue ni une certification, ni un audit, ni une preuve de
            conformité réglementaire. Son usage est limité aux processus de
            screening, de diligence et d’évaluation fournisseur.
          </p>
        </section>

      </div>
    </section>
  );
}
