"use client";

import Link from "next/link";

const problemCards = [
  {
    icon: "✉",
    title: "Demande réelle, niveau attendu flou",
    text: "Un client, un acheteur, une banque, un assureur ou un dossier fournisseur vous demande un bilan carbone, un justificatif CO₂ ou une preuve ESG, sans préciser clairement le niveau exact attendu ni le format à transmettre.",
  },
  {
    icon: "⚠",
    title: "Audit complet souvent disproportionné",
    text: "Dans de nombreux cas, lancer un bilan carbone complet, un accompagnement long ou une mission de conseil coûteuse n’est pas adapté au besoin immédiat. La demande existe, mais la réponse attendue n’est pas forcément un audit exhaustif.",
  },
  {
    icon: "⏱",
    title: "Réponse rapide souvent nécessaire",
    text: "Le besoin est souvent opérationnel : débloquer un dossier, répondre à un appel d’offres, rassurer un donneur d’ordre, compléter un référencement fournisseur ou fournir rapidement un document carbone lisible.",
  },
];

const realityItems = [
  "Demande client ou acheteur",
  "Appel d’offres ou référencement fournisseur",
  "Revue bancaire, assurance ou conformité interne",
];

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_58%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-56 w-56 rounded-full bg-[#1FB6C1]/5 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-72 w-72 rounded-full bg-[#0B3A63]/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
          Comprendre la demande
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
          Pourquoi on vous demande un bilan carbone
          <br className="hidden md:block" />
          <span className="text-[#0B3A63]"> et pourquoi la réponse attendue reste souvent floue</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#475569] md:text-lg">
          Dans la pratique, la demande est souvent légitime, mais le niveau exact attendu,
          le format à fournir et la solution adaptée restent incertains. C’est ce décalage
          qui bloque les PME et fait perdre du temps sur des dossiers parfois urgents.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {realityItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#0B3A63]/10 bg-[#F8FAFC] px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problemCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(11,58,99,0.08)] md:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-lg font-bold text-[#1FB6C1]">
                {card.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-[#0B3A63]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-7 shadow-sm md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
            Réalité terrain
          </p>

          <h3 className="mx-auto mt-3 max-w-3xl text-center text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">
            Le vrai problème n’est pas toujours l’absence de bonne volonté.
            <br className="hidden md:block" />
            C’est souvent l’absence d’une réponse simple, lisible et exploitable rapidement.
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-5">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Demande mal cadrée
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                Vous savez qu’on vous demande quelque chose, mais pas exactement le
                bon niveau de détail à fournir.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-5">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Temps et coût disproportionnés
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                Les solutions classiques peuvent être trop lourdes par rapport à
                l’objectif immédiat du dossier.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0B3A63]/8 bg-white p-5">
              <p className="text-sm font-semibold text-[#0B3A63]">
                Risque de blocage
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                Sans réponse rapide, le dossier avance moins vite, la relation
                commerciale se tend et la demande reste ouverte.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-lg font-semibold leading-relaxed text-[#0B3A63] md:text-xl">
            Dans beaucoup de situations, ce qui est attendu en premier est surtout un
            document carbone clair, cohérent, transmissible rapidement et directement utilisable.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-[#475569] md:text-lg">
            Certif-Scope génère une{" "}
            <strong className="font-semibold text-[#0B3A63]">
              attestation carbone simple, standardisée et vérifiable
            </strong>{" "}
            pour répondre rapidement à cette demande, sans lancer un audit carbone complet.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/fr/generate"
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4] hover:shadow-[0_18px_36px_rgba(31,182,193,0.34)]"
          >
            Générer mon document CO₂e
          </Link>
        </div>
      </div>
    </section>
  );
}
