"use client";

import Image from "next/image";
import Link from "next/link";

const featureItems = [
  {
    id: "01",
    title: "Résultat CO₂e lisible",
    text: "Le document présente un résultat agrégé clair, conçu pour être relu rapidement par un client, un acheteur, une banque ou un partenaire.",
  },
  {
    id: "02",
    title: "Méthode indiquée",
    text: "L’attestation mentionne l’approche spend-based utilisée, avec un cadrage synthétique du périmètre, des hypothèses et du caractère indicatif.",
  },
  {
    id: "03",
    title: "Sources référencées",
    text: "Les facteurs d’émission utilisés s’appuient sur des référentiels reconnus et documentés pour renforcer la cohérence et la reproductibilité.",
  },
  {
    id: "04",
    title: "Vérification indépendante",
    text: "Le document comporte un identifiant unique et un bloc de vérification permettant une lecture et un contrôle plus simples par un tiers.",
  },
];

const proofPills = [
  "Résultat agrégé",
  "Méthode synthétique",
  "ID vérifiable",
  "Format standardisé",
];

export default function FeaturesFR() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="features-reveal text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Contenu de l’attestation
          </p>

          <h2 className="features-reveal mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] [animation-delay:100ms] md:text-4xl">
            Ce que contient concrètement l’attestation carbone
          </h2>

          <p className="features-reveal mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] [animation-delay:200ms] md:text-lg">
            Une structure standardisée, pensée pour fournir une lecture claire,
            cohérente et vérifiable lorsqu’un document carbone doit être transmis rapidement.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* LEFT — VISUAL PRODUCT */}
          <div
            className="features-visual relative"
            style={{ animationDelay: "280ms" }}
          >
            <div className="absolute left-1/2 top-[8%] -z-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#1FB6C1]/10 blur-3xl md:h-[440px] md:w-[440px]" />
            <div className="absolute left-1/2 top-[22%] -z-20 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#0B3A63]/7 blur-3xl md:h-[340px] md:w-[680px]" />

            <div className="relative mx-auto max-w-[720px]">
              {/* FLOATING NOTE 1 */}
              <div className="absolute left-0 top-8 z-10 hidden rounded-2xl border border-[#0B3A63]/10 bg-white/96 px-4 py-3 shadow-[0_18px_40px_rgba(11,58,99,0.12)] backdrop-blur md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Résultat
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  CO₂e agrégé lisible
                </p>
              </div>

              {/* FLOATING NOTE 2 */}
              <div className="absolute -right-2 bottom-12 z-10 hidden rounded-2xl border border-[#0B3A63]/10 bg-white/96 px-4 py-3 shadow-[0_18px_40px_rgba(11,58,99,0.12)] backdrop-blur md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Vérification
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  ID unique + contrôle tiers
                </p>
              </div>

              {/* DOCUMENT */}
              <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_24px_60px_rgba(11,58,99,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.55),transparent)]" />
                <Image
                  src="/preview.webp"
                  alt="Exemple d’attestation carbone Certif-Scope avec résultat CO2e, méthode et identifiant vérifiable"
                  width={1200}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full"
                />
              </div>

              {/* PILLS */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {proofPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FEATURES */}
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
                    <h3 className="text-lg font-semibold leading-snug text-[#0B3A63] md:text-[1.06rem]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="features-reveal rounded-[26px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 md:p-7 [animation-delay:760ms]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Clarification importante
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#475569] md:text-lg">
                Il s’agit d’une{" "}
                <strong className="font-semibold text-[#0B3A63]">
                  attestation indicative
                </strong>{" "}
                basée exclusivement sur les dépenses déclarées. Ce document ne
                constitue ni un inventaire GES complet, ni un audit réglementaire,
                ni un reporting CSRD/ESRS.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM LINK + CTA */}
        <div className="features-reveal mt-14 flex flex-col items-center justify-center gap-4 text-center [animation-delay:860ms]">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Voir le format, comprendre la méthode, transmettre un document lisible.
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

        .features-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .features-visual {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .features-card {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .features-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 58, 99, 0.08);
          border-color: rgba(11, 58, 99, 0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .features-reveal,
          .features-visual,
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
