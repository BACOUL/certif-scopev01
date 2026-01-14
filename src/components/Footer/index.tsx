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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRANDING */}
          <div>
            <h2
              data-i18n="footer.branding.title"
              className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Certif-Scope
            </h2>

            <p
              data-i18n="footer.branding.text"
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
            >
              Instant spend-based CO₂e Attestation for procurement, banking and institutional workflows. 
              Standardized format, verifiable metadata and consistent cross-supplier structure.
            </p>
          </div>

          {/* PRODUCT LINKS */}
          <nav aria-label="Product navigation">
            <h3
              data-i18n="footer.product.title"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Product
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/product" aria-label="Product Overview" data-i18n="footer.product.overview">Overview</Link></li>
              <li><Link href="/product/methodology" aria-label="Methodology" data-i18n="footer.product.methodology">Methodology</Link></li>
              <li><Link href="/product/regulations" aria-label="Regulations" data-i18n="footer.product.regulations">Regulations</Link></li>
              <li><Link href="/product/limitations" aria-label="Limitations" data-i18n="footer.product.limitations">Limitations</Link></li>
              <li><Link href="/pricing" aria-label="Pricing" data-i18n="footer.product.pricing">Pricing</Link></li>
              <li><Link href="/verify" aria-label="Verify Attestation" data-i18n="footer.product.verify">Verify Attestation</Link></li>
            </ul>
          </nav>

          {/* DOCUMENTATION */}
          <nav aria-label="Documentation navigation">
            <h3
              data-i18n="footer.docs.title"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Documentation
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/sample-pdf" aria-label="Sample PDF" data-i18n="footer.docs.sample">Sample Attestation</Link></li>
              <li><Link href="/api" aria-label="API Documentation" data-i18n="footer.docs.api">API (optional)</Link></li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Legal navigation">
            <h3
              data-i18n="footer.legal.title"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Legal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/legal" aria-label="Legal Notice" data-i18n="footer.legal.notice">Legal Notice</Link></li>
              <li><Link href="/privacy" aria-label="Privacy Policy" data-i18n="footer.legal.privacy">Privacy Policy</Link></li>
              <li><Link href="/terms" aria-label="Terms & Conditions" data-i18n="footer.legal.terms">Terms & Conditions</Link></li>
            </ul>
          </nav>

        </div>

        {/* DISCLAIMER */}
        <div
          data-i18n="footer.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          Certif-Scope provides an indicative, spend-based CO₂e Attestation. Not a CSRD/ESRS disclosure, not audited and not a regulatory emissions inventory. Results depend on user-provided spending data.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p
            data-i18n="footer.copyright"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>

        {/* JSON-LD ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://certif-scope.com",
              logo: "https://certif-scope.com/logo.png",
              description:
                "Instant spend-based CO₂e Attestation for procurement, banking and ESG screening workflows.",
              sameAs: [],
            }),
          }}
        />

      </div>
    </footer>
  );
        }
