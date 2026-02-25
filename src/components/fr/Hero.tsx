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
      {/* SEO (accessible, non-visible) */}
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME : attestation CO₂e standardisée, signée et vérifiable
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone PME • attestation CO₂e vérifiable
      </p>

      {/* TITRE (H1) */}
      <h1
        itemProp="headline"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Votre bilan carbone,{" "}
        <span className="whitespace-nowrap">en document</span>
        <br />
        <span className="text-[#1FB6C1]">standardisé et vérifiable</span>
      </h1>

      {/* DESCRIPTION PRINCIPALE */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Générez une <strong>attestation de bilan carbone (CO₂e)</strong> claire pour
        répondre aux demandes de clients, appels d’offres, banques et assurances —
        <span className="font-semibold"> sans réaliser un audit carbone complet</span>.
      </p>

      {/* LEGAL NOTICE (comme EN, + claims FR) */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Aligné sur des référentiels reconnus (GHG Protocol, ISO 14064-1) et
          compatible avec les pratiques européennes (achats, banques, assurances).
        </p>

        {/* PRIVACY / TRUST */}
        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
          <span aria-hidden>🔒</span>
          Calculs exécutés localement dans votre navigateur. Aucune donnée financière
          d’entrée n’est stockée.
        </p>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          Attestation indicative (modèle spend-based) : ne constitue pas un inventaire
          GES, un audit, ni un reporting CSRD/ESRS.
        </p>
      </div>

      {/* CTA (mêmes couleurs que EN) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Générer une attestation de bilan carbone (CO₂e)"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Générer mon attestation
        </Link>

        <Link
          href="/fr/pricing"
          aria-label="Voir le prix de l’attestation de bilan carbone"
          className="text-[#0B3A63] font-semibold px-8 py-4 rounded-xl border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
        >
          Voir le prix
        </Link>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple d’attestation de bilan carbone (CO₂e) standardisée pour une PME, avec informations de vérification indépendante."
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

      {/* PROOF / BENEFITS (comme ton bloc, mais placé en bas pour garder la structure EN) */}
      <div className="mt-5 max-w-2xl mx-auto">
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center text-sm text-[#0B3A63]/80">
          <li className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white/70">
            <span aria-hidden>⚡</span> Génération en quelques minutes
          </li>
          <li className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white/70">
            <span aria-hidden>🧾</span> Format prêt procurement
          </li>
          <li className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white/70">
            <span aria-hidden>✅</span> Vérification tierce possible
          </li>
        </ul>
      </div>
    </section>
  );
        }
