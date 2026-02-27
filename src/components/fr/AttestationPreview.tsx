// PATH: src/components/fr/AttestationPreview.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AttestationPreviewFR() {
  return (
    <section
      id="attestation-preview"
      data-section="attestation-preview"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* SECTION LABEL */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          Format de l’attestation CO₂e — Standardisé • Dépenses • Vérifiable
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8" />

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6">
          Exemple illustratif du format de l’attestation
        </h2>

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Cette image illustre la structure standardisée et la mise en forme
          visuelle d’une attestation CO₂e Certif-Scope. Elle est fournie
          uniquement à titre illustratif pour présenter le format du document et
          ne correspond pas à une attestation réellement émise. Chaque
          attestation est générée individuellement à partir des données
          financières déclarées par l’utilisateur.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Exemple illustratif du format standardisé de l’attestation CO₂e Certif-Scope, présenté à titre informatif uniquement"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
              className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        {/* INTERNAL LINK + DISCLAIMER */}
        <div className="mt-12 flex flex-col items-center">
          {/* INTERNAL NAVIGATION LINK */}
          <Link
            href="/fr/product"
            className="text-sm text-[#0B3A63] dark:text-gray-300 underline hover:text-[#1FB6C1]"
          >
            Voir la méthodologie complète →
          </Link>

          {/* DISCLAIMER */}
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            Exemple illustratif uniquement. Estimation indicative basée sur les
            dépenses. Ce document n’est ni conforme CSRD/ESRS ni un inventaire
            d’émissions de gaz à effet de serre audité.
          </p>
        </div>
      </div>
    </section>
  );
            }
