export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 pt-10 pb-24 text-center">

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F2FAFB] -z-10"></div>

      <h1 className="text-[1.4rem] md:text-4xl font-extrabold text-[#0B3A63] leading-snug md:leading-tight tracking-tight mt-2">
        Instant Certified Carbon Attestation
        <br />
        <span className="text-[#1FB6C1] text-[1.5rem] md:text-4xl">for SMEs</span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-xs md:max-w-2xl mx-auto mt-4 leading-relaxed">
        Generate a certified carbon footprint attestation instantly. Trusted by European banks,
        procurement teams and insurers.
      </p>

      <img
        src="/hero-attestation.png"
        alt="Preview Certif-Scope attestation"
        className="mx-auto mt-6 w-full max-w-xs md:max-w-lg rounded-2xl shadow-xl border border-slate-100"
      />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
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

      <a
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-6"
      >
        View sample attestation
      </a>

    </section>
  );
}
