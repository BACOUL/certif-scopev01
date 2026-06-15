import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/diagnostic-demande-carbone/";

const situations = [
  {
    title: "Un client me demande un bilan carbone",
    text: "Certains clients utilisent le terme bilan carbone sans préciser le niveau attendu. La bonne action consiste à vérifier s’ils attendent une attestation CO₂e indicative ou un bilan carbone complet avant de générer un document.",
  },
  {
    title: "Je réponds à un appel d’offres",
    text: "Un appel d’offres peut accepter un document carbone simple, mais il peut aussi imposer une méthode précise. Il faut lire le cahier des charges et utiliser Certif-Scope seulement si aucun audit ou inventaire complet n’est exigé.",
  },
  {
    title: "Une banque demande une information ESG",
    text: "Une banque peut demander un indicateur environnemental ou une information carbone dans un dossier. Certif-Scope peut convenir si la demande reste indicative, non réglementaire et sans exigence de méthode obligatoire.",
  },
  {
    title: "Un assureur demande un document environnemental",
    text: "Une assurance peut demander une information environnementale ou carbone pour compléter un dossier. Certif-Scope peut aider si aucun audit complet, aucune validation externe et aucun inventaire détaillé ne sont demandés.",
  },
  {
    title: "Un donneur d’ordre demande une attestation CO₂e",
    text: "Une attestation CO₂e indicative peut répondre à une demande simple de premier niveau. Elle ne remplace pas une exigence d’inventaire carbone complet, de BEGES réglementaire ou de reporting CSRD/ESRS.",
  },
  {
    title: "La demande est vague ou mal formulée",
    text: "Si la demande ne précise pas le format, la méthode ou le niveau de preuve attendu, il faut clarifier avant de payer. Cette prudence évite de produire un document qui ne correspondrait pas au besoin réel du demandeur.",
  },
];

const results = [
  {
    title: "Certif-Scope peut convenir",
    text: "Pour une demande simple ou générique, un screening fournisseur, un dossier administratif, une première réponse carbone ou une attestation CO₂e indicative sans cahier des charges détaillé.",
    action: "Générer l’attestation si le demandeur accepte explicitement un document indicatif.",
  },
  {
    title: "Demande à clarifier",
    text: "Lorsque la demande parle de bilan carbone, document RSE, justificatif CO₂ ou information environnementale sans préciser le niveau attendu, le format ou la méthode.",
    action: "Demander au client, à la banque, à l’assureur ou au donneur d’ordre si une attestation CO₂e indicative suffit.",
  },
  {
    title: "Certif-Scope ne convient pas",
    text: "Si la demande exige un bilan carbone complet, un BEGES réglementaire, un audit carbone, une méthode physique détaillée, une validation externe ou des Scopes 1, 2 et 3 détaillés.",
    action: "Faire appel à un cabinet spécialisé ou à une méthode complète si le cahier des charges l’exige.",
  },
];

const fitItems = [
  "demande simple ou générique",
  "screening fournisseur",
  "dossier administratif",
  "première réponse carbone",
  "demande non réglementaire",
  "document CO₂e indicatif, daté et vérifiable",
  "demande client sans cahier des charges carbone détaillé",
  "demande RSE de premier niveau",
  "document lisible à transmettre rapidement",
  "réponse structurée sans lancer immédiatement un audit complet",
];

