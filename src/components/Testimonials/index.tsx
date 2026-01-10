"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "Accepted instantly by our bank for a financing request.",
      author: "Mark Reynolds",
      role: "Construction — United Kingdom",
    },
    {
      initials: "ID",
      text: "Validated by our logistics partner with no adjustments required.",
      author: "Isabel Duarte",
      role: "Online Retail — Portugal",
    },
    {
      initials: "DM",
      text: "Reduced several days of carbon reporting work.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
          Trusted by European Businesses
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto">
          Real feedback from professionals using Certif-Scope for instant, standardized carbon attestations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg shadow-slate-200/70 p-6 flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-xl font-bold text-white mb-4">
              {item.initials}
            </div>

            <div className="text-sm text-[#0EA5E9] mb-2">★★★★★</div>

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
          View an attestation example →
        </a>
      </div>
    </section>
  );
}
