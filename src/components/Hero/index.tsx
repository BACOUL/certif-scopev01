export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 text-center">

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F2FAFB] -z-10"></div>

      <h1 className="text-3xl md:text-5xl font-black text-[#0B3A63] leading-snug tracking-tight">
        Instant Certified Carbon Attestation<br />
        <span className="text-[#1FB6C1] text-3xl md:text-5xl">
          for SMEs
        </span>
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-[#475569] max-w-3xl mx-auto mt-6 leading-relaxed">
        Generate a certified carbon footprint attestation instantly. Trusted by European banks,
        procurement teams and insurers.
      </p>

      <img
        src="/hero-attestation.png"
        alt="Certif-Scope CO₂ attestation preview"
        className="mx-auto mt-10 w-full max-w-lg rounded-2xl shadow-xl border border-slate-100"
      />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-10 py-4 rounded-xl shadow-lg text-base md:text-lg"
        >
          Generate Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-10 py-4 rounded-xl shadow-lg text-base md:text-lg"
        >
          Verify Attestation
        </a>
      </div>

      <a href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium block mt-8">
        View sample attestation
      </a>

    </section>
  );
}
