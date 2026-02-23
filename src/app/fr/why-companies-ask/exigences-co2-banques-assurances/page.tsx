// PATH: src/app/fr/why-companies-ask/exigences-co2-banques-assurances/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — BILAN CARBONE BANQUE / ASSURANCE (PAGE EXISTANTE)
   Objectif : se positionner sur "bilan carbone banque" / "attestation carbone banque"
   mais surtout capter l’intention "bilan carbone demandé banque / assureur"
   (bilan carbone = mot recherché ; document = livrable).
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone demandé par une banque ou un assureur — Pourquoi et quoi fournir — Certif-Scope (FR)",
  description:
    "Comprendre pourquoi une banque ou un assureur demande un “bilan carbone” : usage screening ESG / risque, ce qui est attendu en pratique, et quand un document CO₂e indicatif est acceptable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances",
    },
  },
  openGraph: {
    title: "Bilan carbone demandé par une banque ou un assureur — Pourquoi et quoi fournir",
    description:
      "Pourquoi les acteurs financiers demandent un “bilan carbone” et comment répondre avec un document CO₂e indicatif, standardisé et cadré.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function FinanceCO2RequirementsFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances";

  return (
    <section
      id="finance-co2-requirements"
      data-section="finance-co2-requirements"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bilan carbone demandé par une banque ou un assureur",
            url: pageUrl,
            description:
              "Guide pratique : pourquoi une banque ou un assureur demande un “bilan carbone” (screening ESG / analyse de risque), ce qui est attendu en pratique et quand un document indicatif est acceptable.",
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
                  name: "Bilan carbone demandé par une banque ou un assureur",
                  item: pageUrl,
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
          Comprendre les demandes “bilan carbone” — Cas n°3
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Bilan carbone demandé par une banque ou un assureur : pourquoi, et quoi fournir
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les banques et assureurs demandent de plus en plus des informations
          environnementales dans leurs dossiers. La mention “bilan carbone” est
          souvent utilisée de manière générique : dans la majorité des cas, il
          s’agit d’un <strong>usage informatif</strong> (screening ESG / analyse de
          risque) et non d’un audit carbone complet.
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
            Vérifier un document
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
              1. Pourquoi une banque ou un assureur demande un “bilan carbone”
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les institutions financières évaluent des risques multiples :
              continuité d’activité, coûts futurs, exposition sectorielle,
              sensibilité aux politiques publiques et attentes marché. Le CO₂e
              est utilisé comme un indicateur parmi d’autres pour structurer une
              analyse ESG et documenter un dossier (crédit, assurance, relation
              commerciale).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                En pratique, la question derrière la demande
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>l’activité est-elle exposée à des risques de transition ?</li>
                <li>existe-t-il un minimum de suivi environnemental ?</li>
                <li>peut-on archiver une preuve cohérente dans le dossier ?</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="what-it-is-not">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Ce que la demande n’est pas (le plus souvent)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une demande “bilan carbone” par une banque ou un assureur est
              souvent perçue comme une exigence réglementaire. Dans la majorité
              des cas, elle vise surtout la collecte d’un indicateur pour des
              grilles ESG internes. Cela ne correspond pas à un reporting CSRD/ESRS
              ni à un audit ISO.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Usage le plus fréquent
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>screening ESG / onboarding</li>
                  <li>documentation d’un dossier crédit</li>
                  <li>analyse interne de risque</li>
                  <li>questionnaire standardisé</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Usage à cadrer / refuser
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>exigence d’audit ou d’assurance externe</li>
                  <li>exigence explicite ISO 14064-1 / inventaire GES</li>
                  <li>reporting CSRD/ESRS officiel</li>
                  <li>demande de scopes complets vérifiés</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Ce qui est attendu : un document lisible, archivable, réutilisable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les équipes finance/assurance veulent un document qui se lit vite
              et s’archive facilement. La crédibilité vient d’un format standard,
              d’une méthode explicitée et d’un périmètre clairement annoncé.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Éléments qui augmentent l’acceptabilité
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat CO₂e agrégé (tCO₂e) + année couverte</li>
                <li>méthode déclarée + version des facteurs</li>
                <li>mentions visibles : indicatif, non audit, non CSRD/ESRS</li>
                <li>identifiant unique et date d’émission</li>
                <li>lien/QR de vérification (contrôle indépendant)</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="how-to-answer">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Comment répondre sans créer d’ambiguïté
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La meilleure stratégie est de répondre avec un document cadré :
              indiquer qu’il s’agit d’une estimation indicative, préciser le
              périmètre et fournir des éléments de traçabilité. Cela évite les
              interprétations “audit / conformité”, tout en répondant au besoin
              opérationnel.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formulations recommandées
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>À utiliser :</strong> “indicateur CO₂e indicatif”,
                  “estimation spend-based”, “usage informatif / screening ESG”.
                </li>
                <li>
                  <strong>À éviter :</strong> “certifié”, “audit”, “conforme
                  CSRD/ESRS”, “inventaire réglementaire”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si la demande devient “audit” ou “standard ISO”, demander le
                  cadre attendu (norme, assurance externe, scopes) avant de
                  produire un document. Un document indicatif n’est pas un
                  inventaire complet.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="why-standard">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Pourquoi standardiser : réduction de friction et de coûts
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sans standard, les demandes ESG finance/assurance génèrent des
              aller-retours : formats hétérogènes, absence de périmètre,
              difficultés d’archivage. Un document standardisé réduit la friction
              et accélère le traitement interne, sans créer de promesse de
              conformité.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Liens utiles
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/fr/product">
                    Produit : document CO₂e standardisé
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/compliance">
                    Conformité & périmètre (ce que le document n’est pas)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/methodology">
                    Méthodologie (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/verify">
                    Vérifier un document (public)
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (banques & assurances)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce obligatoire légalement pour une PME ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pas en tant qu’obligation directe de reporting. La demande
                  intervient le plus souvent dans une politique ESG interne
                  (screening) ou une collecte d’informations. Si un reporting
                  réglementaire est exigé, le cadre doit être précisé.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Une estimation indicative est-elle acceptée ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, si la demande vise un indicateur informatif et si le
                  document annonce explicitement ses limites : estimation, non
                  auditée, non CSRD/ESRS.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Que faire si on me demande “ISO 14064-1” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  C’est un cadre différent. Demandez le périmètre exact (scopes,
                  niveau d’assurance externe, périmètre organisationnel) et
                  précisez qu’un document indicatif n’est pas un inventaire ISO.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre à une demande “bilan carbone” en finance/assurance sans surdimensionner
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si votre banque ou assureur demande un “bilan carbone”, le besoin
                est souvent un document lisible et archivable pour screening ESG.
                Certif-Scope produit un document CO₂e indicatif, structuré,
                traçable et vérifiable.
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
              <nav aria-label="Sommaire bilan carbone banque assureur">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-it-is-not"
                    >
                      2. Ce que ce n’est pas
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
                      href="#how-to-answer"
                    >
                      4. Comment répondre
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#why-standard"
                    >
                      5. Pourquoi standardiser
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
                Dans la majorité des cas, la demande “bilan carbone” en
                finance/assurance vise un usage informatif (screening ESG). Un
                document indicatif est acceptable s’il annonce clairement ses
                limites. Il ne remplace pas un audit, une certification, ni un
                reporting réglementaire.
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
