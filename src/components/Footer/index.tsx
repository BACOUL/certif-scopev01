"use client";

import Link from "next/link";

export default function Footer() {
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
            <h2 className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4">
              Certif-Scope
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Spend-based CO₂e Attestation designed for procurement, banking
              and ESG workflows. Standardized, consistent and instantly verifiable.
            </p>
          </div>

          {/* PRODUCT */}
          <nav aria-label="Product navigation">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Product
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/product">Overview</Link></li>
              <li><Link href="/product/methodology">Methodology</Link></li>
              <li><Link href="/product/methodology/compliance">Compliance</Link></li>
              <li><Link href="/sample.pdf">Sample Attestation</Link></li>
              <li><Link href="/verify">Verify Attestation</Link></li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Company navigation">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/partners">Partnerships</Link></li>
              <li><Link href="/why-companies-ask">Why Companies Ask for It</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Legal navigation">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Legal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </nav>

        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Indicative spend-based CO₂e estimate. Not audited and not CSRD/ESRS-compliant.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>

        {/* JSON-LD SCHEMA ENRICHED */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://certif-scope.com",
              logo: "https://certif-scope.com/logo.png",
              email: "contact@certif-scope.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3 rue de l'Église de Louppy",
                addressLocality: "Les Hauts-de-Chée",
                postalCode: "55000",
                addressCountry: "FR"
              },
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "contact@certif-scope.com"
              }]
            }),
          }}
        />
      </div>
    </footer>
  );
      }
