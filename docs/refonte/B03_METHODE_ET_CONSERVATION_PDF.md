# B03 — Méthodologie et conservation de l'attestation historique
27 novembre 2026 — cadrage de travail, non validation scientifique ou juridique.
Décision propriétaire : garder la base du document existant. Ne pas repartir d'un rapport générique, ne pas refaire le design. Prix 89 EUR, packs et parcours historique conservés dans le périmètre convenu ; toute nouvelle couverture physique ou extension scope 3 doit être explicitement arbitrée en B04.

## 1. Référence technique immuable
Production historique : 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a. Branche de travail examinée : bbf02fd5d769bc1ff457e54c495af461a0f3dae1.
Gabarit commun src/lib/attestation-pdf-template.ts (logo embarqué, styles, deux pages, dix rubriques, résultat, QR), textes src/lib/attestation-pdf-copy.ts et src/lib/attestation-i18n/*, génération core src/app/api/attestation/issue/route.ts et UE src/lib/eu-attestation-pdf.ts. La base visuelle commune sert aux 24 langues ; [recette A03](A03_REFERENCE_VISUELLE_FONCTIONNELLE.md) conserve les preuves des 24 PDF historiques. Ne pas réutiliser le spécimen fournisseur isolé comme nouveau design par défaut.

## 2. Matrice de conservation et évolutions envisageables
| Zone du gabarit historique | Conserver | Actualiser seulement sur preuve |
|---|---|---|
| En-tête et encadré résultat | Logo, identité, hiérarchie, unité tCO2e, date, référence, QR | Libellé selon méthode réelle ; si données physiques intégrées, distinguer scopes et couverture, pas de total trompeur |
| 1 Identification entité | Identité, pays, secteur, année, identifiant | Période/périmètre organisationnel et sites si nécessaires |
| 2 Nature du document | Rubrique et statut déclaratif | Présenter estimation et statut exact, ni certification ni assurance |
| 3 Périmètre | Rubrique et hiérarchie | Sources couvertes, inconnues, exclusions ; distinguer dépenses et activité |
| 4 Usage prévu | Position et objectif professionnel | Préciser adéquation aux demandes réelles, pas d'acceptation garantie |
| 5 Lecture par un tiers | Lisibilité, confidentialité et contrôles documentaires | Rendre compréhensible la couverture et le degré de preuve ; protéger les données financières détaillées |
| 6 Principe méthodologique | Encadrés méthode et version facteurs | Registre de facteurs, version, unité, source, année et géographie ; pas d'affiliation indue |
| 7 Références | Bloc de références et notes | Texte UE 2026/1560, distinction B3 et estimation par dépenses ; références GHG Protocol exactes |
| 8 Éléments techniques | QR, identifiant, signature, empreinte | Nouveau schéma signé si nouveaux champs ; conserver validation historique |
| 9 Limites du périmètre | Clause non-audit et exclusions | Inconnues, incertitudes et scopes effectivement couverts, limites de l'agrégat |
| 10 Synthèse finale | Conclusion, identité, pied de page | Cohérence avec résultat et statut réel |
Objectif deux pages A4 en 24 langues, pas de réduction illisible des polices ni suppression des limites. Si des informations validées ne tiennent pas, proposer une annexe méthodologique distincte avant tout changement de pagination ; ne pas la rendre obligatoire sans arbitrage. Spécimens fictifs clairement identifiés. Ne pas présenter ces propositions comme PDF déjà généré.

## 3. Méthodes : séparation non négociable
- [Règlement UE 2026/1560](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R1560), B3 §§32–33 : consommation totale d'énergie en MWh et émissions brutes scopes 1 et 2 location-based (volontaires pour <=10 salariés). La méthode par dépenses seule ne les détermine pas.
- [GHG Protocol Corporate Standard](https://ghgprotocol.org/corporate-standard), [Scope 2 Guidance](https://ghgprotocol.org/scope-2-guidance), [Scope 3 Calculation Guidance](https://ghgprotocol.org/scope-3-calculation-guidance-2) : identifier périmètre organisationnel, période, source et catégorie ; utiliser facteurs directs appropriés pour combustion, mix géographique pour énergie achetée, facteurs de chaîne de valeur pour postes indirects pertinents. Le module B3 demande location-based ; ne pas en déduire une conformité complète au GHG Protocol lorsque ses autres exigences ne sont pas couvertes.
- [ADEME Base Empreinte](https://base-empreinte.ademe.fr/) : source de facteurs à auditer pour chaque ligne (licence, ID, millésime, unité, géographie, frontière, incertitude, date et version). Ne pas supposer que les coefficients historiques CS-SB-v1 proviennent de l'ADEME sans preuve.
- CS-SB-v1 : sept ratios monétaires historiques, base de référence à préserver. Toute actualisation exige correspondance documentée entre catégorie et facteur, traitement devise/millésime monétaire/TVA si applicable, règles d'arrondi et tests. Ne jamais présenter ces dépenses comme un inventaire exhaustif du scope 3.
- Prototype physique isolé : calculs activité x facteur, unités harmonisées, couverture et exclusions. Avant intégration, vérifier pays/année, facteurs, sources non supportées, période, qualité, éventuels postes scope 3 et absence de double comptage. Inconnu ou non renseigné n'est pas zéro ; une somme partielle n'est pas un total entreprise.
- Étude scope 3 : identifier les 15 catégories, pertinence par activité, données physiques/fournisseur prioritaires quand disponibles ; méthode monétaire de repli seulement si facteur et périmètre adaptés. Ne pas additionner sept dépenses avec scopes 1/2 sans mapping et exclusions (combustibles, énergie, transport notamment). Pas de revendication d'exhaustivité ni ajout automatique au produit.
- Les règles relatives aux allégations environnementales et la revue méthodologique qualifiée restent à vérifier en B03/B05.

## 4. Intégrité et compatibilité
Lecture src/lib/sign.ts et route issue : schéma canonique historique contient notamment entité, pays, année, résultat agrégé, date d'émission et identifiant, standard CS-SB-v1. Le jeton QR ajoute des métadonnées ; il ne prouve pas automatiquement l'intégrité de tous les champs affichés, ni la véracité des données. Si résultats, périmètre et facteurs détaillés nouveaux sont présentés comme vérifiables, versionner le payload et le vérificateur, signer les champs pertinents avec sérialisation canonique, conserver l'ancien protocole/clé publique de vérification, tester modifications de chaque champ, anciennes attestations et langues. Ne pas déduire une signature complète du PDF lui-même. D03/F : vérifier les chemins réels et compatibilité avant déploiement.

## 5. Prochaine action et critères
B03 : inventorier les sources et droits de réutilisation, allégations, limites et hypothèses ; B04 : arbitrer l'étendue exacte de l'actualisation, y compris si données physiques ajoutées au produit actuel. C : facteurs vérifiés et calculs reproductibles serveur. D : modification ciblée du gabarit historique et dictionnaires, spécimen FR puis 24 langues et comparaison A03. Tests lisibilité, 2 pages/10 rubriques, valeurs exactes, signature, ancien format et droits. Les PDF historiques ne sont jamais recalculés silencieusement. Aucun changement de code ni publication à cette étape. A04–A06, B01/B02 et B05 restent ouverts.
