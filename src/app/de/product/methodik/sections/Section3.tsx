"use client";

export default function Section3() {
  return (
    <section id="mathematical-model" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">3.</span>Mathematisches Modell</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Diese Section beschreibt die exakte mathematische Struktur des Certif-Scope Berechnungsmotors: feste Variablen, lineare Regeln und deterministische Behandlung jeder Kategorie.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Grundformel je Kategorie</h3><pre className="p-4 rounded-lg border bg-[#F8FAFC] text-[#0B3A63] text-sm overflow-x-auto">Emissionen Kategorie = Ausgaben Kategorie × Emissionsfaktor Kategorie</pre></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Variablen</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Emissionen = Emissionen der Kategorie in kg CO₂e.</li><li>• Ausgaben = Ausgaben der Kategorie in Euro.</li><li>• Emissionsfaktor = kg CO₂e pro Euro.</li><li>• Gesamtwert = Summe aller Kategorien.</li></ul></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Gesamtformel</h3><pre className="p-4 rounded-lg border bg-[#F8FAFC] text-[#0B3A63] text-sm overflow-x-auto">Gesamtemissionen = Summe aller Kategorie-Emissionen</pre></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Deterministische Eigenschaften</h3><ul className="space-y-2 text-sm text-white/90 leading-relaxed"><li>• Identische Eingaben erzeugen immer identische Ergebnisse.</li><li>• Keine probabilistische oder prädiktive Annahme.</li><li>• Keine Regression, keine Anpassungskurve.</li><li>• Keine versteckten Variablen oder Korrekturkoeffizienten.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
