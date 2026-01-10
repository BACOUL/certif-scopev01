"use client";

export default function Pricing() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
          One Simple Price
        </h2>
        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto">
          Instant carbon attestation. No subscription. No hidden fees.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-[#F8FAFC] rounded-2xl shadow-xl p-10 border border-slate-200">
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-[#0F172A]">49€</div>
          <div className="text-[#475569] text-sm mt-1">One-time payment per attestation</div>
        </div>

        <ul className="text-[#1E293B] text-base space-y-4 mb-10">
          <li>• Instant CO₂ estimation</li>
          <li>• Standardized PDF attestation</li>
          <li>• QR code + verification link included</li>
          <li>• Accepted by banks & logistics partners</li>
          <li>• Email support included</li>
        </ul>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-[#0F172A] text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#1E293B] transition"
          >
            Get Your Attestation
          </a>
        </div>
      </div>
    </section>
  );
}
