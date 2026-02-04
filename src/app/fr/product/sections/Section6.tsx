// PATH: src/app/fr/product/sections/Section6.tsx

"use client";

export default function Section6FR() {
  return (
    <section
      id="usage-scenarios"
      data-section="usage-scenarios"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER WITH ACCENT BAR */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6">
          <span className="mr-2">6.</span>
          Scénarios d’usage
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-6 pl-6">
          L’attestation CO₂e est conçue pour les situations où une organisation
          doit fournir un indicateur environnemental standardisé, sans produire
          un inventaire GES complet ni un reporting ESG réglementaire.
        </p>
      </div>

      {/* CONTEXT NOTE — INSTITUTIONAL FRAME */}
      <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl max-w-4xl">
        <p className="text-sm text-gray-600 leading-relaxed">
          Les scénarios ci-dessous reflètent des cas d’usage institutionnels et
          administratifs fréquents où un document CO₂e indicatif et standardisé
          est demandé à des fins de screening, de comparaison ou de
          documentation. L’attestation n’a pas vocation à remplacer une
          comptabilité carbone auditée ni un reporting ESG réglementaire.
        </p>
      </div>

      {/* GRID — ASYMMETRIC SCENARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Achats & onboarding fournisseurs
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Les services achats demandent souvent des indicateurs
              environnementaux comparables lors de l’onboarding fournisseurs ou
              de l’évaluation d’appels d’offres. L’attestation fournit un
              document standardisé, adapté aux réponses RFP et aux dossiers de
              qualification fournisseurs.
            </p>
          </div>

          <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/40 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63]">
              Assurances, risque & souscription
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Les assureurs peuvent demander des indicateurs environnementaux
              pour la classification clients, l’analyse de portefeuille ou des
              décisions de souscription. L’attestation fournit un document clair
              et cohérent, exploitable dans les dossiers d’assurance et de
              renouvellement.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            Banque & analyse de crédit
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Les institutions financières documentent de plus en plus l’exposition
            environnementale dans l’analyse crédit et le suivi client.
            L’attestation fournit un signal CO₂e indicatif pouvant être référencé
            dans les dossiers de crédit, sans exiger une divulgation ESG complète.
          </p>
        </div>
      </div>

      {/* PUBLIC TENDERS */}
      <div className="mt-16 p-10 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Marchés publics & dossiers administratifs
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
          Les procédures de commande publique peuvent inclure des indicateurs
          environnementaux comme critères d’éligibilité ou d’évaluation.
          L’attestation simplifie les réponses en fournissant un document lisible
          et vérifiable, adapté à une revue administrative.
        </p>
      </div>

      {/* EXTENDED USE CASES */}
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Cas d’usage additionnels
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li>• Tableaux de bord ESG internes sans données physiques</li>
          <li>• Documentation fournisseur demandée par des grands comptes</li>
          <li>• Onboarding partenariats et dossiers de due-diligence</li>
          <li>• Screening sur des plateformes achats automatisées</li>
          <li>• Revues bancaires périodiques nécessitant des indicateurs à jour</li>
        </ul>

        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
          Ces cas d’usage reflètent des situations pratiques non réglementaires
          où un document environnemental standardisé est demandé à des fins de
          comparaison ou de documentation.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          aria-label="Retour au sommaire"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
