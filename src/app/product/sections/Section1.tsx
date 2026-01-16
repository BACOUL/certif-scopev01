"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      data-section="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — redesign */}
      <div className="relative p-14 rounded-2xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FB] border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* Watermark diagonal */}
        <div
          className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30 blur-xl pointer-events-none"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          Product Overview
        </h2>

        <p
          data-i18n="s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope generates a standardized CO₂e Attestation based exclusively on annual 
          spending (€). It is designed for SMEs that receive CO₂-related requests from clients, 
          procurement teams, banks or insurers, but do not have the resources for CSRD/ESRS, 
          greenhouse gas audits, or physical activity data tracking.
        </p>

        <p
          data-i18n="s1.paragraph2"
          className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          The attestation is formatted for institutional workflows. It includes a clear summary, 
          category segmentation and a deterministic verification ID based on a cryptographic hash. 
          This allows partners to verify authenticity instantly — with or without internet access — 
          and without requiring stored data or backend lookups.
        </p>
      </div>

      {/* 3-PILLAR GRID — redesign */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

        {/* PILLAR 1 */}
        <div
          data-i18n="s1.card1.block"
          className="p-8 rounded-xl bg-white border-l-4 border-[#1FB6C1] shadow-sm hover:shadow-lg transition relative"
        >
          <div className="absolute top-4 right-4 text-[#1FB6C1] text-5xl font-bold opacity-20">
            01
          </div>

          <h3
            data-i18n="s1.card1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-3"
          >
            Structured Output
          </h3>

          <p
            data-i18n="s1.card1.text"
            className="text-gray-600 text-sm leading-relaxed"
          />
        </div>

        {/* PILLAR 2 */}
        <div
          data-i18n="s1.card2.block"
          className="p-8 rounded-xl bg-gradient-to-br from-[#F8FAFC] to-white border-l-4 border-[#1FB6C1]/50 shadow-sm hover:shadow-lg transition relative"
        >
          <div className="absolute top-4 right-4 text-[#1FB6C1] text-5xl font-bold opacity-20">
            02
          </div>

          <h3
            data-i18n="s1.card2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-3"
          >
            Instant Calculation
          </h3>

          <p
            data-i18n="s1.card2.text"
            className="text-gray-600 text-sm leading-relaxed"
          />
        </div>

        {/* PILLAR 3 */}
        <div
          data-i18n="s1.card3.block"
          className="p-8 rounded-xl bg-white border-l-4 border-[#1FB6C1] shadow-sm hover:shadow-lg transition relative"
        >
          <div className="absolute top-4 right-4 text-[#1FB6C1] text-5xl font-bold opacity-20">
            03
          </div>

          <h3
            data-i18n="s1.card3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-3"
          >
            Verifiable Authenticity
          </h3>

          <p
            data-i18n="s1.card3.text"
            className="text-gray-600 text-sm leading-relaxed"
          />
        </div>
      </div>

      {/* WORKFLOW — redesigned shape */}
      <div
        data-i18n="s1.workflow.block"
        className="mt-20 p-10 rounded-xl bg-gradient-to-r from-white to-[#F7FDFD] border border-gray-200 shadow-sm"
      >
        <h4
          data-i18n="s1.workflow.title"
          className="text-xl font-bold text-[#0B3A63] mb-4 border-l-4 border-[#1FB6C1] pl-4"
        >
          How the Attestation Is Used in Practice
        </h4>

        <ul className="list-disc ml-6 text-gray-700 text-sm leading-relaxed space-y-2">
          <li data-i18n="s1.workflow.item1" />
          <li data-i18n="s1.workflow.item2" />
          <li data-i18n="s1.workflow.item3" />
          <li data-i18n="s1.workflow.item4" />
        </ul>
      </div>

      {/* REGULATORY BLOCK — redesigned with side accent */}
      <div
        data-i18n="s1.regref.block"
        className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-sm relative"
      >
        <div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]/70 rounded-l-xl" />

        <h4
          data-i18n="s1.regref.title"
          className="text-xl font-bold text-[#0B3A63] mb-3"
        />

        <p
          data-i18n="s1.regref.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        />

        <ul className="mt-4 space-y-2 text-sm text-[#0B3A63] font-medium">
          <li><a href="https://eur-lex.europa.eu/eli/reg/2022/2464" target="_blank" className="hover:text-[#1FB6C1] underline">CSRD — Regulation 2022/2464</a></li>
          <li><a href="https://www.efrag.org/lab6" target="_blank" className="hover:text-[#1FB6C1] underline">ESRS E1 Climate Standard</a></li>
          <li><a href="https://www.eba.europa.eu" target="_blank" className="hover:text-[#1FB6C1] underline">EBA ESG Risk Guidelines</a></li>
        </ul>
      </div>

      {/* FINAL HIGHLIGHT — redesigned soft gradient */}
      <div
        data-i18n="s1.highlight.block"
        className="mt-20 p-12 rounded-2xl bg-gradient-to-br from-[#0B3A63]/90 via-[#0B3A63]/70 to-[#1FB6C1]/30 text-white shadow-xl relative overflow-hidden"
      >
        <h4
          data-i18n="s1.highlight.title"
          className="text-2xl font-bold relative z-10"
        />

        <p
          data-i18n="s1.highlight.text"
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
        />
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s1.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
                }
