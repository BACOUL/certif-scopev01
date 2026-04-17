// PATH: src/components/fr/HowItWorks.tsx
"use client";

import Link from "next/link";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="relative py-24 bg-[#F8FAFC]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F3FBFC] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* MICRO LABEL */}
        <p
          className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mx-auto mb-5"
          data-i18n="howitworks.label"
        >
          Bilan carbone PME • Processus • Méthode spend-based
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63] tracking-tight"
          data-i18n="howitworks.title"
        >
          Comment faire un bilan carbone PME rapidement ?
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-center text-[#475569] max-w-3xl mx-auto text-lg leading-relaxed"
          data-i18n="howitworks.intro"
        >
          Certif-Scope permet d’obtenir un{" "}
          <strong className="text-[#0B3A63] font-semibold">
            document CO₂e standardisé
          </strong>{" "}
          en 3 étapes simples. Le processus est conçu pour les PME qui doivent
          répondre vite à une demande client, un appel d’offres ou un dossier
          bancaire, sans lancer un audit carbone complet.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-[#0B3A63]/12 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* STEP 1 */}
          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="howitworks.step1"
          >
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Renseignez vos dépenses annuelles
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Indiquez vos dépenses par catégories prédéfinies. Seules des
              informations financières sont nécessaires : pas de données
              d’activité, pas de documents techniques, pas d’audit préalable.
            </p>
          </div>

          {/* STEP 2 */}
          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="howitworks.step2"
          >
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Calcul automatique du résultat CO₂e
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              La méthode spend-based applique automatiquement la formule{" "}
              <strong className="text-[#0B3A63] font-semibold">
                dépenses € × facteur d’émission
              </strong>{" "}
              pour produire un résultat carbone agrégé cohérent à partir de
              sources reconnues.
            </p>
          </div>

          {/* STEP 3 */}
          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="howitworks.step3"
          >
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Téléchargez votre document standardisé
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Recevez un PDF prêt à transmettre, avec résultat CO₂e agrégé,
              métadonnées essentielles et éléments de vérification, dans un
              format lisible par les équipes achats, banques et assureurs.
            </p>
          </div>
        </div>

        {/* PRIVACY / KEY MESSAGE */}
        <div className="mt-12 max-w-3xl mx-auto rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-6 md:p-7 shadow-sm text-center">
          <p
            className="text-sm text-[#475569] leading-relaxed"
            data-i18n="howitworks.privacy.statement"
          >
            <strong className="text-[#0B3A63] font-semibold">
              Privacy by design :
            </strong>{" "}
            les calculs sont effectués localement dans votre navigateur. Les
            dépenses détaillées ne sont pas envoyées. Seul le résultat CO₂e
            agrégé final est transmis pour émettre l’attestation.
          </p>
        </div>

        {/* SECONDARY CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/fr/generate/"
            data-i18n="howitworks.cta"
            className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:text-[#1FB6C1] hover:border-[#1FB6C1]/30"
          >
            Générer mon document CO₂e →
          </Link>
        </div>

        {/* FOOTER LINE */}
        <p
          className="mt-12 text-center text-sm text-[#64748B]"
          data-i18n="howitworks.footer"
        >
          La génération se fait en quelques minutes, selon vos informations.
        </p>
      </div>
    </section>
  );
}
