// PATH: src/app/fr/why-companies-ask/attestation-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — BILAN CARBONE PME (PAGE EXISTANTE)
   Objectif : se positionner sur "bilan carbone PME" / "bilan carbone entreprise PME"
   tout en restant subtil (attestation = livrable / preuve).
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME — Que fournir quand on n’a pas de bilan complet — Certif-Scope (FR)",
  description:
    "Guide PME : comprendre les demandes “bilan carbone”, ce qui est attendu en pratique (screening), et comment répondre avec une estimation indicative standardisée sans audit complet.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
    },
  },
  openGraph: {
    title: "Bilan carbone PME — Que fournir quand on n’a pas de bilan complet",
    description:
      "Pourquoi les PME reçoivent des demandes “bilan carbone” et comment répondre avec un document CO₂e indicatif, cadré et réutilisable.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CarbonAttestationSMEsFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme/";

  return (
    <section
      id="carbon-attestation-smes"
      data-section="carbon-attestation-smes"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bilan carbone PME",
            url: pageUrl,
            description:
              "Guide PME : comprendre pourquoi on vous demande un “bilan carbone”, ce qui est attendu en pratique (screening) et comment répondre avec une estimation CO₂e indicative standardisée.",
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
                  item: "https://www.certif-scope.com/fr/why-companies-ask/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Bilan carbone PME",
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
          Comprendre les demandes “bilan carbone” — Cas n°4
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Bilan carbone PME : que fournir quand on n’a pas de bilan carbone complet
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Beaucoup de PME reçoivent aujourd’hui des demandes “bilan carbone” de la
          part de clients, acheteurs, banques ou assureurs. Dans la majorité des
          cas, il ne s’agit pas d’une obligation réglementaire ni d’un audit : on
          vous demande un indicateur CO₂e simple pour le screening et la
          documentation interne.
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
              1. Pourquoi les PME reçoivent des demandes “bilan carbone”
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Même si votre entreprise n’est pas soumise à un reporting ESG
              réglementaire, vos partenaires (clients, donneurs d’ordre,
              institutions financières) peuvent l’être ou appliquer des politiques
              internes d’achats responsables. Ils collectent alors des informations
              environnementales sur leur chaîne de valeur.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                La situation la plus fréquente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                On ne vous demande pas “d’être conforme” : on vous demande de pouvoir
                fournir un indicateur CO₂e simple, réutilisable et documentable,
                pour éviter des dossiers incomplets ou des questionnaires sans fin.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="what-is-expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Ce qui est réellement attendu (dans la majorité des cas)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une demande “bilan carbone PME” est souvent formulée de manière
              générique. En pratique, le besoin est simple : un document qui permet
              à un tiers de cocher une case “information CO₂e disponible” et
              d’archiver une preuve minimale.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que le tiers veut pouvoir vérifier rapidement
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un résultat CO₂e agrégé (indicatif)</li>
                <li>une année couverte + une date d’émission</li>
                <li>une méthode déclarée (ex. spend-based)</li>
                <li>un document standard (PDF) et identifiable</li>
                <li>des limites claires (non audit, non CSRD/ESRS)</li>
                <li>un lien/QR de vérification (contrôle indépendant)</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section id="difference">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Estimation indicative vs bilan carbone complet : comprendre la différence
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une PME confond souvent “bilan carbone” et “bilan carbone audité”.
              Ce sont deux objets différents. Une estimation indicative est adaptée
              au screening. Un bilan complet sert à un inventaire détaillé (souvent
              coûteux et long).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Estimation / document indicatif (screening)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>objectif : répondre vite à une demande tiers</li>
                  <li>résultat agrégé + méthode déclarée</li>
                  <li>limites explicites</li>
                  <li>adaptée aux workflows (achats, banque, assurance)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Bilan carbone complet (inventaire)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>objectif : inventaire détaillé et pilotage</li>
                  <li>données physiques, scopes, hypothèses</li>
                  <li>souvent audit / vérification</li>
                  <li>coût et délai significatifs</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              En contexte “onboarding / screening”, un audit complet est rarement
              exigé. Si un standard audit est explicitement imposé, demandez le
              cadre attendu (norme, périmètre, scopes).
            </p>
          </section>

          {/* 4 */}
          <section id="how-to-respond">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Comment répondre efficacement (sans surdimensionner)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La bonne réponse réduit la friction : un document standard, lisible,
              réutilisable, qui annonce clairement son périmètre et ses limites.
              Cela évite d’être “bloqué” sur des demandes répétées.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formulations sûres (à copier)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>À utiliser :</strong> “estimation CO₂e indicative”,
                  “estimation spend-based”, “usage screening ESG”, “non auditée”.
                </li>
                <li>
                  <strong>À éviter :</strong> “certifiée”, “conforme CSRD/ESRS”,
                  “audit carbone”, “inventaire réglementaire”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Si un tiers exige un standard (ISO, audit), demander : la norme exacte,
                  le périmètre organisationnel, les scopes attendus et le niveau d’assurance.
                  Sans ces précisions, la demande est généralement du screening.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="why-standardize">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Pourquoi standardiser vous fait gagner du temps (et de la crédibilité)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les PME perdent du temps quand elles répondent “au cas par cas” :
              fichiers différents, méthodes non expliquées, absence de date ou de
              périmètre. Un document standardisé permet de répondre plus vite et
              d’éviter des allers-retours.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>moins de questionnaires à remplir manuellement</li>
              <li>moins d’ambiguïtés sur le périmètre</li>
              <li>un format réutilisable sur plusieurs demandes</li>
              <li>une preuve minimale archivable</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
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
                    Conformité & périmètre
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/methodology">
                    Méthodologie (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/verify">
                    Vérifier un document
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (PME)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce que je suis obligé d’avoir un bilan carbone ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pas dans la majorité des cas. Les demandes reçues par les PME sont le plus
                  souvent liées au screening (achats, banque, assurance). Si un audit ou une norme
                  est exigée explicitement, le cahier des charges doit le préciser.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Une estimation peut-elle être acceptée ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, si la demande vise un indicateur informatif et si le document annonce clairement
                  ses limites : estimation indicative, non auditée, non CSRD/ESRS, non inventaire complet.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Que faire si mon client insiste sur “scope 1/2/3” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Demandez si l’objectif est une information de screening ou un inventaire complet.
                  Si un inventaire complet est exigé, un document indicatif n’est pas le bon outil.
                  Si c’est du screening, une estimation cadrée et standardisée répond généralement au besoin.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre aux demandes “bilan carbone” sans audit, avec un document clair
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si vous êtes une PME et qu’on vous demande un “bilan carbone”, le besoin est
                souvent un indicateur simple pour screening. Certif-Scope produit un document
                CO₂e indicatif, standardisé, traçable et vérifiable.
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
              <nav aria-label="Sommaire bilan carbone PME">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Pourquoi les PME reçoivent ces demandes
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-is-expected"
                    >
                      2. Ce qui est attendu
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#difference"
                    >
                      3. Estimation vs bilan complet
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#how-to-respond"
                    >
                      4. Comment répondre
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#why-standardize"
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
                Ce guide traite des demandes “bilan carbone PME” liées au screening (achats,
                banque, assurance). Un document indicatif est acceptable s’il annonce clairement
                ses limites. Il ne remplace pas un audit ni un inventaire complet des émissions.
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
