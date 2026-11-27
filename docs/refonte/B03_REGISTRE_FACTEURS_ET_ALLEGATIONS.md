# B03 — registre de provenance et revue des allégations
27 novembre 2026. Analyse documentaire. Aucun facteur nouveau approuvé ; pas de modification de l'attestation ni du moteur commercial.
Référence de branche ed152839ed350cfc3d9f2388d59455588c883e7e ; production 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a.

## 1. Sources contrôlées
- [ADEME, documentation officielle des ratios monétaires](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/ratio-monetaires_3.htm) : ratios exprimés en kgCO2e/kEUR HT pour un millésime donné, nomenclature NAF rév.2, méthode mise à jour par SDES/INSEE à partir des travaux 2024. Facteurs physiques privilégiés notamment pour énergie et matières premières ; incertitude élevée des ratios, variations liées entre autres aux prix et à la méthode.
- [Base Carbone open data](https://data.ademe.fr/datasets/base-carboner), [fiche API](https://www.data.gouv.fr/dataservices/api-base-carbone), [métadonnées JSON](https://data.ademe.fr/data-fair/api/v1/datasets/base-carboner) : jeu public sous Licence Ouverte ; champs identifiant, statut, nom, frontière, unité, contributeur, source notamment disponibles. La consultation directe de lignes recherchées via API n'a pas abouti lors de cette reprise. Ne pas attribuer une valeur précise à l'ADEME sans ligne source complète ; vérifier version, date et conditions de réutilisation des données retenues, attribution et droits distincts des bases tierces.
- [GHG Protocol Scope 3 Calculation Guidance](https://ghgprotocol.org/scope-3-calculation-guidance-2) : méthodes relatives aux quinze catégories, notamment méthode monétaire de repli pour achats en l'absence de données plus adaptées. Le choix dépend de qualité et pertinence ; ne pas assimiler un calcul monétaire agrégé à un inventaire exhaustif. [Corporate Standard](https://ghgprotocol.org/corporate-standard), [Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance) à confronter à la couverture réellement calculée.
- [Règlement UE 2026/1560](https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj) : B3 exige énergie et données physiques/estimations scopes 1 et 2 location-based selon périmètre, pas le seul agrégat monétaire historique. Réserves B01/B02 maintenues.

## 2. Registre historique CS-SB-v1
Code src/lib/indicative-model.ts ; référence des sept coefficients en kgCO2e/EUR d'après la méthodologie publique (Section3). Équivalent kgCO2e/kEUR obtenu par multiplication exacte par 1000, sans nouvelle validation scientifique.
| Poste historique | kgCO2e/EUR | kgCO2e/kEUR | Familles candidates à examiner (pas une attribution) | Risque de périmètre |
|---|---:|---:|---|---|
| IT | 0,30 | 300 | programmation/conseil informatique, hébergement, télécommunications selon prestation | séparer équipements immobilisés et services, énergie propre |
| Services | 0,22 | 220 | juridique, comptabilité, conseil, services administratifs | composition et intensités hétérogènes |
| Biens/achats | 0,45 | 450 | branche productive réelle du bien, selon achat | distinguer capital et consommables, matières à préférer en quantités |
| Logistique | 0,18 | 180 | fret selon mode, entreposage | distinguer transport acheté et flotte interne |
| Déplacements | 0,25 | 250 | rail, aérien, taxi, location selon prestation | distinguer déplacement professionnel et flotte sous contrôle |
| Hébergement/événements | 0,27 | 270 | hébergement, restauration, organisation d'événements | éviter doublon avec déplacements, biens et services |
| Autres | 0,25 | 250 | classification réelle à préciser | aucune correspondance unique défendable sans détail |

Pour chacune des sept lignes : identifiant de facteur externe, base de prix HT/TTC, année de prix, millésime de données, zone, frontière, incertitude, source primaire et droits de réutilisation spécifiques non démontrés par les constantes historiques. Statut PROVENANCE_NON_ETABLIE ; aucune valeur remplacée ni requalification de l'ancien PDF. La présence d'un coefficient identique dans une base externe ne suffirait pas à prouver sa provenance ou son adéquation.

## 3. Contrôle du discours méthodologique existant
Lecture des sections 2–12 de src/app/fr/product/methodology/sections/ :
- S2 : formule kgCO2e et revendication de conformité aux recommandations GHG Protocol. Nuancer la revendication ; distinguer principe de calcul reconnu et inventaire effectivement conforme.
- S5 : EUR uniquement, sans conversion ; base HT/TTC à expliciter pour une méthode future utilisant les ratios ADEME. S3/S5 : vérifier traitement des catégories vides et contraste entre inconnu et zéro.
- S6–S9 : déclarations de jeux versionnés/documentés, correspondance stricte, stabilité. Confirmer preuves avant de maintenir la revendication de provenance scientifique documentée.
- S10–S11 : mention de mises à jour ADEME/DEFRA, intégration annuelle. Aucun registre externe correspondant aux sept coefficients retrouvé dans les fichiers examinés ; ne pas annoncer une intégration effective sans preuve. Vérifier autres langues et pages au lot E.
- Aucune mise à jour dynamique des anciens documents : conserver leurs valeurs et identifiants de méthode, corriger les nouvelles émissions seulement avec version distincte et procédure approuvée.

## 4. Schéma de registre futur (spécification C02)
Pour chaque facteur approuvé : factorId, sourceDataset, sourceRowId, release, retrievalDate, activityType, sourceLabel, geography, activityYear, priceYear, currency, taxBasis, unit, value, boundary, scopeOrCategory, includedGases/GWP si disponible, uncertainty, license, sourceURL, mappingRationale, limitations, reviewer, approvalStatus. Garder source exacte ou empreinte/archivage autorisé ; aucun facteur utilisable sans couverture et unité cohérentes. Protéger l'historique de modification ; enregistrer la version effectivement utilisée au calcul et au document. Pour une dépense EUR HT et un facteur kgCO2e/kEUR HT : tCO2e = EUR * facteur / 1 000 000, uniquement après harmonisation justifiée de monnaie, prix et périmètre. Ne pas convertir automatiquement les anciens résultats. Référence historique 7 × 1000 EUR = 1,92 tCO2e (contrôle déjà effectué A03).

## 5. Allégations environnementales et statut du document
[Directive UE 2024/825](https://eur-lex.europa.eu/eli/dir/2024/825/oj), notamment art. 1 et 4, modifie le cadre des pratiques commerciales envers les consommateurs et prévoit l'application des mesures nationales à partir du 27/09/2026. Restrictions notamment sur allégations génériques non étayées et labels de durabilité sans système de certification ou établissement par autorité publique. [Exposé des motifs français](https://www.legifrance.gouv.fr/dossierlegislatif/JORFDOLE000052555670/?detailId=&detailType=EXPOSE_MOTIFS) : projet de transposition identifié ; texte français définitif applicable non confirmé lors de cette reprise. Ne pas présenter le projet comme droit en vigueur.
Notre offre vise les professionnels ; la directive B2C n'est pas automatiquement applicable à toute relation B2B. Le document peut néanmoins être reproduit en communication vers des consommateurs ; revue juridique B05 du nom, logo, badges, mentions, usages clients et règles nationales B2B/B2C nécessaire. Ne pas revendiquer label de durabilité, certification indépendante, résultat environnemental favorable, neutralité ou conformité réglementaire non démontrée. QR et signature documentaire ne prouvent pas les déclarations, ne constituent ni audit ni assurance. Maintenir le caractère déclaratif et les limites visibles. Ne pas garantir qu'un client, une banque ou une administration acceptera le document.

## 6. Choix à arbitrer
A. Actualiser le modèle monétaire existant avec facteurs traçables : préserve simplicité, ne couvre pas B3.
B. Ajouter au document existant un module physique scopes 1/2 et énergie, seulement si facteurs/couverture validés, sans renommer le calcul historique ni changer le gabarit à l'aveugle. Étudier une estimation indirecte facultative et distincte ; pas d'addition de périmètres chevauchants.
C. Inventaire scope 3 exhaustif : collecte et revue supplémentaires ; hors première livraison selon la décision actuelle.
B03 reste ouvert : provenance historique, récupération des lignes officielles et cartographie détaillée, géographies, revue qualifiée et B04. B01/B02 et A04–A06 ouverts. Aucun changement de code, PDF ou production.
