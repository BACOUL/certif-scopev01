"use client";

import Link from "next/link";

const items = [
  {
    eyebrow: "Onboarding fournisseur",
    title: "Répondre vite à une demande client",
    text: "Un client demande un justificatif CO₂e pendant l’onboarding ou le référencement fournisseur. L’objectif n’est pas toujours un audit complet, mais un document clair, lisible et immédiatement transmissible.",
    role: "Construction — Royaume-Uni",
  },
  {
    eyebrow: "Lecture acheteur",
    title: "Fournir un format standardisé",
    text: "Les équipes achats et conformité ont surtout besoin d’un document cohérent, compréhensible et rapide à relire. Une attestation standardisée facilite cette lecture sans ajout de complexité inutile.",
    role: "E-commerce — Portugal",
  },
  {
    eyebrow: "Demande externe",
    title: "Éviter un processus disproportionné",
    text: "Quand aucune méthodologie détaillée n’est imposée, lancer une mission longue peut être excessif. Une attestation indicative permet de répondre plus vite à une demande opérationnelle réelle.",
    role: "Services professionnels — Italie",
  },
];

export default function TestimonialsFR() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="testi-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Cas d’usage terrain
          </p>

          <h2 className="testi-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
            Dans quels cas les entreprises utilisent
            <br className="hidden md:block" />
            une attestation carbone simple
          </h2>

          <p className="testi-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Exemples illustratifs de situations dans lesquelles une entreprise a
            surtout besoin d’un document carbone clair, standardisé et
            rapidement transmissible.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* LEFT PANEL */}
          <div className="testi-panel relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.08)] md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.55),transparent)]" />
            <div className="absolute left-1/2 top-[12%] -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#1FB6C1]/8 blur-3xl md:h-56 md:w-56" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
              Lecture rapide
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
              La plupart des besoins terrain ne demandent pas toujours une mission lourde
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#64748B] md:text-base">
              Dans beaucoup de situations, l’enjeu principal est de fournir une
              réponse carbone compréhensible, cohérente et exploitable rapidement,
              sans attendre un audit complet.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Demande client ou acheteur
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Répondre à une demande d’onboarding, de référencement fournisseur
                  ou de dossier achat.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Lecture simple du document
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Fournir un format standardisé, lisible et plus facile à relire
                  pour un tiers.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1FB6C1]/20 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-4">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Réponse opérationnelle rapide
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Obtenir un document carbone transmissible sans mission longue,
                  sans abonnement et sans déploiement complexe.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={`testimonial-fr-${idx}-${item.role}`}
                className="testi-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${220 + idx * 120}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.42),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0B3A63]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                  {item.text}
                </p>

                <div className="mt-6 rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-[#0B3A63]">
                  {item.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-reveal mx-auto mt-14 max-w-4xl rounded-[28px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-7 text-center md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Important
          </p>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
            Il s’agit de cas d’usage illustratifs, pas de témoignages clients nominatifs
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Ces exemples reflètent des situations réelles fréquemment rencontrées
            par les PME européennes lorsqu’une preuve carbone est demandée, sans
            constituer des avis clients individualisés.
          </p>
        </div>

        <div className="testi-reveal mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Exemple illustratif uniquement. Document indicatif basé sur les dépenses.
          </p>

          <Link
            href="#attestation-preview"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
          >
            Voir le format de l’attestation
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

        .testi-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .testi-panel {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.12s
            forwards;
        }

        .testi-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .testi-reveal,
          .testi-panel,
          .testi-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
