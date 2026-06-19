import Link from "next/link";

type FAQItem = {
  q: string;
  a: string;
};

type TextItem = {
  title: string;
  text: string;
};

type ComparisonRow = {
  criterion: string;
  full: string;
  certifScope: string;
};

type RelatedLink = {
  href: string;
  title: string;
  text: string;
};

type BusinessUseCasePageProps = {
  pageUrl: string;
  breadcrumbName: string;
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  context: string;
  concerns: TextItem[];
  provides: string[];
  notAdapted: string[];
  formulation: string;
  faq: FAQItem[];
  comparisonRows?: ComparisonRow[];
  relatedLinks?: RelatedLink[];
};

const requiredReminder =
  "L’attestation Certif-Scope est indicative, non auditée, non réglementaire, non CSRD/ESRS, et ne remplace pas un bilan carbone complet, un inventaire GES ou une vérification externe.";

const standardLimits = [
  "Elle dépend des informations fournies par l’utilisateur.",
  "Elle convient aux demandes documentaires simples.",
  "Elle ne garantit pas l’acceptation par un client, une banque, un assureur, un acheteur ou une plateforme.",
  "Si une méthode obligatoire est imposée, l’entreprise doit suivre cette méthode.",
];

function PrimaryCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="/fr/generate"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#1FB6C1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1FB6C1]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        Générer mon attestation — 89 €
      </Link>
      <Link
        href="/api/sample"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63] bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
      >
        Télécharger un exemple gratuit
      </Link>
    </div>
  );
}

export default function BusinessUseCasePage({
  pageUrl,
  breadcrumbName,
  serviceName,
  serviceDescription,
  eyebrow,
  h1,
  intro,
  context,
  concerns,
  provides,
  notAdapted,
  formulation,
  faq,
  comparisonRows,
  relatedLinks,
}: BusinessUseCasePageProps) {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    url: pageUrl,
    description: intro,
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
        name: breadcrumbName,
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description: serviceDescription,
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/generate",
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

      <section className="bg-[#F8FAFC] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/70">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                {h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0B3A63]/80">
                {intro}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B3A63]/70">
                {context}
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
            </header>

            <aside className="rounded-lg border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-[#0B3A63]">
                Document Certif-Scope
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Prix fixe 89 €", "PDF vérifiable", "Sans abonnement"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-[#0B3A63]"
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                      {badge}
                    </div>
                  )
                )}
              </div>
              <div className="mt-5 rounded-lg border border-[#0B3A63]/10 bg-white p-4">
                <p className="text-sm leading-relaxed text-[#0B3A63]/80">
                  {requiredReminder}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Quand cette page vous concerne
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Les situations concrètes où une réponse carbone simple est utile
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {concerns.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0B3A63]/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {comparisonRows && comparisonRows.length > 0 && (
        <section className="bg-[#F8FAFC] py-14 md:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Comparatif
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
                Bilan carbone complet ou attestation CO₂e indicative ?
              </h2>
            </div>
            <div className="mt-8 overflow-x-auto rounded-lg border border-[#0B3A63]/10 bg-white">
              <table className="min-w-[820px] w-full text-sm">
                <thead>
                  <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                    <th className="p-4 text-left font-bold text-[#0B3A63]">
                      Critère
                    </th>
                    <th className="p-4 text-left font-bold text-[#0B3A63]">
                      Bilan carbone complet
                    </th>
                    <th className="p-4 text-left font-bold text-[#0B3A63]">
                      Attestation CO₂e indicative Certif-Scope
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0B3A63]/10">
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion}>
                      <td className="p-4 align-top font-bold text-[#0B3A63]">
                        {row.criterion}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-[#0B3A63]/75">
                        {row.full}
                      </td>
                      <td className="p-4 align-top leading-relaxed text-[#0B3A63]/75">
                        {row.certifScope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Ce que Certif-Scope peut fournir
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Un PDF standardisé pour une demande documentaire simple
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Le document sert à transmettre une information carbone cadrée,
              sans se présenter comme un audit ni comme un reporting obligatoire.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {provides.map((item) => (
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

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              Quand ce n’est pas adapté
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Les cas où il faut choisir une démarche plus complète
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0B3A63]/75">
              Certif-Scope est utile lorsque la demande reste documentaire. Dès
              qu’un cadre obligatoire est imposé, ce cadre prime.
            </p>
          </div>
          <div className="grid gap-3">
            {notAdapted.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#0B3A63]/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Exemple de formulation
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Message court à joindre au document
              </h2>
              <blockquote className="mt-5 rounded-lg border-l-4 border-[#1FB6C1] bg-[#F8FAFC] p-5 text-base leading-relaxed text-[#0B3A63]/80">
                “{formulation}”
              </blockquote>
            </article>

            <article className="rounded-lg border border-[#0B3A63]/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
                Rappel obligatoire
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63]">
                Limites à connaître avant transmission
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#0B3A63]/80">
                {requiredReminder}
              </p>
              <ul className="mt-4 space-y-2">
                {standardLimits.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-[#0B3A63]/75"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1FB6C1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B3A63]">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-lg border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
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

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="bg-[#F8FAFC] py-14 md:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0B3A63]">
              Pages utiles à lire ensuite
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-[#0B3A63]/10 bg-white p-5 transition hover:border-[#1FB6C1]"
                >
                  <h3 className="font-extrabold text-[#0B3A63]">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B3A63]/75">
                    {link.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0B3A63] py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              PDF vérifiable · prix fixe · sans abonnement
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Préparer une réponse carbone simple
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              Générez une attestation CO₂e indicative à transmettre dans un
              dossier documentaire, avec méthode déclarée et limites visibles.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/fr/generate"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3A63] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Générer mon attestation — 89 €
            </Link>
            <Link
              href="/api/sample"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Télécharger un exemple gratuit
            </Link>
            <Link
              href="/fr/verify/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B3A63]"
            >
              Vérifier une attestation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
