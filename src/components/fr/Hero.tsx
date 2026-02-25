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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC] -z-10" />

      {/* SURTITRE SEO */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-3">
        Bilan carbone entreprise (PME) — document CO₂e pour dossiers (screening)
      </p>

      {/* H1 (Bleu dominant, accent turquoise court) */}
      <h1 className="text-[2.1rem] md:text-[3.15rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Bilan carbone PME&nbsp;:
        <br />
        une attestation CO₂e{" "}
        <span className="text-[#15B097]">vérifiable</span>
      </h1>

      {/* PROMESSE BUSINESS (premium, pas “10 minutes”) */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Un document CO₂e clair, <strong>standardisé</strong> et <strong>archivable</strong> pour{" "}
        <strong>appels d’offres</strong>, <strong>onboarding fournisseurs</strong>,{" "}
        <strong>banques</strong> et <strong>screening ESG</strong>.
      </p>

      {/* POSITIONNEMENT (honnête, institutionnel) */}
      <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
        Certif-Scope calcule un <strong>indicateur CO₂e indicatif</strong> (méthode spend-based&nbsp;:
        dépenses × facteurs d’émission) et génère une{" "}
        <strong>attestation PDF professionnelle</strong> avec identifiant et vérification.{" "}
        Alternative simplifiée quand un bilan carbone complet n’est pas exigé explicitement.
      </p>

      {/* PREUVES (visuel premium, sans “vert”) */}
      <div className="mt-7 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-[#0B3A63]">Standardisé</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Format stable, lisible, prêt à intégrer dans un dossier.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-[#0B3A63]">Vérifiable</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Identifiant + page de vérification pour un tiers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-[#0B3A63]">Confidentiel</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Calcul local dans le navigateur. Aucune donnée financière détaillée stockée.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-[#0B3A63]">Valable 12 mois</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Document daté, stable, conçu pour des workflows institutionnels.
            </p>
          </div>
        </div>
      </div>

      {/* PRIX (ligne premium) */}
      <p className="mt-7 text-sm md:text-base font-semibold text-[#0B3A63]">
        À partir de 89&nbsp;€ • Sans abonnement • Validité 1 an
      </p>

      {/* CTA (sans “voir exemple”) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <Link
          href="/fr/generate/"
          className="bg-[#15B097] hover:bg-[#109A86] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-colors text-base"
          aria-label="Générer une attestation CO₂e indicative"
        >
          Générer mon attestation CO₂e
        </Link>

        <Link
          href="/fr/verify/"
          className="border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
          aria-label="Vérifier une attestation CO₂e"
        >
          Vérifier une attestation
        </Link>
      </div>

      {/* MINI COMPARAISON (turquoise en accent seulement) */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="border border-slate-200 rounded-2xl bg-white shadow-sm p-6 text-sm">
          <p className="uppercase text-xs tracking-wider text-slate-500 mb-4">
            Comparaison rapide
          </p>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="font-semibold text-slate-500">Bilan carbone cabinet</div>
            <div className="font-semibold text-[#0B3A63]">Certif-Scope</div>

            <div>3&nbsp;000&nbsp;€ – 10&nbsp;000&nbsp;€</div>
            <div className="font-semibold text-[#0B3A63]">
              89&nbsp;€{" "}
              <span className="ml-2 inline-flex items-center rounded-full border border-[#15B097]/30 bg-[#15B097]/10 px-2 py-0.5 text-xs font-semibold text-[#0B3A63]">
                prix fixe
              </span>
            </div>

            <div>4 à 8 semaines</div>
            <div className="font-semibold text-[#0B3A63]">
              En quelques minutes{" "}
              <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-[#F8FAFC] px-2 py-0.5 text-xs font-semibold text-slate-600">
                sans audit
              </span>
            </div>

            <div>Audit complet (selon mission)</div>
            <div>Indicateur CO₂e indicatif</div>

            <div>Collecte complexe</div>
            <div>Données globales de dépenses</div>
          </div>
        </div>
      </div>

      {/* IMAGE (optionnelle, premium) */}
      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="Attestation CO₂e indicative Certif-Scope : document standardisé, archivable et vérifiable."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* DISCLAIMER (honnêteté + SEO safe) */}
      <p className="text-xs text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses (approche spend-based). Ne constitue pas un audit carbone complet,
        ni un inventaire GES, ni un reporting CSRD/ESRS.
      </p>
    </section>
  );
}
