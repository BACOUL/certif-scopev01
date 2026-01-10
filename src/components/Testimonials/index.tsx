"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "Accepted immediately by our bank for a financing request.",
      author: "Mark Reynolds",
      role: "Building Contractor — United Kingdom",
    },
    {
      initials: "ID",
      text: "Validated by our logistics partner with no adjustments.",
      author: "Isabel Duarte",
      role: "Online Retail — Portugal",
    },
    {
      initials: "DM",
      text: "Saved us several days of carbon reporting each month.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          Trusted by European Businesses
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto mb-12">
          Real feedback from professionals using Certif-Scope for instant, standardized carbon attestations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-full bg-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#0F172A] mb-4">
              {item.initials}
            </div>

            <p className="text-[#1E293B] text-base leading-relaxed mb-4">
              {item.text}
            </p>

            <div className="mt-auto">
              <p className="font-semibold text-[#0F172A]">{item.author}</p>
              <p className="text-[#64748B] text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-[#64748B]">
        Verified customer statements
      </div>

      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-[#0F172A] underline text-base hover:text-[#1E293B] transition"
        >
          View an attestation example
        </a>
      </div>
    </section>
  );
}
