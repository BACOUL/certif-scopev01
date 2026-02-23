// PATH: src/components/fr/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroFR() {
  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Bilan carbone entreprise (PME) — preuve minimale CO₂e
      </p>

      {/* H1 */}
      <h1 className="text-[2rem] md:text-[3.1rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Bilan carbone entreprise simplifié
        <br />
        <span className="text-[#15B097]">
          Indicateur CO₂e + attestation indicative vérifiable
        </span>
      </h1>

      {/* DESCRIPTION PRINCIPALE */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-4 leading-relaxed">
        Quand un client demande un “bilan carbone”, il attend souvent un{" "}
        <strong>indicateur CO₂e lisible et archivable</strong> pour le screening
        ESG, l’onboarding fournisseur, les appels d’offres, ou un dossier banque /
        assurance. Certif-Scope génère une{" "}
        <strong>attestation CO₂e indicative</strong> basée sur les dépenses (spend-based),
        sans se présenter comme un audit carbone.
      </p>

      {/* MÉTHODE / LIMITES (NON TROMPEUR) */}
      <div className="mt-4 max-w-2xl mx-auto space-y-2">
        <p className="text-xs text-slate-500 leading-relaxed">
          Modèle spend-based (dépenses × facteurs d’émission) : estimation indicative,
          utile en “preuve minimale” (screening). Ce document n’est pas un bilan carbone
          complet, n’inclut pas de Scopes 1–2, et ne remplace pas un inventaire GES.
        </p>

        <p className="text-xs text-slate-500 leading-relaxed">
          Références : GHG Protocol (Scope 3 — spend-based), ISO 14064-1 (cadre de principes),
          ISO 14083 (logistique / transport), ESRS / CSRD (contexte de demandes de chaîne
          de valeur). L’attestation reste indicative et non réglementaire.
        </p>

        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-2">
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F8FAFC] border border-slate-200 text-[#0B3A63]"
            aria-hidden
          >
            ✓
          </span>
          Calculs effectués localement dans votre navigateur. Aucune donnée financière détaillée conservée.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Générer une attestation CO₂e indicative (bilan carbone entreprise simplifié)"
          className="bg-[#15B097] hover:bg-[#0FA08A] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition-colors"
        >
          Générer mon attestation CO₂e
        </Link>

        <Link
          href="/fr/verify"
          aria-label="Vérifier une attestation CO₂e"
          className="inline-flex items-center justify-center font-semibold px-10 py-4 rounded-xl border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Vérifier une attestation
        </Link>
      </div>

      {/* MINI-LIENS SEO (INTENT) */}
      <div className="mt-7 md:mt-8 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
            Cas fréquents — “bilan carbone demandé”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link
              href="/fr/why-companies-ask/attestation-carbone-fournisseur"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              Bilan carbone fournisseur : ce qui est réellement demandé
            </Link>
            <Link
              href="/fr/why-companies-ask/attestation-carbone-appel-offres"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              Bilan carbone en appel d’offres : ce qui est réellement demandé
            </Link>
            <Link
              href="/fr/why-companies-ask/exigences-co2-banques-assurances"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              Banque / assurance : pourquoi on vous le demande, et quoi fournir
            </Link>
            <Link
              href="/fr/why-companies-ask/attestation-carbone-pme"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              PME : que fournir quand on n’a pas de bilan complet
            </Link>
            <Link
              href="/fr/why-companies-ask/preuve-carbone-entreprise"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              Preuve carbone d’entreprise : format minimal (screening)
            </Link>
            <Link
              href="/fr/why-companies-ask"
              className="text-sm text-[#0B3A63] hover:underline"
            >
              Pourquoi les entreprises le demandent (vue d’ensemble)
            </Link>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          src="/hero-attestation.webp"
          alt="Exemple d’attestation CO₂e indicative : indicateur CO₂e spend-based, document standardisé, vérifiable."
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

      {/* SEO HELPERS (NON VISIBLES) */}
      <div className="sr-only">
        <p>
          Bilan carbone entreprise, bilan carbone PME, bilan carbone fournisseur,
          bilan carbone appel d’offres, bilan carbone banque assurance, preuve carbone,
          indicateur CO2e, attestation CO2e indicative, screening ESG.
        </p>
      </div>
    </section>
  );
}
