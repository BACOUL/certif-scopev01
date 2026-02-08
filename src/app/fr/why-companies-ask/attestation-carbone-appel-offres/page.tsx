// PATH: src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — ATTESTATION CARBONE APPEL D’OFFRES
====================================================== */

export const metadata: Metadata = {
  title:
    "Attestation carbone appel d’offres — Ce qui est réellement demandé — Certif-Scope (FR)",
  description:
    "Comprendre pourquoi un indicateur CO₂e est demandé dans un appel d’offres, ce qui est attendu en pratique et dans quels cas une attestation indicative est acceptable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    },
  },
  openGraph: {
    title:
      "Attestation carbone appel d’offres — Ce qui est réellement demandé",
    description:
      "Pourquoi un indicateur CO₂e apparaît dans les appels d’offres et comment répondre avec un document indicatif adapté au screening.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CarbonAttestationTenderFR() {
  return (
    <section
      id="carbon-attestation-tender"
      data-section="carbon-attestation-tender"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Attestation carbone appel d’offres",
            url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
            description:
              "Guide pratique : pourquoi un indicateur CO₂e est demandé dans un appel d’offres et comment répondre avec une attestation indicative adaptée au screening.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Pourquoi les entreprises le demandent",
                  item: "https://www.certif-scope.com/fr/why-companies-ask",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Attestation carbone appel d’offres",
                  item: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Comprendre les demandes CO₂e — Cas n°2
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Attestation carbone appel d’offres : ce qui est réellement demandé
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          La présence d’un critère carbone dans un appel d’offres ne signifie pas
          nécessairement qu’un bilan carbone complet est exigé. Dans la majorité
          des cas, l’acheteur cherche un indicateur CO₂e comparable entre
          candidats, utilisable pour la notation ou la documentation interne.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Retour au guide (vue d’ensemble)
          </Link>

          <Link
            href="/fr/product"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le produit
          </Link>

          <Link
            href="/fr/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier une attestation
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1 */}
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Pourquoi le carbone apparaît dans les appels d’offres
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les critères environnementaux sont progressivement intégrés dans
              les appels d’offres publics et privés. Cette évolution provient
              principalement des politiques d’achats responsables et de la
              nécessité pour les organisations de documenter l’impact
              environnemental de leurs fournisseurs.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Objectif réel du critère carbone
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>comparer les candidats sur un indicateur commun</li>
                <li>documenter une décision d’achat</li>
                <li>répondre à des exigences ESG internes</li>
                <li>anticiper des obligations futures</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="selection">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Critère de notation vs obligation réglementaire
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dans la majorité des appels d’offres, le carbone constitue un
              critère de notation ou un élément informatif, et non une exigence
              réglementaire. La différence est importante : un critère de
              notation accepte généralement une estimation cohérente, tandis
              qu’une obligation réglementaire exige un cadre normatif précis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Cas le plus fréquent
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>critère environnemental pondéré</li>
                  <li>indicateur demandé à titre comparatif</li>
                  <li>information jointe au dossier</li>
                  <li>aucune méthode imposée</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Cas plus rare
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>exigence explicite ISO ou audit externe</li>
                  <li>bilan carbone complet demandé</li>
                  <li>justificatifs techniques détaillés</li>
                  <li>publication réglementaire attendue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Ce que les acheteurs attendent réellement
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dans un appel d’offres, le document carbone doit surtout être
              lisible, comparable et vérifiable. L’objectif n’est pas une
              précision scientifique maximale, mais une cohérence entre les
              candidats.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Format généralement accepté
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat CO₂e agrégé</li>
                <li>année et date d’émission</li>
                <li>méthode déclarée</li>
                <li>document PDF identifiable</li>
                <li>mentions claires des limites</li>
                <li>éléments de vérification</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Quand une attestation indicative suffit
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Une attestation indicative est généralement suffisante lorsque le
              critère carbone sert à différencier les offres ou à documenter une
              décision. Elle devient insuffisante uniquement lorsque le cahier
              des charges impose explicitement un standard audité.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>critère environnemental non éliminatoire</li>
              <li>pondération limitée dans la note finale</li>
              <li>absence de standard imposé</li>
              <li>demande d’un indicateur estimatif</li>
            </ul>
          </section>

          {/* 5 */}
          <section id="full-carbon">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Quand un bilan carbone complet devient nécessaire
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Un bilan carbone complet est requis uniquement lorsque le donneur
              d’ordre exige explicitement un cadre normatif ou un audit externe.
              Cela reste minoritaire dans les appels d’offres standards, mais
              peut apparaître dans certains secteurs fortement réglementés.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (appels d’offres)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce éliminatoire de ne pas avoir de bilan carbone ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dans la majorité des cas, non. Le critère carbone sert à
                  comparer les offres. Une estimation cohérente est souvent
                  suffisante si elle est clairement présentée.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Peut-on fournir une estimation spend-based ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, lorsque aucune méthode spécifique n’est imposée. La
                  condition est de présenter clairement la méthode et ses
                  limites.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Pourquoi les critères carbone deviennent-ils fréquents ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les organisations doivent documenter leurs décisions
                  d’achats responsables et anticiper les exigences ESG futures,
                  ce qui entraîne l’apparition progressive d’indicateurs CO₂e.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre rapidement à un appel d’offres avec un document clair
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Lorsqu’un indicateur carbone est demandé dans un appel d’offres,
                l’objectif est généralement une comparaison entre candidats.
                Une attestation indicative standardisée permet de répondre sans
                surdimensionner la démarche.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Voir le prix
                </Link>
                <Link
                  href="/fr/product"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Comprendre le produit
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/fr/why-companies-ask"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Retour au guide (vue d’ensemble)
              </Link>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire appel d’offres">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#selection"
                    >
                      2. Critère vs obligation
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#expected"
                    >
                      3. Ce qui est attendu
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#acceptable"
                    >
                      4. Quand ça suffit
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#full-carbon"
                    >
                      5. Quand un bilan est requis
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#faq">
                      6. FAQ
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#cta">
                      Aller plus loin
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel de périmètre
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Une attestation CO₂e indicative peut être utilisée pour répondre
                à un critère carbone dans un appel d’offres lorsque la demande
                concerne un indicateur informatif. Elle ne remplace pas un audit
                ni un bilan carbone réglementaire.
              </p>

              <div className="mt-5">
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
          }
