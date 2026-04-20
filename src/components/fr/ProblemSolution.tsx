"use client";

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* LABEL */}
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.18em] text-[#64748B] font-semibold mb-4">
          Comprendre la demande
        </p>

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight max-w-3xl mx-auto">
          On vous demande un bilan carbone… <br className="hidden md:block" />
          <span className="text-[#0B3A63]">
            mais que faut-il vraiment fournir ?
          </span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-center text-base md:text-lg text-[#475569] max-w-2xl mx-auto">
          Dans la plupart des cas, la demande est réelle… mais le niveau attendu
          reste flou, et les solutions disponibles sont souvent trop lourdes.
        </p>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="group rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 rounded-lg bg-[#1FB6C1]/10 flex items-center justify-center text-[#1FB6C1] font-bold text-lg">
              ?
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#0B3A63]">
              Demande floue
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              On vous demande un bilan carbone sans préciser le niveau attendu
              ni le format exact à fournir.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 rounded-lg bg-[#1FB6C1]/10 flex items-center justify-center text-[#1FB6C1] font-bold text-lg">
              ⚠
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#0B3A63]">
              Solution disproportionnée
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              Un audit carbone complet est long, coûteux et souvent inutile
              pour répondre à ce type de demande.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 rounded-lg bg-[#1FB6C1]/10 flex items-center justify-center text-[#1FB6C1] font-bold text-lg">
              ⚡
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#0B3A63]">
              Besoin immédiat
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              Vous devez fournir rapidement un document clair, lisible et
              exploitable, sans complexité inutile.
            </p>
          </div>
        </div>

        {/* TRANSITION */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-semibold text-[#0B3A63] leading-relaxed">
            Dans la majorité des cas, on attend surtout un document carbone
            lisible, standardisé et directement utilisable.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Certif-Scope génère une{" "}
            <strong className="text-[#0B3A63] font-semibold">
              attestation carbone simple, standardisée et vérifiable
            </strong>{" "}
            pour répondre immédiatement à cette demande, sans lancer un audit
            complet.
          </p>
        </div>

        {/* CTA OPTIONAL */}
        <div className="mt-12 flex justify-center">
          <a
            href="/fr/generate"
            className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
          >
            Générer mon document CO₂e
          </a>
        </div>
      </div>
    </section>
  );
}
