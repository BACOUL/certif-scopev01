"use client";

export default function TrustFR() {
  return (
    <section
      id="trust"
      data-section="trust"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* MICRO LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wider mb-3"
          data-i18n="trust.label"
        >
          Attestation CO₂e — Fiabilité et crédibilité
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight"
          data-i18n="trust.title"
        >
          Conçue pour l’examen institutionnel et la vérification indépendante
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-i18n="trust.intro"
        >
          Certif-Scope repose sur une structure documentaire fixe, des références de facteurs
          d’émission stables et des éléments de vérification intégrés. Les examinateurs disposent
          d’un document cohérent et comparable entre fournisseurs, réduisant les contrôles manuels
          et les zones d’interprétation.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* ACCEPTANCE */}
        <p
          className="text-sm text-[#0B3A63]/80 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
          data-i18n="trust.acceptance"
        >
          Couramment utilisé pour les phases de présélection en achats, banque,
          assurance et analyses ESG au sein d’organisations européennes.
        </p>

        {/* PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* INTEGRITY */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.integrity"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Intégrité vérifiable
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Chaque attestation intègre des éléments de vérification permettant à un tiers
              de confirmer l’authenticité et l’intégrité du document, sans dépendre de comptes
              utilisateurs, de bases de données ou du stockage de données financières.
            </p>
          </div>

          {/* STRUCTURE */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.structure"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Structure alignée avec les examinateurs
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Les données d’entrée, le résumé méthodologique et les résultats suivent
              une présentation prévisible, conforme aux pratiques d’analyse des équipes
              achats, bancaires et ESG.
            </p>
          </div>

          {/* CONSISTENCY */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.consistency"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Résultats cohérents et comparables
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Des références de facteurs d’émission documentées et stables garantissent
              des résultats comparables d’une évaluation à l’autre, facilitant le
              filtrage institutionnel et les comparaisons automatisées.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p
          className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400"
          data-i18n="trust.footnote"
        >
          Document indicatif basé sur les dépenses — ne constitue ni un rapport CSRD/ESRS,
          ni un inventaire d’émissions audité.
        </p>

      </div>
    </section>
  );
          }
