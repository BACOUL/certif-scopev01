"use client";

import Image from "next/image";

const featureItems = [
  ["01", "Lesbares CO2e-Ergebnis", "Ein aggregiertes Ergebnis, das Kunden, Einkauf, Bank oder Partner schnell einordnen können."],
  ["02", "Methodik kurz erklärt", "Die spend-based Methodik wird knapp erklärt, mit Umfang, Annahmen und indikativem Charakter."],
  ["03", "Dokumentarisch kontrollierbar", "Dokument-ID, Datum, QR-Code und Prüfelemente erleichtern die externe Kontrolle."],
  ["04", "Weitergabefähiges Format", "Ein standardisiertes PDF für Kundenanfragen, Lieferantenportale, Bank- oder Versicherungsunterlagen."],
];

const proofPills = ["Aggregiertes Ergebnis", "Methodik kurz erklärt", "Dokument-ID", "Standardformat"];

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
        {text}
      </p>
    </div>
  );
}

function AttestationPreview() {
  return (
    <div className="relative mx-auto max-w-[620px] rounded-[34px] border border-[#0B3A63]/10 bg-white p-4 shadow-[0_28px_70px_rgba(11,58,99,0.14)] md:p-6">
      <div className="relative aspect-[1242/1756] w-full overflow-hidden rounded-2xl border border-[#d8e2ea] bg-white">
        <Image
          src="/de-home-certificate-preview.png"
          alt="Deutsche Certif-Scope Beispielbescheinigung mit Wasserzeichen und veralteten Beispieldaten"
          fill
          sizes="(max-width: 768px) 92vw, 620px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function FeaturesDE() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="CO2e-Bescheinigung"
          title="Das ist das Dokument, das Sie weitergeben"
          text="Ein Dokument für Kundenanfragen, Ausschreibungen, Lieferantenportale oder einfache Finanzierungs- und Versicherungsprozesse."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="relative">
            <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-[#64748B] md:text-sm">
              Dokumentvorschau
            </p>
            <AttestationPreview />
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {proofPills.map((pill) => (
                <span key={pill} className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {featureItems.map(([id, title, text]) => (
              <div key={id} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1FB6C1]/12 bg-[#1FB6C1]/10 text-sm font-bold text-[#1FB6C1]">
                    {id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0B3A63]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B] md:text-[15px]">{text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[26px] border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] md:text-sm">
                Wichtige Klarstellung
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#475569] md:text-lg">
                Es handelt sich um eine <strong className="font-semibold text-[#0B3A63]">indikative Bescheinigung</strong> auf Basis deklarierter Ausgaben. Das Dokument ist kein umfassendes THG-Inventar und kein CSRD-/ESRS-Bericht.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium text-[#0B3A63]/80 md:text-base">
            Ein Dokument, das unmittelbar weitergegeben werden kann.
          </p>
          <a
            href="#references-officielles"
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-7 py-3 text-base font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
          >
            Methodischen Rahmen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
