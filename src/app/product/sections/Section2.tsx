"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24">
      {/* HEADER */}
      <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
        Product Overview
      </h2>

      {/* SUBTITLE */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-10">
        Certif-Scope enables small and medium organisations to instantly generate
        a standardized, institution-ready CO₂ attestation aligned with GHG
        Protocol principles. The attestation is accepted by procurement,
        compliance, banking and due-diligence workflows across Europe.
      </p>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="p-7 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-[#e5e9ec] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3A63] to-[#47B39C]" />
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Designed for Institutional Workflows
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Structured exactly according to procurement, banking and compliance
            requirements — ensuring immediate acceptance with zero revisions.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-7 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-[#e5e9ec] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#47B39C] to-[#4CC4CF]" />
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            30-Second Generation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            No consultants. No spreadsheets. Enter expenses and instantly obtain
            a verified attestation formatted for institutional review.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-7 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-[#e5e9ec] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3A63] to-[#4CC4CF]" />
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Every attestation includes a unique verification ID and
            cryptographic hash — allowing banks, auditors or partners to
            validate authenticity instantly.
          </p>
        </div>

      </div>

      {/* BOTTOM SEPARATOR */}
      <div className="w-full mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-[#47B39C] to-transparent opacity-60"></div>

      {/* RETURN BUTTON */}
      <div className="flex justify-end mt-6">
        <a
          href="#top"
          className="text-sm text-[#0B3A63] hover:text-[#47B39C] transition-colors duration-200 underline-offset-4 hover:underline"
        >
          Return to Summary
        </a>
      </div>
    </section>
  );
}
