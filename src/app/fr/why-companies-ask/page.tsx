// PATH: src/app/fr/why-companies-ask/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — POURQUOI LES ENTREPRISES LE DEMANDENT (FR)
   Objectif SEO FR : capter les intentions "demandé par client / exigence / justificatif"
   sans promettre audit ni CSRD/ESRS.
====================================================== */

export const metadata: Metadata = {
  title:
    "Pourquoi un client demande un justificatif CO₂ — Exigence fournisseurs — Certif-Scope (FR)",
  description:
    "Pourquoi les clients, acheteurs, banques et assureurs demandent un justificatif CO₂ (preuve carbone) aux fournisseurs : screening ESG, onboarding et gestion du risque. Ce que ce document est — et n’est pas.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
      de: "https://www.certif-scope.com/de/why-companies-ask",
    },
  },
  openGraph: {
    title:
      "Pourquoi un client demande un justificatif CO₂ — Exigence fournisseurs",
    description:
      "Comprendre pourquoi les organisations demandent un justificatif CO₂ (preuve carbone) et ce que ces documents représentent — et ne représentent pas.",
    url: "https://www.certif-scope.com/fr/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskPage() {
  const pageUrl = "https://www.certif-scope.com/fr/why-companies-ask";

  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pourquoi un client demande un justificatif CO₂",
            url: pageUrl,
            description:
              "Explication institutionnelle des raisons pour lesquelles les organisations demandent un justificatif CO₂ (preuve carbone) à leurs fournisseurs et de son usage (screening).",
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
                  name: "Accueil",
                  item: "https://www.certif-scope.com/fr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pourquoi les entreprises le demandent",
                  item: pageUrl,
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Exigence CO₂ fournisseurs — justificatif / preuve carbone
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Pourquoi un client demande un justificatif CO₂
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les directions achats, les banques, les assureurs et parfois les
          acteurs publics demandent de plus en plus un justificatif CO₂ (preuve
          carbone) aux fournisseurs. Cette page explique les raisons
          opérationnelles et institutionnelles de cette demande, ainsi que ce
          que ce document représente réellement — et ce qu’il ne constitue pas.
        </p>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 max-w-4xl">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Pages utiles pour comprendre ce qui est réellement attendu
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              si la demande vous semble “obligatoire”, commencez par vérifier le
              niveau réellement exigé sur la page{" "}
              <Link
                href="/fr/bilan-carbone-pme/obligation/"
                className="underline text-[#0B3A63]"
              >
                bilan carbone PME : est-ce obligatoire ?
              </Link>
            </li>
            <li>
              si la question est budgétaire, consultez{" "}
              <Link
                href="/fr/bilan-carbone-pme/cout/"
                className="underline text-[#0B3A63]"
              >
                combien coûte un bilan carbone PME ?
              </Link>
            </li>
            <li>
              si vous voulez voir le format attendu, consultez{" "}
              <Link
                href="/fr/bilan-carbone-pme/exemple/"
                className="underline text-[#0B3A63]"
              >
                l’exemple de bilan carbone PME
              </Link>{" "}
              ou le{" "}
              <Link
                href="/fr/bilan-carbone-pme/modele-pdf/"
                className="underline text-[#0B3A63]"
              >
                modèle PDF de document carbone PME
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask/attestation-carbone-fournisseur"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Cas n°1 : fournisseur
          </Link>
          <Link
            href="/fr/why-companies-ask/attestation-carbone-appel-offres"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cas n°2 : appel d’offres
          </Link>
          <Link
            href="/fr/why-companies-ask/exigences-co2-banques-assurances"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cas n°3 : banque & assurance
          </Link>
          <Link
            href="/fr/why-companies-ask/attestation-carbone-pme"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cas n°4 : PME
          </Link>
          <Link
            href="/fr/why-companies-ask/preuve-carbone-entreprise"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Synthèse : “preuve / justificatif”
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 1 */}
        <section id="risk-classification">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Classification du risque fournisseurs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les grandes organisations doivent classer leurs fournisseurs selon
            leur exposition environnementale dans le cadre de leur gouvernance
            achats et de leurs politiques ESG. En pratique, cela se traduit par
            une collecte d’informations CO₂e à l’onboarding et lors des
            consultations (RFP / appels d’offres).
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>screening ESG des fournisseurs (pré-qualification)</li>
            <li>indicateurs environnementaux demandés dans les consultations</li>
            <li>
              comparabilité et archivage d’un document dans un dossier interne
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section id="finance-pressure">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Pression réglementaire indirecte via les acteurs financiers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les banques et assureurs intègrent progressivement des facteurs
            environnementaux dans leurs analyses internes (risque, exposition
            sectorielle, cohérence ESG). Cela crée une demande “en cascade” :
            même si une PME n’est pas soumise à un reporting ESG complet, elle
            peut devoir fournir un indicateur CO₂e simple pour documenter un
            dossier.
          </p>
        </section>

        {/* 3 */}
        <section id="due-diligence">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due diligence et onboarding fournisseurs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De nombreuses organisations demandent une information CO₂e dans le
            cadre des procédures de due diligence fournisseurs. Le besoin
            opérationnel est clair : un document structuré, lisible, et
            réutilisable, compatible avec des workflows institutionnels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour un fournisseur, l’enjeu est d’éviter les échanges
            interminables : un justificatif CO₂ standard réduit la friction et
            accélère les cycles d’approbation.
          </p>
        </section>

        {/* 4 */}
        <section id="accessibility">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibilité pour les fournisseurs non spécialisés
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beaucoup de PME ne peuvent pas produire un inventaire d’émissions
            complet ni mobiliser un cabinet. Dans la majorité des demandes
            “terrain”, il s’agit de fournir un indicateur indicatif pour
            screening. Un justificatif CO₂ cadré permet de répondre sans
            surdimensionner la démarche.
          </p>
          <p className="text-gray-700 leading-relaxed">
            C’est exactement la logique des pages{" "}
            <Link
              href="/fr/bilan-carbone-pme/"
              className="underline text-[#0B3A63]"
            >
              bilan carbone PME
            </Link>
            ,{" "}
            <Link
              href="/fr/bilan-carbone-pme/exemple/"
              className="underline text-[#0B3A63]"
            >
              exemple
            </Link>{" "}
            et{" "}
            <Link
              href="/fr/bilan-carbone-pme/modele-pdf/"
              className="underline text-[#0B3A63]"
            >
              modèle PDF
            </Link>
            , qui montrent le niveau de réponse souvent suffisant dans un
            contexte fournisseur.
          </p>
        </section>

        {/* 5 */}
        <section id="cycle-acceleration">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Accélération des cycles d’approbation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les processus d’approbation fournisseurs ralentissent lorsque les
            informations CO₂e sont hétérogènes (format, périmètre, absence de
            date, absence de méthode). Un document standardisé réduit le temps
            de traitement interne et limite les demandes répétées.
          </p>
        </section>

        {/* 6 */}
        <section id="verification">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Vérification rapide et indépendante
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>identifiant unique du document</li>
            <li>mentions de périmètre et limites (lisibles)</li>
            <li>URL de vérification publique</li>
            <li>QR code exploitable dans des dossiers et outils</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            En screening, ce que cherche un tiers est un document archivable et
            contrôlable en quelques secondes : origine, intégrité, date,
            version.
          </p>
        </section>

        {/* 7 */}
        <section id="cross-border">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Acceptation transfrontalière (logique “format”)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les demandes CO₂e apparaissent dans des contextes similaires dans
            plusieurs pays européens. Le facteur clé n’est pas une norme locale
            unique, mais la capacité à fournir un format clair, stable et
            réutilisable dans des processus B2B (achats / finance / assurance).
          </p>
        </section>

        {/* 8 */}
        <section id="what-it-is-not">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Ce que ce justificatif CO₂ n’est pas
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ce n’est pas une certification</li>
            <li>ce n’est pas un audit</li>
            <li>ce n’est pas une mission d’assurance</li>
            <li>ce n’est pas un reporting carbone réglementaire</li>
            <li>ce n’est pas un reporting CSRD ou ESRS</li>
            <li>ce n’est pas un inventaire Scope 1, Scope 2 ou Scope 3</li>
          </ul>
        </section>

        {/* 9 */}
        <section id="legal-scope">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Portée d’usage : screening et documentation interne
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le justificatif CO₂ visé ici est indicatif uniquement. Il est adapté
            au screening et à la documentation interne (achats, banque,
            assurance). Il ne constitue ni un audit, ni une certification, ni
            une mission d’assurance, ni une empreinte carbone juridiquement
            opposable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour une PME, cela veut dire qu’avant de lancer une démarche plus
            lourde, il faut d’abord clarifier si la demande est réellement{" "}
            <Link
              href="/fr/bilan-carbone-pme/obligation/"
              className="underline text-[#0B3A63]"
            >
              obligatoire
            </Link>{" "}
            et quel niveau de{" "}
            <Link
              href="/fr/bilan-carbone-pme/cout/"
              className="underline text-[#0B3A63]"
            >
              coût
            </Link>{" "}
            est rationnel par rapport au dossier.
          </p>
        </section>

        {/* CLUSTER LINKS */}
        <section id="cluster-links">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Guides utiles pour une PME
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
                  Exemple de bilan carbone PME →
                </Link>
              </li>
              <li>
                <Link
                  className="underline text-[#0B3A63]"
                  href="/fr/bilan-carbone-pme/modele-pdf/"
                >
                  Modèle PDF : document carbone PME →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="pt-2">
          <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-3">
              Répondre à une exigence CO₂ fournisseur avec un document clair
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl">
              Si un client vous demande un “justificatif CO₂” (preuve carbone),
              le besoin est souvent un document de screening : lisible,
              archivable et contrôlable. Certif-Scope produit un document CO₂e
              indicatif, standardisé et vérifiable.
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
              <Link
                href="/fr/generate"
                className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Générer un document
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="#top"
              className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            >
              Retour en haut
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
             }
