"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Regulatory non-equivalence framing */}
      <div className="p-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          4. Regulatory Non-Equivalence & Misuse Prevention
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-5xl leading-relaxed">
          This section formally establishes that Certif-Scope outputs cannot, under any
          circumstance, be considered equivalent to regulatory disclosures, mandatory
          environmental reports or certified calculations. It also defines the restrictions
          preventing incorrect or misleading usage by institutions, suppliers or auditors.
        </p>
      </div>


      {/* BLOCK — Non-Equivalence With Regulatory Frameworks */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Non-Equivalence With Regulatory Frameworks
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Certif-Scope provides indicative estimates only. They must not be used as legally
          required documentation under any of the following frameworks:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• CSRD (Corporate Sustainability Reporting Directive)</li>
          <li>• ESRS (European Sustainability Reporting Standards)</li>
          <li>• EU Taxonomy mandatory disclosures</li>
          <li>• ISO 14064-1 certified inventories</li>
          <li>• ISO 14083 logistics accounting</li>
          <li>• Supplier-specific carbon declarations</li>
        </ul>
      </div>


      {/* BLOCK — Misuse Prevention */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Misuse Prevention Rules
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          To prevent incorrect interpretation or misleading communication, the following
          restrictions apply unconditionally:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• Outputs cannot be labelled as “audited” or “certified”.</li>
          <li>• Results cannot be expressed as Scope 1 or Scope 2 emissions.</li>
          <li>• No equivalence can be claimed with regulatory filings.</li>
          <li>• No use in green claims or marketing claims.</li>
          <li>• No merging with supplier-specific primary data.</li>
        </ul>
      </div>


      {/* BLOCK — Responsibility Clarification */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white border border-[#0B3A63] rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Responsibility Clarification
        </h3>

        <p className="text-white/90 max-w-5xl leading-relaxed mb-4">
          Certif-Scope does not validate, audit or correct user-provided financial data.
          Responsibility for input accuracy remains fully with the user or institution.
        </p>

        <ul className="space-y-2 text-sm text-white/90 max-w-5xl leading-relaxed">
          <li>• No liability for inaccurate, incomplete or misleading inputs.</li>
          <li>• No responsibility for third-party interpretations.</li>
          <li>• No obligation to align with future regulatory updates.</li>
        </ul>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
