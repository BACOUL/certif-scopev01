"use client";

import Link from "next/link";

export default function FooterFR() {
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
              Attestation CO₂e spend-based conçue pour les workflows d’achats,
              banques, assurances et screening ESG. Documentation standardisée,
              cohérente et vérifiable.
            </p>
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
                  data-i18n="footer.link.methodology"
                  href="/fr/product/methodology"
                >
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.compliance"
                  href="/fr/product/methodology/compliance"
                >
                  Conformité & périmètre
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.verify" href="/fr/verify">
                  Vérifier une attestation
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Navigation entreprise">
            <h3
              data-i18n="footer.company"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Entreprise
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.partners" href="/fr/partners">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.why" href="/fr/why-companies-ask">
                  Pourquoi c’est demandé
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.contact" href="/fr/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Navigation légale">
            <h3
              data-i18n="footer.legal"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Légal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
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
          Estimation CO₂e indicative en spend-based. Non auditée, non conforme
          CSRD/ESRS, sans Scopes 1–2, et ne remplace pas un inventaire complet
          des émissions de GES. Les résultats dépendent entièrement des données
          fournies par l’utilisateur.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. Tous droits réservés.
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
