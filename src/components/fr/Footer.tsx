// PATH: src/components/fr/Footer.tsx
"use client";

import Link from "next/link";

export default function FooterFR() {
  const year = new Date().getFullYear();

  const linkBase =
    "text-sm text-gray-600 hover:text-[#0B3A63] dark:text-gray-300 dark:hover:text-white transition-colors";

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

            {/* PRIMARY FR SEO LINK (PILLAR) */}
            <div className="mt-5">
              <Link
                href="/fr/bilan-carbone-pme/"
                className="inline-block text-sm font-semibold text-[#0B3A63] underline underline-offset-4 hover:text-[#15B097] transition-colors"
                aria-label="PME : on vous demande un bilan carbone"
              >
                PME : on vous demande un bilan carbone →
              </Link>
            </div>

            {/* QUICK ACTIONS (EXISTING) */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
              >
                Générer →
              </Link>
              <Link
                href="/fr/pricing/"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Prix
              </Link>
              <Link
                href="/verify"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Vérifier
              </Link>
            </div>
          </div>

          {/* PRODUCT (EXISTING ONLY) */}
          <nav aria-label="Navigation produit">
            <h3
              data-i18n="footer.product"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Produit
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.overview"
                  href="/fr/product/"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.pricing"
                  href="/fr/pricing/"
                >
                  Prix
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/generate/">
                  Générer une attestation
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.verify"
                  href="/verify"
                >
                  Vérifier un document
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  className={linkBase}
                  data-i18n="footer.link.compliance"
                  href="/fr/product/compliance/"
                >
                  Conformité &amp; périmètre
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.methodology"
                  href="/fr/product/methodology/"
                >
                  Méthodologie (spend-based)
                </Link>
              </li>
            </ul>
          </nav>

          {/* GUIDES (EXISTING ONLY) */}
          <nav aria-label="Cas concrets bilan carbone et exigences CO₂e">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Cas concrets (France)
            </h3>

            <ul className="space-y-2">
              <li>
                <Link className={linkBase} href="/fr/bilan-carbone-pme/">
                  PME : on vous demande un bilan carbone
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/bilan-carbone-appel-offres/">
                  Appel d’offres : quoi fournir
                </Link>
              </li>

              <li className="pt-2">
                <Link className={linkBase} href="/fr/why-companies-ask/">
                  Pourquoi on vous le demande
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  href="/fr/why-companies-ask/attestation-carbone-appel-offres/"
                >
                  Exemple appel d’offres (cas pratique)
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY & LEGAL (EXISTING ONLY) */}
          <nav aria-label="Navigation entreprise et légal">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Entreprise &amp; légal
            </h3>

            <ul className="space-y-2">
              <li>
                <Link className={linkBase} href="/fr/partners/">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/contact/">
                  Contact
                </Link>
              </li>

              <li className="pt-2">
                <Link className={linkBase} href="/fr/legal/">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/privacy/">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/terms/">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/cookies/">
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/data-processing/">
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
          Estimation CO₂e indicative en spend-based (dépenses × facteurs
          d’émission). Non auditée, non CSRD/ESRS, sans calcul des Scopes 1–2, et
          ne remplace pas un inventaire complet des émissions de GES. Les
          résultats dépendent entièrement des données fournies par l’utilisateur.
        </div>

        {/* BACK TO TOP BUTTON (SITE COLORS) */}
        <div className="mt-8 flex justify-center">
          <a
            href="#top"
            className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
            aria-label="Revenir en haut de page"
          >
            ↑ Revenir en haut
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} Certif-Scope. Tous droits réservés.
          </p>
        </div>

        {/* JSON-LD — ORGANIZATION (MINIMAL) */}
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
