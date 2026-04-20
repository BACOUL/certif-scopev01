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
    <div className="relative mx-auto max-w-[820px]">
      {/* Card: process */}
      <div className="floating-card absolute left-1 top-2 z-10 rounded-2xl border border-[#0B3A63]/10 bg-white/97 px-2.5 py-2 shadow-[0_16px_32px_rgba(11,58,99,0.10)] backdrop-blur md:left-2 md:top-6 md:px-4 md:py-3 md:shadow-[0_18px_40px_rgba(11,58,99,0.12)]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-[11px]">
          Processus
        </p>
        <p className="mt-1 text-[11px] font-semibold leading-4 text-[#0B3A63] md:text-sm md:leading-5">
          Saisie → Calcul → Attestation
        </p>
      </div>

      {/* Card: verification */}
      <div className="floating-card absolute right-1 bottom-8 z-10 rounded-2xl border border-[#0B3A63]/10 bg-white/97 px-2.5 py-2 shadow-[0_16px_32px_rgba(11,58,99,0.10)] backdrop-blur md:-right-1 md:bottom-14 md:px-4 md:py-3 md:shadow-[0_18px_40px_rgba(11,58,99,0.12)] [animation-delay:1.2s]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#64748B] md:text-[11px]">
          Vérification
        </p>
        <p className="mt-1 text-[11px] font-semibold leading-4 text-[#0B3A63] md:text-sm md:leading-5">
          ✔ Vérifié
        </p>
        <p className="mt-0.5 text-[9px] leading-4 text-[#64748B] md:text-xs">
          ID unique : CS-2024-01829
        </p>
      </div>

      {/* Card: pdf */}
      <div className="floating-card absolute left-12 bottom-0 z-10 rounded-full border border-[#0B3A63]/10 bg-white/97 px-3 py-1.5 shadow-[0_12px_24px_rgba(11,58,99,0.10)] backdrop-blur md:left-20 md:bottom-2 md:px-4 md:py-2 md:shadow-[0_14px_28px_rgba(11,58,99,0.10)] [animation-delay:2s]">
        <p className="text-[9px] font-semibold text-[#0B3A63] md:text-xs">
          PDF standardisé
        </p>
      </div>

      <div className="relative transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute inset-x-10 bottom-3 -z-10 h-20 rounded-full bg-[#1FB6C1]/18 blur-3xl md:inset-x-12 md:h-20 md:bg-[#1FB6C1]/20" />
        <div className="absolute inset-x-8 bottom-2 -z-10 h-16 rounded-full bg-[#0B3A63]/10 blur-2xl md:inset-x-10 md:bg-[#0B3A63]/12" />

        <div className="overflow-hidden rounded-[26px] md:rounded-[34px]">
          <Image
            itemProp="primaryImageOfPage"
            src="/hero-attestation.webp"
            alt="Exemple de document de bilan carbone PME simplifié avec résultat CO2e agrégé, méthode indicative et vérification indépendante."
            width={1600}
            height={1200}
            priority
            className="h-auto w-full scale-[1.08] contrast-[1.12] saturate-[1.04] md:scale-100"
          />
        </div>
      </div>
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
        Bilan carbone PME : que fournir quand on vous le demande ? Document CO₂e
        indicatif, standardisé et vérifiable pour répondre rapidement à une
        demande sans lancer un audit complet.
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
                que fournir
                <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
              </span>{" "}
              quand on vous le demande ?
            </h1>

            <p
              itemProp="description"
              className="hero-reveal mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-[#475569] [animation-delay:220ms] lg:mx-0 md:text-[1.18rem]"
            >
              Fournissez un{" "}
              <strong className="font-semibold text-[#0B3A63]">
                document carbone simple, standardisé et vérifiable
              </strong>{" "}
              pour répondre rapidement à une demande, sans lancer un audit
              carbone complet.
            </p>

            <div className="hero-reveal mt-7 flex flex-col items-center justify-center gap-3 [animation-delay:320ms] sm:flex-row lg:justify-start">
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

            <div className="hero-reveal mt-6 space-y-3 [animation-delay:620ms] lg:hidden">
              <p className="text-sm leading-relaxed text-[#64748B]">
                Cas fréquents : demande floue, exigence dans un dossier,
                référencement fournisseur, revue bancaire ou besoin de fournir
                rapidement un justificatif carbone.
              </p>
              <p className="text-[12px] leading-relaxed text-[#64748B]">
                Méthode indicative spend-based (dépenses × facteurs d’émission),
                fondée sur des référentiels reconnus.
              </p>
              <p className="text-[11px] leading-relaxed text-[#64748B]">
                Document indicatif : ne constitue pas un inventaire GES complet,
                un audit réglementaire ni un reporting CSRD/ESRS. Les données
                d’entrée restent sous la responsabilité de l’utilisateur.
              </p>
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

            <div className="hero-reveal mt-5 hidden max-w-2xl space-y-3 [animation-delay:520ms] lg:block">
              <p className="text-sm leading-relaxed text-[#64748B]">
                Cas fréquents : demande floue, exigence dans un dossier,
                référencement fournisseur, revue bancaire ou besoin de fournir
                rapidement un justificatif carbone.
              </p>
              <p className="text-[12px] leading-relaxed text-[#64748B]">
                Méthode indicative spend-based (dépenses × facteurs d’émission),
                fondée sur des référentiels reconnus.
              </p>
              <p className="text-[11px] leading-relaxed text-[#64748B]">
                Document indicatif : ne constitue pas un inventaire GES complet,
                un audit réglementaire ni un reporting CSRD/ESRS. Les données
                d’entrée restent sous la responsabilité de l’utilisateur.
              </p>
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

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
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

        .floating-card {
          animation: floatCard 6.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-scale,
          .floating-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
