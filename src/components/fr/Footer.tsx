"use client";

import Link from "next/link";

export default function FooterFR() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRANDING */}
          <div>
            <h2 className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4">
              Certif-Scope
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Attestation CO₂e indicative basée sur les dépenses, conçue pour les
              appels d’offres, les banques et les processus de screening ESG.
              Format standardisé, cohérent et vérifiable.
            </p>
          </div>

          {/* PRODUIT */}
          <nav aria-label="Navigation produit">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Produit
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/product">Présentation</Link>
              </li>
              <li>
                <Link href="/fr/product/methodology">Méthodologie</Link>
              </li>
              <li>
                <Link href="/fr/product/methodology/compliance">
                  Cadre & conformité
                </Link>
              </li>
              <li>
                <Link href="/fr/verify">Vérifier une attestation</Link>
              </li>
            </ul>
          </nav>

          {/* ENTREPRISE */}
          <nav aria-label="Navigation entreprise">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Entreprise
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/partners">Partenariats</Link>
              </li>
              <li>
                <Link href="/fr/why-companies-ask">
                  Pourquoi les entreprises le demandent
                </Link>
              </li>
              <li>
                <Link href="/fr/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* JURIDIQUE */}
          <nav aria-label="Navigation juridique">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Juridique
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/legal">Mentions légales</Link>
              </li>
              <li>
                <Link href="/fr/privacy">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="/fr/terms">Conditions d’utilisation</Link>
              </li>
              <li>
                <Link href="/fr/cookies">Politique cookies</Link>
              </li>
              <li>
                <Link href="/fr/data-processing">
                  Traitement des données
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Estimation CO₂e indicative basée sur les dépenses.
          Ne constitue ni un rapport CSRD/ESRS, ni un inventaire GES audité.
          Aucun Scope 1–2. Les résultats dépendent exclusivement des données
          financières déclarées par l’utilisateur.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. Tous droits réservés.
          </p>
        </div>

        {/* JSON-LD — ORGANIZATION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/fr",
              logo: "https://www.certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
          }
