import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* Tagline */}
      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Europe’s first platform for instant, verifiable CO₂e attestations
      </p>

      {/* Main Title */}
      <h1 className="text-[2.4rem] md:text-[3.4rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Generate a CO₂e Attestation Instantly.
        <br />
        <span className="text-[#1FB6C1]">
          Clear. Verifiable. Ready to Send.
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed">
        Certif-Scope transforms your annual spending (€) into a standardized CO₂e Attestation 
        you can send immediately to clients, banks or procurement teams.  
        Spend-based methodology only — simple, consistent and verifiable.
      </p>

      {/* Use cases */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-4">
        Suitable for supplier onboarding, RFP submissions and ESG questionnaires.
      </p>

      {/* Preview */}
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

      {/* CTA buttons */}
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

      {/* Verify */}
      <a
        href="/verify"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        Verify an Attestation
      </a>
    </section>
  );
      }
