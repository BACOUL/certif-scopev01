# Certif-Scope — cahier d’alignement réglementaire et commercial (13 novembre 2026)

## Décision de gamme
**Une seule offre nouvelle** : fiche de données carbone fournisseur pour petites entreprises françaises, préparant **certaines informations** de B3 du standard volontaire établi par le règlement délégué (UE) 2026/1560.
L'attestation indicative fondée sur les dépenses est un **service historique** réservé à la consultation et au respect des droits des anciens clients. Ne pas la vendre comme un second produit ni supprimer les soldes, justificatifs, commandes ou PDF.

## Textes officiels et interprétation
1. Directive (UE) 2026/470 du 24 février 2026 : en règle générale, CSRD limitée aux entreprises de **plus de 1 000 salariés ET plus de 450 M€ de chiffre d’affaires net**. Il ne s’agit pas d’une obligation de déclarer pour toutes les PME. Les obligations nationales et les exceptions doivent être vérifiées.
   Source : https://eur-lex.europa.eu/eli/dir/2026/470/oj
2. Règlement délégué (UE) 2026/1560 du 3 juillet 2026, publié le 21 septembre : **norme volontaire** pour les entreprises hors reporting obligatoire. Annexe I, **B3 §32–33** : (i) énergie totale en MWh ; (ii) ventilation électricité/combustibles, renouvelable/non renouvelable, **si les informations sont disponibles** ; (iii) émissions brutes scopes 1 et 2 **location-based** en tCO₂e. B3 est volontaire pour les entreprises de **10 salariés ou moins**.
   L'article 3 sur le **plafond de la chaîne de valeur** s'applique aux exercices ouverts **à partir du 1er janvier 2027**, et l'annexe II détermine précisément les données plafonnées. Ne pas confondre le plafond CSRD avec une interdiction générale de demandes contractuelles ou bancaires.
   Source : https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj
3. Directive (UE) 2024/825 : règles contre les allégations environnementales trompeuses applicables depuis le **27 septembre 2026**. Ne pas employer « certification européenne », « neutre en carbone », « conformité CSRD » ou label environnemental non autorisé.
   Source : https://eur-lex.europa.eu/eli/dir/2024/825/oj

**Important** : ne pas recopier sans vérification la rubrique B3 de la **recommandation 2025/1710** ; le règlement 2026/1560 est la base primaire de l’offre actuelle. Le bilan réglementaire BEGES, l’empreinte environnementale d’un **produit**, le scope 3, les indicateurs B4–B11 et un rapport volontaire complet restent des périmètres distincts.

## État actuel contre les attentes B3

| Attente / critère | État PR #107 | Action / test de validation |
|---|---|---|
| Identité, période, contrôle opérationnel et sources | Implémentation FR/EN/DE | Vérifier formalisme et cohérence du périmètre, existence et clôture des années |
| Énergie totale en MWh | Disponible pour électricité, gaz et carburants avec énergie PCI fournie par client | Vérifier PCS/PCI, conversions, cas d'énergie achetée/autoproduite, absence de double compte |
| Ventilation électricité/combustibles et renouvelable/non renouvelable si disponible | **Implémentée avec limites** : champ facultatif kWh renouvelables avec justificatif de type facture/relevé ; ventilation partielle indiquée comme inconnue et non comme zéro | Tester la véracité des justificatifs, l'absence de double compte et la couverture de toutes les formes d'énergie |
| Scope 1 | Gaz, diesel B7, essence E10 (ADEME v23.6) ; fuites documentées de quatre gaz fluorés purs HFC-32, HFC-134a, HFC-125, HFC-143a (règlement UE 2024/573, annexe I, PRP 100 ans) | Autres fluides, mélanges, combustibles et procédés exclus ; catalogue ADEME 2026 non vérifié ; pas de couverture B3 complète |
| Scope 2 location-based | Électricité FR continentale seulement | Ajouter chaleur, vapeur et froid achetés, vérifier facteur géographique et millésime |
| Facteurs et années | ADEME historique ; années 2023–2025, **2026 en aperçu provisoire sans achat** | Vérifier v23.11, les licences et les facteurs compatibles avant toute vente portant sur 2026 |
| Preuves et qualité des déclarations | Justifications textuelles et origine des données, sans audit | Distinguer facture, estimation, déclaration ; expliciter les limites et les exclusions |
| Document et intégrité | PDF avec logo historique, tableau des énergies et limites B3 ; CSV de ventilation ; JSON signé Ed25519 ; PDF non signé | Effectuer contrôle visuel du PDF en FR/EN/DE, tests de pagination et signature sans prétendre certification |
| Disponibilité commerciale | Paiement volontairement désactivé | Recette Stripe **test** / remboursements / récupération / TVA, migration anciens crédits avant mise en vente |
| Localisation / langues / SEO | Page d'accueil FR/EN/DE enrichie, messages réglementaires corrigés ; 21 autres locales en attente ; pages **noindex** sur branche de validation | Auditer les anciennes routes SEO, traductions restantes et recette mobile avant déploiement |

