"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF8F6]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(21,176,151,0.06),transparent_55%)]" />

      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME simplifié pour répondre à une demande client, un appel d’offres ou une banque, avec un document CO₂e indicatif, standardisé et vérifiable.
      </span>

      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <p
              itemProp="about"
              className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/90 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm"
            >
              Bilan carbone PME • Appels d’offres • Clients • Banques
            </p>

            <h1
              itemProp="headline"
              className="mt-5 text-[2.15rem] md:text-[3.45rem] font-extrabold tracking-tight text-[#0B3A63] leading-[1.02]"
            >
              Bilan carbone PME :
              <br />
              prêt en quelques <span className="text-[#15B097]">minutes</span>
            </h1>

            <p
              itemProp="description"
              className="mt-5 max-w-2xl mx-auto lg:mx-0 text-[1.02rem] md:text-[1.18rem] leading-relaxed text-[#475569]"
            >
              Répondez à une demande client, un appel d’offres ou un dossier bancaire
              avec une{" "}
              <strong className="font-semibold text-[#0B3A63]">
                estimation carbone simple
              </strong>
              , présentée dans un document standardisé, sans lancer un audit carbone complet.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="rounded-full border border-[#0B3A63]/12 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] shadow-sm">
                Prix fixe
              </span>
              <span className="rounded-full border border-[#0B3A63]/12 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] shadow-sm">
                Sans abonnement
              </span>
              <span className="rounded-full border border-[#0B3A63]/12 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] shadow-sm">
                Vérification tierce
              </span>
              <span className="rounded-full border border-[#0B3A63]/12 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] shadow-sm">
                PDF standardisé
              </span>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/fr/generate"
                aria-label="Obtenir mon bilan carbone PME"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#0B3A63] px-8 md:px-10 py-4 text-base font-semibold text-white shadow-[0_10px_25px_rgba(11,58,99,0.18)] transition hover:bg-[#082C4B]"
              >
                Obtenir mon document CO₂e
              </Link>

              <Link
                href="/fr/pricing"
                aria-label="Voir le prix"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-8 py-4 text-base font-semibold text-[#0B3A63] transition hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix
              </Link>
            </div>

            <p className="mt-4 text-xs md:text-sm leading-relaxed text-[#64748B]">
              Cas d’usage fréquents : référencement fournisseur, réponse à un client, onboarding ESG, demande bancaire.
            </p>

            <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-white/90 p-4 md:p-5 shadow-sm text-left max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Une PME doit-elle obligatoirement faire un bilan carbone ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Dans la plupart des cas, non. En pratique, la demande vient souvent d’un client,
                d’un appel d’offres, d’un processus de référencement fournisseur ou d’un dossier bancaire.
                Certif-Scope apporte une réponse simple à ce besoin avec un résultat CO₂e agrégé,
                présenté dans un document indicatif et vérifiable.
              </p>
            </div>

            <div className="mt-4 max-w-2xl mx-auto lg:mx-0 space-y-2 text-left">
              <p className="text-[12px] leading-relaxed text-[#64748B]">
                Méthode indicative spend-based (dépenses × facteurs d’émission), fondée sur des référentiels reconnus,
                dont le GHG Protocol et l’ISO 14064-1.
              </p>
              <p className="text-[11px] leading-relaxed text-[#64748B]">
                Document indicatif : ne constitue pas un inventaire GES complet, un audit réglementaire,
                ni un reporting CSRD/ESRS. Les données d’entrée restent sous la responsabilité de l’utilisateur.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="hidden md:block absolute -top-5 -left-5 z-10 rounded-2xl border border-[#0B3A63]/10 bg-white px-4 py-3 shadow-lg">
                <p className="text-[11px] uppercase tracking-wide text-[#64748B] font-semibold">
                  Usage principal
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Répondre vite à une demande externe
                </p>
              </div>

              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-3 shadow-[0_18px_60px_rgba(11,58,99,0.12)]">
                <Image
                  itemProp="primaryImageOfPage"
                  src="/hero-attestation.webp"
                  alt="Exemple de document de bilan carbone PME simplifié avec résultat agrégé, méthode indicative et vérification indépendante."
                  width={900}
                  height={640}
                  priority
                  className="h-auto w-full rounded-[20px] border border-slate-100"
                />
              </div>

              <div className="hidden md:block absolute -bottom-5 -right-4 z-10 rounded-2xl border border-[#0B3A63]/10 bg-white px-4 py-3 shadow-lg">
                <p className="text-[11px] uppercase tracking-wide text-[#64748B] font-semibold">
                  Vérification
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Vérifiable indépendamment par un tiers
                </p>
              </div>
            </div>

            <p className="mt-5 text-center text-sm font-medium text-[#0B3A63]/80">
              Document utilisable immédiatement et vérifiable indépendamment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
