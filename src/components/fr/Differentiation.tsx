// PATH: src/components/fr/Differentiation.tsx
"use client";

export default function DifferentiationFR() {
  return (
    <section
      id="differentiation"
      className="py-24 bg-white dark:bg-gray-900"
      data-section="differentiation"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE — H2 unique + SEO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug tracking-tight">
          Pourquoi les PME choisissent Certif-Scope pour leur bilan carbone
        </h2>

        {/* INTRO */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope aide les PME à répondre simplement aux demandes de{" "}
          <strong>bilan carbone</strong> et d’empreinte CO₂e formulées par les
          acheteurs, les banques et les assureurs. Vous obtenez une attestation
          standardisée et lisible immédiatement, générée à partir des dépenses
          annuelles — sans audit, sans enquête interne et sans reporting
          technique.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID - 3 BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* BLOCK 1 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Format standardisé
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Une structure identique pour tous : lecture rapide, comparaison
              facilitée entre fournisseurs, et revue plus fluide dans les
              processus institutionnels.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Charge minimale
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Une seule saisie annuelle des dépenses. Aucune donnée d’activité
              (kWh, km, litres), aucune collecte complexe, aucune justification
              répétée.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#15B097] mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-[#0B3A63] dark:text-white">
              Prêt pour la revue
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Conçu pour les équipes achats, banque et assurance : information
              claire, comparable, et directement exploitable pour un dossier
              fournisseur.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Certif-Scope standardise la réponse “bilan carbone fournisseur” et
          réduit la charge administrative des PME, tout en restant compatible
          avec les pratiques de revue des institutions.
        </p>
      </div>
    </section>
  );
}
