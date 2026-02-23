"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroFR() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      {/* SEO helper (non-visible) */}
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone entreprise pour PME — estimation CO₂e avec attestation indicative vérifiable
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE (exact match) */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone entreprise pour PME
      </p>

      {/* TITRE (H1) */}
      <h1
        itemProp="headline"
        className="text-[2rem] md:text-[3.1rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Bilan carbone entreprise simplifié
        <br />
        <span className="text-[#1FB6C1]">Estimation CO₂e avec attestation vérifiable</span>
      </h1>

      {/* DESCRIPTION PRINCIPALE (SEO + intent) */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Réalisez une estimation de bilan carbone entreprise (PME) en quelques minutes pour répondre
        aux exigences clients, aux appels d’offres et aux demandes bancaires — sans audit carbone
        complet.
      </p>

      {/* TRUST / METHOD / LEGAL (light, non-jargon) */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Méthode spend-based orientée Scope 3, basée sur des référentiels reconnus (GHG Protocol,
          ISO 14064-1). Document CO₂e clair, standardisé, prêt à partager.
        </p>

        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
          <span aria-hidden>🔒</span>
          Calculs effectués localement dans votre navigateur. Aucune donnée financière conservée.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Calculer mon bilan carbone entreprise"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
        >
          Calculer mon bilan carbone
        </Link>

        <Link
          href="/fr/verify"
          aria-label="Vérifier une attestation CO₂e"
          className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-xl border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Vérifier une attestation
        </Link>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple de document CO₂e : estimation de bilan carbone entreprise avec attestation indicative vérifiable."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* TRUST LINE */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-6">
        Attestation indicative vérifiable indépendamment, valable 1 an.
      </p>
    </section>
  );
}
