export default function Section1() {
  return (
    <section
      id="s1"
      className="
        scroll-mt-24 
        bg-white 
        dark:bg-gray-900 
        border border-gray-100 dark:border-gray-800 
        rounded-2xl 
        p-10 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
      "
    >

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-[#0B3A63] mb-6 tracking-tight">
        Product Overview
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-10">
        Certif-Scope provides an instantly generated, institution-grade CO₂ attestation 
        built for procurement, banking, insurance, compliance teams and European public-sector 
        workflows. The attestation follows a standardized, verifiable and audit-ready format.
      </p>

      {/* 3 PREMIUM FEATURE BLOCKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 bg-[#F8FAFC] dark:bg-gray-800 border border-[#0B3A63]/10 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
            Institutional Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The output replicates the document structure expected by procurement and financial 
            due-diligence teams: identification, methodology, emission factors, results table, 
            verification hash and timestamped signature reference.
          </p>
        </div>

        <div className="p-6 bg-[#F8FAFC] dark:bg-gray-800 border border-[#15B097]/20 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#15B097] mb-3">
            30-Second Generation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Enter annual spending → Certif-Scope applies validated emission factors and instantly 
            generates a verified PDF. No consultants. No delays. No manual spreadsheets.
          </p>
        </div>

        <div className="p-6 bg-[#F8FAFC] dark:bg-gray-800 border border-[#0B3A63]/20 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
            Verifiable Integrity
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Each attestation includes a unique verification ID and cryptographic hash, allowing 
            banks, auditors and partners to authenticate the document independently—online or offline.
          </p>
        </div>

      </div>

      {/* RETURN TO SUMMARY BUTTON (DISCREET STYLE) */}
      <div className="mt-12">
        <a
          href="#top"
          className="
            inline-flex items-center px-4 py-2 
            text-sm font-medium 
            text-[#0B3A63] 
            border border-[#0B3A63]/20 
            rounded-md 
            hover:bg-[#0B3A63]/5 
            transition
          "
        >
          Back to Summary
        </a>
      </div>

    </section>
  );
}
