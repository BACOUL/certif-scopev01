"use client";

export default function Section1() {
  return (
    <section id="product-overview" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none" aria-hidden="true" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">1.</span>Produktvorstellung</h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl relative z-10">Eine standardisierte CO₂e-Bescheinigung, vorbereitet für institutionelle Nutzung und entwickelt, um Anfragen Dritter zur Umweltinformation zu beantworten.</p>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Certif-Scope liefert eine strukturierte CO₂e-Bescheinigung für Organisationen, die einen Umweltindikator an Kunden, Einkaufsabteilungen, Finanzinstitute oder öffentliche Stellen kommunizieren müssen.</p>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Das Produkt richtet sich an KMU und mittelgroße Organisationen, die kein vollständiges regulatorisches CO₂-Reporting besitzen, aber dennoch standardisiert auf CO₂e-Anfragen in beruflichen oder institutionellen Kontexten antworten müssen.</p>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Der Liefergegenstand ist ein klares, kohärentes und teilbares Dokument mit einem aggregierten CO₂e-Indikator in festem Format, optimiert für Lesbarkeit, Review und Wiederverwendung durch Dritte, ohne zusätzliche Erklärungen zu benötigen.</p>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed relative z-10">Certif-Scope ist keine Zertifizierungsstelle und ersetzt weder regulatorisches Reporting noch ein Treibhausgas-Audit oder einen Compliance-Rahmen. Der Dienst liefert ein indikatives und standardisiertes Dokument für häufige Offenlegungsbedarfe, bleibt aber leicht, zugänglich und mit institutionellen Review-Prozessen kompatibel.</p>
      </div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
