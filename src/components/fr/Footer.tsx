"use client";

import Link from "next/link";

export default function FooterFR() {
  // ✅ ROUTES FR — alignées avec HeaderFR refait
  // compliance => /fr/product/compliance
  const routes = {
    home: "/fr",
    product: "/fr/product",
    methodology: "/fr/product/methodology",
    compliance: "/fr/product/compliance",
    verify: "/fr/verify",
    pricing: "/fr/pricing",
    partners: "/fr/partners",
    whyCompaniesAsk: "/fr/why-companies-ask",
    contact: "/fr/contact",
    legal: "/fr/legal",
    privacy: "/fr/privacy",
    terms: "/fr/terms",
    cookies: "/fr/cookies",
    dataProcessing: "/fr/data-processing",

    // ✅ HUB + 5 PAGES “Comprendre les demandes CO₂e”
    understandHub: "/fr/why-companies-ask",
    understand1: "/fr/why-companies-ask/attestation-carbone-fournisseur",
    understand2: "/fr/why-companies-ask/attestation-carbone-appel-offres",
    understand3: "/fr/why-companies-ask/exigences-co2e-banques-assurances",
    understand4: "/fr/why-companies-ask/attestation-carbone-pme",
    understand5: "/fr/why-companies-ask/preuve-carbone-entreprise",
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* BRANDING */}
          <div className="md:col-span-1">
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
                <Link href={routes.product}>Présentation</Link>
              </li>
              <li>
                <Link href={routes.methodology}>Méthodologie</Link>
              </li>
              <li>
                <Link href={routes.compliance}>Cadre &amp; conformité</Link>
              </li>
              <li>
                <Link href={routes.verify}>Vérifier une attestation</Link>
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
                <Link href={routes.partners}>Partenariats</Link>
              </li>
              <li>
                <Link href={routes.whyCompaniesAsk}>
                  Pourquoi les entreprises le demandent
                </Link>
              </li>
              <li>
                <Link href={routes.contact}>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* COMPRENDRE */}
          <nav aria-label="Comprendre les demandes CO₂e">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Comprendre les demandes CO₂e
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href={routes.understandHub}>Vue d’ensemble (guide)</Link>
              </li>
              <li>
                <Link href={routes.understand1}>Attestation carbone fournisseur</Link>
              </li>
              <li>
                <Link href={routes.understand2}>Attestation carbone appel d’offres</Link>
              </li>
              <li>
                <Link href={routes.understand3}>Exigences CO₂e banques &amp; assurances</Link>
              </li>
              <li>
                <Link href={routes.understand4}>Attestation carbone pour PME</Link>
              </li>
              <li>
                <Link href={routes.understand5}>Preuve carbone d’entreprise</Link>
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
                <Link href={routes.legal}>Mentions légales</Link>
              </li>
              <li>
                <Link href={routes.privacy}>Politique de confidentialité</Link>
              </li>
              <li>
                <Link href={routes.terms}>Conditions d’utilisation</Link>
              </li>
              <li>
                <Link href={routes.cookies}>Politique cookies</Link>
              </li>
              <li>
                <Link href={routes.dataProcessing}>Traitement des données</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Estimation CO₂e indicative basée sur les dépenses. Ne constitue ni un
          rapport CSRD/ESRS, ni un inventaire GES audité. Aucun Scope 1–2. Les
          résultats dépendent exclusivement des données financières déclarées
          par l’utilisateur.
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
```0
