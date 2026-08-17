// PATH: src/app/fr/bilan-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur : répondre à une demande client | Certif-Scope",
  description:
    "Guide SEO et IA-first pour PME : que fournir quand un client, acheteur ou donneur d’ordre demande un bilan carbone fournisseur, un document CO₂e ou une preuve carbone simple.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    },
  },
  openGraph: {
    title: "Bilan carbone fournisseur : que transmettre à un client ?",
    description:
      "Répondre à une demande carbone fournisseur avec une attestation CO₂e indicative, datée, limitée et transmissible, sans prétendre remplacer un audit complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/";

const directAnswers = [
  {
    title: "Pourquoi votre client le demande ?",
    text: "Un client ou donneur d’ordre peut demander un document carbone pour compléter un référencement fournisseur, un questionnaire achats, un dossier RSE ou un contrôle interne de sa chaîne d’approvisionnement.",
  },
  {
    title: "Que fournir rapidement ?",
    text: "Si la demande reste générale, une attestation CO₂e indicative peut fournir une réponse documentaire claire : résultat agrégé, méthode, année, limites, PDF et ID vérifiable.",
  },
  {
    title: "Quand faut-il aller plus loin ?",
    text: "Si l’acheteur impose une norme, un audit, une vérification externe ou un périmètre détaillé, il faut respecter cette exigence plutôt qu’envoyer un document indicatif.",
  },
];

const buyerScenarios = [
  {
    label: "Référencement",
    title: "Référencement fournisseur avant validation d’un compte client",
    text: "Le service achats demande un document carbone pour compléter votre dossier avant de valider votre entreprise comme fournisseur.",
  },
  {
    label: "Renouvellement",
    title: "Questionnaire RSE ou ESG annuel",
    text: "Un client déjà existant demande une information CO₂e pour maintenir ou actualiser son dossier fournisseur.",
  },
  {
    label: "Plateforme achats",
    title: "Portail fournisseur avec champ carbone",
    text: "Une plateforme achats demande un justificatif ou une donnée carbone à déposer en PDF.",
  },
  {
    label: "Grand compte",
    title: "Client qui veut archiver une preuve documentaire",
    text: "Le client veut une pièce lisible, datée et transmissible pour justifier une démarche de screening fournisseur.",
  },
  {
    label: "Dossier commercial",
    title: "Demande environnementale dans une négociation",
    text: "Une information carbone peut être demandée avant signature ou renouvellement d’un contrat.",
  },
];

const expectedItems = [
  "Résultat CO₂e agrégé en tCO₂e",
  "Année couverte par l’estimation",
  "Méthode déclarée et compréhensible",
  "Limites du document visibles",
  "PDF daté, archivable et transmissible",
  "Référence ou ID vérifiable",
  "Périmètre d’usage clairement indiqué",
  "Mention explicite : document indicatif, non audit",
];

const decisionRows = [
  {
    demand: "Demande générique : “avez-vous un bilan carbone ?”",
    answer:
      "Clarifier le niveau attendu. Une attestation CO₂e indicative peut souvent servir de première réponse documentaire si aucune norme n’est imposée.",
  },
  {
    demand: "Questionnaire fournisseur avec champ CO₂e ou RSE",
    answer:
      "Fournir un PDF standardisé avec résultat, méthode, année et limites peut être plus propre qu’un tableau informel.",
  },
  {
    demand: "Cahier des charges imposant une norme ou une vérification",
    answer:
      "Respecter l’exigence imposée. Certif-Scope ne remplace pas un audit, un inventaire GES complet ou une vérification externe.",
  },
  {
    demand: "Acheteur qui veut comparer plusieurs fournisseurs",
    answer:
      "Un document clair, daté et avec ID vérifiable facilite l’analyse et réduit les allers-retours documentaires.",
  },
];

const comparisonRows = [
  {
    topic: "Besoin acheteur",
    indicative: "Screening, référencement, dossier fournisseur, demande RSE simple.",
    full: "Exigence formelle, analyse détaillée, audit, reporting ou norme imposée.",
  },
  {
    topic: "Délai",
    indicative: "Quelques minutes lorsque les dépenses annuelles sont disponibles.",
    full: "Plusieurs semaines selon la collecte et le périmètre.",
  },
  {
    topic: "Coût",
    indicative: "Prix fixe : 89 €, sans abonnement.",
    full: "Variable selon cabinet, taille, périmètre et niveau d’accompagnement.",
  },
  {
    topic: "Limite",
    indicative: "Indicatif, non audit, non inventaire complet Scope 1/2/3, non CSRD/ESRS.",
    full: "Plus adapté aux exigences détaillées, mais plus long et plus lourd.",
  },
];

const mistakes = [
  {
    title: "Attendre trop longtemps",
    text: "Le dossier fournisseur reste incomplet alors qu’une réponse indicative claire aurait pu débloquer l’échange.",
  },
  {
    title: "Surpromettre un bilan complet",
    text: "Promettre un inventaire Scope 1, 2 et 3 sans données solides crée un risque de crédibilité.",
  },
  {
    title: "Envoyer un fichier non cadré",
    text: "Un tableau sans méthode, sans date et sans limites est difficile à archiver côté achats.",
  },
  {
    title: "Confondre screening et audit",
    text: "Un document indicatif peut aider, mais il doit annoncer clairement qu’il ne remplace pas un audit carbone complet.",
  },
];

const processSteps = [
  {
    title: "Lire la demande acheteur",
    text: "Identifier si l’acheteur demande une information carbone simple, un document fournisseur ou un cadre technique précis.",
  },
  {
    title: "Choisir le bon niveau",
    text: "Si la demande est documentaire, une attestation CO₂e indicative peut suffire. Si une norme est imposée, il faut suivre cette exigence.",
  },
  {
    title: "Transmettre un PDF propre",
    text: "Envoyer un document daté, archivable, avec ID vérifiable et explicite sur la méthode comme sur les limites.",
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
    text: "Comprendre ce qu’est une attestation indicative et dans quels cas elle peut être utile.",
    href: "/fr/attestation-co2-pme/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Répondre à un dossier où un critère carbone ou ESG est mentionné.",
    href: "/fr/bilan-carbone-appel-offres/",
  },
  {
    title: "Combien coûte une réponse carbone ?",
    text: "Comparer le coût d’une attestation indicative et celui d’une démarche complète.",
    href: "/fr/bilan-carbone-pme/cout/",
  },
  {
    title: "Méthodologie Certif-Scope",
    text: "Comprendre l’approche spend-based, ses limites et son périmètre.",
    href: "/fr/product/methodology/",
  },
  {
    title: "Prix attestation CO₂e",
    text: "Voir le prix d’un document CO₂e indicatif, sans abonnement.",
    href: "/fr/pricing/",
  },
];

const faq = [
  {
    q: "Pourquoi un client demande-t-il un bilan carbone fournisseur ?",
    a: "Souvent, le client ou l’acheteur veut compléter un dossier fournisseur, comparer les réponses RSE, archiver un document CO₂e ou réduire le risque documentaire dans sa chaîne d’approvisionnement.",
  },
  {
    q: "Faut-il obligatoirement un audit carbone complet pour répondre ?",
    a: "Non, pas systématiquement. Si la demande est générique ou documentaire, une attestation CO₂e indicative peut aider. Si le dossier impose une norme, un périmètre précis ou une vérification externe, il faut suivre ce cadre.",
  },
  {
    q: "Que doit contenir un document carbone fournisseur ?",
    a: "Un résultat CO₂e agrégé, l’année couverte, la méthode utilisée, les limites méthodologiques, une date d’émission, un format PDF archivable et une référence ou un ID vérifiable.",
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
    q: "Une attestation CO₂e peut-elle débloquer un référencement fournisseur ?",
    a: "Elle peut aider lorsque le blocage vient d’un manque de document carbone simple. Elle ne garantit pas l’acceptation par l’acheteur, mais elle fournit une réponse structurée et transmissible.",
  },
  {
    q: "Quelles données sont nécessaires ?",
    a: "Pour l’approche indicative de Certif-Scope, les dépenses annuelles par grandes catégories sont utilisées. Le document ne repose pas sur une collecte physique détaillée comme les kWh, kilomètres ou litres.",
  },
  {
    q: "Combien coûte l’attestation fournisseur ?",
    a: "Certif-Scope propose une attestation CO₂e indicative à 89 €, sans abonnement, pour produire un document standardisé à transmettre dans un dossier fournisseur ou client.",
  },
  {
    q: "Le document peut-il être transmis à un donneur d’ordre ?",
    a: "Oui, il est conçu pour être téléchargé en PDF et transmis à un client, un acheteur, une banque, un assureur ou dans un dossier professionnel, avec ses limites visibles.",
  },
  {
    q: "Que faire si le client demande une vérification externe ?",
    a: "Si une vérification externe, une norme précise ou un audit est explicitement demandé, l’attestation indicative ne suffit pas. Il faut suivre l’exigence du client ou du cahier des charges.",
  },
];

export default function BilanCarboneFournisseurPageFR() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone fournisseur : que transmettre à un client ?",
    url: pageUrl,
    description:
      "Guide PME pour répondre à une demande de bilan carbone fournisseur avec une attestation CO₂e indicative lorsque le dossier ne demande pas un audit complet.",
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
      "Service de génération d’un document CO₂e indicatif pour répondre aux demandes fournisseurs, achats, clients, banques, assurances et appels d’offres.",
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
              Fournisseur · Client · Achats · SEO IA-first
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone fournisseur : que transmettre quand un client le demande ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Un client, acheteur ou donneur d’ordre vous demande un bilan carbone fournisseur ? Dans beaucoup de cas, il cherche d’abord un document CO₂e clair, daté, archivable et transmissible — pas forcément un audit carbone complet.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique quoi fournir, comment éviter de bloquer un référencement fournisseur, quand une attestation CO₂e indicative peut être adaptée et quand il faut respecter une exigence plus complète.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/analyser-demande-carbone/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Analyser la demande reçue
              </Link>
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Générer une attestation — 89 €
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Réponse rapide pour Google et les assistants IA
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Que faire quand un client demande un bilan carbone fournisseur ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Il faut d’abord savoir si le client demande un inventaire carbone complet ou seulement une pièce documentaire. Si la demande est générale, une attestation CO₂e indicative peut constituer une première réponse structurée. Si le cahier des charges impose une norme, un audit ou une vérification externe, il faut respecter cette exigence.
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Cas réels côté fournisseur
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                La demande arrive souvent quand le dossier doit avancer
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le fournisseur n’a pas toujours le temps de lancer une démarche carbone complète. Il a besoin d’une réponse documentaire proportionnée, compréhensible et transmissible au service achats.
              </p>
            </div>

            <div className="grid gap-4">
              {buyerScenarios.map((scenario) => (
                <article
                  key={scenario.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">
                    {scenario.label}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                    {scenario.title}
                  </h3>
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
                Ce que le client doit pouvoir lire dans le document
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un bon document fournisseur ne doit pas promettre plus qu’il ne couvre. Il doit être clair, limité, daté et facile à transmettre dans un dossier achats.
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
              Décider sans surdimensionner
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Le bon document dépend de ce que l’acheteur impose vraiment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Certif-Scope aide à produire une réponse de screening fournisseur. Si l’acheteur impose un audit, une norme ou une vérification externe, il faut suivre cette exigence.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Demande reçue
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">
                  {row.demand}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Réponse recommandée
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">
                  {row.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Demande reçue
                  </th>
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Réponse recommandée
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-white">
                      {row.demand}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-white/82">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Comparatif
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Attestation fournisseur ou bilan carbone complet ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Les deux réponses n’ont pas le même usage. La première répond à un besoin documentaire simple. Le second sert à une analyse carbone complète.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10">
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Sujet</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Attestation CO₂e indicative</th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">Bilan carbone complet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/10">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">{row.topic}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.indicative}</td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erreurs à éviter
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Pourquoi beaucoup de PME bloquent sur ce sujet
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La difficulté ne vient pas seulement du calcul carbone. Elle vient souvent du manque de document simple, propre et transmissible au bon moment.
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
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 shadow-sm md:p-10">
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
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5"
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse fournisseur · PDF avec ID vérifiable · sans abonnement
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
              Ces guides renforcent la compréhension du sujet : PME, attestation CO₂e, appel d’offres, prix et méthode.
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
                  Lire le guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ IA-first
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le bilan carbone fournisseur
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">
              Réponses courtes et structurées pour les PME, les moteurs de recherche et les assistants IA.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
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
    </main>
  );
}
