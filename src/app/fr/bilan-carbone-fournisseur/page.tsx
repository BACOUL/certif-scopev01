// PATH: src/app/fr/bilan-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/";

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur : document CO₂e pour client | Certif-Scope",
  description:
    "Guide SEO et IA-first pour répondre à une demande carbone fournisseur : client, donneur d’ordre, achats, questionnaire RSE, attestation CO₂e indicative, limites et prix 89 €.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title: "Bilan carbone fournisseur : document CO₂e pour client",
    description:
      "Que fournir quand un client demande un bilan carbone fournisseur ? Guide PME pour répondre avec un document CO₂e indicatif, sans confondre attestation et audit complet.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const directAnswers = [
  {
    title: "Pourquoi cette demande arrive ?",
    text: "Un client ou un donneur d’ordre veut souvent compléter un dossier achats, un référencement fournisseur ou un questionnaire RSE avec une information carbone lisible.",
  },
  {
    title: "Que fournir si la demande est générale ?",
    text: "Une attestation CO₂e indicative peut servir de première réponse documentaire si aucun audit, périmètre normé ou reporting réglementaire n’est explicitement imposé.",
  },
  {
    title: "Quel est le risque si vous ne répondez pas ?",
    text: "Le dossier fournisseur peut rester incomplet, générer des allers-retours, ralentir un référencement ou fragiliser une réponse commerciale.",
  },
];

const buyerScenarios = [
  {
    label: "Référencement fournisseur",
    text: "Un client souhaite valider votre entreprise dans sa base fournisseurs et demande une information carbone simple.",
  },
  {
    label: "Questionnaire RSE",
    text: "Une plateforme achats contient un champ CO₂e, carbone, environnement ou ESG à compléter.",
  },
  {
    label: "Renouvellement client",
    text: "Un client existant demande une mise à jour documentaire annuelle pour maintenir votre référencement.",
  },
  {
    label: "Grand compte",
    text: "Un donneur d’ordre veut archiver un document carbone fournisseur sans nécessairement demander un audit complet.",
  },
  {
    label: "Dossier commercial",
    text: "Une information environnementale devient utile pour rassurer l’acheteur et éviter de perdre du temps dans les échanges.",
  },
];

const expectedItems = [
  "Nom de l’entreprise ou entité déclarée",
  "Année couverte par l’estimation",
  "Résultat CO₂e agrégé en tCO₂e",
  "Méthode déclarée et compréhensible",
  "Limites méthodologiques visibles",
  "Date d’émission et validité documentaire",
  "Identifiant de contrôle documentaire",
  "Mention explicite : document indicatif, non audit",
];

const decisionRows = [
  {
    demand: "Le client demande simplement “un bilan carbone”",
    answer: "Clarifier le niveau attendu. Si la demande reste documentaire, une attestation CO₂e indicative peut être une réponse proportionnée.",
  },
  {
    demand: "Le questionnaire demande une donnée CO₂e ou un document RSE",
    answer: "Fournir un PDF clair avec résultat, année, méthode et limites est souvent plus propre qu’un simple tableau non cadré.",
  },
  {
    demand: "Le cahier des charges impose une norme, un audit ou un périmètre précis",
    answer: "Suivre l’exigence imposée. Certif-Scope ne remplace pas un audit carbone complet, un inventaire GES réglementaire ou un reporting CSRD/ESRS.",
  },
  {
    demand: "L’acheteur veut comparer plusieurs fournisseurs",
    answer: "Un document homogène, daté et avec ID vérifiable facilite l’archivage et réduit les demandes complémentaires.",
  },
];

const comparisonRows = [
  {
    topic: "Objectif",
    simple: "Répondre vite à une demande fournisseur ou achats.",
    full: "Construire un inventaire carbone détaillé et exploitable sur plusieurs postes.",
  },
  {
    topic: "Données",
    simple: "Dépenses annuelles par grandes catégories.",
    full: "Données physiques, collecte métier, hypothèses, périmètres et facteurs détaillés.",
  },
  {
    topic: "Délai",
    simple: "Immédiat lorsque les informations de base sont disponibles.",
    full: "Souvent plusieurs semaines selon l’organisation et la collecte.",
  },
  {
    topic: "Usage",
    simple: "Référencement fournisseur, questionnaire RSE, demande client, screening achats.",
    full: "Pilotage climat, plan de réduction, reporting avancé ou exigence normative.",
  },
  {
    topic: "Limite",
    simple: "Indicatif, non audit, non inventaire GES complet.",
    full: "Plus complet, mais plus long, plus coûteux et plus lourd à produire.",
  },
];

