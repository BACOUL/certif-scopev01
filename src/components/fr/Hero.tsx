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
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone entreprise simplifié pour PME — attestation CO₂e indicative et vérifiable
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone entreprise — solution simplifiée pour PME
      </p>

      {/* TITRE (H1) */}
      <h1
        itemProp="headline"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Bilan carbone entreprise simplifié
        <br />
        <span className="text-[#1FB6C1]">
          avec attestation CO₂e indicative vérifiable indépendamment
        </span>
      </h1>

      {/* DESCRIPTION PRINCIPALE */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Obtenez une estimation de bilan carbone pour votre entreprise (PME) afin de
        répondre aux exigences clients, appels d’offres, banques et assureurs — sans
        engager un audit carbone complet. Méthode spend-based orientée scope 3, avec
        un document CO₂e clair, standardisé et prêt à partager.
      </p>

      {/* LEGAL NOTICE */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Estimation indicative basée sur des référentiels GES reconnus (GHG Protocol,
          ISO 14064-1) et adaptée aux pratiques européennes de procurement, bancaires
          et assurantielles. Ce document ne constitue pas un bilan carbone complet ni
          un audit.
        </p>

        {/* PRIVACY / TRUST */}
        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
          <span aria-hidden>🔒</span>
          Les calculs sont effectués localement dans votre navigateur. Aucune donnée
          financière n’est conservée.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Estimer le bilan carbone de mon entreprise et générer une attestation CO₂e indicative"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Estimer mon bilan carbone
        </Link>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple d’attestation CO₂e issue d’un bilan carbone entreprise simplifié (PME), incluant des éléments de vérification indépendante."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* TRUST LINE */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-6">
        Attestation CO₂e indicative, vérifiable indépendamment par tout tiers.
      </p>
    </section>
  );
}
