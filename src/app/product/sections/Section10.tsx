"use client";

export default function Section10() {
  return (
    <section
      id="s10"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-12">
        10 — Data Sources
      </h2>

      {/* UNIQUE LAYOUT — THREE-COLUMN FACT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BLOCK 1 */}
        <div className="p-8 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Validated Emission Factors
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Certif-Scope uses a maintained dataset of recognized factors sourced
            from European and international reference bodies. These datasets are
            curated for stability, transparency, and cross-country comparability.
          </p>

          <ul className="mt-4 text-gray-700 text-sm space-y-2">
            <li>• Government-published baseline indicators</li>
            <li>• Sector-level intensity factors</li>
            <li>• Publicly validated data repositories</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cross-European Market Data
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Financial activity categories rely on harmonized European market
            segmentation, enabling consistent interpretation across procurement
            offices, banks, and institutional reviewers in different countries.
          </p>

          <ul className="mt-4 text-gray-700 text-sm space-y-2">
            <li>• Pan-European sector classifications</li>
            <li>• Standardized economic activity codes</li>
            <li>• Consistent categorization across borders</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">

          {/* Accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-3">
              Verified Public References
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Certif-Scope relies exclusively on publicly accessible sources with
              traceable publication history, ensuring clarity for auditors and
              institutional stakeholders.
            </p>

            <ul className="mt-4 text-white/90 text-sm space-y-2">
              <li>• Stable public repositories</li>
              <li>• Versioned factor updates</li>
              <li>• Traceable publication dates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECOND ROW — SOURCE CATEGORIES */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* BLOCK A */}
        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm">
          <h4 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            What Data Is NOT Used
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm">
            To ensure neutrality and independence, Certif-Scope does not use
            proprietary datasets, estimations coming from private consultants,
            or values that cannot be verified by third parties.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• No private ESG consultancy datasets</li>
            <li>• No unpublished or unverifiable sources</li>
            <li>• No confidential or restricted databases</li>
          </ul>
        </div>

        {/* BLOCK B */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md">
          <h4 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Why These Sources Matter
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions must be able to independently verify the origin and
            credibility of every value shown in the attestation. Using only 
            transparent, public, and traceable data ensures compatibility with
            procurement reviews, audits, and cross-border applications.
          </p>

          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>• Reduces risk of rejection during onboarding</li>
            <li>• Ensures durability of the attestation</li>
            <li>• Enables independent validation by auditors</li>
          </ul>
        </div>
      </div>

      {/* CTA STRIP WITH PREMIUM DESIGN */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#15B097]/30 to-transparent"></div>

        <div className="relative z-10">
          <h4 className="text-2xl font-semibold mb-3">
            Built for Transparency and Reviewability
          </h4>
          <p className="text-white/90 max-w-4xl">
            Certif-Scope's reliance on stable, verifiable public sources ensures
            clarity and eliminates ambiguity for institutions reviewing the CO₂
            attestation, enabling seamless onboarding and compliance validation.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
