// PATH: src/app/fr/bilan-carbone-pme/obligation/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone PME obligatoire : quand faut-il répondre ? | Certif-Scope",
  description:
    "Le bilan carbone est-il obligatoire pour une PME ? Comprenez la différence entre obligation réglementaire, demande client, appel d’offres, banque ou fournisseur, et quoi fournir sans audit complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    },
  },
  openGraph: {
    title: "Bilan carbone PME obligatoire : quand faut-il répondre ?",
    description:
      "Guide PME : distinguer obligation réglementaire, exigence client et besoin documentaire, puis savoir quoi fournir quand un document CO₂e est demandé.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Obligation générale",
    text: "Pour la majorité des PME, il ne s’agit pas d’une obligation générale automatique de produire un bilan carbone complet.",
  },
  {
    title: "Demande fréquente",
    text: "Le besoin vient souvent d’un client, d’un appel d’offres, d’une banque, d’un assureur ou d’un référencement fournisseur.",
  },
  {
    title: "Réponse possible",
    text: "Si le dossier ne demande pas d’audit complet, un document CO₂e indicatif peut souvent servir de première réponse cadrée.",
  },
];

const requestCases = [
  "Un client demande un bilan carbone avant de référencer la PME.",
  "Un appel d’offres mentionne un critère CO₂e, RSE ou environnemental.",
  "Une banque ou un assureur demande une information environnementale.",
  "Une plateforme fournisseur demande un justificatif carbone simple.",
  "Un donneur d’ordre demande une preuve documentaire dans le dossier achats.",
];

const decisionRows = [
  {
    demand: "La loi impose-t-elle un bilan carbone complet à toutes les PME ?",
    answer: "Non, pas comme règle générale automatique. Il faut vérifier le cadre exact applicable à l’entreprise.",
  },
  {
    demand: "Un client demande “votre bilan carbone” sans précision",
    answer: "Il faut qualifier la demande. Une attestation CO₂e indicative peut souvent répondre à un besoin documentaire.",
  },
  {
    demand: "Un appel d’offres impose une norme, un périmètre ou une vérification",
    answer: "Il faut suivre l’exigence imposée. Certif-Scope ne remplace pas un audit ni une vérification externe.",
  },
  {
    demand: "Le dossier demande seulement une information carbone ou CO₂e",
    answer: "Un PDF daté, archivable, avec résultat, méthode et limites peut être une réponse proportionnée.",
  },
];

const expectedItems = [
  "Résultat CO₂e agrégé",
  "Année couverte par l’estimation",
  "Méthode utilisée et formule générale",
  "Limites visibles du document",
  "Date d’émission",
  "PDF archivable et transmissible",
  "Identifiant ou vérification documentaire",
  "Mention : indicatif, non audit, non réglementaire",
];

const mistakes = [
  {
    title: "Confondre demande client et obligation légale",
    text: "Une exigence dans un dossier commercial n’est pas toujours une obligation réglementaire générale.",
  },
  {
    title: "Ne rien fournir",
    text: "L’absence de document peut bloquer ou ralentir un dossier même si la demande n’est pas une obligation générale.",
  },
  {
    title: "Surpromettre un bilan complet",
    text: "Un document indicatif ne doit jamais être présenté comme un inventaire GES complet, un audit ou une vérification externe.",
  },
  {
    title: "Lancer une démarche trop lourde trop vite",
    text: "Si la demande est seulement documentaire, un premier document cadré peut suffire avant d’engager un audit complet.",
  },
];

const relatedPages = [
  {
    title: "Bilan carbone PME",
    text: "Voir la page pilier pour comprendre quoi fournir sans audit complet.",
    href: "/fr/bilan-carbone-pme/",
  },
  {
    title: "Bilan carbone fournisseur",
    text: "Répondre à une demande client, acheteur ou donneur d’ordre.",
    href: "/fr/bilan-carbone-fournisseur/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Savoir quoi joindre quand le DCE ou le mémoire technique demande un document carbone.",
    href: "/fr/bilan-carbone-appel-offres/",
  },
];

