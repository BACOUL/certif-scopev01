export default function Section14() {
  return (
    <section
      id="s14"
      className="scroll-mt-24 py-32 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Industry-Specific Use Cases
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The Certif-Scope attestation is designed to meet compliance expectations of diverse
          industries across Europe. Whether used for procurement, banking approvals, insurance
          underwriting, marketplace onboarding, or ESG reporting, the standardized CO₂ footprint
          format accelerates decision-making and ensures universal acceptance.
        </p>
      </div>

      {/* INDUSTRY GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* INDUSTRY 1 */}
        <div className="p-10 rounded-3xl bg-[#F8FAFC] dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Construction & Real Estate
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
            Banks, insurers, and municipalities require environmental indicators for project approval.
            Certif-Scope provides a recognized CO₂ summary used during building permits, renovation
            grants, and supplier onboarding.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Loan applications & due diligence</li>
            <li>• Procurement of construction suppliers</li>
            <li>• Real estate portfolio sustainability scoring</li>
          </ul>
        </div>

        {/* INDUSTRY 2 */}
        <div className="p-10 rounded-3xl bg-[#0B3A63] text-white shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Retail, E-commerce & Marketplaces
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            Many online marketplaces require a CO₂ indicator during merchant registration.
            Certif-Scope provides a standardized attestation that platforms can verify instantly
            through embedded cryptographic signatures and QR codes.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Seller environmental compliance validation
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Trusted documentation for cross-border operations
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Automatic legitimacy for suppliers
            </li>
          </ul>
        </div>

        {/* INDUSTRY 3 */}
        <div className="p-10 rounded-3xl bg-[#F8FAFC] dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Manufacturing & Industrial Sectors
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
            Manufacturers often need a verifiable emissions summary to qualify for supplier networks,
            government incentives, or compliance scoring systems.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>• Qualification for industrial tenders</li>
            <li>• Supplier scoring & ESG audits</li>
            <li>• Compliance with cross-border procurement</li>
          </ul>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* BLOCK 4 */}
        <div className="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Banking, Finance & Insurance
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
            Financial institutions analyze CO₂ indicators during risk evaluation and sustainability
            scoring. Certif-Scope provides a document that integrates seamlessly into loan
            applications, underwriting processes, and portfolio management.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Risk scoring & sustainability checks</li>
            <li>• Loan applications & subsidies</li>
            <li>• Insurance underwriting validation</li>
          </ul>
        </div>

        {/* BLOCK 5 */}
        <div className="p-10 rounded-3xl bg-[#0B3A63] text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Public Sector & Institutions
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            Municipalities, public agencies and European programs increasingly require environmental
            disclosures for grants, subsidies, and project approvals. Certif-Scope provides a
            standardized, verifiable format aligned with administrative processes.
          </p>
          <ul className="space-y-3 text-sm">
            <li>• Eligibility for public funding</li>
            <li>• Supplier registration & validation</li>
            <li>• Administrative compliance submissions</li>
          </ul>
        </div>

      </div>

      {/* FOOTER — BACK TO SUMMARY */}
      <div className="text-center mt-24">
        <a
          href="#top"
          className="inline-block text-sm text-gray-500 hover:text-[#0B3A63] border border-gray-300 px-4 py-2 rounded-lg transition"
        >
          Back to summary ↑
        </a>
      </div>
    </section>
  );
        }
