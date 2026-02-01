"use client";

import Link from "next/link";

export default function HowItWorksFR() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* MICRO LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
          data-i18n="howitworks.label"
        >
          Attestation CO₂e — Processus
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
          data-i18n="howitworks.title"
        >
          Comment ça fonctionne
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          data-i18n="howitworks.intro"
        >
          Un processus simple en trois étapes transformant les dépenses annuelles (€)
          en une attestation CO₂e standardisée, utilisée dans les workflows
          d’achats, bancaires, assurantiels et d’analyses ESG.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* STEP 1 */}
          <div className="text-center px-4" data-i18n="howitworks.step1">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Saisissez les dépenses annuelles
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Indiquez les dépenses annuelles par catégories prédéfinies.
              Seules des données financières sont requises — aucune donnée
              opérationnelle, aucun document, aucun audit.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4" data-i18n="howitworks.step2">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Calcul automatique
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Une méthode standardisée basée sur les dépenses est appliquée
              automatiquement pour produire un résultat CO₂e cohérent,
              à partir de sources reconnues de facteurs d’émission.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4" data-i18n="howitworks.step3">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Téléchargez votre attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Recevez instantanément un PDF standardisé présentant un
              résultat CO₂e agrégé, les métadonnées clés et des éléments
              de vérification intégrés, prêts pour revue.
            </p>
          </div>

        </div>

        {/* PRIVACY BY DESIGN — KEY STATEMENT */}
        <p
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          data-i18n="howitworks.privacy.statement"
        >
          Les calculs sont effectués localement dans votre navigateur.
          <br />
          Seul le résultat CO₂e final est transmis pour émettre l’attestation.
        </p>

        {/* SECONDARY CTA — DISCREET */}
        <div className="mt-10 text-center">
          <Link
            href="/generate"
            data-i18n="howitworks.cta"
            className="inline-block text-sm font-medium text-[#0B3A63] underline hover:text-[#1FB6C1] transition"
          >
            Générer une attestation CO₂e →
          </Link>
        </div>

        {/* FOOTER LINE */}
        <p
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          data-i18n="howitworks.footer"
        >
          L’ensemble du processus prend moins d’une minute.
        </p>

      </div>
    </section>
  );
            }
