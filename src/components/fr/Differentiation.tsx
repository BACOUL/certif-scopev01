"use client";

import Link from "next/link";

const valueCards = [
  {
    title: "Réponse rapide au bon niveau",
    text: "Fournissez rapidement un document carbone clair, lisible et directement transmissible.",
  },
  {
    title: "Format standardisé et exploitable",
    text: "Un document conçu pour être compris immédiatement par un client, un acheteur ou un partenaire.",
  },
  {
    title: "Vérification indépendante",
    text: "Chaque attestation intègre un identifiant unique pour une vérification simple et crédible.",
  },
  {
    title: "Sans complexité inutile",
    text: "Pas de mission longue, pas d’abonnement, un parcours simple adapté à un besoin immédiat.",
  },
];

const comparisonRows = [
  {
    label: "Objectif principal",
    certif: "Répondre rapidement à une demande externe",
    audit: "Analyse carbone complète et détaillée",
  },
  {
    label: "Niveau de lourdeur",
    certif: "Parcours simple et immédiat",
    audit: "Projet long avec cadrage complexe",
  },
  {
    label: "Livrable",
    certif: "Attestation carbone standardisée",
    audit: "Bilan carbone complet",
  },
  {
    label: "Usage typique",
    certif: "Client, fournisseur, banque, assurance",
    audit: "Pilotage interne et reporting structuré",
  },
  {
    label: "Temporalité",
    certif: "Réponse rapide",
    audit: "Mission longue",
  },
];

export default function Differentiation() {
  return (
    <section
      id="differentiation"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-12 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="diff-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Différenciation
          </p>

          <h2 className="diff-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
            Une alternative simple quand un audit carbone complet n’est pas nécessaire
          </h2>

          <p className="diff-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Dans de nombreux cas, ce qui est attendu n’est pas une mission longue,
            mais un document carbone clair, standardisé, vérifiable et rapidement transmissible.
          </p>
        </div>

        {/* COMPARISON */}
        <div className="diff-panel mt-16 overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_22px_55px_rgba(11,58,99,0.08)]">

          {/* HEADER */}
          <div className="grid border-b border-[#0B3A63]/8 bg-[#F8FAFC] md:grid-cols-[0.85fr_1.075fr_1.075fr]">

            <div className="hidden border-r border-[#0B3A63]/8 px-6 py-5 md:block" />

            {/* CERTIF */}
            <div className="border-r border-[#1FB6C1]/20 bg-[#1FB6C1]/5 px-6 py-5">
              <span className="inline-block mb-2 rounded-full bg-[#1FB6C1]/10 px-3 py-1 text-[10px] font-semibold text-[#1FB6C1]">
                Recommandé dans la majorité des cas
              </span>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#64748B] font-semibold">
                Certif-Scope
              </p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                Réponse rapide et opérationnelle
              </p>
            </div>

            {/* AUDIT */}
            <div className="px-6 py-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#64748B] font-semibold">
                Audit carbone complet
              </p>
              <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                Approche approfondie
              </p>
            </div>
          </div>

          {/* ROWS */}
          <div className="divide-y divide-[#0B3A63]/8">
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid md:grid-cols-[0.85fr_1.075fr_1.075fr]"
              >
                <div className="border-r border-[#0B3A63]/8 px-6 py-5">
                  <p className="text-sm font-semibold text-[#0B3A63]">
                    {row.label}
                  </p>
                </div>

                <div className="border-r border-[#1FB6C1]/15 bg-[#1FB6C1]/5 px-6 py-5">
                  <p className="text-sm text-[#475569]">
                    {row.certif}
                  </p>
                </div>

                <div className="px-6 py-5">
                  <p className="text-sm text-[#475569]">
                    {row.audit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROOF BLOCK */}
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 text-center">
          <p className="text-sm font-semibold text-[#0B3A63]">
            Exemple de livrable
          </p>
          <p className="mt-2 text-lg font-extrabold text-[#0B3A63]">
            Attestation carbone PDF avec résultat CO₂e, méthode et identifiant vérifiable
          </p>
        </div>

        {/* VALUE CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="diff-card group rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm text-[#64748B]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="diff-reveal mx-auto mt-14 max-w-4xl rounded-[28px] border border-[#1FB6C1]/16 bg-[#1FB6C1]/5 p-7 text-center md:p-9">
          <h3 className="text-2xl font-extrabold text-[#0B3A63]">
            Ce document n’est pas un audit carbone complet
          </h3>

          <p className="mt-4 text-base text-[#475569]">
            Il s’agit d’une attestation carbone indicative basée sur une méthode spend-based.
            Elle ne constitue pas un inventaire GES complet ni un reporting réglementaire.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#0B3A63]/80">
            Un document simple lorsque le besoin réel n’appelle pas une mission lourde.
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

        @keyframes revealScale {
          from { opacity: 0; transform: translateY(18px) scale(0.988); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .diff-reveal {
          opacity: 0;
          animation: revealUp 0.8s ease forwards;
        }

        .diff-panel {
          opacity: 0;
          animation: revealScale 0.95s ease forwards;
        }

        .diff-card {
          opacity: 0;
          animation: revealUp 0.8s ease forwards;
          transition: all 0.3s ease;
        }

        .diff-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11,58,99,0.08);
        }
      `}</style>
    </section>
  );
                }
