export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
          How It Works — From Spending to a CO₂e Document in 60 Seconds
        </h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Certif-Scope converts simple annual spending (€) into a clean, verifiable and ready-to-send CO₂e document. 
          Instant results. No consultants. No physical metrics. No expertise required.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14"></div>

        <div className="grid md:grid-cols-3 gap-14">

          {/* STEP 1 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter your spending (€)
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Add annual expenses across predefined categories. No kWh, km or litres required. 
              Results depend entirely on your financial inputs.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatic calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A deterministic spend-based method aligned with Scope 3 Category 1 principles is applied. 
              Uses version-controlled emission-factor datasets. Indicative only — not a CSRD/ESRS report.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download your document
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Receive a standardized PDF with CO₂e indicators, category breakdown and a unique verification ID. 
              Ideal for procurement, supplier onboarding, banking requests or ESG pre-assessment.
            </p>
          </div>

        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          Average completion time: under 30 seconds.
        </p>

      </div>
    </section>
  );
    }
