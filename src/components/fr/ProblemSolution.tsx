// PATH: src/components/fr/ProblemSolution.tsx
"use client";

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="relative pt-24 pb-24 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER SEO FIRST */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mb-5">
            Bilan carbone PME • Obligation • Appels d’offres • Banques
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-5 tracking-tight">
            Le bilan carbone est-il obligatoire pour une PME ?
          </h2>

          <p className="text-lg text-[#475569] leading-relaxed">
            Dans la majorité des cas, non. Les PME ne sont pas soumises à une
            obligation réglementaire stricte de bilan carbone. En pratique,
            cette information est cependant de plus en plus demandée par les
            clients, dans les appels d’offres, ou par les banques et assureurs
            dans le cadre de leurs analyses ESG.
          </p>

          <p className="mt-4 text-lg text-[#475569] leading-relaxed">
            Le problème : réaliser un bilan carbone complet nécessite des données
            détaillées, du temps et souvent un accompagnement spécialisé —
            des ressources que la majorité des PME ne peut pas mobiliser à la demande.
          </p>

          <div className="w-20 h-[2px] bg-[#0B3A63]/12 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <div className="max-w-4xl mx-auto rounded-[28px] border border-[#0B3A63]/10 bg-white/90 shadow-[0_18px_50px_rgba(11,58,99,0.08)] p-8 md:p-10 mb-10 text-center">
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed">
            Certif-Scope permet de répondre rapidement à cette demande avec une{" "}
            <strong className="text-[#0B3A63] font-semibold">
              estimation de bilan carbone PME (CO₂e)
            </strong>{" "}
            basée sur les dépenses annuelles (méthode spend-based). Un document
            standardisé, lisible immédiatement par les équipes achats, banques
            et assureurs —{" "}
            <span className="text-[#1FB6C1] font-semibold">
              vérifiable indépendamment
            </span>{" "}
            et utilisable dans les processus réels.
          </p>
        </div>

        {/* TAKEAWAY SEO */}
        <p className="text-sm text-[#64748B] text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          À retenir : dans la plupart des cas, il s’agit d’un{" "}
          <strong className="text-[#0B3A63] font-semibold">
            indicateur carbone simplifié
          </strong>{" "}
          demandé dans un contexte business — pas d’un audit carbone complet.
        </p>

        {/* INTERNAL LINK SEO */}
        <div className="text-center mb-20">
          <a
            href="/fr/bilan-carbone-pme/"
            className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] shadow-sm transition-colors hover:text-[#1FB6C1] hover:border-[#1FB6C1]/30"
          >
            Guide complet : bilan carbone PME →
          </a>
        </div>

        {/* 3 USE CASES (SEO + CONVERSION) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* CASE 1 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Appels d’offres
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mx-auto">
              De plus en plus de donneurs d’ordre demandent un indicateur
              carbone pour comparer les fournisseurs.
            </p>
          </div>

          {/* CASE 2 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Référencement fournisseur
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mx-auto">
              Les grandes entreprises intègrent des critères ESG dans leurs
              processus de sélection.
            </p>
          </div>

          {/* CASE 3 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.5a3.5 3.5 0 100 7"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Banques et assurances
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mx-auto">
              Les institutions financières demandent des indicateurs carbone
              dans leurs analyses de risque.
            </p>
          </div>
        </div>

        {/* LINK */}
        <div className="text-center mt-20">
          <a
            href="#how-it-works"
            className="inline-flex items-center text-sm font-semibold text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
          >
            Comment obtenir votre document CO₂e →
          </a>
        </div>
      </div>
    </section>
  );
}
