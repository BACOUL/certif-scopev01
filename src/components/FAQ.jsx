"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const items = [
    {
      q: "Is the attestation accepted by banks and partners?",
      a: "Yes. The standardized PDF includes a verification link, QR code and unique verification ID used in procurement, onboarding and finance workflows."
    },
    {
      q: "How fast is the attestation generated?",
      a: "The process takes under 60 seconds after you enter your spending data."
    },
    {
      q: "What does the attestation include?",
      a: "A standardized PDF with CO₂ estimation, verification QR code, verification link, unique ID, timestamp and antifraud hash."
    },
    {
      q: "How does the verification system work?",
      a: "Anyone can scan the QR code or enter the verification ID to confirm authenticity instantly—no login required."
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-[#0F172A]">
                  {item.q}
                </span>
                <span className="text-2xl text-[#0F172A]">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-[#475569] text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block bg-[#0F172A] text-white text-base font-semibold px-10 py-4 rounded-xl hover:bg-[#1E293B] transition"
          >
            Get Your Attestation
          </a>
        </div>

      </div>
    </section>
  );
}
