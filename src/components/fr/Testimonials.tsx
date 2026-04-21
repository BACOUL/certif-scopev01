// PATH: src/components/fr/Testimonials.tsx
"use client";

import Link from "next/link";

const useCases = [
  {
    id: "01",
    title: "Demande client ou onboarding fournisseur",
    text: "Un client, un acheteur ou une plateforme fournisseur demande un justificatif CO₂e. L’objectif est de répondre rapidement avec un document clair, cohérent et directement transmissible.",
    ctaLabel: "Cas fournisseur",
    ctaHref: "/fr/bilan-carbone-pme",
  },
  {
    id: "02",
    title: "Appel d’offres ou dossier achat",
    text: "Le dossier mentionne un critère carbone, mais sans exiger un audit détaillé. Une attestation standardisée permet de répondre au bon niveau sans mission lourde.",
    ctaLabel: "Cas appel d’offres",
    ctaHref: "/fr/bilan-carbone-appel-offres",
  },
  {
    id: "03",
    title: "Lecture, vérification et transmission",
    text: "Le besoin final est souvent simple : obtenir un PDF lisible, avec un résultat agrégé, une méthode indiquée et un identifiant vérifiable par un tiers.",
    ctaLabel: "Vérifier un document",
    ctaHref: "/fr/verify",
  },
];

export default function TestimonialsFR() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="cases-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Cas d’usage
          </p>

          <h2 className="cases-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl [animation-delay:100ms]">
            Dans quels cas une entreprise utilise ce document
          </h2>

          <p className="cases-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg [animation-delay:200ms]">
            Des situations fréquentes où l’enjeu n’est pas de lancer un audit complet,
            mais de fournir rapidement une réponse carbone claire, standardisée et utilisable.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* LEFT — PRIMARY SCENARIO */}
          <div className="cases-main relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_24px_60px_rgba(11,58,99,0.10)] md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.55),transparent)]" />
            <div className="absolute left-1/2 top-[12%] -z-10 h-44 w-44 -translate-x-1/2 rounded-full bg-[#1FB6C1]/8 blur-3xl md:h-56 md:w-56" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Projection concrète
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
              Demande externe → blocage potentiel → réponse prête à transmettre
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Dans beaucoup de cas, la question n’est pas “faut-il un audit complet ?”,
              mais “quel document faut-il envoyer maintenant pour répondre correctement ?”.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  01 · Situation
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Une demande carbone arrive
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Client, plateforme fournisseur, banque, assureur ou appel d’offres.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="cases-arrow">
                  <span className="cases-line" />
                  <span className="cases-dot" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  02 · Blocage
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Les réponses classiques sont trop lourdes
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Audit complet, mission longue, complexité disproportionnée, manque de format clair.
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="cases-arrow">
                  <span className="cases-line" />
                  <span className="cases-dot [animation-delay:1.2s]" />
                </div>
              </div>

              <div className="rounded-2xl border border-[#1FB6C1]/20 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  03 · Réponse
                </p>
                <p className="mt-2 text-base font-semibold text-[#0B3A63]">
                  Un document standardisé et transmissible
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Attestation carbone lisible, résultat agrégé, méthode indiquée, vérification possible.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-[#0B3A63]/12 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] md:text-sm">
                Réponse rapide
              </span>
              <span className="rounded-full border border-[#0B3A63]/12 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] md:text-sm">
                Format lisible
              </span>
              <span className="rounded-full border border-[#0B3A63]/12 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] md:text-sm">
                Vérification tierce
              </span>
            </div>
          </div>

          {/* RIGHT — USE CASES */}
          <div className="grid gap-6">
            {useCases.map((item, index) => (
              <div
                key={item.id}
                className="cases-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
                style={{ animationDelay: `${240 + index * 120}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.42),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#1FB6C1]/10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                      {item.id}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-[#0B3A63] md:text-[1.06rem]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                      {item.text}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={item.ctaHref}
                        className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                      >
                        {item.ctaLabel} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="cases-reveal mx-auto mt-14 max-w-4xl rounded-[28px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-7 text-center md:p-9 [animation-delay:760ms]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Important
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Ces cas d’usage illustrent des situations fréquentes rencontrées par les PME.
            Ils montrent quand une{" "}
            <strong className="font-semibold text-[#0B3A63]">
              attestation carbone indicative
            </strong>{" "}
            constitue une réponse adaptée, sans se substituer à un audit carbone complet.
          </p>
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

        .cases-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .cases-main {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.12s
            forwards;
        }

        .cases-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .cases-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        .cases-arrow {
          position: relative;
          width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cases-line {
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

        .cases-dot {
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
          .cases-reveal,
          .cases-main,
          .cases-card,
          .cases-dot {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
