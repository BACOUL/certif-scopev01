import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/diagnostic-demande-carbone/";

const faqItems = [
  {
    question: "Certif-Scope remplace-t-il un bilan carbone complet ?",
    answer:
      "Non. Certif-Scope fournit une attestation CO₂e indicative. Ce n’est pas un bilan carbone complet, un BEGES réglementaire ou un audit carbone.",
  },
  {
    question: "Puis-je l’envoyer à un client ?",
    answer:
      "Oui, si la demande du client concerne un document carbone simple ou indicatif. Si le client exige une méthode précise ou un bilan complet, il faut utiliser la méthode demandée.",
  },
  {
    question: "Puis-je l’utiliser pour un appel d’offres ?",
    answer:
      "Oui, uniquement si le cahier des charges accepte un document indicatif ou ne précise pas de méthode obligatoire. Si l’appel d’offres impose un bilan carbone complet, Certif-Scope ne suffit pas.",
  },
  {
    question: "Que faire si la demande est vague ?",
    answer:
      "Il est recommandé de demander une clarification avant de payer. La page fournit une phrase prête à envoyer au demandeur.",
  },
  {
    question: "Est-ce que le document est garanti accepté ?",
    answer:
      "Non. Aucun document de ce type ne peut garantir son acceptation par un tiers. L’acceptation dépend du demandeur, du cahier des charges et du niveau de preuve attendu.",
  },
  {
    question: "Dans quels cas Certif-Scope est-il le plus utile ?",
    answer:
      "Certif-Scope est utile pour une première réponse carbone, un screening fournisseur, une demande administrative simple, un dossier client ou une demande RSE de premier niveau.",
  },
];

const situations = [
  {
    title: "Un client me demande un bilan carbone",
    body:
      "Certains clients utilisent le terme bilan carbone sans préciser le niveau attendu. Vérifiez s’ils attendent une attestation CO₂e indicative ou un bilan carbone complet, puis générez le document seulement si le format indicatif est accepté.",
  },
  {
    title: "Je réponds à un appel d’offres",
    body:
      "Un appel d’offres peut demander un document carbone simple, mais il peut aussi imposer une méthode précise. Lisez le cahier des charges avant de payer et utilisez Certif-Scope uniquement si aucun inventaire complet n’est exigé.",
  },
  {
    title: "Une banque me demande une information ESG",
    body:
      "Une banque peut demander un indicateur environnemental ou une information carbone dans un dossier. Certif-Scope peut convenir si la demande reste indicative, non réglementaire et sans méthode obligatoire imposée.",
  },
  {
    title: "Un assureur me demande un document environnemental",
    body:
      "Une assurance peut demander une information environnementale ou carbone pour compléter un dossier. Certif-Scope peut aider si aucun audit complet, aucune vérification externe et aucun inventaire détaillé ne sont exigés.",
  },
  {
    title: "Un donneur d’ordre me demande une attestation CO₂e",
    body:
      "Une attestation CO₂e indicative peut répondre à une demande simple de premier niveau. Elle ne remplace pas une exigence d’inventaire carbone complet ni une méthode réglementaire détaillée.",
  },
  {
    title: "La demande est vague ou mal formulée",
    body:
      "Si la demande ne précise pas le format, la méthode ou le niveau attendu, le risque principal est de fournir un document insuffisant. Demandez une clarification avant de payer afin de confirmer qu’une attestation indicative suffit.",
  },
];

const resultColumns = [
  {
    title: "Certif-Scope peut convenir",
    intro: "Certif-Scope peut convenir pour :",
    items: [
      "une demande simple",
      "une demande générique",
      "un screening fournisseur",
      "un dossier administratif",
      "une première réponse carbone",
      "une attestation CO₂e indicative",
      "une demande sans cahier des charges carbone détaillé",
    ],
    action:
      "Générer l’attestation si le demandeur accepte un document indicatif.",
  },
  {
    title: "Demande à clarifier",
    intro:
      "Certaines demandes utilisent des termes larges sans préciser le niveau attendu :",
    items: [
      "bilan carbone",
      "document RSE",
      "justificatif CO₂",
      "information environnementale",
    ],
    action:
      "Demander au client, à la banque, à l’assureur ou au donneur d’ordre si une attestation CO₂e indicative suffit.",
  },
  {
    title: "Certif-Scope ne convient pas",
    intro: "Certif-Scope ne convient pas si la demande exige :",
    items: [
      "un bilan carbone complet",
      "un BEGES réglementaire",
      "un audit carbone",
      "un reporting CSRD/ESRS",
      "une méthode physique détaillée",
      "une validation par un cabinet spécialisé",
      "des Scopes 1, 2 et 3 détaillés",
    ],
    action:
      "Faire appel à un cabinet spécialisé ou à une méthode complète si le cahier des charges l’exige.",
  },
];

