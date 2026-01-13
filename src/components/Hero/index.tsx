import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Europe’s first platform to generate a CO₂e Attestation instantly
      </p>

      <h1 className="text-[2.3rem] md:text-[3.3rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        CO₂e Attestation in 60 Seconds.
        <br />
        <span className="text-[#1FB6C1]">
          No consultants. No complexity.
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Enter your annual spending (€) and download a clean, verifiable CO₂e Attestation ready 
        for clients, banks or procurement teams.
      </p>

      <p className="text-sm font-medium mt-3 text-[#0B3A63]/80">
        Instant • Spend-based • Verifiable
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
