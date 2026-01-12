"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER – distinct design */}
      <div className="relative bg-[#F8FAFC] border border-gray-200 p-12 rounded-2xl shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#15B097]/15 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          4. Solution Provided
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope delivers a complete, standardized and verifiable CO₂ attestation 
          generated automatically from annual expenditure inputs. The solution is built 
          to match institutional expectations across procurement, banking, insurance, 
          investment onboarding and ESG compliance workflows. The output is immediate, 
          multilingual-ready and formatted for seamless third-party review.
        </p>
      </div>

      {/* 3-COLUMN SOLUTION WORKFLOW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* STEP 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] font-bold text-4xl mb-4">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Structured Input Interface
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Users enter annual spend data across standardized categories. Automatic validation 
            prevents errors, ensures numerical consistency and minimises compliance risk.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Categorised expenditure fields</li>
            <li>• GDPR-compliant processing</li>
            <li>• Error and anomaly detection</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="p-8 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 opacity-30"></div>

          <div className="text-white font-bold text-4xl mb-4 relative z-10">02</div>
          <h3 className="text-xl font-semibold mb-2 relative z-10">
            Automated Processing Engine
          </h3>
          <p className="text-white/90 text-sm leading-relaxed relative z-10">
            A deterministic algorithm converts spend data into standardized CO₂ results using 
            verified emission factors and predefined institutional reporting logic.
          </p>
          <ul className="mt-3 text-sm text-white/90 space-y-1 relative z-10">
            <li>• Deterministic & reproducible logic</li>
            <li>• Instant metadata structuring</li>
            <li>• Fully automated, no manual steps</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30 hover:shadow-lg transition">
          <div className="text-[#15B097] font-bold text-4xl mb-4">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institution-Ready Output
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            A professionally formatted PDF is generated instantly. It includes verification 
            identifiers, structural consistency markers and multilingual sections.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Standardized PDF structure</li>
            <li>• Unique verification code</li>
            <li>• Cryptographic integrity seal</li>
          </ul>
        </div>
      </div>

      {/* ADDITIONAL VALUE BLOCK – unique design for this section */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Core Functional Advantages
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Multilingual Output (EN/FR/DE/ES/IT)</h4>
            <p className="text-gray-700 text-sm mt-2">
              Designed for pan-European procurement, ensuring immediate compatibility internationally.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#15B097]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Consistent Institutional Formatting</h4>
            <p className="text-gray-700 text-sm mt-2">
              Ensures compliance reviewers instantly recognize structure and terminology.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Audit-Friendly Verification Model</h4>
            <p className="text-gray-700 text-sm mt-2">
              Cryptographic signature enables third-party validation without contacting Certif-Scope.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] border border-[#15B097]/20 rounded-lg">
            <h4 className="font-semibold text-[#0B3A63]">Zero Consultancy Dependency</h4>
            <p className="text-gray-700 text-sm mt-2">
              Eliminates delays, high costs and manual processing traditionally associated with ESG reporting.
            </p>
          </div>

        </div>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