const fitCases = [
  "demande simple ou générique",
  "screening fournisseur",
  "dossier administratif",
  "première réponse carbone",
  "demande non réglementaire",
  "besoin d’un document CO₂e indicatif, daté et vérifiable",
  "demande client sans cahier des charges carbone détaillé",
  "demande RSE de premier niveau",
  "besoin d’un document lisible à transmettre rapidement",
  "besoin d’une réponse structurée sans lancer immédiatement un audit complet",
];

const limitCases = [
  "bilan GES réglementaire",
  "audit carbone complet",
  "reporting CSRD/ESRS",
  "exigence d’un cabinet spécialisé",
  "calcul détaillé Scope 1 / Scope 2 / Scope 3",
  "méthode physique détaillée imposée",
  "exigence explicite d’une norme ou d’un certificateur externe",
  "cahier des charges imposant un inventaire carbone complet",
  "demande de vérification externe indépendante",
  "demande réglementaire obligatoire",
];

const providedItems = [
  "une attestation CO₂e indicative au format PDF",
  "un résultat agrégé en tCO₂e",
  "l’année de référence",
  "la méthode utilisée",
  "les limites du document",
  "un identifiant de vérification",
  "un format lisible, archivable et transmissible",
  "une réponse adaptée aux demandes simples ou génériques",
];

const notProvidedItems = [
  "pas un bilan carbone complet",
  "pas un BEGES réglementaire",
  "pas un audit carbone",
  "pas un reporting CSRD/ESRS",
  "pas une garantie d’acceptation par un tiers",
  "pas une validation par un cabinet externe",
  "pas un calcul physique détaillé des émissions",
  "pas un inventaire complet Scope 1, Scope 2 et Scope 3",
];

