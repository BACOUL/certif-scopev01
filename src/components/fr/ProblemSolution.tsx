export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER — CANONICAL HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4"
            data-i18n="problem.title"
          >
            Les PME sont de plus en plus sollicitées pour fournir un bilan carbone
            — sans avoir les moyens de répondre.
          </h2>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            data-i18n="problem.description"
          >
            Acheteurs, banques et assureurs demandent de plus en plus des éléments
            de bilan carbone lors d’un référencement fournisseur, d’un appel d’offres
            ou d’un contrôle de risque. Réaliser un inventaire carbone complet
            nécessite des données d’activité détaillées, du temps, parfois un cabinet
            et des itérations — des ressources que la majorité des PME ne peut pas
            mobiliser à la demande.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-20"
          data-i18n="problem.solution"
        >
          Certif-Scope génère une attestation indicative de bilan carbone (CO₂e) à
          partir des dépenses annuelles (méthode spend-based). Un format standardisé,
          lisible immédiatement par les équipes achats, banques et assureurs —
          vérifiable indépendamment et réutilisable dans les workflows institutionnels.
        </p>

        {/* 3 BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
          {/* BENEFIT 1 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point1.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point1.title"
            >
              Pensé pour les workflows institutionnels
            </h3>

            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point1.text"
            >
              Un document adapté aux usages réels : référencement fournisseur, appels
              d’offres, demandes de banques et d’assureurs — avec un résultat lisible
              rapidement.
            </p>
          </div>

          {/* BENEFIT 2 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point2.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
              />
            </svg>

            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point2.title"
            >
              Méthode spend-based transparente
            </h3>

            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point2.text"
            >
              Basé sur les dépenses annuelles (€) et des facteurs d’émission stables.
              Pas d’audit, pas d’enquêtes internes, pas de collecte de données
              opérationnelles.
            </p>
          </div>

          {/* BENEFIT 3 */}
          <div className="flex flex-col items-center gap-4" data-i18n="problem.point3.block">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z"
              />
            </svg>

            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point3.title"
            >
              Format identique pour comparer les fournisseurs
            </h3>

            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point3.text"
            >
              Une structure constante pour comparer des prestataires rapidement, réduire
              l’ambiguïté et accélérer la revue des dossiers.
            </p>
          </div>
        </div>

        {/* LINK */}
        <a
          href="#how-it-works"
          className="block mt-20 text-xs text-center text-[#0B3A63] hover:text-[#1FB6C1] underline"
          data-i18n="problem.link.how"
        >
          Comment l’attestation est générée →
        </a>
      </div>
    </section>
  );
}
