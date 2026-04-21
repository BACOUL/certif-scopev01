// PATH: src/app/fr/bilan-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE SATELLITE FR
   Objectif : capter "bilan carbone appel d’offres"
   Angle : PME / screening / document à joindre / quoi fournir
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone appel d’offres : que fournir quand on est une PME ? | Certif-Scope",
  description:
    "Bilan carbone en appel d’offres : comprendre ce qui est réellement attendu, distinguer screening et exigence formelle, et savoir quoi fournir dans le dossier quand on est une PME.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone appel d’offres : que fournir quand on est une PME ?",
    description:
      "Guide PME : comment répondre à une demande de bilan carbone en appel d’offres, quand un document indicatif suffit et quand un inventaire complet devient nécessaire.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarboneAppelOffresFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/";

  const faq = [
    {
      q: "Le bilan carbone est-il obligatoire dans un appel d’offres ?",
      a: "Non, pas automatiquement. Dans la majorité des cas, il s’agit d’un critère environnemental de comparaison ou de screening. Une exigence formelle, comme un audit, un référentiel imposé ou une vérification tierce, doit être explicitement mentionnée dans le cahier des charges.",
    },
    {
      q: "Une estimation indicative est-elle acceptable dans un appel d’offres ?",
      a: "Oui, lorsque la méthode n’est pas imposée et que la demande vise surtout un indicateur CO₂e comparable entre candidats. Le document doit alors annoncer clairement la méthode utilisée et ses limites.",
    },
    {
      q: "Quand faut-il un bilan carbone complet pour un appel d’offres ?",
      a: "Quand le dossier impose explicitement un standard, un périmètre détaillé, des justificatifs techniques, une ventilation précise ou une vérification tierce. Dans ce cas, un simple document de screening ne suffit plus.",
    },
    {
      q: "Que faut-il mettre dans le dossier pour éviter les allers-retours ?",
      a: "Un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, un PDF identifiable, et un mécanisme de vérification ou une référence claire.",
    },
    {
      q: "Un appel d’offres demande toujours un document très technique ?",
      a: "Non. Beaucoup de dossiers PME attendent surtout un document lisible, archivable et comparable, pas nécessairement un inventaire exhaustif ou un audit complet.",
    },
    {
      q: "Comment savoir si l’acheteur attend un screening ou une exigence formelle ?",
      a: "Il faut lire le cahier des charges : si aucun standard précis, périmètre détaillé, preuve technique ou contrôle tiers n’est imposé, la demande relève souvent du screening documentaire.",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil (FR)",
        item: "https://www.certif-scope.com/fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilan carbone PME",
        item: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bilan carbone appel d’offres",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone appel d’offres",
    url: pageUrl,
    description:
      "Guide PME : comment répondre à une demande de bilan carbone en appel d’offres, quand un document indicatif suffit et quoi joindre dans le dossier.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone dans un appel d’offres",
    description:
      "Méthode simple pour distinguer un besoin de screening d’une exigence formelle, puis fournir le bon document dans le dossier.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire le niveau réellement exigé",
        text: "Vérifiez si le cahier des charges impose un standard, un périmètre détaillé, des justificatifs ou une vérification tierce.",
      },
      {
        "@type": "HowToStep",
        name: "Distinguer screening et exigence formelle",
        text: "Si la demande reste générique et vise un critère de comparaison, il s’agit souvent d’un besoin de screening documentaire.",
      },
      {
        "@type": "HowToStep",
        name: "Joindre un document clair et exploitable",
        text: "Fournissez un document CO₂e avec résultat agrégé, année, méthode, limites explicites et format PDF stable.",
      },
    ],
  };

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        href={href}
        className="text-[#0B3A63] transition-colors hover:text-[#1FB6C1] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="bilan-carbone-appel-offres"
      data-section="bilan-carbone-appel-offres"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div id="top" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-8 md:pt-16">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Appels d’offres • PME • Screening • Document CO₂e
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Bilan carbone en appel d’offres :
            <br />
            <span className="relative inline-block">
              que fournir
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            quand on est une PME ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Screening, exigence formelle, contenu du dossier et niveau de réponse
            réellement attendu.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                La mention “bilan carbone” dans un appel d’offres ne signifie pas
                automatiquement qu’un audit complet est exigé.
              </strong>{" "}
              Dans beaucoup de dossiers, l’acheteur cherche surtout un{" "}
              <strong className="text-[#0B3A63]">
                indicateur CO₂e comparable
              </strong>{" "}
              entre candidats pour un critère environnemental ou un screening
              interne.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              La vraie question n’est pas seulement{" "}
              <strong className="text-[#0B3A63]">
                “faut-il répondre ?”
              </strong>
              , mais surtout{" "}
              <strong className="text-[#0B3A63]">
                “quel document faut-il joindre pour répondre correctement sans
                surdimensionner la démarche ?”
              </strong>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Cas le plus fréquent
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Critère environnemental, comparaison entre candidats, méthode non
                imposée, besoin d’un document clair et daté.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Point clé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Un appel d’offres peut demander un document carbone sans exiger
                un inventaire complet ni une vérification tierce.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Erreur fréquente
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Lancer une mission lourde alors qu’un document de screening bien
                cadré aurait suffi au dossier.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
              Ce qu’il faut clarifier avant de répondre
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                le dossier attend-il un indicateur CO₂e ou un livrable plus technique ?
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                la demande relève-t-elle d’un screening ou d’une exigence formelle ?
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                la méthode est-elle libre ou explicitement imposée ?
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                le budget doit-il couvrir un document simple ou une démarche complète ?
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              Pour aller plus vite sur ces trois sujets, les pages{" "}
              <Link
                href="/fr/bilan-carbone-pme/obligation/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME obligatoire
              </Link>
              ,{" "}
              <Link
                href="/fr/bilan-carbone-pme/cout/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                combien coûte un bilan carbone PME
              </Link>{" "}
              et{" "}
              <Link
                href="/fr/bilan-carbone-pme/exemple/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                exemple de bilan carbone PME
              </Link>{" "}
              détaillent les cas les plus fréquents pour une PME.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              Générer mon attestation →
            </Link>

            <Link
              href="/fr/bilan-carbone-pme/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Guide complet bilan carbone PME
            </Link>

            <Link
              href="/fr/pricing/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Voir le prix
            </Link>
          </div>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>
                <nav
                  aria-label="Sommaire bilan carbone appel d’offres (mobile)"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem
                      href="#screening-vs-formal"
                      label="Critère environnemental vs exigence formelle"
                    />
                    <TocItem
                      href="#what-to-include"
                      label="Ce qu’il faut mettre dans le dossier"
                    />
                    <TocItem
                      href="#when-complete"
                      label="Quand un inventaire complet devient nécessaire"
                    />
                    <TocItem
                      href="#case-example"
                      label="Exemple concret"
                    />
                    <TocItem
                      href="#mistakes"
                      label="Erreurs fréquentes"
                    />
                    <TocItem
                      href="#faq"
                      label="Questions fréquentes"
                    />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="screening-vs-formal" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Critère environnemental vs exigence formelle
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le terme “bilan carbone” est souvent employé de manière
                générique dans les appels d’offres. Dans beaucoup de dossiers,
                il s’agit d’un <strong className="text-[#0B3A63]">critère de comparaison</strong>,
                pas d’une obligation imposant automatiquement un référentiel
                précis ou un audit complet.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                C’est exactement pour cela qu’une PME doit d’abord vérifier si
                la demande est réellement{" "}
                <Link
                  href="/fr/bilan-carbone-pme/obligation/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  obligatoire
                </Link>{" "}
                ou si elle relève surtout d’un besoin de screening
                documentaire.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Cas le plus fréquent
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>critère environnemental pondéré ;</li>
                    <li>comparaison entre candidats ;</li>
                    <li>méthode non imposée ;</li>
                    <li>document attendu surtout pour le dossier.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Cas plus exigeant
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>référentiel explicitement imposé ;</li>
                    <li>périmètre détaillé demandé ;</li>
                    <li>pièces techniques ou annexes requises ;</li>
                    <li>vérification tierce ou contrôle externe demandé.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="what-to-include" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Ce qu’il faut mettre dans le dossier
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans la majorité des appels d’offres, la priorité n’est pas de
                produire le document le plus long possible, mais le document le
                plus lisible et le plus exploitable. Si tu veux voir à quoi
                ressemble ce format, la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/exemple/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  exemple de bilan carbone PME
                </Link>{" "}
                montre la structure attendue dans un dossier.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Éléments utiles dans un dossier appel d’offres
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>résultat CO₂e agrégé ;</li>
                  <li>année couverte et date d’émission ;</li>
                  <li>méthode déclarée ;</li>
                  <li>périmètre et limites explicites ;</li>
                  <li>PDF identifiable, stable et partageable ;</li>
                  <li>mécanisme de vérification ou référence claire.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">Objectif :</strong>{" "}
                    fournir un document que l’acheteur peut comprendre, archiver
                    et comparer rapidement, sans zone d’ambiguïté sur sa portée.
                  </p>
                </div>
              </div>
            </section>

            <section id="when-complete" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Quand un inventaire complet devient nécessaire
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Si le cahier des charges impose explicitement un standard, un
                périmètre détaillé ou une vérification externe, une estimation
                indicative ne suffit plus. Il faut alors aligner le livrable sur
                le cadre exigé.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                C’est aussi ce qui explique pourquoi le{" "}
                <Link
                  href="/fr/bilan-carbone-pme/cout/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  coût d’un bilan carbone PME
                </Link>{" "}
                peut varier fortement : un document de screening et un
                inventaire complet ne correspondent pas du tout au même niveau
                d’effort.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Signaux qu’il faut escalader
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>référentiel clairement imposé ;</li>
                  <li>périmètre détaillé ou ventilation attendue ;</li>
                  <li>annexes techniques ou preuves requises ;</li>
                  <li>contrôle externe ou vérification tierce annoncée ;</li>
                  <li>livrable explicitement plus large qu’un simple screening.</li>
                </ul>
              </div>
            </section>

            <section id="case-example" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Exemple concret
              </h2>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <p className="text-base leading-relaxed text-[#475569] md:text-lg">
                  Une PME de services répond à un appel d’offres public ou privé.
                  Le dossier mentionne un critère “bilan carbone” ou “émissions
                  CO₂”.
                </p>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>la PME pense d’abord qu’un audit complet est nécessaire ;</li>
                  <li>en lisant le dossier, elle constate qu’aucun référentiel détaillé n’est imposé ;</li>
                  <li>l’acheteur attend surtout un document comparable entre candidats ;</li>
                  <li>un document CO₂e indicatif, daté, avec méthode et limites suffit à répondre proprement ;</li>
                  <li>la PME évite ainsi une démarche plus lourde que nécessaire.</li>
                </ul>
              </div>
            </section>

            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Erreurs fréquentes
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°1
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Supposer qu’un appel d’offres exige automatiquement un audit
                    complet sans lire le niveau réel de précision demandé.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°2
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Fournir un document flou, sans méthode, sans limites et sans
                    cadrage sur la portée réelle du résultat.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°3
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Répondre avec un format trop léger quand le dossier impose
                    clairement un standard ou des justificatifs techniques.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°4
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Dépenser trop vite pour une démarche lourde sans vérifier si
                    le besoin réel était simplement documentaire.
                  </p>
                </div>
              </div>
            </section>

            <section className="scroll-mt-24">
              <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse screening
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Répondre rapidement à une demande “bilan carbone” en appel d’offres
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Lorsque la demande porte sur un indicateur CO₂e pour comparer
                  les candidats, un document clair, daté, avec méthode explicite
                  et limites visibles permet de répondre sans surdimensionner la
                  démarche.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/generate/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Générer mon attestation
                  </Link>

                  <Link
                    href="/fr/pricing/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Voir le prix
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                Questions fréquentes
              </h2>

              <div className="mt-6 space-y-5">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {item.q}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>
                <nav
                  aria-label="Sommaire bilan carbone appel d’offres"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem
                      href="#screening-vs-formal"
                      label="Critère environnemental vs exigence formelle"
                    />
                    <TocItem
                      href="#what-to-include"
                      label="Ce qu’il faut mettre dans le dossier"
                    />
                    <TocItem
                      href="#when-complete"
                      label="Quand un inventaire complet devient nécessaire"
                    />
                    <TocItem
                      href="#case-example"
                      label="Exemple concret"
                    />
                    <TocItem
                      href="#mistakes"
                      label="Erreurs fréquentes"
                    />
                    <TocItem
                      href="#faq"
                      label="Questions fréquentes"
                    />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel utile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page traite le bilan carbone en appel d’offres sous un
                  angle pratique : distinguer screening et exigence formelle,
                  puis joindre le bon document au bon niveau.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/bilan-carbone-pme/obligation/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Obligation
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/cout/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Coût
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Cluster FR
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#475569]">
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/"
                    >
                      Bilan carbone PME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/obligation/"
                    >
                      Bilan carbone PME obligatoire
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/cout/"
                    >
                      Combien coûte un bilan carbone PME ?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/exemple/"
                    >
                      Exemple de bilan carbone PME
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Accès rapide
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fr/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Accueil FR
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Page pilier
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Haut de page
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
                         }
