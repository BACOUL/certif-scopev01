export default function Section4() {
  return (
    <section id="s4" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-10">
        Solution provided
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-14">
        Certif-Scope offers a unified, automated and institution-ready CO₂ attestation 
        system that eliminates the complexity traditionally associated with environmental 
        declarations. Instead of manual calculations, consultants, spreadsheets or 
        multi-week audits, Certif-Scope transforms basic business inputs into a 
        standardized, verifiable and audit-friendly output.
      </p>

      {/* MODERN DESIGN ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BLOCK 1 */}
        <div className="group p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B3A63]/10 flex items-center justify-center">
              <span className="text-[#0B3A63] text-xl font-bold">1</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Automated CO₂ Engine
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The platform uses a standardized spend-based GHG Protocol methodology to transform 
            business expenses into emission indicators. No formulas to configure, no industry 
            expertise required—fully automated and consistent.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div className="group p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B3A63]/10 flex items-center justify-center">
              <span className="text-[#0B3A63] text-xl font-bold">2</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Instant Institutional Output
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The system produces a PDF formatted specifically for procurement, compliance and 
            banking workflows. Every attestation includes company details, methodology, 
            emission factors, calculation tables, and a verification ID.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div className="group p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B3A63]/10 flex items-center justify-center">
              <span className="text-[#0B3A63] text-xl font-bold">3</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification Layer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Every PDF includes a cryptographic hash and a verification ID that third-parties 
            can validate instantly, even without contacting Certif-Scope. This removes 
            friction during ESG reviews and due diligence.
          </p>
        </div>

      </div>

      {/* SECOND ROW WITH ASYMMETRIC DESIGN */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT BLOCK */}
        <div className="p-10 rounded-2xl bg-[#0B3A63]/5 dark:bg-[#0B3A63]/20 shadow-sm border border-[#0B3A63]/20">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Unified CO₂ Logic</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            All emission categories (transport, energy, logistics, digital services, operations) 
            follow the same logic and data structure, ensuring consistency across declarations. 
            This avoids mismatches and enables quick audits.
          </p>
        </div>

        {/* RIGHT BLOCK */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">No Training Required</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Users only input expenses and basic activity data. The system handles classification, 
            emission factors, scaling logic, and verification. This enables SMEs to comply instantly 
            without building internal ESG expertise.
          </p>
        </div>

      </div>

    </section>
  );
}
