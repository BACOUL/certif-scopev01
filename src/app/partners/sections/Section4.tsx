"use client";

export default function Section4() {
  return (
    <section
      id="partner-key-validity"
      data-section="partner-key-validity"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — same model, subtle variation */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s4.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">4.</span>
          Partner Key Validity & Lifecycle
        </h2>

        <p
          data-i18n="s4.intro"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Access to the attestation generation system is controlled through a
          dedicated partner key. This section defines the validity period and
          lifecycle rules applied to each key.
        </p>
      </div>

      {/* CONTENT BLOCK */}
      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3
          data-i18n="s4.block1.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          Key validity period
        </h3>

        <p
          data-i18n="s4.block1.text1"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Each partner key is valid for a fixed period of <strong>12 months</strong>
          starting from the date of issuance.
        </p>

        <p
          data-i18n="s4.block1.text2"
          className="text-gray-700 text-sm leading-relaxed mb-4"
        >
          Once this period expires, the key is automatically deactivated and can
          no longer be used to generate new CO₂e attestations.
        </p>

        <p
          data-i18n="s4.block1.text3"
          className="text-gray-700 text-sm leading-relaxed"
        >
          This controlled validity period ensures predictable renewal cycles,
          prevents indefinite access, and maintains a clear security and
          compliance boundary for all partners.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s4.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
