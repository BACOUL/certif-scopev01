import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://www.certif-scope.com/fr/verify/demo/";

export const metadata: Metadata = {
  title:
    "Démonstration de vérification d’une attestation Certif-Scope",
  description:
    "Voir un exemple fictif de vérification d’attestation Certif-Scope : données affichées, statut, limites et éléments qu’un destinataire peut contrôler.",
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Démonstration de vérification d’une attestation Certif-Scope",
    description:
      "Page pédagogique montrant ce qu’un destinataire peut voir lorsqu’il vérifie une attestation Certif-Scope fictive.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const demoRows = [
  ["Entreprise", "Exemple PME"],
  ["Année", "2025"],
  ["Résultat", "42,8 tCO₂e"],
  ["Méthode", "Spend-based indicative"],
  ["Version facteurs", "Exemple v1"],
  ["Identifiant", "CS-DEMO-2025-0001"],
  ["Statut", "Document exemple, non utilisable comme attestation réelle"],
];

const controlItems = [
  "Cohérence de l’identifiant",
  "Méthode déclarée",
  "Date ou période affichée",
  "Limites du document",
  "Statut du document",
  "Intégrité ou vérification si disponible selon le parcours réel",
];

const faq = [
  {
    q: "Cette page vérifie-t-elle une vraie attestation ?",
    a: "Non. Cette page est une démonstration fictive et pédagogique. Elle ne valide aucun document réel et ne simule pas de vérification cryptographique.",
  },
  {
    q: "Que voit un destinataire lors d’une vérification réelle ?",
    a: "Il peut voir des informations de contrôle documentaire : identifiant, méthode, date, statut, limites et éléments utiles pour comprendre le document transmis.",
  },
  {
    q: "Le résultat affiché ici est-il utilisable ?",
    a: "Non. Les données Exemple PME, 2025 et 42,8 tCO₂e sont fictives. Elles servent uniquement à illustrer le parcours.",
  },
  {
    q: "Où vérifier une vraie attestation ?",
    a: "Une vraie attestation doit être vérifiée depuis la page de vérification réelle Certif-Scope ou via le QR code du document.",
  },
];

export default function VerifyDemoPageFR() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Démonstration de vérification d’une attestation Certif-Scope",
    url: pageUrl,
    description:
      "Page pédagogique montrant un exemple fictif de vérification d’attestation Certif-Scope.",
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
        name: "Vérifier une attestation",
        item: "https://www.certif-scope.com/fr/verify/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Démonstration",
        item: pageUrl,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section className="bg-[#F8FAFC] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/70">
                Démo · Vérification · Exemple fictif
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                Démonstration de vérification d’une attestation Certif-Scope
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                Cette page montre ce qu’un destinataire peut voir lorsqu’il
                consulte une page de vérification. Les données affichées sont
                fictives et ne correspondent à aucune attestation réelle.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                La démonstration est uniquement pédagogique. Elle ne modifie pas
                la vraie page de vérification, ne valide aucun PDF et ne simule
                aucune validation cryptographique.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/api/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Télécharger un exemple gratuit
                </Link>
                <Link
                  href="/fr/verify/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Vérifier une attestation réelle
                </Link>
                <Link
                  href="/fr/generate"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Générer mon attestation — 89 €
                </Link>
              </div>
            </header>

            <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <div className="rounded-lg bg-[#0B3A63] px-4 py-3 text-sm font-bold text-white">
                Exemple de vérification
              </div>
              <div className="mt-5 rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                <p className="text-sm font-bold text-[#0B3A63]">
                  Statut affiché
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#0B3A63]/75">
                  Document exemple, non utilisable comme attestation réelle.
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#0B3A63]/70">
                L’attestation Certif-Scope est indicative, non auditée, non
                réglementaire, non CSRD/ESRS, et ne remplace pas un bilan
                carbone complet, un inventaire GES ou une vérification externe.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Données fictives
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Exemple de fiche de vérification
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0B3A63]/75">
              Ces informations illustrent un affichage possible. Elles ne
              doivent pas être copiées comme preuve et ne remplacent pas une
              vérification réelle.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC]">
            <table className="min-w-[560px] w-full text-sm">
              <tbody className="divide-y divide-[#0B3A63]/10">
                {demoRows.map(([label, value]) => (
                  <tr key={label}>
                    <th className="w-1/3 p-4 text-left font-bold text-[#0B3A63]">
                      {label}
                    </th>
                    <td className="p-4 leading-relaxed text-[#0B3A63]/80">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Ce que le destinataire peut contrôler
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Une lecture documentaire, pas une promesse d’acceptation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Une attestation réelle dépend des informations fournies par
              l’utilisateur. Elle convient aux demandes documentaires simples,
              mais ne garantit pas l’acceptation par un client, une banque, un
              assureur, un acheteur ou une plateforme. Si une méthode
              obligatoire est imposée, l’entreprise doit suivre cette méthode.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {controlItems.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-white/90"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Questions fréquentes sur la démo
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-lg border border-[#0B3A63]/10 bg-white p-5"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0B3A63]/75">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-[#0B3A63]/10 bg-[#0B3A63] p-6 text-white md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Exemple gratuit · Vérification réelle · attestation 89 €
                </p>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Tester le parcours ou produire votre document
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/api/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Télécharger un exemple gratuit
                </Link>
                <Link
                  href="/fr/verify/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Vérifier une attestation réelle
                </Link>
                <Link
                  href="/fr/generate"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
                >
                  Générer mon attestation — 89 €
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
