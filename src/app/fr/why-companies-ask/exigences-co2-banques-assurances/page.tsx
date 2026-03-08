// PATH: src/app/fr/why-companies-ask/exigences-co2-banques-assurances/page.tsx

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
    "Bilan carbone demandé par une banque ou un assureur — Pourquoi et quoi fournir — Certif-Scope (FR)",
  description:
    "Comprendre pourquoi une banque ou un assureur demande un “bilan carbone” : usage screening ESG / risque, ce qui est attendu en pratique, et quand un document CO₂e indicatif est acceptable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
  },
  openGraph: {
    title:
      "Bilan carbone demandé par une banque ou un assureur — Pourquoi et quoi fournir",
    description:
      "Pourquoi les acteurs financiers demandent un “bilan carbone” et comment répondre avec un document CO₂e indicatif, standardisé et cadré.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: false, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function FinanceCO2RequirementsFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances";

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
        name: "Bilan carbone demandé par une banque ou un assureur",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone demandé par une banque ou un assureur",
    url: pageUrl,
    description:
      "Guide pratique : pourquoi une banque ou un assureur demande un “bilan carbone” (screening ESG / analyse de risque), ce qui est attendu en pratique et quand un document indicatif est acceptable.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: jsonLdBreadcrumb,
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
    sameAs: [],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce obligatoire légalement pour une PME ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pas en tant qu’obligation directe de reporting. La demande intervient le plus souvent dans une politique ESG interne (screening) ou une collecte d’informations.",
        },
      },
      {
        "@type": "Question",
        name: "Une estimation indicative est-elle acceptée ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Oui, si la demande vise un indicateur informatif et si le document annonce explicitement ses limites : estimation, non auditée, non CSRD/ESRS.",
        },
      },
      {
        "@type": "Question",
        name: "Que faire si on me demande ISO 14064-1 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Il faut demander le périmètre exact attendu (scopes, assurance externe, périmètre organisationnel). Une estimation indicative n’est pas un inventaire ISO.",
        },
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone par une banque ou un assureur",
    description:
      "Process simple pour répondre avec un document CO₂e indicatif adapté au screening ESG.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le niveau attendu",
        text:
          "Vérifiez si la demande impose un référentiel, un périmètre ou une vérification externe.",
      },
      {
        "@type": "HowToStep",
        name: "Produire un document indicatif",
        text:
          "Fournissez un résultat CO₂e agrégé, l’année couverte, la méthode utilisée et des limites explicites.",
      },
      {
        "@type": "HowToStep",
        name: "Clarifier les limites",
        text:
          "Indiquez que le document est indicatif et ne constitue pas un audit ni un inventaire complet.",
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Comprendre les demandes “bilan carbone”
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Bilan carbone demandé par une banque ou un assureur
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les institutions financières demandent parfois un “bilan carbone”
          dans leurs dossiers. Dans la majorité des cas, il s’agit d’un{" "}
          <strong>indicateur informatif</strong> pour un screening ESG interne,
          et non d’un audit carbone complet.
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

      {/* CONTENU */}
      <div className="max-w-4xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Pourquoi cette demande existe
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Les banques et assureurs utilisent des indicateurs environnementaux
            pour compléter leurs analyses de risque. Le CO₂e est souvent utilisé
            comme un indicateur simple permettant d’archiver une information
            environnementale dans un dossier client.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Ce qui est généralement attendu
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>résultat CO₂e agrégé</li>
            <li>année couverte</li>
            <li>méthode utilisée</li>
            <li>mentions de limites (indicatif, non audit)</li>
            <li>document PDF archivable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Aller plus loin
          </h2>

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
      </div>
    </section>
  );
       }
