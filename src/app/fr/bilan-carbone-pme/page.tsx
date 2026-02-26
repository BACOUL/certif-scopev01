// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE PILIER FR
   Objectif : dominer "bilan carbone PME" + intentions associées
   (fournisseur, appel d’offres, banque/assurance, "que fournir")
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : que fournir, que dire, et comment répondre sans audit complet — Certif-Scope",
  description:
    "Page de référence : bilan carbone PME. Comprendre ce qui est réellement demandé (screening), quoi fournir quand on n’a pas d’audit, et comment produire une attestation CO₂e indicative standardisée, vérifiable et réutilisable.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme",
      en: "https://www.certif-scope.com/bilan-carbon-sme", // à créer (pilier EN)
      de: "https://www.certif-scope.com/de/co2-bilanz-kmu", // à créer (pilier DE)
    },
  },
  openGraph: {
    title:
      "Bilan carbone PME : que fournir quand on n’a pas de bilan complet (guide + solution)",
    description:
      "Ce qu’un tiers attend vraiment (achats, banques, assureurs) et comment répondre avec un document CO₂e indicatif, standardisé et vérifiable, sans audit complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ======================================================
   PAGE PILIER FR — "BILAN CARBONE PME"
====================================================== */

export default function BilanCarbonePMEPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme";

  const faq = [
    {
      q: "Qu’est-ce qu’un bilan carbone pour une PME ?",
      a: "Un bilan carbone est une estimation des émissions de gaz à effet de serre (CO₂e) d’une entreprise sur une période donnée. Pour une PME, la demande reçue vise souvent un indicateur simple de screening, pas un inventaire complet audité.",
    },
    {
      q: "Suis-je obligé de réaliser un bilan carbone complet ?",
      a: "Dans la majorité des cas, non. Beaucoup de demandes proviennent d’achats, de banques ou d’assureurs et relèvent d’un besoin de documentation interne (screening). Si un audit ou une norme est exigée, cela doit être explicitement écrit dans le cahier des charges.",
    },
    {
      q: "Que fournir quand on n’a pas de bilan carbone complet ?",
      a: "Un document clair et cadré : un résultat CO₂e agrégé (indicatif), l’année couverte, la méthode déclarée, les limites (non audit, non CSRD/ESRS, non inventaire complet) et un moyen de vérification du document (ID + vérification).",
    },
    {
      q: "Quelle est la différence entre une estimation indicative et un bilan carbone complet ?",
      a: "Une estimation indicative sert à répondre rapidement à une demande de screening. Un bilan carbone complet sert à un inventaire détaillé (données d’activité, périmètres, hypothèses) et peut nécessiter un accompagnement spécialisé. Ce sont deux objets différents.",
    },
    {
      q: "Est-ce acceptable pour un appel d’offres ou un donneur d’ordre ?",
      a: "Souvent oui, si la demande vise un indicateur de screening et si le document annonce clairement ses limites. Si l’appel d’offres impose explicitement un standard audité ou un périmètre précis, il faut suivre ce cadre.",
    },
    {
      q: "Que faire si on me demande Scope 1 / 2 / 3 ?",
      a: "Demandez d’abord si l’objectif est du screening ou un inventaire complet. Certif-Scope produit une estimation indicative spend-based à partir des dépenses, avec un résultat agrégé, et ne remplace pas un inventaire complet par scopes.",
    },
    {
      q: "Quelles données sont nécessaires ?",
      a: "Uniquement des dépenses annuelles par catégories. Aucune donnée d’activité (kWh, km, litres) n’est requise pour ce modèle spend-based.",
    },
    {
      q: "Comment la confidentialité est-elle assurée ?",
      a: "Les calculs sont effectués localement dans le navigateur. Les dépenses détaillées ne sont pas envoyées. Seul le résultat CO₂e final agrégé et des métadonnées non sensibles servent à émettre l’attestation.",
    },
    {
      q: "Combien de temps cela prend-il ?",
      a: "Quelques minutes, selon la disponibilité de vos montants annuels. Le but est de produire un document réutilisable, sans itérations longues.",
    },
    {
      q: "Le document est-il vérifiable par un tiers ?",
      a: "Oui. L’attestation est conçue pour être vérifiée indépendamment (ID + éléments de vérification), sans dépendre d’un compte ou d’un accès privé.",
    },
    {
      q: "Quelle est la validité d’une attestation ?",
      a: "En pratique, les demandes portent sur une année donnée. Il est recommandé d’émettre une attestation par année couverte, puis de réémettre si l’année change ou si vos données évoluent.",
    },
    {
      q: "Puis-je réémettre si je perds le PDF ?",
      a: "Oui, une réémission est possible. En revanche, le modèle est conçu pour éviter tout stockage de vos documents : la responsabilité de conservation du PDF reste côté entreprise.",
    },
  ];

  // JSON-LD helpers
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME",
    url: pageUrl,
    description:
      "Page de référence : bilan carbone PME. Comprendre ce qui est demandé (screening) et comment répondre avec une attestation CO₂e indicative, standardisée et vérifiable, sans audit complet.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: {
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
          name: "Bilan carbone PME",
          item: pageUrl,
        },
      ],
    },
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative (spend-based) pour PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative",
    description:
      "Service de génération d’une attestation CO₂e indicative (modèle spend-based) à partir des dépenses annuelles, destinée aux workflows achats, banque, assurance et screening ESG. Ce service ne constitue pas un audit, ni un inventaire complet, ni un reporting CSRD/ESRS.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone quand on est une PME",
    description:
      "Process en 3 étapes pour produire une attestation CO₂e indicative à partir des dépenses annuelles, dans un format standardisé et vérifiable.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Renseigner les dépenses annuelles",
        text: "Indiquez vos dépenses annuelles par catégories prédéfinies. Aucune donnée d’activité (kWh, km, litres) n’est requise.",
      },
      {
        "@type": "HowToStep",
        name: "Calcul automatique spend-based",
        text: "Le modèle spend-based applique une formule simple (dépenses € × facteur d’émission) pour produire un résultat CO₂e agrégé.",
      },
      {
        "@type": "HowToStep",
        name: "Télécharger l’attestation standardisée",
        text: "Téléchargez un PDF standardisé contenant le résultat CO₂e agrégé, l’année couverte, la méthode et les informations de vérification.",
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="bilan-carbone-pme"
      data-section="bilan-carbone-pme"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage + Service + HowTo + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Page de référence — Bilan carbone PME (screening)
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Bilan carbone PME : que fournir, que dire, et comment répondre sans audit
          complet
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Beaucoup de PME reçoivent des demandes “bilan carbone” de la part de
          clients, acheteurs, banques ou assureurs. Dans la majorité des cas, il
          s’agit d’un besoin de <strong>screening</strong> : un indicateur CO₂e
          simple, documenté et archivable, plutôt qu’un inventaire complet audité.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#1FB6C1] text-white hover:bg-[#17a2a8] transition-colors font-semibold"
          >
            Générer mon attestation →
          </Link>

          <Link
            href="/fr/pricing"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Voir le prix
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

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1. Definition */}
          <section id="definition">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Qu’est-ce qu’un bilan carbone (pour une PME) ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un bilan carbone est une estimation des émissions de gaz à effet de
              serre d’une organisation, exprimée en CO₂e, sur une période donnée
              (souvent une année). En pratique, la demande “bilan carbone PME”
              recouvre deux réalités : un <strong>screening</strong> (document
              indicatif) ou un <strong>inventaire complet</strong> (détaillé).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                La formulation la plus fréquente côté acheteur
              </h3>
              <p className="text-gray-700 leading-relaxed">
                “Pouvez-vous fournir une information CO₂e / un bilan carbone ?”
                <br />
                Dans la majorité des cas, l’objectif est de disposer d’un indicateur
                et d’un document archivable pour un dossier fournisseur, pas de vous
                imposer un audit.
              </p>
            </div>
          </section>

          {/* 2. Why asked */}
          <section id="why-asked">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Pourquoi on demande un bilan carbone aux PME ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les grandes entreprises et certaines institutions sont soumises à des
              obligations et à des politiques internes (achats responsables, gestion
              des risques, critères ESG). Elles collectent donc des informations
              environnementales dans leur chaîne de valeur et lors de l’onboarding.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>référencement fournisseur et renouvellement de contrat</li>
              <li>appel d’offres et grille d’évaluation</li>
              <li>screening banque / assurance et documentation interne</li>
              <li>pilotage ESG interne (même sans obligation réglementaire PME)</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed">
                Une PME n’est pas “en retard” parce qu’elle n’a pas d’audit : elle
                fait face à une demande de <strong>preuve minimale</strong>.
                L’enjeu est de répondre vite, sans se surdimensionner.
              </p>
            </div>
          </section>

          {/* 3. What is expected */}
          <section id="what-expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Ce qui est réellement attendu (dans la majorité des cas)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une demande “bilan carbone” est souvent générique. En pratique, le
              tiers veut pouvoir cocher “information CO₂e disponible” et archiver
              un document simple, lisible et cadré.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist minimale (screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un résultat CO₂e agrégé (indicatif)</li>
                <li>l’année couverte + une date d’émission</li>
                <li>la méthode déclarée (ex. spend-based)</li>
                <li>un document standard (PDF) identifiable</li>
                <li>des limites explicites (non audit, non CSRD/ESRS)</li>
                <li>un moyen de vérification du document (contrôle tiers)</li>
              </ul>
            </div>
          </section>

          {/* 4. Difference */}
          <section id="difference">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Estimation indicative vs bilan carbone complet : la différence
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le point clé : une estimation indicative sert à répondre à une demande
              de screening. Un bilan complet sert à un inventaire détaillé et à un
              pilotage approfondi. Confondre les deux fait perdre du temps et de
              l’argent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Document indicatif (screening)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>objectif : répondre vite et proprement</li>
                  <li>résultat agrégé + méthode déclarée</li>
                  <li>limites visibles et assumées</li>
                  <li>format standard, réutilisable</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Bilan carbone complet (inventaire)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>objectif : inventaire détaillé et pilotage</li>
                  <li>données d’activité, hypothèses, périmètres</li>
                  <li>souvent vérification / assurance</li>
                  <li>coût et délai plus élevés</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Phrase simple à retenir
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Screening = indicateur + document cadré. Inventaire = démarche complète.
              </p>
            </div>
          </section>

          {/* 5. How to respond (HowTo aligned) */}
          <section id="how-to-respond">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Comment répondre efficacement (sans surdimensionner)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La meilleure réponse est un document standard, lisible et réutilisable,
              qui annonce clairement son périmètre et ses limites. C’est ce qui réduit
              les allers-retours et les questionnaires.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formulations sûres (à copier)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>À utiliser :</strong> “estimation CO₂e indicative”, “estimation
                  spend-based”, “usage screening”, “non auditée”, “résultat agrégé”.
                </li>
                <li>
                  <strong>À éviter :</strong> “certifiée”, “conforme CSRD/ESRS”, “audit
                  carbone”, “inventaire complet”, si ce n’est pas explicitement le cas.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si un tiers exige un standard (ISO, audit), demandez : la norme exacte, le
                  périmètre, les attentes (scopes, niveau d’assurance) et le livrable requis.
                  Sans ces précisions, la demande est généralement du screening.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Method (spend-based) */}
          <section id="method">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. La méthode spend-based : simple, transparente, adaptée au screening
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pour produire une estimation indicative rapidement, Certif-Scope utilise une
              approche spend-based : les dépenses annuelles sont converties en CO₂e via des
              facteurs d’émission (par euro dépensé), puis agrégées.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formule (niveau screening)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>CO₂e (t)</strong> = Σ (dépenses catégorie i en € × facteur d’émission i)
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Cette approche ne remplace pas une comptabilité carbone exhaustive. Elle vise un
                indicateur agrégé documentable, utile pour répondre aux demandes courantes.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Limites (à connaître et à assumer)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat indicatif, dépendant des dépenses déclarées</li>
                <li>pas de collecte de données physiques (kWh, km, litres)</li>
                <li>pas de ventilation par scopes 1/2/3 dans ce modèle</li>
                <li>pas de reporting CSRD/ESRS, pas d’audit</li>
              </ul>
            </div>
          </section>

          {/* 7. What you get */}
          <section id="what-you-get">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7. Ce que vous obtenez (le document attendu par un tiers)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le livrable est un PDF standardisé conçu pour être lu rapidement et archivé.
              Il contient un résultat agrégé, des métadonnées essentielles, et des éléments
              de vérification.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Contenu typique d’une attestation (screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>nom entité (identification faible) + année couverte</li>
                <li>résultat CO₂e agrégé (tCO₂e)</li>
                <li>méthode déclarée + version</li>
                <li>sources de facteurs (niveau de référence)</li>
                <li>clauses visibles : indicative, non audit, non CSRD/ESRS</li>
                <li>ID + vérification (contrôle indépendant)</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/product"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Voir le produit
              </Link>
              <Link
                href="/fr/verify"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Vérifier un document
              </Link>
              <Link
                href="/fr/why-companies-ask/attestation-carbone-pme"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Guide détaillé : “que fournir ?”
              </Link>
            </div>
          </section>

          {/* 8. Use cases */}
          <section id="use-cases">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              8. Cas d’usage : client, appel d’offres, banque, assurance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Référencement fournisseur (client / acheteur)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Objectif : fournir un document simple et archivable. Le tiers veut une
                  information CO₂e cadrée, comparable et réutilisable.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/bilan-carbone-fournisseur">
                    Aller plus loin : bilan carbone fournisseur →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Appel d’offres
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Objectif : ne pas bloquer le dossier sur une exigence “bilan carbone”.
                  Si le besoin est du screening, une attestation indicative cadrée suffit
                  souvent. Si un standard est imposé, il faut suivre le cahier des charges.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/bilan-carbone-appel-offres">
                    Aller plus loin : appel d’offres →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Banque / assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Objectif : fournir une documentation minimale pour un screening risque/ESG.
                  Le document doit être clair, daté, et présenter ses limites.
                </p>
                <div className="mt-4">
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/why-companies-ask/bilan-carbone-banque-assurance"
                  >
                    Aller plus loin : banque / assurance →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Scopes 1 / 2 / 3 : quand c’est demandé
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Une demande “scopes” peut signaler un niveau plus exigeant. Clarifiez l’objectif :
                  screening ou inventaire. Certif-Scope reste sur une estimation spend-based agrégée.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/scope-1-2-3-explication">
                    Aller plus loin : scopes expliqués →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Privacy */}
          <section id="privacy">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              9. Confidentialité : privacy-by-design (calcul local)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif est de minimiser l’exposition de données sensibles. Les calculs sont
              réalisés localement dans votre navigateur. Les dépenses détaillées ne sont pas
              envoyées. Seul un résultat CO₂e agrégé et des métadonnées non sensibles servent à
              émettre l’attestation.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                En pratique
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>pas de stockage des dépenses détaillées</li>
                <li>pas de conservation du PDF côté serveur</li>
                <li>réémission possible si nécessaire</li>
                <li>vérification possible par un tiers</li>
              </ul>
            </div>
          </section>

          {/* 10. FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              10. FAQ — Bilan carbone PME
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre à une demande “bilan carbone” avec un document clair, sans audit
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope produit une attestation CO₂e indicative (spend-based) à partir des
                dépenses annuelles. Le document est standardisé, réutilisable et conçu pour la
                revue (achats, banque, assurance). Il annonce clairement ses limites : non audit,
                non inventaire complet, non CSRD/ESRS.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Générer mon attestation
                </Link>
                <Link
                  href="/fr/pricing"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Voir le prix
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr/why-companies-ask"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Guides : exigences CO₂e (vue d’ensemble)
              </Link>
              <Link
                href="/fr/difference-bilan-carbone-attestation"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Différence : attestation vs bilan complet
              </Link>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire bilan carbone PME">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#definition">
                      1. Définition
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why-asked">
                      2. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-expected">
                      3. Ce qui est attendu
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#difference">
                      4. Indicatif vs complet
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#how-to-respond">
                      5. Comment répondre
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#method">
                      6. Méthode spend-based
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-you-get">
                      7. Ce que vous obtenez
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#use-cases">
                      8. Cas d’usage
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#privacy">
                      9. Confidentialité
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#faq">
                      10. FAQ
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#cta">
                      Aller plus loin
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel de périmètre (important)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette page vise les demandes “bilan carbone PME” liées au screening (achats, banque,
                assurance). Certif-Scope produit une estimation indicative spend-based à partir des
                dépenses. Ce document ne remplace pas un audit ni un inventaire complet des émissions,
                et ne constitue pas un reporting CSRD/ESRS.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/methodology"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Méthodologie
                </Link>
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Pages liées (cluster FR)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-fournisseur">
                    Bilan carbone fournisseur
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-appel-offres">
                    Bilan carbone en appel d’offres
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/scope-1-2-3-explication">
                    Scopes 1/2/3 : explication
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/difference-bilan-carbone-attestation">
                    Différence : attestation vs bilan complet
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/why-companies-ask/attestation-carbone-pme">
                    Cas “PME : que fournir ?”
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Accès rapide
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/fr"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Accueil FR
                </Link>
                <a
                  href="#top"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Haut de page
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
      }
