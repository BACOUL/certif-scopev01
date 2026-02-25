// PATH: src/components/fr/ProblemSolution.tsx

export default function ProblemSolutionFR() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER — HOME FR */}
        <header className="max-w-4xl mx-auto text-center mb-14">
          <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
            Quand on vous demande un “bilan carbone”
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4">
            Bilan carbone PME : répondre en minutes, sans audit.
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            La demande “bilan carbone entreprise” vise généralement un{" "}
            <strong>indicateur CO₂e</strong> et un <strong>document PDF archivable</strong>
            pour des processus concrets (achats, onboarding fournisseur, banque, assurance).
            Quand le délai et le coût d’un bilan carbone complet ne sont pas compatibles,
            une PME doit pouvoir répondre rapidement —{" "}
            <strong>sans immobiliser plusieurs semaines ni mobiliser un cabinet externe</strong>.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* CONTEXTE OPERATIONNEL */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white dark:bg-gray-900 p-6">
              <p className="text-sm font-semibold text-[#0B3A63] dark:text-white">
                Appels d’offres
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                Une rubrique “bilan carbone” apparaît. Il faut fournir un document clair
                et transmissible rapidement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white dark:bg-gray-900 p-6">
              <p className="text-sm font-semibold text-[#0B3A63] dark:text-white">
                Fournisseurs / procurement
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                Un indicateur CO₂e est demandé pour la qualification ou le screening ESG.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white dark:bg-gray-900 p-6">
              <p className="text-sm font-semibold text-[#0B3A63] dark:text-white">
                Banque / assurance
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                Une information CO₂e est demandée dans l’évaluation des risques.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-gray-400 mt-4 text-center leading-relaxed max-w-4xl mx-auto">
            Objectif : produire un document CO₂e lisible, standardisé et immédiatement exploitable.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope propose un <strong>bilan carbone PME simplifié</strong> :
            un <strong>indicateur CO₂e indicatif</strong> (spend-based : dépenses × facteurs d’émission)
            accompagné d’une <strong>attestation PDF standardisée</strong>.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white dark:bg-gray-900 px-6 py-6 text-left max-w-xl mx-auto">
            <p className="text-sm font-semibold text-[#0B3A63] dark:text-white mb-3">
              Résultat concret :
            </p>

            <ul className="space-y-2 text-sm text-slate-700 dark:text-gray-300">
              <li>• Indicateur CO₂e (tCO₂e)</li>
              <li>• Attestation PDF archivable</li>
              <li>• Identifiant de vérification unique</li>
              <li>• Validité 12 mois</li>
            </ul>
          </div>

          <p className="text-sm text-slate-600 dark:text-gray-400 mt-6 leading-relaxed max-w-3xl mx-auto">
            Structure stable et standardisée pour faciliter la lecture par un acheteur,
            une banque ou un assureur. Le document est conçu pour être compris
            immédiatement, avec une méthode déclarée et des limites explicites.
          </p>
        </div>

        {/* 3 BENEFICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-12 w-12 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Réponse immédiate
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              Permet de répondre rapidement à une demande CO₂e sans lancer un inventaire complet.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-12 w-12 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Méthode transparente
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              Estimation basée sur les dépenses annuelles et des facteurs d’émission déclarés.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-12 w-12 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7" />
            </svg>
            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Vérification claire
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              PDF daté et identifiable, vérifiable simplement par un tiers.
            </p>
          </div>
        </div>

        {/* LIENS */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#how-it-works"
            className="text-xs text-[#0B3A63] hover:text-[#1FB6C1] underline"
          >
            Voir comment c’est généré →
          </a>

          <a
            href="/fr/why-companies-ask/attestation-carbone-pme/"
            className="text-xs text-[#0B3A63] hover:text-[#1FB6C1] underline"
          >
            Voir un exemple d’usage PME →
          </a>
        </div>
      </div>
    </section>
  );
}
