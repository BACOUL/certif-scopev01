"use client";

export default function Section3() {
  return (
    <section id="why-the-product-exists" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/20 to-transparent" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">3.</span>Warum dieses Produkt existiert</h2>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">In Europa betreffen Klima-Transparenzpflichten vor allem große Unternehmen, Finanzinstitute und den öffentlichen Sektor. Diese Anforderungen wandern zunehmend in die Lieferketten, auch zu KMU, die nicht direkt regulatorisch berichtspflichtig sind.</p>
      </div>
      <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Die regulatorische Kaskade</h3>
        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">Organisationen unter europäischen Nachhaltigkeits- und Risikomanagementrahmen müssen Klimaexpositionen in ihren Wertschöpfungsketten bewerten. Daraus entstehen standardisierte Informationsanfragen an Lieferanten, unabhängig von deren eigenem regulatorischem Status.</p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Große Unternehmen unter der CSRD müssen Klimarisiken und Wertschöpfungsketten-Auswirkungen dokumentieren.</li>
          <li>• Die ESRS können Lieferanteninformationen erfordern, wenn das Thema wesentlich ist.</li>
          <li>• Finanzinstitute unter EBA ESG-Leitlinien werden zur Erhebung von CO₂e-Indikatoren bei Kunden und Gegenparteien angehalten.</li>
          <li>• Öffentliche Beschaffung integriert zunehmend Umweltindikatoren über Green-Public-Procurement-Logiken.</li>
        </ul>
        <p className="text-gray-700 text-sm mt-4">Praktisch führt dies dazu, dass KMU CO₂e-Indikatoren liefern müssen, obwohl sie keine vollständigen regulatorischen Berichte erstellen müssen.</p>
      </div>
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Die Marktlücke für KMU</h3>
        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mb-6">Die meisten Sustainability-Tools und Beratungsansätze sind für große Organisationen konzipiert. Sie beruhen auf detaillierten operativen Daten, spezialisierter Expertise und erheblichen Ressourcen, die KMU oft nicht haben.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed"><li>• Begrenzte interne ESG-Expertise</li><li>• Zeit-, Budget- und Ressourcenbeschränkungen</li></ul>
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed"><li>• Kein einfaches, standardisiertes Dokument für Dritte</li><li>• Schwierigkeit, Kohärenz und Glaubwürdigkeit der Zahlen zu zeigen</li></ul>
        </div>
        <p className="mt-8 text-[#0B3A63] text-sm leading-relaxed font-medium">Certif-Scope wurde geschaffen, um diese Lücke zu schließen: eine standardisierte, zugängliche CO₂e-Bescheinigung, die institutionelle Erwartungen berücksichtigt und zugleich realistisch für KMU nutzbar bleibt.</p>
      </div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
