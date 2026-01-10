export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 pt-24 pb-24 text-center">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F2FAFB] -z-10"></div>

      {/* Subtitle */}
      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-3">
        Trusted by European Banks & Insurers
      </p>

      {/* Main Title */}
      <h1 className="text-[1.9rem] md:text-5xl font-extrabold text-[#0B3A63] leading-snug md:leading-tight tracking-tight">
        Instant Certified Carbon Attestation
        <br />
        <span className="text-[#1FB6C1] text-[2rem] md:text-5xl">
          for SMEs
        </span>
      </h1>

      {/* Secondary Text */}
      <p className="text-base md:text-lg text-[#475569] max-w-xl mx-auto mt-6 leading-relaxed">
        Generate a compliant carbon footprint attestation in seconds — validated
        for procurement, banking, due diligence and insurance processes.
      </p>

      {/* Hero Image */}
      <img
        src="/hero-attestation.png"
        alt="Preview Certif-Scope attestation"
        className="mx-auto mt-10 w-full max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
      />

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          Generate Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          Verify Attestation
        </a>
      </div>

      {/* Link to sample */}
      <a
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        View sample attestation
      </a>

    </section>
  );
}
