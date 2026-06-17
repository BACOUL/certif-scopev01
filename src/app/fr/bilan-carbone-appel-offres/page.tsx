// PATH: src/app/fr/bilan-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone appel d’offres : quoi joindre au dossier ? | Certif-Scope",
  description:
    "Un appel d’offres vous demande un bilan carbone ou un document CO₂e ? Comprenez quoi joindre au dossier, quand une attestation indicative suffit et quand un audit complet est nécessaire.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title: "Bilan carbone appel d’offres : quoi joindre au dossier ?",
    description:
      "Guide PME pour répondre à une demande carbone dans un appel d’offres avec un document CO₂e indicatif lorsque le dossier ne demande pas un audit complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Demande dans le DCE",
    text: "Le dossier mentionne bilan carbone, CO₂e, RSE, ESG, empreinte carbone ou critère environnemental.",
  },
  {
    title: "Réponse possible",
    text: "Si aucune norme complète n’est imposée, un PDF CO₂e indicatif, daté, lisible et vérifiable peut souvent suffire.",
  },
  {
    title: "Risque à éviter",
    text: "Répondre sans document, ou avec un tableau informel, peut affaiblir la candidature et créer des demandes complémentaires.",
  },
];

const tenderScenarios = [
  "Le règlement de consultation ajoute un critère environnemental ou RSE.",
  "Le mémoire technique demande une information carbone ou CO₂e.",
  "L’acheteur demande une preuve environnementale sans méthode imposée.",
  "La plateforme de dépôt prévoit un fichier à joindre pour l’aspect carbone.",
  "Le candidat doit rassurer sans avoir le temps de lancer un audit complet.",
];

const expectedItems = [
  "Résultat CO₂e agrégé",
  "Année couverte par l’estimation",
  "Méthode déclarée et lisible",
  "Limites méthodologiques explicites",
  "PDF daté et archivable",
  "Identifiant ou logique de vérification",
  "Mention : document indicatif, non audit",
  "Lien ou référence de contrôle pour le tiers",
];

const decisionRows = [
  {
    demand: "Le dossier demande un indicateur carbone sans méthode imposée",
    answer: "Une attestation CO₂e indicative peut souvent être jointe comme document de screening.",
  },
  {
    demand: "Le mémoire technique demande une information RSE ou CO₂e",
    answer: "Un PDF standardisé est plus lisible qu’une phrase vague ou un tableau non formalisé.",
  },
  {
    demand: "Le cahier des charges impose une norme, un périmètre ou une vérification",
    answer: "Il faut suivre l’exigence imposée. Une attestation indicative ne remplace pas un audit ou une vérification externe.",
  },
  {
    demand: "Le délai de dépôt est court",
    answer: "Produire une réponse documentaire cadrée peut éviter de déposer un dossier incomplet.",
  },
];

const mistakes = [
  {
    title: "Ignorer la demande carbone",
    text: "Même si le critère n’est pas éliminatoire, l’absence de réponse peut réduire la qualité perçue du dossier.",
  },
  {
    title: "Envoyer un document flou",
    text: "Un résultat sans méthode, sans date et sans limites est difficile à utiliser côté acheteur.",
  },
  {
    title: "Promettre un audit complet",
    text: "Il ne faut pas présenter un document indicatif comme un inventaire GES complet ou une vérification externe.",
  },
  {
    title: "Surdimensionner la réponse",
    text: "Lancer une mission lourde peut être inutile si le dossier demande seulement un élément documentaire.",
  },
];

const processSteps = [
  {
    title: "Lire le cahier des charges",
    text: "Chercher les mots bilan carbone, CO₂e, empreinte carbone, ESG, RSE, environnement ou fournisseur responsable.",
  },
  {
    title: "Identifier le niveau exigé",
    text: "Distinguer une demande documentaire générique d’une exigence formelle avec norme, périmètre ou contrôle tiers.",
  },
  {
    title: "Joindre un PDF clair",
    text: "Fournir un document daté, archivable, vérifiable et explicite sur sa méthode et ses limites.",
  },
];

const relatedPages = [
  {
    title: "Bilan carbone PME",
    text: "Comprendre quoi fournir quand une PME reçoit une demande carbone générale.",
    href: "/fr/bilan-carbone-pme/",
  },
  {
    title: "Bilan carbone fournisseur",
    text: "Répondre à une demande client, acheteur ou donneur d’ordre.",
    href: "/fr/bilan-carbone-fournisseur/",
  },
  {
    title: "Prix attestation CO₂e",
    text: "Voir le prix d’un document CO₂e indicatif sans abonnement.",
    href: "/fr/pricing/",
  },
];

