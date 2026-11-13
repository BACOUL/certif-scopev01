# Certif-Scope — état des facteurs officiels et de la rubrique B3
**13 novembre 2026 — PR #107 — ne pas fusionner ni commercialiser.**

## Sources primaires vérifiées
- Règlement délégué (UE) **2026/1560** annexe I, B3 §32 : consommation énergétique totale MWh, et ventilation électricité / combustibles, renouvelable / non-renouvelable lorsqu'elle est disponible ; §33 : émissions brutes scope 1 et scope 2 *location-based* en tCO₂e ; facultatif pour les entreprises de 10 salariés ou moins. https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj
- Règlement (UE) **2024/573**, annexe I, colonne de PRP sur 100 ans, **pour gaz fluorés purs uniquement**. HFC-32 = 675 ; HFC-134a = 1430 ; HFC-125 = 3500 ; HFC-143a = 4470 kgCO₂e/kg de gaz effectivement émis. **Ne pas appliquer ces facteurs à des mélanges ni à la charge installée.** https://eur-lex.europa.eu/eli/reg/2024/573/oj
- **ADEME Base Empreinte** : version Base Carbone **v23.11 annoncée 18 mai 2026**. La consultation et l'export exigent un compte gratuit et l'acceptation des conditions. Le jeu de données public actuellement utilisé par Certif-Scope est **v23.6** ; aucune valeur v23.11 ne doit être copiée d'un site secondaire sans comparaison directe à l'export officiel. https://base-empreinte.ademe.fr/ et https://data.ademe.fr/datasets/base-carboner

## Couverture technique actuelle

| Famille d'activité | Source / statut | Limite obligatoire |
| --- | --- | --- |
| Électricité France continentale | ADEME V23.6, facteur direct électrique 2023 | facteur 2026 non validé ; hors France continentale interdit |
| Gaz naturel PCS/PCI | ADEME V23.6, combustion 2022 | conversion PCS→PCI déclarée ; pas d'amont scope 3 ; risque double compte PCS/PCI contrôlé |
| Carburants diesel B7, essence E10 | ADEME V23.6, combustion ; ancien millésime | énergie PCI du carburant doit être justifiée séparément, jamais déduite d'un ratio inventé |
| Gaz fluorés **purs** HFC-32, HFC-134a, HFC-125, HFC-143a | règlement UE 2024/573 annexe I, PRP 100 ans | uniquement masse réellement émise en kg et type précis du gaz ; mélanges et gaz inconnus **non calculables** |
| Autres combustibles, procédés, chaleur/vapeur/froid achetés, autoproduction | **NON COUVERTS** | rester marqués « concernés / inconnus » ; le logiciel interdit la vente d'une fiche incomplète |
| Scope 3 et émissions du produit | **HORS DU PRODUIT** | jamais présenter comme un bilan GES complet ou une empreinte produit |

Les facteurs détaillés des lignes déclarées sont associés à leur source, année, unité, périmètre, valeur et version dans le JSON signé. Un champ de justification textuelle **n'est pas une preuve auditée**.

## Conditions précises pour permettre les facteurs ADEME 2026
1. Accéder légalement à la Base Empreinte officielle, exporter v23.11, conserver fichier brut, date, version et empreinte SHA-256, sans inclure de compte personnel/clé API au dépôt.
2. Pour chaque source, contrôler que le **poste est bien « émissions directes / combustion »** et non « amont + combustion » / analyse de cycle de vie, et vérifier géographie, période de validité, famille de gaz, PCS/PCI, unités et statut de la donnée.
3. Comparer les anciennes valeurs à l'export réel, justifier tout changement et exécuter des calculs de référence manuels vérifiés.
4. Établir des facteurs géographiques ou réseau spécifiques pour la chaleur/vapeur/froid achetés. Ne pas utiliser un facteur national générique inventé. Documenter les mélanges frigorigènes avec PRP officiels **seulement** après validation de leur composition et du référentiel applicable.
5. Rejouer toutes les régressions, exporter PDF/CSV/JSON dans les trois langues et refaire les contrôles de pagination avec dossiers complexes.

## Bloqueur de publication
Le script `npm run release:gate` exige une preuve privée pour chaque contrôle de lancement : facteurs vérifiés, B3, Stripe test réel, anciens clients, PDF et juridique, conservation et accord explicite du propriétaire.

Les preuves sont placées **hors git** dans `.private/release-evidence.json`. L'absence ou l'incomplétude de ces preuves provoque une sortie non nulle. **Même lorsque ce script réussit, il ne remplace pas une revue indépendante, et il ne déploie pas le site.**

**Décision : NON PRÊT À COMMERCIALISER.** La PR reste en brouillon, les ventes réelles sont désactivées et aucun changement de production n'est autorisé.

## Autorisations de réutilisation des données 2026

- La page publique ADEME confirme que la **v23.11 est disponible**, mais son portail conditionne consultation et export à un **compte gratuit et à l’acceptation des conditions juridiques**. Source primaire : https://base-empreinte.ademe.fr/ et https://affichage-environnemental.ademe.fr/node/45.
- Le dataset open data historique **v23.6** est en **Licence Ouverte 2.0** ; on ne peut **pas déduire automatiquement** que toutes les données, notamment issues d’ecoinvent ou d’autres fournisseurs, sont diffusables sous cette même licence dans la v23.11. Source : https://data.ademe.fr/datasets/base-carboner.
- Avant d’intégrer un export 23.11 et de **vendre une fiche calculée grâce à ces données**, faire approuver par écrit la version des conditions acceptées, l’attribution nécessaire, les droits de réutilisation commerciale dans un logiciel, les restrictions de redistribution et les restrictions propres aux jeux de données. Les droits d’affichage des facteurs dans un PDF/CSV doivent aussi être évalués.
- Le verrou `release:gate` exige maintenant séparément `ademe_23_11_terms_and_commercial_reuse_approved`. **Aucune valeur v23.11 n’a été fabriquée ni importée.**
