// PATH: src/components/fr/ProblemSolution.tsx

export default function ProblemSolutionFR() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-[#F8FAFC]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <p className="uppercase text-xs tracking-wider text-[#0B3A63]/60 mb-3">
            Quand on vous demande un “bilan carbone”
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-6">
            Bilan carbone PME : répondre en minutes, sans audit.
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Dans la majorité des cas, la demande vise un{" "}
            <strong>indicateur CO₂e</strong> et un{" "}
            <strong>document PDF archivable</strong> pour un processus opérationnel
            (appel d’offres, onboarding fournisseur, banque, assurance).
            Quand un inventaire complet n’est pas explicitement exigé,
            la PME doit pouvoir répondre rapidement —{" "}
            <strong>sans immobiliser plusieurs semaines ni mobiliser un cabinet externe</strong>.
          </p>

          <div className="w-20 h-[2px] bg-[#0B3A63]/20 mx-auto mt-10" />
        </header>

        {/* CONTEXTE */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Appels d’offres
              </p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Une rubrique “bilan carbone” apparaît. Un document clair et transmissible
                est demandé dans un délai court.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Fournisseurs / procurement
              </p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Un indicateur CO₂e est requis pour la qualification ou le screening ESG.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Banque / assurance
              </p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Une information carbone est intégrée dans l’évaluation des risques.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-6 text-center leading-relaxed max-w-4xl mx-auto">
            Objectif : produire un document CO₂e lisible, standardisé et immédiatement exploitable.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Certif-Scope propose un{" "}
            <strong>bilan carbone PME simplifié</strong> :
            un <strong>indicateur CO₂e indicatif</strong> (spend-based :
            dépenses × facteurs d’émission) accompagné d’une{" "}
            <strong>attestation PDF standardisée</strong>.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-8 py-8 text-left max-w-xl mx-auto shadow-sm">
            <p className="text-sm font-semibold text-[#0B3A63] mb-4">
              Résultat concret :
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Indicateur CO₂e (tCO₂e)</li>
              <li>• Attestation PDF archivable</li>
              <li>• Identifiant de vérification unique</li>
              <li>• Validité 12 mois</li>
            </ul>
          </div>

          <p className="text-sm text-slate-600 mt-8 leading-relaxed max-w-3xl mx-auto">
            Structure stable et standardisée pour faciliter la lecture par un
            acheteur, une banque ou un assureur. Méthode déclarée.
            Limites explicites. Pas d’ambiguïté.
          </p>
        </div>

        {/* BENEFICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Réponse immédiate
            </h3>

            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Répondre à une demande CO₂e sans lancer un inventaire complet.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-9 4h9" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Méthode transparente
            </h3>

            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Estimation basée sur les dépenses annuelles et des facteurs déclarés.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0B3A63]/5">
              <svg
                className="h-6 w-6 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a3.5 3.5 0 100 7" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Vérification claire
            </h3>

            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Document daté et identifiable, vérifiable par un tiers.
            </p>
          </div>
        </div>

        {/* LIENS */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#how-it-works"
            className="text-xs text-[#0B3A63] hover:text-[#15B097] underline"
          >
            Voir comment c’est généré →
          </a>

          <a
            href="/fr/pricing/"
            className="text-xs text-[#0B3A63] hover:text-[#15B097] underline"
          >
            Voir les tarifs →
          </a>
        </div>
      </div>
    </section>
  );
}
