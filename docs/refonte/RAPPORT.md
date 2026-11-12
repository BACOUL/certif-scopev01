# Certif-Scope — rapport de reprise du 12 novembre 2026

**État : développement sauvegardé, commercialisation bloquée. Aucune fusion ni modification de production. Aucun paiement réel.**

## 1. Dépôts, production et sauvegarde

Le site www.certif-scope.com est rattaché au projet Vercel `prj_66F0ETsFfNuBQ81rpPZZVl66OScL`, dépôt **BACOUL/certif-scopev01**. Déploiement observé : `dpl_89K5rMzS2fyFDmneFfhYF4XwqDiv`, commit `71e6cd87a8c04041ff58be4db99a6fa49cb8c40a`, branche `fix/multilingual-fr-en-de-20261001`. Le défaut du dépôt (`main`, autre commit) ne représente donc pas cette production.

BACOUL/certif-scope a également été inspecté : moteur ancien, approximations carburants et unités, pas la source du déploiement identifié. Aucun changement dans ce dépôt.

Branche de reprise : [refactor/supplier-carbon-sheet-20261112](https://github.com/BACOUL/certif-scopev01/tree/refactor/supplier-carbon-sheet-20261112). Premières sauvegardes distantes : `b5e2ea0565b052ffb2ff489d861966c84e99904d`, puis `ffe252322c19fddeb5684c22b2683da067987246` avec PDF et police. Le dernier commit de la branche contient ce rapport. La configuration de cette branche interdit les déploiements Git automatiques (`vercel.json`), les ventes sont désactivées par défaut et les clés Stripe réelles sont refusées. Aucun projet ou paramètre de production n’a été modifié.

La refonte remplace un grand nombre de pages et composants anciens par des modules partagés. Les routes historiques sont inventoriées dans `legacy-routes.json`. Ce changement massif exige une revue avant fusion : une route conservée ne signifie pas que son ancien contenu fonctionnel a été conservé.

## 2. Fonctionnalités implémentées

- Moteur serveur strict : énergie en MWh PCI, scopes 1 et 2 location-based séparés, CO2 biogénique hors total, facteurs ADEME enregistrés avec identifiant, composante, unité, millésime et source.
- France continentale uniquement, périodes 2023–2025. Électricité, gaz PCS/PCI, diesel B7 et essence E10. Pas de facteur monétaire. Pas de conversion carburant litre/kWh inventée : énergie PCI justifiée séparément.
- Formulaire guidé : entreprise, contrôle opérationnel, période, neuf catégories de sources, qualité/justification des quantités, exclusions et confirmation. Inconnu n’est jamais converti en zéro. Un périmètre incomplet ou une source non couverte bloque l’achat.
- PDF A4 de trois pages en FR/EN/DE, CSV numérique et JSON signé. Spécimens fictifs générés réellement dans `evidence/`.
- Signature Ed25519 des données JSON canoniques, empreinte SHA-256, vérification contre la clé de l’émetteur. **Le PDF n’est pas signé PAdES ; la signature ne certifie pas les données déclarées.** La clé publique des spécimens est `evidence/specimen-test-public-key.pem`, uniquement de test.
- Checkout à prix fixé serveur (89 EUR), instantané immuable lié à la session Stripe, droits délivrés uniquement après vérification serveur du paiement, du montant, de la devise, du produit, de la session et de l’empreinte. Refus des remboursements/litiges et des clés live.
- Stockage PostgreSQL dédié, transactions et contraintes pour éviter le double octroi, consommation atomique des nouveaux crédits, jetons d’accès aléatoires hachés, limitation persistante des requêtes.
- FR/EN/DE : accueil, prix, méthode, confidentialité, vente, vérification, contact et mentions ; contexte européen et FAQ. Absence de promesse de conformité/certification/acceptation.

## 3. Sécurité et changements principaux

| Zone | Fichiers principaux | Protection / limite |
|---|---|---|
| Calcul | `src/lib/carbon/{schema,calculate,factors}.ts` | Recalcul serveur, schéma strict, unités compatibles, pas de totaux client |
| Paiement | `src/lib/carbon/{payment,service}.ts`, `src/app/api/stripe/webhook/route.ts` | Signature webhook, vérification Stripe, octroi conditionnel, révocation |
| Crédits | `src/lib/carbon/{store,service}.ts`, `migrations/001_carbon.sql` | Transaction, registre unique et solde non négatif ; migration historique absente |
| Document | `src/lib/carbon/{document,crypto}.ts*`, `src/app/api/carbon/` | Génération locale, JSON signé, accès par secret ; pas de données dans l’URL |
| Site | `src/app/[[...path]]/page.tsx`, `src/components/`, `src/lib/carbon/copy.ts` | Contenu partagé FR/EN/DE ; 21 autres langues non finalisées |
| Exploitation | `next.config.js`, `vercel.json`, `scripts/carbon-db.mjs` | En-têtes, ventes fermées, purge prévue mais non programmée |
| Dépendances | `package.json`, `package-lock.json` | Next/React/Stripe/PDF mis à jour, dépendances inutiles retirées |

Les anciennes routes sensibles de clés, consommation, packs, attestations et envoi de campagnes renvoient 410 dans cette branche. Il s’agit d’une fermeture préventive, **pas d’une preuve que tous leurs scénarios ont été portés**. Les anciennes commandes ne doivent pas être basculées sur cette version en l’état. Les risques de production ne sont pas corrigés tant que cette branche n’est pas revue puis déployée avec autorisation.

## 4. Tests réellement exécutés

| Contrôle | Résultat | Preuve / portée |
|---|---|---|
| `npm test` | 50 réussis, 0 échec | `evidence/tests.txt` |
| Calculs | Réussis dans les 50 tests | 10 000 kWh électricité = 0,394 tCO2e ; scénario mixte = 6,723 tCO2e et 38,9 MWh ; PCS/PCI, NaN, unités, doublons, manquants |
| Paiement fictif | Réussi avec fournisseur simulé | Non payé, mauvais montant/devise/produit/session/hash, remboursement, panne fournisseur, accès non autorisé |
| Crédit / SQL | Réussi sur PGlite | Schéma PostgreSQL, rollback, idempotence, dix tentatives sur dernier crédit ; ce n’est pas une charge multi-processus sur PostgreSQL distant |
| PDF/CSV/JSON | Générés FR/EN/DE | Spécimens dans `evidence/`, vérification de signature et altération ; inspection PDF FR page 1 après police embarquée |
| Compilation | Réussie | `evidence/build.txt` |
| TypeScript | Réussi | `evidence/typecheck.txt` |
| Audit dépendances npm | 0 vulnérabilité rapportée | `evidence/dependency-audit.json`, ne remplace pas un audit de sécurité exhaustif |
| Navigateur automatisé | Non validé | Chromium bloqué par les restrictions de sockets du runtime ; aperçu manuel initial partiel, pas de preuve E2E finale |
| Stripe sandbox réel | Non exécuté | Aucun secret de test configuré ; aucun paiement réel déclenché |

Les tests de traduction vérifient ici l’usage des trois jeux de textes et la génération des documents ; aucune révision linguistique exhaustive ni test mobile/accessibilité complet n’est revendiqué. Les preuves de navigation HTTP, si présentes dans `evidence/http-navigation.json`, concernent uniquement les réponses serveur.

## 5. Vérifications officielles

Vérifications au 12 novembre 2026. Les références prouvent le contexte et les données utilisées, jamais l’agrément du produit.

| Référence | Conclusion retenue | Conséquence |
|---|---|---|
| [Directive UE 2026/470](https://eur-lex.europa.eu/eli/dir/2026/470), articles 2, 3, 5 | Réduction du champ du reporting, protection de la chaîne de valeur ; transposition articles 1–3 au plus tard 19/03/2027, article 4 au 26/07/2028 | Ne pas prétendre que chaque PME est assujettie en 2026 ; transposition française à contrôler avant toute affirmation individuelle |
| [Règlement délégué UE 2026/1560](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560), articles 2–4, annexes I/II | Norme volontaire ; article 3 applicable aux exercices débutant dès le 01/01/2027 ; B3 énergie MWh et scopes 1/2 location-based | Ne pas confondre entrée en vigueur et application du plafond ; B3 volontaire pour ≤10 salariés |
| Même règlement, considérants 4–5 | Plafond limité à la collecte pour le reporting visé ; autres obligations non supprimées ; encouragement des institutions financières | Aucune garantie d’acceptation par banques ou acheteurs ; la fiche ne couvre pas tout VSME |
| [ADEME Base Carbone V23.6](https://data.ademe.fr/datasets/base-carboner) | Records officiels sauvegardés dans `evidence/ademe-records.json` | Source historique documentée, actualisation nécessaire avant commercialisation |
| [ADEME PCS/PCI](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/passage_du_pcs_au_pci.htm) | Gaz naturel : kWh PCS × 0,9 = kWh PCI | Unités séparées et testées |
| [GHG Protocol Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance) | Énergie achetée : électricité, chaleur, vapeur, froid ; distinction méthodes | Chaleur/vapeur/froid non pris en charge bloquent une couverture complète ; pas de conformité globale revendiquée |
| [CNIL conservation](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) | Durées à justifier par finalité, comptabilité séparée | 30 jours proposés pour livraison ; purge opérationnelle et registre à valider |

Facteurs : électricité ID43273 = 0,0394 kgCO2e/kWh (2023, combustion centrale) ; gaz PCS ID37133 = 0,181 et PCI ID37132 = 0,201 (2022, combustion) ; diesel B7 ID25775 = 2,49 kgCO2e/L, essence E10 ID13988 = 2,19 (combustion, lignes mises à jour 2021, validité indiquée décembre 2020). CO2 biogénique séparé : 0,155899 et 0,151869 kg/L. Ces valeurs ne doivent pas être présentées comme des facteurs 2026 actualisés.

## 6. Blocages avant commercialisation, par priorité

1. **Facteurs** : obtenir/valider un catalogue récent adéquat au millésime, à la géographie et aux composantes scopes 1/2 ; ajouter les sources réellement nécessaires ou limiter explicitement le marché. Le moteur actuel refuse 2026 et ne traite ni frigorigènes, ni chaleur achetée, ni procédés, ni autoproduction.
2. **Packs historiques** : migration contrôlée des clés/soldes Cloudflare, rapprochement paiements/remboursements, import idempotent, parcours d’utilisation et achat de packs. Actuellement seule la primitive de crédits nouveaux est testée ; clés et commandes existantes non fonctionnelles dans la nouvelle version.
3. **Stripe et stockage de recette** : base isolée, migration, vraies clés Stripe test, webhook test, achat fictif complet, annulation, remboursement, packs, concurrence et récupération commande. La perte de l’onglet fait actuellement perdre le jeton d’accès ; prévoir récupération sécurisée.
4. **Signature** : clé de recette puis de production, gestion/rotation et publication des clés publiques. Vérifier après déploiement de recette l’inclusion effective de la police PDF.
5. **Site entier et langues** : seules FR/EN/DE sont réécrites ; 21 langues affichent une notice d’indisponibilité. Réaliser toutes les traductions demandées, vérifier chaque ancienne route et contenu SEO, canonical/hreflang, exemples et FAQ. Robots/noindex volontairement fermés pendant développement.
6. **Juridique commercial** : confirmer identité/adresse/SIREN repris, TVA et prix TTC/HT, CGV B2B complètes, corrections/livraison/remboursement, sous-traitants, localisation et transferts des données. Les textes de cette branche sont des projets, non une validation juridique.
7. **Exploitation** : programmer et tester la purge, sauvegarde/restauration, rétention comptable séparée, surveillance, restrictions secrets, séparation des environnements et test de charge.
8. **Recette finale** : navigateur desktop/mobile, accessibilité, langues, PDF longs, revue sécurité complète et régression des anciennes commandes. Autorisation explicite nécessaire ensuite pour fusion et production.

Aucune affirmation « prêt à vendre », « conforme », « certifié » ou « accepté par les donneurs d’ordre » n’est justifiée à ce stade.
