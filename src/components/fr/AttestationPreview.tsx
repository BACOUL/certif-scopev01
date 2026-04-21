"use client";

import Image from "next/image";
import Link from "next/link";

export default function AttestationPreviewFR() {
  return (
    <section
      id="attestation-preview"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-20 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* LABEL */}
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
          Aperçu du document
        </p>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight">
          À quoi ressemble l’attestation carbone que vous recevez
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#475569] leading-relaxed">
          Un document clair, standardisé et directement transmissible, conçu pour
          répondre rapidement à une demande client, fournisseur ou appel d’offres.
        </p>

        {/* VISUAL */}
        <div className="relative mt-14 mx-auto max-w-[720px]">

          {/* HALO */}
          <div className="absolute inset-x-12 bottom-4 -z-10 h-24 rounded-full bg-[#1FB6C1]/20 blur-3xl" />
          <div className="absolute inset-x-10 bottom-2 -z-10 h-20 rounded-full bg-[#0B3A63]/12 blur-2xl" />

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[30px] border border-[#0B3A63]/10 bg-white shadow-[0_25px_60px_rgba(11,58,99,0.12)]">
            <Image
              src="/preview.webp"
              alt="Exemple d’attestation carbone Certif-Scope avec résultat CO2e, méthode et vérification"
              width={1200}
              height={800}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* FLOATING CARD 1 */}
          <div className="absolute -left-4 top-6 hidden md:block rounded-xl border border-[#0B3A63]/10 bg-white px-4 py-3 text-left shadow-lg">
            <p className="text-xs uppercase text-[#64748B] font-semibold">
              Résultat
            </p>
            <p className="text-sm font-bold text-[#0B3A63]">
              CO₂e agrégé
            </p>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute -right-4 bottom-10 hidden md:block rounded-xl border border-[#0B3A63]/10 bg-white px-4 py-3 text-left shadow-lg">
            <p className="text-xs uppercase text-[#64748B] font-semibold">
              Vérification
            </p>
            <p className="text-sm font-bold text-[#0B3A63]">
              ✔ ID unique
            </p>
          </div>

        </div>

        {/* PROOF LINE */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full border border-[#0B3A63]/12 text-sm text-[#0B3A63] bg-white shadow-sm">
            PDF standardisé
          </span>
          <span className="px-4 py-2 rounded-full border border-[#0B3A63]/12 text-sm text-[#0B3A63] bg-white shadow-sm">
            Vérification indépendante
          </span>
          <span className="px-4 py-2 rounded-full border border-[#0B3A63]/12 text-sm text-[#0B3A63] bg-white shadow-sm">
            Résultat lisible
          </span>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-8 max-w-xl mx-auto text-xs text-[#64748B] leading-relaxed">
          Exemple illustratif. Attestation indicative basée sur les dépenses.
          Ce document ne constitue pas un inventaire GES complet ni un audit
          réglementaire CSRD/ESRS.
        </p>

        {/* LINK */}
        <div className="mt-6">
          <Link
            href="/fr/product"
            className="text-sm text-[#0B3A63] underline underline-offset-4 hover:text-[#1FB6C1] transition"
          >
            Voir la méthodologie complète →
          </Link>
        </div>

      </div>
    </section>
  );
}
