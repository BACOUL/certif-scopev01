// PATH: src/app/fr/attestation-carbone/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE CONVERSION FR
   Objectif : "attestation carbone"
====================================================== */

export const metadata: Metadata = {
  title:
    "Attestation carbone entreprise : document CO₂e simple, vérifiable et utilisable | Certif-Scope",
  description:
    "Attestation carbone entreprise : document CO₂e indicatif pour répondre à un client, un appel d’offres ou un référencement fournisseur. Format clair, standardisé, vérifiable et sans audit complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/attestation-carbone/",
    languages: {
      fr: "https://www.certif-scope.com/fr/attestation-carbone/",
    },
  },
  openGraph: {
    title:
      "Attestation carbone entreprise : document CO₂e utilisable immédiatement",
    description:
      "Répondre rapidement à une demande carbone : attestation CO₂e indicative, claire, datée, vérifiable et adaptée aux dossiers PME.",
    url: "https://www.certif-scope.com/fr/attestation-carbone/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function AttestationCarbonePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/attestation-carbone/";

  const faq = [
    {
      q: "Qu’est-ce qu’une attestation carbone ?",
      a: "Une attestation carbone est un document CO₂e qui présente un résultat d’émissions, une méthode, une année couverte et des limites explicites. Elle est souvent utilisée pour répondre à une demande client, fournisseur ou appel d’offres.",
    },
    {
      q: "Une attestation carbone remplace-t-elle un bilan carbone complet ?",
      a: "Non. Une attestation carbone sert à répondre à un besoin de screening documentaire. Elle ne remplace pas un inventaire complet ni un audit réglementaire.",
    },
    {
      q: "Dans quels cas une attestation carbone suffit-elle ?",
      a: "Dans la majorité des cas PME : référencement fournisseur, appel d’offres sans exigence technique, demande d’un client, banque ou assurance.",
    },
    {
      q: "Que contient une attestation carbone ?",
      a: "Un résultat CO₂e agrégé, une année couverte, une méthode déclarée, des limites explicites, un identifiant et un mécanisme de vérification.",
    },
    {
      q: "L’attestation carbone est-elle vérifiable ?",
      a: "Oui. Elle contient un identifiant unique et peut être vérifiée indépendamment pour garantir son intégrité.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* HEADER */}
      <header className="mb-16">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Document carbone PME
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Attestation carbone entreprise :
          <br />
          document CO₂e simple, vérifiable et utilisable
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Une attestation carbone permet de répondre rapidement à une demande
          client, un appel d’offres ou un référencement fournisseur avec un{" "}
          <strong>document CO₂e clair, daté et archivable</strong>, sans lancer
          un audit complet.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block px-6 py-3 rounded-xl bg-[#1FB6C1] text-white font-semibold hover:bg-[#19AAB4]"
          >
            Générer mon attestation →
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block px-5 py-3 rounded-xl border border-[#0B3A63] text-[#0B3A63] font-semibold hover:bg-[#0B3A63] hover:text-white"
          >
            Voir le prix
          </Link>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Pourquoi une attestation carbone est demandée
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Dans la majorité des cas, la demande ne vise pas un audit complet mais
          un document simple permettant de comparer ou d’archiver une information
          environnementale.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>référencement fournisseur</li>
          <li>appel d’offres</li>
          <li>demande client</li>
          <li>banque ou assurance</li>
        </ul>
      </section>

      {/* SECTION 2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Ce que doit contenir une attestation carbone
        </h2>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>résultat CO₂e agrégé</li>
            <li>année couverte</li>
            <li>méthode déclarée</li>
            <li>limites explicites</li>
            <li>PDF standardisé</li>
            <li>identifiant de vérification</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Attestation carbone vs bilan carbone complet
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="p-4 text-left text-[#0B3A63]">Type</th>
                <th className="p-4 text-left text-[#0B3A63]">Usage</th>
                <th className="p-4 text-left text-[#0B3A63]">Complexité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Attestation carbone</td>
                <td className="p-4">Screening / dossier</td>
                <td className="p-4">Faible</td>
              </tr>
              <tr>
                <td className="p-4">Bilan carbone complet</td>
                <td className="p-4">Analyse approfondie</td>
                <td className="p-4">Élevée</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-20">
        <div className="rounded-2xl bg-[#0B3A63] p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Répondre immédiatement à une demande carbone
          </h2>

          <p className="text-white/90 mb-6 max-w-2xl">
            Produisez une attestation carbone claire, standardisée et vérifiable
            pour répondre à un client ou un appel d’offres sans surdimensionner
            votre démarche.
          </p>

          <Link
            href="/fr/generate/"
            className="inline-block px-6 py-3 bg-white text-[#0B3A63] rounded-xl font-semibold"
          >
            Générer mon attestation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
