// PATH: src/app/fr/why-companies-ask/preuve-carbone-entreprise/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — JUSTIFICATIF / PREUVE CARBONE ENTREPRISE
   Objectif : capter "justificatif CO2 entreprise" / "preuve carbone entreprise"
   + variantes "document carbone", "justificatif carbone".
====================================================== */

export const metadata: Metadata = {
  title:
    "Justificatif CO₂ entreprise — Preuve carbone : quoi fournir (sans audit) — Certif-Scope (FR)",
  description:
    "Comprendre ce qu’on appelle un “justificatif CO₂” (preuve carbone) : quand il est demandé, le contenu minimal attendu (screening) et comment fournir un document standardisé, indicatif et vérifiable sans prétendre à un audit.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/preuve-carbone-entreprise",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/preuve-carbone-entreprise",
    },
  },
  openGraph: {
    title: "Justificatif CO₂ entreprise — Preuve carbone : quoi fournir (sans audit)",
    description:
      "Pourquoi on demande un “justificatif CO₂” et comment répondre avec un document indicatif, standardisé et vérifiable (screening).",
    url: "https://www.certif-scope.com/fr/why-companies-ask/preuve-carbone-entreprise",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CompanyCarbonProofFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/preuve-carbone-entreprise";

  return (
    <section
      id="company-carbon-proof"
      data-section="company-carbon-proof"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Justificatif CO₂ entreprise",
            url: pageUrl,
            description:
              "Guide : comprendre la notion de justificatif CO₂ (preuve carbone) et comment fournir un document standardisé, indicatif et vérifiable pour le screening.",
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
                  name: "Justificatif CO₂ entreprise",
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
          Comprendre les demandes CO₂e — Synthèse “justificatif”
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Justificatif CO₂ entreprise : ce que cela signifie (et ce qu’il faut fournir)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Un “justificatif CO₂” (ou “preuve carbone”) n’est pas forcément un audit ni un bilan
          carbone complet. Dans de nombreux workflows (achats, banque, assurance), il s’agit
          d’une preuve minimale : un document lisible et archivable indiquant un résultat CO₂e
          indicatif, une méthode déclarée et des limites explicites.
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
          <section id="definition">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Définition : qu’appelle-t-on “justificatif CO₂” en pratique ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dans les échanges B2B, “justificatif CO₂”, “preuve carbone” ou “document carbone”
              sont souvent des expressions non standard. Elles désignent généralement un document
              qui permet à un tiers de constater qu’un indicateur CO₂e existe, qu’il a été produit
              selon une méthode annoncée, et qu’il peut être archivé dans un dossier.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Deux niveaux de “preuve” à ne pas confondre
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Preuve minimale (screening)</strong> : indicateur CO₂e indicatif + méthode + limites.
                </li>
                <li>
                  <strong>Preuve forte (audit / assurance)</strong> : inventaire détaillé + vérification externe.
                </li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="why-requested">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Pourquoi on vous demande un justificatif CO₂
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La demande vise rarement la “perfection carbone”. Elle vise la capacité à produire
              un document réutilisable pour des workflows : qualification fournisseur, dossier
              crédit, analyse assureur, réponses à des questionnaires ESG, ou appels d’offres.
              Sans preuve minimale, les organisations se retrouvent avec des déclarations informelles
              difficiles à comparer et à archiver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Achats
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">Screening fournisseur</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Comparer, qualifier, archiver une preuve minimale.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Banque
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">Dossier / risque</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Indicateur ESG informatif pour documenter une décision interne.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Assurance
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">Exposition</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Compréhension sectorielle et cohérence du profil environnemental.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Quoi fournir : le contenu minimal d’un justificatif acceptable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pour être réellement utile, le justificatif CO₂ doit être lisible et comparable.
              Il doit aussi être cadré : indiquer explicitement qu’il s’agit d’une estimation
              indicative (screening), sans prétendre à un audit ni à un reporting réglementaire.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist “preuve minimale” (screening)
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>identification simple de l’entité (nom)</li>
                <li>année couverte + date d’émission</li>
                <li>résultat CO₂e agrégé (tCO₂e) et unité</li>
                <li>méthode déclarée (ex. spend-based) + version des facteurs</li>
                <li>périmètre annoncé (ce qui est inclus/exclu)</li>
                <li>clauses visibles : indicatif, non audit, non CSRD/ESRS</li>
                <li>traçabilité : identifiant unique, lien/QR de vérification</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Cette checklist ne remplace pas un inventaire complet, mais elle répond aux besoins
                opérationnels les plus fréquents.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="verification">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Ce qui rend un justificatif “crédible” : traçabilité et vérification
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La crédibilité, en screening, n’est pas l’audit : c’est la capacité à fournir un
              document standard, stable et contrôlable. Les tiers veulent pouvoir vérifier
              l’intégrité et l’origine du document sans devoir contacter quelqu’un.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Signaux simples de confiance (screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>identifiant unique du document</li>
                <li>lien de vérification public</li>
                <li>date et version du format</li>
                <li>mentions explicites de périmètre et limites</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/fr/verify"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Vérifier un document
                </Link>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="when-not-enough">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Quand un justificatif CO₂ minimal ne suffit pas (cas à cadrer)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un justificatif minimal est utile en screening. Il n’est pas adapté lorsque la demande
              impose explicitement un standard, une vérification externe ou un inventaire détaillé.
              Dans ce cas, il faut demander le cadre exact (norme, périmètre, scopes, niveau d’assurance).
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                Exemples de demandes où il faut refuser ou cadrer
              </h3>
              <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                <li>“audit carbone” / “assurance externe”</li>
                <li>“ISO 14064-1 obligatoire”</li>
                <li>reporting CSRD/ESRS officiel</li>
                <li>exigence d’un inventaire complet scopes 1–2–3 vérifiés</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Liens utiles
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/fr/product/compliance">
                    Conformité & périmètre
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/methodology">
                    Méthodologie (spend-based)
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/why-companies-ask/attestation-carbone-fournisseur"
                  >
                    Cas fournisseur
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/why-companies-ask/attestation-carbone-appel-offres"
                  >
                    Cas appel d’offres
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/why-companies-ask/exigences-co2-banques-assurances"
                  >
                    Cas banques & assurances
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (justificatif CO₂)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  “Justificatif CO₂” veut-il dire “bilan carbone audité” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Non, pas automatiquement. Le terme est souvent utilisé de manière générique.
                  La première étape est d’identifier le niveau attendu : screening (preuve minimale)
                  ou audit (preuve forte). Dans beaucoup de cas, il s’agit de screening.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce acceptable de fournir une estimation ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, lorsque la demande vise un indicateur informatif et que le document annonce clairement
                  ses limites : estimation indicative, non auditée, non CSRD/ESRS.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Qu’est-ce qui améliore le plus l’acceptabilité ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un format standard, une méthode déclarée, des limites explicites, et une vérification simple
                  (identifiant + lien/QR). C’est ce qui rend le document utilisable dans des workflows institutionnels.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Fournir un justificatif CO₂ minimal, clair et vérifiable
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si l’on vous demande un “justificatif CO₂”, le besoin est souvent un document de screening :
                indicatif, standardisé, archivable et contrôlable. Certif-Scope produit un document CO₂e
                cadré, traçable et vérifiable.
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
              <nav aria-label="Sommaire justificatif CO2">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#definition">
                      1. Définition
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why-requested">
                      2. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Contenu minimal
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#verification">
                      4. Traçabilité & vérification
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#when-not-enough">
                      5. Quand ça ne suffit pas
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
                Un justificatif CO₂ minimal est utile pour le screening (achats, banque, assurance)
                lorsqu’il est présenté comme une estimation indicative avec limites explicites.
                Il ne remplace pas un audit ni un inventaire complet des émissions.
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
