"use client";

export default function Section9() {
  return (
    <section id="internal-controls-safeguards" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">9.</span>Interne Kontrollen und Schutzmechanismen</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Interne Kontrollen stellen sicher, dass der Berechnungsprozess deterministisch, gültig und strukturell kohärent bleibt.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Eingabekontrollen</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Nicht-numerische Werte werden abgelehnt.</li><li>• Negative Werte sind nicht erlaubt.</li><li>• Nicht gelistete Kategorien werden nicht angenähert.</li><li>• Leere Felder lösen keine Inferenz aus.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Schutzmechanismen während der Berechnung</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Jede Kategorie wird isoliert verarbeitet.</li><li>• Die Faktorversion wird vor Beginn der Berechnung gesperrt.</li><li>• Kein iteratives Neuberechnen.</li><li>• Keine dynamische Kalibrierung.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Reproduzierbarkeit</h3><p className="text-sm text-white/90 leading-relaxed">Die Berechnung nutzt keinen externen Dienst, keine Echtzeitabfrage und keine dynamische Anpassung. Gleiche Eingaben und gleiche Faktorversion erzeugen das gleiche Ergebnis.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
