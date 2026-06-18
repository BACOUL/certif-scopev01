"use client";

const additionalUses = [
  "Interne ESG-Dashboards ohne physische Aktivitätsdaten",
  "Lieferantendokumentation, die von Großkunden verlangt wird",
  "Partner-Onboarding und Due-Diligence-Dossiers",
  "Screening auf automatisierten Einkaufsplattformen",
  "Periodische Bank-Reviews mit aktuellen Umweltindikatoren",
];

export default function Section6() {
  return (
    <section id="usage-scenarios" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"><div className="absolute left-0 top-0 h-full w-2 bg-[#1FB6C1]" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] pl-6"><span className="mr-2">6.</span>Anwendungsszenarien</h2><p className="text-lg text-gray-700 max-w-4xl leading-relaxed mt-6 pl-6">Die CO₂e-Bescheinigung ist für Situationen konzipiert, in denen eine Organisation einen standardisierten Umweltindikator liefern muss, ohne ein vollständiges THG-Inventar oder regulatorisches ESG-Reporting zu erstellen.</p></div>
      <div className="mt-12 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl max-w-4xl"><p className="text-sm text-gray-600 leading-relaxed">Die folgenden Szenarien spiegeln häufige institutionelle und administrative Nutzungen wider, bei denen ein indikatives und standardisiertes CO₂e-Dokument zu Screening-, Vergleichs- oder Dokumentationszwecken verlangt wird. Die Bescheinigung ersetzt keine auditierte CO₂-Buchhaltung und kein regulatorisches ESG-Reporting.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20"><div className="space-y-10 lg:col-span-2"><div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63]">Einkauf & Lieferanten-Onboarding</h3><p className="mt-3 text-sm text-gray-700 leading-relaxed">Einkaufsabteilungen verlangen oft vergleichbare Umweltindikatoren beim Lieferanten-Onboarding oder bei Ausschreibungen. Die Bescheinigung liefert ein standardisiertes Dokument für RFP-Antworten und Lieferantenqualifikation.</p></div><div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/40 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63]">Versicherung, Risiko & Underwriting</h3><p className="mt-3 text-sm text-gray-700 leading-relaxed">Versicherer können Umweltindikatoren für Kundenklassifizierung, Portfolioanalyse oder Underwriting-Entscheidungen anfragen. Die Bescheinigung liefert ein klares und kohärentes Dokument für Versicherungs- und Verlängerungsdossiers.</p></div></div><div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-lg"><h3 className="text-2xl font-semibold mb-3">Bank & Kreditanalyse</h3><p className="text-white/90 text-sm leading-relaxed">Finanzinstitute dokumentieren zunehmend Umwelt-Expositionen in Kreditprüfung und Kundenmonitoring. Die Bescheinigung liefert ein indikatives CO₂e-Signal, das in Kreditdossiers referenziert werden kann, ohne vollständige ESG-Offenlegung zu verlangen.</p></div></div>
      <div className="mt-16 p-10 bg-white rounded-xl shadow-md border border-gray-200"><h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Öffentliche Vergaben & administrative Dossiers</h3><p className="text-sm text-gray-700 leading-relaxed max-w-4xl">Öffentliche Beschaffungsverfahren können Umweltindikatoren als Eignungs- oder Bewertungskriterien enthalten. Die Bescheinigung vereinfacht Antworten durch ein lesbares und verifizierbares Dokument für administrative Reviews.</p></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm"><h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Zusätzliche Anwendungsfälle</h3><ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">{additionalUses.map((item) => <li key={item}>• {item}</li>)}</ul><p className="mt-6 text-sm text-gray-700 leading-relaxed">Diese Anwendungsfälle spiegeln praktische nicht-regulatorische Situationen wider, in denen ein standardisiertes Umweltdokument für Vergleich oder Dokumentation verlangt wird.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
