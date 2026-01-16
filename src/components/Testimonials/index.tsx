"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "A client needed CO₂e information for onboarding. Certif-Scope delivered a structured, verification-ready document in seconds — matching their procurement checklist perfectly.",
      author: "Mark Reynolds",
      role: "Construction — United Kingdom",
    },
    {
      initials: "ID",
      text: "The format integrates smoothly into supplier screening. Clear indicators, consistent layout and a verification code validated immediately by partners.",
      author: "Isabel Duarte",
      role: "E-Commerce — Portugal",
    },
    {
      initials: "DM",
      text: "We often receive CO₂e requests without a specified method. Certif-Scope provides a reproducible, spend-based value instantly — no consultants or complex reporting required.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
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
          Verified by European SMEs
        </p>

        {/* TITLE */}
        <h2
          data-i18n="testimonials.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3"
        >
          What European Businesses Say
        </h2>

        {/* INTRO */}
        <p
          data-i18n="testimonials.intro"
          className="text-[#475569] dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Independent feedback from SMEs across Europe using Certif-Scope to provide clear,
          consistent and instantly verifiable CO₂e Attestations for procurement and ESG checks.
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <article
            key={idx}
            itemScope
            itemType="https://schema.org/Review"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1"
          >
            {/* INITIALS */}
            <div
              aria-hidden="true"
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-xl font-bold text-white mb-5 shadow-md"
            >
              {item.initials}
            </div>

            {/* TEXT */}
            <p
              data-i18n={`testimonials.item.${idx}.text`}
              itemProp="reviewBody"
              className="text-[#1E293B] dark:text-gray-200 text-base leading-relaxed mb-5"
            >
              {item.text}
            </p>

            {/* AUTHOR */}
            <footer className="mt-auto">
              <p
                data-i18n={`testimonials.item.${idx}.author`}
                itemProp="author"
                className="font-semibold text-[#0B3A63] dark:text-white"
              >
                {item.author}
              </p>
              <p
                data-i18n={`testimonials.item.${idx}.role`}
                className="text-[#64748B] dark:text-gray-400 text-sm"
              >
                {item.role}
              </p>
            </footer>
          </article>
        ))}
      </div>

      {/* DISCLAIMER */}
      <p
        data-i18n="testimonials.disclaimer"
        className="mt-12 text-center text-xs text-[#64748B] dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
      >
        Indicative spend-based estimate. Not audited, not CSRD/ESRS compliant, and not a substitute
        for a full emissions inventory. Accuracy depends entirely on user-provided financial inputs.
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <a
          href="/sample.pdf"
          data-i18n="testimonials.cta"
          className="text-[#0B3A63] dark:text-[#1FB6C1] underline text-base hover:text-[#1FB6C1] transition"
        >
          View sample CO₂e Attestation →
        </a>
      </div>
    </section>
  );
            }
