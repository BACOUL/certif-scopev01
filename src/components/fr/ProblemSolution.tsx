export default function ProblemSolutionFR() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER — HOME FR */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4"
          >
            Les PME sont de plus en plus sollicitées pour fournir des données CO₂e — sans avoir les moyens d’y répondre.
          </h2>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Acheteurs, banques et assureurs demandent régulièrement des indicateurs CO₂e
            lors des processus d’onboarding, de procurement et d’évaluation des risques.
            Produire un inventaire carbone complet nécessite des données d’activité détaillées,
            des consultants et des audits — des ressources que la majorité des PME ne peuvent
            mobiliser à la demande.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-20"
        >
          Certif-Scope fournit une attestation CO₂e indicative instantanée,
          basée sur les dépenses annuelles. Un format standardisé que les tiers
          peuvent interpréter immédiatement — vérifiable indépendamment et utilisable
          dans les workflows institutionnels.
        </p>

        {/* 3 BENEFICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

          {/* BENEFICE 1 */}
          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Alignée avec les processus institutionnels
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Conçue pour les processus de procurement, bancaires et assurantiels
              nécessitant des valeurs CO₂e rapides et indicatives.
            </p>
          </div>

          {/* BENEFICE 2 */}
          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Méthode transparente basée sur les dépenses
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Utilise les dépenses annuelles (€) et des facteurs d’émission stables.
              Aucun audit, questionnaire ou donnée opérationnelle requis.
            </p>
          </div>

          {/* BENEFICE 3 */}
          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Cohérente entre fournisseurs
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Une structure identique permet une comparaison rapide entre prestataires,
              réduisant l’ambiguïté et le temps de revue.
            </p>
          </div>

        </div>

        {/* LIEN */}
        <a
          href="#how-it-works"
          className="block mt-20 text-xs text-center text-[#0B3A63] hover:text-[#1FB6C1] underline"
        >
          Comment l’attestation est générée →
        </a>

      </div>
    </section>
  );
}
