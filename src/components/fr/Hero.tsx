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
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(21,176,151,0.10),transparent_55%)]" />

      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME simplifié pour répondre à une demande client, un appel d’offres ou une banque, avec un document CO₂e indicatif, standardisé et vérifiable.
      </span>

      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <p
              itemProp="about"
              className="inline-flex items-center rounded-full border border-[#0B3A63]/10 bg-white/80 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-[#0B3A63]/75 shadow-sm"
            >
              Bilan carbone PME • Appels d’offres • Clients • Banques
            </p>

            {/* H1 */}
            <h1
              itemProp="headline"
              className="mt-5 text-[2.2rem] md:text-[3.5rem] font-extrabold tracking-tight text-[#0B3A63] leading-[1.02]"
            >
              Bilan carbone PME :
              <br />
              <span className="text-[#15B097]">prêt en quelques minutes</span>
            </h1>

            {/* Subtitle */}
            <p
              itemProp="description"
              className="mt-5 max-w-2xl mx-auto lg:mx-0 text-[1.02rem] md:text-[1.18rem] leading-relaxed text-slate-600"
            >
              Répondez à une demande client, un appel d’offres ou un dossier bancaire
              avec une <strong className="font-semibold text-[#0B3A63]">estimation carbone simple</strong>,
              présentée dans un document standardisé, sans lancer un audit carbone complet.
            </p>

            {/* Quick value bullets */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="rounded-full bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] border border-slate-200">
                Prix fixe
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] border border-slate-200">
                Sans abonnement
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] border border-slate-200">
                Vérification tierce
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-[#0B3A63] border border-slate-200">
                PDF standardisé
              </span>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/fr/generate"
                aria-label="Obtenir mon bilan carbone PME"
                className="inline-flex items-center justify-center rounded-xl bg-[#0B3A63] px-8 md:px-10 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#082C4B] w-full sm:w-auto"
              >
                Obtenir mon document CO₂e
              </Link>

              <Link
                href="/fr/pricing"
                aria-label="Voir le prix"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-8 py-4 text-base font-semibold text-[#0B3A63] transition hover:bg-[#0B3A63] hover:text-white w-full sm:w-auto"
              >
                Voir le prix
              </Link>
            </div>

            {/* Trust / use cases */}
            <p className="mt-4 text-xs md:text-sm text-slate-500 leading-relaxed">
              Cas d’usage fréquents : référencement fournisseur, réponse à un client, onboarding ESG, demande bancaire.
            </p>

            {/* Legal / method */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/85 p-4 md:p-5 shadow-sm text-left max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Une PME doit-elle obligatoirement faire un bilan carbone ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Dans la plupart des cas, non. En pratique, la demande vient souvent d’un client,
                d’un appel d’offres, d’un processus de référencement fournisseur ou d’un dossier bancaire.
                Certif-Scope apporte une réponse simple à ce besoin avec un résultat CO₂e agrégé,
                présenté dans un document indicatif et vérifiable.
              </p>
            </div>

            <div className="mt-4 max-w-2xl mx-auto lg:mx-0 space-y-2 text-left">
              <p className="text-[12px] leading-relaxed text-slate-500">
                Méthode indicative spend-based (dépenses × facteurs d’émission), fondée sur des référentiels reconnus,
                dont le GHG Protocol et l’ISO 14064-1.
              </p>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Document indicatif : ne constitue pas un inventaire GES complet, un audit réglementaire,
                ni un reporting CSRD/ESRS. Les données d’entrée restent sous la responsabilité de l’utilisateur.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* floating card top */}
              <div className="hidden md:block absolute -top-5 -left-5 z-10 rounded-2xl border border-[#15B097]/20 bg-white px-4 py-3 shadow-lg">
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                  Usage principal
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Répondre vite à une demande externe
                </p>
              </div>

              {/* main image */}
              <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_18px_60px_rgba(11,58,99,0.12)]">
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

              {/* floating card bottom */}
              <div className="hidden md:block absolute -bottom-5 -right-4 z-10 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
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
