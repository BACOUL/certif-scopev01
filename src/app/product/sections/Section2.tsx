"use client";

export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24 border-b border-gray-200 pb-24">

      {/* HEADER */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Key Benefits Summary
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides SMEs with a fast, structured and verifiable way to answer 
          CO₂e information requests from clients, procurement teams, lenders or insurers. 
          The document is standardized, easy to read and includes an integrity-based 
          verification ID — ideal when only an indicative spend-based value is required.
        </p>
      </div>


      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Instant Generation
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The document is created in less than a minute. No consultants, no physical 
            activity data and no technical expertise required — only annual spending (€).
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Ready for Procurement Use
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Output is structured in a way commonly requested in supplier onboarding, 
            RFP submissions and ESG questionnaires, making it easy to include in 
            documentation packages.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Verifiable Integrity
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Each PDF includes a deterministic integrity hash and a verification ID. 
            Partners can confirm authenticity instantly, including offline validation.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. Fully Deterministic Calculation
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The same inputs always produce the same result. Values are computed 
            through a transparent spend-based formula using version-controlled 
            emission factors.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. No ESG Expertise Required
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            SMEs without sustainability staff can generate a consistent and structured 
            CO₂e indicator that answers the majority of non-regulatory institutional requests.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Multilingual and Easy to Share
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The document is clear and readable in English, French, German, Spanish and Italian, 
            enabling cross-border usability within European supply chains.
          </p>
        </div>

      </div>


      {/* CLARIFICATION STRIP */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Important Clarification
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope does not replace CSRD/ESRS reporting, audited carbon inventories or 
          lifecycle assessments. It provides an indicative, spend-based CO₂e figure suitable 
          for preliminary screening, procurement documentation and institutional requests 
          where a simplified and verifiable indicator is sufficient.
        </p>
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
