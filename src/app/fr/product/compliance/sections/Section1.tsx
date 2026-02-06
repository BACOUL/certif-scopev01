"use client";

export default function Section1() {
  return (
    <section
      id="compliance-scope-legal-boundaries"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Legal framing */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">1.</span>
          Périmètre de conformité & limites juridiques
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mt-6">
          Cette section définit le périmètre juridique exact de Certif-Scope. Elle précise
          ce que le système est autorisé à produire, ce qu’il ne couvre pas, et dans quel
          cadre réglementaire il s’inscrit. Ces limites visent à éviter toute mauvaise
          interprétation et garantissent que le résultat reste une estimation indicative
          de CO₂e basée exclusivement sur une logique spend-based.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mt-4">
          Certif-Scope ne remplace pas les obligations réglementaires (CSRD, ESRS,
          Taxonomie européenne), ne constitue pas un audit et ne valide pas les émissions
          spécifiques de fournisseurs. L’outil fournit un indicateur standardisé destiné
          à des usages institutionnels de screening lorsque les données physiques
          d’activité ne sont pas disponibles.
        </p>
      </div>

      {/* BLOCK — Legal Scope */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Périmètre juridique défini
        </h3>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Fournit des estimations indicatives de CO₂e basées uniquement sur des facteurs spend-based.</li>
          <li>• Aligné avec l’approche Scope 3 spend-based du GHG Protocol.</li>
          <li>• Compatible avec les principes méthodologiques ISO 14064-1 et ISO 14083.</li>
          <li>• Produit des indicateurs non contraignants adaptés aux processus procurement et bancaires.</li>
          <li>• Indépendant de toute donnée primaire fournisseur.</li>
        </ul>

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Positionnement dans le cadre légal
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Dépenses financières → Affectation par catégorie → Facteur de référence →
            Estimation CO₂e. Le résultat ne représente pas les émissions opérationnelles
            réelles mais une intensité indicative issue de références économiques
            sectorielles.
          </p>
        </div>
      </div>

      {/* BLOCK — Explicit Legal Exclusions */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Exclusions explicites (juridiques et méthodologiques)
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Les éléments suivants sont explicitement exclus du périmètre et ne doivent
          jamais être interprétés comme inclus :
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Aucun reporting conforme CSRD (ce document n’est pas une déclaration de durabilité).</li>
          <li>• Aucune vérification de données primaires ESRS E1, E2 ou E3.</li>
          <li>• Aucun calcul d’empreinte carbone produit ou fournisseur.</li>
          <li>• Aucune émission Scope 1 ou Scope 2 opérationnelle.</li>
          <li>• Aucune analyse de cycle de vie (ISO 14040/44).</li>
          <li>• Aucun audit, aucune mission d’assurance ou opinion de vérification.</li>
          <li>• Aucune utilisation de données physiques d’activité (kWh, km, tCO₂e opérationnels).</li>
        </ul>
      </div>

      {/* BLOCK — Regulatory Alignment */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          Alignement avec les cadres réglementaires internationaux
        </h3>

        <p className="text-white/90 max-w-5xl leading-relaxed">
          Certif-Scope s’aligne sur des cadres méthodologiques reconnus pour
          l’estimation indicative des émissions sans se substituer aux obligations
          réglementaires applicables.
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm max-w-5xl leading-relaxed">
          <li>• GHG Protocol — méthode Scope 3 spend-based.</li>
          <li>• ISO 14064-1 — principes de pertinence, cohérence et transparence.</li>
          <li>• ISO 14083 — périmètre de calcul des émissions transport.</li>
          <li>• Modélisation EEIO — allocation macroéconomique des intensités carbone.</li>
          <li>• Taxonomie européenne — compatibilité pour analyse indicative uniquement.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-5xl leading-relaxed">
          Ces références assurent la crédibilité méthodologique tout en maintenant
          une séparation claire avec les obligations réglementaires CSRD et ESRS.
        </p>
      </div>

      {/* BLOCK — Liability & Responsibility Boundaries */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Limites de responsabilité
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          Certif-Scope fournit uniquement un résultat indicatif. La responsabilité de
          l’exactitude des données financières saisies incombe exclusivement à
          l’utilisateur ou à l’institution émettrice. Le système ne valide ni factures,
          ni données fournisseurs, ni métriques opérationnelles.
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• Le résultat ne constitue pas une émission auditée.</li>
          <li>• Aucune équivalence avec des livrables CSRD ou ESRS n’est garantie.</li>
          <li>• Aucune responsabilité juridique sur l’interprétation ou l’usage final.</li>
          <li>• L’évaluation contextuelle relève de l’institution utilisatrice.</li>
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
