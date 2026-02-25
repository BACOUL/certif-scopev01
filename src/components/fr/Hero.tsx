// PATH: src/components/fr/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroFR() {
  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-6 pt-10 md:pt-16 pb-16 md:pb-24 text-center"
    >
      {/* Fond (premium, léger) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC] -z-10" />

      {/* Sur-titre SEO */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-3">
        Bilan carbone entreprise (PME) — solution en ligne
      </p>

      {/* H1 (bleu dominant, accent turquoise court uniquement) */}
      <h1 className="text-[2.2rem] md:text-[3.2rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Bilan carbone PME en ligne
        <br />
        <span className="text-[#0B3A63]">
          indicateur{" "}
          <span className="text-[#15B097]">CO₂e</span> prêt en 10 minutes
        </span>
      </h1>

      {/* Sous-titre business (intent) */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Document CO₂e prêt à transmettre pour{" "}
        <strong>appels d’offres</strong>, <strong>fournisseurs</strong>,{" "}
        <strong>banques</strong> et <strong>screening ESG</strong>.
      </p>

      {/* Positionnement (clair, non trompeur) */}
      <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
        Certif-Scope calcule un indicateur CO₂e indicatif (méthode spend-based : dépenses ×
        facteurs d’émission) et génère une{" "}
        <strong>attestation PDF professionnelle, archivable et vérifiable</strong>.
        Alternative simplifiée quand un bilan carbone complet n’est pas exigé explicitement.
      </p>

      {/* Preuves (lisibles, compactes) */}
      <div className="mt-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F8FAFC] text-[#0B3A63]"
              aria-hidden="true"
            >
              ✓
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              Format standardisé prêt à transmettre (PDF).
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F8FAFC] text-[#0B3A63]"
              aria-hidden="true"
            >
              ✓
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              Vérification simple par un tiers (QR + identifiant).
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F8FAFC] text-[#0B3A63]"
              aria-hidden="true"
            >
              ✓
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calcul local dans votre navigateur (aucune donnée financière stockée).
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F8FAFC] text-[#0B3A63]"
              aria-hidden="true"
            >
              ✓
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              Validité 1 an (document daté, stable, identifiable).
            </p>
          </div>
        </div>
      </div>

      {/* Ligne prix (bleu autorité) */}
      <p className="mt-6 text-sm md:text-base font-semibold text-[#0B3A63]">
        À partir de 89 € • Sans abonnement • Validité 1 an
      </p>

      {/* CTA (retire “Voir un exemple d’attestation”) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <Link
          href="/fr/generate/"
          aria-label="Générer un indicateur CO₂e et une attestation indicative"
          className="bg-[#15B097] hover:bg-[#0FA08A] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-colors text-base"
        >
          Générer mon bilan carbone PME
        </Link>

        <Link
          href="/fr/pricing/"
          aria-label="Voir les tarifs Certif-Scope"
          className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
        >
          Voir les tarifs
        </Link>
      </div>

      {/* Image (conserve l’exemple visuel, sans CTA “exemple”) */}
      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="Attestation CO₂e indicative pour bilan carbone PME — PDF standardisé, archivable et vérifiable"
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* Disclaimer (court, clair) */}
      <p className="text-xs text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses (approche spend-based). Ne constitue pas un
        bilan carbone complet, ni un inventaire GES, ni un audit, ni un reporting CSRD/ESRS.
      </p>
    </section>
  );
        }
