// PATH: src/app/fr/bilan-carbone-pme/exemple/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Exemple bilan carbone PME : modèle de document CO₂e | Certif-Scope",
  description:
    "Voir un exemple de bilan carbone PME : structure d’une attestation CO₂e indicative, éléments attendus, limites, vérification et usage dans un dossier client, banque ou appel d’offres.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    },
  },
  openGraph: {
    title: "Exemple bilan carbone PME : modèle de document CO₂e",
    description:
      "Comprendre à quoi ressemble une attestation CO₂e indicative pour PME : contenu, structure, limites et cas d’usage.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Ce que montre l’exemple",
    text: "Un document CO₂e utilisable dans un dossier : résultat agrégé, année, méthode, limites, date et vérification.",
  },
  {
    title: "Ce que ce n’est pas",
    text: "Ce n’est pas un audit carbone, ni un inventaire GES complet, ni un reporting réglementaire CSRD/ESRS.",
  },
  {
    title: "Usage réel",
    text: "L’exemple sert à comprendre quoi transmettre à un client, fournisseur, acheteur, banque, assureur ou appel d’offres.",
  },
];

const documentParts = [
  "Nom ou identification simple de l’entité",
  "Année ou période couverte",
  "Résultat CO₂e agrégé en tCO₂e",
  "Méthode déclarée et compréhensible",
  "Date d’émission",
  "Limites visibles du document",
  "Identifiant ou référence de vérification",
  "Mention explicite : indicatif, non audit, non réglementaire",
];

const previewRows = [
  {
    label: "Type de document",
    value: "Attestation CO₂e indicative",
    purpose: "Indiquer immédiatement la nature du livrable.",
  },
  {
    label: "Résultat",
    value: "Résultat agrégé en tCO₂e",
    purpose: "Permettre une lecture rapide par le tiers.",
  },
  {
    label: "Méthode",
    value: "Méthode spend-based déclarée",
    purpose: "Expliquer comment l’estimation a été produite.",
  },
  {
    label: "Limites",
    value: "Non audit, non inventaire GES complet",
    purpose: "Éviter toute confusion sur la portée du document.",
  },
];

const useCases = [
  "Réponse à un questionnaire client ou fournisseur.",
  "Pièce à joindre dans un appel d’offres sans norme imposée.",
  "Document à transmettre à une banque ou un assureur.",
  "Référencement fournisseur demandant une preuve carbone simple.",
  "Dossier commercial où une information CO₂e est demandée.",
];

const decisionRows = [
  {
    demand: "Je veux voir ce que contient le document avant de payer",
    answer: "L’exemple doit montrer la structure, les champs clés, les limites et le type de résultat attendu.",
  },
  {
    demand: "Mon client veut seulement une information carbone",
    answer: "Une attestation CO₂e indicative peut souvent suffire si aucune norme complète n’est imposée.",
  },
  {
    demand: "Le dossier exige un audit ou une vérification externe",
    answer: "Il faut suivre cette exigence. L’exemple Certif-Scope ne remplace pas un audit complet.",
  },
  {
    demand: "Je veux comparer avec un bilan carbone complet",
    answer: "La différence principale est le périmètre : screening indicatif vs inventaire détaillé.",
  },
];

const mistakes = [
  {
    title: "Chercher un exemple trop complexe",
    text: "Un document utile pour un dossier PME doit être lisible rapidement. La complexité n’est pas toujours un signe de pertinence.",
  },
  {
    title: "Oublier les limites",
    text: "Un exemple sans limites visibles peut créer une confusion avec un audit ou un inventaire complet.",
  },
  {
    title: "Confondre modèle et preuve",
    text: "Un exemple montre la structure. Une attestation émise doit contenir des données, une date et une logique de vérification.",
  },
  {
    title: "Présenter un screening comme un audit",
    text: "Le document doit rester clair : indicatif, non réglementaire, non audit, non inventaire GES complet.",
  },
];

const relatedPages = [
  {
    title: "Générer une attestation",
    text: "Produire un document CO₂e indicatif prêt à transmettre.",
    href: "/fr/generate/",
  },
  {
    title: "Prix Certif-Scope",
    text: "Voir l’offre à 89€, sans abonnement.",
    href: "/fr/pricing/",
  },
  {
    title: "Coût bilan carbone PME",
    text: "Comparer attestation indicative, inventaire complet et audit.",
    href: "/fr/bilan-carbone-pme/cout/",
  },
];