const faq = [
  {
    q: "Le bilan carbone est-il obligatoire pour toutes les PME ?",
    a: "Pour la majorité des PME, il n’existe pas d’obligation générale automatique de produire un bilan carbone complet simplement parce qu’elles sont des PME. Il faut toutefois vérifier le cadre applicable à chaque entreprise et chaque dossier.",
  },
  {
    q: "Pourquoi une PME reçoit-elle quand même une demande de bilan carbone ?",
    a: "Parce qu’un client, un donneur d’ordre, une banque, un assureur ou un appel d’offres peut demander une information carbone dans son propre processus. C’est souvent une exigence documentaire ou contractuelle, pas une obligation générale applicable à toutes les PME.",
  },
  {
    q: "Une demande client signifie-t-elle qu’il faut un audit complet ?",
    a: "Pas forcément. Si la demande ne précise pas de norme, de périmètre détaillé, de justificatifs techniques ou de vérification externe, une attestation CO₂e indicative peut souvent servir de première réponse.",
  },
  {
    q: "Que fournir si on me demande un bilan carbone et que je n’en ai pas ?",
    a: "Il faut d’abord qualifier le niveau attendu. Si le besoin est documentaire, un PDF CO₂e indicatif avec résultat agrégé, année, méthode déclarée, limites et vérification peut être adapté.",
  },
  {
    q: "Certif-Scope remplace-t-il un bilan carbone réglementaire ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
];

export default function BilanCarbonePMEObligationPageFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME obligatoire : quand faut-il répondre ?",
    url: pageUrl,
    description:
      "Guide PME pour distinguer obligation réglementaire, demande client, appel d’offres, banque, assurance et besoin documentaire CO₂e.",
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
        item: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Obligation",
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
      "Service de génération d’un document CO₂e indicatif pour répondre aux demandes clients, fournisseurs, banques, assurances et appels d’offres.",
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
        id="bilan-carbone-pme-obligation"
        data-section="bilan-carbone-pme-obligation"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Obligation · PME · Client · Appel d’offres
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone PME obligatoire : quand faut-il répondre ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Pour la majorité des PME, le bilan carbone complet n’est pas une
              obligation générale automatique. Mais une demande peut arriver par
              un client, un appel d’offres, une banque, un assureur ou un donneur
              d’ordre.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Le bon réflexe n’est donc pas seulement de demander si c’est
              obligatoire. Il faut comprendre le niveau réellement attendu et
              fournir un document proportionné.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Obtenir un document CO₂e
              </Link>
              <Link
                href="/fr/bilan-carbone-pme/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le guide PME
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
                Pourquoi la confusion existe
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Une demande de dossier peut être prise pour une obligation générale
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Quand un acheteur écrit “bilan carbone demandé”, la PME peut croire
                qu’un audit complet est obligatoire. En réalité, beaucoup de
                demandes sont documentaires : elles visent un indicateur CO₂e lisible.
              </p>
            </div>

            <div className="grid gap-4">
              {requestCases.map((requestCase) => (
                <div
                  key={requestCase}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {requestCase}
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
                Pièce utile
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Que fournir quand le dossier ne demande pas un audit complet ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un document CO₂e indicatif doit permettre au tiers de comprendre le
                résultat, la méthode, l’année couverte, le périmètre et les limites.
              </p>
              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer le PDF maintenant
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
              Décision pratique
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Obligation, exigence client ou simple screening : comment décider ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Le niveau de réponse dépend du document demandé. S’il y a une norme
              imposée ou une vérification externe, la réponse doit suivre ce cadre.
              Sinon, un document indicatif peut être proportionné.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Situation
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
                    Situation
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
                Les erreurs fréquentes quand une PME cherche “obligatoire”
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Le risque principal est de répondre trop peu, trop tard, ou de
                présenter un document indicatif comme un audit complet.
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
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Réponse proportionnée
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Pas besoin de surdimensionner si le dossier demande seulement un document
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope sert aux cas où la PME doit fournir une attestation CO₂e
              indicative, claire et vérifiable, sans prétendre produire un audit ou un
              inventaire réglementaire.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                Voir le prix 89€
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
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
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
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

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur l’obligation de bilan carbone PME
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

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope produit une attestation CO₂e indicative basée sur les dépenses.
            Le document ne constitue pas un audit carbone, un inventaire GES complet,
            une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>
    </main>
  );
}
