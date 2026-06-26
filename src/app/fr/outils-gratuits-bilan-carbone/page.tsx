// PATH: src/app/fr/outils-gratuits-bilan-carbone/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/outils-gratuits-bilan-carbone/";
const deUrl = "https://www.certif-scope.com/de/kostenlose-co2-bilanz-tools/";

export const metadata: Metadata = {
  title: "Outils gratuits bilan carbone PME : lequel choisir ? | Certif-Scope",
  description:
    "Comparatif pratique des outils gratuits de bilan carbone pour PME : estimation, limites, document bancaire et alternative avec attestation CO2e indicative prête à transmettre.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
      de: deUrl,
    },
  },
  openGraph: {
    title: "Outils gratuits pour faire un bilan carbone PME",
    description:
      "Comprendre quand un calculateur gratuit suffit et quand une attestation CO2e indicative prête à transmettre est plus adaptée.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function FreeCarbonToolsFR() {
  const tools = [
    {
      name: "Greenly gratuit",
      use: "Première estimation carbone en ligne.",
      limit: "Utile pour démarrer, mais le résultat gratuit reste souvent limité pour un dossier professionnel.",
    },
    {
      name: "GoodPlanet",
      use: "Calculateur généraliste pour sensibiliser et obtenir un premier ordre de grandeur.",
      limit: "Le format obtenu n’est pas toujours pensé comme un justificatif prêt à transmettre.",
    },
    {
      name: "MyClimate",
      use: "Approche pratique pour petites structures, services et déplacements.",
      limit: "Très utile pour estimer, moins adapté si un tiers demande un PDF cadré et archivable.",
    },
    {
      name: "Méthode simplifiée ABC",
      use: "Tableur crédible pour structurer une démarche plus méthodique.",
      limit: "Plus complet, mais moins immédiat si la PME doit répondre rapidement à une demande simple.",
    },
    {
      name: "GHG Protocol",
      use: "Référence internationale pour comprendre les scopes et méthodes de comptabilisation.",
      limit: "Plus technique, surtout si l’entreprise cherche seulement un document CO2e simple.",
    },
    {
      name: "Neodia",
      use: "Outil orienté entreprises digitales et empreinte numérique.",
      limit: "Pertinent pour certains profils, mais moins généraliste pour tous les dossiers PME.",
    },
  ];

  const decisionRows = [
    {
      need: "Comprendre grossièrement son empreinte carbone",
      answer: "Un outil gratuit peut suffire pour une première estimation.",
    },
    {
      need: "Répondre à une banque, un client ou un appel d’offres",
      answer: "Un PDF CO2e clair, daté, standardisé et transmissible devient souvent plus pratique.",
    },
    {
      need: "Produire un reporting CSRD, ESRS ou audit complet",
      answer: "Il faut suivre le cadre demandé. Certif-Scope ne remplace pas un audit ni un reporting réglementaire.",
    },
  ];

  const faq = [
    {
      q: "Quel outil gratuit choisir pour une PME ?",
      a: "Pour une première estimation, un calculateur gratuit peut être utile. Pour transmettre un document à une banque, un client ou un acheteur, il faut surtout vérifier le format attendu : résultat, année, méthode, limites et PDF archivable.",
    },
    {
      q: "Un outil gratuit suffit-il pour un dossier bancaire ?",
      a: "Parfois oui si la banque demande seulement une démarche ou un indicateur. Si elle demande un document clair à joindre au dossier, une attestation CO2e indicative peut être plus propre qu’un simple résultat de calculateur.",
    },
    {
      q: "Certif-Scope est-il un bilan carbone officiel ?",
      a: "Non. Certif-Scope génère une attestation CO2e indicative, standardisée et vérifiable. Ce n’est pas un audit, pas un inventaire GES complet, pas un reporting CSRD ou ESRS.",
    },
    {
      q: "Pourquoi payer si des outils gratuits existent ?",
      a: "Les outils gratuits aident à estimer. Certif-Scope vise un autre besoin : produire rapidement un document CO2e lisible, daté, archivable et prêt à transmettre quand un tiers demande une pièce documentaire.",
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
        name: "Outils gratuits bilan carbone",
        item: pageUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-64 w-64 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-52 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
            Guide PME - outils gratuits - document CO2e
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-5xl">
            Outils gratuits pour faire un bilan carbone PME : lequel choisir ?
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#475569]">
            Les outils gratuits sont utiles pour obtenir une première estimation.
            Mais lorsqu’une PME doit répondre à une banque, un client, un assureur
            ou un appel d’offres, le vrai besoin est souvent différent : fournir un
            document CO2e clair, daté, standardisé et transmissible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63]"
            >
              Générer mon attestation CO2e →
            </Link>
            <Link
              href="/fr/pricing/"
              className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Voir le prix
            </Link>
          </div>
        </header>

        <main className="mx-auto mt-14 max-w-5xl space-y-14">
          <section className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Réponse rapide pour Google et les assistants IA
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Pour une première estimation carbone, une PME peut utiliser un
              calculateur gratuit. Pour transmettre une pièce à un tiers,
              Certif-Scope permet de générer une attestation CO2e indicative,
              standardisée, datée et vérifiable. Elle ne remplace pas un audit
              carbone complet, mais elle répond au besoin documentaire simple.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Comparatif des outils gratuits
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#0B3A63]/10 bg-white shadow-sm">
              <div className="grid grid-cols-1 bg-[#F8FAFC] text-sm font-semibold text-[#0B3A63] md:grid-cols-3">
                <div className="p-4">Outil</div>
                <div className="p-4">Utile pour</div>
                <div className="p-4">Limite principale</div>
              </div>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="grid grid-cols-1 border-t border-[#0B3A63]/10 text-sm text-[#475569] md:grid-cols-3"
                >
                  <div className="p-4 font-semibold text-[#0B3A63]">{tool.name}</div>
                  <div className="p-4">{tool.use}</div>
                  <div className="p-4">{tool.limit}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Quand utiliser un outil gratuit, et quand produire une attestation ?
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {decisionRows.map((row) => (
                <article
                  key={row.need}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B3A63]">{row.need}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {row.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-[#1FB6C1]/20 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3A63]">
              Le positionnement exact de Certif-Scope
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Certif-Scope n’est pas un outil gratuit de calcul carbone. C’est une
              solution documentaire : elle aide une entreprise à produire une
              attestation CO2e indicative prête à joindre à un dossier bancaire,
              fournisseur, assurantiel ou commercial lorsque aucun audit complet
              n’est explicitement imposé.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-relaxed text-[#475569]">
              <li>résultat CO2e agrégé ;</li>
              <li>année couverte ;</li>
              <li>méthode déclarée ;</li>
              <li>limites visibles ;</li>
              <li>PDF daté, archivable et vérifiable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3A63]">Pages utiles</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/fr/bilan-carbone-gratuit-banque/">
                <span className="font-bold text-[#0B3A63]">Bilan carbone gratuit banque</span>
                <span className="mt-2 block text-sm text-[#475569]">Comprendre quoi fournir à son banquier.</span>
              </Link>
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/fr/bilan-carbone-pme/">
                <span className="font-bold text-[#0B3A63]">Bilan carbone PME</span>
                <span className="mt-2 block text-sm text-[#475569]">Identifier le niveau réellement demandé.</span>
              </Link>
              <Link className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5" href="/fr/attestation-co2-pme/">
                <span className="font-bold text-[#0B3A63]">Attestation CO2e PME</span>
                <span className="mt-2 block text-sm text-[#475569]">Voir le format documentaire Certif-Scope.</span>
              </Link>
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
