"use client";

const featureItems = [
  ["01", "Lesbares CO2e-Ergebnis", "Ein aggregiertes Ergebnis, das Kunden, Einkauf, Bank oder Partner schnell einordnen können."],
  ["02", "Methodik kurz erklärt", "Die spend-based Methodik wird knapp erklärt, mit Umfang, Annahmen und indikativem Charakter."],
  ["03", "Dokumentarisch kontrollierbar", "Dokument-ID, Datum, QR-Code und Prüfelemente erleichtern die externe Kontrolle."],
  ["04", "Weitergabefähiges Format", "Ein standardisiertes PDF für Kundenanfragen, Lieferantenportale, Bank- oder Versicherungsunterlagen."],
];

const proofPills = ["Aggregiertes Ergebnis", "Methodik kurz erklärt", "Dokument-ID", "Standardformat"];

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-7 w-7 rounded-full border-[4px] border-[#0B3A63]">
        <span className="absolute -bottom-1 -left-1 h-4 w-6 rounded-b-full border-b-[4px] border-l-[4px] border-[#1FB6C1]" />
        <span className="absolute left-[7px] top-[7px] h-2.5 w-4 rotate-[-45deg] border-b-[3px] border-l-[3px] border-[#0B3A63]" />
      </div>
      <div className="text-[13px] font-extrabold tracking-tight text-[#0B3A63]">
        Certif-<span className="text-[#1FB6C1]">Scope</span>
      </div>
    </div>
  );
}

