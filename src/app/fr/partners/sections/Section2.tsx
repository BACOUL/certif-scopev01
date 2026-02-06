// PATH: src/app/fr/partners/sections/Section2.tsx
"use client";

export default function Section2FR() {
  return (
    <section
      id="packs-and-credits"
      data-section="packs-and-credits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F0FDFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">2.</span>
          Packs &amp; crédits
        </h2>

        <p
          data-i18n="s2.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          L’accès partenaire à Certif-Scope repose sur un modèle de crédits
          prépayés. Les partenaires achètent des packs d’attestations à l’avance
          et consomment des crédits uniquement lorsqu’une attestation est générée.
        </p>

        <p
          data-i18n="s2.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Cette approche fournit des coûts prévisibles, un contrôle total de
          l’usage et une compatibilité naturelle avec les processus achats,
          finance et conformité. Il n’y a pas d’abonnement, pas de frais
          récurrents et pas de facturation automatique.
        </p>
      </div>

      {/* 3-PILLAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* PILLAR 1 */}
        <div
          data-i18n="s2.card1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="s2.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Packs de crédits prépayés
          </h3>
          <p
            data-i18n="s2.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Les partenaires achètent des packs de crédits à l’avance. Un crédit
            correspond à une attestation CO₂e générée, sans frais cachés ni prix
            variable.
          </p>
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="s2.card2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="s2.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Consommation contrôlée
          </h3>
          <p
            data-i18n="s2.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Les crédits sont consommés uniquement au moment de la génération de
            l’attestation. La vérification, la consultation et le partage du
            document ne consomment jamais de crédits.
          </p>
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="s2.card3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="s2.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Modèle compatible achats
          </h3>
          <p
            data-i18n="s2.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Le prépaiement s’aligne avec les processus d’achat entreprise, la
            validation budgétaire et les circuits d’approbation internes, sans
            engagement contractuel long terme.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s2.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Retour au sommaire
        </a>
      </div>
    </section>
  );
}
