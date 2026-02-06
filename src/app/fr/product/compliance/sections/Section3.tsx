"use client";

export default function Section3() {
  return (
    <section
      id="legal-boundary-interpretation"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Cadre juridique strict */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-600 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">3.</span>
          Limite juridique d’interprétation
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-5xl leading-relaxed">
          Cette section définit les limites juridiques explicites d’interprétation associées
          aux résultats produits par Certif-Scope. Ces limites garantissent que les
          institutions comprennent précisément ce que l’attestation peut représenter
          juridiquement et ce qu’elle ne peut pas représenter. Elles empêchent toute
          assimilation des valeurs indicatives de CO₂e à des indicateurs environnementaux
          vérifiés ou à des déclarations réglementaires.
        </p>
      </div>

      {/* BLOCK — Ce que représente juridiquement le résultat */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-600">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Ce que le résultat représente juridiquement
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          L’attestation constitue une estimation indicative et non contraignante des émissions
          de CO₂e, obtenue par une logique de conversion basée exclusivement sur les dépenses.
          Elle constitue un outil d’analyse destiné aux usages institutionnels lorsque des
          données physiques ou spécifiques aux fournisseurs ne sont pas disponibles.
        </p>

        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Une conversion financière vers une estimation d’émissions basée sur des catégories économiques.</li>
          <li>• Un résultat reproductible fondé sur un calcul déterministe.</li>
          <li>• Un document statique intégrant la version des facteurs d’émission utilisée.</li>
          <li>• Une estimation indicative adaptée au pré-screening ESG.</li>
        </ul>
      </div>

      {/* BLOCK — Ce que le résultat ne représente PAS */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Ce que le résultat ne représente PAS
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Certif-Scope exclut explicitement toute interprétation pouvant créer une équivalence
          juridique ou réglementaire. Le résultat indicatif CO₂e ne doit pas être interprété
          comme une preuve de :
        </p>

        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Inventaire GES vérifié conforme à la norme ISO 14064-1.</li>
          <li>• Déclaration environnementale ESRS ou reporting CSRD.</li>
          <li>• Alignement ou éligibilité à la Taxonomie européenne.</li>
          <li>• Exactitude spécifique aux fournisseurs ou traçabilité amont.</li>
          <li>• Mesure physique des émissions ou suivi opérationnel.</li>
          <li>• Empreinte carbone certifiée utilisable dans un cadre réglementaire.</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          Ces exclusions répondent aux exigences d’intégrité réglementaire et empêchent
          qu’une estimation indicative soit assimilée à une déclaration environnementale auditée.
        </p>
      </div>

      {/* BLOCK — Responsabilité d’interprétation institutionnelle */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Responsabilité d’interprétation des institutions
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Les institutions utilisant Certif-Scope demeurent entièrement responsables de
          l’interprétation, de la contextualisation et de l’usage ultérieur des valeurs
          indicatives. L’outil n’assume aucune responsabilité quant aux décisions de
          conformité prises sur la base du résultat.
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed max-w-5xl">
          <li>• Les utilisateurs doivent contextualiser les résultats via leurs propres méthodologies internes.</li>
          <li>• Un jugement professionnel est requis pour tout usage réglementaire.</li>
          <li>• Certif-Scope ne fournit aucune garantie de conformité réglementaire.</li>
          <li>• Les institutions doivent vérifier l’adéquation à leur juridiction d’utilisation.</li>
        </ul>
      </div>

      {/* BLOCK — Clause de non-recours juridique */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Clause de non-recours juridique
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Les résultats Certif-Scope sont par nature non contraignants. Ils ne doivent pas être
          utilisés pour la conformité réglementaire, des litiges, des engagements contractuels
          ou des déclarations environnementales publiques. Toute utilisation à ces fins nécessite
          une vérification indépendante par des professionnels ou auditeurs qualifiés.
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10 max-w-5xl">
          <li>• Non recevable comme preuve auditée.</li>
          <li>• Non adapté aux déclarations réglementaires destinées aux investisseurs.</li>
          <li>• Non acceptable comme documentation ESG autonome.</li>
          <li>• Non reconnu comme preuve légale de performance environnementale.</li>
        </ul>
      </div>

      {/* RETURN BUTTON */}
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
