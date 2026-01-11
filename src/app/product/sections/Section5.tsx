export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 py-28 bg-gradient-to-b from-white to-[#F8FAFC] dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700"
    >

      {/* TITLE */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Where Certif-Scope is Used
        </h2>
        <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The attestation is built for real operational workflows. It fits directly into
          procurement, financing, compliance and platform onboarding processes used across Europe.
        </p>
      </div>

      {/* USE CASE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* CARD 1 */}
        <div className="p-10 rounded-3xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#47B39C]/20 rounded-bl-3xl" />
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3 relative">
            Banking & Financial Institutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative">
            Banks increasingly require CO₂ disclosure for risk scoring. Certif-Scope provides 
            a standardized and verifiable indicator that can be validated independently by analysts.
          </p>
          <ul className="mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-2 relative">
            <li>• Loan applications</li>
            <li>• ESG risk scoring</li>
            <li>• Subsidies & grant eligibility</li>
            <li>• Due diligence for investments</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="p-10 rounded-3xl shadow-xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Procurement & Supplier Onboarding
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Enterprises and public buyers are increasingly demanding CO₂ metrics for vendor 
            qualification. Certif-Scope ensures suppliers can provide a compliant and accepted format.
          </p>
          <ul className="mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• RFP submissions</li>
            <li>• Buyer compliance validation</li>
            <li>• Vendor onboarding workflows</li>
            <li>• Supplier performance metrics</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="p-10 rounded-3xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Marketplaces & Digital Platforms
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Many platforms now require environmental indicators to list products or services. 
            Certif-Scope offers a ready-to-upload document accepted by these systems.
          </p>
          <ul className="mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• Online marketplaces</li>
            <li>• B2B platforms</li>
            <li>• Onboarding verification</li>
            <li>• ESG-compliant listings</li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="p-10 rounded-3xl shadow-xl bg-[#47B39C]/10 dark:bg-[#47B39C]/20 border border-[#47B39C]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Internal ESG Reporting
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Companies use Certif-Scope internally to provide a consistent CO₂ baseline for 
            reporting, investor communication and long-term sustainability metrics.
          </p>
          <ul className="mt-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>• Annual ESG reports</li>
            <li>• Board reporting</li>
            <li>• Impact measurement</li>
            <li>• Investor communication</li>
          </ul>
        </div>

        {/* CARD 5 */}
        <div className="p-10 rounded-3xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#47B39C]/10" />
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3 relative">
            Insurance & Risk Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative">
            Insurers use standardized CO₂ indicators to refine underwriting logic, premium 
            calculations and environmental exposure assessments.
          </p>
          <ul className="mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-2 relative">
            <li>• Environmental risk scoring</li>
            <li>• Policy eligibility</li>
            <li>• Green insurance products</li>
            <li>• Environmental exposure analysis</li>
          </ul>
        </div>

        {/* CARD 6 */}
        <div className="p-10 rounded-3xl shadow-xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Public Grants & Regulatory Programs
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Many public tenders and grants require applicants to provide CO₂ indicators. 
            Certif-Scope offers a fast and accepted solution for these submissions.
          </p>
          <ul className="mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• European subsidies</li>
            <li>• Local environmental programs</li>
            <li>• Public purchasing frameworks</li>
            <li>• Professional certifications</li>
          </ul>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="text-center mt-20">
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
