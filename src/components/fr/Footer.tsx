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
                href="/fr/bilan-carbone-pme"
                className="inline-block text-sm font-semibold text-[#0B3A63] underline hover:text-[#1FB6C1] transition"
                aria-label="Bilan carbone PME : guide de référence (page pilier)"
              >
                Bilan carbone PME : guide de référence →
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

            <ul className="space-y-2">
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.overview"
                  href="/fr/product"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.pricing"
                  href="/fr/pricing"
                >
                  Prix
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.methodology"
                  href="/fr/product/methodology"
                >
                  Méthodologie (spend-based)
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.compliance"
                  href="/fr/product/compliance"
                >
                  Conformité &amp; périmètre
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  data-i18n="footer.link.verify"
                  href="/fr/verify"
                >
                  Vérifier un document
                </Link>
              </li>

              {/* Institutional trust shortcuts (FR-first) */}
              <li className="pt-2">
                <Link className={linkBase} href="/fr/verification-attestation">
                  Vérification : principes &amp; usage
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/sources-facteurs-emission">
                  Sources des facteurs d’émission
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/limites-du-modele">
                  Limites du modèle (important)
                </Link>
              </li>
            </ul>
          </nav>

          {/* GUIDES */}
          <nav aria-label="Guides bilan carbone et exigences CO₂e">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Guides (bilan carbone)
            </h3>

            <ul className="space-y-2">
              {/* Pillar first (strong internal signal) */}
              <li>
                <Link className={linkBase} href="/fr/bilan-carbone-pme">
                  Bilan carbone PME : guide de référence
                </Link>
              </li>

              {/* Cluster (satellites) */}
              <li>
                <Link className={linkBase} href="/fr/bilan-carbone-fournisseur">
                  Bilan carbone fournisseur : quoi fournir, quoi dire
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/bilan-carbone-appel-offres">
                  Bilan carbone en appel d’offres : répondre sans surdimensionner
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/scope-1-2-3-explication">
                  Scopes 1/2/3 : explication simple (PME)
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/difference-bilan-carbone-attestation">
                  Différence : attestation vs bilan carbone complet
                </Link>
              </li>

              {/* Existing guide hub (kept for long-tail) */}
              <li className="pt-2">
                <Link className={linkBase} href="/fr/why-companies-ask">
                  Guides : pourquoi les entreprises le demandent
                </Link>
              </li>
              <li>
                <Link
                  className={linkBase}
                  href="/fr/why-companies-ask/attestation-carbone-pme"
                >
                  Cas pratique : que fournir quand on n’a pas de bilan complet
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY & LEGAL */}
          <nav aria-label="Navigation entreprise et légal">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Entreprise &amp; légal
            </h3>

            <ul className="space-y-2">
              <li>
                <Link className={linkBase} href="/fr/partners">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/contact">
                  Contact
                </Link>
              </li>

              {/* Compliance / trust pages (FR-first) */}
              <li className="pt-2">
                <Link className={linkBase} href="/fr/product/compliance">
                  Cadre &amp; conformité (périmètre légal)
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/product/methodology">
                  Méthodologie (détails)
                </Link>
              </li>

              <li className="pt-2">
                <Link className={linkBase} href="/fr/legal">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/privacy">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/terms">
                  Conditions d’utilisation
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/cookies">
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link className={linkBase} href="/fr/data-processing">
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
          un inventaire complet des émissions de GES. Les résultats dépendent
          entièrement des données fournies par l’utilisateur.
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