const mistakes = [
  {
    title: "Répondre trop tard",
    text: "Une demande fournisseur simple peut bloquer un dossier si l’entreprise attend de lancer une démarche trop lourde avant de transmettre un premier document cadré.",
  },
  {
    title: "Surpromettre un bilan complet",
    text: "Présenter une estimation indicative comme un inventaire Scope 1, 2 et 3 complet crée un risque de crédibilité et de mauvaise compréhension.",
  },
  {
    title: "Envoyer un tableau sans méthode",
    text: "Un fichier non daté, sans méthode, sans limites et sans contexte est difficile à archiver dans un processus achats.",
  },
  {
    title: "Confondre screening et audit",
    text: "Un document indicatif peut aider pour une demande documentaire, mais il doit annoncer clairement qu’il ne remplace pas un audit carbone complet.",
  },
];

const processSteps = [
  {
    title: "Lire la demande du client",
    text: "Identifier les mots utilisés : bilan carbone, CO₂e, document RSE, justificatif fournisseur, questionnaire ESG ou exigence normative précise.",
  },
  {
    title: "Qualifier le niveau attendu",
    text: "Si la demande est générique, une attestation CO₂e indicative peut suffire. Si une norme ou un audit est exigé, il faut suivre ce cadre.",
  },
  {
    title: "Produire un document transmissible",
    text: "Le PDF doit être clair, daté, archivable, avec résultat agrégé, méthode déclarée, limites visibles et ID vérifiable.",
  },
  {
    title: "Conserver le dossier",
    text: "Gardez le document transmis et les informations utilisées afin de pouvoir répondre facilement aux questions du client ou de l’acheteur.",
  },
];

const relatedPages = [
  {
    title: "Bilan carbone PME",
    text: "Comprendre quoi fournir lorsqu’une PME reçoit une demande carbone générale.",
    href: "/fr/bilan-carbone-pme/",
  },
  {
    title: "Attestation CO₂e PME",
    text: "Comprendre le rôle d’une attestation indicative dans un dossier professionnel.",
    href: "/fr/attestation-co2-pme/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Répondre à un dossier où un critère carbone ou RSE est mentionné.",
    href: "/fr/bilan-carbone-appel-offres/",
  },
  {
    title: "Prix Certif-Scope",
    text: "Voir le prix d’un document CO₂e indicatif, sans abonnement.",
    href: "/fr/pricing/",
  },
  {
    title: "Méthodologie",
    text: "Comprendre l’approche spend-based utilisée pour l’estimation indicative.",
    href: "/fr/product/methodology/",
  },
  {
    title: "Périmètre et limites",
    text: "Vérifier ce que le document couvre et ce qu’il ne remplace pas.",
    href: "/fr/product/compliance/",
  },
];

