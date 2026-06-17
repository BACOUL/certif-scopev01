// PATH: src/components/fr/TrustFR.tsx
"use client";

export default function TrustFR() {
  return (
    <section
      id="trust"
      data-section="trust"
      className="relative py-24 bg-[#F8FAFC]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F3FBFC] -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <p
          className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mb-5"
          data-i18n="trust.label"
        >
          Fiabilité • Vérification documentaire • Banque • Achats • ESG
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight tracking-tight"
          data-i18n="trust.title"
        >
          Un document conçu pour être lu, vérifié et comparé rapidement
        </h2>

        <p
          className="mt-4 text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed"
          data-i18n="trust.intro"
        >
          Certif-Scope fournit un{" "}
          <strong className="text-[#0B3A63] font-semibold">
            document CO₂e standardisé
          </strong>{" "}
          conçu pour les contextes où un client, un acheteur, une banque ou un
          assureur demande un indicateur carbone lisible rapidement. La structure
          est stable, les références méthodologiques sont explicites, et des
          éléments de vérification documentaire sont intégrés pour réduire les zones
          d’interprétation.
        </p>

        <div className="w-20 h-[2px] bg-[#0B3A63]/12 mx-auto my-14" />

        <div className="max-w-4xl mx-auto rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-6 md:p-7 shadow-sm mb-16">
          <p
            className="text-sm md:text-base text-[#475569] leading-relaxed"
            data-i18n="trust.acceptance"
          >
            Ce format est particulièrement adapté aux phases de{" "}
            <strong className="text-[#0B3A63] font-semibold">
              présélection fournisseur
            </strong>
            , d’<strong className="text-[#0B3A63] font-semibold">appel d’offres</strong>,
            de revue bancaire, d’analyse assurantielle et de screening ESG,
            lorsqu’un document carbone simplifié est demandé sans exiger un audit
            complet des émissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="trust.integrity"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                aria-hidden="true"
                className="h-8 w-8 text-[#0B3A63]"
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
            </div>

            <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
              Vérification documentaire
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed">
              Chaque document intègre des éléments permettant de contrôler
              l’authenticité et l’intégrité de l’attestation. Cette vérification
              concerne le document, sans constituer une validation externe du
              résultat carbone.
            </p>
          </div>

          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="trust.structure"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                aria-hidden="true"
                className="h-8 w-8 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
              Structure lisible par les examinateurs
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed">
              Les résultats, la méthodologie, la période et les éléments de
              contexte sont présentés dans un format constant, pensé pour les
              équipes achats, banques, assurances et conformité ESG.
            </p>
          </div>

          <div
            className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm"
            data-i18n="trust.consistency"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                aria-hidden="true"
                className="h-8 w-8 text-[#0B3A63]"
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
            </div>

            <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
              Résultats cohérents et comparables
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed">
              La logique de calcul spend-based et les références d’émission
              documentées permettent d’obtenir des résultats cohérents d’un
              dossier à l’autre, utiles pour comparer rapidement plusieurs
              fournisseurs.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-[20px] border border-[#0B3A63]/10 bg-white/90 p-5 md:p-6 shadow-sm">
          <p
            className="text-center text-xs md:text-sm text-[#64748B] leading-relaxed"
            data-i18n="trust.footnote"
          >
            Document indicatif basé sur les dépenses. Ne constitue ni un rapport
            CSRD/ESRS, ni un inventaire complet des émissions, ni un audit
            réglementaire. Son objectif est de fournir un indicateur carbone
            simple, standardisé et vérifiable dans les contextes où une réponse
            rapide est demandée.
          </p>
        </div>
      </div>
    </section>
  );
}
