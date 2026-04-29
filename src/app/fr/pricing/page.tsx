// PATH: src/app/fr/pricing/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO — PRICING FR (FR-FIRST)
   Objectif : capter intention "prix bilan carbone PME / coût"
   Positionnement : attestation CO₂e indicative spend-based,
   standardisée, vérifiable, sans abonnement.
====================================================== */

export const metadata: Metadata = {
  title:
    "Prix bilan carbone PME : attestation CO₂e indicative à 89€ | Certif-Scope",
  description:
    "Prix clair pour obtenir une attestation CO₂e indicative : 89€ par document, sans abonnement. PDF standardisé et vérifiable, utile pour demandes fournisseurs, appels d’offres, banques, assurances et screening ESG. Non audit, non CSRD/ESRS.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
      en: "https://www.certif-scope.com/pricing/",
      de: "https://www.certif-scope.com/de/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title:
      "Prix bilan carbone PME : attestation CO₂e indicative à 89€ | Certif-Scope",
    description:
      "Attestation CO₂e indicative à 89€, sans abonnement. PDF standardisé, daté, archivable et vérifiable pour demandes fournisseurs, appels d’offres, banques et screening ESG.",
    url: "https://www.certif-scope.com/fr/pricing/",
    siteName: "Certif-Scope",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const includedItems = [
  "Résultat CO₂e agrégé en tCO₂e",
  "Année couverte et date d’émission",
  "Méthode spend-based explicitée",
  "Limites méthodologiques visibles",
  "PDF standardisé et archivable",
  "Identifiant unique de vérification",
  "Document vérifiable par un tiers",
  "Validité documentaire d’un an",
];

const reassuranceItems = [
  {
    title: "Prix fixe",
    text: "89€ par document. Pas de devis, pas de négociation, pas d’abonnement caché.",
  },
  {
    title: "Usage concret",
    text: "Conçu pour répondre rapidement à une demande client, fournisseur, banque, assurance ou appel d’offres.",
  },
  {
    title: "Périmètre clair",
    text: "Attestation indicative de screening. Ce n’est pas un audit carbone complet ni un reporting CSRD/ESRS.",
  },
];

const packs = [
  {
    name: "Pack de 5",
    price: "349€",
    unit: "69€ par attestation",
    text: "Pour plusieurs dossiers fournisseurs ou plusieurs demandes clients sur l’année.",
    href: "/api/checkout-pack?pack=5",
  },
  {
    name: "Pack de 10",
    price: "590€",
    unit: "59€ par attestation",
    text: "Pour une utilisation régulière dans les réponses commerciales, achats ou appels d’offres.",
    href: "/api/checkout-pack?pack=10",
  },
  {
    name: "Pack de 50",
    price: "2 450€",
    unit: "49€ par attestation",
    text: "Pour réseaux, plateformes ou organisations avec un volume fournisseur important.",
    href: "/api/checkout-pack?pack=50",
  },
];

const faqs = [
  {
    question: "Est-ce un bilan carbone réglementaire ou certifié ?",
    answer:
      "Non. Certif-Scope produit une attestation CO₂e indicative basée sur une méthode spend-based. Le document ne remplace pas un audit carbone complet, un inventaire GES détaillé ou un reporting CSRD/ESRS.",
  },
  {
    question: "Pourquoi le prix est-il fixe à 89€ ?",
    answer:
      "Le produit est standardisé : l’objectif est de produire un document de screening clair, rapide et vérifiable, sans mission de conseil, sans collecte terrain et sans audit complet.",
  },
  {
    question: "Quand utiliser cette attestation ?",
    answer:
      "Elle est adaptée lorsqu’un client, un acheteur, une banque, un assureur ou un appel d’offres demande une indication CO₂e ou une preuve carbone simple à transmettre.",
  },
  {
    question: "Est-ce acceptable pour un appel d’offres ?",
    answer:
      "Cela dépend du cahier des charges. Si la demande porte sur un indicateur ou un document de screening, l’attestation peut être utile. Si une norme, une vérification externe ou un périmètre précis est imposé, il faut suivre cette exigence.",
  },
  {
    question: "Les données détaillées sont-elles stockées ?",
    answer:
      "Non. Certif-Scope est conçu selon une approche privacy-by-design. Les données détaillées de dépenses ne sont pas conservées. Le document final doit être téléchargé et archivé par l’utilisateur.",
  },
];

export default function PricingPageFR() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Prix bilan carbone PME : attestation CO₂e indicative à 89€",
    url: "https://www.certif-scope.com/fr/pricing/",
    description:
      "Prix clair pour obtenir une attestation CO₂e indicative à 89€, sans abonnement, standardisée et vérifiable.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
  };

  const jsonLdOffer = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative Certif-Scope",
    serviceType: "Attestation CO₂e indicative spend-based",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/generate/",
      description:
        "Attestation CO₂e indicative, PDF standardisé et vérifiable, sans abonnement.",
    },
  };

  const jsonLdFaq = {
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
    <main id="main-content" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebPage),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOffer),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />

      <section
        id="pricing"
        data-section="pricing"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Tarifs Certif-Scope
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0B3A63] md:text-5xl">
              Un prix clair pour obtenir une attestation CO₂e vérifiable
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope permet de produire un document carbone indicatif,
              standardisé et vérifiable, conçu pour répondre rapidement aux
              demandes de screening fournisseur, d’appel d’offres, de banque ou
              d’assurance.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation
              </Link>

              <Link
                href="/fr/bilan-carbone-pme/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Lire le guide PME
              </Link>

              <Link
                href="/fr/verify/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
              >
                Vérifier un document
              </Link>
            </div>
          </header>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_70px_rgba(11,58,99,0.13)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.65),transparent)]" />
              <div className="absolute right-[-12%] top-[-18%] h-56 w-56 rounded-full bg-[#1FB6C1]/8 blur-3xl" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                  <p className="inline-flex rounded-full border border-[#1FB6C1]/20 bg-[#1FB6C1]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]">
                    Offre principale
                  </p>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                    Attestation CO₂e indicative
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                    Un document PDF clair, daté et vérifiable, destiné aux
                    situations où l’on vous demande une réponse carbone rapide
                    sans lancer un audit complet.
                  </p>

                  <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Prix par document
                    </p>

                    <div className="mt-3 flex items-end justify-center">
                      <span className="text-6xl font-extrabold tracking-tight text-[#0B3A63] md:text-7xl">
                        89€
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-[#64748B]">
                      paiement unique · sans abonnement
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      href="/fr/generate/"
                      className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                    >
                      Générer mon attestation
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">
                    Ce qui est inclus
                  </h3>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-[#0B3A63]/8 bg-white px-4 py-3 text-sm leading-relaxed text-[#475569]"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[linear-gradient(180deg,rgba(11,58,99,0.04)_0%,rgba(31,182,193,0.04)_100%)] p-5">
                    <p className="text-sm font-semibold text-[#0B3A63]">
                      Périmètre du prix
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      Le prix couvre la génération d’une attestation indicative
                      standardisée. Il ne couvre pas une mission de conseil, un
                      audit terrain, une vérification externe ou un inventaire
                      GES complet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.18)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Comparaison utile
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                Certif-Scope n’est pas vendu comme un audit
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Certif-Scope — 89€
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Attestation indicative de screening : résultat agrégé,
                    méthode déclarée, limites visibles et vérification du
                    document.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Audit complet — devis spécifique
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Collecte détaillée, périmètres complets, hypothèses,
                    données d’activité, accompagnement et parfois vérification
                    externe.
                  </p>
                </div>
              </div>

              <Link
                href="/fr/product/compliance/"
                className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Voir le périmètre →
              </Link>
            </aside>
          </section>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {reassuranceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  {item.title}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section
        id="packs"
        data-section="packs"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Usage récurrent
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Packs pour plusieurs attestations
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Les packs sont destinés aux organisations qui doivent produire
              plusieurs documents dans l’année : plusieurs dossiers, plusieurs
              entités, plusieurs fournisseurs ou plusieurs demandes clients.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className="flex flex-col rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_18px_45px_rgba(11,58,99,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  Pack
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                  {pack.name}
                </h3>

                <div className="mt-6">
                  <p className="text-4xl font-extrabold tracking-tight text-[#0B3A63]">
                    {pack.price}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#64748B]">
                    {pack.unit}
                  </p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#475569]">
                  {pack.text}
                </p>

                <a
                  href={pack.href}
                  className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Acheter {pack.name.toLowerCase()}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-[#64748B]">
              Les packs ne changent pas la nature du document : chaque
              attestation reste indicative, spend-based, standardisée et
              vérifiable. Pour une intégration plateforme ou un volume important,
              une offre API pourra être proposée séparément.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pricing-context"
        data-section="pricing-context"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Bien choisir
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Quand le prix Certif-Scope est adapté
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Le prix de 89€ est cohérent lorsque la demande porte sur un
                document de screening, une preuve minimale ou un indicateur
                carbone à transmettre rapidement.
              </p>

              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation
              </Link>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  Adapté si la demande est générique
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Exemple : “merci de fournir une information carbone”, “avez-vous
                  un bilan carbone ?”, “joindre un document CO₂e”, “réponse ESG
                  fournisseur”.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  Non adapté si une norme précise est imposée
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Si le cahier des charges impose une méthodologie complète, une
                  vérification externe, un périmètre Scope 1/2/3 détaillé ou un
                  reporting réglementaire, il faut suivre ce cadre.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  Utile comme première réponse documentaire
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Le document permet d’apporter une réponse propre, datée,
                  lisible et vérifiable, sans prétendre remplacer une démarche
                  carbone complète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing-faq"
        data-section="pricing-faq"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
              Questions fréquentes
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Comprendre le prix et le périmètre
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="final-cta-pricing"
        data-section="final-cta-pricing"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Prix simple · document vérifiable · sans abonnement
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Obtenir une attestation CO₂e indicative à 89€
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Pour répondre rapidement à une demande carbone avec un PDF
                  clair, standardisé, daté, archivable et vérifiable — sans
                  présenter le document comme un audit complet.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Générer mon attestation
                </Link>

                <Link
                  href="/fr/bilan-carbone-pme/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Lire le guide PME
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Estimation CO₂e indicative basée sur les dépenses selon une approche
            spend-based. Non auditée. Ne constitue pas un inventaire GES complet,
            un audit, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>
    </main>
  );
         }
