import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Europe’s first platform for instant, verifiable CO₂e attestations
      </p>

      <h1 className="text-[2.2rem] md:text-[3.2rem] font-extrabold text-[#0B3A63] leading-snug tracking-tight">
        Your CO₂e Attestation. Ready in Seconds.
        <br />
        <span className="text-[#1FB6C1]">
          Instant. Standardized. Verification-Ready.
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed">
        Certif-Scope converts your annual spending (€) into a clear, standardized CO₂e
        Attestation accepted in supplier onboarding, RFP submissions and banking checks.
        Fully spend-based — no physical data required.
      </p>

      <p className="text-sm text-[#0B3A63]/80 font-medium mt-4">
        A simple document your partners can verify instantly.
      </p>

      <div className="flex justify-center mt-10">
        <Image
          src="/hero-attestation.webp"
          alt="CO₂e Attestation Preview"
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md"
        >
          Get My CO₂e Attestation
        </a>

        <a
          href="/sample-pdf"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md"
        >
          View Sample Attestation
        </a>
      </div>

      <a
        href="/verify"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        Verify an Attestation
      </a>
    </section>
  );
}
