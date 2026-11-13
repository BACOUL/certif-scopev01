# Certif-Scope — registre qualité et blocage de mise en production
*13 novembre 2026 — branche de revue de la PR n°107, sans fusion ni déploiement.*

## Références normatives vérifiées
- **Règlement délégué (UE) 2026/1560**, annexe I, B3 §§32–33 : énergie consommée en MWh, ventilation renouvelable/non renouvelable si disponible, et estimation des émissions brutes scope 1 et scope 2 *location-based* ; facultatif pour les entreprises de 10 salariés ou moins. Le seul B3 ne constitue **pas** un module de déclaration volontaire complet. Source : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560
- **Directive (UE) 2026/470** : champ de la CSRD principalement limité aux entreprises qui dépassent simultanément 1 000 salariés et 450 M€ de CA net annuel ; vérifier la transposition et les exceptions. Source : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026L0470
- **Base Empreinte ADEME** : annonce officielle Base Carbone v23.11 du 18 mai 2026. L'accès aux données détaillées sur le nouveau portail requiert une inscription et l'acceptation des conditions d'utilisation ; **les anciens facteurs v23.6 de la PR ne sont pas validés comme des facteurs 2026**. Sources : https://base-empreinte.ademe.fr/ et https://affichage-environnemental.ademe.fr/node/45

## Contrôles techniques sur la branche

**Dernier contrôle complet du code : GitHub Actions run 43449711360 (commit 658346def5694ed48fe59b2bcd124459902f811e), conclusion success.**

- 92 tests réussis, zéro échec, sur moteur, API, documents, intégrité, anciennes attestations, migrateur fictif, refus de paiements incohérents et protections anti-doublons.
- TypeScript et compilation Next.js réussis.
- Audit npm : zéro vulnérabilité signalée ; ce n'est pas un audit de sécurité approfondi.
- 22 contrôles HTTP : accueil/formulaire/prix/méthode/confidentialité/vérification en FR/EN/DE, PDF spécimens et route absente.
- Les trois PDF spécimens de la nouvelle offre contiennent **exactement trois pages** ; le PDF historique spend-based dispose de tests spécifiques de deux pages.
- Aucune transaction bancaire, aucune connexion Stripe live, aucun déploiement, aucune migration de vrais clients.

**Corrections de cette session :**
1. Une source d'émissions non prise en charge peut être déclarée sans planter le formulaire ni créer un facteur fictif.
2. Une source « inconnue » conserve des valeurs « non renseignées », jamais un zéro implicite dans la ventilation renouvelable/non renouvelable ; le calcul refuse les catégories source contradictoires.
3. Les résultats partiels sont annoncés comme incomplets ; la vente d'un inventaire vide est refusée.
4. Les fichiers de commande disposent d'au moins 30 jours d'accès après la première confirmation de paiement ; la date de création de session Stripe n'est plus confondue avec une date de paiement.
5. Les clés publiques Ed25519 historiques peuvent être archivées de façon explicite par l'opérateur pour maintenir la vérification après rotation des clés.
6. Les mentions de confidentialité ne prétendent plus qu'une purge automatique est effective lorsqu'elle ne l'est pas.
7. Recette CI : audit npm et tests HTTP/PDF sur un serveur Next.js de test, sans paiement ni dépendance de production.

## Blocages absolus avant mise en vente

**A. Exactitude des facteurs et du périmètre**
- Obtenir légalement les données officielles Base Carbone v23.11 ; conserver les identifiants, années, géographies, unités, limites et licences ; vérifier indépendamment les composantes *directes* versus amont/ACV.
- Couvrir les sources réellement pertinentes à B3 : autres combustibles, mélanges ou gaz frigorigènes non listés, procédés, chaleur/vapeur/froid achetés, autoproduction. **Quatre gaz purs** ont été ajoutés avec PRP de l'annexe I du règlement UE 2024/573 ; la ventilation énergétique est conditionnelle aux justificatifs, sans audit. **Le moteur reste partiel**, même lorsque les sources actuelles sont renseignées. L'exercice 2026 reste en aperçu, non vendable.
- Effectuer une validation externe de dossiers réels et vérifier les erreurs d'unité, de données manquantes et de double comptage. Un champ « facture/relevé » ne prouve pas qu'un justificatif a été audité.

**B. Clients, paiement, données**
- Faire une recette complète Stripe **en mode test réel** : 3-D Secure, session retardée, confirmation, webhook signé, litige, remboursement, retries, doublons, récupération de commande.
- Sauvegarder, inventorier et rapprocher les packs, commandes, crédits et anciens documents **réels**. Aucune migration réelle n'a été faite ; anciens crédits affectés à l'ancien produit, sauf consentement ou base contractuelle validée.
- Configurer base de recette isolée, cycle des clés de signature, archivage authentifié des clés publiques, sauvegardes, purge automatisée testée et processus de récupération sécurisé.

