"use client";

export default function Section3() {
  return (
    <section id="s3" className="scroll-mt-24">

      {/* SECTION HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-4">
          Why the Product Exists
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope was created to solve a real and growing problem in procurement and compliance:
          organizations increasingly require carbon documentation, yet most SMEs cannot afford ESG
          consultants, long audits or complex carbon accounting systems. Certif-Scope provides a fast,
          standardized, and universally accepted alternative.
        </p>
      </div>

      {/* DESIGN STYLE: HORIZONTAL INFO STRIPS WITH ICON-LEFT PANELS */}
      <div className="space-y-10">

        {/* PROBLEM 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-[#F5F7FA] border border-[#0B3A63]/15 p-6 rounded-xl shadow-sm">
          <div className="w-14 h-14 bg-[#0B3A63] text-white text-2xl font-bold flex items-center justify-center rounded-lg mr-6 mb-4 md:mb-0">
            1
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Carbon data is now requested everywhere
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Tenders, procurement onboarding, grant applications, banks, insurers, and major clients now
              systematically request CO₂ indicators. Without them, suppliers are blocked or rejected from
              strategic opportunities.
            </p>
          </div>
        </div>

        {/* PROBLEM 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white border border-[#0B3A63]/20 p-6 rounded-xl shadow-sm">
          <div className="w-14 h-14 bg-[#3CAEC7] text-white text-2xl font-bold flex items-center justify-center rounded-lg mr-6 mb-4 md:mb-0">
            2
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Full ESG audits are expensive and slow
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Traditional ESG audits require consultants, interviews, data extraction and several weeks of review.
              Small companies and freelancers rarely have the budget or time for such processes.
            </p>
          </div>
        </div>

        {/* PROBLEM 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-[#F5F7FA] border border-[#3CAEC7]/20 p-6 rounded-xl shadow-sm">
          <div className="w-14 h-14 bg-[#0B3A63] text-white text-2xl font-bold flex items-center justify-center rounded-lg mr-6 mb-4 md:mb-0">
            3
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              SMEs lack standardized reporting tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Many SMEs want to comply but lack a standardized, recognized format. PDF generators and manual
              spreadsheets are rejected by auditors because they lack traceability, methodology and verification.
            </p>
          </div>
        </div>

        {/* PROBLEM 4 */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white border border-[#0B3A63]/15 p-6 rounded-xl shadow-sm">
          <div className="w-14 h-14 bg-[#3CAEC7] text-white text-2xl font-bold flex items-center justify-center rounded-lg mr-6 mb-4 md:mb-0">
            4
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Verification is almost never available
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Most existing carbon reports cannot be independently verified. Certif-Scope embeds a unique
              verification ID and cryptographic integrity hash so institutions can confirm authenticity instantly.
            </p>
          </div>
        </div>

      </div>

      {/* TRANSITION CTA TO SECTION 4 */}
      <div className="mt-14">
        <a
          href="#s4"
          className="inline-block px-6 py-3 bg-[#0B3A63] text-white font-semibold rounded-lg shadow hover:bg-[#3CAEC7] transition"
        >
          Discover the solution →
        </a>
      </div>

    </section>
  );
}
