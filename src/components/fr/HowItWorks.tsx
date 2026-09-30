import Link from "next/link";

const steps = [
  { id: "01", title: "Préparez vos données", text: "Renseignez votre entreprise et sept catégories de dépenses externes annuelles hors taxes. Vérifiez avec votre destinataire que ce périmètre répond à sa demande." },
  { id: "02", title: "Vérifiez votre estimation", text: "Consultez le résultat indicatif, l’entreprise et l’année de référence dans le récapitulatif avant paiement. Vous pouvez revenir modifier votre saisie." },
  { id: "03", title: "Téléchargez et archivez votre PDF", text: "Après confirmation du paiement ou utilisation d’une clé de pack, téléchargez votre document. Conservez une copie avant de le transmettre." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-[#0B3A63] md:text-4xl">Votre document en trois étapes</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(step => (
            <li key={step.id} className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 md:p-7">
              <span className="text-sm font-bold text-[#0B3A63]">{step.id}</span>
              <h3 className="mt-3 text-lg font-semibold text-[#0B3A63]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <Link href="/fr/generate/" className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-7 py-3 font-semibold text-white transition hover:bg-[#082C4B]">Préparer mon attestation</Link>
        </div>
      </div>
    </section>
  );
}
