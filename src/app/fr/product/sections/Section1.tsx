// PATH: src/app/fr/product/sections/Section1.tsx

"use client";

export default function Section1FR() {
  return (
    <section
      id="product-overview"
      data-section="product-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — INTRO PRODUIT (V1) */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* SECTION TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">1.</span>
          Présentation du produit
        </h2>

        {/* LEAD */}
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10">
          Une attestation CO₂e standardisée, prête pour un usage institutionnel,
          conçue pour répondre aux demandes de divulgation environnementale de
          tiers.
        </p>

        {/* WHAT THE PRODUCT IS */}
        <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
          Certif-Scope fournit une attestation CO₂e structurée, destinée aux
          organisations qui doivent communiquer un indicateur environnemental à
          des clients, des services achats, des établissements financiers ou des
          entités publiques.
        </p>

        {/* WHO IT IS FOR */}
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
          Le produit vise les PME et organisations de taille intermédiaire qui
          ne disposent pas d’un dispositif complet de reporting carbone
          réglementaire, mais doivent néanmoins répondre de manière standardisée
          à des demandes CO₂e dans des contextes professionnels ou
          institutionnels.
        </p>

        {/* WHAT IT DELIVERS */}
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
          Le livrable est un document clair, cohérent et partageable présentant
          un indicateur CO₂e agrégé dans un format fixe, optimisé pour la
          lisibilité, la revue et la réutilisation par des tiers, sans nécessité
          d’explications additionnelles.
        </p>

        {/* POSITIONING & EXPLICIT NON-SCOPE */}
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">
          Certif-Scope n’est pas un organisme de certification et ne remplace ni
          un reporting réglementaire, ni un audit de gaz à effet de serre, ni un
          cadre de conformité. Le service délivre un document indicatif et
          standardisé répondant à des besoins courants de divulgation, tout en
          restant léger, accessible et compatible avec des processus de revue
          institutionnels.
        </p>
      </div>

      {/* RETURN BUTTON — CANONICAL */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
```0
