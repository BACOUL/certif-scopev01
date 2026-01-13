import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10"></div>

      <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase">
        Simple CO₂e document for clients and partners
      </p>

      <h1 className="text-[2.3rem] md:text-[3.4rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight">
        Get Your CO₂e Document in 60 Seconds
        <br />
        <span className="text-[#1FB6C1] text-[2.4rem] md:text-[3.4rem]">
          No expertise required
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-6 leading-relaxed">
        Answer CO₂e requests from clients, banks or partners instantly. 
        Enter your annual spending (€) and download a clear, ready-to-send document. 
        No consultants, no complex data, no waiting. 
      </p>

      <div className="flex justify-center mt-12">
        <Image
          src="/hero-attestation.webp"
          alt="Preview of the CO₂e document"
          width={900}
          height={600}
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          className="w-full max-w-sm md:max-w-xl rounded-2xl shadow-xl border border-slate-100"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#17a2a8] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          Generate CO₂e Document
        </a>

        <a
          href="/sample-pdf"
          className="bg-[#0B3A63] hover:bg-[#083253] transition text-white font-semibold px-12 py-4 rounded-xl shadow-md text-base md:text-lg"
        >
          View Example
        </a>
      </div>

      <a
        href="/verify"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        Verify an existing document
      </a>
    </section>
  );
}
