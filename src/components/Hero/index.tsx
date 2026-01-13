import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Europe’s first instant CO₂e Attestation platform for SMEs
      </p>

      <h1 className="text-[2.3rem] md:text-[3.3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        CO₂e Attestation Ready in 60 Seconds.
        <br />
        <span className="text-[#1FB6C1]">
          Simple. Instant. Verifiable.
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed">
        Turn your annual spending (€) into a clean, verifiable CO₂e Attestation 
        you can send immediately to clients, banks or procurement teams.
      </p>

      <p className="text-sm text-[#0B3A63]/80 font-medium mt-3">
        Ideal for onboarding, RFP submissions and supplier evaluations.
      </p>

      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="CO₂e Attestation Preview"
          width={900}
          height={600}
          priority
          className="w-full max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md"
        >
          Generate Attestation
        </a>

        <a
          href="/sample-pdf"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md"
        >
          View Sample
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
