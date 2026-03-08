// PATH: src/app/fr/why-companies-ask/attestation-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE SECONDAIRE (DUPLICATE HANDLING)
   Cette page reste accessible pour le maillage interne,
   mais Google doit indexer la page principale :
   /fr/why-companies-ask/attestation-carbone-pme/
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur — Ce qui est réellement demandé — Certif-Scope (FR)",
  description:
    "Comprendre ce que signifie “bilan carbone fournisseur” : indicateur CO₂e attendu par les achats (screening ESG), niveau d’exigence, et comment répondre avec un document indicatif, standardisé et vérifiable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
  },
  openGraph: {
    title: "Bilan carbone fournisseur — Ce qui est réellement demandé",
    description:
      "Pourquoi les acheteurs demandent un “bilan carbone fournisseur”, ce qui est attendu en pratique (screening) et comment répondre avec un document CO₂e indicatif, clair et vérifiable.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: false, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function SupplierCarbonAttestationFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone fournisseur",
    url: pageUrl,
    description:
      "Guide pratique : comprendre ce que recouvre une demande de “bilan carbone fournisseur”, ce qui est attendu par les achats (screening ESG) et comment répondre avec un indicateur CO₂e cohérent et un document indicatif standardisé.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil (FR)",
        item: "https://www.certif-scope.com/fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pourquoi les entreprises le demandent",
        item: "https://www.certif-scope.com/fr/why-companies-ask",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bilan carbone fournisseur",
        item: pageUrl,
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Un acheteur peut-il exiger un bilan carbone audité ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Oui, contractuellement un donneur d’ordre peut imposer des exigences. En pratique, la majorité des demandes portent sur un indicateur simple pour screening. Si une exigence auditée est formulée, il faut demander le standard et le périmètre exact.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que “bilan carbone fournisseur” veut dire “CSRD/ESRS” ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Non. Les demandes aux fournisseurs sont le plus souvent une collecte d’information de chaîne de valeur. Un document indicatif est pertinent comme information de screening, pas comme reporting réglementaire.",
        },
      },
      {
        "@type": "Question",
        name: "Que faire si on me demande “Scope 1 / 2 / 3” ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Il faut clarifier si l’acheteur veut une information indicative ou un inventaire complet vérifié. Si un inventaire complet est exigé, ce n’est pas le bon outil.",
        },
      },
    ],
  };

  return (
    <section
      id="supplier-carbon-attestation"
      data-section="supplier-carbon-attestation"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Comprendre les demandes “bilan carbone”
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Bilan carbone fournisseur : ce qui est réellement demandé
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Dans la majorité des cas, une demande de “bilan carbone fournisseur”
          n’est pas une exigence réglementaire ni un audit. C’est une demande
          opérationnelle des achats : obtenir un <strong>indicateur CO₂e</strong>{" "}
          simple, cohérent et réutilisable pour le screening ESG, l’onboarding
          fournisseur et certains appels d’offres.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Retour au guide
          </Link>

          <Link
            href="/fr/product"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le produit
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl space-y-12">
        <section id="why">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Pourquoi un acheteur demande un “bilan carbone” à un fournisseur
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Les organisations soumises à des attentes de transparence doivent
            collecter des informations environnementales sur leur chaîne de
            valeur. En pratique, cela se traduit par des questionnaires
            fournisseurs, des critères d’achats responsables et des demandes de
            preuve simple pour documenter une décision interne.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
            <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
              Ce que l’acheteur veut obtenir
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>un indicateur CO₂e disponible rapidement</li>
              <li>un format documentable et partageable</li>
              <li>une méthode explicitée et stable</li>
              <li>un document réutilisable sur plusieurs demandes</li>
              <li>un minimum de traçabilité (identifiant, date, version)</li>
            </ul>
          </div>
        </section>

        <section id="acceptable">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Quand c’est acceptable — et quand ça ne l’est pas
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Une demande “bilan carbone fournisseur” est généralement acceptable
            quand elle sert au <strong>screening</strong>, à l’{" "}
            <strong>onboarding</strong> ou à une{" "}
            <strong>comparaison interne</strong>. Elle ne l’est pas si elle est
            utilisée comme substitut à un bilan carbone réglementaire, à une
            certification ou à une assurance externe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cas le plus fréquent
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>questionnaires RSE / ESG fournisseurs</li>
                <li>pré-qualification avant contrat</li>
                <li>appel d’offres avec critère informatif</li>
                <li>reporting interne achats responsables</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cas à cadrer / refuser
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>demande d’audit ou d’assurance externe</li>
                <li>exigence explicite d’un standard audité</li>
                <li>reporting CSRD / ESRS officiel</li>
                <li>demande de scopes complets et vérifiés</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="what-to-provide">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Ce que votre client attend comme preuve
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>nom de l’organisation</li>
              <li>année couverte + date d’émission</li>
              <li>résultat CO₂e agrégé</li>
              <li>méthode déclarée</li>
              <li>identifiant unique</li>
              <li>mentions visibles : indicatif, non audit, non CSRD/ESRS</li>
            </ul>
          </div>
        </section>

        <section id="how-to-answer">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Comment répondre sans risque
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>À utiliser :</strong> “indicateur CO₂e indicatif”,
                “estimation spend-based”, “document de screening ESG”.
              </li>
              <li>
                <strong>À éviter :</strong> “certifié”, “conforme CSRD/ESRS”,
                “audit carbone”, “bilan carbone réglementaire complet”.
              </li>
            </ul>
          </div>
        </section>

        <section id="why-standard">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Pourquoi un document standardisé aide réellement
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Un document standardisé réduit le temps passé à répondre à chaque
            questionnaire, les incompréhensions sur le périmètre et la méthode,
            et les aller-retours avec les équipes achats.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/fr/bilan-carbone-pme/"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Guide bilan carbone PME
            </Link>
            <Link
              href="/fr/why-companies-ask/attestation-carbone-pme/"
              className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Attestation carbone PME
            </Link>
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                Un acheteur peut-il exiger un bilan carbone audité ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, contractuellement un donneur d’ordre peut imposer des
                exigences. En pratique, la majorité des demandes portent sur un
                indicateur simple pour screening. Si une exigence auditée est
                formulée, demandez le standard et le périmètre exact.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                Est-ce que “bilan carbone fournisseur” veut dire “CSRD/ESRS” ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Non. Les demandes aux fournisseurs sont le plus souvent une
                collecte d’information de chaîne de valeur. Un document indicatif
                est pertinent comme information de screening, pas comme reporting
                réglementaire.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                Que faire si on me demande “Scope 1 / 2 / 3” ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Il faut clarifier si l’acheteur veut une information indicative
                ou un inventaire complet vérifié. Si un inventaire complet est
                exigé, ce n’est pas le bon outil.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="pt-2">
          <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">
              Répondre vite, sans ambiguïté, avec un document standard
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl">
              Si votre client vous demande un “bilan carbone fournisseur”,
              l’objectif est souvent un indicateur CO₂e utilisable en screening
              achats. Certif-Scope produit un document indicatif, structuré,
              traçable et vérifiable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/pricing"
                className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
              >
                Voir le prix
              </Link>
              <Link
                href="/fr/product"
                className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Comprendre le produit
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/fr/why-companies-ask"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Retour au guide
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
     }