## Positionnement acceptable dès maintenant (site de validation)
> « Fiche carbone fournisseur : préparez certaines données de consommation énergétique et d'émissions de votre entreprise, avec un périmètre, des facteurs et des limites vérifiables. Inspirée de la rubrique B3 du standard volontaire européen (UE) 2026/1560. »
> « À ce stade : France continentale, certaines sources seulement, exercices 2023–2025, sans audit, certification ni garantie d'acceptation. »

Ne pas faire croire que 89 € est un coût d'obligation légale, ni que les clients de toute PME devront produire ou acheter une fiche. Le prix reste **une hypothèse commerciale à tester**.

## Ordre de réalisation et critères de sortie
**P0 – sécurité et héritage :** conserver PR #107, interdire la fusion/déploiement sans feu vert, préserver anciens PDF/droits/commandes, migration idempotente, secrets test/production séparés.
**P1 – vérité du moteur :** inventaire exhaustif des sources scopes 1/2 ; facteurs officialisés, millésimes compatibles et conversions testées ; schéma énergétique B3 ; données manquantes ne valent jamais zéro ; signalement explicite des postes exclus.
**P2 – document fiable :** PDF lisible inspiré du modèle historique mais portant des données physiques ; tableaux B3 lorsqu'applicables, sources détaillées, n° de version, date d'émission, mentions de limite, CSV et JSON signés avec clé publique accessible.
**P3 – site cohérent :** un seul produit, un seul parcours public, pages FR/EN/DE mises à jour, exemple gratuit authentique, préqualification des demandes du donneur d'ordre, terminologie exacte sur l'ensemble des pages anciennes et nouvelles.
**P4 – recette :** tests calculs & vulnérabilités, vrai achat Stripe **mode test** et webhook, restaurations/récupération de commande, vérification PDF, mobile/accessibilité, revue juridique RGPD/TVA/CGV.
**P5 – preuve de marché :** faire relire le PDF par des acheteurs et responsables RSE, puis faire confirmer à des PME si 89 € est acceptable ; sans preuve de demande, ne pas miser sur le seul règlement.

## Sources techniques 2026 et concurrence gratuite (à intégrer à la recette)

- **ADEME Base Empreinte**, source nationale officielle : Base Carbone **v23.11** annoncée en 2026. La PR utilise encore **v23.6** ; **ne pas** changer les facteurs automatiquement sans vérifier leurs IDs, scopes, composantes « combustion » ou « électricité location-based », dates, unités et licence. Source : https://base-empreinte.ademe.fr/
- **EFRAG**, norme volontaire **VS** : modèle numérique officiel **v2.0.0 du 4 novembre 2026** et convertisseur **XBRL gratuit**. Il faut comparer les champs B3 du produit à ce modèle et documenter les équivalences, pas prétendre que notre CSV/JSON est déjà du XBRL officiel. Source : https://www.efrag.org/en/vs-digital-template-and-xbrl-taxonomy
- EFRAG référence aussi des **calculateurs carbone gratuits**. Le seul argument « un PDF à 89 € » ne suffit pas comme différenciation démontrée. Valeur à tester : saisie simplifiée, calculs fiables avec facteurs millésimés, contrôle des données manquantes, PDF lisible et échange pratique avec l'acheteur. Source : https://www.efrag.org/en/smes-and-sustainability-reporting

**Seuil d'ouverture :** aucun paiement public tant que les P0–P4 ne sont pas réussis et qu'une validation explicite du propriétaire n'a pas été donnée. Aucun changement de production dans cette étape.
