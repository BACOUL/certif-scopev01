"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "A key client requested CO₂e information for onboarding and we had no data or defined method. Certif-Scope delivered a structured document instantly and aligned perfectly with their procurement checklist.",
      author: "Mark Reynolds",
      role: "Construction — United Kingdom",
    },
    {
      initials: "ID",
      text: "The format fits seamlessly into supplier screening. Clear indicators, consistent layout and a verification code our partners validated in seconds. No additional explanations were required.",
      author: "Isabel Duarte",
      role: "Online Retail — Portugal",
    },
    {
      initials: "DM",
      text: "We receive CO₂e requests often, but clients rarely specify how to calculate them. Certif-Scope gave us a reproducible, spend-based value instantly — without consultants or complex reporting.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
          What European Businesses Say
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Feedback from SMEs across Europe using Certif-Scope to deliver clear, consistent and instantly verifiable CO₂e Attestations without consultants or technical reporting.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1"
          >
            <div
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-xl font-bold text-white mb-5 shadow-md"
            >
              {item.initials}
            </div>

            <p className="text-[#1E293B] dark:text-gray-200 text-base leading-relaxed mb-5">
              {item.text}
            </p>

            <div className="mt-auto">
              <p className="font-semibold text-[#0B3A63] dark:text-white">{item.author}</p>
              <p className="text-[#64748B] dark:text-gray-400 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-[#64748B] dark:text-gray-400">
        Indicative spend-based estimation. Not a regulatory or audited emissions report.
      </p>

      <div className="mt-4 text-center">
        <a
          href="/sample-pdf"
          className="text-[#0B3A63] dark:text-[#1FB6C1] underline text-base hover:text-[#1FB6C1] transition"
        >
          View an example document →
        </a>
      </div>
    </section>
  );
}
