"use client";

export default function Section6() {
  return (
    <section id="transformation-chain" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">6.</span>Transformationskette</h2>
        <p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Die validierten Eingaben werden in einer linearen und deterministischen Verarbeitungskette behandelt. Keine Inferenz, keine statistische Modellierung und keine automatische Umverteilung greifen ein.</p>
      </div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Linearer Verarbeitungsfluss</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Erfassung der finanziellen Eingaben je Kategorie.</li><li>• Validierung von Format und Kategorien.</li><li>• Zuordnung zu einer festen internen Klassifikation.</li><li>• Zuweisung eines versionierten Emissionsfaktors.</li><li>• Aggregation zum Gesamtwert in CO₂e.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Explizit verbotene Transformationen</h3><ul className="space-y-2 text-sm text-white/90 leading-relaxed"><li>• Keine prädiktive Modellierung.</li><li>• Keine Interpolation fehlender Daten.</li><li>• Keine lieferantenbasierte Emissionsschätzung.</li><li>• Keine Währungsumrechnung.</li><li>• Keine KI-Anpassung.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
