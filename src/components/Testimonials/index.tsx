"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "SME",
      text: "A client requested CO₂e information during onboarding. Certif-Scope made it possible to provide a clear, standardized and verification-ready document within minutes, aligned with procurement expectations.",
      role: "Construction — United Kingdom",
    },
    {
      initials: "SME",
      text: "The standardized format integrates smoothly into supplier screening workflows. Reviewers immediately understood the indicator and verification elements without additional explanations.",
      role: "E-commerce — Portugal",
    },
    {
      initials: "SME",
      text: "We regularly receive CO₂e requests without a defined methodology. Certif-Scope provides an indicative, spend-based value instantly, without requiring consultants or complex reporting processes.",
      role: "Professional Services — Italy",
    },
  ];

  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="w-full bg-[#F8FAFC] dark:bg-gray-900 py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">

        {/* SECTION LABEL */}
        <p
          data-i18n="testimonials.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wide mb-3"
        >
          Representative feedback from European SMEs
        </p>

        {/* TITLE */}
        <h2
          data-i18n="testimonials.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3"
        >
          Typical Use Cases Reported by Businesses
        </h2>

        {/* INTRO */}
        <p
          data-i18n="testimonials.intro"
          className="text-[#475569] dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Illustrative examples reflecting how European SMEs commonly use Certif-Scope to respond
          to procurement, banking and ESG information requests with a standardized CO₂e attestation.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 flex flex-col h-full"
          >
            {/* INITIALS */}
            <div
              aria-hidden="true"
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-sm font-semibold text-white mb-5 shadow-md"
            >
              {item.initials}
            </div>

            {/* TEXT */}
            <p
              data-i18n={`testimonials.item.${idx}.text`}
              className="text-[#1E293B] dark:text-gray-200 text-base leading-relaxed mb-5"
            >
              {item.text}
            </p>

            {/* META */}
            <p
              data-i18n={`testimonials.item.${idx}.role`}
              className="mt-auto text-[#64748B] dark:text-gray-400 text-sm"
            >
              {item.role}
            </p>
          </div>
        ))}
      </div>

      {/* DISCLAIMER */}
      <p
        data-i18n="testimonials.disclaimer"
        className="mt-12 text-center text-xs text-[#64748B] dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
      >
        Illustrative feedback only. Indicative spend-based estimates. Not audited, not CSRD/ESRS
        compliant, and not a substitute for a full greenhouse gas emissions inventory.
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <a
          href="#attestation-preview"
          data-i18n="testimonials.cta"
          className="text-[#0B3A63] dark:text-[#1FB6C1] underline text-base hover:text-[#1FB6C1] transition"
        >
          View attestation format →
        </a>
      </div>
    </section>
  );
        }
