# B04 — Déclaration carbone : produit cible B3
27 novembre 2026 — décision de dénomination et spécification de travail. Référence PR #108, SHA 7919fdc7544aad03c266e60a3052e9dfd9700562. Aucun déploiement.

## Dénomination retenue
FR : **Déclaration carbone** — Énergie et émissions de gaz à effet de serre.
EN : Carbon Declaration — Energy and greenhouse gas emissions.
DE : CO₂-Erklärung — Energie und Treibhausgasemissionen.
Les traductions EN/DE proposées doivent être relues ; les 21 autres langues seront traitées dans le lot E/D. Il s'agit d'un nom commercial, pas d'un titre imposé par le règlement, ni d'une déclaration réglementaire déposée auprès d'une administration.
Référence de contexte : règlement délégué (UE) 2026/1560, annexe I, rubrique B3. Ne revendiquer l'alignement effectif qu'après preuve de couverture et revue B05. Ne pas utiliser « indicative » dans le titre du nouveau produit ; conserver dans le corps la nature estimative, déclarative et non auditée des données. Ne jamais renommer les documents déjà émis. Conserver Certif-Scope, tarif 89 €, packs, URL historiques, navigation, gabarit visuel de deux pages comme cible et 10 rubriques. Aucune nouvelle offre séparée.

## Données B3 à transmettre
Source primaire : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560 ; annexe I §§32–33 et annexe II. Le §32 prévoit consommation totale d'énergie en MWh et ventilation selon tableau si données accessibles. Le §33 prévoit émissions absolues brutes estimées scopes 1 et 2 location-based en tCO2e sur la période, tenant compte du GHG Protocol Corporate Standard (2004). Les deux paragraphes sont volontaires pour les entreprises de dix salariés ou moins. Le plafond de chaîne de valeur ne doit pas être confondu avec la norme complète. Vérifier texte consolidé/transposition et présentation exacte avant publication (B01/B05).

| Champ cible | Unité | Règle de publication |
|---|---|---|
| Consommation totale d'énergie | MWh | Total uniquement si sources couvertes ; sinon partiel/inconnu, non éligible à la couverture complète |
| Électricité consommée | MWh | Ventilation lorsque disponible ; inclure autoproduction consommée selon convention validée |
| Combustibles consommés | MWh | Ventilation lorsque disponible, méthode PCI/PCS documentée |
| Renouvelable/non renouvelable | MWh | Ne pas inventer de ventilation ; null si indisponible |
| Autres énergies achetées (chaleur/vapeur/froid) | MWh | Ligne complémentaire si pertinente, inclure dans total sans double comptage |
| Scope 1 | tCO2e | Brut, sources détenues/contrôlées : combustion, procédés, émissions fugitives |
| Scope 2 location-based | tCO2e | Brut, énergie achetée, facteurs géographiques et temporels appropriés |
| Scope 1 + 2 | tCO2e | Synthèse commerciale facultative, uniquement si les deux périmètres complets et comparables |
| Scope 3 | tCO2e | Hors exigence systématique B3 ; étude séparée, aucune valeur agrégée monétaire ajoutée automatiquement |

## Affectation dans le gabarit historique
Page 1 : titre Déclaration carbone ; sous-titre énergie et émissions GES ; résultat principal Scope 1+2 brut si couverture complète, sinon mention partielle/non disponible ; statut, identifiant, QR. 1 identité de l'entité, période, sites/périmètre ; 2 nature déclarative ; 3 tableau énergétique B3 et valeurs scope 1/2 distinctes ; 4 usage professionnel ; 5 lecture par un tiers, portée de vérification. Page 2 : 6 méthode et facteurs (source/version/géographie/millésime/unité/frontière) ; 7 références réglementaires contextualisées ; 8 contenu signé et contrôles ; 9 limites, qualité, exclusions, inconnues ; 10 synthèse de couverture. Pas de changement de CSS avant essai comparatif ; si le tableau ne tient pas, adapter uniquement les blocs nécessaires et préserver lisibilité ; annexe si indispensable après arbitrage. Le spécimen V1 monétaire reste une référence historique, non le produit cible.
Le QR doit vérifier le contenu effectivement signé ; ne pas appeler signature du PDF un simple payload signé. Référence B03 et D03.

## Écarts du prototype physique (lecture du code)
- schema.ts : FR uniquement ; fr/en/de ; 2023–2026 ; période civile ; aucune saisie des effectifs/sites structurés. Étendre années valides de manière déterministe, périodes décalées, couverture par pays. Ne pas confondre langue et lieu d'activité.
- factors.ts : électricité FR 2023, gaz 2022, carburants 2021, fluides purs ; registres sources à vérifier. Autres combustibles, procédés, chaleur/froid/vapeur et autoproduction pas encore calculables dans le modèle.
- calculate.ts : les catégories inconnues déclenchent couverture partielle, mais les sous-totaux numériques existent encore pour une source manquante. Contrat PDF/UI : ne jamais présenter ces sommes comme totaux complets. La ventilation renouvelable doit rester indisponible lorsqu'une information pertinente manque ; aucun effet sur le facteur location-based. Le statut saleEligible historique n'est pas une validation scientifique ni réglementaire.
- Énergie de carburant déclarée : vérifier cohérence physique et source de conversion ; gaz PCS/PCI : ne pas confondre unités ; double comptage autoconsommation/combustibles et données monétaires.
- Données d'activité et facteurs validés côté serveur avant paiement, signature versionnée, anciennes attestations et crédits préservés.

## Recette minimale avant publication
B3-01 : entreprise et période, périmètre et effectif moyen si pertinent pour statut ; source non applicable justifiée.
B3-02 : total énergie avec électricité, combustibles et autres sources réellement présentes ; données manquantes empêchent une prétention complète ; ventilation renouvelable indisponible affichée distinctement.
B3-03 : scope 1 brut et scope 2 location-based distincts, facteurs sourcés, pas de compensation ni double comptage ; cas d'énergie thermique achetée et autoconsommée ; données d'activité physiques ou estimations justifiées.
B3-04 : données 2027+, pays supportés, exercices décalés, facteurs historiques et proxies clairement identifiés ; aucun résultat fictif.
B3-05 : même gabarit, titre validé, tableau lisible, données fictives en recette seulement ; 24 langues de l'existant, anciennes vérifications, devises, prix et packs.
B3-06 : preuve de calcul serveur, intégrité des champs signés, tests de paiements/crédits hors production, revue qualifiée B05.
B3-07 : ne pas prétendre rapport VSME complet, BEGES réglementaire, certification, audit ou dépôt officiel. Scope 3 exhaustif non requis par B3 ; aucune extension non validée.

B04 reste ouvert ; A04–A06, B01–B03/B05 et lots C à H restent bloquants. Priorité suivante : spécimen visuel B3 fictif et contrat de couverture du calcul, puis correction/validation du moteur dans le lot C.
