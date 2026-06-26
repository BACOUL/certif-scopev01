// PATH: src/app/fr/bilan-carbone-gratuit-banque/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-gratuit-banque/";
const deUrl = "https://www.certif-scope.com/de/kostenloser-co2-rechner-bank/";

export const metadata: Metadata = {
  title: "Bilan carbone gratuit pour banque : est-ce suffisant ? | Certif-Scope",
  description:
    "Une banque demande un bilan carbone, une information ESG ou un document CO2e ? Comprendre quand un outil gratuit suffit et quand produire une attestation CO2e indicative.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
      de: deUrl,
    },
  },
  openGraph: {
    title: "Bilan carbone gratuit pour banque : que fournir ?",
    description:
      "Guide PME pour répondre à une demande bancaire : outil gratuit, document CO2e, attestation indicative, limites et phrase prête à envoyer.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function FreeCarbonBankFR() {
  const bankExpectations = [
    "une preuve de démarche environnementale ou RSE ;",
    "un indicateur CO2e annuel compréhensible ;",
    "un document daté à joindre au dossier ;",
    "une méthode et des limites clairement expliquées ;",
    "un support archivable par le conseiller ou le service risque.",
  ];

  const choices = [
    {
      title: "Utiliser un outil gratuit",
      text: "Adapté pour obtenir un premier ordre de grandeur ou montrer que l’entreprise engage une démarche.",
    },
    {
      title: "Joindre une attestation CO2e indicative",
      text: "Adapté lorsque la banque demande une pièce documentaire claire, datée, standardisée et transmissible.",
    },
    {
      title: "Lancer un audit carbone complet",
      text: "Nécessaire si la banque impose explicitement un périmètre normé, une vérification externe ou un reporting réglementaire.",
    },
  ];

  const emailLines = [
    "Bonjour,",
    "Vous trouverez ci-joint une attestation CO2e indicative établie pour notre entreprise.",
    "Ce document présente une estimation agrégée, l’année couverte, la méthode utilisée et ses limites.",
    "Il ne s’agit pas d’un audit carbone complet ni d’un reporting réglementaire, mais d’un support documentaire destiné à répondre à votre demande ESG / environnementale.",
    "Cordialement,",
  ];

  const faq = [
    {
      q: "Une banque peut-elle accepter un bilan carbone gratuit ?",
      a: "Oui, si elle demande seulement une démarche ou une première information. Si elle veut une pièce claire pour compléter un dossier, un PDF CO2e cadré peut être plus adapté qu’un simple résultat de calculateur.",
    },
    {
      q: "Certif-Scope remplace-t-il un audit demandé par la banque ?",
      a: "Non. Si la banque demande un audit, une norme précise, une vérification externe ou un inventaire GES complet, il faut respecter cette exigence. Certif-Scope sert uniquement pour une réponse documentaire indicative.",
    },
    {
      q: "Pourquoi la banque demande-t-elle une information carbone ?",
      a: "Elle peut l’utiliser pour compléter une analyse ESG, un dossier de financement, un suivi risque, une demande interne ou une information extra-financière liée à son portefeuille client.",
    },
    {
      q: "Que doit contenir le document transmis ?",
      a: "Au minimum : nom de l’entreprise, année couverte, résultat CO2e agrégé, méthode, limites, date d’émission et format archivable.",
    },
  ];

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "fr-FR",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone par une banque",
    description:
      "Méthode simple pour qualifier la demande bancaire et transmettre le bon niveau de document CO2e.",
    inLanguage: "fr-FR",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire la demande",
        text: "Identifier si la banque demande une démarche générale, un indicateur CO2e, un PDF ou un audit complet.",
      },
      {
        "@type": "HowToStep",
        name: "Choisir le niveau de réponse",
        text: "Un outil gratuit peut aider à estimer. Une attestation CO2e indicative est utile si un document transmissible est attendu.",
      },
      {
        "@type": "HowToStep",
        name: "Envoyer le document avec ses limites",
        text: "Préciser que le document est indicatif, non audit, non inventaire GES complet et non reporting réglementaire.",
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-64 w-64 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-52 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
            Banque - dossier ESG - document CO2e
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-5xl">
            Bilan carbone gratuit pour une banque : est-ce suffisant ?
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#475569]">
            Quand une banque demande un bilan carbone ou une information ESG, elle
            ne demande pas toujours un audit complet. Souvent, elle cherche un
            indicateur CO2e clair et un document archivable pour compléter un dossier.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63]"
            >
              Générer une attestation CO2e →
            </Link>
            <Link
              href="/fr/outils-gratuits-bilan-carbone/"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Voir les outils gratuits
            </Link>
          </div>
        </header>

        <main className="mx-auto mt-14 max-w-5xl space-y-14">
          <section className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Réponse rapide
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Un outil gratuit peut suffire si la banque veut simplement vérifier
              que l’entreprise engage une démarche. Si elle demande un document à
              joindre au dossier, une attestation CO2e indicative, datée et
              vérifiable est souvent plus propre. Elle doit toutefois rester
              présentée comme indicative, non auditée et non réglementaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Ce que la banque veut souvent voir
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {bankExpectations.map((item) => (
                <li
                  key={item}
                  className="rounded-[18px] border border-[#0B3A63]/10 bg-white p-4 text-sm text-[#475569] shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Trois niveaux de réponse possibles
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {choices.map((choice) => (
                <article
                  key={choice.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B3A63]">{choice.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {choice.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-[#1FB6C1]/20 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Phrase prête à envoyer au banquier
            </h2>
            <div className="mt-5 rounded-[20px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm">
              {emailLines.map((line) => (
                <p key={line} className="mb-2 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Quand Certif-Scope est adapté
            </h2>
            <div className="mt-6 rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <p className="text-base leading-relaxed text-[#475569]">
                Certif-Scope est adapté lorsque la demande bancaire reste
                documentaire : un indicateur CO2e, un PDF, une démarche RSE ou une
                pièce à joindre au dossier. Le document ne doit pas être présenté
                comme un audit complet, une certification carbone ou une garantie
                réglementaire.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:bg-[#0B3A63] hover:text-white"
                >
                  Prix : 89 €
                </Link>
                <Link
                  href="/fr/methodology/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/20 px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:bg-[#F8FAFC]"
                >
                  Lire la méthode
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B3A63]">FAQ</h2>
            {faq.map((item) => (
              <details key={item.q} className="rounded-[20px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-[#0B3A63]">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.a}</p>
              </details>
            ))}
          </section>
        </main>
      </div>
    </section>
  );
}
