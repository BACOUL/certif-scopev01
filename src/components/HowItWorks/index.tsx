export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
          data-i18n="howitworks.title"
        >
          How It Works
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          data-i18n="howitworks.intro"
        >
          A simple three-step process converting annual spending (€) into a standardized CO₂e
          Attestation used in procurement, banking, insurer and ESG screening workflows.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* STEP 1 */}
          <div className="text-center px-4" data-i18n="howitworks.step1">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter annual spending
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Provide yearly expenses across predefined categories. Only financial inputs are needed —
              no activity data, no documents, no audits.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4" data-i18n="howitworks.step2">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatic calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A standard spend-based formula applies stable emission factors to generate consistent
              CO₂e indicators. The method is deterministic and versioned for traceability.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4" data-i18n="howitworks.step3">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download your Attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Instantly receive a structured PDF including total CO₂e, category breakdown and
              built-in verification information.
            </p>
          </div>

        </div>

        {/* SPONSORING BLOCK */}
        <div className="mt-16 p-6 rounded-xl border border-slate-200 bg-slate-50 dark:bg-gray-800 dark:border-gray-700 text-slate-700 dark:text-gray-300 text-sm max-w-3xl mx-auto">
          <p className="font-semibold text-slate-900 dark:text-white">
            Cost coverage by enterprise programs
          </p>
          <p className="mt-1">
            Some enterprise partners cover the cost for part or all of their suppliers. If relevant,
            confirm with your procurement or ESG contact.
          </p>
        </div>

        {/* FOOTER LINE */}
        <p
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          data-i18n="howitworks.footer"
        >
          The entire process takes less than one minute.
        </p>

      </div>
    </section>
  );
}
