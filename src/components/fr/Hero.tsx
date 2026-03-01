"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      {/* SEO accessible */}
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME simplifié : document CO₂e standardisé et vérifiable
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone PME • document CO₂e vérifiable
      </p>

      {/* H1 OPTIMISÉ SEO */}
      <h1
        itemProp="headline"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Bilan carbone PME :{" "}
        <span className="whitespace-nowrap">un document CO₂e</span>
        <br />
        <span className="text-[#1FB6C1]">
          simple, utilisable et vérifiable
        </span>
      </h1>

      {/* DESCRIPTION SIMPLIFIÉE */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Obtenez un résultat CO₂e agrégé dans un PDF standardisé,
        prêt à transmettre à un client, un acheteur ou une banque —
        sans réaliser un audit carbone complet.
      </p>

      {/* MICRO REASSURANCE SEO + BUSINESS */}
      <p className="mt-3 text-sm text-[#0B3A63]/80 font-medium">
        Bilan carbone simplifié • Prix fixe • Sans abonnement • Vérification tierce
      </p>

      {/* LEGAL / CADRE */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Méthode indicative spend-based (dépenses × facteurs d’émission),
          alignée sur des référentiels reconnus (GHG Protocol, ISO 14064-1).
        </p>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          Attestation indicative : ne constitue pas un inventaire GES,
          un audit réglementaire ni un reporting CSRD/ESRS.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Générer mon bilan carbone PME"
          className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Générer mon bilan carbone PME
        </Link>

        <Link
          href="/fr/pricing"
          aria-label="Voir le prix du bilan carbone PME"
          className="text-[#0B3A63] font-semibold px-8 py-4 rounded-xl border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
        >
          Voir le prix
        </Link>
      </div>

      {/* MICRO CONTEXTE BUSINESS */}
      <p className="mt-4 text-xs text-[#64748B]">
        Utilisé pour appels d’offres, référencement fournisseur et dossiers bancaires.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple de document de bilan carbone PME simplifié avec vérification indépendante."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* TRUST LINE */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-6">
        Vérifiable indépendamment par tout tiers.
      </p>
    </section>
  );
}
