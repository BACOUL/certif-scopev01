// PATH: src/app/fr/bilan-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE SATELLITE FR
   Objectif : dominer "bilan carbone appel d’offres"
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone appel d’offres : que fournir quand on est une PME ? — Certif-Scope",
  description:
    "Bilan carbone en appel d’offres : comprendre ce qui est réellement attendu (screening vs exigence formelle), quoi fournir dans le dossier et comment répondre avec un document CO₂e indicatif adapté.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title: "Bilan carbone appel d’offres : que fournir sans audit complet ?",
    description:
      "Guide PME : comment répondre à une demande de bilan carbone dans un appel d’offres, quand un document indicatif suffit et quand un inventaire complet est requis.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function BilanCarboneAppelOffresFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/";

  const faq = [
    {
      q: "Le bilan carbone est-il obligatoire dans un appel d’offres ?",
      a: "Non, pas automatiquement. Dans la majorité des cas, il s’agit d’un critère environnemental de comparaison (screening). Une exigence formelle (audit, norme imposée) doit être explicitement mentionnée dans le cahier des charges.",
    },
    {
      q: "Une estimation indicative est-elle acceptable ?",
      a: "Oui, lorsque la méthode n’est pas imposée et que la demande vise un indicateur CO₂e comparable entre candidats. Le document doit expliciter la méthode et ses limites.",
    },
    {
      q: "Quand faut-il un bilan carbone complet ?",
      a: "Lorsque le cahier des charges impose explicitement un référentiel, un périmètre détaillé, des justificatifs techniques ou une vérification tierce.",
    },
    {
      q: "Que mettre dans le dossier pour éviter les allers-retours ?",
      a: "Un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, un PDF identifiable et un mécanisme de vérification.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bilan carbone appel d’offres",
            url: pageUrl,
            description:
              "Guide PME : comment répondre à une demande de bilan carbone en appel d’offres.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Bilan carbone PME",
                  item: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Bilan carbone appel d’offres",
                  item: pageUrl,
                },
              ],
            },
          }),
        }}
      />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Guide PME — Appels d’offres & CO₂e
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight tracking-tight">
          Bilan carbone en appel d’offres : que fournir quand on est une PME ?
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          La mention “bilan carbone” dans un appel d’offres ne signifie pas
          automatiquement qu’un audit complet est exigé. Dans la majorité des
          cas, l’acheteur cherche un <strong>indicateur CO₂e comparable</strong>{" "}
          entre candidats pour un critère environnemental ou un screening
          interne.
        </p>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 max-w-4xl">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Ce qu’il faut clarifier avant de répondre
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              le dossier attend-il seulement un indicateur CO₂e ou un livrable
              plus technique ;
            </li>
            <li>
              la demande relève-t-elle d’un simple screening ou d’une exigence
              formelle ;
            </li>
            <li>
              le budget doit-il couvrir un document simple ou un inventaire
              complet plus coûteux.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Pour aller plus vite sur ces trois points, les pages{" "}
            <Link
              href="/fr/bilan-carbone-pme/obligation/"
              className="underline text-[#0B3A63]"
            >
              obligation
            </Link>
            ,{" "}
            <Link
              href="/fr/bilan-carbone-pme/cout/"
              className="underline text-[#0B3A63]"
            >
              coût
            </Link>{" "}
            et{" "}
            <Link
              href="/fr/bilan-carbone-pme/exemple/"
              className="underline text-[#0B3A63]"
            >
              exemple
            </Link>{" "}
            détaillent les cas les plus fréquents pour une PME.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Générer mon attestation →
          </Link>

          <Link
            href="/fr/bilan-carbone-pme/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Guide complet bilan carbone PME
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="space-y-14 max-w-4xl">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Critère environnemental vs exigence formelle
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Le terme “bilan carbone” est souvent employé de manière générique.
            Dans beaucoup de dossiers, il s’agit d’un critère de comparaison, non
            d’une obligation réglementaire imposant un référentiel précis. C’est
            exactement pour cela qu’une PME doit d’abord vérifier si la demande
            est réellement <Link
              href="/fr/bilan-carbone-pme/obligation/"
              className="underline text-[#0B3A63]"
            >
              obligatoire
            </Link>{" "}
            ou si elle relève surtout d’un besoin de screening.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                Cas le plus fréquent
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>critère environnemental pondéré</li>
                <li>comparaison entre candidats</li>
                <li>méthode non imposée</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="font-semibold text-[#0B3A63] mb-2">
                Cas plus exigeant
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>référentiel explicitement imposé</li>
                <li>périmètre détaillé demandé</li>
                <li>vérification tierce requise</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Ce qu’il faut mettre dans le dossier
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dans la majorité des appels d’offres, la priorité n’est pas de
            produire le document le plus long possible, mais le document le plus
            lisible et le plus exploitable. Si tu veux voir à quoi ressemble ce
            format, la page{" "}
            <Link
              href="/fr/bilan-carbone-pme/exemple/"
              className="underline text-[#0B3A63]"
            >
              exemple de bilan carbone PME
            </Link>{" "}
            montre la structure attendue dans un dossier.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>résultat CO₂e agrégé</li>
              <li>année couverte + date d’émission</li>
              <li>méthode déclarée</li>
              <li>périmètre et limites explicites</li>
              <li>PDF identifiable et partageable</li>
              <li>mécanisme de vérification</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Quand un inventaire complet devient nécessaire
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Si le cahier des charges impose explicitement un standard, un
            périmètre détaillé ou une vérification externe, une estimation
            indicative ne suffit pas. Il faut alors aligner le livrable sur le
            cadre exigé.
          </p>

          <p className="text-gray-700 leading-relaxed">
            C’est aussi ce qui explique pourquoi le{" "}
            <Link
              href="/fr/bilan-carbone-pme/cout/"
              className="underline text-[#0B3A63]"
            >
              coût d’un bilan carbone PME
            </Link>{" "}
            peut varier fortement : un document de screening et un inventaire
            complet ne correspondent pas du tout au même niveau d’effort.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {faq.map((item, idx) => (
              <div
                key={`${idx}-${item.q}`}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Guides utiles pour répondre plus vite
          </h2>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/fr/bilan-carbone-pme/"
                >
                  Bilan carbone PME : page pilier →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/fr/bilan-carbone-pme/obligation/"
                >
                  Bilan carbone PME : est-ce obligatoire ? →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/fr/bilan-carbone-pme/cout/"
                >
                  Combien coûte un bilan carbone PME ? →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/fr/bilan-carbone-pme/exemple/"
                >
                  Exemple de bilan carbone PME (format dossier) →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-4">
          <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">
              Répondre rapidement à une demande “bilan carbone” en appel d’offres
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl">
              Lorsque la demande porte sur un indicateur CO₂e pour comparer les
              candidats, un document clair, daté, avec méthode explicite et
              limites visibles permet de répondre sans surdimensionner la
              démarche.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/generate/"
                className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
              >
                Générer mon attestation
              </Link>

              <Link
                href="/fr/pricing/"
                className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Voir le prix
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
       }
