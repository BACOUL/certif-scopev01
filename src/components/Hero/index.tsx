import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SUBTITLE — Institutional Claim */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-2 uppercase">
        Europe’s first platform for instant, verifiable CO₂e attestations
      </p>

      {/* MAIN TITLE — Strong Institutional */}
      <h1 className="text-[2rem] md:text-[3.2rem] font-extrabold text-[#0B3A63] leading-snug tracking-tight">
        Your CO₂e Attestation. Ready in Seconds.
        <br />
        <span className="text-[#1FB6C1]">
          Standardized. Verification-Ready. Accepted Across Europe.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Certif-Scope transforms your annual spending (€) into a standardized, verifiable CO₂e
        Attestation suitable for procurement teams, banking checks, regulatory questionnaires
        and supplier onboarding. Fully spend-based — no physical data required.
      </p>

      {/* SUBTEXT */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-3">
        A compliant document your partners can verify instantly.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mt-14">
        <Image
          src="/hero-attestation.webp"
          alt="CO₂e Attestation Preview"
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
        />
      </div>

      {/* CTA BUTTONS — CORRECT ORDER */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

        {/* GET FIRST — MAIN ACTION */}
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          Get My CO₂e Attestation
        </a>

        {/* VERIFY SECOND */}
        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          Verify an Attestation
        </a>

        {/* VIEW THIRD */}
        <a
          href="/sample-pdf"
          className="bg-white border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition text-[#0B3A63] font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          View Sample Attestation
        </a>
      </div>

    </section>
  );
}
