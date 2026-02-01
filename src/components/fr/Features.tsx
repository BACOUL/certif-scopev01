"use client";

export default function Features() {
  return (
    <section
      id="features"
      data-section="features"
      className="pt-24 pb-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER — HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p
            className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
          >
            Attestation CO₂e — Contenu
          </p>

          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
          >
            Ce que contient l’attestation CO₂e
          </h2>

          <p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Une attestation CO₂e indicative et standardisée, conçue pour les contextes
            d’appels d’offres, de financement bancaire, d’assurance et de screening ESG.
            Chaque document suit une structure fixe et reproductible, dérivée exclusivement
            des dépenses annuelles déclarées (€).
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* SUMMARY PAGE */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Page de synthèse
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Résultat CO₂e agrégé, année de référence, périmètre méthodologique et métadonnées
                essentielles présentés dans un format uniforme, prêt à être examiné et comparé
                par des institutions.
              </p>
            </div>
          </div>

          {/* METHODOLOGY OVERVIEW */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Aperçu de la méthodologie
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Description synthétique de l’approche « spend-based » appliquée, incluant
                le périmètre, les hypothèses et les références utilisées. Les détails
                techniques et formules complètes sont documentés séparément.
              </p>
            </div>
          </div>

          {/* EMISSION FACTOR SOURCES */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Sources des facteurs d’émission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Références explicites des bases de facteurs d’émission utilisées, avec version
                des jeux de données et année de publication (ADEME, DEFRA, IPCC), garantissant
                transparence, reproductibilité et acceptation institutionnelle.
              </p>
            </div>
          </div>

          {/* VERIFICATION & INTEGRITY */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Bloc de vérification et d’intégrité
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Des éléments de vérification intégrés permettent à un tiers de contrôler
                l’authenticité et l’intégrité du document, sans dépendance à la plateforme
                ni conservation des données. Aucune donnée financière détaillée n’est stockée.
              </p>
            </div>
          </div>

        </div>

        {/* INTERNAL LINK */}
        <div className="text-center mt-14">
          <a
            href="/product/methodology"
            className="text-[#0B3A63] dark:text-gray-300 underline text-sm hover:text-[#1FB6C1]"
          >
            Consulter la méthodologie complète →
          </a>
        </div>

        {/* DISCLAIMER */}
        <p
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Estimation indicative basée sur les dépenses. Ce document n’est ni conforme CSRD/ESRS,
          ni un inventaire GES audité. Les résultats dépendent exclusivement des données
          financières déclarées par l’utilisateur.
        </p>

      </div>
    </section>
  );
        }
