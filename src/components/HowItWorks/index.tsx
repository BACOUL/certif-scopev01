export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          How It Works
        </h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A clear three-step process that converts annual spending (€) into a standardized CO₂e
          Attestation suitable for procurement, banking and ESG screening.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        <div className="grid md:grid-cols-3 gap-14">

          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter annual spending
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Provide yearly expenses across predefined categories. No operational data required —
              only the financial inputs all SMEs already have.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatic calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A deterministic spend-based formula applies stable, version-controlled emission
              factors to generate consistent CO₂e indicators.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download your Attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Instantly obtain a structured PDF including totals, category breakdown, methodology
              outline and verification metadata — ready for submission.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Full process completed in under one minute.
        </p>

      </div>
    </section>
  );
}
