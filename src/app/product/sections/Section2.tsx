"use client";

export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-8">
        Key Benefits Summary
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-12">
        Certif-Scope allows organizations, suppliers, and SMEs to instantly produce a fully
        standardized CO₂ attestation accepted by procurement, banking and compliance teams
        across Europe. Below is a clear breakdown of the six primary benefits that make
        Certif-Scope the fastest and most institution-ready carbon attestation solution.
      </p>

      {/* GRID LAYOUT IN A DIFFERENT DESIGN: ICON-LEFT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* BENEFIT 1 */}
        <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] border border-[#0B3A63]/15 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#0B3A63] flex items-center justify-center text-white text-xl font-bold">
            1
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Immediate Availability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Generate a verifiable attestation in less than 30 seconds. Ideal for urgent
              requests, vendor onboarding, tender applications and bank due-diligence.
            </p>
          </div>
        </div>

        {/* BENEFIT 2 */}
        <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] border border-[#0B3A63]/15 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#3CAEC7] flex items-center justify-center text-white text-xl font-bold">
            2
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Standardized & Review-Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Structured explicitly for institutional review. Includes methodology, factors,
              verification ID, and emissions breakdown in a universally readable format.
            </p>
          </div>
        </div>

        {/* BENEFIT 3 */}
        <div className="flex items-start space-x-4 p-6 bg-white border border-[#0B3A63]/15 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#0B3A63] flex items-center justify-center text-white text-xl font-bold">
            3
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Independent Verification
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Each attestation contains a unique verification code + cryptographic
              integrity hash allowing third-parties to validate authenticity instantly.
            </p>
          </div>
        </div>

        {/* BENEFIT 4 */}
        <div className="flex items-start space-x-4 p-6 bg-white border border-[#3CAEC7]/20 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#3CAEC7] flex items-center justify-center text-white text-xl font-bold">
            4
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Cost-Effective & Scalable
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Removes the need for consultants, ESG audits or manual spreadsheets.
              Low-cost, fast, standardized, and suitable for suppliers of any size.
            </p>
          </div>
        </div>

        {/* BENEFIT 5 */}
        <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] border border-[#0B3A63]/15 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#0B3A63] flex items-center justify-center text-white text-xl font-bold">
            5
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Accepted Across Europe
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Meets expectations of European procurement offices, banks, insurers,
              public institutions and compliance auditors, ensuring minimal friction.
            </p>
          </div>
        </div>

        {/* BENEFIT 6 */}
        <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] border border-[#0B3A63]/15 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#3CAEC7] flex items-center justify-center text-white text-xl font-bold">
            6
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Transparent Methodology
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Each attestation includes complete documentation of calculations,
              emission factors, assumptions and methodology, ensuring full clarity.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14">
        <a
          href="#s3"
          className="inline-block px-6 py-3 bg-[#3CAEC7] text-white font-semibold rounded-lg shadow hover:bg-[#0B3A63] transition"
        >
          Why the product exists →
        </a>
      </div>
    </section>
  );
}
