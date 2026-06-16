// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : que fournir sans audit complet ? | Certif-Scope",
  description:
    "Un client, une banque ou un appel d’offres vous demande un bilan carbone ? Guide PME pour savoir quoi fournir, quand une attestation CO₂e indicative suffit et quand un audit complet est nécessaire.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    },
  },
  openGraph: {
    title: "Bilan carbone PME : que fournir sans audit complet ?",
    description:
      "Guide PME : obligation réelle, demandes clients, banques, assurances, appels d’offres, prix et différence entre attestation CO₂e indicative et bilan carbone complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Est-ce obligatoire ?",
    text: "Pour la majorité des PME, non. La demande vient souvent d’un client, d’un donneur d’ordre, d’une banque, d’un assureur ou d’un appel d’offres.",
  },
  {
    title: "Que fournir vite ?",
    text: "Un document CO₂e indicatif avec résultat agrégé, année, méthode déclarée, limites visibles, PDF standardisé et vérification.",
  },
  {
    title: "Quel prix viser ?",
    text: "Une attestation indicative coûte moins qu’un audit complet. Certif-Scope propose un document standardisé à 89€, sans abonnement.",
  },
];

const scenarios = [
  "Un client demande un bilan carbone avant de valider un référencement fournisseur.",
  "Un appel d’offres demande un élément carbone ou ESG sans imposer de norme complète.",
  "Une banque ou un assureur demande une information environnementale dans un dossier professionnel.",
  "Une plateforme achats demande un justificatif CO₂e simple, archivable et vérifiable.",
];

const expectedItems = [
  "Nom de l’entreprise ou entité déclarée",
  "Année couverte par l’estimation",
  "Résultat CO₂e agrégé en tCO₂e",
  "Méthode utilisée et formule générale",
  "Limites méthodologiques visibles",
  "Date d’émission et validité documentaire",
  "Identifiant unique de vérification",
  "PDF archivable et transmissible à un tiers",
];

const comparisonRows = [
  {
    topic: "Objectif",
    indicative: "Répondre vite à une demande documentaire ou de screening.",
    full: "Construire un inventaire GES détaillé et exploitable dans une stratégie climat.",
  },
  {
    topic: "Données",
    indicative: "Dépenses annuelles par grandes catégories.",
    full: "Données physiques, facteurs détaillés, périmètres, hypothèses et collecte métier.",
  },
  {
    topic: "Usage",
    indicative: "Client, fournisseur, banque, assurance, appel d’offres simple.",
    full: "Reporting avancé, pilotage interne, objectifs climat, exigences normatives.",
  },
  {
    topic: "Limite",
    indicative: "Indicatif, non audit, non CSRD/ESRS, non inventaire complet Scope 1/2/3.",
    full: "Plus complet, mais plus long, plus coûteux et plus lourd à produire.",
  },
];

const processSteps = [
  {
    title: "Qualifier la demande",
    text: "Lire précisément le dossier : demande-t-on une indication carbone simple ou un bilan réglementaire complet ?",
  },
  {
    title: "Choisir le bon niveau de réponse",
    text: "Si la demande est générique, une attestation CO₂e indicative peut suffire. Si une norme est imposée, il faut suivre ce cadre.",
  },
  {
    title: "Produire un PDF clair",
    text: "Le document doit être daté, archivable, vérifiable et explicite sur sa méthode comme sur ses limites.",
  },
];

const relatedGuides = [
  {
    title: "Bilan carbone PME obligatoire",
    text: "Comprendre si la demande relève d’une obligation réelle ou d’un besoin contractuel.",
    href: "/fr/bilan-carbone-pme/obligation/",
  },
  {
    title: "Combien coûte un bilan carbone PME ?",
    text: "Comparer le coût d’un document de screening et celui d’une démarche complète.",
    href: "/fr/bilan-carbone-pme/cout/",
  },
  {
    title: "Exemple de bilan carbone PME",
    text: "Voir la structure d’un document utilisable dans un dossier professionnel.",
    href: "/fr/bilan-carbone-pme/exemple/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Savoir quoi joindre quand un appel d’offres mentionne un critère carbone.",
    href: "/fr/bilan-carbone-appel-offres/",
  },
  {
    title: "Bilan carbone fournisseur",
    text: "Répondre à une demande acheteur ou fournisseur sans surdimensionner la réponse.",
    href: "/fr/bilan-carbone-fournisseur/",
  },
];

