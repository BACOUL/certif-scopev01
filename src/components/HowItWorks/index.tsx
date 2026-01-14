export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          How It Works — From Spending (€) to a Verifiable CO₂e Attestation
        </h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Certif-Scope converts simple annual spending into a standardized CO₂e Attestation that 
          clients, banks and procurement teams can verify instantly. No activity data, no consultants, 
          no reporting complexity.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid md:grid-cols-3 gap-14">

          {/* STEP 1 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter your annual spending
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Fill in a few predefined categories with yearly expenses. No kWh, km or litres required. 
              Results are based entirely on your financial inputs, making the process fast and accessible.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatic spend-based calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A deterministic, spend-based method inspired by Scope 3 Category 1 principles is applied 
              using version-controlled emission factors. Not a CSRD/ESRS report and not an audited inventory.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download your Attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Instantly receive a standardized PDF with CO₂e indicators, category breakdown and 
              a unique verification ID. Perfect for procurement onboarding, supplier screening and 
              ESG questionnaires.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Average completion time: under 30 seconds — fully spend-based and immediately usable.
        </p>

      </div>
    </section>
  );
}
