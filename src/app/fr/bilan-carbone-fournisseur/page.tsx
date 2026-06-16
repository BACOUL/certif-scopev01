// PATH: src/app/fr/bilan-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur : répondre à une demande client | Certif-Scope",
  description:
    "Un client ou donneur d’ordre vous demande un bilan carbone fournisseur ? Comprenez quoi fournir, quand une attestation CO₂e indicative suffit et comment éviter de bloquer votre référencement.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    },
  },
  openGraph: {
    title: "Bilan carbone fournisseur : répondre à une demande client",
    description:
      "Guide PME : répondre à une demande carbone fournisseur avec un document CO₂e indicatif, standardisé et vérifiable, sans audit complet si le dossier ne l’impose pas.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Demande fournisseur",
    text: "Un acheteur, client ou donneur d’ordre demande une preuve carbone pour compléter un référencement ou un dossier achats.",
  },
  {
    title: "Réponse attendue",
    text: "Souvent, il faut surtout un PDF CO₂e clair : résultat agrégé, année, méthode, limites et vérification documentaire.",
  },
  {
    title: "Risque business",
    text: "Ne rien fournir peut ralentir le référencement, créer des allers-retours ou fragiliser une réponse commerciale.",
  },
];

const buyerScenarios = [
  "Référencement fournisseur avant validation d’un compte client.",
  "Renouvellement annuel avec questionnaire RSE ou ESG.",
  "Plateforme achats demandant un justificatif carbone simple.",
  "Client grand compte qui veut archiver une preuve CO₂e fournisseur.",
  "Dossier commercial où une information environnementale est demandée.",
];

const expectedItems = [
  "Résultat CO₂e agrégé en tCO₂e",
  "Année couverte par l’estimation",
  "Méthode déclarée et compréhensible",
  "Limites du document visibles",
  "PDF daté, archivable et transmissible",
  "Identifiant ou logique de vérification",
  "Périmètre d’usage clairement indiqué",
  "Mention explicite : document indicatif, non audit",
];

const decisionRows = [
  {
    demand: "Demande générique : “avez-vous un bilan carbone ?”",
    answer: "Une attestation CO₂e indicative peut souvent servir de première réponse documentaire.",
  },
  {
    demand: "Questionnaire fournisseur avec champ CO₂e ou RSE",
    answer: "Un PDF standardisé avec méthode, résultat et limites est généralement plus propre qu’un tableau informel.",
  },
  {
    demand: "Cahier des charges imposant une norme ou une vérification",
    answer: "Il faut respecter l’exigence imposée. Certif-Scope ne remplace pas un audit ou une vérification externe.",
  },
  {
    demand: "Acheteur qui veut comparer plusieurs fournisseurs",
    answer: "Un document clair, daté et vérifiable facilite l’analyse et réduit les allers-retours.",
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
    text: "Identifier si l’acheteur demande une information carbone simple ou un cadre technique précis.",
  },
  {
    title: "Choisir le bon niveau",
    text: "Si la demande est documentaire, une attestation CO₂e indicative peut suffire. Si une norme est imposée, suivre cette exigence.",
  },
  {
    title: "Transmettre un PDF propre",
    text: "Envoyer un document daté, vérifiable, archivable et explicite sur la méthode comme sur les limites.",
  },
];

const relatedPages = [
  {
    title: "Bilan carbone PME",
    text: "Comprendre quoi fournir lorsqu’une PME reçoit une demande carbone générale.",
    href: "/fr/bilan-carbone-pme/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Répondre à un dossier où un critère carbone ou ESG est mentionné.",
    href: "/fr/bilan-carbone-appel-offres/",
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
    a: "Souvent, le client ou l’acheteur veut compléter un dossier fournisseur, comparer les réponses RSE, archiver une preuve CO₂e ou réduire le risque documentaire dans sa chaîne d’approvisionnement.",
  },
  {
    q: "Faut-il obligatoirement un audit carbone complet ?",
    a: "Non, pas systématiquement. Si la demande est générique ou documentaire, une attestation CO₂e indicative peut aider. Si le dossier impose une norme, un périmètre précis ou une vérification externe, il faut suivre ce cadre.",
  },
  {
    q: "Que doit contenir un document carbone fournisseur ?",
    a: "Un résultat CO₂e agrégé, l’année couverte, la méthode utilisée, les limites méthodologiques, une date d’émission, un format PDF archivable et une logique de vérification.",
  },
  {
    q: "Certif-Scope remplace-t-il un bilan carbone complet ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
  {
    q: "Dans quels cas l’attestation est-elle utile ?",
    a: "Elle est utile pour une demande fournisseur simple, un questionnaire achats, une demande client, un screening ESG, un dossier bancaire ou un appel d’offres qui ne demande pas explicitement un audit complet.",
  },
];

export default function BilanCarboneFournisseurPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone fournisseur : répondre à une demande client",
    url: pageUrl,
    description:
      "Guide PME pour répondre à une demande de bilan carbone fournisseur avec un document CO₂e indicatif lorsque le dossier ne demande pas un audit complet.",
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
              Fournisseur · Client · Achats · Screening ESG
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone fournisseur : quoi envoyer à votre client ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Un client, acheteur ou donneur d’ordre vous demande un bilan carbone
              fournisseur ? Dans beaucoup de cas, il cherche d’abord un document
              CO₂e clair, daté, archivable et vérifiable — pas forcément un audit
              carbone complet.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique quoi fournir, comment éviter de bloquer un
              référencement fournisseur, et quand une attestation CO₂e indicative
              peut être une réponse adaptée.
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
                Cas réels
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                La demande arrive souvent au moment où le dossier doit avancer
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le fournisseur n’a pas toujours besoin de produire immédiatement
                une démarche carbone complète. Il a surtout besoin d’une réponse
                documentaire propre, proportionnée et transmissible.
              </p>
            </div>

            <div className="grid gap-4">
              {buyerScenarios.map((scenario) => (
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
                Contenu attendu
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce que le client doit pouvoir lire dans le document
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un bon document fournisseur ne doit pas promettre plus qu’il ne
                couvre. Il doit être clair, limité, daté et vérifiable.
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
              Certif-Scope aide à produire une réponse de screening. Si l’acheteur
              impose un audit, une norme ou une vérification externe, il faut suivre
              cette exigence.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-5 text-left font-semibold text-white">Demande reçue</th>
                  <th className="p-5 text-left font-semibold text-white">Réponse recommandée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 font-semibold text-white">{row.demand}</td>
                    <td className="p-5 leading-relaxed text-white/82">{row.answer}</td>
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
                Pourquoi beaucoup de PME bloquent sur ce sujet
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La difficulté ne vient pas seulement du calcul carbone. Elle vient
                souvent du manque de document simple, propre et transmissible au bon moment.
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse fournisseur · PDF vérifiable · sans abonnement
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Votre client demande un document carbone ?
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
              Continuer selon votre cas
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
              Questions fréquentes sur le bilan carbone fournisseur
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
