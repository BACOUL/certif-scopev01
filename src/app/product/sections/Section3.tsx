"use client";

export default function Section3() {
  return (
    <section id="s3" className="scroll-mt-24">

      {/* TITLE BLOCK WITH LEFT ACCENT BAR */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#47B39C] to-[#0B3A63]"></div>
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Why the Product Exists
        </h2>
      </div>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mb-12 leading-relaxed">
        Certif-Scope was created to solve a structural problem: small and medium
        enterprises across Europe are increasingly required to provide CO₂ emission
        data during procurement, banking checks, risk assessments and compliance
        workflows — yet have no fast, affordable or standardized way to generate
        such attestations without hiring consultants or conducting full ESG audits.
      </p>

      {/* 3-PANEL VISUAL ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* PAIN POINT 1 */}
        <div className="p-8 rounded-2xl bg-[#F5FBFB] dark:bg-gray-800 border border-[#CDEDEE] shadow">
          <div className="text-[#4CC4CF] text-5xl font-bold mb-4">Problem 01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Rising Compliance Pressure
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Buyers, banks and insurers now request carbon indicators for risk
            management and regulatory alignment — even from small suppliers.
          </p>
        </div>

        {/* PAIN POINT 2 */}
        <div className="p-8 rounded-2xl bg-[#F8F9FF] dark:bg-gray-800 border border-[#DDE2FF] shadow">
          <div className="text-[#0B3A63] text-5xl font-bold mb-4">Problem 02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Lack of Standardized Format
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Most SMEs cannot produce ESG-aligned documentation that meets the
            format expected by auditors, procurement departments or financial institutions.
          </p>
        </div>

        {/* PAIN POINT 3 */}
        <div className="p-8 rounded-2xl bg-[#F0FFF7] dark:bg-gray-800 border border-[#CDEDDD] shadow">
          <div className="text-[#47B39C] text-5xl font-bold mb-4">Problem 03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Expensive Consultancy Processes
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Traditional ESG audits take weeks, require multiple interviews and cost
            thousands of euros — unsustainable for small organizations.
          </p>
        </div>

      </div>

      {/* LARGE FEATURED BLOCK */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-[#F5F9FE] to-[#E6F7F4] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-10 shadow-lg border border-[#D3E2EF] mb-12">

        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Certif-Scope Exists To Close This Gap
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-4xl">
          The platform delivers an immediate, standardized and institution-ready
          CO₂ attestation that eliminates the need for consultants. Companies enter
          their expense data, and Certif-Scope automatically applies a recognized
          spend-based methodology aligned with the GHG Protocol, producing a 
          verifiable PDF accepted by procurement and financial institutions.
        </p>
      </div>

      {/* BULLET LIST OF OUTCOMES */}
      <div className="space-y-4 mb-16">

        <div className="flex items-start gap-4">
          <div className="w-4 h-4 mt-2 rounded-full bg-[#4CC4CF]"></div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Provides SMEs with a compliant, recognized and error-free document.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-4 h-4 mt-2 rounded-full bg-[#47B39C]"></div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Enables procurement teams to validate environmental impact instantly.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-4 h-4 mt-2 rounded-full bg-[#0B3A63]"></div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Removes friction during banking, insurance and compliance evaluations.
          </p>
        </div>

      </div>

      {/* RETURN TO SUMMARY BUTTON */}
      <div className="flex justify-end">
        <a
          href="#top"
          className="text-sm text-[#0B3A63] hover:text-[#47B39C] opacity-80 hover:opacity-100 transition-colors duration-200 underline-offset-4 hover:underline"
        >
          Return to Summary
        </a>
      </div>

    </section>
  );
}
