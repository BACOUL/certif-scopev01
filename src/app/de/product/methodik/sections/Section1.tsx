"use client";

export default function Section1() {
  return (
    <section id="methodology-scope-objective" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">1.</span>Umfang & Ziel der Methodik</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Diese Section definiert den exakten Umfang, die Grenzen und den institutionellen Zweck der Certif-Scope Methodik. Das Modell bleibt strikt auf eine spend-based Umrechnung finanzieller Ausgaben in indikative CO₂e-Indikatoren begrenzt.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Definierter Umfang</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Umrechnung jährlicher Ausgaben in CO₂e-Schätzungen.</li><li>• Emissionsfaktoren je Kategorie in kg CO₂e / €.</li><li>• Ausrichtung an der spend-based Logik des GHG Protocol Corporate Standard.</li><li>• Deterministische und reproduzierbare Ergebnisse mit versionierten Faktoren.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Berechnungskette</h3><p className="text-sm text-gray-700 leading-relaxed">Finanzielle Eingaben (EUR) → Kategorie-Mapping → Auswahl der Emissionsfaktoren → deterministische Berechnung → CO₂e-Ergebnis mit eingebetteten Versionsmetadaten.</p></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Ausdrücklich außerhalb des Umfangs</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine physischen Aktivitätsdaten.</li><li>• Keine Lebenszyklusanalyse.</li><li>• Keine lieferantenspezifischen Emissionen.</li><li>• Keine operativen Scope-1- oder Scope-2-Emissionen.</li><li>• Keine Gleichwertigkeit mit verpflichtendem CSRD- oder ESRS-Reporting.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
