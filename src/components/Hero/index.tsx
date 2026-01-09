<section className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">

  {/* Background soft gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F2FAFB] -z-10"></div>

  {/* TITLE */}
  <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
    Instant Certified Carbon Attestation<br />
    <span className="text-[#1FB6C1]">for SMEs</span>
  </h1>

  {/* SUBTEXT */}
  <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto mt-6 leading-relaxed">
    Generate a certified carbon footprint attestation instantly. Trusted by European banks,
    procurement teams and insurers.
  </p>

  {/* IMAGE */}
  <img 
    src="/hero-attestation.png"
    alt="Preview of Certif-Scope CO₂ attestation showing Scope 1, 2 and 3 emissions"
    className="mx-auto mt-10 w-full max-w-xl rounded-2xl shadow-xl border border-slate-100"
  />

  {/* CTA BUTTONS */}
  <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
    <a
      href="#assessment"
      className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-12 py-5 rounded-xl shadow-lg text-lg"
    >
      Generate Attestation
    </a>

    <a
      href="/verify"
      className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-12 py-5 rounded-xl shadow-lg text-lg"
    >
      Verify Attestation
    </a>
  </div>

  {/* SAMPLE LINK */}
  <a href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium block mt-8">
    View sample attestation
  </a>

</section>
