# B04 — Spécification de l'attestation actualisée
27 novembre 2026 — proposition documentaire pour arbitrage ; aucun PDF commercial modifié.
Référence : branche 0a676b9dfa65e384086308d9905c84c7f3d3cbb3, production historique 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a.
Décision propriétaire : conserver la base de l'attestation historique. Réutiliser src/lib/attestation-pdf-template.ts, src/lib/attestation-pdf-copy.ts et dictionnaires existants, 2 pages A4, 10 rubriques, logo, hiérarchie, QR, 24 langues, 89 EUR et packs. Ne pas reprendre le spécimen fournisseur comme design de remplacement. Garder les anciennes attestations vérifiables.

## 1. Périmètre de livraison
V1 actualisation : produit historique estimatif par dépenses, références et limites exactes, facteurs uniquement après validation, pas de nouveau produit automatique. V2 étudiée : intégrer des consommations physiques et des sous-totaux scopes 1/2 dans le même gabarit, si le propriétaire valide l'évolution du périmètre et si facteurs, couverture, calcul et vérification sont validés. Scope 3 exhaustif hors livraison ; étude des postes indirects sélectionnés séparément. Ce document ne vaut pas autorisation de V2 ni mise en vente.

## 2. Texte de travail français — V1
Les textes ci-dessous remplaceraient seulement les champs correspondants des dictionnaires, après validation B05. Les valeurs entre crochets sont dynamiques ou conditionnelles ; ne pas les imprimer littéralement.

### Page 1 — Synthèse et identification
En-tête : conserver « ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE ».
Bandeau : « Estimation déclarative · Méthode identifiée · Document traçable ».
Sous-titre : « Estimation non auditée — ne constitue pas un bilan GES réglementaire ».
Résultat : « ÉMISSIONS ESTIMÉES POUR LES POSTES DÉCLARÉS » ; [résultat agrégé en tCO₂e].
Sous-ligne : « Estimation monétaire des dépenses couvertes, pour l’exercice de référence. »
Ligne de contexte : « Support d’information carbone destiné aux échanges professionnels. »
QR et références : conserver emplacement et présentation. Date d'émission, période de validité documentaire (ne vaut ni validité légale ni actualité des données), identifiant, émetteur. Afficher la portée exacte de la vérification.

1. IDENTIFICATION DE L’ENTITÉ
   Conserver nom, identifiant lorsqu'il est renseigné, pays, secteur, année de référence. Ajouter les dates effectives uniquement lorsque collectées et validées ; distinguer pays déclaré et couverture réelle des facteurs. Ne pas supposer que le pays du siège est celui de toutes les activités.
2. NATURE DU DOCUMENT
   « Ce document présente une estimation indicative des émissions de gaz à effet de serre associées aux dépenses déclarées par l’entité. Il ne constitue ni un audit ni une assurance indépendante. »
3. PÉRIMÈTRE
   « L’estimation couvre uniquement les catégories de dépenses déclarées et prises en compte par la méthode indiquée en page 2. Elle ne constitue pas un inventaire exhaustif des émissions de l’entité. »
   Si couverture partielle autorisée et démontrable : indiquer postes exclus ou inconnus, sans les assimiler à zéro.
4. USAGE PRÉVU
   « Support d’information pour les échanges avec clients, fournisseurs et autres partenaires. Son adéquation aux exigences particulières du destinataire doit être vérifiée avant utilisation. »
5. LECTURE PAR UN TIERS
   « La référence, la date d’émission et les éléments de vérification facilitent le contrôle documentaire. Ils ne valident pas les données déclarées ni l’exactitude scientifique des estimations. »
   Confidentialité : « Les montants financiers détaillés ne figurent pas dans le PDF. » Ne pas promettre l'absence de stockage sans audit technique.

Bandeau de statut : « Estimation déclarative | Postes couverts | Échanges professionnels ». Maintenir la hiérarchie graphique historique et les mentions utiles.

### Page 2 — Méthodologie, vérification et limites
6. PRINCIPE MÉTHODOLOGIQUE
   « Les montants déclarés sont multipliés par les facteurs monétaires correspondant aux catégories couvertes. Le résultat est exprimé en tonnes équivalent CO₂. »
   Champs existants méthode/version des facteurs : [version effectivement utilisée], [source et millésime documentés si validés], [zone et base de prix]. Formule : « Σ (dépense × facteur compatible) / 1 000 = tCO₂e » uniquement si facteur en kgCO₂e/EUR ; si facteur en kgCO₂e/kEUR, diviser par 1 000 000. Ne pas mélanger unités. Aucune revendication ADEME pour CS-SB-v1 tant que la provenance de ses sept coefficients n'est pas établie.