const faq = [
  {
    q: "À quoi ressemble un exemple de bilan carbone PME ?",
    a: "Dans un usage de screening, il ressemble à un document CO₂e indicatif avec un résultat agrégé, l’année couverte, la méthode déclarée, des limites visibles, une date d’émission et une logique de vérification.",
  },
  {
    q: "Un exemple doit-il contenir les Scopes 1, 2 et 3 détaillés ?",
    a: "Pas toujours. Si le dossier demande seulement une information carbone simple, un résultat agrégé peut suffire. Une ventilation détaillée correspond à une démarche d’inventaire plus complète.",
  },
  {
    q: "Que doit regarder un client dans ce type de document ?",
    a: "Le client regarde surtout si le document est clair, daté, archivable, compréhensible, cohérent avec la demande et explicite sur sa méthode comme sur ses limites.",
  },
  {
    q: "L’exemple Certif-Scope remplace-t-il un audit carbone ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
  {
    q: "Dans quels cas cet exemple est-il utile ?",
    a: "Il est utile pour comprendre quoi fournir dans un dossier client, fournisseur, banque, assurance ou appel d’offres lorsque la demande ne précise pas une norme complète ou une vérification externe.",
  },
];

export default function BilanCarbonePMEExemplePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Exemple bilan carbone PME : modèle de document CO₂e",
    url: pageUrl,
    description:
      "Guide PME pour comprendre à quoi ressemble une attestation CO₂e indicative, quels éléments elle contient et dans quels cas elle est utile.",
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
        name: "Exemple",
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
      "Service de génération d’une attestation CO₂e indicative, standardisée, vérifiable et utilisable dans des dossiers clients, fournisseurs, banques, assurances et appels d’offres.",
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
        id="bilan-carbone-pme-exemple"
        data-section="bilan-carbone-pme-exemple"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Exemple · Document CO₂e · Attestation PME
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Exemple de bilan carbone PME : à quoi ressemble l’attestation ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Quand une PME reçoit une demande carbone, elle veut souvent voir un
              exemple concret avant de payer ou de transmettre un document. Voici la
              structure d’une attestation CO₂e indicative claire et utilisable.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              L’objectif n’est pas de montrer un audit complet, mais de comprendre
              ce qu’un tiers peut lire rapidement dans un dossier client, banque,
              assurance, fournisseur ou appel d’offres.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Structure attendue
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce qu’un exemple utile doit contenir
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un bon exemple ne doit pas impressionner par sa complexité. Il doit
                montrer un document lisible, archivable, vérifiable et prudent dans
                son périmètre.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {documentParts.map((part) => (
                <li
                  key={part}
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569] shadow-sm"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Exemple de lecture
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Ce que le tiers comprend dans le document
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Le document doit permettre une lecture rapide : de quoi s’agit-il,
              quel est le résultat, quelle méthode est utilisée et quelles limites
              s’appliquent.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {previewRows.map((row) => (
              <article
                key={row.label}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  {row.label}
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#0B3A63]">
                  {row.value}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {row.purpose}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/4 p-5 text-left font-semibold text-[#0B3A63]">
                    Élément
                  </th>
                  <th className="w-1/3 p-5 text-left font-semibold text-[#0B3A63]">
                    Exemple de contenu
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Rôle dans le dossier
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {previewRows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.label}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.value}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Document indicatif
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Un exemple clair doit aussi dire ce qu’il ne couvre pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              La crédibilité vient aussi des limites. Un document de screening ne
              doit jamais être présenté comme un inventaire GES complet ou un audit.
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
                  Lecture correcte
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
                    Lecture correcte
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
                Cas d’usage
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Quand ce type d’exemple aide une PME
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Le besoin est souvent très concret : la PME doit transmettre une
                pièce lisible à un tiers, sans se lancer dans une démarche trop lourde.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {useCase}
                </div>
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
                Les erreurs fréquentes dans un exemple de document carbone
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Un bon exemple doit aider à décider, pas créer une confusion sur le
                niveau de preuve ou la portée du document.
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
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Exemple concret · PDF vérifiable · prix fixe
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Vous voulez produire ce type de document ?
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
              Continuer selon votre besoin
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
              Questions fréquentes sur l’exemple de bilan carbone PME
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
