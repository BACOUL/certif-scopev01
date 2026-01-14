"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "A major client requested CO₂e information for onboarding and we had no method or data. Certif-Scope generated a clean and structured document instantly. It matched exactly what their procurement team expected.",
      author: "Mark Reynolds",
      role: "Construction — United Kingdom",
    },
    {
      initials: "ID",
      text: "The format fits perfectly into procurement workflows. Clear indicators, standardized layout and a verification code our partners could check in seconds. It eliminated follow-up questions.",
      author: "Isabel Duarte",
      role: "Online Retail — Portugal",
    },
    {
      initials: "DM",
      text: "Clients often ask for CO₂e figures but never define a method. Certif-Scope allowed us to provide consistent, spend-based values immediately without hiring consultants.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
          What European Businesses Say
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Real feedback from SMEs using Certif-Scope to respond to CO₂e requests quickly and professionally. 
          Instant, spend-based and easy for clients to verify. 
          Not a regulatory emissions report.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1"
          >
            <div
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-xl font-bold text-white mb-5 shadow-md"
              aria-hidden="true"
            >
              {item.initials}
            </div>

            <p className="text-[#1E293B] text-base leading-relaxed mb-5">
              {item.text}
            </p>

            <div className="mt-auto">
              <p className="font-semibold text-[#0B3A63]">{item.author}</p>
              <p className="text-[#64748B] text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-[#64748B]">
        Based on spend-based indicative estimation. Not audited or regulatory reporting.
      </p>

      <div className="mt-4 text-center">
        <a
          href="/sample-pdf"
          className="text-[#0B3A63] underline text-base hover:text-[#1FB6C1] transition"
        >
          View an example document →
        </a>
      </div>
    </section>
  );
            }
