"use client";

import Link from "next/link";

const steps = [
  {
    id: "01",
    eyebrow: "Entrée",
    title: "Vous renseignez vos données",
    text: "Indiquez vos dépenses annuelles, l’année concernée et quelques informations générales sur votre PME pour lancer le calcul.",
    meta: "Données déclarées • Traitement local • Saisie simple",
  },
  {
    id: "02",
    eyebrow: "Calcul",
    title: "Le moteur applique une méthode standardisée",
    text: "Le calcul utilise une méthode indicative spend-based fondée sur des référentiels reconnus pour produire un résultat CO₂e cohérent et lisible.",
    meta: "Méthode indicative • Standardisation • Résultat agrégé",
  },
  {
    id: "03",
    eyebrow: "Sortie",
    title: "Vous obtenez un document prêt à transmettre",
    text: "Téléchargez une attestation carbone PDF, standardisée et vérifiable, utile pour une demande client, un dossier fournisseur ou un besoin de réponse rapide.",
    meta: "PDF • ID unique • Vérification indépendante",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[480px] bg-[radial-gradient(circle_at_top,rgba(31,182,193,0.08),transparent_60%)]" />
      <div className="absolute left-[-7%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-5%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="how-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Fonctionnement
          </p>

          <h2 className="how-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:100ms] md:text-4xl">
            Comment obtenir rapidement un document carbone pour votre PME
          </h2>

          <p className="how-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] [animation-delay:200ms] md:text-lg">
            Renseignez vos données, obtenez un calcul indicatif standardisé, puis
            téléchargez une attestation carbone vérifiable pour répondre à une
            demande client, un appel d’offres ou un besoin fournisseur.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="how-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
                style={{ animationDelay: `${260 + index * 120}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.45),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#1FB6C1]/10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                      {step.id}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold leading-snug text-[#0B3A63] md:text-[1.08rem]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                  {step.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {step.meta.split(" • ").map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1.5 text-[11px] font-medium text-[#0B3A63] md:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="how-visual relative"
            style={{ animationDelay: "340ms" }}
          >
            <div className="absolute left-1/2 top-[8%] -z-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#1FB6C1]/10 blur-3xl md:h-[430px] md:w-[430px]" />
            <div className="absolute left-1/2 top-[22%] -z-20 h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-[#0B3A63]/7 blur-3xl md:h-[320px] md:w-[640px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_22px_55px_rgba(11,58,99,0.10)] md:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.55),transparent)]" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
                    Flux simplifié
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63] md:text-2xl">
                    Données → Calcul → Attestation
                  </h3>
                </div>

                <div className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1.5 text-[11px] font-medium text-[#0B3A63] md:text-xs">
                  Réponse rapide
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    01 · Données
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                    Dépenses annuelles et informations de base
                  </p>
                </div>

                <div className="flow-arrow hidden items-center justify-center md:flex">
                  <span className="flow-dot" />
                  <span className="flow-line" />
                </div>

                <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    02 · Calcul
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                    Méthode indicative spend-based standardisée
                  </p>
                </div>

                <div className="flow-arrow hidden items-center justify-center md:flex">
                  <span className="flow-dot [animation-delay:1.2s]" />
                  <span className="flow-line" />
                </div>

                <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    03 · Attestation
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                    PDF vérifiable, clair et prêt à transmettre
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#0B3A63]/8 bg-[#F8FAFC] p-4">
                  <p className="text-sm font-semibold text-[#0B3A63]">
                    Sans mission longue
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    Le parcours reste court, lisible et adapté à une réponse
                    opérationnelle.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0B3A63]/8 bg-[#F8FAFC] p-4">
                  <p className="text-sm font-semibold text-[#0B3A63]">
                    Sans abonnement
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    Vous obtenez un document standardisé sans engagement long ni
                    déploiement complexe.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0B3A63]/8 bg-[#F8FAFC] p-4">
                  <p className="text-sm font-semibold text-[#0B3A63]">
                    Vérification tierce
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    Le document comporte un identifiant unique pour une lecture
                    simple et vérifiable.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-4 md:p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Résultat attendu
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Une attestation carbone indicative, standardisée et vérifiable,
                  conçue pour répondre plus vite à une demande client, un dossier
                  fournisseur ou une exigence externe sans lancer un audit complet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="how-reveal mt-16 flex flex-col items-center justify-center gap-4 text-center [animation-delay:540ms]">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Sans abonnement. Sans mission longue. Sans complexité inutile.
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
            transform: translateY(18px) scale(0.985);
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

        .how-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .how-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .how-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.09);
          border-color: rgba(11, 58, 99, 0.14);
        }

        .how-visual {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .flow-arrow {
          width: 44px;
          position: relative;
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
          .how-reveal,
          .how-card,
          .how-visual,
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
