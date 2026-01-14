import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SUBTITLE */}
      <p className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Europe’s first platform for verifiable CO₂e attestations
      </p>

      {/* MAIN TITLE */}
      <h1 className="text-[1.9rem] md:text-[3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Generate a CO₂e Attestation in Seconds.
        <br />
        <span className="text-[#1FB6C1]">
          Accepted Across Europe.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Certif-Scope converts your annual spending (€) into a structured CO₂e Attestation designed
        for procurement reviews, banking processes, insurer questionnaires and public tenders.
      </p>

      {/* SUBTEXT */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-3">
        Deliver consistent, verifiable information to any partner.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="CO₂e Attestation Preview"
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* CTA BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          Get My CO₂e Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          Verify an Attestation
        </a>

        <a
          href="/sample-pdf"
          className="bg-white border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition text-[#0B3A63] font-semibold px-12 py-4 rounded-xl shadow-md text-center"
        >
          View Sample
        </a>
      </div>

    </section>
  );
}
