export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10"></div>

      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Standardized CO₂ Attestation
      </p>

      <h1 className="text-[2.2rem] md:text-[3.2rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Instant Certified Carbon Attestation
        <br />
        <span className="text-[#1FB6C1] text-[2.3rem] md:text-[3.2rem]">
          for SMEs
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed">
        Generate a standardized, compliant carbon footprint attestation in seconds —
        aligned with GHG Protocol and suitable for procurement, banking, due diligence and insurance workflows.
      </p>

      <div className="flex justify-center mt-12">
        <img
          src="/hero-attestation.png"
          alt="Certif-Scope attestation preview"
          className="w-full max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          Generate Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          Verify Attestation
        </a>
      </div>

      <a
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        View sample attestation
      </a>
    </section>
  );
}
