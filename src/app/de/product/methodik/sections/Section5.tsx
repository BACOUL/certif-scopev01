"use client";

export default function Section5() {
  return (
    <section id="input-normalization" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">5.</span>Normalisierung der Eingaben</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Vor der CO₂e-Berechnung gelten feste Eingaberegeln. Der Motor akzeptiert nur strukturierte, numerische Werte in EUR und nimmt keine stillen Korrekturen vor.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Erforderliche Eingabestruktur</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Jährliche Ausgabe je Kategorie.</li><li>• Nur numerische Werte.</li><li>• Währung strikt in Euro.</li><li>• Ein Wert entspricht einer Kategorie.</li><li>• Leere Kategorien werden nicht extrapoliert.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Strikte Validierungsregeln</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Negative Werte werden abgelehnt.</li><li>• Nicht-numerische Zeichen werden abgelehnt.</li><li>• Leere Zeichenketten werden als null behandelt.</li><li>• Ungültige Werte stoppen die Berechnung.</li></ul></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Keine Inferenz, keine Schätzung</h3><p className="text-sm text-gray-700 leading-relaxed">Certif-Scope errät, interpretiert oder ergänzt fehlende Werte niemals. Es gibt keine KI, kein maschinelles Lernen, keine Glättung und keine prädiktive Auffüllung der Eingaben.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
