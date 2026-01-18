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

        {/* MICRO-LABEL */}
        <p
          data-i18n="footer.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wider text-center mb-8"
        >
          Institutional Footer
        </p>

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
              Spend-based CO₂e Attestation designed for procurement, banking
              and ESG workflows. Standardized, consistent and instantly verifiable.
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
              <li><Link data-i18n="footer.link.overview" href="/product">Overview</Link></li>
              <li><Link data-i18n="footer.link.methodology" href="/product/methodology">Methodology</Link></li>
              <li><Link data-i18n="footer.link.compliance" href="/product/methodology/compliance">Compliance</Link></li>
              <li><Link data-i18n="footer.link.sample" href="/sample.pdf">Sample Attestation</Link></li>
              <li><Link data-i18n="footer.link.verify" href="/verify">Verify Attestation</Link></li>
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
              <li><Link data-i18n="footer.link.partners" href="/partners">Partnerships</Link></li>
              <li><Link data-i18n="footer.link.why" href="/why-companies-ask">Why Companies Ask for It</Link></li>
              <li><Link data-i18n="footer.link.contact" href="/contact">Contact</Link></li>
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
              <li><Link data-i18n="footer.link.legal" href="/legal">Legal Notice</Link></li>
              <li><Link data-i18n="footer.link.privacy" href="/privacy">Privacy Policy</Link></li>
              <li><Link data-i18n="footer.link.terms" href="/terms">Terms of Service</Link></li>
              <li><Link data-i18n="footer.link.cookies" href="/cookies">Cookie Policy</Link></li>
              <li><Link data-i18n="footer.link.dpo" href="/data-processing">Data Processing Overview</Link></li>
            </ul>
          </nav>

        </div>

        {/* TEST PDF BUTTON – TEMPORAIRE */}
        <div className="mt-12 flex justify-center">
          <button
            className="px-4 py-2 text-sm border border-gray-400 dark:border-gray-500 rounded text-gray-700 dark:text-gray-300"
            onClick={async () => {
              const res = await fetch("/api/generate-pdf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  company_name: "TEST COMPANY",
                  company_identifier: "TEST-ID",
                  country: "FR",
                  period: "2024",
                  emissions_value: "1.23",
                  attestation_id: "TEST-001",
                  generated_at: new Date().toISOString(),
                  document_hash: "test"
                })
              });

              if (!res.ok) {
                alert("Erreur génération PDF");
                return;
              }

              const blob = await res.blob();
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "test.pdf";
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            TEST PDF (nouveau moteur)
          </button>
        </div>

        {/* DISCLAIMER */}
        <div
          data-i18n="footer.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          Indicative spend-based CO₂e estimate. Not audited, not CSRD/ESRS-compliant, no Scope 1–2,
          and not a substitute for a full emissions inventory. Values depend on user-provided data.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>

        {/* JSON-LD SCHEMA */}
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
              sameAs: [],
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
            })
          }}
        />
      </div>
    </footer>
  );
      }
