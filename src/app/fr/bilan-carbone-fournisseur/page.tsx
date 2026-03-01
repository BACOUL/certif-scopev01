// PATH: src/app/fr/bilan-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE FR
   Objectif : capter "bilan carbone fournisseur"
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur : quoi fournir pour être référencé sans audit complet | Certif-Scope",
  description:
    "Bilan carbone fournisseur : comprendre ce que les acheteurs attendent réellement (screening ESG), quoi fournir sans audit complet, et comment produire une attestation CO₂e indicative standardisée et vérifiable.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    },
  },
  openGraph: {
    title: "Bilan carbone fournisseur : quoi fournir pour être référencé",
    description:
      "Répondre aux exigences CO₂e des acheteurs sans audit complet : attestation indicative spend-based, standardisée et vérifiable.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarboneFournisseurPageFR() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* HEADER */}
      <header className="mb-16">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Guide pratique — Bilan carbone fournisseur
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight tracking-tight">
          Bilan carbone fournisseur : quoi fournir pour être référencé sans audit
          complet
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          De nombreuses PME découvrent l’exigence “bilan carbone fournisseur” lors
          d’un référencement ou d’un renouvellement contractuel. Dans la majorité
          des cas, l’acheteur attend un document de screening ESG clair, archivable
          et comparable — pas un audit carbone complet.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Générer mon attestation →
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Voir le prix
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          1) Pourquoi les acheteurs demandent un bilan carbone fournisseur ?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Les grandes entreprises structurent leurs politiques achats responsables,
          gestion du risque et conformité ESG. La collecte d’informations CO₂e
          s’inscrit dans cette logique documentaire.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>référencement fournisseur</li>
          <li>renouvellement contractuel</li>
          <li>politique ESG interne</li>
          <li>exigences liées à la chaîne de valeur (CSRD indirecte)</li>
        </ul>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
          <p className="text-gray-700 leading-relaxed">
            Dans la majorité des cas, l’objectif est comparatif et documentaire.
            L’acheteur veut archiver une preuve CO₂e au bon niveau.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          2) Ce qui est réellement attendu (checklist screening)
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>résultat CO₂e agrégé (indicatif)</li>
          <li>année couverte</li>
          <li>méthode déclarée</li>
          <li>PDF identifiable</li>
          <li>limites explicites</li>
          <li>vérification possible</li>
        </ul>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-gray-700 leading-relaxed">
            L’absence de document bloque souvent davantage qu’un résultat indicatif
            imparfait.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          3) Erreurs fréquentes des PME
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Lancer un audit complet inutilement</li>
          <li>Promettre une ventilation exhaustive Scopes 1/2/3 sans capacité</li>
          <li>Envoyer un tableau non formalisé</li>
          <li>Mélanger attestation indicative et audit réglementaire</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          4) Screening fournisseur : la réponse rationnelle
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Une attestation CO₂e indicative (spend-based) permet une réponse rapide,
          standardisée et réutilisable auprès de plusieurs clients.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Générer une attestation
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le prix
          </Link>
        </div>
      </section>

      {/* 5 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          5) Méthode spend-based : formule claire
        </h2>

        <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
          <p className="text-gray-700 leading-relaxed">
            CO₂e total = Σ (dépenses € × facteur d’émission)
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Sources possibles : ADEME Base Empreinte, GHG Protocol, ISO 14064-1.
            Résultat indicatif, non audit, non CSRD/ESRS.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          6) Vérification indépendante
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          L’attestation comporte un identifiant unique et une vérification publique,
          permettant à un tiers de contrôler l’intégrité du document.
        </p>

        <Link
          href="/verify"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Vérifier un document
        </Link>
      </section>

      {/* CTA FINAL */}
      <section className="mt-20">
        <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
          <h2 className="text-2xl font-extrabold mb-3">
            Répondre à une demande “bilan carbone fournisseur” sans bloquer un contrat
          </h2>

          <p className="text-white/90 leading-relaxed max-w-2xl">
            Produisez une attestation CO₂e indicative spend-based, standardisée et
            vérifiable, adaptée aux workflows procurement lorsque la demande est du
            screening.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
            >
              Générer mon attestation
            </Link>

            <Link
              href="/fr/pricing/"
              className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Voir le prix
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
