// PATH: src/app/fr/product/sections/Section7.tsx

"use client";

export default function Section7FR() {
  return (
    <section
      id="limitations-and-fit"
      data-section="limitations-and-fit"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER WITH LEFT ACCENT BAR */}
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6">
          <span className="mr-2">7.</span>
          Limites & adéquation
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed pl-6">
          Cette section définit le périmètre, les cas d’usage pertinents et les
          limites de l’attestation CO₂e. Son objectif est d’éviter toute
          mauvaise interprétation dans des contextes institutionnels,
          administratifs ou de conformité.
        </p>
      </div>

      {/* WHAT IT IS */}
      <div className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Ce que l’attestation EST
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li>• Un indicateur CO₂e indicatif et standardisé</li>
          <li>• Déterministe et reproductible à déclaration identique</li>
          <li>• Structuré pour les workflows achats, onboarding et screening</li>
          <li>• Émis avec des mécanismes d’intégrité et une vérification indépendante</li>
          <li>• Adapté à la documentation, la comparaison et l’évaluation préliminaire</li>
        </ul>
      </div>

      {/* WHAT IT IS NOT */}
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/30 to-transparent opacity-25" />

        <h3 className="text-2xl font-semibold mb-4 relative z-10">
          Ce que l’attestation N’EST PAS
        </h3>

        <ul className="space-y-3 text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          <li>• Ni un reporting CSRD, ESRS ou une divulgation sustainability réglementaire</li>
          <li>• Ni un inventaire de gaz à effet de serre (Scopes 1, 2 ou 3)</li>
          <li>• Ni un bilan carbone audité, une certification ou une ACV</li>
          <li>• Non valable pour des dépôts statutaires ou des obligations réglementaires</li>
          <li>• Ne remplace pas une analyse carbone experte ou scientifique</li>
        </ul>
      </div>

      {/* WHEN IT FITS */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Quand c’est adapté
          </h3>

          <ul className="space-y-3 text-sm text-gray-700 max-w-4xl leading-relaxed">
            <li>• Onboarding fournisseurs nécessitant un indicateur environnemental de base</li>
            <li>• Process de screening banque, assurance et analyse crédit</li>
            <li>• Marchés publics demandant une documentation standardisée</li>
            <li>• Organisations sans équipe ESG interne</li>
            <li>• Workflows transfrontaliers nécessitant des documents clairs et comparables</li>
          </ul>
        </div>

        <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Destinataires typiques
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Équipes achats et sourcing</li>
            <li>• Institutions financières</li>
            <li>• Souscripteurs et analystes assurance</li>
            <li>• Autorités publiques</li>
            <li>• Fonctions conformité / risques</li>
          </ul>
        </div>
      </div>

      {/* WHEN NOT TO USE */}
      <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Quand il ne faut PAS l’utiliser
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li>• Reporting CSRD ou ESRS obligatoire</li>
          <li>• Inventaires GES certifiés ou audités</li>
          <li>• Comptabilité carbone basée sur des données physiques d’activité</li>
          <li>• Modélisation scientifique ou analyses de cycle de vie (ACV)</li>
          <li>• Marketing / allégations publiques nécessitant des preuves vérifiées</li>
        </ul>
      </div>

      {/* FINAL CLARIFICATION */}
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30" />

        <h3 className="text-2xl font-semibold mb-4 relative z-10">
          Clarification finale
        </h3>

        <p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">
          L’attestation CO₂e fournit un signal standardisé et indicatif destiné
          uniquement à la documentation et au screening. La responsabilité de
          l’interprétation et de l’usage repose sur le destinataire. Le reporting
          réglementaire, la certification ou une comptabilité carbone auditée
          nécessitent des évaluations dédiées conduites selon les standards
          applicables.
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
