"use client";

export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24">

      {/* TITLE */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
        Key Benefits Summary
      </h2>

      {/* INTRO TEXT */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-14 leading-relaxed">
        Certif-Scope provides a fast, compliant and independently verifiable CO₂ attestation
        tailored for institutional workflows. Each attestation is structured to align
        with procurement, ESG and regulatory requirements across Europe — ensuring clarity,
        speed and acceptance.
      </p>

      {/* HIGHLIGHTED BENEFITS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

        {/* BENEFIT 01 */}
        <div className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-white to-[#F5FBF8] dark:from-gray-800 dark:to-gray-700 border border-[#D6EDE5]">
          <div className="text-[#47B39C] text-5xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Instant Attestation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Generate a complete attestation in under 30 seconds — eliminating manual
            calculations, consulting delays and document formatting.
          </p>
        </div>

        {/* BENEFIT 02 */}
        <div className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-white to-[#EDF7FA] dark:from-gray-800 dark:to-gray-700 border border-[#C9E7F1]">
          <div className="text-[#4CC4CF] text-5xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Institutional-Ready Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            The layout follows recognised ESG reporting formats, including methodology,
            emission factors, scope breakdown and verification ID.
          </p>
        </div>

        {/* BENEFIT 03 */}
        <div className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-white to-[#F0F4FF] dark:from-gray-800 dark:to-gray-700 border border-[#D1D9FF]">
          <div className="text-[#0B3A63] text-5xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently Verifiable
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Each document includes a cryptographic hash and verification link — allowing
            banks, auditors or insurers to authenticate validity instantly.
          </p>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* BENEFIT 04 */}
        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-800 shadow border border-[#E5E9EC] rounded-xl">
          <div className="w-14 h-14 rounded-full bg-[#47B39C]/15 flex items-center justify-center">
            <span className="text-[#47B39C] text-2xl font-bold">€</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Cost-Effective
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Avoid consultant fees and lengthy ESG audits. One fixed price. Immediate delivery.
            </p>
          </div>
        </div>

        {/* BENEFIT 05 */}
        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-800 shadow border border-[#E5E9EC] rounded-xl">
          <div className="w-14 h-14 rounded-full bg-[#4CC4CF]/15 flex items-center justify-center">
            <span className="text-[#4CC4CF] text-2xl font-bold">EU</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
              Accepted Across Europe
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Compatible with procurement, financial and regulatory expectations across all EU
              member states.
            </p>
          </div>
        </div>

      </div>

      {/* SEPARATOR */}
      <div className="w-full mt-16 mb-10 h-px bg-gradient-to-r from-transparent via-[#4CC4CF] to-transparent opacity-60"></div>

      {/* RETURN BUTTON */}
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
