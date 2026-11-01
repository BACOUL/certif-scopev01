import Link from "next/link";
import type { Metadata } from "next";
import { articles, type RegulatoryArticleData } from "@/lib/fr/marches-publics-2026-content";

const base = "https://www.certif-scope.com";

export function regulatoryMetadata(article: RegulatoryArticleData): Metadata {
  const url = base + article.path;
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: url, languages: { fr: url } },
    robots: { index: true, follow: true },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "Certif-Scope",
      locale: "fr_FR",
      type: "article",
      publishedTime: "2026-11-01T12:00:00+01:00",
      modifiedTime: "2026-11-01T12:00:00+01:00",
    },
  };
}

export default function RegulatoryArticle({ articleKey }: { articleKey: keyof typeof articles }) {
  const article = articles[articleKey];
  const url = base + article.path;
  const related = Object.entries(articles).filter(([key]) => key !== articleKey);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "fr-FR",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Certif-Scope", url: base },
    publisher: { "@type": "Organization", name: "Certif-Scope", url: base },
    citation: article.sources.map((s) => s.url),
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: base + "/fr/" },
      { "@type": "ListItem", position: 2, name: "Appels d'offres", item: base + "/fr/bilan-carbone-appel-offres/" },
      { "@type": "ListItem", position: 3, name: article.shortTitle, item: url },
    ],
  };
  return (
    <main id="main-content" className="bg-white text-[#0B3A63]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <header className="border-b border-[#0B3A63]/10 bg-[#F8FAFC] py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-[#64748B]">
              <Link href="/fr/" className="underline underline-offset-4">Accueil</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/fr/bilan-carbone-appel-offres/" className="underline underline-offset-4">Appels d’offres</Link>
              <span aria-hidden="true"> / </span>{article.shortTitle}
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#0C8996]">Guide pratique · Marchés publics · 2026</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-[#475569]">{article.intro}</p>
            <p className="mt-5 text-sm text-[#64748B]">Publié le 1er novembre 2026 · Sources officielles citées en bas d’article</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          <section aria-label="À retenir" className="rounded-3xl border border-[#1FB6C1]/30 bg-[#EAF7F8] p-6 md:p-8">
            <h2 className="text-xl font-extrabold">À retenir en une minute</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-[#34516A]">
              {article.takeaways.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <nav aria-label="Sommaire de l'article" className="mt-10 rounded-2xl border border-[#0B3A63]/10 p-6">
            <h2 className="font-extrabold">Dans cet article</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[#475569]">
              {article.sections.map((section, i) =>
                <li key={section.title}><a href={"#partie-" + (i + 1)} className="underline decoration-[#1FB6C1] underline-offset-4">{section.title}</a></li>
              )}
            </ol>
          </nav>

          {article.sections.map((section, i) => (
            <section key={section.title} id={"partie-" + (i + 1)} className="mt-14 scroll-mt-24">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="mt-5 text-base leading-8 text-[#475569]">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-relaxed text-[#475569]">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.note && (
                <p className="mt-6 rounded-2xl border-l-4 border-[#1FB6C1] bg-[#F8FAFC] px-5 py-4 text-sm leading-7 text-[#34516A]">{section.note}</p>
              )}
            </section>
          ))}

          <section className="mt-14 rounded-3xl border border-[#0B3A63]/15 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0C8996]">Certif-Scope · Périmètre du service</p>
            <h2 className="mt-3 text-2xl font-extrabold">Une estimation CO₂e indicative n'est pas une pièce réglementaire universelle</h2>
            <p className="mt-4 leading-8 text-[#475569]">Certif-Scope produit une estimation agrégée des émissions à partir de catégories de dépenses déclarées, sous forme de PDF daté et vérifiable sur le plan documentaire. Ce n'est ni un bilan GES réglementaire, ni une analyse du cycle de vie, ni un audit ou une certification indépendante. Son acceptation par un acheteur n'est jamais garantie.</p>
            <p className="mt-4 leading-8 text-[#475569]">Avant de commander, vérifiez le règlement de consultation et demandez une confirmation écrite au destinataire si le format autorisé n'est pas clair. Si les exigences imposent des données par prestation, une norme, un périmètre détaillé ou une vérification tierce, le document Certif-Scope seul ne convient pas.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/fr/product/methodology/" className="rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold hover:bg-[#F8FAFC]">Comprendre la méthode</Link>
              <Link href="/fr/pricing/" className="rounded-xl bg-[#0B3A63] px-5 py-3 text-sm font-semibold text-white hover:bg-[#082C4B]">Voir le document indicatif — 89 €</Link>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-extrabold">Sources officielles et vérifiables</h2>
            <p className="mt-3 leading-7 text-[#475569]">Les liens ci-dessous permettent de consulter les textes et les avis à leur source. Le présent article est une information générale, pas un avis juridique adapté à un marché donné.</p>
            <ul className="mt-5 space-y-3">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0B6681] underline underline-offset-4 hover:text-[#1FB6C1]">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border-t border-[#0B3A63]/15 pt-10">
            <h2 className="text-2xl font-extrabold">Poursuivre votre lecture</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map(([key, other]) => (
                <Link key={key} href={other.path} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 hover:border-[#1FB6C1]">
                  <h3 className="font-bold">{other.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#475569]">{other.description}</p>
                </Link>
              ))}
              <Link href="/fr/bilan-carbone-appel-offres/" className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 hover:border-[#1FB6C1]">
                <h3 className="font-bold">Quel document CO₂e joindre à un appel d’offres ?</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">Notre guide central pour distinguer estimation indicative, bilan complet et justificatifs.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
