"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPage"
      className="relative max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-14 md:pb-20 text-center"
    >
      <span className="sr-only" itemProp="alternativeHeadline">
        Bilan carbone PME : obligation, coût, demande client et solution simplifiée pour obtenir un document CO₂e vérifiable.
      </span>

      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F3FBFC] -z-10" />

      {/* SURTITRE */}
      <p
        className="text-xs md:text-sm font-semibold tracking-wide text-[#0B3A63]/70 mb-3 uppercase"
        itemProp="about"
      >
        Bilan carbone PME • réponse simple pour demandes clients, appels d’offres et banques
      </p>

      {/* H1 */}
      <h1
        itemProp="headline"
        className="text-[1.95rem] md:text-[3.15rem] font-extrabold text-[#0B3A63] leading-tight tracking-tight"
      >
        Bilan carbone PME :{" "}
        <span className="whitespace-nowrap">obtenez un document CO₂e</span>
        <br />
        <span className="text-[#15B097]">simple, rapide et vérifiable</span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto mt-4 leading-relaxed"
        itemProp="description"
      >
        Répondez à une demande de client, d’acheteur, de donneur d’ordre, de banque
        ou d’assurance avec un document CO₂e standardisé, émis en quelques minutes,
        sans lancer un audit carbone complet.
      </p>

      {/* DIRECT ANSWER BLOCK */}
      <div className="mt-6 max-w-3xl mx-auto rounded-2xl border border-[#D9E6EE] bg-white/90 shadow-sm p-4 md:p-5 text-left">
        <p className="text-sm md:text-base font-semibold text-[#0B3A63]">
          Une PME doit-elle obligatoirement faire un bilan carbone ?
        </p>
        <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-[#475569]">
          Dans la plupart des cas, non. En pratique, la demande vient souvent d’un
          client, d’un appel d’offres, d’un processus de référencement fournisseur
          ou d’un dossier bancaire. Certif-Scope propose une réponse simple à cette
          demande : un résultat CO₂e agrégé, présenté dans un PDF standardisé et
          vérifiable par un tiers.
        </p>
      </div>

      {/* TRUST / VALUE LINE */}
      <p className="mt-4 text-sm text-[#0B3A63]/85 font-medium">
        Prix fixe • Sans abonnement • Vérification tierce • Utilisable dans un cadre fournisseur
      </p>

      {/* LEGAL / METHOD */}
      <div className="mt-4 max-w-2xl mx-auto space-y-2">
        <p className="text-xs text-slate-500 leading-relaxed">
          Méthode indicative spend-based (dépenses × facteurs d’émission), fondée sur
          des référentiels reconnus tels que le GHG Protocol, l’ISO 14064-1, l’ISO 14083,
          l’EU Taxonomy, les ESRS et des bases de facteurs d’émission publiées.
        </p>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          Document indicatif : ne constitue pas un inventaire GES complet, un audit réglementaire,
          un reporting CSRD/ESRS ni une comptabilité carbone exhaustive des scopes 1, 2 et 3.
          Les données d’entrée restent sous la responsabilité de l’utilisateur.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-7">
        <Link
          href="/fr/generate"
          aria-label="Obtenir mon document CO2e pour PME"
          className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-12 py-4 rounded-xl shadow-md transition"
        >
          Obtenir mon document CO₂e
        </Link>

        <Link
          href="/fr/bilan-carbone-pme"
          aria-label="Comprendre le bilan carbone pour une PME"
          className="text-[#0B3A63] font-semibold px-8 py-4 rounded-xl border border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition"
        >
          Comprendre le bilan carbone PME
        </Link>
      </div>

      {/* MICRO CONTEXT */}
      <p className="mt-4 text-xs text-[#64748B]">
        Cas d’usage fréquents : appel d’offres, référencement fournisseur, onboarding ESG, dossier bancaire.
      </p>

      {/* IMAGE */}
      <div className="flex justify-center mt-7 md:mt-8">
        <Image
          itemProp="primaryImageOfPage"
          src="/hero-attestation.webp"
          alt="Exemple de document CO2e simplifié pour PME avec identification, résultat agrégé, méthode indicative et vérification indépendante."
          width={900}
          height={600}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl rounded-2xl shadow-lg border border-slate-100"
        />
      </div>

      {/* TRUST LINE */}
      <p className="text-sm text-[#0B3A63]/80 font-medium mt-6">
        Vérifiable indépendamment, sans dépendre d’un échange commercial ou d’un accès privé.
      </p>
    </section>
  );
}