const faq = [
  {
    q: "Pourquoi un client demande-t-il un bilan carbone fournisseur ?",
    a: "Un client ou un acheteur peut vouloir compléter un référencement fournisseur, comparer les réponses RSE, archiver un document CO₂e ou mieux comprendre les risques environnementaux de sa chaîne d’approvisionnement.",
  },
  {
    q: "Faut-il obligatoirement un audit carbone complet pour répondre ?",
    a: "Non, pas systématiquement. Si la demande est générique ou documentaire, une attestation CO₂e indicative peut aider. Si le dossier impose une norme, un périmètre précis ou une vérification externe, il faut suivre cette exigence.",
  },
  {
    q: "Que doit contenir un document carbone fournisseur ?",
    a: "Il doit contenir un résultat CO₂e agrégé, l’année couverte, la méthode utilisée, les limites méthodologiques, la date d’émission, un format PDF archivable et un ID vérifiable.",
  },
  {
    q: "Certif-Scope remplace-t-il un bilan carbone complet ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
  {
    q: "Dans quels cas l’attestation est-elle utile ?",
    a: "Elle est utile pour une demande fournisseur simple, un questionnaire achats, une demande client, un screening ESG, un dossier bancaire ou un appel d’offres qui ne demande pas explicitement un audit complet.",
  },
  {
    q: "Une attestation CO₂e peut-elle aider pour un référencement fournisseur ?",
    a: "Oui, si l’acheteur demande un document carbone simple ou une information de screening. L’attestation permet de fournir une réponse cadrée, datée et plus lisible qu’une déclaration informelle.",
  },
  {
    q: "Combien coûte une attestation fournisseur Certif-Scope ?",
    a: "Certif-Scope propose une attestation CO₂e indicative à 89 €, sans abonnement. Le prix est adapté aux demandes documentaires simples, pas aux missions d’audit carbone complètes.",
  },
  {
    q: "Quelles données faut-il préparer avant de générer le document ?",
    a: "Il faut préparer les informations d’identification de l’entreprise et les dépenses annuelles par grandes catégories. Le modèle est indicatif et basé sur les dépenses déclarées.",
  },
];

export default function BilanCarboneFournisseurPageFR() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone fournisseur : document CO₂e pour client",
    url: pageUrl,
    description:
      "Guide pour répondre à une demande carbone fournisseur, client ou donneur d’ordre avec une attestation CO₂e indicative lorsque le dossier ne demande pas un audit complet.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    inLanguage: "fr-FR",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.certif-scope.com/fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilan carbone fournisseur",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative fournisseur",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description:
      "Service de génération d’un document CO₂e indicatif pour répondre aux demandes fournisseurs, clients, achats, banques, assurances et appels d’offres.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing/",
    },
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
    <main id="main-content" role="main" className="bg-white">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section
        id="bilan-carbone-fournisseur"
        data-section="bilan-carbone-fournisseur"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Fournisseur · Client · Achats · Questionnaire RSE · IA-first
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone fournisseur : quoi envoyer à votre client ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Lorsqu’un client, acheteur ou donneur d’ordre demande un bilan carbone fournisseur, il cherche souvent un document CO₂e clair à joindre à son dossier achats. Si aucun audit complet n’est imposé, une attestation CO₂e indicative peut être une réponse rapide, cadrée et transmissible.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique quoi fournir, comment éviter de bloquer un référencement fournisseur et quand Certif-Scope suffit ou ne suffit pas.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer une attestation fournisseur
              </Link>
              <Link
                href="/fr/pricing/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix 89 €
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Réponse rapide pour Google et les assistants IA
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Que répondre à un client qui demande un bilan carbone fournisseur ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Commencez par vérifier si le client demande un audit carbone complet ou seulement un document carbone fournisseur. Si la demande est générale, une attestation CO₂e indicative peut permettre de transmettre rapidement un PDF avec résultat agrégé, méthode, année, limites et ID vérifiable.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {directAnswers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5"
                >
                  <h3 className="text-base font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Cas d’usage fournisseur
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Les demandes arrivent souvent dans un processus achats
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le sujet carbone n’arrive pas toujours dans une démarche RSE complète. Il apparaît souvent dans un formulaire, un email client, une plateforme achats ou un dossier de référencement fournisseur.
              </p>
            </div>

            <div className="grid gap-4">
              {buyerScenarios.map((scenario) => (
                <article
                  key={scenario.label}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">
                    {scenario.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">
                    {scenario.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Contenu attendu
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce que votre client doit lire dans le document
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un document carbone fournisseur doit rester clair et proportionné. Il doit aider le client à comprendre le résultat, sans laisser croire qu’il s’agit d’un audit complet.
              </p>
              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Produire le PDF maintenant
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {expectedItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#475569]"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Choisir le bon niveau de réponse
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Attestation CO₂e indicative ou bilan carbone complet ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Le bon document dépend du niveau exigé par l’acheteur. Certif-Scope est adapté aux demandes documentaires simples ; il ne remplace pas une exigence d’audit complet.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-5 text-left font-semibold text-white">Sujet</th>
                  <th className="p-5 text-left font-semibold text-white">Attestation CO₂e indicative</th>
                  <th className="p-5 text-left font-semibold text-white">Bilan carbone complet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 font-semibold text-white">{row.topic}</td>
                    <td className="p-5 leading-relaxed text-white/82">{row.simple}</td>
                    <td className="p-5 leading-relaxed text-white/82">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Décision rapide
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Quand Certif-Scope suffit-il pour une demande fournisseur ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Certif-Scope est utile lorsque le client attend une réponse carbone indicative et transmissible. Si le dossier impose un cadre précis, l’entreprise doit respecter ce cadre.
              </p>
            </div>

            <div className="grid gap-5">
              {decisionRows.map((row, index) => (
                <article
                  key={row.demand}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Cas {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63]">
                    {row.demand}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {row.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erreurs à éviter
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Les erreurs fréquentes dans une demande carbone fournisseur
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La difficulté n’est pas seulement de calculer. Il faut produire un document proportionné, lisible et juridiquement prudent.
              </p>
            </div>

            <div className="grid gap-5">
              {mistakes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Méthode simple
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Comment répondre à la demande fournisseur ?
                </h2>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Étape {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ IA-first
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le bilan carbone fournisseur
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">
              Réponses structurées pour les dirigeants de PME, les acheteurs, les moteurs de recherche et les assistants IA.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse fournisseur · PDF · ID vérifiable · sans abonnement
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Votre client demande un document carbone ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Générez une attestation CO₂e indicative à 89 €, avec méthode déclarée, limites visibles et format PDF transmissible.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Générer mon attestation
                </Link>
                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Voir le prix
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope produit une attestation CO₂e indicative basée sur les dépenses. Le document ne constitue pas un audit carbone, un inventaire GES complet, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Maillage SEO interne
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Continuer selon votre cas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Ces pages renforcent le cluster SEO Certif-Scope autour des demandes carbone PME, fournisseurs, appels d’offres, méthode et prix.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {page.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Lire la page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
