"use client";

const isItems = ["Ein indikativer und standardisierter CO₂e-Indikator", "Deterministisch und bei identischer Erklärung reproduzierbar", "Für Einkaufs-, Onboarding- und Screening-Workflows strukturiert", "Mit Integritätsmechanismen und unabhängiger Verifizierung ausgegeben", "Geeignet für Dokumentation, Vergleich und vorläufige Bewertung"];
const isNotItems = ["Kein CSRD-, ESRS- oder regulatorisches Sustainability-Reporting", "Kein Treibhausgasinventar nach Scope 1, 2 oder 3", "Keine auditierte CO₂-Bilanz, Zertifizierung oder Lebenszyklusanalyse", "Nicht für gesetzliche Einreichungen oder regulatorische Pflichten gültig", "Kein Ersatz für eine fachliche oder wissenschaftliche CO₂-Analyse"];
const fitItems = ["Lieferanten-Onboarding mit Basis-Umweltindikator", "Bank-, Versicherungs- und Kredit-Screening", "Öffentliche Vergaben mit standardisierter Dokumentationsanforderung", "Organisationen ohne internes ESG-Team", "Grenzüberschreitende Workflows, die klare und vergleichbare Dokumente benötigen"];
const recipients = ["Einkaufs- und Sourcing-Teams", "Finanzinstitutionen", "Versicherungsanalysten und Underwriter", "Öffentliche Stellen", "Compliance- und Risikofunktionen"];
const notUseItems = ["Verpflichtendes CSRD- oder ESRS-Reporting", "Zertifizierte oder auditierte THG-Inventare", "CO₂-Buchhaltung auf Basis physischer Aktivitätsdaten", "Wissenschaftliche Modellierung oder Lebenszyklusanalysen", "Marketing- oder öffentliche Aussagen, die geprüfte Nachweise erfordern"];

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className={`space-y-3 text-sm leading-relaxed max-w-4xl ${light ? "text-white/90" : "text-gray-700"}`}>{items.map((item) => <li key={item}>• {item}</li>)}</ul>;
}

export default function Section7() {
  return (
    <section id="limitations-and-fit" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"><div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"><span className="mr-2">7.</span>Grenzen & Eignung</h2><p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed pl-6">Dieser Abschnitt definiert Umfang, relevante Anwendungsfälle und Grenzen der CO₂e-Bescheinigung. Ziel ist, Fehlinterpretationen in institutionellen, administrativen oder Compliance-Kontexten zu vermeiden.</p></div>
      <div className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Was die Bescheinigung IST</h3><BulletList items={isItems} /></div>
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/30 to-transparent opacity-25" /><h3 className="text-2xl font-semibold mb-4 relative z-10">Was die Bescheinigung NICHT IST</h3><div className="relative z-10"><BulletList items={isNotItems} light /></div></div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10"><div className="lg:col-span-2 p-10 rounded-xl bg-white border border-gray-200 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Wann sie geeignet ist</h3><BulletList items={fitItems} /></div><div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#1FB6C1]/30 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Typische Empfänger</h3><BulletList items={recipients} /></div></div>
      <div className="mt-16 p-10 rounded-xl bg-white border border-gray-200 shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Wann sie NICHT verwendet werden sollte</h3><BulletList items={notUseItems} /></div>
      <div className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent opacity-30" /><h3 className="text-2xl font-semibold mb-4 relative z-10">Abschließende Klarstellung</h3><p className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10">Die CO₂e-Bescheinigung liefert ein standardisiertes und indikatives Signal ausschließlich für Dokumentation und Screening. Verantwortung für Interpretation und Nutzung liegt beim Empfänger. Regulatorisches Reporting, Zertifizierung oder auditierte CO₂-Buchhaltung erfordern dedizierte Bewertungen nach den anwendbaren Standards.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
