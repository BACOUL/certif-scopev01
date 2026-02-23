// PATH: src/components/fr/Footer.tsx
"use client";

import Link from "next/link";

export default function FooterFR() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      role="contentinfo"
      data-section="footer"
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRANDING */}
          <div>
            <h2
              data-i18n="footer.brand"
              className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Certif-Scope
            </h2>

            <p
              data-i18n="footer.brand.desc"
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
            >
              Document CO₂e indicatif (spend-based) pour répondre aux exigences
              fournisseurs : justificatif CO₂, preuve carbone, screening ESG,
              appels d’offres, banques et assurances. Format standardisé et
              vérifiable.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/fr/generate"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md bg-[#15B097] text-white hover:opacity-95 transition"
              >
                Générer
              </Link>
              <Link
                href="/fr/verify"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Vérifier
              </Link>
            </div>
          </div>

          {/* PRODUCT */}
          <nav aria-label="Navigation produit">
            <h3
              data-i18n="footer.product"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Produit
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.overview" href="/fr/product">
                  Présentation
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.pricing"
                  href="/fr/pricing"
                >
                  Prix
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.methodology"
                  href="/fr/product/methodology"
                >
                  Méthodologie (spend-based)
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.compliance"
                  href="/fr/product/compliance"
                >
                  Conformité & périmètre
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.verify" href="/fr/verify">
                  Vérifier un document
                </Link>
              </li>
            </ul>
          </nav>

          {/* GUIDES (SEO) */}
          <nav aria-label="Guides : exigences CO₂ fournisseurs">
            <h3
              data-i18n="footer.guides"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Guides (exigences CO₂)
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.why" href="/fr/why-companies-ask">
                  Pourquoi un client le demande
                </Link>
              </li>

              <li>
                <Link
                  data-i18n="footer.link.why.supplier"
                  href="/fr/why-companies-ask/attestation-carbone-fournisseur"
                >
                  Justificatif CO₂ fournisseur
                </Link>
              </li>

              <li>
                <Link
                  data-i18n="footer.link.why.tender"
                  href="/fr/why-companies-ask/attestation-carbone-appel-offres"
                >
                  Justificatif CO₂ pour appel d’offres
                </Link>
              </li>

              <li>
                <Link
                  data-i18n="footer.link.why.finance"
                  href="/fr/why-companies-ask/exigences-co2-banques-assurances"
                >
                  Exigences CO₂ banque & assurance
                </Link>
              </li>

              <li>
                <Link
                  data-i18n="footer.link.why.sme"
                  href="/fr/why-companies-ask/attestation-carbone-pme"
                >
                  Que fournir quand on est une PME
                </Link>
              </li>

              <li>
                <Link
                  data-i18n="footer.link.why.proof"
                  href="/fr/why-companies-ask/preuve-carbone-entreprise"
                >
                  Preuve carbone / justificatif : format minimal
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY + LEGAL */}
          <nav aria-label="Entreprise et légal">
            <h3
              data-i18n="footer.company_legal"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Entreprise & légal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.partners" href="/fr/partners">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.contact" href="/fr/contact">
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link data-i18n="footer.link.legal" href="/fr/legal">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.privacy" href="/fr/privacy">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.terms" href="/fr/terms">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.cookies" href="/fr/cookies">
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.dpo" href="/fr/data-processing">
                  Traitement des données (aperçu)
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* DISCLAIMER */}
        <div
          data-i18n="footer.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          Estimation CO₂e indicative en spend-based (dépenses × facteurs d’émission).
          Non auditée, non CSRD/ESRS, sans calcul des Scopes 1–2, et ne remplace pas
          un inventaire complet des émissions de GES. Les résultats dépendent des
          données fournies par l’utilisateur.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} Certif-Scope. Tous droits réservés.
          </p>
        </div>

        {/* JSON-LD — ORGANIZATION (MINIMAL, IA-SAFE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
              logo: "https://www.certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
}
