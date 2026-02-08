"use client";

import Link from "next/link";

export default function FooterEN() {
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
              Spend-based CO₂e attestation designed for procurement, banking,
              insurance and ESG screening workflows. Standardized, consistent and
              verifiable documentation.
            </p>
          </div>

          {/* PRODUCT */}
          <nav aria-label="Product navigation">
            <h3
              data-i18n="footer.product"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Product
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.overview" href="/product">
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.methodology"
                  href="/product/methodology"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.compliance"
                  href="/product/compliance"
                >
                  Compliance & scope
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.verify" href="/verify">
                  Verify an attestation
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Company navigation">
            <h3
              data-i18n="footer.company"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Company
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.partners" href="/partners">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.why" href="/why-companies-ask">
                  Why companies ask
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.why.supplier"
                  href="/why-companies-ask/supplier-carbon-attestation"
                >
                  Supplier carbon attestation
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.why.tender"
                  href="/why-companies-ask/carbon-attestation-tender"
                >
                  Carbon attestation for tenders
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.why.finance"
                  href="/why-companies-ask/co2-requirements-banks-insurers"
                >
                  CO₂ requirements for banks & insurers
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.why.sme"
                  href="/why-companies-ask/carbon-attestation-smes"
                >
                  Carbon attestation for SMEs
                </Link>
              </li>
              <li>
                <Link
                  data-i18n="footer.link.why.proof"
                  href="/why-companies-ask/company-carbon-proof"
                >
                  Company carbon proof
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.contact" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Legal navigation">
            <h3
              data-i18n="footer.legal"
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Legal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link data-i18n="footer.link.legal" href="/legal">
                  Legal notice
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.privacy" href="/privacy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.terms" href="/terms">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.cookies" href="/cookies">
                  Cookies policy
                </Link>
              </li>
              <li>
                <Link data-i18n="footer.link.dpo" href="/data-processing">
                  Data processing (overview)
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
          Indicative spend-based CO₂e estimate. Not audited, not CSRD/ESRS
          compliant, excludes Scopes 1–2, and does not replace a full greenhouse
          gas inventory. Results fully depend on user-provided data.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
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
