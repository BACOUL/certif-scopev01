# B03 / préparation C03-C05 — Contrat de couverture de la Déclaration carbone
28 novembre 2026. Étude isolée de la version db2cbd9f257c977abb5269d635972a593efb27d8. Pas de modification du code commercial. Suite au contrat de sélection (19 tests déjà passés), examiner le calcul réel et la restitution.
## Contrat de restitution proposé
| Donnée inconnue | Énergie totale | Scope 1 | Scope 2 location-based |
|---|---|---|---|
| Gaz, carburants ou autres combustibles | Partiel | Partiel | Indépendant si couvert |
| Électricité ou énergie thermique achetée | Partiel | Indépendant si couvert | Partiel |
| Procédés ou fuites de fluides | Indépendant si couvert | Partiel | Indépendant si couvert |
| Autoproduction non qualifiée | Partiel | Partiel par prudence | Partiel par prudence |
| Exclusion non structurée | Partiel par prudence | Partiel par prudence | Partiel par prudence |
| Part renouvelable non documentée | Total possible si couvert ; mix indisponible | Inchangé | Inchangé |
La classification self_generation est volontairement conservative tant que les frontières et flux ne sont pas structurés. Une source non applicable doit être justifiée par le déclarant. Pas de certification de couverture sur la seule déclaration.
Afficher chaque somme connue explicitement comme sous-total partiel, jamais comme total complet si un poste manque. Null (inconnu) différent de zéro mesuré/déclaré. Calculer le total 1+2 et les parts du graphique seulement si les deux scopes sont couverts ; ne pas calculer les pourcentages sur zéro. Un facteur identifié mais non approuvé ne rend pas le document éligible. Les périodes partielles doivent rester explicites. Une couverture déclarée n'est pas une assurance externe.
## Écarts observés dans les fichiers réels
- calculate.ts : la couverture globale est partielle lorsque sources manquantes ou exclusions, mais scope1T, scope2LocationT et totalT restent numériques ; il manque le statut séparé des trois indicateurs. energyTotalComplete ne tient pas compte des exclusions textuelles. saleEligible ne garantit ni validité des facteurs ni approbation réglementaire.
- schema.ts : énergie des carburants saisie comme nombre positif (limite 1e9) sans contrôle de ratio énergétique, ni justification de conversion spécifique. Exercice 2027 rejeté, France seulement ; le code FR ne permet pas de distinguer métropole continentale, Corse et outre-mer.
- export.ts : simulation non contractuelle, champ energie_totale_mwh null en cas de sources énergétiques manquantes, mais emissions_tco2e du résumé reste un agrégat numérique accompagné d'une couverture globale ; besoin du statut et libellé séparés, même convention que PDF.
- supplier-specimen.tsx : spécimen à données fixes, affiche directement les résultats S1/S2/total du calcul. Pas de preuve d'une erreur dans ce spécimen fixe ; ne pas généraliser cette présentation aux entrées arbitraires sans contrat. Le document cible réutilisera un modèle de restitution commun.
## Étude reproductible
scripts/b03-b3-coverage-study.cjs (bce038bfc01a4d9d86b2093f320983beb2db9841), workflow 507c54600f2033440b1745b9a2944c451f151ff8. Charge les modules TS existants sans modification et teste une projection documentaire isolée. 17 cas prévus : calcul indépendant du scénario du PDF, gaz/chaleur/procédés/fuites/autoproduction inconnus, exclusion, mix indisponible, source sans ligne, zéro, validation des unités et doublons, géographie, 2027 et ratio carburant incohérent. Deux tests reproduisent des blocages de lancement ; leur succès n'est pas une validation du moteur. Résultat de recette à consigner séparément. Pas de données clients ni appel commercial.
## Prochaine correction
Dans C02/C03/C04/C05, registre versionné et approuvé, contrat par scope/énergie, contraintes de conversion documentées, sources structurées, exercices supportés et géographie d'activité ; propager une projection unique vers PDF, CSV, UI. Tests d'intégration et cas limites, sans casser les anciennes attestations. A04–A06, B01–B05 et C restent ouverts.
