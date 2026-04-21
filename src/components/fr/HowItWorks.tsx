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
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="how-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Fonctionnement
          </p>

          <h2 className="how-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
            Comment obtenir rapidement un document carbone pour votre PME
          </h2>

          <p className="how-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Renseignez vos données, obtenez un calcul indicatif standardisé, puis
            téléchargez une attestation carbone vérifiable prête à transmettre.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          
          {/* LEFT */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="how-card group relative overflow-hidden rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7"
                style={{ animationDelay: `${260 + index * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#1FB6C1]/10 blur-md" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                      {step.id}
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[#0B3A63]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#64748B]">
                  {step.text}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {step.meta.split(" • ").map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-3 py-1 text-xs text-[#0B3A63]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — PRODUIT */}
          <div className="how-visual relative">
            <div className="absolute left-1/2 top-[10%] -z-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#1FB6C1]/10 blur-3xl" />

            <div className="relative rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-8">

              {/* HEADER */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-semibold">
                  Ce que vous recevez
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63]">
                  Attestation carbone prête à transmettre
                </h3>
              </div>

              {/* MOCK DOCUMENT */}
              <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Attestation carbone indicative
                </p>

                <p className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
                  128,4 tCO₂e
                </p>

                <p className="mt-2 text-xs text-[#64748B]">
                  Méthode spend-based • Résultat agrégé
                </p>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">
                    ID : CS-2024-01829
                  </span>
                  <span className="text-[#1FB6C1] font-semibold">
                    ✔ Vérifiable
                  </span>
                </div>
              </div>

              {/* PROOFS */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-3 text-xs text-[#0B3A63]">
                  PDF standardisé
                </div>
                <div className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-3 text-xs text-[#0B3A63]">
                  Réponse rapide
                </div>
                <div className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-3 text-xs text-[#0B3A63]">
                  Sans audit complet
                </div>
              </div>

              {/* FINAL BLOCK */}
              <div className="mt-6 rounded-xl border border-[#1FB6C1]/20 bg-[#1FB6C1]/5 p-4 text-center">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  Document suffisant dans la majorité des demandes
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="how-reveal mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#0B3A63]/80">
            Sans abonnement. Sans mission longue. Sans complexité inutile.
          </p>

          <Link
            href="/fr/generate"
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition hover:-translate-y-0.5 hover:bg-[#19AAB4]"
          >
            Générer mon document CO₂e
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .how-reveal {
          opacity: 0;
          animation: revealUp 0.8s ease forwards;
        }

        .how-card {
          opacity: 0;
          animation: revealUp 0.8s ease forwards;
          transition: all 0.3s ease;
        }

        .how-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11,58,99,0.08);
        }

        .how-visual {
          opacity: 0;
          animation: revealUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
                }
