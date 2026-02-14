// PATH: src/app/fr/verify/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/**
 * Clé publique de vérification Certif-Scope (Ed25519)
 * Cette clé est immuable et utilisée pour vérifier toutes les attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

/* ======================================================
   SEO METADATA — PAGE VERIFY (FR)
====================================================== */

export const metadata: Metadata = {
  title: "Vérifier une attestation CO₂e — Certif-Scope",
  description:
    "Apprenez comment vérifier indépendamment l’authenticité et l’intégrité d’une attestation CO₂e Certif-Scope à l’aide d’outils PDF standards ou d’une vérification cryptographique manuelle.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/verify",
    languages: {
      en: "https://www.certif-scope.com/verify",
      fr: "https://www.certif-scope.com/fr/verify",
    },
  },
  openGraph: {
    title: "Vérifier une attestation CO₂e — Certif-Scope",
    description:
      "Vérification indépendante des attestations CO₂e Certif-Scope à partir de documents PDF signés numériquement.",
    url: "https://www.certif-scope.com/fr/verify",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyPageFR() {
  return (
    <section
      id="verify"
      data-section="verify"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vérifier une attestation CO₂e",
            url: "https://www.certif-scope.com/fr/verify",
            description:
              "Instructions permettant de vérifier indépendamment l’authenticité et l’intégrité d’une attestation CO₂e Certif-Scope.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* EN-TÊTE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Vérification
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Vérifier une attestation CO₂e
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette page explique comment vérifier indépendamment l’authenticité et
          l’intégrité d’une attestation CO₂e émise par Certif-Scope, sans dépendre
          d’un service de validation en ligne.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto">
        {/* INTRO */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Les attestations Certif-Scope sont émises sous forme de documents PDF
            signés numériquement. Le fichier PDF constitue l’unique objet
            vérifiable.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Certif-Scope ne maintient pas de registre public, de validateur en
            ligne ni d’API de vérification. L’authenticité et l’intégrité sont
            vérifiées directement à partir du document.
          </p>

          {/* LIEN TECH — DISCRET, POUR EXPERTS */}
          <p className="mt-4 text-sm text-gray-600">
            Vous recherchez les détails techniques de vérification ?{" "}
            <Link
              href="/fr/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              Documentation technique de vérification
            </Link>
          </p>
        </section>

        {/* VALIDITÉ */}
        <section className="mb-12">
          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Validité de l’attestation :</strong> cette attestation est
              valable pendant <strong>12 mois à compter de sa date d’émission</strong>,
              comme indiqué dans le document. Au-delà de cette période, le document
              reste techniquement vérifiable mais doit être considéré comme expiré
              pour un usage courant.
            </p>
          </div>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            1. Télécharger le PDF de l’attestation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Obtenez le fichier PDF original contenant l’attestation. Seul le
            document PDF original peut être vérifié. Les captures d’écran,
            impressions ou fichiers modifiés ne peuvent pas être authentifiés.
          </p>
        </section>

        {/* ÉTAPE 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            2. Vérifier avec des outils standards
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pour vérifier la signature numérique intégrée, vous pouvez utiliser
            tout lecteur PDF standard prenant en charge les signatures numériques
            (Adobe Acrobat, Foxit ou équivalent).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ouvrez le PDF signé, localisez le panneau de signature et sélectionnez
            « Valider la signature » afin de confirmer que le document n’a pas été
            modifié et que la signature est valide.
          </p>

          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700">
              Cette vérification confirme à la fois l’{" "}
              <strong>authenticité</strong> du signataire (Certif-Scope) et
              l’<strong>intégrité</strong> du contenu signé — garantissant que le
              document n’a pas été modifié depuis son émission.
            </p>
          </div>
        </section>

        {/* ÉTAPE 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            3. Vérification avancée / manuelle
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pour une vérification avancée ou une intégration dans des workflows
            de conformité automatisés, la signature Ed25519 peut être vérifiée
            directement à l’aide de la clé publique ci-dessous.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Extraire la charge signée et la signature du PDF</li>
            <li>Vérifier la signature avec la clé publique ci-dessous</li>
            <li>Vérifier que l’identifiant d’attestation correspond aux données signées</li>
          </ul>

          <p className="text-sm font-semibold text-gray-800 mb-2">
            Clé publique de vérification Certif-Scope (Ed25519)
          </p>

          <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto break-all whitespace-pre-wrap text-gray-600 font-mono">
            {CERTIFSCOPE_PUBLIC_KEY_BASE64}
          </pre>

          <p className="mt-2 text-xs text-gray-500">
            Cette clé est publique, permanente et ne change pas.
          </p>
        </section>

        {/* NOTE FINALE */}
        <div className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-8">
          <p className="mb-3">
            <strong>Information importante :</strong> Certif-Scope ne maintient
            pas de registre des attestations émises. La vérification repose
            uniquement sur le PDF fourni et sa signature intégrée. Les demandes
            de réémission d’une attestation perdue doivent être adressées au
            support ; la récupération d’un document déjà émis depuis les systèmes
            Certif-Scope n’est pas possible.
          </p>

          <p className="mb-4">
            Les attestations Certif-Scope sont des estimations CO₂e indicatives,
            basées sur les dépenses. Elles ne constituent ni un audit, ni une
            certification, ni un rapport réglementaire (CSRD ou ESRS), ni une
            mission d’assurance.
          </p>

          {/* LIEN TECH FINAL — LECTEURS COMPLIANCE / AUDIT */}
          <p className="text-xs">
            Les détails techniques et cryptographiques sont disponibles{" "}
            <Link
              href="/fr/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              ici
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
