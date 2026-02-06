// PATH: src/app/fr/terms/page.tsx

import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — CONDITIONS GÉNÉRALES D’UTILISATION
====================================================== */

export const metadata: Metadata = {
  title: "Conditions d’utilisation — Certif-Scope",
  description:
    "Conditions d’utilisation encadrant l’usage de Certif-Scope : périmètre du service, prix, responsabilités, principes privacy-by-design et droit applicable.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/terms",
    languages: {
      en: "https://www.certif-scope.com/terms",
      fr: "https://www.certif-scope.com/fr/terms",
    },
  },
  openGraph: {
    title: "Conditions d’utilisation — Certif-Scope",
    description:
      "Conditions contractuelles encadrant l’usage de Certif-Scope et l’émission d’attestations CO₂e indicatives spend-based.",
    url: "https://www.certif-scope.com/fr/terms",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function TermsPageFR() {
  return (
    <section
      id="terms"
      data-section="terms"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (LEGAL / TERMS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Conditions d’utilisation",
            url: "https://www.certif-scope.com/fr/terms",
            description:
              "Conditions d’utilisation encadrant l’usage de Certif-Scope et l’émission d’attestations CO₂e.",
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

      {/* EN-TÊTE CANONIQUE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Cadre légal
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Conditions d’utilisation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les présentes Conditions d’utilisation encadrent l’usage de Certif-Scope
          et l’émission d’Attestations CO₂e standardisées. En générant une Attestation,
          l’utilisateur reconnaît avoir lu et accepté ces Conditions dans leur intégralité.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU */}
      <div className="max-w-4xl mx-auto space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">1. Objet</h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes Conditions définissent le cadre contractuel applicable
            à l’utilisation du service Certif-Scope, qui fournit des Attestations
            CO₂e indicatives, calculées selon une méthode spend-based à partir des
            dépenses annuelles (€) déclarées par l’utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Description du service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope convertit des dépenses annuelles (€) en une valeur CO₂e
            indicative au moyen d’un modèle de calcul déterministe. Le service
            délivre une Attestation PDF téléchargeable incluant notamment :
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>un résultat CO₂e agrégé (indicatif)</li>
            <li>un format PDF standardisé, adapté aux usages institutionnels</li>
            <li>un identifiant unique d’Attestation</li>
            <li>un lien de vérification et un QR code</li>
            <li>des éléments d’intégrité et d’authenticité intégrés</li>
            <li>le nom et la version du jeu de facteurs utilisés</li>
            <li>une durée de validité annoncée d’un (1) an</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            L’Attestation n’est pas une certification, n’est pas un rapport CSRD/ESRS,
            n’est pas un audit GES et n’est pas un inventaire d’émissions réglementaire.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Prix et paiement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le prix est fixe par Attestation. Aucun abonnement ne s’applique.
            Le prix applicable est celui affiché sur la page Tarification au moment
            de l’achat.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Les paiements sont traités via Stripe. La TVA n’est pas applicable
            conformément au régime de franchise en base (article 293 B du CGI).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Livraison du service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Après confirmation du paiement, l’Attestation est générée immédiatement
            et mise à disposition sous forme de PDF téléchargeable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Réémission et Attestations perdues
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope ne conserve pas les Attestations émises ni les données
            financières sous-jacentes après émission. L’utilisateur est responsable
            de l’archivage de son PDF.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une réémission peut être accordée à la discrétion de Certif-Scope et
            produira un nouvel identifiant ainsi qu’une nouvelle période de validité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Absence de droit de rétractation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Conformément à la directive (UE) 2011/83/UE, le droit de rétractation
            ne s’applique pas aux services numériques pleinement exécutés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Responsabilités de l’utilisateur
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L’utilisateur est seul responsable de l’exactitude des données fournies
            et du contexte d’utilisation de l’Attestation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L’utilisateur s’engage à ne pas utiliser l’Attestation pour des usages
            interdits ou susceptibles d’induire en erreur (ex. claims marketing,
            reporting réglementaire, certification, audit).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Limitation de responsabilité
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope ne saurait être tenu responsable des usages, interprétations,
            communications ou décisions prises par des tiers sur la base de l’Attestation,
            ni des conséquences d’une utilisation en dehors du périmètre déclaré.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L’ensemble des contenus, structures documentaires et éléments de design
            sont protégés par le droit de la propriété intellectuelle. Toute reproduction,
            modification ou redistribution sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Données personnelles et ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope applique des principes stricts de privacy-by-design.
            Les détails sont fournis dans la Politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Modification des Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ces Conditions peuvent être mises à jour à tout moment. La version la
            plus récente publiée sur le site prévaut.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            12. Droit applicable et juridiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes Conditions sont régies par le droit français. Les tribunaux
            français sont exclusivement compétents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            13. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question contractuelle, contacter :
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