const faq = [
  {
    q: "Un bilan carbone est-il obligatoire dans un appel d’offres ?",
    a: "Pas automatiquement. Certains dossiers demandent seulement une information carbone ou un critère environnemental. Si le cahier des charges impose une norme, un périmètre détaillé ou une vérification externe, il faut respecter cette exigence.",
  },
  {
    q: "Que joindre si le dossier demande un bilan carbone sans précision ?",
    a: "Un document CO₂e indicatif, daté, archivable et vérifiable peut servir de première réponse si aucune méthode complète n’est imposée. Il doit préciser sa méthode, son année, son périmètre et ses limites.",
  },
  {
    q: "L’attestation Certif-Scope remplace-t-elle un audit carbone ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
  {
    q: "Le document est-il utilisable dans un mémoire technique ?",
    a: "Oui, lorsque le besoin est documentaire ou comparatif. Le document peut être joint au dossier ou cité dans le mémoire technique, avec ses limites clairement indiquées.",
  },
  {
    q: "Combien coûte une réponse CO₂e indicative ?",
    a: "Certif-Scope propose une attestation CO₂e indicative à 89€, sans abonnement. Ce prix ne correspond pas à un audit ou à une mission de conseil carbone complète.",
  },
];

export default function BilanCarboneAppelOffresFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone appel d’offres : quoi joindre au dossier ?",
    url: pageUrl,
    description:
      "Guide PME pour répondre à une demande de bilan carbone ou de document CO₂e dans un appel d’offres.",
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
        name: "Bilan carbone appel d’offres",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative pour appel d’offres",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description:
      "Service de génération d’un document CO₂e indicatif pour les dossiers clients, fournisseurs, banques, assurances et appels d’offres.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing/",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone dans un appel d’offres",
    description:
      "Méthode simple pour savoir quoi joindre lorsqu’un appel d’offres demande un bilan carbone ou un document CO₂e.",
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section
        id="bilan-carbone-appel-offres"
        data-section="bilan-carbone-appel-offres"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Appel d’offres · DCE · Mémoire technique · CO₂e
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone appel d’offres : quoi joindre au dossier ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Votre appel d’offres demande un bilan carbone, un indicateur CO₂e ou
              un document environnemental ? Dans beaucoup de cas, l’acheteur attend
              une réponse claire, datée, archivable et vérifiable — pas forcément
              un audit carbone complet.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique comment décider quoi joindre, quand une
              attestation CO₂e indicative peut suffire, et quand il faut suivre une
              exigence plus formelle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer une attestation pour mon dossier
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
                Cas fréquents
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                La demande carbone arrive souvent au moment du dépôt
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                L’entreprise doit répondre vite, sans toujours savoir si le dossier
                exige un audit complet ou seulement une pièce documentaire carbone.
              </p>
            </div>

            <div className="grid gap-4">
              {tenderScenarios.map((scenario) => (
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
                Pièce à joindre
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce que l’acheteur doit pouvoir vérifier rapidement
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un document utile en appel d’offres doit être plus qu’une phrase
                dans le mémoire technique : il doit être clair, limité, daté et
                transmissible.
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
              Décision rapide
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Screening ou exigence formelle : il faut lire le niveau imposé
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Si le dossier impose un standard, un périmètre précis ou une
              vérification externe, il faut suivre ce cadre. Sinon, une réponse
              CO₂e indicative peut souvent être adaptée.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Demande dans le dossier
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

          <div className="mt-10 hidden rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Demande dans le dossier
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erreurs à éviter
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Les erreurs qui affaiblissent une réponse d’appel d’offres
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La réponse carbone doit être proportionnée : assez claire pour
                rassurer, mais sans promettre un niveau de preuve que le document
                ne couvre pas.
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Méthode simple
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Comment répondre sans perdre de temps ?
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Dossier à déposer · PDF vérifiable · prix fixe
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Besoin d’un document carbone pour un appel d’offres ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Générez une attestation CO₂e indicative à 89€, avec méthode
                  déclarée, limites visibles et format PDF transmissible.
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
            Certif-Scope produit une attestation CO₂e indicative basée sur les
            dépenses. Le document ne constitue pas un audit carbone, un inventaire
            GES complet, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Pages liées
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Continuer selon votre situation
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  Lire →
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
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le bilan carbone en appel d’offres
            </h2>
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
