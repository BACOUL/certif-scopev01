import Link from "next/link";

export const INCLUDED_ITEMS = [
  "Un PDF personnalisé au nom de votre entreprise",
  "Une estimation CO₂e agrégée à partir des dépenses déclarées",
  "L’année de référence et la date d’émission",
  "La méthode, sa version et les limites de l’estimation",
  "Un identifiant et les éléments de vérification documentaire",
];

export default function OfferDetails() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-[#0B3A63]">Ce que comprennent les 89 €</h3>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#475569]">
        {INCLUDED_ITEMS.map(item => <li key={item}>{item}</li>)}
      </ul>
      <p className="text-sm leading-relaxed text-[#475569]">Paiement unique par document, sans abonnement. TVA non applicable selon le régime indiqué dans les mentions légales. Un même PDF peut être transmis à plusieurs destinataires pour la même entreprise, la même année et les mêmes données.</p>
      <p className="text-sm leading-relaxed text-[#475569]">Le support peut être contacté pour un incident de téléchargement, une question sur la commande ou une demande de correction. Une réémission n’est pas automatiquement incluse : ses conditions sont précisées après examen de votre demande.</p>
      <p className="text-sm leading-relaxed text-[#475569]">Le prix ne comprend pas un audit, une validation externe des émissions ni une garantie d’acceptation du document.</p>
      <Link href="/fr/contact/" className="inline-block font-semibold text-[#0B3A63] underline">Une question avant de commander ?</Link>
    </div>
  );
}
