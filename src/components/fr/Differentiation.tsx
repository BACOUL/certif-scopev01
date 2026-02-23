"use client";

import Link from "next/link";

export default function DifferentiationFR() {
  return (
    <section
      id="differentiation"
      className="py-24 bg-white dark:bg-gray-900"
      data-section="differentiation"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE — H2 unique + SEO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug">
          Un bilan carbone PME utilisable en pratique : indicateur CO₂e + document vérifiable
        </h2>

        {/* INTRO */}
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Certif-Scope aide les PME à répondre aux demandes “bilan carbone” qui arrivent dans les
          appels d’offres, l’onboarding fournisseurs, et les dossiers banque / assurance. Le service
          produit un indicateur CO₂e indicatif (spend-based : dépenses × facteurs d’émission) et une
          attestation standardisée — sans inventaire complet, sans audit, sans collecte de données
          opérationnelles.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* BLOCK 1 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#1FB6C1] mb-4"
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
              Format standard, lisible, archivable
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Un document CO₂e identique d’une entreprise à l’autre : lecture rapide, comparaison
              facilitée, et intégration simple dans un dossier (achats, banque, assurance).
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#1FB6C1] mb-4"
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
              Charge minimale pour la PME
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Une saisie annuelle des dépenses suffit. Pas de données physiques, pas d’enquête
              interne lourde, pas de justificatifs à produire “au cas par cas”.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="max-w-xs mx-auto flex flex-col items-center text-center">
            <svg
              className="h-12 w-12 text-[#1FB6C1] mb-4"
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
              Vérifiable indépendamment
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Un tiers peut contrôler l’authenticité du document (identifiant, page de vérification)
              et constater qu’il n’a pas été modifié, sans dépendre d’un échange email.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Objectif : répondre aux demandes “bilan carbone” quand il s’agit d’un besoin de screening
          et de documentation. Si un audit ou un inventaire complet est exigé explicitement, ce
          document indicatif n’est pas le bon niveau d’assurance.
        </p>

        {/* CTA LINKS (small, consistent colors) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/fr/generate"
            className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white font-semibold hover:opacity-95 transition"
            aria-label="Calculer un indicateur CO₂e indicatif"
          >
            Calculer l’indicateur CO₂e
          </Link>

          <Link
            href="/fr/why-companies-ask/preuve-carbone-entreprise"
            className="inline-flex items-center justify-center text-sm px-5 py-2.5 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            aria-label="Comprendre le format de preuve CO₂e"
          >
            Comprendre la “preuve carbone”
          </Link>
        </div>
      </div>
    </section>
  );
}
