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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE SEO */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-3">
        Bilan carbone entreprise (PME) — solution en ligne
      </p>

      {/* H1 PRINCIPAL */}
      <h1 className="text-[2.2rem] md:text-[3.2rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Bilan carbone PME en ligne
        <br />
        <span className="text-[#15B097]">
          indicateur CO₂e prêt en 10 minutes
        </span>
      </h1>

      {/* SOUS-TITRE BUSINESS */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Document CO₂e prêt à transmettre pour <strong>appels d’offres</strong>, 
        <strong> fournisseurs</strong>, <strong>banques</strong> et 
        <strong> screening ESG</strong>.
      </p>

      {/* PARAGRAPHE POSITIONNEMENT */}
      <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
        Certif-Scope calcule votre indicateur CO₂e (méthode spend-based : dépenses × facteurs d’émission) 
        et génère une <strong>attestation PDF professionnelle, archivable et vérifiable</strong>. 
        Alternative simplifiée au bilan carbone complet (3 000 € à 10 000 €).
      </p>

      {/* PREUVES */}
      <div className="mt-6 space-y-2 text-sm text-slate-600 max-w-xl mx-auto">
        <p>✓ Format standardisé prêt à transmettre</p>
        <p>✓ Vérification indépendante (QR + identifiant unique)</p>
        <p>✓ Calcul local — aucune donnée financière stockée</p>
        <p>✓ Validité 1 an</p>
      </div>

      {/* PRIX */}
      <p className="mt-6 text-sm md:text-base font-semibold text-[#0B3A63]">
        À partir de 89 € • Sans abonnement • Validité 1 an
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <Link
          href="/fr/generate"
          className="bg-[#15B097] hover:bg-[#0FA08A] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-colors text-base"
        >
          Générer mon bilan carbone PME
        </Link>

        <Link
          href="/fr/why-companies-ask/attestation-carbone-pme"
          className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
        >
          Voir un exemple d’attestation
        </Link>
      </div>

      {/* MINI TABLEAU COMPARATIF */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="border border-slate-200 rounded-2xl bg-white shadow-sm p-6 text-sm">
          <p className="uppercase text-xs tracking-wider text-slate-500 mb-4">
            Comparaison rapide
          </p>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="font-semibold text-slate-500">
              Bilan carbone cabinet
            </div>
            <div className="font-semibold text-[#0B3A63]">
              Certif-Scope
            </div>

            <div>3 000 € – 10 000 €</div>
            <div className="text-[#15B097] font-semibold">89 €</div>

            <div>4 à 8 semaines</div>
            <div className="text-[#15B097] font-semibold">10 minutes</div>

            <div>Audit complet Scopes 1–2–3</div>
            <div>Indicateur CO₂e indicatif</div>

            <div>Collecte complexe</div>
            <div>Données globales de dépenses</div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="Exemple d’attestation CO₂e indicative pour bilan carbone PME — PDF vérifiable"
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* DISCLAIMER SEO */}
      <p className="text-xs text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses (GHG Protocol — approche spend-based).
        Ne constitue pas un audit carbone complet, ni un inventaire GES, ni un reporting CSRD/ESRS.
      </p>
    </section>
  );
}