function MiniQr() {
  return (
    <div className="grid h-14 w-14 grid-cols-5 grid-rows-5 gap-0.5 rounded-md border border-[#d7e2ea] bg-white p-1.5">
      {Array.from({ length: 25 }).map((_, index) => {
        const active = [0, 1, 3, 4, 5, 8, 11, 12, 14, 16, 18, 20, 21, 23, 24].includes(index);
        return <span key={index} className={active ? "bg-[#0B3A63]" : "bg-transparent"} />;
      })}
    </div>
  );
}

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
  const metaItems = [
    ["Referenz der Bescheinigung", "CS-SAMPLE-DE-2024-0001"],
    ["Ausstellungsdatum", "2024-05-20"],
    ["Gültig bis", "2025-05-20"],
    ["Aussteller", "Certif-Scope"],
  ];

  const summaryItems = [
    ["Dokumentstatus", "Indikativ · Aggregiert · Kontrollierbar"],
    ["Angezeigte Daten", "Nur CO2e-Ergebnis"],
    ["Empfohlene Verwendung", "Lieferant · Kunde · Bank · Versicherung"],
  ];

  return (
    <div className="relative mx-auto max-w-[760px] rounded-[34px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_28px_70px_rgba(11,58,99,0.14)] md:p-8">
      <div
        aria-label="Vorschau einer ungültigen deutschen Beispielbescheinigung"
        className="relative overflow-hidden rounded-2xl border border-[#d8e2ea] bg-white px-4 py-5 md:px-7 md:py-6"
      >
        <div className="pointer-events-none absolute left-[4%] top-[34%] z-0 w-[92%] -rotate-[22deg] text-center text-2xl font-black uppercase tracking-[0.08em] text-[#0B3A63]/10 md:text-5xl">
          Beispiel · nicht verwendbar
        </div>
        <div className="pointer-events-none absolute bottom-5 right-5 z-0 rotate-[-16deg] rounded-lg border border-[#0B3A63]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B3A63]/15 md:text-xs">
          Abgelaufenes Beispieldokument
        </div>

        <div className="relative z-10 flex items-start justify-between gap-4 border-b-2 border-[#0B3A63] pb-4">
          <div>
            <LogoMark />
            <p className="mt-3 text-[10px] leading-relaxed text-[#64748B] md:text-xs">
              https://www.certif-scope.com<br />
              Automatisierte Ausstellung · Standardisierte indikative Bescheinigung
            </p>
          </div>
          <div className="text-center">
            <MiniQr />
            <p className="mt-2 text-[8px] text-[#0B3A63] md:text-[10px]">QR-Code scannen, um die Demo zu prüfen</p>
          </div>
        </div>

        <div className="relative z-10 mt-6 text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#1FB6C1] md:text-xs">
            Indikatives CO2e-Dokument · standardisiert · kontrollierbar
          </p>
          <h3 className="mt-2 text-lg font-black uppercase leading-tight text-[#0B3A63] md:text-3xl">
            Indikative Bescheinigung zu CO2e-Emissionen
          </h3>
          <p className="mt-1 text-[10px] text-[#64748B] md:text-sm">
            Ausgestellt nach der internen standardisierten Methodik Certif-Scope CS-SB-v1
          </p>
          <p className="text-[9px] text-[#64748B] md:text-xs">
            Nicht regulatorisch · Methodikbasiert · Indikative Bescheinigung
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-6 max-w-[560px] rounded-xl border-2 border-[#0B3A63] bg-white px-4 py-4 text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#64748B] md:text-xs">
            Angegebene aggregierte indikative Emissionen
          </p>
          <p className="mt-1 font-serif text-4xl font-black text-[#0B3A63] md:text-5xl">
            15 tCO₂e
          </p>
          <p className="mt-1 text-[9px] text-[#64748B] md:text-xs">
            Dokumentarische Schätzung auf Basis aggregierter angegebener Ausgaben.
          </p>
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-2 overflow-hidden rounded-lg border border-[#cbd7e0] bg-white text-left md:grid-cols-4">
          {metaItems.map(([label, value]) => (
            <div key={label} className="border-b border-r border-[#cbd7e0] p-3 last:border-r-0 md:border-b-0">
              <p className="text-[7px] font-black uppercase tracking-[0.1em] text-[#81909D] md:text-[9px]">{label}</p>
              <p className="mt-1 text-[9px] font-extrabold text-[#0B3A63] md:text-xs">{value}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-4 rounded-lg border border-[#d8e2ea] bg-[#EEF9FA] p-3 text-left">
          <p className="text-[8px] font-black uppercase tracking-[0.08em] text-[#0B3A63] md:text-[10px]">
            1. Identifikation der Einheit
          </p>
          <p className="mt-1 text-[9px] text-[#223243] md:text-xs">
            Beispielunternehmen GmbH · DE · Unternehmensdienstleistungen · Referenzjahr 2024
          </p>
        </div>

        <div className="relative z-10 mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-[#d8e2ea] bg-white p-3 text-left">
            <p className="text-[8px] font-black uppercase tracking-[0.08em] text-[#0B3A63] md:text-[10px]">2. Art des Dokuments</p>
            <p className="mt-1 text-[9px] leading-relaxed text-[#475569] md:text-[11px]">
              Indikative CO2e-Bescheinigung zur Information, Vorprüfung und Entscheidungsunterstützung.
            </p>
          </div>
          <div className="rounded-lg border border-[#d8e2ea] bg-white p-3 text-left">
            <p className="text-[8px] font-black uppercase tracking-[0.08em] text-[#0B3A63] md:text-[10px]">3. Umfang</p>
            <p className="mt-1 text-[9px] leading-relaxed text-[#475569] md:text-[11px]">
              Spend-based Schätzung aus aggregierten Ausgabedaten, kein Audit und keine Zertifizierung.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-3 rounded-lg border border-[#d8e2ea] bg-[#EEF9FA] p-3 text-left">
          <p className="text-[8px] font-black uppercase tracking-[0.08em] text-[#0B3A63] md:text-[10px]">4. Vorgesehene Verwendung</p>
          <p className="mt-1 text-[9px] leading-relaxed text-[#475569] md:text-[11px]">
            Kundenanfragen, Lieferantenportale, Ausschreibungen, Bankunterlagen oder Versicherungsanfragen.
          </p>
        </div>

        <div className="relative z-10 mt-4 grid gap-2 text-left md:grid-cols-3">
          {summaryItems.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-[#d8e2ea] bg-white p-3">
              <p className="text-[7px] font-black uppercase tracking-[0.1em] text-[#81909D] md:text-[8px]">{label}</p>
              <p className="mt-1 text-[9px] font-extrabold text-[#0B3A63] md:text-[10px]">{value}</p>
            </div>
          ))}
        </div>

        <p className="relative z-10 mt-4 border-t border-[#d8e2ea] pt-3 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-[#0B3A63]/60 md:text-[10px]">
          Kostenloses Beispiel · keine ausgestellte Bescheinigung
        </p>
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