const faq = [
  {
    q: "Une PME doit-elle obligatoirement faire un bilan carbone ?",
    a: "Dans la majorité des cas, une PME n’a pas d’obligation générale de produire un bilan carbone complet. Les demandes reçues sont souvent contractuelles : client, fournisseur, banque, assurance, appel d’offres ou questionnaire ESG.",
  },
  {
    q: "Que fournir si un client demande un bilan carbone ?",
    a: "Il faut d’abord vérifier le niveau demandé. Si la demande est générique, un document CO₂e indicatif, daté, archivable et vérifiable peut permettre de répondre proprement. Si le client impose une norme, un périmètre ou une vérification externe, il faut respecter cette exigence.",
  },
  {
    q: "Quelle différence entre une attestation CO₂e et un bilan carbone complet ?",
    a: "Une attestation CO₂e indicative répond à un besoin de screening avec un résultat agrégé et des limites explicites. Un bilan carbone complet vise un inventaire GES détaillé, avec données d’activité, hypothèses, périmètres et parfois accompagnement ou vérification externe.",
  },
  {
    q: "L’attestation Certif-Scope remplace-t-elle un audit carbone ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un reporting CSRD/ESRS ou à un inventaire GES complet.",
  },
  {
    q: "Combien coûte une réponse carbone simple pour PME ?",
    a: "Le coût dépend du niveau attendu. Une réponse indicative standardisée est plus légère qu’un bilan complet. Certif-Scope propose une attestation CO₂e indicative à 89€, sans abonnement.",
  },
  {
    q: "Quelles données sont nécessaires ?",
    a: "Pour une approche spend-based indicative, les dépenses annuelles par grandes catégories suffisent. Le modèle ne nécessite pas de données physiques détaillées comme les kWh, kilomètres ou litres.",
  },
  {
    q: "Le document peut-il être vérifié par un tiers ?",
    a: "Oui. L’attestation est conçue pour inclure un identifiant et une logique de vérification documentaire permettant de contrôler l’authenticité et l’intégrité du fichier.",
  },
];

export default function BilanCarbonePMEPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME : que fournir sans audit complet ?",
    url: pageUrl,
    description:
      "Guide pour comprendre quoi fournir lorsqu’une PME reçoit une demande de bilan carbone, d’attestation CO₂e ou de document carbone simple.",
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
        name: "Bilan carbone PME",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative pour PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description:
      "Service de génération d’un document CO₂e indicatif à partir des dépenses annuelles, destiné aux demandes fournisseurs, banques, assurances, appels d’offres et screening ESG.",
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
        id="bilan-carbone-pme"
        data-section="bilan-carbone-pme"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Guide PME · Client · Banque · Appel d’offres
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone PME : que fournir quand on vous le demande ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Pour beaucoup de PME, la demande de “bilan carbone” n’est pas une
              obligation réglementaire générale. C’est souvent une demande
              documentaire : client, fournisseur, banque, assurance, appel
              d’offres ou questionnaire ESG.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique quoi fournir, quand une attestation CO₂e
              indicative peut suffire, quand un bilan complet est nécessaire, et
              comment répondre sans surdimensionner la démarche.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer une attestation CO₂e
              </Link>

              <Link
                href="/fr/pricing/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix 89€
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)]"
              >
                <h2 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Le vrai besoin
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Dans la pratique, on ne vous demande pas toujours un audit complet
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le mot “bilan carbone” est souvent utilisé de façon large. Avant
                de lancer une mission lourde, il faut identifier si le dossier
                demande un inventaire complet ou seulement un document carbone
                lisible, daté et transmissible.
              </p>
            </div>

            <div className="grid gap-4">
              {scenarios.map((scenario) => (
                <div
                  key={scenario}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {scenario}
                </div>
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
                Réponse concrète
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Que fournir quand on n’a pas de bilan carbone complet ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Si la demande est générique, un document de screening peut être
                suffisant. Il doit être clair sur son résultat, sa méthode, son
                périmètre et ses limites.
              </p>
              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Produire le document maintenant
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
              Clarification essentielle
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Attestation CO₂e indicative ou bilan carbone complet : ce n’est pas le même usage
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Certif-Scope ne remplace pas un audit. Il sert à produire une
              première réponse carbone cadrée, utile quand la demande porte sur
              un document simple, un indicateur ou un screening fournisseur.
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
                    <td className="p-5 leading-relaxed text-white/82">{row.indicative}</td>
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
                Méthode de décision
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Comment décider quoi fournir ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La bonne réponse dépend du niveau d’exigence du dossier. Il faut
                éviter deux erreurs : fournir trop peu quand une norme est imposée,
                ou lancer un audit complet alors qu’un document de screening suffit.
              </p>
            </div>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Étape {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Solution Certif-Scope
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Une attestation CO₂e indicative à 89€ pour répondre vite
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
                  Le document est conçu pour les cas où une PME doit fournir une
                  réponse carbone simple, standardisée et vérifiable, sans prétendre
                  produire un bilan carbone réglementaire ou un audit complet.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                >
                  Générer mon attestation
                </Link>
                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Cluster PME
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Guides associés pour préciser votre cas
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {guide.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Lire le guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le bilan carbone PME
            </h2>
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
                  Réponse rapide · périmètre clair · document vérifiable
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Besoin d’un document carbone simple pour votre PME ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Générez une attestation CO₂e indicative, datée, archivable et
                  vérifiable, avec une méthode déclarée et des limites visibles.
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
                  href="/fr/product/compliance/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Voir le périmètre
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope produit une attestation CO₂e indicative basée sur les
            dépenses. Le document ne constitue pas un audit carbone, un inventaire
            GES complet, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>
    </main>
  );
}
