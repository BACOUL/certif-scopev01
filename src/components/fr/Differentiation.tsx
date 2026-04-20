"use client";

import Link from "next/link";

const valueCards = [
  {
    title: "Réponse rapide au bon niveau",
    text: "Certif-Scope permet de fournir rapidement un document carbone clair lorsque la demande porte surtout sur une preuve simple, lisible et transmissible.",
  },
  {
    title: "Format standardisé et exploitable",
    text: "Le document est conçu pour être compris plus facilement par un client, un acheteur, une banque, un assureur ou un dossier fournisseur.",
  },
  {
    title: "Vérification indépendante",
    text: "Chaque attestation comporte un identifiant unique et une logique de vérification tierce pour renforcer la lisibilité et la crédibilité du document.",
  },
  {
    title: "Sans complexité inutile",
    text: "Pas de mission longue, pas d’abonnement, pas de déploiement lourd : le parcours reste adapté à un besoin opérationnel immédiat.",
  },
];

const comparisonRows = [
  {
    label: "Objectif principal",
    certif: "Répondre rapidement à une demande externe",
    audit: "Établir une analyse carbone complète et détaillée",
  },
  {
    label: "Niveau de lourdeur",
    certif: "Parcours simple et immédiat",
    audit: "Projet plus long avec cadrage plus lourd",
  },
  {
    label: "Livrable",
    certif: "Attestation carbone standardisée",
    audit: "Étude ou bilan carbone complet",
  },
  {
    label: "Usage typique",
    certif: "Client, fournisseur, banque, assurance, dossier",
    audit: "Pilotage complet, audit approfondi, reporting structuré",
  },
  {
    label: "Temporalité",
    certif: "Réponse rapide",
    audit: "Mission plus longue",
  },
];

export default function Differentiation() {
  return (
    <section
      id="differentiation"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-12 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="diff-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Différenciation
          </p>

          <h2 className="diff-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:100ms] md:text-4xl">
            Une réponse simple quand un audit carbone complet
            <br className="hidden md:block" />
            n’est pas toujours nécessaire
          </h2>

          <p className="diff-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] [animation-delay:200ms] md:text-lg">
            Dans de nombreux cas, ce qui est attendu n’est pas une mission longue
            ou un inventaire exhaustif, mais un document carbone clair,
            standardisé, vérifiable et rapidement transmissible.
          </p>
        </div>

        <div
          className="diff-panel mt-16 overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_22px_55px_rgba(11,58,99,0.08)]"
          style={{ animationDelay: "320ms" }}
        >
          <div className="grid border-b border-[#0B3A63]/8 bg-[#F8FAFC] md:grid-cols-[0.85fr_1.075fr_1.075fr]">
            <div className="hidden border-r border-[#0B3A63]/8 px-6 py-5 md:block" />

            <div className="border-r border-[#0B3A63]/8 px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
                Certif-Scope
              </p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                Réponse rapide et opérationnelle
              </p>
            </div>

            <div className="px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
                Audit carbone complet
              </p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                Approche plus approfondie
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#0B3A63]/8">
            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className="grid bg-white transition-colors duration-300 hover:bg-[#F8FAFC] md:grid-cols-[0.85fr_1.075fr_1.075fr]"
                style={{ animationDelay: `${420 + index * 80}ms` }}
              >
                <div className="border-r border-[#0B3A63]/8 px-6 py-5">
                  <p className="text-sm font-semibold text-[#0B3A63]">
                    {row.label}
                  </p>
                </div>

                <div className="border-r border-[#0B3A63]/8 px-6 py-5">
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {row.certif}
                  </p>
                </div>

                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {row.audit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card, index) => (
            <div
              key={card.title}
              className="diff-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
              style={{ animationDelay: `${520 + index * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.42),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-lg font-semibold leading-snug text-[#0B3A63]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="diff-reveal mx-auto mt-14 max-w-4xl rounded-[28px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-7 text-center md:p-9 [animation-delay:720ms]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Clarification importante
          </p>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
            Certif-Scope n’est pas un audit carbone complet.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Il s’agit d’une{" "}
            <strong className="font-semibold text-[#0B3A63]">
              attestation carbone indicative
            </strong>{" "}
            fondée sur une méthode spend-based, conçue pour répondre plus vite à
            une demande externe. Elle ne constitue pas un inventaire GES complet,
            un audit réglementaire ni un reporting CSRD/ESRS.
          </p>
        </div>

        <div className="diff-reveal mt-12 flex flex-col items-center justify-center gap-4 text-center [animation-delay:820ms]">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Un document plus simple lorsque le besoin réel n’appelle pas une
            mission plus lourde.
          </p>

          <Link
            href="/fr/generate"
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)]"
          >
            Générer mon document CO₂e
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealScale {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.988);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .diff-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .diff-panel {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .diff-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .diff-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .diff-reveal,
          .diff-panel,
          .diff-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
