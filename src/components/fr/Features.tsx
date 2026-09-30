"use client";

import Link from "next/link";

const featureItems = [
  {
    id: "01",
    title: "Résultat CO₂e lisible",
    text: "Un résultat agrégé clair, conçu pour être compris immédiatement par un client, un acheteur, une banque ou un partenaire.",
  },
  {
    id: "02",
    title: "Méthode indiquée",
    text: "Une approche spend-based explicitée, avec un cadrage synthétique du périmètre, des hypothèses et du caractère indicatif.",
  },
  {
    id: "03",
    title: "Méthode transparente",
    text: "Les catégories, coefficients internes et limites du calcul sont décrits dans la méthodologie.",
  },
  {
    id: "04",
    title: "Vérification documentaire",
    text: "Un identifiant unique et un bloc de vérification permettant un contrôle simple de l’authenticité du PDF.",
  },
];

export default function FeaturesFR() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F8FAFC] py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="features-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Attestation carbone
          </p>

          <h2 className="features-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl [animation-delay:100ms]">
            Ce que contient votre attestation
          </h2>

          <p className="features-reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg [animation-delay:200ms]">
            Un document conçu pour répondre directement à une demande client,
            un appel d’offres ou un dossier fournisseur.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="space-y-5">
            {featureItems.map((item, index) => (
              <div
                key={item.id}
                className="features-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
                style={{ animationDelay: `${340 + index * 100}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.45),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#1FB6C1]/10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                      {item.id}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="features-reveal rounded-[26px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 md:p-7 [animation-delay:760ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Clarification importante
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#475569] md:text-lg">
                Il s’agit d’une{" "}
                <strong className="font-semibold text-[#0B3A63]">
                  attestation indicative
                </strong>{" "}
                basée sur les dépenses déclarées. Ce document ne constitue ni un
                inventaire GES complet, ni un audit réglementaire, ni un reporting CSRD/ESRS.
              </p>
            </div>
          </div>
        </div>

        <div className="features-reveal mt-14 flex flex-col items-center justify-center gap-4 text-center [animation-delay:860ms]">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Un document prêt à être envoyé immédiatement.
          </p>

          <Link
            href="/fr/product/methodology/"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
          >
            Consulter la méthodologie complète
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

        .features-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .features-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .features-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .features-reveal,
          .features-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
