"use client";

export default function Section8() {
  return (
    <section id="calculation-flow-formulas" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">8.</span>Berechnungsfluss und Formeln</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Diese Section beschreibt den internen Ablauf von der validierten Ausgabe bis zur finalen CO₂e-Schätzung. Jeder Schritt ist linear und reproduzierbar.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Zentrale Formel</h3><pre className="p-4 rounded-lg border bg-[#F8FAFC] text-[#0B3A63] text-sm overflow-x-auto">Emissionen Kategorie = Ausgabe Kategorie mal Faktor Kategorie</pre></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Aggregationslogik</h3><pre className="p-4 rounded-lg border bg-white text-[#0B3A63] text-sm overflow-x-auto">Gesamtemissionen = Summe aller Kategorien</pre></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Verbotene Rechenverhalten</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine prädiktive Modellierung.</li><li>• Keine Rekonstruktion von Zeitreihen.</li><li>• Keine gewichteten Mittelwerte.</li><li>• Keine lieferantenspezifischen Anpassungen.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
