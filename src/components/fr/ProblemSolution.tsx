"use client";

import Link from "next/link";

const problems = [
  {
    title: "Demande réelle, niveau attendu flou",
    text: "Un client, un acheteur ou un appel d’offres demande un bilan carbone ou un justificatif CO₂, sans préciser le niveau attendu ni le format exact à fournir.",
  },
  {
    title: "Solutions classiques trop lourdes",
    text: "Les audits carbone complets sont souvent longs, coûteux et disproportionnés par rapport à une demande opérationnelle immédiate.",
  },
  {
    title: "Réponse attendue rapidement",
    text: "Le besoin est souvent simple : répondre vite, transmettre un document clair et ne pas bloquer un dossier ou une opportunité commerciale.",
  },
];

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_60%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-16 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="ps-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Comprendre la demande
          </p>

          <h2 className="ps-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:120ms] md:text-4xl">
            Pourquoi on vous demande un bilan carbone
            <br className="hidden md:block" />
            <span> et pourquoi la réponse reste souvent floue</span>
          </h2>

          <p className="ps-reveal mt-6 text-base leading-relaxed text-[#475569] [animation-delay:220ms] md:text-lg">
            Dans la pratique, la demande est réelle, mais le niveau attendu, le
            format et la solution adaptée restent souvent incertains pour les PME.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item, index) => (
            <div
              key={item.title}
              className="ps-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
              style={{ animationDelay: `${300 + index * 120}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.4),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-lg font-semibold leading-snug text-[#0B3A63]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="ps-reveal mx-auto mt-16 max-w-4xl rounded-3xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-7 text-center [animation-delay:420ms] md:p-10">
          <h3 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
            Le problème n’est pas toujours l’absence de solution.
          </h3>

          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            Le blocage vient souvent du décalage entre une demande imprécise et des
            solutions trop lourdes.
          </p>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Temps perdu
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Recherche de solutions inadaptées ou trop complexes.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Friction commerciale
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Difficulté à répondre clairement à un client ou un acheteur.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Dossiers ralentis
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Réponses tardives qui freinent ou bloquent une opportunité.
              </p>
            </div>
          </div>
        </div>

        <div className="ps-flow mx-auto mt-12 max-w-5xl" style={{ animationDelay: "520ms" }}>
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.52),transparent)]" />
            <div className="absolute left-1/2 top-[18%] -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#1FB6C1]/8 blur-3xl md:h-56 md:w-56" />

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Ce qui est demandé, ce qui bloque, et ce qui est réellement attendu
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
                Demande floue → recherche compliquée → réponse attendue simple
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
                Dans la majorité des cas, il ne s’agit pas de produire une analyse complète,
                mais de répondre efficacement à une demande concrète.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  01 · Demande
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  On vous demande un justificatif carbone
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Client, acheteur, appel d’offres, fournisseur, banque ou assurance.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="flow-arrow">
                  <span className="flow-line" />
                  <span className="flow-dot" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  02 · Friction
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Les solutions classiques paraissent trop lourdes
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Audit complet, mission longue, coût élevé, complexité inutile.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="flow-arrow">
                  <span className="flow-line" />
                  <span className="flow-dot [animation-delay:1.2s]" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#1FB6C1]/30 bg-[linear-gradient(180deg,rgba(31,182,193,0.12)_0%,rgba(31,182,193,0.04)_100%)] shadow-[0_10px_30px_rgba(31,182,193,0.15)] p-5 transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-xs font-semibold text-[#1FB6C1] uppercase tracking-[0.12em]">
                  Réponse attendue
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Un document clair, standardisé et transmissible
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Une réponse lisible, rapide à fournir et exploitable immédiatement.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm">
                Ce niveau de document est généralement suffisant pour répondre aux demandes clients, fournisseurs ou appels d’offres
              </div>
            </div>
          </div>
        </div>

        <div className="ps-reveal mx-auto mt-14 max-w-3xl text-center [animation-delay:620ms]">
          <p className="text-lg font-semibold leading-relaxed text-[#0B3A63] md:text-xl">
            Dans la majorité des cas, ce qui est attendu est simplement un document
            carbone clair, standardisé et rapidement transmissible.
          </p>
        </div>

        <div className="ps-reveal mx-auto mt-8 max-w-3xl text-center [animation-delay:720ms]">
          <p className="text-base leading-relaxed text-[#475569] md:text-lg">
            Certif-Scope génère une{" "}
            <strong className="font-semibold text-[#0B3A63]">
              attestation carbone simple, standardisée et vérifiable
            </strong>{" "}
            pour répondre immédiatement à cette demande, sans lancer un audit
            carbone complet.
          </p>
        </div>

        <div className="ps-reveal mt-12 flex justify-center [animation-delay:820ms]">
          <Link
            href="/fr/generate"
            className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)]"
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

        @keyframes flowPulse {
          0% {
            transform: translateX(-6px);
            opacity: 0.35;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
          100% {
            transform: translateX(-6px);
            opacity: 0.35;
          }
        }

        .ps-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ps-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .ps-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        .ps-flow {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .flow-arrow {
          position: relative;
          width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flow-line {
          display: block;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(11, 58, 99, 0.12) 0%,
            rgba(31, 182, 193, 0.45) 50%,
            rgba(11, 58, 99, 0.12) 100%
          );
        }

        .flow-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          border-radius: 9999px;
          background: #1fb6c1;
          box-shadow: 0 0 0 6px rgba(31, 182, 193, 0.12);
          animation: flowPulse 2.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ps-reveal,
          .ps-card,
          .ps-flow,
          .flow-dot {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
                  }
