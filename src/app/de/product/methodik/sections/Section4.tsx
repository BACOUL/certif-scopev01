"use client";

export default function Section4() {
  return (
    <section id="categories-boundaries" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">4.</span>Kategorien und Grenzen</h2>
        <p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Die Methodik verwendet feste wirtschaftliche Kategorien mit deterministischem Umfang. Es gibt keine automatische Neuinterpretation, Umverteilung oder Rekategorisierung.</p>
      </div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Verwendete Kategorien</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Energie und Versorgungsleistungen.</li><li>• Bürobetrieb.</li><li>• IT-Ausrüstung und digitale Services.</li><li>• Transport und Logistik.</li><li>• Professionelle Dienstleistungen.</li><li>• Marketing und Medieneinkauf.</li><li>• Bauarbeiten und Wartung.</li><li>• Sonstige gekaufte Waren und Dienstleistungen.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Nicht enthaltene Operationen</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine direkten Scope-1-Emissionen.</li><li>• Keine Scope-2-Stromberechnung.</li><li>• Keine Pendelwege der Mitarbeitenden.</li><li>• Keine lieferantenspezifischen Emissionsanpassungen.</li><li>• Keine Ausweitung auf Lebenszyklusgrenzen.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Deterministische Kategorisierung</h3><ul className="space-y-2 text-sm text-white/90 leading-relaxed"><li>• Eine Ausgabe kann nur einer Kategorie angehören.</li><li>• Keine Umverteilung zwischen Kategorien.</li><li>• Kein proportionaler Split für Mehrzweckausgaben.</li><li>• Die Zuordnung folgt der wirtschaftlichen Funktion.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
