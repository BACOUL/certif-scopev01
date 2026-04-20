"use client";

import Image from "next/image";
import Link from "next/link";

const proofItems = [
  "Prix fixe",
  "Sans abonnement",
  "Vérification tierce",
  "PDF standardisé",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[780px]">
      <Image
        itemProp="primaryImageOfPage"
        src="/hero-attestation.webp"
        alt="Exemple de document de bilan carbone PME simplifié avec résultat CO2e agrégé, méthode indicative et vérification indépendante."
        width={1600}
        height={1200}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_58%,#F4FBFC_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[520px] bg-[radial-gradient(circle_at_top,rgba(31,182,193,0.06),transparent_58%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-56 w-56 rounded-full bg-[#1FB6C1]/5 blur-3xl" />
      <div className="absolute right-[-6%] top-16 -z-10 h-72 w-72 rounded-full bg-[#0B3A63]/5 blur-3xl" />

      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME : obligation, coût, exemple et document CO₂e indicatif
        pour répondre rapidement à une demande sans audit complet.
      </span>

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center lg:pt-6 lg:text-left">
            <p
              itemProp="about"
              className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
              Bilan carbone PME • Demande externe • Réponse rapide
            </p>

            <h1
              itemProp="headline"
              className="hero-reveal mt-5 text-[2.15rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] [animation-delay:120ms] md:text-[3.65rem] lg:max-w-[11ch]"
            >
              Bilan carbone PME :
              <br />
              <span className="relative inline-block">
                est-ce obligatoire
                <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
              </span>{" "}
              et que fournir quand on vous le demande ?
            </h1>

            {/* 🔥 LIGNE SEO AJOUTÉE (ultra légère mais puissante) */}
            <p className="hero-reveal mt-3 text-sm font-medium text-[#0B3A63]/75 [animation-delay:180ms] md:text-base">
              Obligation, coût, exemple et réponse aux appels d’offres.
            </p>

            <p
              itemProp="description"
              className="hero-reveal mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-[#475569] [animation-delay:260ms] lg:mx-0 md:text-[1.18rem]"
            >
              Fournissez un{" "}
              <strong className="font-semibold text-[#0B3A63]">
                document carbone simple, standardisé et vérifiable
              </strong>{" "}
              pour répondre rapidement à une demande, sans lancer un audit
              carbone complet.
            </p>

            <div className="hero-reveal mt-7 flex flex-col items-center justify-center gap-3 [animation-delay:340ms] sm:flex-row lg:justify-start">
              <Link
                href="/fr/generate"
                aria-label="Obtenir mon bilan carbone PME"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)] sm:w-auto md:px-10"
              >
                Obtenir mon document CO₂e
              </Link>

              <Link
                href="/fr/pricing"
                aria-label="Voir le prix"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-8 py-4 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white sm:w-auto"
              >
                Voir le prix
              </Link>
            </div>

            <div className="hero-scale mt-6 lg:hidden">
              <HeroVisual />
            </div>

            <p className="hero-reveal mt-8 text-center text-sm font-medium text-[#0B3A63]/80 [animation-delay:420ms] lg:hidden">
              Une réponse lisible, rapide à transmettre et vérifiable
              indépendamment.
            </p>

            <div className="hero-reveal mt-7 flex flex-wrap items-center justify-center gap-3 [animation-delay:520ms] lg:hidden">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-reveal mt-7 hidden flex-wrap items-center justify-center gap-2.5 [animation-delay:420ms] lg:flex lg:justify-start">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0B3A63]/12 bg-white px-3 py-1.5 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-scale relative hidden lg:block lg:pl-4">
            <HeroVisual />
            <p className="hero-reveal mt-8 text-center text-sm font-medium text-[#0B3A63]/80 [animation-delay:340ms]">
              Une réponse lisible, rapide à transmettre et vérifiable
              indépendamment.
            </p>
          </div>
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

        .hero-reveal {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-scale {
          opacity: 0;
          animation: revealScale 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.18s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-scale {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
