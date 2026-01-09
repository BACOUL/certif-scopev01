"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 text-center">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
        Instant Certified Carbon Attestation<br />
        <span className="text-[#1FB6C1]">for SMEs</span>
      </h1>

      {/* SUBTITLE */}
      <p className="text-lg md:text-xl text-[#1FB6C1] font-semibold mt-4">
        Scope 1 • Scope 2 • Scope 3 Emissions
      </p>

      {/* DESCRIPTION */}
      <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto mt-6 leading-relaxed">
        Generate a certified carbon footprint attestation instantly. Trusted by European banks,
        procurement teams and insurers.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Generate Attestation
        </a>

        <Link
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Verify Attestation
        </Link>
      </div>

      {/* SAMPLE LINK */}
      <Link
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-6"
      >
        View sample attestation
      </Link>

      {/* IMAGE BELOW CENTERED */}
      <div className="mt-14 flex justify-center">
        <img
          src="/hero-attestation.png"
          alt="Certif-Scope carbon attestation preview"
          className="w-full max-w-xl rounded-2xl shadow-xl border border-slate-200"
        />
      </div>

    </section>
  );
}
