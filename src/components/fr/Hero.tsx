// PATH: src/components/Hero/index.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  const isFR = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }, [pathname]);

  const generateHref = useMemo(() => {
    return isFR ? "/fr/generate" : "/generate";
  }, [isFR]);

  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME standardisé et vérifiable
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone PME standardisé et vérifiable
      </p>

      {/* TITRE (H1) */}
      <h1
        itemProp="headline"
        className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Un document CO₂e pour les PME
        <br />
        <span className="text-[#1FB6C1]">
          standardisé et vérifiable indépendamment
        </span>
      </h1>

      {/* DESCRIPTION PRINCIPALE */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Répondez aux demandes clients, aux appels d’offres et aux demandes des banques
        et des assureurs avec un document CO₂e clair et standardisé — sans réaliser
        un audit carbone complet.
      </p>

      {/* LEGAL NOTICE */}
      <div className="mt-4 max-w-xl mx-auto space-y-1">
        <p className="text-xs text-slate-500 leading-relaxed">
          Fondé sur des référentiels reconnus (GHG Protocol, ISO 14064-1) et utilisable
          dans les pratiques européennes de procurement, de banque et d’assurance.
        </p>

        {/* PRIVACY / TRUST */}
        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
          <span aria-hidden>🔒</span>
          Les calculs s’exécutent localement dans votre navigateur. Aucune donnée financière d’entrée n’est stockée.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 md:mt-7">
        <Link
          href={generateHref}
          aria-label="Générer l’attestation CO₂e"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Générer l’attestation
        </Link>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple de document CO₂e standardisé généré pour une PME, avec éléments de vérification indépendante."
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