7. CADRES DE RÉFÉRENCE
   « Le GHG Protocol décrit notamment des méthodes d’estimation monétaire de certaines émissions indirectes. Le règlement délégué (UE) 2026/1560, annexe I, rubrique B3, prévoit des informations relatives à l’énergie et aux émissions des scopes 1 et 2 dans une norme volontaire de durabilité. Cette attestation monétaire ne couvre pas à elle seule ces indicateurs. »
   Référence directe EUR-Lex : https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj. Retirer les références ISO, CSRD, ESRS ou Taxonomie qui ne seraient que décoratives ou dont la pertinence n'est pas démontrée ; ne pas présenter une conformité normative.
8. ANNEXE TECHNIQUE DE VÉRIFICATION
   Conserver identifiant, algorithme, empreinte du contenu signé, signature, clé publique et QR. Texte : « Les éléments cryptographiques permettent de contrôler les données effectivement incluses dans le contenu signé. Ils ne constituent pas une vérification indépendante des déclarations. » Ne pas écrire « PDF signé » si seul le payload est signé. Vérifier D03 avant diffusion.
9. PÉRIMÈTRE ET LIMITES
   « Estimation fondée sur les dépenses déclarées. Les consommations énergétiques, les émissions directes (scope 1), les émissions indirectes liées à l’énergie achetée (scope 2) et un inventaire exhaustif du scope 3 ne sont pas calculés par cette méthode. Les résultats dépendent de la qualité des données et de la pertinence des facteurs. Aucune assurance indépendante n’est fournie. »
   Responsabilité : « L’entité est responsable des informations déclarées ; Certif-Scope applique la méthode identifiée. » Faire relire juridiquement ; ne pas exonérer toute responsabilité de méthode.
10. SYNTHÈSE
   « Ce document facilite la transmission d’une estimation carbone datée, pour les postes couverts et selon la méthode indiquée. Il ne se substitue pas aux informations ou bilans spécifiquement requis par le destinataire ou la réglementation. »

## 3. Variante V2 conditionnelle — enrichissement du même gabarit
Ne jamais remplir des valeurs non calculées. Le titre reste celui de l'attestation sauf arbitrage explicite. Substituer, dans l'encadré résultat et les blocs existants, un résumé de l'énergie et des émissions par périmètre :
| Indicateur | Valeur dynamique | Condition |
|---|---|---|
| Énergie consommée | [MWh] | sources énergétiques renseignées ; sinon somme des sources couvertes ou non disponible |
| Scope 1 | [tCO₂e] | sources directes recensées, facteurs appropriés |
| Scope 2 location-based | [tCO₂e] | énergie achetée et facteur géographique/période validés |
| Émissions indirectes sélectionnées | [tCO₂e] | uniquement postes retenus, méthode et frontières sans chevauchement |
| Total scopes 1+2 | [tCO₂e] | seulement si périmètres et couverture permettent ce libellé |
Ne pas additionner une estimation monétaire agrégée à des émissions physiques sans correspondance de frontières prouvée. Si une valeur manque, afficher « non disponible » ou « partiel » ; jamais zéro implicite. Ne pas qualifier les indicateurs B3 de rapport complet VSME. Le scope 3 complet reste exclu sauf décision et méthode ultérieures.
Rubriques 1, 3 et 6 : périmètre de contrôle, sites, dates, catégories et méthodes ; rubrique 7 : statut B3 exact après revue ; rubrique 8 : versionner le payload signé pour couvrir nouvelles données et conserver vérification historique ; rubrique 9 : exclusions, données manquantes, facteurs, incertitude et non-audit. Si 2 pages insuffisantes, proposer annexe technique avant toute modification du nombre de pages.

## 4. Contrat de publication et recette
- Les textes français sont une proposition ; traduire et contrôler les 24 langues seulement après validation du contenu. Les clés des dictionnaires et le CSS ne sont pas modifiés dans ce commit.
- Le serveur doit calculer le résultat à partir de données validées avant paiement/consommation de crédit ; ne pas accepter le total client comme autorité. Préserver confidentialité, anciennes références et droits.
- Gabarit existant, logo, 10 rubriques, QR, pagination et typographie : comparer à A03 ; contrôler 24 langues, valeurs et unités, lignes longues, lisibilité, PDF/QR, anciens documents et cas limites. Aucun PDF V2 sans validation B04/C/D.
- V1 : remplacer les références et textes seulement après revue, préserver chiffres historiques émis. A04–A06, B01/B02/B03/B05 et facteurs/indices restent ouverts. B04 proposé, non coché.