**C. Produit, juridique et distribution**
- Contrôler la pagination longue, la lisibilité et l'accessibilité des PDF avec inspection visuelle humaine, navigateur mobile réel, et tests utilisateur ; un PDF valide et trois pages ne garantissent pas l'absence de défaut visuel.
- Validation juridique RGPD, sous-traitants, conservation, CGV B2B, TVA, droit de rétractation le cas échéant, communication environnementale et traçabilité des sources.
- Auditer les 21 locales restantes, les anciens parcours et routes SEO avant toute activation de l'indexation.
- Confirmer qu'au moins plusieurs destinataires professionnels veulent et accepteraient réellement cette fiche, et tester le prix proposé de **89 €**. Le règlement ne crée pas une obligation générale d'achat.

## Règle de décision
**Statut : NON COMMERCIALISABLE / NE PAS DÉPLOYER.**
Seule la PR brouillon 107 est modifiée. Ne pas fusionner, ne pas mettre en production, ne pas activer les paiements sur le domaine, et ne pas présenter la fiche comme « certifiée », « homologuée », « conforme intégralement B3 » ou obligatoire tant qu'une validation indépendante, juridique et technique complète et l'autorisation explicite du propriétaire n'existent pas.

## Complément du 13 novembre — valeurs HFC et verrou de publication

- Catalogue des gaz fluorés purs documenté au règlement UE **2024/573**, annexe I, PRP sur 100 ans : **HFC-32 = 675 ; HFC-134a = 1 430 ; HFC-125 = 3 500 ; HFC-143a = 4 470 kgCO₂e/kg émis**. Ce sont des coefficients réglementaires pour gaz **purs**, pas des facteurs ADEME v23.11 ; ne pas utiliser sur un mélange ou la charge d'une installation.
- Contrôle du double comptage PCS/PCI avec le même justificatif ; source et unité du coefficient affichées dans le PDF, l'aperçu et le JSON. Les exemples d'activité avec fluide n'ajoutent pas d'énergie fictive.
- Ajout de `scripts/release-gate.mjs` et de `npm run release:gate`. Le contrôle bloque par défaut faute de preuves privées sur ADEME, les postes B3, Stripe en mode test, anciens droits, tests PDF, juridique, rétention et accord du propriétaire. **Ce contrôle n'active jamais les ventes ni le déploiement.**
- Voir `docs/refonte/FACTEURS_B3_2026_STATUT.md` pour la matrice technique actuelle et les étapes de réconciliation de l'export ADEME v23.11.

## Suite — reprise de session Stripe et purge protégée

- Rapprochement automatique **uniquement en mode test** d'une session de paiement déjà confirmée lorsque son écriture en base a été perdue. Le rapprochement exige le même identifiant de dossier, le même hash d'inventaire, le même produit, la même référence client, la somme exacte, la devise EUR et un paiement serveur confirmé ; pas de création de commande depuis un webhook reçu.
- Contrôles de non-réassociation d'un dossier révoqué, expiré ou déjà lié, et rejet d'une métadonnée Stripe ou référence client altérée.
- Route Vercel Cron quotidienne protégée par `CRON_SECRET` (32 octets minimum), nettoyage transactionnel des rapports expirés et lignes de crédits liées, des anciens événements et des limites expirées. **La PR est non déployée** et le secret ni la base de données de production ne sont configurés par cette modification.
- Les exigences d'archivage légales, les factures Stripe, les sauvegardes, le contrôle de l'exécution du cron et la récupération d'un client ayant perdu son jeton de téléchargement restent des **blocages de lancement**.

## Complément — récupération privée et vérification des paiements

- Ajout du code client `CS1.<id UUIDv4>.<jeton aléatoire 256 bits>` : affichage et copie **avant** la redirection Stripe, confirmation de sauvegarde, récupération manuelle sur la page de téléchargement et validation côté serveur. Seule l'empreinte du jeton est conservée en base ; le jeton n'est ni transmis à Stripe, ni présent dans une URL.
- La méthode ne retrouve **pas** automatiquement un secret perdu définitivement. La récupération d'identité par le support devra faire l'objet d'une procédure indépendante ; ne jamais divulguer un secret par téléphone ou simple email non authentifié.
- La délivrance d'un document signé en cache vérifie désormais à chaque fois l'intégrité du dossier et la signature par une clé publique opérateur reconnue, y compris après rotation de clé si le trousseau archivé est bien configuré.
- Durcissement en mode test : correspondance de la référence client et vérification indépendante du `PaymentIntent` et de la `Charge` effectivement capturée (montant, devise, statut, mode test, remboursement, litige). Un paiement simplement en attente ne révoque plus automatiquement le dossier.
- **Reste indispensable :** Stripe réellement testé en bac à sable avec authentification 3D Secure, paiement différé, remboursements, webhook et navigateur ; revue UX mobile réelle ; ADEME v23.11, périmètre B3, législation et clients historiques.
