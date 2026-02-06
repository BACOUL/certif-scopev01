// PATH: src/app/fr/partners/sections/Section1.tsx
"use client";

export default function Section1FR() {
  return (
    <section
      id="partner-access-overview"
      data-section="partner-access-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">1.</span>
          Vue d’ensemble — Accès Partenaires
        </h2>

        <p
          data-i18n="partners.s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          L’Accès Partenaires Certif-Scope est un modèle d’accès contrôlé conçu
          pour les organisations qui doivent demander, générer ou distribuer des
          attestations CO₂e standardisées à grande échelle. Il s’adresse aux
          workflows institutionnels où un document environnemental cohérent est
          requis auprès de tiers.
        </p>

        <p
          data-i18n="partners.s1.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          L’Accès Partenaires ne fournit pas de logiciel ESG, de plateforme de
          données ou d’outil de reporting. Il délivre un format d’attestation
          simple et vérifiable, intégrable dans des processus procurement,
          conformité ou risque, sans modifier les systèmes existants.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* PILLAR 1 */}
        <div
          data-i18n="partners.s1.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s1.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Cas d’usage institutionnel
          </h3>
          <p
            data-i18n="partners.s1.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            L’Accès Partenaires est conçu pour les banques, assureurs, grandes
            entreprises et équipes achats qui exigent une documentation CO₂e
            standardisée de la part de fournisseurs, clients ou PME dans le
            cadre de leurs workflows opérationnels ou de conformité.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="partners.s1.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-lg hover:border-[#1FB6C1]/50 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s1.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Sortie standardisée
          </h3>
          <p
            data-i18n="partners.s1.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Toutes les attestations générées via l’Accès Partenaires suivent la
            même structure fixe, la même méthodologie et le même format de
            vérification, garantissant la cohérence des soumissions tierces et
            réduisant la friction de revue.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="partners.s1.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300"
        >
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s1.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Périmètre clair & limites
          </h3>
          <p
            data-i18n="partners.s1.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            L’Accès Partenaires fournit uniquement des attestations CO₂e
            indicatives, spend-based. Il ne réalise pas d’audit, ne stocke pas
            de données ESG, et ne remplace pas les obligations de reporting
            réglementaire (CSRD) ou les inventaires basés sur des normes ISO.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
