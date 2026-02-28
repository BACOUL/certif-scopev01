// PATH: src/app/fr/pricing/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import GenerateAttestationButton from "@/components/GenerateAttestationButton";

/* ======================================================
   SEO — PRICING FR (FR-FIRST)
   Objectif : capter intention "prix bilan carbone PME / pas cher / coût"
   Sans mentir : attestation CO₂e indicative spend-based (screening), pas audit.
====================================================== */

export const metadata: Metadata = {
  title:
    "Prix bilan carbone PME : 89€ + packs (alternative pas chère, sans audit) — Certif-Scope",
  description:
    "Prix bilan carbone PME : alternative spend-based à 89€ (dépenses × facteurs d’émission). Attestation CO₂e indicative en PDF, standardisée et vérifiable, utile pour appels d’offres, référencement fournisseur, banque/assurance (screening). Sans abonnement. Valable 1 an.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
      en: "https://www.certif-scope.com/pricing/",
      de: "https://www.certif-scope.com/de/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title: "Prix bilan carbone PME : 89€ + packs — Certif-Scope",
    description:
      "Alternative spend-based à 89€ : attestation CO₂e indicative en PDF, standardisée et vérifiable (screening). Utile pour appels d’offres, fournisseurs, banque/assurance. Sans abonnement. Validité 1 an.",
    url: "https://www.certif-scope.com/fr/pricing/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPageFR() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Bilan carbone PME pas cher — Prix & packs
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Prix d’un bilan carbone PME : 89€ + packs
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Un <strong>bilan carbone complet</strong> pour une PME peut coûter{" "}
          <strong>plusieurs milliers d’euros</strong> (collecte, périmètres,
          hypothèses, vérification). Certif-Scope répond à un besoin différent :{" "}
          <strong>une attestation CO₂e indicative</strong> (modèle spend-based :{" "}
          <strong>dépenses × facteurs d’émission</strong>) pour{" "}
          <strong>screening</strong> et <strong>preuve minimale</strong> (appel
          d’offres, référencement fournisseur, banque/assurance). Prix fixe,{" "}
          <strong>sans abonnement</strong>. Validité <strong>1 an</strong>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
          >
            Générer mon attestation →
          </Link>

          <Link
            href="/fr/bilan-carbone-pme"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Guide : bilan carbone PME
          </Link>

          <Link
            href="/fr/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier un document
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* VALUE STRIP — WHY THIS PRICE */}
      <section className="mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Pourquoi moins cher
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pas d’audit terrain. Pas de collecte de données physiques (kWh, km,
              litres). Modèle spend-based pour une réponse rapide de screening.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que vous obtenez
            </p>
            <p className="text-gray-700 leading-relaxed">
              Un PDF standardisé, daté, archivable, avec résultat CO₂e agrégé,
              méthode déclarée, limites explicites et vérification.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Cadre (important)
            </p>
            <p className="text-gray-700 leading-relaxed">
              Document indicatif pour screening (achats, banque/assurance, AO si
              demande générique). Ce n’est pas un audit ni un inventaire complet.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING GRID — SAME DESIGN AS EN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* SINGLE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Attestation unique
          </h2>

          <p className="text-5xl font-extrabold text-[#15B097] mb-1 tracking-tight">
            89€
          </p>
          <p className="text-sm text-gray-500 mb-4">Validité 1 an</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            PDF instantané • Vérification QR • Garanties d’intégrité intégrées
          </p>

          <ul className="text-left mx-auto max-w-xs space-y-2 text-gray-700 text-sm mb-8">
            <li>• PDF CO₂e standardisé</li>
            <li>• Identifiant de vérification unique</li>
            <li>• Vérification via QR code</li>
            <li>• Méthode + version des facteurs</li>
            <li>• Validité 1 an</li>
          </ul>

          <GenerateAttestationButton />
        </div>

        {/* PACK 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 5
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">349€</p>
          <p className="text-sm text-gray-500 mb-4">(69€ par attestation)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Pour un usage récurrent (multi-dossiers, multi-acheteurs).
          </p>

          <a
            href="/api/checkout-pack?pack=5"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 5
          </a>
        </div>

        {/* PACK 10 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 10
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">590€</p>
          <p className="text-sm text-gray-500 mb-4">(59€ par attestation)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Idéal pour une demande régulière sur l’année.
          </p>

          <a
            href="/api/checkout-pack?pack=10"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 10
          </a>
        </div>

        {/* PACK 50 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col col-span-full lg:col-span-1 mx-auto">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack de 50
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">2,450€</p>
          <p className="text-sm text-gray-500 mb-4">(49€ par attestation)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Conçu pour des écosystèmes fournisseurs étendus.
          </p>

          <a
            href="/api/checkout-pack?pack=50"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center"
          >
            Acheter le pack de 50
          </a>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center col-span-full flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Enterprise & API
          </h2>

          <p className="text-4xl font-extrabold text-gray-400 mb-3">
            Bientôt disponible
          </p>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Émission automatisée et intégrations pour plateformes et grands
            comptes.
          </p>

          <button
            disabled
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed mx-auto"
          >
            Accès Enterprise — 2026
          </button>
        </div>
      </div>

      {/* TRUST / COMPARISON — SIMPLE, NO OVERPROMISE */}
      <section className="mt-16">
        <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Comparer rapidement : “pas cher” veut dire “bon niveau”
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>Certif-Scope (89€)</strong> : attestation CO₂e{" "}
              <strong>indicative</strong> spend-based, résultat agrégé, limites
              explicites, document vérifiable, prêt à transmettre.
            </li>
            <li>
              <strong>Cabinet (plusieurs milliers d’€)</strong> : inventaire plus
              détaillé, collecte de données d’activité, périmètres et hypothèses
              approfondis, parfois vérification/assurance.
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Si un cahier des charges impose explicitement une norme, un périmètre
            ou une vérification, il faut suivre ce cadre. Sinon, une attestation
            de screening répond souvent au besoin documentaire.
          </p>
        </div>
      </section>

      {/* FAQ — SEO */}
      <section className="mt-16" id="faq">
        <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Questions fréquentes sur le prix d’un bilan carbone PME
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-[#0B3A63] mb-2">
              Est-ce un bilan carbone réglementaire / certifié ?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Non. C’est une <strong>estimation indicative</strong> (screening)
              basée sur les dépenses (spend-based). Elle ne constitue pas un
              audit, ni un inventaire complet des émissions, ni un reporting
              CSRD/ESRS.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-[#0B3A63] mb-2">
              Pourquoi c’est “pas cher” par rapport à un cabinet ?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Parce que l’objectif est différent : pas de collecte de données
              d’activité (kWh, km, litres), pas d’audit terrain, et un livrable
              standardisé conçu pour répondre vite à des demandes de preuve
              minimale.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-[#0B3A63] mb-2">
              Est-ce acceptable en appel d’offres ?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Souvent oui si la demande vise un indicateur de screening et si le
              document annonce clairement son périmètre et ses limites. Si
              l’appel d’offres impose explicitement un standard, un périmètre ou
              une vérification, il faut s’y conformer.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-[#0B3A63] mb-2">
              Pourquoi la validité est-elle de 1 an ?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Les demandes CO₂e et critères ESG sont généralement revus sur une
              base annuelle. Une attestation par année couverte facilite
              l’archivage et la comparaison.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-[#0B3A63] mb-2">
              Est-ce que vous stockez mes dépenses ou mon PDF ?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Les calculs sont effectués localement dans le navigateur. Les
              dépenses détaillées ne sont pas envoyées. Le serveur ne conserve
              pas le PDF. La conservation du document reste côté entreprise ;
              une réémission est possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-16">
        <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
          <h2 className="text-2xl font-extrabold mb-3">
            Obtenir une attestation CO₂e indicative à 89€ (sans abonnement)
          </h2>
          <p className="text-white/90 leading-relaxed max-w-2xl">
            Pour répondre rapidement à une demande “bilan carbone” (screening)
            avec un PDF clair, standardisé, daté, archivable et vérifiable — sans
            audit complet.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/fr/generate"
              className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
            >
              Générer mon attestation
            </Link>
            <Link
              href="/fr/bilan-carbone-pme"
              className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Lire le guide “bilan carbone PME”
            </Link>
            <a
              href="#top"
              className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Haut de page
            </a>
          </div>
        </div>
      </section>

      <p className="text-gray-600 text-center text-xs mt-12 leading-relaxed">
        Estimation CO₂e indicative basée sur les dépenses (spend-based). Non
        auditée. Ne constitue pas un inventaire GES complet, un audit, ni un
        reporting CSRD/ESRS.
      </p>
    </section>
  );
            }
