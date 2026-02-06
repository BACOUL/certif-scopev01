export const metadata = {
  title: "Contact — Certif-Scope",
  description:
    "Contactez Certif-Scope pour le support, les demandes institutionnelles ou toute information générale relative aux attestations carbone.",
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* EN-TÊTE PAGE — ALIGNEMENT CANONIQUE */}
      <header className="mb-14">
        <p
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Contact & demandes
        </p>

        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Contact
        </h1>

        <p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Cette page fournit les informations de contact officielles de
          Certif-Scope, incluant le support, les demandes institutionnelles et
          les demandes générales liées aux attestations CO₂e et à la
          méthodologie.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENU — LARGEUR CANONIQUE */}
      <div className="max-w-4xl space-y-14">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Adresses de contact
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope peut être contacté via les adresses email officielles
            suivantes, selon la nature de votre demande :
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>support@certif-scope.com</strong> — support technique,
              génération d’attestations, accès et utilisation
            </li>
            <li>
              <strong>contact@certif-scope.com</strong> — demandes
              institutionnelles, méthodologiques ou générales
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Traitement des demandes
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Les messages sont traités uniquement dans le but de répondre à la
            demande reçue. Certif-Scope ne met pas en place de système de ticket
            et ne crée pas de comptes utilisateurs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Les échanges peuvent être conservés pour des besoins opérationnels
            et de support pendant une durée limitée, conformément à la Politique
            de confidentialité.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Protection des données
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Merci de ne pas inclure de données personnelles sensibles ni
            d’informations financières confidentielles dans vos messages.
            Certif-Scope traite uniquement les informations strictement
            nécessaires au traitement de votre demande.
          </p>
        </section>

      </div>
    </section>
  );
}