const limitItems = [
  "bilan GES réglementaire",
  "bilan carbone complet",
  "audit carbone complet",
  "reporting CSRD/ESRS",
  "exigence d’un cabinet spécialisé",
  "calcul détaillé Scope 1 / Scope 2 / Scope 3",
  "méthode physique détaillée imposée",
  "norme ou certificateur externe explicitement exigé",
  "inventaire carbone complet imposé par cahier des charges",
  "vérification externe indépendante obligatoire",
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

const faqs = [
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
      "Il est recommandé de demander une clarification avant de payer, notamment si le demandeur ne précise pas le format, la méthode ou le niveau de preuve attendu.",
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

export const metadata: Metadata = {
  title: "Demande bilan carbone client : Certif-Scope convient-il ?",
  description:
    "Votre client, banque, assureur ou donneur d’ordre vous demande un bilan carbone, une attestation CO₂e ou un document RSE ? Vérifiez si une attestation carbone indicative peut convenir.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
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
};

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-relaxed md:text-base ${
            dark ? "text-white/88" : "text-[#475569]"
          }`}
        >
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
      "Page de diagnostic pour vérifier si une attestation CO₂e indicative peut convenir à une demande carbone simple ou si un bilan carbone complet est nécessaire.",
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
              Une PME peut recevoir une demande de bilan carbone, d’attestation CO₂e ou de document RSE venant d’un client, d’une banque, d’un assureur, d’un donneur d’ordre ou d’un appel d’offres. Toutes ces demandes ne nécessitent pas forcément un bilan carbone complet.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope peut convenir aux demandes simples ou génériques lorsqu’une attestation CO₂e indicative suffit. Si la demande impose un audit, un BEGES réglementaire, un reporting CSRD/ESRS ou une méthode détaillée, il faut utiliser la démarche exigée.
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
              À retenir
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
              Certif-Scope fournit une attestation CO₂e indicative basée sur les informations déclarées par l’utilisateur et une méthode spend-based. Ce document ne garantit jamais son acceptation par un tiers.
            </p>
            <div className="mt-6 border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Périmètre
              </p>
              <p className="mt-2 text-lg font-bold text-[#0B3A63]">
                Indicatif, non audit, non BEGES réglementaire, non bilan carbone complet.
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
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {situations.map((situation) => (
              <article
                key={situation.title}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-[0_12px_32px_rgba(11,58,99,0.05)]"
              >
                <h3 className="text-xl font-bold text-[#0B3A63]">{situation.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  {situation.text}
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
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {results.map((result) => (
              <article
                key={result.title}
                className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-[0_16px_42px_rgba(11,58,99,0.06)]"
              >
                <h3 className="text-2xl font-extrabold text-[#0B3A63]">{result.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  {result.text}
                </p>
                <div className="mt-6 border-t border-[#0B3A63]/10 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    Action recommandée
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B3A63] md:text-base">
                    {result.action}
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
            <h2 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Quand Certif-Scope peut convenir
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope peut être utile pour une demande simple, non réglementaire, lorsqu’un document CO₂e indicatif, daté et vérifiable est suffisant.
            </p>
            <BulletList items={fitItems} />
          </article>
          <article className="rounded-lg border border-[#0B3A63]/10 bg-[#0B3A63] p-6 text-white md:p-8">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Quand Certif-Scope ne suffit pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/86 md:text-lg">
              Certif-Scope ne doit jamais être présenté comme un substitut à un bilan carbone complet, un BEGES réglementaire, un audit carbone ou une démarche imposée par un cahier des charges précis.
            </p>
            <BulletList items={limitItems} dark />
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
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-8 lg:grid-cols-2">
          <article>
            <h2 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Ce que Certif-Scope fournit
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Le document est conçu pour être transmis dans les demandes simples ou génériques, avec un périmètre clair et des limites visibles.
            </p>
            <BulletList items={providedItems} />
          </article>
          <article>
            <h2 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
              Ce que Certif-Scope ne fournit pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Ces limites évitent toute confusion avec une démarche réglementaire, un audit ou une validation externe.
            </p>
            <BulletList items={notProvidedItems} />
          </article>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Questions fréquentes
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
            FAQ
          </h2>
          <div className="mt-10 divide-y divide-[#0B3A63]/10 rounded-lg border border-[#0B3A63]/10 bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 md:p-7">
                <h3 className="text-lg font-bold text-[#0B3A63] md:text-xl">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {faq.answer}
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
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
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
            <Link
              href="/fr/verify"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-white/25 px-7 py-4 text-base font-semibold text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Vérifier une attestation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
