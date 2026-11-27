# B03 / préparation C02 — Vérification des facteurs physiques
27 novembre 2026. Lot B, recherche documentaire, sans changement du moteur ni du produit commercial.
Source : [Base Carbone ADEME](https://data.ademe.fr/datasets/base-carboner). [Recette publique](https://github.com/BACOUL/certif-scopev01/actions/runs/46071605778), job 140749603872, workflow commit 20d273385b73653de631003bec9e8a4096bd6bad, résultat success. [Archive de preuve](evidence/B03_ADEME_PHYSICAL_20261127.json), commit 29a91a72f6d54044fe5587e00676827519a443fb, relue : 5 références exactes et 397 résultats de découverte (doublons possibles entre recherches). Toutes les 5 valeurs exactes concordent avec le prototype. Les réponses API ont une empreinte archivée ; l'archive JSON est une re-sérialisation, pas la réponse brute. Recherche sans secret ni service payant externe.

## 1. Références exactes vérifiées
Toutes les lignes ci-dessous concernent la France continentale. Statut API Valide générique, Type_Ligne Poste, facteur de combustion. Ce statut ne garantit pas la pertinence pour une année future.
| Clé historique | ID / poste API | Unité | Valeur | Période de validité déclarée par la source |
|---|---|---|---:|---|
| electricity | 43273 / JF-Ssewkm48XeLYhjMd0C | kgCO2e/kWh | 0.0394 | Année 2023 |
| gas_pcs | 37133 / 3oceUt65q5HMNWwmGxohv | kgCO2e/kWh PCS | 0.181 | 28/02/2025 (gaz 2022) |
| gas_pci | 37132 / 4hxvzq5E9w-8ueSVrvooB | kgCO2e/kWh PCI | 0.201 | 28/02/2025 (gaz 2022) |
| diesel_b7 | 25775 / bxSZYsoSp4G8TYo_p8S27 | kgCO2e/litre | 2.49 | déc-20, modification 2021-06-18 |
| petrol_e10 | 13988 / 75uU5oI94zp14HF0O-Yxe | kgCO2e/litre | 2.19 | déc-20, modification 2021-06-18 |

Les dates de modification ne sont pas assimilables à des millésimes d'activité. La valeur de CO2 biogénique diesel (0.155899) et essence (0.151869) est aussi confirmée dans les lignes correspondantes. Le gaz 2022 a des champs CH4 et N2O à zéro : qualifier la couverture des gaz et les émissions fugitives du périmètre avant approbation ; ne pas conclure que toute combustion de gaz est exempte de CH4/N2O. Ne pas additionner les composantes gaz au total déjà agrégé, ni traiter CO2b comme un crédit.

## 2. Candidats additionnels
| Candidat | ID / poste | Valeur | Réserve |
|---|---|---:|---|
| Electricité 2024 mix moyen consommation — combustion centrale | 43642 / 4a-V7kBU5QVSOA-uwyHZp | 0.035 kgCO2e/kWh | valable pour 2024 ; pas de facteur 2025 identifié par la recherche limitée |
| Fioul domestique source fixe — combustion | 14087 / xupxpYVZPv-OAgYUfe5cz | 2.68 kgCO2e/L | Validité déc-17, vérifier source plus récente et contenu énergétique avant adoption |
| Propane inclus maritime — combustion | 13554 / aRCjX1sQ_wNVhNm-nQcOk | 64.8 kgCO2e/GJ PCI | Validité déc-17, périmètre usage et unité à qualifier ; ne pas appliquer à tous les GPL |
| Granulés bois, 8% humidité | 14172 / vsOCHZ2gp41SDlRKX2ZMe | 17.6 GJ/tonne | Donnée PCI, PAS un facteur d'émission ; anciennes lignes d'émissions archivées ; rechercher postes actuels |
| Réseaux chaleur/froid | recherche tronquée à 100 / 1582 | non retenu | facteur du réseau effectivement utilisé et année ; ne pas choisir une moyenne arbitraire |

Les recherches fioul (100/134), propane (100/138) et chaleur (100/1582) sont tronquées, les recherches électricité et bois ne sont pas une preuve d'exhaustivité de la base. Aucun facteur 2025/2026/2027 n'est approuvé par ce travail. Licence, référence de méthode, couverture des gaz, cohérence des PRG et méthode GHG restent à examiner. La documentation ADEME actuelle évoque V23.8 ; ne pas assimiler le portail API et toute autre version de Base Empreinte.

## 3. Règles opérationnelles à implémenter après B
- [Electricité ADEME](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/electricite.htm) : séparer combustion centrale des émissions amont et pertes ; [mix moyen](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/electricite_reglementaire.htm) annonce une évolution méthodologique en 2027. Conserver version et année, traiter comparatifs avec rupture de méthode et expliquer le proxy ; pas d'usage aveugle du facteur 2024 en 2027.
- [Gaz ADEME](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/gaz.htm) : facteur combustion 2022 distinct du total amont+combustion ; vérifier PCS/PCI et cohérence de l'unité d'énergie. 
- [GHG Protocol Scope 2](https://ghgprotocol.org/scope-2-guidance) : inclure électricité, chaleur, vapeur et froid achetés consommés. [ADEME réseaux](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/reseau_de_chaleur.htm) : distinguer contenu en émissions et ACV, décomposition retirée dans une version en raison d'erreurs ; facteur spécifique au réseau et à sa période. Ne pas utiliser un taux EnR&R comme part renouvelable sans vérifier récupération.
- Registre de facteurs par pays et année, unité et frontière, preuve source, statut approuvé/proxy/non disponible, méthode PRG ; ne pas traiter valeur manquante comme zéro. Pas de sélection par langue ou siège social.
- Le périmètre de la déclaration couvre les sources significatives contrôlées/achetées ; autres combustibles, procédés, émissions fugitives, autoconsommation à couvrir selon l'activité ou déclarer non applicable avec justification ; un facteur officiel ne suffit pas à valider l'inventaire.
- Comparaison N/N-1 : cas numérique de référence 10 000 kWh, facteur 2023 = 0.394 tCO2e ; facteur 2024 = 0.350 tCO2e. Même consommation, variation 0.044 t liée au facteur, pas à une économie d'énergie. Ne pas annoncer une réduction d'activité.
- C02 reste ouvert : validation méthodologique et temporelle, données actualisées, facteurs réseaux et procédés. C03/C04/C05 : moteur et éligibilité à compléter, D : graphiques et rapports cohérents. Aucune modification du prototype ni des anciens documents.


## 4. Sélection temporelle et géographique — complément du 27 novembre 2026
Source RTE : [Bilan électrique 2025, émissions](https://analysesetdonnees.rte-france.com/bilan-electrique-2025/emissions), consulté le 27 novembre. RTE distingue émissions directes et cycle de vie ; pour 2025, production 19,6 gCO2e/kWh, consommation prenant en compte les échanges 20,0 gCO2e/kWh. Candidat pour scope 2 location-based (0,020 kgCO2e/kWh), à qualifier pour France continentale/métropole, périmètre des pertes, couverture des gaz/PRG, cohérence avec ADEME et licence. Ne pas traiter 19,6 comme facteur de consommation ni 29 g/kWh de production cycle de vie comme facteur direct. RTE n'a pas été ajouté au registre exécutable ; aucune substitution ADEME-RTE ni affirmation de comparabilité. Source 2025 retrouvée hors API ADEME, ce qui lève uniquement le manque de candidat.

### Différences géographiques dans l'archive
- Fioul domestique France continentale : ID 14087, ligne xupxpYVZPv-OAgYUfe5cz, 2,68 kgCO2e/L, validité déc-17.
- Europe : ID 14086, 2,62 kgCO2e/L. Outre-mer : ID 26672 et autres, 2,66 kgCO2e/L, validité déc-21. Ne pas substituer une valeur plus récente de zone différente. La sélection exige l'aire du site d'activité, pas uniquement FR/siège.
- Butane France continentale : ID 13546, 2,95 kgCO2e/kg, validité déc-20 ; propane ID 13554, 64,8 kgCO2e/GJ PCI, validité déc-17, libellé incluant maritime. Candidats historiques non approuvés.
- [ADEME PCI et masse volumique](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/pci_et_masse_volumique.htm) fournit des données de conversion ; contrôler produit et convention, notamment biocarburants et température. Ne pas utiliser une densité générique incompatible avec le facteur.
- [ADEME biocombustibles solides](https://prod-basecarbonesolo.ademe-dri.fr/documentation/UPLOAD_DOC_FR/solides2.htm) distingue CO2 et autres gaz de combustion ainsi que production/transport. Ne pas imputer zéro pour toute biomasse, ni employer une valeur ACV par MWh thermique comme facteur direct par MWh de combustible. Recherche de facteurs spécifiques encore nécessaire.
- [Arrêté du 30 mars 2026, réseaux de chaleur/froid](https://www.legifrance.gouv.fr/eli/arrete/2026/3/30/ECOR2605189A/jo/texte) contient un tableau destiné à DPE, tertiaire et RE2020. Source de piste réseau/année, pas automatiquement facteur GHG Protocol B3. Qualifier colonne et frontière ; demander le réseau ou une donnée documentée appropriée. Les taux renouvelable et récupération ne sont pas interchangeables.

### Contrat de sélection — étude exécutable hors application
[scripts/b03-factor-selection-study.py](../../scripts/b03-factor-selection-study.py) commit d0065cec6270578d756572daaec7ffc666b990e9 ; [recette réussie](https://github.com/BACOUL/certif-scopev01/actions/runs/46071916246) job 140750629457, workflow 6ff41f3a4793ac5a1083ad1fbc380b798406ab8c. 19 tests OK, sans dépendance ni service externe. Les facteurs sont lus dans l'archive, identification par ligne, contrôle géographie, unité, frontière, statut, scope et millésime ; une date de validité/modification n'est pas une année d'activité. Une année exacte retourne un candidat, jamais une autorisation de vente ; historique à examiner, données absentes => null, aucun fallback automatique, aucun facteur futur. Les comparaisons 2023/2024 sont vérifiées par arithmétique décimale. Ce script de recherche ne remplace ni le registre final ni une validation de scientificité ; pas de code commercial modifié. En C02/C03, définir les règles de proxies documentés et contrôlés pour combustibles stables et exercices sans millésime exact, sans rendre les PME incapables de déclarer inutilement, et valider RTE et les méthodes géographiques. La règle conservative du test n'interdit pas un proxy ultérieurement approuvé.
