export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          How Certif-Scope Works
        </h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A streamlined, spend-based process designed to deliver transparent and reproducible CO₂e estimations instantly.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid md:grid-cols-3 gap-14">

          {/* STEP 1 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter financial data
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Provide annual spending (€) across predefined categories. No physical activity data (kWh, litres, km) required or accepted.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automated calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              CO₂e values are estimated using spend-based factors aligned with GHG Protocol Scope 3 Category 1 guidance.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download indicative report
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Receive a standardized PDF with estimated indicators and a unique verification ID — suitable for supplier screening and procurement workflows.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Full process completed in under 30 seconds on average.
        </p>

      </div>
    </section>
  );
}
