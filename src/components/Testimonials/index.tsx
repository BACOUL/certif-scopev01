"use client";

export default function Testimonials() {
  const items = [
    {
      initials: "MR",
      text: "Helpful for quickly providing CO₂e information during supplier onboarding.",
      author: "Mark Reynolds",
      role: "Construction — United Kingdom",
    },
    {
      initials: "ID",
      text: "Clear and easy-to-use format that simplified communication with our partners.",
      author: "Isabel Duarte",
      role: "Online Retail — Portugal",
    },
    {
      initials: "DM",
      text: "Gave us a standardized CO₂e estimation without needing consultants or complex data.",
      author: "Daniel Moretti",
      role: "Consulting — Italy",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
          Feedback from European Businesses
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto">
          How professionals use Certif-Scope for fast and standardized spend-based CO₂e estimations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-xl font-bold text-white mb-4">
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
        User feedback reflects experience with the spend-based estimation process.
      </div>

      <div className="mt-4 text-center">
        <a
          href="/sample-pdf"
          className="text-[#0B3A63] underline text-base hover:text-[#1FB6C1] transition"
        >
          View an attestation example →
        </a>
      </div>
    </section>
  );
}
