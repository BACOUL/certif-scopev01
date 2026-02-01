"use client";

export default function FeaturesFR() {
  return (
    <section
      id="features"
      data-section="features"
      className="pt-24 pb-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* EN-TÊTE DE SECTION */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p
            className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
            data-i18n="features.label"
          >
            Attestation CO₂e — Contenu
          </p>

          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
            data-i18n="features.title"
          >
            Contenu de l’attestation CO₂e
          </h2>

          <p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            data-i18n="features.intro"
          >
            Une attestation CO₂e indicative et standardisée, conçue pour les contextes
            d’appels d’offres, bancaires, assurantiels et de screening ESG.
            Chaque document suit une structure fixe et reproductible, fondée exclusivement
            sur les dépenses annuelles déclarées (€).
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* GRILLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* PAGE DE SYNTHÈSE */}
          <div className="flex items-start gap-5" data-i18n="features.summary">
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
                Fiche de synthèse
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Résultat CO₂e agrégé, année de référence, périmètre méthodologique et
                métadonnées essentielles présentés dans un format uniforme,
                prêt pour l’analyse institutionnelle et la comparaison.
              </p>
            </div>
          </div>

          {/* APERÇU MÉTHODOLOGIQUE */}
          <div className="flex items-start gap-5" data-i18n="features.methodology">
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
                Description synthétique de l’approche spend-based appliquée,
                incluant le périmètre, les hypothèses et les références.
                Les détails techniques complets sont documentés séparément.
              </p>
            </div>
          </div>

          {/* SOURCES DES FACTEURS D’ÉMISSION */}
          <div className="flex items-start gap-5" data-i18n="features.sources">
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
                Sources de facteurs d’émission référencées avec version des jeux
                de données et année de publication (ADEME, DEFRA, IPCC),
                garantissant transparence, reproductibilité et acceptation institutionnelle.
              </p>
            </div>
          </div>

          {/* VÉRIFICATION & INTÉGRITÉ */}
          <div className="flex items-start gap-5" data-i18n="features.verification">
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
                Éléments intégrés permettant à des tiers de vérifier
                l’authenticité et l’intégrité du document de manière indépendante,
                sans dépendance à une plateforme ni conservation des données financières.
              </p>
            </div>
          </div>

        </div>

        {/* LIEN INTERNE */}
        <div className="text-center mt-14">
          <a
            href="/fr/product/methodology"
            data-i18n="features.link.methodology"
            className="text-[#0B3A63] dark:text-gray-300 underline text-sm hover:text-[#1FB6C1]"
          >
            Consulter la méthodologie complète →
          </a>
        </div>

        {/* AVERTISSEMENT */}
        <p
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          data-i18n="features.disclaimer"
        >
          Estimation indicative basée sur les dépenses.
          Ne constitue ni un rapport CSRD/ESRS ni un inventaire GES audité.
          Les résultats dépendent exclusivement des données financières déclarées par l’utilisateur.
        </p>

      </div>
    </section>
  );
}
