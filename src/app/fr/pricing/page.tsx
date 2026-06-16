// PATH: src/app/fr/pricing/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prix attestation CO₂e PME : 89€ sans abonnement | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative à 89€, sans abonnement. PDF vérifiable pour demandes fournisseurs, banques, assurances et appels d’offres. Non audit, non CSRD/ESRS.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/pricing/",
    languages: {
      fr: "https://www.certif-scope.com/fr/pricing/",
    },
  },
  openGraph: {
    type: "website",
    title: "Prix attestation CO₂e PME : 89€ sans abonnement | Certif-Scope",
    description:
      "Attestation CO₂e indicative à 89€, sans abonnement. PDF standardisé, daté, archivable et vérifiable pour demandes fournisseurs, banques, assurances et appels d’offres.",
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

const fitItems = [
  {
    title: "Demande fournisseur ou client",
    text: "Une entreprise vous demande une information carbone simple, une preuve CO₂e ou un document RSE à joindre à un dossier.",
  },
  {
    title: "Banque, assurance ou screening ESG",
    text: "Vous devez transmettre une réponse carbone indicative sans lancer une mission de conseil longue ou coûteuse.",
  },
  {
    title: "Appel d’offres sans exigence réglementaire complète",
    text: "Le cahier des charges demande un élément carbone, mais n’impose pas une vérification externe ou un inventaire GES complet.",
  },
];

const limitItems = [
  "Ne remplace pas un bilan carbone complet.",
  "Ne constitue pas un reporting CSRD/ESRS.",
  "Ne couvre pas un inventaire Scope 1, 2 et 3 détaillé.",
  "Ne vaut pas vérification externe ou certification réglementaire.",
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
    question: "Pourquoi l’attestation coûte 89€ ?",
    answer:
      "Le produit est standardisé : il génère un document CO₂e indicatif, daté, archivable et vérifiable, sans mission de conseil, sans collecte terrain et sans audit complet.",
  },
  {
    question: "Est-ce un bilan carbone réglementaire ou certifié ?",
    answer:
      "Non. Certif-Scope produit une attestation CO₂e indicative basée sur une méthode spend-based. Le document ne remplace pas un audit carbone complet, un inventaire GES détaillé ou un reporting CSRD/ESRS.",
  },
  {
    question: "Quand utiliser cette attestation ?",
    answer:
      "Elle est adaptée lorsqu’un client, un acheteur, une banque, un assureur ou un appel d’offres demande une indication CO₂e ou une preuve carbone simple à transmettre rapidement.",
  },
  {
    question: "Est-ce acceptable dans un appel d’offres ?",
    answer:
      "Cela dépend du cahier des charges. Si la demande porte sur un document de screening ou une indication carbone, l’attestation peut être utile. Si une norme, une vérification externe ou un périmètre précis est imposé, il faut suivre cette exigence.",
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
    name: "Prix attestation CO₂e PME : 89€ sans abonnement",
    url: "https://www.certif-scope.com/fr/pricing/",
    description:
      "Prix clair pour obtenir une attestation CO₂e indicative à 89€, sans abonnement, standardisée et vérifiable.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
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
      url: "https://www.certif-scope.com/fr/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOffer) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
              Prix attestation CO₂e PME
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0B3A63] md:text-5xl">
              Une attestation CO₂e indicative à 89€, sans abonnement
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope permet d’obtenir un PDF carbone indicatif, standardisé
              et vérifiable pour répondre rapidement à une demande fournisseur,
              bancaire, assurantielle ou d’appel d’offres — sans engager un
              audit carbone complet.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation à 89€
              </Link>

              <Link
                href="/fr/bilan-carbone-pme/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Comprendre l’usage PME
              </Link>
            </div>
          </header>

          <section className="mt-16 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_70px_rgba(11,58,99,0.13)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(31,182,193,0.65),transparent)]" />
              <div className="absolute right-[-12%] top-[-18%] h-56 w-56 rounded-full bg-[#1FB6C1]/8 blur-3xl" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div>
                  <p className="inline-flex rounded-full border border-[#1FB6C1]/20 bg-[#1FB6C1]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]">
                    Offre principale
                  </p>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                    Attestation CO₂e indicative
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                    Un document PDF clair, daté et vérifiable pour les situations
                    où l’on vous demande une réponse carbone rapide, sans mission
                    de conseil ni audit terrain.
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

            <aside className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.16)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Comparaison claire
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                89€ pour un document de screening, pas pour un audit complet
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Certif-Scope — 89€
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Attestation indicative : résultat agrégé, méthode déclarée,
                    limites visibles et vérification documentaire.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/8 p-5">
                  <p className="text-sm font-semibold text-white">
                    Bilan carbone complet — devis spécifique
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/82">
                    Collecte détaillée, périmètres complets, données d’activité,
                    accompagnement, hypothèses et parfois vérification externe.
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
        </div>
      </section>

      <section
        id="pricing-fit"
        data-section="pricing-fit"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Quand utiliser Certif-Scope
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Quand une attestation à 89€ suffit-elle ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Certif-Scope est adapté lorsqu’une entreprise doit transmettre un
                document carbone simple, indicatif et vérifiable, sans exigence
                réglementaire complète.
              </p>

              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation
              </Link>
            </div>

            <div className="grid gap-5">
              {fitItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing-limits"
        data-section="pricing-limits"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Périmètre transparent
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                  Ce que le prix ne promet pas
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#475569]">
                  Cette clarté protège l’utilisateur et renforce la crédibilité du
                  document auprès d’un acheteur, d’une banque ou d’un donneur
                  d’ordre.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {limitItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]"
                  >
                    <span className="font-semibold text-[#0B3A63]">Limite : </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="packs"
        data-section="packs"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-24"
      >
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
        </div>
      </section>

      <section
        id="pricing-faq"
        data-section="pricing-faq"
        className="relative overflow-hidden bg-white py-20 md:py-24"
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
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
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
