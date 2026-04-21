// PATH: src/components/fr/Pricing.tsx
"use client";

import Link from "next/link";

export default function PricingFR() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="price-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Prix
          </p>

          <h2 className="price-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
            Un prix simple pour un document immédiatement utilisable
          </h2>

          <p className="price-reveal mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
            Dans la majorité des cas, l’objectif est de fournir rapidement un document carbone clair,
            sans lancer une mission longue ou complexe.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* CARD 1 — MAIN */}
          <div className="price-main relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_60px_rgba(11,58,99,0.12)]">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.55),transparent)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              Offre principale
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
              Attestation carbone
            </h3>

            <div className="mt-6 flex items-end justify-center">
              <span className="text-5xl font-extrabold text-[#0B3A63]">89€</span>
              <span className="ml-2 mb-1 text-sm text-[#64748B]">/ document</span>
            </div>

            <ul className="mt-8 space-y-3 text-left">
              {[
                "Résultat CO₂e agrégé (tCO₂e)",
                "Année + date d’émission",
                "Méthode indiquée + limites",
                "Format PDF standardisé",
                "ID unique vérifiable",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/fr/generate"
                className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon document
              </Link>

              <Link
                href="/fr/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-all"
              >
                Voir le détail
              </Link>
            </div>
          </div>

          {/* CARD 2 — USE CASE */}
          <div className="price-card rounded-[30px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              Cas d’usage
            </p>

            <h3 className="mt-3 text-xl font-extrabold text-[#0B3A63]">
              Dossier fournisseur / appel d’offres
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Fournir un document carbone lisible et standardisé pour répondre à une demande client,
              sans entrer dans une logique d’audit complet.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/fr/bilan-carbone-pme"
                className="block rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
              >
                Bilan carbone PME →
              </Link>

              <Link
                href="/fr/bilan-carbone-appel-offres"
                className="block rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
              >
                Appel d’offres →
              </Link>

              <Link
                href="/fr/verify"
                className="block rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-sm text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
              >
                Vérifier un document →
              </Link>
            </div>
          </div>

          {/* CARD 3 — LIMITS */}
          <div className="price-card rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              Important
            </p>

            <h3 className="mt-3 text-xl font-extrabold">
              Ce que ce n’est pas
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Pas un audit carbone complet</li>
              <li>• Pas un inventaire GES détaillé</li>
              <li>• Pas un reporting CSRD / ESRS</li>
              <li>• Pas une analyse exhaustive des scopes</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/fr/product/compliance"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                Voir le périmètre →
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="price-reveal mt-14 text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
            Si un audit complet est requis (cadre réglementaire, exigences précises, vérification externe),
            une approche différente est nécessaire. Certif-Scope est conçu pour le screening rapide.
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

        .price-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .price-main {
          opacity: 0;
          animation: revealUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .price-card {
          opacity: 0;
          animation: revealUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .price-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(11, 58, 99, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .price-reveal,
          .price-main,
          .price-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
