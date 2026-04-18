// PATH: src/components/fr/Differentiation.tsx
"use client";

export default function DifferentiationFR() {
  return (
    <section
      id="differentiation"
      className="relative py-24 bg-white"
      data-section="differentiation"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F3FBFC] -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* MICRO LABEL */}
        <p className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm mb-5">
          Différenciation • PME • Appels d’offres • Banques
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug tracking-tight">
          Pourquoi les PME choisissent Certif-Scope plutôt qu’un bilan carbone complet
        </h2>

        {/* INTRO */}
        <p className="mt-5 text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
          Certif-Scope aide les PME à répondre rapidement à une demande de{" "}
          <strong className="text-[#0B3A63] font-semibold">
            bilan carbone PME
          </strong>{" "}
          ou d’indicateur CO₂e formulée par un client, un acheteur, une banque
          ou un assureur. Vous obtenez un{" "}
          <strong className="text-[#0B3A63] font-semibold">
            document standardisé
          </strong>{" "}
          lisible immédiatement, généré à partir des dépenses annuelles — sans
          audit, sans collecte complexe de données d’activité et sans mission de
          conseil longue.
        </p>

        <div className="w-20 h-[2px] bg-[#0B3A63]/12 mx-auto my-14" />

        {/* COMPARISON INTRO */}
        <div className="max-w-4xl mx-auto rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-6 md:p-7 shadow-sm mb-16">
          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            Lorsqu’une PME doit répondre vite à une demande fournisseur, à un
            appel d’offres ou à une revue bancaire, l’enjeu n’est pas toujours
            de lancer un inventaire carbone complet. Dans de nombreux cas, il
            faut surtout fournir un{" "}
            <strong className="text-[#0B3A63] font-semibold">
              document carbone simple, cohérent et vérifiable
            </strong>{" "}
            dans un délai court.
          </p>
        </div>

        {/* GRID - 3 BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* BLOCK 1 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
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
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Format standardisé
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Une structure identique pour tous les dossiers : lecture plus
              rapide, comparaison facilitée entre fournisseurs, et revue plus
              fluide dans les processus achats, banque et assurance.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
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
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Charge minimale pour la PME
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Une seule saisie des dépenses annuelles. Pas de collecte de kWh,
              kilomètres ou litres, pas d’enquêtes internes longues, pas
              d’itérations avec un cabinet.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3FBFC] border border-[#0B3A63]/10">
              <svg
                className="h-8 w-8 text-[#0B3A63]"
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
            </div>

            <h3 className="text-xl font-semibold text-[#0B3A63]">
              Prêt pour la revue institutionnelle
            </h3>

            <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
              Conçu pour les équipes achats, banques, assurances et conformité :
              information claire, comparable et directement exploitable dans un
              dossier fournisseur ou une revue ESG.
            </p>
          </div>
        </div>

        {/* DIFFERENTIATION TAKEAWAY */}
        <div className="mt-16 max-w-4xl mx-auto rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-6 md:p-7 shadow-sm">
          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            <strong className="text-[#0B3A63] font-semibold">
              Certif-Scope n’a pas vocation à remplacer un bilan carbone complet
            </strong>
            {" "}lorsqu’un cadre réglementaire ou contractuel détaillé l’exige.
            Son rôle est de fournir une réponse{" "}
            <span className="text-[#1FB6C1] font-semibold">
              rapide, standardisée et vérifiable
            </span>{" "}
            lorsque la priorité est de transmettre un indicateur carbone lisible
            sans immobiliser la PME pendant plusieurs semaines.
          </p>
        </div>

        {/* FOOTER */}
        <p className="mt-12 text-sm md:text-base text-[#64748B] max-w-3xl mx-auto leading-relaxed">
          Certif-Scope standardise la réponse “bilan carbone fournisseur” et
          réduit la charge administrative des PME, tout en restant compatible
          avec les pratiques de revue des clients, acheteurs, banques et
          assureurs.
        </p>
      </div>
    </section>
  );
}
