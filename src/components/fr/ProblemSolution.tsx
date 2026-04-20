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
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_60%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-16 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="ps-reveal text-xs md:text-sm uppercase tracking-[0.18em] text-[#64748B] font-semibold">
            Comprendre la demande
          </p>

          <h2 className="ps-reveal mt-4 text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight [animation-delay:120ms]">
            Pourquoi on vous demande un bilan carbone
            <br className="hidden md:block" />
            <span> et pourquoi la réponse reste souvent floue</span>
          </h2>

          <p className="ps-reveal mt-6 text-base md:text-lg text-[#475569] leading-relaxed [animation-delay:220ms]">
            Dans la pratique, la demande est réelle, mais le niveau attendu, le format
            et la solution adaptée restent souvent incertains pour les PME.
          </p>
        </div>

        {/* PROBLEMS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item, index) => (
            <div
              key={item.title}
              className="ps-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
              style={{ animationDelay: `${300 + index * 120}ms` }}
            >
              {/* top subtle line */}
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.4),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-lg font-semibold text-[#0B3A63] leading-snug">
                {item.title}
              </h3>

              <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#64748B]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CONSEQUENCE BLOCK */}
        <div className="ps-reveal mt-16 max-w-4xl mx-auto rounded-3xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-7 md:p-10 text-center [animation-delay:420ms]">
          <h3 className="text-xl md:text-2xl font-extrabold text-[#0B3A63] leading-tight">
            Le problème n’est pas toujours l’absence de solution.
          </h3>

          <p className="mt-4 text-base md:text-lg text-[#475569] leading-relaxed">
            C’est souvent l’absence d’une réponse simple, lisible et immédiatement
            exploitable pour répondre à une demande concrète.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3 text-left">
            <div className="rounded-2xl bg-white border border-[#0B3A63]/8 p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Temps perdu
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Recherche de solutions inadaptées ou trop complexes.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#0B3A63]/8 p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Friction commerciale
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Difficulté à répondre clairement à un client ou un acheteur.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#0B3A63]/8 p-4">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Dossiers ralentis
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                Réponses tardives qui freinent ou bloquent une opportunité.
              </p>
            </div>
          </div>
        </div>

        {/* TRANSITION */}
        <div className="ps-reveal mt-14 text-center max-w-3xl mx-auto [animation-delay:520ms]">
          <p className="text-lg md:text-xl font-semibold text-[#0B3A63] leading-relaxed">
            Dans la majorité des cas, ce qui est attendu est simplement un document
            carbone clair, standardisé et rapidement transmissible.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="ps-reveal mt-8 text-center max-w-3xl mx-auto [animation-delay:620ms]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Certif-Scope génère une{" "}
            <strong className="text-[#0B3A63] font-semibold">
              attestation carbone simple, standardisée et vérifiable
            </strong>{" "}
            pour répondre immédiatement à cette demande, sans lancer un audit
            carbone complet.
          </p>
        </div>

        {/* CTA */}
        <div className="ps-reveal mt-12 flex justify-center [animation-delay:720ms]">
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

        @media (prefers-reduced-motion: reduce) {
          .ps-reveal,
          .ps-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
