"use client";

export default function Section4() {
  return (
    <section id="s4" className="scroll-mt-24">

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-4">
          Solution Provided
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope delivers a fast, standardized and verifiable CO₂ attestation designed for 
          procurement, financial institutions, insurers and compliance teams. The product replaces 
          long ESG audits with an instant, automated and traceable alternative built for SMEs of 
          all sizes.
        </p>
      </div>

      {/* UNIQUE DESIGN FOR THIS SECTION */}
      {/* SIDE-BY-SIDE PREMIUM LAYOUT: LEFT TEXT PANEL + RIGHT FEATURE LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT PANEL */}
        <div className="bg-[#0B3A63] text-white rounded-2xl p-10 shadow-xl border border-[#0B3A63]/30">
          <h3 className="text-2xl font-semibold mb-4">A complete institutional-ready CO₂ document</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            Instead of waiting weeks for an audit, Certif-Scope instantly generates a 
            carbon attestation including methodology, emission factors, calculations and 
            a verification hash. All elements follow a standardized structure accepted by 
            banks, procurement teams, auditors and insurance partners.
          </p>

          <ul className="space-y-4 text-white/90 text-sm">
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 bg-[#3CAEC7] rounded-full mt-1 mr-3"></span>
              Official PDF format accepted in procurement and compliance workflows
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 bg-[#3CAEC7] rounded-full mt-1 mr-3"></span>
              Automatic calculation based on spend-based methodology aligned with GHG Protocol
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 bg-[#3CAEC7] rounded-full mt-1 mr-3"></span>
              Unique verification identifier + cryptographic integrity hash
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 bg-[#3CAEC7] rounded-full mt-1 mr-3"></span>
              Clear transparency section explaining methodology and data sources
            </li>
          </ul>
        </div>

        {/* RIGHT PANEL — FEATURE BOXES */}
        <div className="space-y-8">

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-[#0B3A63]/15">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Instant generation process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Enter annual spending categories, validate input, and download a complete CO₂ attestation 
              in less than a minute. No consultants, no delays, no manual formatting.
            </p>
          </div>

          <div className="bg-[#F5F7FA] rounded-xl shadow-md p-8 border border-[#3CAEC7]/20">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Universally compatible PDF
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The output document is structured according to common institutional formats and integrates 
              with procurement portals, grant applications, banking files, insurance reviews, and ESG scoring tools.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-[#0B3A63]/10">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Independent verification system
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Verifiers can check the document’s authenticity using the embedded verification code 
              and cryptographic hash — no login or support request required.
            </p>
          </div>

        </div>
      </div>

      {/* CALL TO ACTION → Links to next section */}
      <div className="mt-14">
        <a
          href="#s5"
          className="inline-block px-6 py-3 bg-[#3CAEC7] text-white font-semibold rounded-lg shadow hover:bg-[#0B3A63] transition"
        >
          Explore the use cases →
        </a>
      </div>

    </section>
  );
}
