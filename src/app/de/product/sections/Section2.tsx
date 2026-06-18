"use client";

const benefitCards = [
  ["01", "Sofortige Verfügbarkeit", "Die Bescheinigung wird über einen standardisierten und deterministischen Ansatz schnell erzeugt, ohne operative Messgrößen, physische Datenerhebung oder vorherige CO₂-Expertise."],
  ["02", "Institutionell nutzbares Dokument", "Das Format passt zu Lieferanten-Onboarding, ESG-Screening, Einkaufsfragebögen und Due-Diligence-Prozessen durch Dritte."],
  ["03", "Explizite Gültigkeitsreferenz", "Jede Bescheinigung enthält eine eindeutige Kennung, mit der Dritte die Authentizität ohne Konto und ohne technisches Spezialwerkzeug bestätigen können."],
  ["04", "Deterministische Kohärenz", "Identische Angaben führen zum gleichen Ergebnis. Das unterstützt Stabilität, Vergleichbarkeit und vorhersehbare Review-Prozesse."],
  ["05", "Ohne Fachwissen zugänglich", "Kein Berater, keine Spezialsoftware und kein internes Sustainability-Team sind erforderlich. Der Ablauf ist bewusst einfach und geführt."],
  ["06", "Mehrsprachige europäische Nutzung", "Mehrere europäische Sprachen unterstützen grenzüberschreitende Lieferantenbeziehungen und institutionelle Review-Workflows."],
];

export default function Section2() {
  return (
    <section id="key-benefits" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none" aria-hidden="true" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">2.</span>Zentrale Vorteile</h2>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl relative z-10">Dieser Abschnitt fasst den praktischen Nutzen der CO₂e-Bescheinigung zusammen. Er beschreibt weder die Berechnungsmethode noch die Emissionsfaktoren.</p>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">Certif-Scope liefert eine standardisierte CO₂e-Bescheinigung für institutionelle Nutzung. Jeder Vorteil adressiert eine konkrete Anforderung aus Ausschreibungen, Lieferanten-Onboarding, ESG-Analysen oder Due-Diligence-Prozessen in Europa.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {benefitCards.map(([number, title, text], index) => (
          <div key={number} className={`p-8 rounded-xl border shadow-sm hover:shadow-md transition ${index % 2 ? "bg-[#F8FAFC] border-[#1FB6C1]/30" : "bg-white border-gray-200"}`}>
            <div className="text-[#1FB6C1] text-4xl font-bold mb-3">{number}</div>
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
