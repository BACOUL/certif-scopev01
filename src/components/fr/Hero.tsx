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
    <div className="relative mx-auto max-w-[760px]">
      <div className="floating-card absolute left-2 top-6 z-10 hidden rounded-2xl border border-[#0B3A63]/10 bg-white/96 px-4 py-3 shadow-[0_20px_50px_rgba(11,58,99,0.10)] backdrop-blur md:block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
          Processus
        </p>
        <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
          Saisie → Calcul → Attestation
        </p>
      </div>

      <div className="floating-card absolute -right-1 bottom-14 z-10 hidden rounded-2xl border border-[#0B3A63]/10 bg-white/96 px-4 py-3 shadow-[0_20px_50px_rgba(11,58,99,0.10)] backdrop-blur md:block [animation-delay:1.2s]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
          Vérification
        </p>
        <p className="mt-1 text-sm font-semibold text-[#0B3A63]">✔ Vérifié</p>
        <p className="mt-0.5 text-xs text-[#64748B]">
          ID unique : CS-2024-01829
        </p>
      </div>

      <div className="floating-card absolute left-20 bottom-2 z-10 hidden rounded-full border border-[#0B3A63]/10 bg-white/96 px-4 py-2 shadow-[0_16px_36px_rgba(11,58,99,0.10)] backdrop-blur md:block [animation-delay:2s]">
        <p className="text-xs font-semibold text-[#0B3A63]">PDF standardisé</p>
      </div>

      <div className="relative transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute inset-x-12 bottom-3 -z-10 h-20 rounded-full bg-[#1FB6C1]/20 blur-3xl" />
        <div className="absolute inset-x-10 bottom-2 -z-10 h-16 rounded-full bg-[#0B3A63]/12 blur-2xl" />
        <div className="overflow-hidden rounded-[34px]">
          <Image
            itemProp="primaryImageOfPage"
            src="/hero-attestation.webp"
            alt="Exemple de document de bilan carbone PME simplifié avec résultat CO2e agrégé, méthode indicative et vérification indépendante."
            width={1600}
            height={1200}
            priority
            className="h-auto w-full contrast-[1.08] saturate-[1.03]"
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
        Bilan carbone PME simplifié pour répondre à une demande client, un
        appel d’offres ou une banque, avec un document CO₂e indicatif,
        standardisé et vérifiable.
      </span>

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-20 md:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-center lg:pt-6 lg:text-left">
            <p
              itemProp="about"
              className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
              Bilan carbone PME • Appels d’offres • Clients • Banques
            </p>

            <h1
              itemProp="headline"
              className="hero-reveal mt-5 text-[2.15rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] [animation-delay:120ms] md:text-[3.65rem] lg:max-w-[11ch]"
            >
              Bilan carbone PME :
              <br />
              <span className="relative inline-block">
                répondez simplement
                <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
              </span>{" "}
              aux demandes clients
            </h1>

            <p
              itemProp="description"
              className="hero-reveal mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-[#475569] [animation-delay:220ms] lg:mx-0 md:text-[1.18rem]"
            >
              Générez une{" "}
              <strong className="font-semibold text-[#0B3A63]">
                attestation carbone simple, standardisée et vérifiable
              </strong>{" "}
              pour répondre à un client, un appel d’offres ou une banque, sans
              audit complet.
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
              Document prêt à être utilisé et vérifiable indépendamment.
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
                Cas d’usage fréquents : référencement fournisseur, réponse à un
                client, onboarding ESG, demande bancaire.
              </p>
              <p className="text-[12px] leading-relaxed text-[#64748B]">
                Méthode indicative spend-based (dépenses × facteurs
                d’émission), fondée sur des référentiels reconnus.
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
                Cas d’usage fréquents : référencement fournisseur, réponse à un
                client, onboarding ESG, demande bancaire.
              </p>
              <p className="text-[12px] leading-relaxed text-[#64748B]">
                Méthode indicative spend-based (dépenses × facteurs
                d’émission), fondée sur des référentiels reconnus.
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
              Document prêt à être utilisé et vérifiable indépendamment.
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
