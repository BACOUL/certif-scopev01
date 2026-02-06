"use client";

export default function Section6() {
  return (
    <section
      id="legal-non-equivalence-regulatory-disclosures"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">6.</span>
          Non-équivalence juridique avec les déclarations réglementaires
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          Cette section définit les limites juridiques empêchant les valeurs indicatives
          produites par Certif-Scope d’être considérées comme un reporting d’émissions
          officiel ou réglementaire. Ces limites protègent les institutions contre les
          situations de non-conformité et garantissent que les résultats soient interprétés
          uniquement dans un cadre analytique autorisé.
        </p>
      </div>

      {/* BLOCK — Distinctions juridiques principales */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Distinctions essentielles avec le reporting obligatoire
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Les résultats Certif-Scope ne doivent pas être confondus avec les déclarations
          d’émissions exigées par les cadres réglementaires européens ou internationaux.
          Les différences principales sont les suivantes :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Le résultat est indicatif et basé sur des dépenses, non sur des mesures physiques.</li>
          <li>• Aucune donnée d’activité (kWh, carburant, chaleur/froid, distances) n’est collectée.</li>
          <li>• Les résultats ne sont pas validés par des auditeurs ou organismes accrédités.</li>
          <li>• Le résultat n’est pas conforme aux exigences CSRD, ESRS E1, ISO 14064-1 ou aux inventaires complets GHG Protocol.</li>
        </ul>
      </div>

      {/* BLOCK — Comparaison avec les cadres réglementaires */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comparaison avec les cadres réglementaires
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 max-w-5xl">
          Les cadres suivants exigent des données d’émissions physiques, traçables et
          vérifiables que le modèle spend-based ne peut pas produire :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• CSRD (Union européenne) — publication obligatoire d’informations de durabilité.</li>
          <li>• ESRS E1 — inventaires Scope 1, 2 et 3 basés sur des données d’activité.</li>
          <li>• ISO 14064-1 — périmètres d’émissions quantifiables et vérifiables.</li>
          <li>• Taxonomie européenne — critères techniques nécessitant des indicateurs mesurables.</li>
          <li>• Lignes directrices EBA / bancaires — évaluations reposant sur des données environnementales validées.</li>
        </ul>
      </div>

      {/* BLOCK — Usages juridiquement interdits */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Usages interdits au regard du droit
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Les résultats Certif-Scope ne peuvent être utilisés dans aucun contexte où une
          précision réglementaire, une vérification certifiée ou un reporting statutaire
          est requis :
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Non valable pour les déclarations obligatoires CSRD/ESRS.</li>
          <li>• Non valable dans un processus de certification ISO 14064-1.</li>
          <li>• Non valable pour la classification d’actifs verts au sens de la Taxonomie UE.</li>
          <li>• Non valable pour des allégations environnementales ou marketing.</li>
          <li>• Non valable pour des mécanismes de compensation carbone ou marchés carbone.</li>
        </ul>
      </div>

      {/* BLOCK — Clause de responsabilité institutionnelle */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Clause de responsabilité institutionnelle
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed max-w-5xl relative z-10">
          Les institutions restent entièrement responsables de vérifier si le résultat
          indicatif est adapté à leurs usages internes. Certif-Scope n’est reconnu comme
          mécanisme de reporting par aucun cadre réglementaire et ne remplace aucune
          obligation de conformité.
        </p>
      </div>

      {/* BLOCK — Importance de la non-équivalence */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Pourquoi la non-équivalence est essentielle
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          Sans distinction explicite entre valeurs indicatives et déclarations réglementaires,
          les institutions s’exposeraient à des risques de mauvaise déclaration, de non-conformité
          et de responsabilité juridique. Ces limites garantissent un usage correct du résultat
          et préviennent les risques réglementaires.
        </p>
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
