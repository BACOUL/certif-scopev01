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
              className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Certif-Scope
            </h2>

            <p
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
            >
              Spend-based CO₂e attestation designed for procurement, banking and
              ESG screening workflows. Standardized, consistent and verifiable
              documentation.
            </p>
          </div>

          {/* PRODUCT */}
          <nav aria-label="Product navigation">
            <h3
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Product
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/product">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/fr/product/methodology">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/fr/product/methodology/compliance">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/fr/verify">
                  Verify Attestation
                </Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Company navigation">
            <h3
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Company
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/partners">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/fr/why-companies-ask">
                  Why Companies Ask for It
                </Link>
              </li>
              <li>
                <Link href="/fr/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Legal navigation">
            <h3
              className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4"
            >
              Legal
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/fr/legal">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/fr/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/fr/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/fr/cookies">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/fr/data-processing">
                  Data Processing Overview
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* DISCLAIMER */}
        <div
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          Indicative spend-based CO₂e estimate. Not audited, not CSRD/ESRS-compliant,
          no Scope 1–2, and not a substitute for a full greenhouse gas emissions
          inventory. Results depend entirely on user-provided data.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
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
              url: "https://certif-scope.com/fr",
              logo: "https://certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
            }
