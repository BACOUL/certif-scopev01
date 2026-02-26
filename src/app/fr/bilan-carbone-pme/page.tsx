// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE PILIER FR (FR-FIRST)
   Objectif : dominer "bilan carbone PME" + intentions associées
   (fournisseur, appel d’offres, banque/assurance, “obligatoire”, coût, scopes)
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : obligations, coût, Scopes 1/2/3, et quoi fournir sans audit complet — Certif-Scope",
  description:
    "Page de référence (France) : bilan carbone PME. Comprendre ce qui est réellement demandé (screening), ce qui est obligatoire, combien ça coûte, quoi fournir sans audit, et comment produire une attestation CO₂e indicative standardisée, vérifiable et réutilisable.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme",
    },
  },
  openGraph: {
    title:
      "Bilan carbone PME : obligations, coût, et quoi fournir quand on n’a pas de bilan complet",
    description:
      "Ce qu’un tiers attend vraiment (achats, appels d’offres, banques, assureurs) et comment répondre avec une attestation CO₂e indicative standardisée, vérifiable et réutilisable, sans audit complet.",
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
   Design: institutionnel premium, FR-first SEO
====================================================== */

export default function BilanCarbonePMEPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme";

  const faq = [
    {
      q: "Qu’est-ce qu’un bilan carbone pour une PME ?",
      a: "Un bilan carbone est une estimation des émissions de gaz à effet de serre (CO₂e) d’une entreprise sur une période donnée (souvent une année). Pour une PME, la demande reçue vise fréquemment un indicateur de screening (documentation minimale), et non un inventaire complet détaillé.",
    },
    {
      q: "Bilan carbone PME : est-ce obligatoire en France ?",
      a: "Pour la majorité des PME, non. En France, certaines obligations (ex. BEGES) concernent surtout de grandes structures ou des cas spécifiques. En revanche, de nombreuses PME reçoivent des demandes contractuelles (clients, donneurs d’ordre, appels d’offres) ou des demandes de documentation (banques, assureurs).",
    },
    {
      q: "Que fournir quand on n’a pas de bilan carbone complet ?",
      a: "Un document clair et cadré : un résultat CO₂e agrégé (indicatif), l’année couverte, la méthode déclarée, les limites (non audit, non inventaire complet, non CSRD/ESRS), et un moyen de vérification (ID + vérification).",
    },
    {
      q: "Quelle est la différence entre estimation indicative et bilan carbone complet ?",
      a: "Une estimation indicative sert à répondre rapidement à une demande de screening avec un résultat agrégé et des limites explicites. Un bilan carbone complet vise un inventaire détaillé (données d’activité, périmètres, hypothèses) et peut exiger un accompagnement spécialisé et/ou une vérification. Ce sont deux objets différents.",
    },
    {
      q: "Est-ce acceptable pour un appel d’offres ou un donneur d’ordre ?",
      a: "Souvent oui, si la demande vise un indicateur de screening et si le document annonce clairement son périmètre et ses limites. Si l’appel d’offres impose explicitement un standard, un périmètre, ou une vérification, il faut suivre ce cadre.",
    },
    {
      q: "Que faire si on me demande Scope 1 / 2 / 3 ?",
      a: "Demandez d’abord si l’objectif est du screening ou un inventaire complet. Certif-Scope produit une estimation indicative spend-based (à partir des dépenses) avec un résultat agrégé. Cela ne remplace pas un inventaire complet par scopes.",
    },
    {
      q: "Combien coûte un bilan carbone pour une PME ?",
      a: "Le coût dépend du niveau attendu. Une démarche complète (inventaire détaillé, collecte de données d’activité) est généralement plus longue et plus chère qu’un document de screening. Certif-Scope vise une réponse rapide de type screening avec un prix fixe, sans abonnement.",
    },
    {
      q: "Quelles données sont nécessaires pour l’estimation indicative ?",
      a: "Uniquement des dépenses annuelles par catégories. Aucune donnée d’activité (kWh, km, litres) n’est requise pour ce modèle spend-based.",
    },
    {
      q: "Comment la confidentialité est-elle assurée ?",
      a: "Les calculs sont effectués localement dans le navigateur. Les dépenses détaillées ne sont pas envoyées. Seuls le résultat CO₂e final agrégé et des métadonnées non sensibles servent à émettre l’attestation.",
    },
    {
      q: "Le document est-il vérifiable par un tiers ?",
      a: "Oui. L’attestation est signée à l’émission et conçue pour être vérifiée indépendamment (ID + mécanisme de vérification), sans compte et sans accès privé.",
    },
    {
      q: "Quelle est la validité d’une attestation ?",
      a: "Les demandes portent généralement sur une année donnée. Il est recommandé d’émettre une attestation par année couverte, puis de réémettre si l’année change ou si les données évoluent.",
    },
    {
      q: "Puis-je réémettre si je perds le PDF ?",
      a: "Oui, une réémission est possible. Le modèle est conçu pour ne pas stocker vos documents : la responsabilité de conservation du PDF reste côté entreprise.",
    },
  ];

  /* ---------------- JSON-LD helpers ---------------- */

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
    sameAs: [],
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
        name: "Bilan carbone PME",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME",
    url: pageUrl,
    description:
      "Page de référence (France) : bilan carbone PME. Obligations, coût, Scopes, et comment répondre avec une attestation CO₂e indicative (screening) standardisée et vérifiable.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: jsonLdBreadcrumb,
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
        text: "Indiquez vos dépenses annuelles par catégories. Aucune donnée d’activité (kWh, km, litres) n’est requise pour ce modèle.",
      },
      {
        "@type": "HowToStep",
        name: "Calcul automatique spend-based",
        text: "Le modèle spend-based applique une formule (dépenses € × facteur d’émission) pour produire un résultat CO₂e agrégé.",
      },
      {
        "@type": "HowToStep",
        name: "Télécharger l’attestation standardisée",
        text: "Téléchargez un PDF standardisé contenant le résultat CO₂e agrégé, l’année couverte, la méthode, les limites, et les informations de vérification.",
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

  const TocItem = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => (
    <li>
      <a
        className="text-[#0B3A63] hover:underline underline-offset-4"
        href={href}
      >
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="bilan-carbone-pme"
      data-section="bilan-carbone-pme"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — Organization + WebPage + Breadcrumb + Service + HowTo + FAQ */}
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
          Page de référence (France) — Bilan carbone PME : obligations, coût, et
          quoi fournir (screening)
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Bilan carbone PME : obligations, coût, Scopes 1/2/3, et quoi fournir
          sans audit complet
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Beaucoup de PME reçoivent des demandes “bilan carbone” de la part de{" "}
          <strong>clients</strong>, <strong>acheteurs</strong>,{" "}
          <strong>banques</strong> ou <strong>assureurs</strong>. Dans la majorité
          des cas, il s’agit d’un besoin de{" "}
          <strong>screening</strong> : un indicateur CO₂e simple, documenté et
          archivable, plutôt qu’un inventaire complet audité.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Pour qui ?
            </p>
            <p className="text-gray-700 leading-relaxed">
              PME qui doivent répondre vite à une demande CO₂e (onboarding
              fournisseur, appel d’offres, banque/assurance).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que c’est
            </p>
            <p className="text-gray-700 leading-relaxed">
              Une attestation CO₂e <strong>indicative</strong> (spend-based),
              standardisée, réutilisable, avec limites explicites.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que ce n’est pas
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ni audit, ni inventaire complet, ni reporting réglementaire CSRD /
              ESRS, ni ventilation exhaustive par scopes.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* MOBILE TOC */}
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition (PME)" />
                  <TocItem href="#reglementation" label="Réglementation (France + Europe)" />
                  <TocItem href="#why-asked" label="Pourquoi on le demande aux PME" />
                  <TocItem href="#what-expected" label="Ce qui est attendu (screening)" />
                  <TocItem href="#difference" label="Indicatif vs inventaire complet" />
                  <TocItem href="#scopes" label="Scopes 1/2/3 : comment répondre" />
                  <TocItem href="#cost" label="Coût, délais, effort : comparer" />
                  <TocItem href="#method" label="Méthode spend-based (formule + limites)" />
                  <TocItem href="#institutional" label="Scénarios institutionnels (banque, AO…)" />
                  <TocItem href="#verification" label="Vérification indépendante" />
                  <TocItem href="#privacy" label="Confidentialité (privacy-by-design)" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          {/* 1. Definition */}
          <section id="definition" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Qu’est-ce qu’un bilan carbone (pour une PME) ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un bilan carbone est une estimation des émissions de gaz à effet de
              serre d’une organisation, exprimée en CO₂e, sur une période donnée
              (souvent une année). En pratique, la recherche “bilan carbone PME”
              recouvre deux réalités distinctes :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Screening (documentation minimale)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Objectif : fournir un indicateur CO₂e et un document archivable
                  pour un dossier (fournisseur, appel d’offres, banque, assurance).
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Inventaire complet (démarche approfondie)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Objectif : un inventaire détaillé, pilotage interne, ou exigences
                  formelles (périmètres, données d’activité, hypothèses, revue).
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Pourquoi cette page existe
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beaucoup de PME n’ont pas besoin de “sur-auditer” leur entreprise
                pour répondre à une demande courante. Le bon objectif est d’éviter
                la confusion : répondre proprement au <strong>niveau attendu</strong>.
              </p>
            </div>
          </section>

          {/* 2. Regulation */}
          <section id="reglementation" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Réglementation : France (BEGES) et cadre européen
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              En France, des obligations existent pour certains acteurs (ex. BEGES
              pour certaines grandes structures ou situations définies). Pour une
              PME, la demande “bilan carbone” est le plus souvent contractuelle ou
              organisationnelle (chaîne de valeur, achats responsables, gestion des risques).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce qu’il faut retenir (PME)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Une demande peut venir d’un acheteur (procurement), d’un appel d’offres,
                  d’une banque ou d’un assureur, même si votre entreprise n’est pas soumise
                  à une obligation de BEGES.
                </li>
                <li>
                  Au niveau européen, les cadres CSRD / ESRS et EU Taxonomy concernent
                  surtout de grandes entreprises, mais entraînent une collecte d’informations
                  dans la chaîne de valeur (donc vers les PME).
                </li>
                <li>
                  Les attentes “institutionnelles” se traduisent souvent par un besoin de
                  documentation : un document lisible, daté, et avec des limites explicites.
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Références utiles (officielles)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  ADEME — Base Empreinte (facteurs d’émission) :{" "}
                  <a
                    className="underline text-[#0B3A63]"
                    href="https://base-empreinte.ademe.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    base-empreinte.ademe.fr
                  </a>
                </li>
                <li>
                  GHG Protocol (cadre international) :{" "}
                  <a
                    className="underline text-[#0B3A63]"
                    href="https://ghgprotocol.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ghgprotocol.org
                  </a>
                </li>
                <li>
                  ISO 14064-1 (cadre de quantification organisationnelle) :{" "}
                  <a
                    className="underline text-[#0B3A63]"
                    href="https://www.iso.org/standard/66453.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    iso.org (ISO 14064-1)
                  </a>
                </li>
                <li>
                  ISO 14083 (transport / chaîne logistique – cas spécifiques) :{" "}
                  <a
                    className="underline text-[#0B3A63]"
                    href="https://www.iso.org/standard/79653.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    iso.org (ISO 14083)
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Note : CSRD / ESRS / EU Taxonomy et certaines lignes directrices (ex. EBA) ne visent
                pas directement toutes les PME, mais augmentent les demandes de données et de preuves
                dans les relations B2B.
              </p>
            </div>
          </section>

          {/* 3. Why asked */}
          <section id="why-asked" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Pourquoi on demande un bilan carbone aux PME ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les grandes entreprises et certaines institutions structurent leurs politiques
              (achats responsables, gestion des risques, critères ESG). Elles collectent donc
              des informations environnementales lors de l’onboarding et dans la chaîne de valeur.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>référencement fournisseur et renouvellement de contrat</li>
              <li>appel d’offres et grille d’évaluation</li>
              <li>screening banque / assurance et documentation interne</li>
              <li>pilotage ESG interne (même si la PME n’a pas d’obligation propre)</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed">
                Une PME n’est pas “en retard” parce qu’elle n’a pas d’audit. Elle fait face à une
                demande de <strong>preuve minimale</strong>. L’enjeu : répondre vite, proprement,
                et sans surdimensionner l’effort.
              </p>
            </div>
          </section>

          {/* 4. What is expected */}
          <section id="what-expected" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Ce qui est réellement attendu (dans la majorité des cas)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une demande “bilan carbone” est souvent générique. En pratique, le tiers veut pouvoir
              archiver un document simple, comparable, daté, avec un indicateur CO₂e et un périmètre clair.
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
                <li>des limites explicites (non audit, non inventaire complet, non CSRD/ESRS)</li>
                <li>un moyen de vérification du document (contrôle tiers)</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Les 4 questions à poser si la demande est floue
              </h3>
              <ol className="list-decimal ml-6 text-gray-700 space-y-2">
                <li>
                  L’objectif est-il du screening (document archivable) ou un inventaire complet ?
                </li>
                <li>
                  Un standard est-il explicitement imposé (norme, niveau d’assurance, périmètres) ?
                </li>
                <li>
                  Faut-il une ventilation par scopes (1/2/3) ou un résultat agrégé suffit-il ?
                </li>
                <li>
                  Quel livrable est attendu (PDF, tableur, questionnaire, plateforme) ?
                </li>
              </ol>
            </div>
          </section>

          {/* 5. Difference */}
          <section id="difference" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Estimation indicative vs bilan carbone complet : la différence
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le point clé : une estimation indicative sert à répondre à une demande de screening.
              Un bilan complet sert à un inventaire détaillé et à un pilotage approfondi. Confondre
              les deux fait perdre du temps et de l’argent.
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
                  <li>effort faible à modéré</li>
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
                  <li>effort organisationnel plus important</li>
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

          {/* 6. Scopes */}
          <section id="scopes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Scopes 1 / 2 / 3 : comment répondre sans se piéger
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Les scopes (1/2/3) indiquent une attente de structuration plus précise. Une demande “scopes”
              peut cependant rester du screening (ex. questionnaire standard). Le point clé : clarifier le
              niveau attendu avant de promettre une ventilation exhaustive.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Réponse sûre (PME)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Si la demande est du screening : fournir un résultat CO₂e indicatif agrégé, méthode déclarée,
                  limites explicites, et proposer une démarche plus complète si exigée.
                </li>
                <li>
                  Si un inventaire par scopes est explicitement exigé : suivre le cahier des charges, car une estimation
                  spend-based agrégée ne remplace pas un inventaire complet par scopes.
                </li>
              </ul>
              <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                <strong>Conseil :</strong> demander si un résultat agrégé est acceptable à ce stade, puis escalader vers une démarche complète
                uniquement si l’exigence est formelle et écrite.
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/scope-1-2-3-explication"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Scopes 1/2/3 : explication (PME)
              </Link>
              <Link
                href="/fr/difference-bilan-carbone-attestation"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Différence : attestation vs bilan complet
              </Link>
            </div>
          </section>

          {/* 7. Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7) Coût, délais, effort : choisir le bon niveau
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une PME a rarement intérêt à démarrer par le niveau le plus lourd si la demande est du screening.
              L’objectif rationnel : produire d’abord un document acceptable, puis escalader si un standard est
              explicitement exigé.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[720px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Option
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Objectif
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Effort (PME)
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Délai
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Adapté à
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">
                      Attestation indicative (screening)
                    </td>
                    <td className="p-4 text-gray-700">
                      Documentation minimale, archivable, comparable
                    </td>
                    <td className="p-4 text-gray-700">Faible</td>
                    <td className="p-4 text-gray-700">Minutes</td>
                    <td className="p-4 text-gray-700">
                      Onboarding fournisseur, appel d’offres (screening), banque/assurance
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Démarche complète (inventaire)</td>
                    <td className="p-4 text-gray-700">
                      Pilotage, périmètres détaillés, données d’activité, hypothèses
                    </td>
                    <td className="p-4 text-gray-700">Élevé</td>
                    <td className="p-4 text-gray-700">Semaines / mois</td>
                    <td className="p-4 text-gray-700">
                      Exigence formelle, stratégie climat, audit, reporting structuré
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Plateforme ESG / reporting</td>
                    <td className="p-4 text-gray-700">
                      Process continu, collecte, workflows, reporting interne
                    </td>
                    <td className="p-4 text-gray-700">Variable</td>
                    <td className="p-4 text-gray-700">Variable</td>
                    <td className="p-4 text-gray-700">
                      Organisations matures, multi-entités, suivi régulier
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Le principe anti-erreur
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ne pas sur-promettre. Répondre au niveau demandé. Escalader seulement si l’exigence est écrite
                (norme, périmètre, assurance, livrable).
              </p>
            </div>
          </section>

          {/* 8. Method (spend-based) */}
          <section id="method" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              8) Méthode spend-based : formule explicite, limites explicites
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pour produire une estimation indicative rapidement, Certif-Scope utilise une approche
              <strong> spend-based</strong> : les dépenses annuelles sont converties en CO₂e via des facteurs
              d’émission (par euro dépensé), puis agrégées.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formule (niveau screening)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>CO₂e total (t)</strong> = Σ (dépenses catégorie <em>i</em> en € × facteur d’émission <em>i</em>)
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Objectif : produire un résultat CO₂e agrégé, documentable, utile pour répondre à des demandes
                courantes. Cette estimation ne remplace pas une comptabilité carbone exhaustive.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Sources de facteurs (références)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les facteurs d’émission doivent être sourcés, versionnés et cohérents. En France, la Base Empreinte
                  (ADEME) est une référence centrale. D’autres référentiels publics existent (selon cas).
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                    href="https://base-empreinte.ademe.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ADEME Base Empreinte
                  </a>
                  <a
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    href="https://ghgprotocol.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GHG Protocol
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Limites (à connaître et à assumer)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>résultat indicatif, dépendant des dépenses déclarées</li>
                  <li>pas de collecte de données physiques (kWh, km, litres)</li>
                  <li>pas de ventilation exhaustive par scopes 1/2/3 dans ce modèle</li>
                  <li>pas d’audit, pas d’assurance, pas de reporting CSRD/ESRS</li>
                  <li>périmètre : screening documentaire, pas inventaire réglementaire</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Cadre d’utilisation (important)
              </h3>
              <p className="text-white/90 leading-relaxed">
                Certif-Scope fournit une attestation CO₂e indicative destinée au screening (achats, banque, assurance,
                appels d’offres lorsque la demande est générique). Le document ne doit pas être présenté comme un audit,
                un inventaire complet, ni un reporting réglementaire. Les données d’entrée relèvent de la responsabilité
                de l’entreprise utilisatrice.
              </p>
            </div>
          </section>

          {/* 9. Institutional scenarios */}
          <section id="institutional" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              9) Scénarios institutionnels : achats, appels d’offres, banque, assurance, investisseurs
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une même demande (“bilan carbone”) recouvre souvent des objectifs différents. Identifier le scénario
              permet de répondre au bon niveau, avec le bon document.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Achats / Procurement (référencement fournisseur)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Besoin : une information CO₂e archivable, comparable, et réutilisable. Le risque principal est l’absence
                  de document. Une attestation de screening claire évite les blocages.
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
                  Besoin : ne pas bloquer le dossier sur une exigence “bilan carbone”. Si la demande est du screening,
                  une attestation indicative cadrée suffit souvent. Si un standard est imposé, il faut suivre le cahier des charges.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/bilan-carbone-appel-offres">
                    Aller plus loin : appel d’offres →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Banque (crédit) / Investisseurs (screening ESG)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Besoin : une documentation minimale, datée, qui décrit la méthode et les limites. Le document sert à un
                  screening risque/ESG et à l’archivage interne, pas à un audit complet.
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
                  Assurance (souscription, renouvellement)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Besoin : éléments de contexte et preuve minimale, surtout si des politiques internes existent. Une attestation
                  de screening réduit les échanges et formalise une information CO₂e “au bon niveau”.
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
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Subventions et dispositifs : comment éviter l’erreur
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Si une subvention ou un dispositif exige explicitement un bilan complet, un périmètre, ou un standard,
                il faut s’aligner sur cette exigence. Si la demande est générique, une attestation de screening peut servir
                de première réponse, avant escalade.
              </p>
            </div>
          </section>

          {/* 10. Verification */}
          <section id="verification" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              10) Vérification indépendante : lisible, simple, et utile en dossier
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un document CO₂e utile en B2B doit être vérifiable. L’objectif n’est pas d’ajouter de la complexité, mais de
              permettre à un tiers de contrôler l’authenticité du document et de l’archiver sans ambiguïté.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que la vérification apporte
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un identifiant unique (référence dossier)</li>
                <li>une preuve d’intégrité : le document n’a pas été modifié</li>
                <li>une preuve d’émission : le document provient de l’émetteur déclaré</li>
                <li>une vérification possible sans compte (workflow simple)</li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  La vérification est conçue pour rester simple. Le site affiche la validité et les informations essentielles
                  sans demander d’accès privé.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fr/verify"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Vérifier un document
                  </Link>
                  <Link
                    href="/fr/product/verification"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Comprendre la vérification
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Politique de versions (important pour l’archivage)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Une attestation doit indiquer la version de méthode et la version des facteurs utilisés. L’objectif : éviter les
                ambiguïtés lors d’un contrôle interne ou d’une comparaison d’une année sur l’autre.
              </p>
            </div>
          </section>

          {/* 11. Privacy */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              11) Confidentialité : privacy-by-design (calcul local)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif est de minimiser l’exposition de données sensibles. Les calculs sont réalisés localement dans votre navigateur.
              Les dépenses détaillées ne sont pas envoyées. Seul un résultat CO₂e agrégé et des métadonnées non sensibles servent à émettre
              l’attestation.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                En pratique
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>pas de stockage des dépenses détaillées</li>
                <li>pas de conservation du PDF côté serveur</li>
                <li>réémission possible si nécessaire</li>
                <li>vérification simple et publique</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/privacy"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Privacy-by-design (détails)
                </Link>
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre à une demande “bilan carbone PME” avec un document clair, sans audit complet
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope produit une attestation CO₂e indicative (spend-based) à partir des dépenses annuelles.
                Le document est standardisé, réutilisable et conçu pour la revue (achats, banque, assurance, appels d’offres
                lorsque la demande est du screening). Limites visibles : non audit, non inventaire complet, non CSRD/ESRS.
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
                <Link
                  href="/fr/verify"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Vérifier un document
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
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Haut de page
              </a>
            </div>
          </section>

          {/* 12. FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              12) FAQ — Bilan carbone PME
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
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition (PME)" />
                  <TocItem href="#reglementation" label="Réglementation (France + Europe)" />
                  <TocItem href="#why-asked" label="Pourquoi c’est demandé" />
                  <TocItem href="#what-expected" label="Ce qui est attendu (screening)" />
                  <TocItem href="#difference" label="Indicatif vs inventaire" />
                  <TocItem href="#scopes" label="Scopes 1/2/3" />
                  <TocItem href="#cost" label="Coût, délais, effort" />
                  <TocItem href="#method" label="Méthode spend-based" />
                  <TocItem href="#institutional" label="Scénarios institutionnels" />
                  <TocItem href="#verification" label="Vérification" />
                  <TocItem href="#privacy" label="Confidentialité" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel de périmètre (important)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette page vise les demandes “bilan carbone PME” liées au screening (achats, banque, assurance, appels d’offres
                lorsque la demande est générique). Certif-Scope produit une estimation indicative spend-based à partir des dépenses.
                Ce document ne remplace pas un audit ni un inventaire complet des émissions, et ne constitue pas un reporting CSRD/ESRS.
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
