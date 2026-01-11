export default function Section5() {
  return (
    <section id="s5" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-10">
        Use Cases
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-14">
        Certif-Scope adapts to multiple business situations where a verified and 
        standardized CO₂ indicator is required. From procurement validation to banking 
        processes and institutional reporting, the platform enables SMEs to comply 
        instantly with requirements that usually demand weeks of preparation.
      </p>

      {/* USE CASE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* USE CASE 1 */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Procurement Requirements
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Buyers and procurement teams increasingly require CO₂ indicators from suppliers.
            Certif-Scope provides a ready-to-submit, standardized attestation to avoid delays 
            during supplier onboarding or contract renewals.
          </p>
        </div>

        {/* USE CASE 2 */}
        <div className="p-10 rounded-2xl bg-[#0B3A63]/5 dark:bg-[#0B3A63]/20 border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Bank and Lender Requests
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            Credit applications and refinancing procedures often ask for sustainability indicators. 
            Certif-Scope provides an accepted, verifiable environmental attestation used during risk 
            evaluations and loan approvals.
          </p>
        </div>

        {/* USE CASE 3 */}
        <div className="p-10 rounded-2xl bg-[#0B3A63]/5 dark:bg-[#0B3A63]/10 border border-[#0B3A63]/10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Insurer Environmental Screening
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            Insurers increasingly request environmental data to adjust coverage or assess 
            operational risks. Certif-Scope provides a structured, validated CO₂ indicator 
            that fits into standard ESG screening processes.
          </p>
        </div>

        {/* USE CASE 4 */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Public Grant Applications
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Many public institutions require CO₂ indicators to validate eligibility for 
            grants, subsidies, or innovation programs. The Certif-Scope attestation 
            ensures clear and verifiable presentation of emission estimates.
          </p>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* USE CASE 5 */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
            Supplier Evaluation Scoring
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            ESG scoring platforms and large buyers often require environmental data to rate 
            suppliers. Certif-Scope offers a harmonized indicator that reduces friction and 
            accelerates acceptance.
          </p>
        </div>

        {/* USE CASE 6 */}
        <div className="p-10 rounded-2xl bg-[#0B3A63] text-white shadow-lg border border-[#0B3A63]">
          <h3 className="text-2xl font-semibold mb-4">
            Internal Sustainability Baseline
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Companies without ESG departments use Certif-Scope to establish their first 
            environmental baseline. The attestation can be tracked year-to-year to monitor 
            progress and inform sustainability strategies.
          </p>
        </div>

      </div>
    </section>
  );
}
