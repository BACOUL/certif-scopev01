"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
        Product Overview
      </h1>

      {/* SUBTITLE */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-12 leading-relaxed">
        Certif-Scope provides SMEs with an instant, standardized and institution-ready
        CO₂ attestation accepted across procurement, banking, insurance and compliance
        workflows in Europe. Built on a fully transparent spend-based methodology and
        cryptographically verified, it delivers clear environmental indicators without
        requiring consulting services or complex ESG audits.
      </p>

      {/* 3 FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institutional-Ready Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The attestation follows the structure used by procurement, compliance
            and due-diligence teams. Every section is organized for fast review
            and minimal friction.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            30-Second Generation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Submit expenses → receive a verified PDF. No waiting time, no back-and-forth
            validation, no need for consultants or ESG expertise.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-[#0B3A63]/20">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Independent Verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Each attestation includes a verification ID and cryptographic hash so banks,
            insurers and partners can validate authenticity without contacting support.
          </p>
        </div>

      </div>

      {/* VISUAL LAYOUT BREAK */}
      <div className="mt-16 p-6 rounded-xl bg-[#F5F7FA] border border-[#0B3A63]/10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">What makes Certif-Scope unique?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-base">
          <li>No consultants, no delays — instant output</li>
          <li>Aligned with European procurement & ESG workflows</li>
          <li>Cryptographic verification for institutional trust</li>
          <li>Spend-based methodology fully documented</li>
          <li>Designed for suppliers, SMEs and independent professionals</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="#s2"
          className="inline-block px-6 py-3 bg-[#0B3A63] text-white font-semibold rounded-lg shadow hover:bg-[#0d4a80] transition"
        >
          Explore Key Benefits →
        </a>
      </div>
    </section>
  );
}
