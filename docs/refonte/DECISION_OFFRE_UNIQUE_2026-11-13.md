# Décision commerciale — une seule offre Certif-Scope (13 novembre 2026)

## Décision du propriétaire

**Certif-Scope ne commercialise qu'un seul nouveau produit : la fiche de données carbone fournisseur, fondée sur des consommations d'énergie physiques, le scope 1 et le scope 2 location-based.**

L'ancienne attestation CO₂e indicative *spend-based* cesse d'être mise en avant et proposée à de nouveaux acheteurs. Elle n'est **pas supprimée du code**, afin de préserver les documents émis, les commandes, droits et crédits historiques tant que la migration et les conditions de service n'ont pas été vérifiées.

## Fondement européen — correctement limité

Le **règlement délégué (UE) 2026/1560**, publié au JOUE le 21 septembre 2026, établit une **norme volontaire** de reporting de durabilité. L'annexe I, point B3, prévoit :

- Paragraphe 32 : consommation totale d'énergie en MWh et, lorsque l'information est disponible, ventilation électricité/combustibles et renouvelable/non renouvelable.
- Paragraphe 33 : estimation des émissions brutes absolues en tCO₂e, avec scope 1 et scope 2 *location-based*, y compris l'énergie achetée (électricité, chaleur, vapeur, froid).
- Ces informations sont volontaires pour les entreprises comptant **10 salariés ou moins**.
- Le plafonnement de certaines demandes d'informations de la chaîne de valeur (article 3, annexe II) s'applique aux exercices ouverts **à compter du 1er janvier 2027**, avec des modalités distinctes pour les entreprises de 10 salariés ou moins. Il ne rend pas automatiquement les PME redevables d'un rapport ou d'un achat Certif-Scope.

Références officielles : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560 ; directive (UE) 2026/470 : https://eur-lex.europa.eu/eli/dir/2026/470/oj

## Réalité technique et limites du moteur actuel

Le moteur de la PR n°107 **ne remplit pas encore tous les indicateurs et cas B3**, malgré les améliorations enregistrées après cette première décision :

- Périodes 2023–2025 en calcul historique ; 2026 désormais disponible **en aperçu provisoire uniquement** (année non close), achat 2026 toujours bloqué ; facteurs ADEME historiques à actualiser/valider.
- Ventilation renouvelable/non renouvelable désormais **calculée en MWh uniquement quand chaque ligne possède une quantité renouvelable justifiée par un relevé ou une facture** ; sinon, la ventilation s'affiche « non renseignée » (jamais zéro inventé). Ces déclarations ne sont pas auditées.
- Absence des facteurs nécessaires pour de nombreux postes pertinents : fluides frigorigènes, combustibles autres que gaz/diesel/essence, processus industriels, chaleur/vapeur/froid achetés, autoproduction.
- Marché limité à la France continentale. Les postes déclarés concernés sans facteur validé empêchent actuellement l'achat.
- Vérification Ed25519 **des données JSON**, non signature PAdES du PDF ; aucune certification ni vérification de la véracité des déclarations.

**Message commercial autorisé** : « Aide à préparer certaines données énergie et émissions du point B3 ». Ne pas écrire « conforme à B3 », « certifié européen », « obligatoire pour toutes les PME » ou « accepté par tous les donneurs d'ordre » avant justification technique, juridique et, le cas échéant, acceptation des destinataires.

## Règles de gamme et d'expérience client

1. Une seule offre et un seul CTA publics : **Fiche carbone fournisseur**. Prix actuellement affiché de **89 €** à valider.
2. Site, publicité, SEO, FAQ, PDF spécimen et navigation : référencement centré sur cette offre et les besoins concrets des petites entreprises.
3. Ancien parcours spend-based accessible uniquement comme **service historique** : le lien public commercial a été retiré, et l'API qui créait de nouvelles ventes `/api/spend/checkout` renvoie 410.
4. Conserver jusqu'à reprise validée : anciens PDF, accès aux documents, vérification, paiements historiques et soldes. Les crédits historiques importés restent exclusivement affectés à l'ancien produit, sauf **accord explicite du client ou modification contractuelle validée**.
5. **Aucun droit réel migré à ce jour**. Le système de migration est une préparation sous tests ; ne pas déclarer la compatibilité client acquise.
6. Aucune fusion ou mise en production sans autorisation expresse. Pas de paiement réel.

## Conditions avant ouverture commerciale

- Vérification et actualisation du moteur, du périmètre, des unités et des facteurs ; documentation des postes B3 couverts et non couverts.
- Tests vrais Stripe en mode test, récupération de commande, paiements/webhooks/litiges/remboursements.
- Migration/sauvegarde contrôlées des commandes, crédits et documents antérieurs avec tests de non-régression.
- Revue juridique (textes 2026, informations et limites, TVA, confidentialité, CGV), spécimens FR/EN/DE et tests navigateur/mobile.
- Test de demande : obtenir des retours de donneurs d'ordre et de PME sur le format attendu et l'acceptabilité d'un prix de 89 €.

Le dépôt conserve les outils de l'ancienne attestation **pour respecter les engagements historiques**, pas pour commercialiser deux offres.
