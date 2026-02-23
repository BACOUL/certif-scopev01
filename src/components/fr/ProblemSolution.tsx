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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4">
            “Bilan carbone” demandé : les PME doivent répondre vite, sans audit ni inventaire complet.
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Acheteurs, banques et assureurs demandent régulièrement des informations CO₂e lors des
            processus d’onboarding, d’achats (procurement) et d’évaluation des risques. Un bilan carbone
            complet (inventaire détaillé) nécessite des données d’activité, du temps, parfois des
            consultants et une vérification — des ressources que la majorité des PME ne peuvent pas
            mobiliser “à la demande”.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-20">
          Certif-Scope fournit un <strong>indicateur CO₂e indicatif</strong> (spend-based : dépenses × facteurs d’émission)
          et génère une <strong>attestation standardisée</strong> prête à partager. Un format clair que les tiers peuvent
          interpréter immédiatement — <strong>vérifiable indépendamment</strong> et utilisable dans les workflows
          institutionnels (achats, banque, assurance, screening ESG).
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Adaptée aux demandes “bilan carbone” en pratique
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Conçue pour fournir un document CO₂e utilisable en onboarding, appels d’offres et
              screening, quand un bilan carbone complet n’est pas exigé explicitement.
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Méthode spend-based claire et déclarée
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Basée sur les dépenses annuelles (€) et des facteurs d’émission. Pas d’audit, pas de
              collecte exhaustive de données d’activité.
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Standardisée et vérifiable
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Une structure identique facilite la lecture et la comparaison. Vérification simple
              par un tiers (document stable, daté, identifiable).
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
