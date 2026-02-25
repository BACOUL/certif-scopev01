// PATH: src/components/fr/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroFR() {
  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-20 md:pb-28 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE SEO */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Bilan carbone PME — solution simplifiée en ligne
      </p>

      {/* H1 */}
      <h1 className="text-[2.2rem] md:text-[3.4rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Bilan carbone PME simplifié
        <br />
        <span className="text-[#15B097]">
          indicateur CO₂e prêt en 10 minutes
        </span>
      </h1>

      {/* PROMESSE BUSINESS */}
      <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto mt-6 leading-relaxed">
        Besoin d’un <strong>bilan carbone PME</strong> pour un appel d’offres,
        un client, une banque ou un screening ESG ?  
        Certif-Scope génère un <strong>indicateur CO₂e basé sur les dépenses</strong>
        et produit un <strong>PDF standardisé, archivable et vérifiable</strong>,
        sans cabinet externe ni audit long.
      </p>

      {/* COMPARAISON PRIX */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-4">
        Alternative simplifiée au bilan carbone complet (3 000€ – 10 000€)
      </p>

      {/* BLOCS RAPIDES */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-[#0B3A63]">Rapide</p>
            <p className="text-sm text-slate-600 mt-1">
              Résultat immédiat, sans collecte complexe.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-[#0B3A63]">Professionnel</p>
            <p className="text-sm text-slate-600 mt-1">
              PDF standardisé avec identifiant unique et vérification.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-[#0B3A63]">Confidentiel</p>
            <p className="text-sm text-slate-600 mt-1">
              Calcul local dans votre navigateur. Aucune donnée stockée.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Link
          href="/fr/generate/"
          className="bg-[#15B097] hover:bg-[#0FA08A] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition-colors"
        >
          Générer mon bilan carbone
        </Link>

        <Link
          href="/fr/pricing/"
          className="inline-flex items-center justify-center font-semibold px-12 py-4 rounded-xl border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Voir les tarifs
        </Link>
      </div>

      {/* MICRO PREUVE PRIX */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-4">
        À partir de 89€ • Validité 1 an • Sans abonnement
      </p>

      {/* DISCLAIMER MAÎTRISÉ */}
      <p className="text-xs text-slate-500 leading-relaxed mt-6 max-w-3xl mx-auto">
        Estimation indicative spend-based (dépenses × facteurs d’émission).
        Ne remplace pas un audit carbone complet ni un inventaire GES.
        N’inclut pas les Scopes 1–2 et ne constitue pas un reporting CSRD/ESRS.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="Bilan carbone PME simplifié en PDF, indicateur CO₂e standardisé et vérifiable."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>
    </section>
  );
}