export const metadata: Metadata = {
  title: "Demande bilan carbone client : Certif-Scope convient-il ?",
  description:
    "Votre client, banque, assureur ou donneur d’ordre vous demande un bilan carbone, une attestation CO₂e ou un document RSE ? Vérifiez si une attestation carbone indicative peut convenir.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
      "x-default": pageUrl,
    },
  },
  openGraph: {
    type: "website",
    title: "Demande bilan carbone client : Certif-Scope convient-il ?",
    description:
      "Vérifiez si une attestation CO₂e indicative peut convenir à une demande client, banque, assurance, fournisseur ou appel d’offres.",
    url: pageUrl,
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demande bilan carbone client : Certif-Scope convient-il ?",
    description:
      "Comprendre si une attestation CO₂e indicative peut suffire ou si un bilan carbone complet est nécessaire.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#475569] md:text-base">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DiagnosticDemandeCarbonePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Demande bilan carbone client : Certif-Scope convient-il ?",
    url: pageUrl,
    description:
      "Page de diagnostic pour comprendre si une attestation CO₂e indicative peut répondre à une demande carbone simple ou si un bilan carbone complet est nécessaire.",
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/",
    },
    about: [
      "attestation CO₂e indicative",
      "demande bilan carbone client",
      "screening fournisseur",
      "document RSE PME",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-[#F8FAFC] text-[#1E293B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-[#0B3A63]/10 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Diagnostic avant achat
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl lg:text-6xl">
              Votre demande carbone est-elle compatible avec Certif-Scope ?
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Cette page vous aide à comprendre si une attestation CO₂e indicative peut suffire ou si un bilan carbone complet est nécessaire. Une PME peut recevoir une demande carbone venant d’un client, d’une banque, d’un assureur, d’un donneur d’ordre ou d’un appel d’offres, mais toutes les demandes ne nécessitent pas forcément un bilan carbone complet.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope est adapté uniquement aux demandes simples ou génériques de document carbone indicatif. Si la demande impose une méthode précise, un audit, un reporting réglementaire ou un inventaire détaillé, une autre démarche est nécessaire.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/fr/generate"
                className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#1FB6C1] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation
              </Link>
              <Link
                href="/fr/pricing"
                className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-[#0B3A63]/20 bg-white px-7 py-4 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix
              </Link>
            </div>

            <Link
              href="/fr/product/methodology"
              className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] underline decoration-[#1FB6C1]/50 underline-offset-4 transition-colors hover:text-[#1FB6C1]"
            >
              Voir la méthodologie
            </Link>
          </div>

          <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.08)] md:p-8">
            <h2 className="text-2xl font-extrabold text-[#0B3A63]">
              À retenir avant de payer
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
              Le bon réflexe consiste à confirmer le niveau de preuve attendu. Certif-Scope peut être pertinent pour une première réponse carbone, mais ne doit jamais être présenté comme un bilan carbone complet ou un document réglementaire obligatoire.
            </p>
            <div className="mt-6 border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Positionnement
              </p>
              <p className="mt-2 text-lg font-bold text-[#0B3A63]">
                Attestation CO₂e indicative, datée, lisible et vérifiable.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Diagnostic rapide
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Choisissez votre situation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Ces cas permettent d’identifier si la demande semble compatible avec une attestation CO₂e indicative ou si elle doit être clarifiée avant toute génération.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {situations.map((situation) => (
              <article
                key={situation.title}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-[0_12px_32px_rgba(11,58,99,0.05)]"
              >
                <h3 className="text-xl font-bold text-[#0B3A63]">{situation.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  {situation.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Orientation
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Résultat possible
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Une même demande peut relever de trois situations : compatible, à clarifier ou hors périmètre. L’objectif est de choisir la réponse la plus honnête avant l’achat.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {resultColumns.map((column) => (
              <article
                key={column.title}
                className="flex h-full flex-col rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-[0_16px_42px_rgba(11,58,99,0.06)]"
              >
                <h3 className="text-2xl font-extrabold text-[#0B3A63]">{column.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  {column.intro}
                </p>
                <CheckList items={column.items} />
                <div className="mt-6 border-t border-[#0B3A63]/10 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    Action recommandée
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B3A63] md:text-base">
                    {column.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-2">
          <article className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Cas adaptés
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Quand Certif-Scope peut convenir
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope fournit une attestation CO₂e indicative basée sur les informations déclarées par l’utilisateur et une méthode spend-based. Elle est utile lorsque le besoin porte sur un document lisible, daté et vérifiable, sans exigence d’audit complet.
            </p>
            <CheckList items={fitCases} />
          </article>

          <article className="rounded-lg border border-[#0B3A63]/10 bg-[#0B3A63] p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 md:text-sm">
              Hors périmètre
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Quand Certif-Scope ne suffit pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/86 md:text-lg">
              Certif-Scope ne doit jamais être présenté comme un substitut à un bilan GES réglementaire, un audit carbone complet, un reporting CSRD/ESRS ou une démarche imposée par un cahier des charges précis.
            </p>
            <ul className="mt-5 space-y-3">
              {limitCases.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/88 md:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_48px_rgba(11,58,99,0.07)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Clarification utile
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Phrase à envoyer avant de payer
            </h2>
            <div className="mt-6 border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5">
              <p className="text-base font-semibold leading-relaxed text-[#0B3A63] md:text-lg">
                "Bonjour, pouvez-vous me confirmer si une attestation CO₂e indicative, basée sur une méthode spend-based et mentionnant clairement ses limites, est suffisante pour votre demande ?"
              </p>
            </div>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Cette phrase permet de clarifier la demande avant de générer le document, surtout si le client, la banque, l’assureur ou le donneur d’ordre n’a pas précisé le niveau attendu.
            </p>
            <div className="mt-6 rounded-lg border border-[#0B3A63]/10 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                Variante courte
              </p>
              <p className="mt-2 text-base font-semibold leading-relaxed text-[#0B3A63] md:text-lg">
                "Si vous exigez un bilan carbone complet, un audit ou une méthode réglementaire précise, merci de me l’indiquer."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-2">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Inclus
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Ce que Certif-Scope fournit
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Le document est conçu pour être transmis rapidement dans les demandes simples ou génériques, avec un périmètre clair et des limites visibles.
            </p>
            <CheckList items={providedItems} />
          </article>

          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Non inclus
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Ce que Certif-Scope ne fournit pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Ces limites doivent rester explicites afin de ne pas créer de confusion avec une démarche réglementaire, un audit ou une validation externe.
            </p>
            <CheckList items={notProvidedItems} />
          </article>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Questions fréquentes
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              FAQ
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#0B3A63]/10 rounded-lg border border-[#0B3A63]/10 bg-white">
            {faqItems.map((item) => (
              <div key={item.question} className="p-6 md:p-7">
                <h3 className="text-lg font-bold text-[#0B3A63] md:text-xl">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Si votre demande est simple, vous pouvez générer votre attestation maintenant.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/86 md:text-lg">
            Certif-Scope est adapté aux demandes carbone simples ou génériques, lorsque le demandeur n’exige pas un bilan carbone complet, un audit ou un reporting réglementaire.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/fr/generate"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#1FB6C1] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              Générer mon attestation CO₂e
            </Link>
            <Link
              href="/fr/product/methodology"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-white/35 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B3A63]"
            >
              Voir la méthodologie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
