"use client";

export default function Section7() {
  return (
    <section id="emission-factor-assignment" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">7.</span>Zuweisung der Emissionsfaktoren</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Jede finanzielle Kategorie wird deterministisch einem einzigen Emissionsfaktor aus einem versionierten Datensatz zugeordnet. Keine kontextuelle Substitution greift ein.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Zuordnungsprinzipien</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Jede Kategorie entspricht einer internen Klassifikation.</li><li>• Jede Klassifikation entspricht einem Emissionsfaktor.</li><li>• Jeder Faktor ist an eine Datensatzversion gebunden.</li><li>• Kein dynamisches Remapping.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Version Locking</h3><p className="text-sm text-gray-700 leading-relaxed">Die Faktorversion wird zum Zeitpunkt der Berechnung eingefroren. Updates ändern niemals vergangene Bescheinigungen.</p></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Verbotenes Verhalten</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine Schätzung anhand der Lieferantenidentität.</li><li>• Keine gemischten Faktoren.</li><li>• Keine prädiktive Modellierung.</li><li>• Keine Substitution bei unvollständigen Kategorien.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
