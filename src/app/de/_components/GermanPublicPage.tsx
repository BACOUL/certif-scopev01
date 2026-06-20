import Link from "next/link";
import type { GermanPageData } from "../_content/publicPages";

const SITE_URL = "https://www.certif-scope.com";

const navigation = [
  { href: "/de/", label: "Start" },
  { href: "/de/co2-bilanz-kmu/", label: "CO2-Bilanz KMU" },
  { href: "/de/co2-bescheinigung/", label: "CO2-Bescheinigung" },
  { href: "/de/produkt/", label: "Produkt" },
  { href: "/de/methodik/", label: "Methodik" },
  { href: "/de/preise/", label: "Preise" },
];

const footerGroups = [
  {
    title: "Produkt",
    links: [
      { href: "/de/produkt/", label: "Ueberblick" },
      { href: "/de/preise/", label: "Preise" },
      { href: "/de/grenzen-und-compliance/", label: "Grenzen & Einordnung" },
      { href: "/de/methodik/", label: "Methodik" },
    ],
  },
  {
    title: "Anwendungsfaelle",
    links: [
      { href: "/de/co2-bilanz-kmu/", label: "CO2-Bilanz fuer KMU" },
      { href: "/de/co2-angaben-ausschreibung/", label: "Ausschreibung" },
      { href: "/de/co2-nachweis-lieferanten/", label: "Lieferanten" },
      { href: "/de/bank-esg-unterlagen-kmu/", label: "Banken" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/de/datenschutz/", label: "Datenschutz" },
      { href: "/de/cookies/", label: "Cookies" },
      { href: "/de/agb/", label: "AGB" },
      { href: "/de/impressum/", label: "Impressum" },
    ],
  },
];

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function GermanHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/de/" className="flex items-center gap-3 text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
            CS
          </span>
          <span className="text-base font-semibold tracking-tight">Certif-Scope</span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/api/sample"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
          >
            Beispiel-PDF
          </Link>
          <Link
            href="/de/preise/"
            className="rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            89 EUR
          </Link>
        </div>
      </div>
    </header>
  );
}

export function GermanFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_2fr] lg:px-8">
        <div>
          <div className="text-lg font-semibold">Certif-Scope</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Indikative CO2e-Bescheinigungen fuer KMU, die eine kurze, nachvollziehbare
            Unterlage fuer Banken, Versicherungen, Ausschreibungen oder Geschaeftspartner
            benoetigen.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            Keine behördliche Zertifizierung. Kein Audit. Kein vollstaendiges GHG-Inventar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="text-sm font-semibold text-white">{group.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function GermanPublicPage({ page }: { page: GermanPageData }) {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: absoluteUrl("/de/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumb,
        item: absoluteUrl(page.path),
      },
    ],
  };

  const faqJsonLd =
    page.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <main className="bg-white text-slate-950">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{page.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/de/preise/"
                  className="rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Bescheinigung vorbereiten - 89 EUR
                </Link>
                <Link
                  href="/api/sample"
                  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500"
                >
                  Beispiel kostenlos laden
                </Link>
              </div>
            </div>

            <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-950">Einordnung auf einen Blick</h2>
              <dl className="mt-5 space-y-4">
                {page.quickFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-slate-200 pt-4 first:border-t-0 first:pt-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-700">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {page.highlights.map((highlight) => (
              <article key={highlight.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-950">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{highlight.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">{section.title}</h2>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Grenzen
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Bewusst eng gefasst
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Certif-Scope hilft bei einer kompakten, nachvollziehbaren Darstellung. Die
              Unterlage ersetzt keine gesetzliche Berichterstattung, keine externe Pruefung und
              keine vollstaendige Treibhausgasbilanz.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.limits.map((limit) => (
              <div key={limit} className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700">
                {limit}
              </div>
            ))}
          </div>
        </section>

        {page.faq.length > 0 ? (
          <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Haeufige Fragen</h2>
              <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
                {page.faq.map((item) => (
                  <details key={item.question} className="group p-6">
                    <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Naechster Schritt</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Pruefen Sie Umfang, Preis und Grenzen, bevor Sie eine indikative CO2e-Unterlage
                fuer einen Empfaenger vorbereiten.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/de/preise/"
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Preise ansehen
              </Link>
              <Link
                href="/de/methodik/"
                className="rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Methodik lesen
              </Link>
            </div>
          </div>

          {page.related.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">Weiterfuehrende Seiten</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {page.related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-emerald-700"
                  >
                    <span className="text-sm font-semibold text-slate-950">{link.label}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-700">{link.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
