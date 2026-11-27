# Certif-Scope — plan directeur de mise en production
Mis en place le 26 novembre 2026 après l'annonce par le propriétaire de la deuxième vente organique de l'attestation à 89 €.

## Source de vérité et point de reprise
- Dépôt BACOUL/certif-scopev01 ; PR #108 **brouillon** ; branche `refonte/conserver-site-existant-20261114`.
- État technique de départ observé : c041c22e8866a46f03fb6dfd5a5d36391cc5d674. Base historique de la PR : 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a. Revérifier la production réelle avant toute modification ou livraison.
- Ce fichier pilote les travaux et remplace les anciennes orientations commerciales contradictoires (notamment réserver l'attestation historique aux anciens clients). Le document REPRISE_SITE_EXISTANT_2026-11-14.md reste une archive technique utile ; ne pas reprendre la PR #107 comme base.
- **Décision prioritaire du propriétaire : actualiser le site et l'attestation existante, pas reconstruire ni étendre sans nécessité.** La première livraison doit préserver design, navigation, URL, 24 langues, attestation à 89 €, packs, clients, moteur et parcours existants sauf correction justifiée. Actualiser textes, références, facteurs lorsque leur provenance est vérifiée, PDF historique et méthodologie selon les exigences applicables. Ne pas transformer le calcul par dépenses en calcul B3 par simple changement de libellé. Le prototype physique scopes 1/2 reste isolé, non commercialisé : une éventuelle offre distincte, extension scope 3, nouveau prix ou refonte substantielle relève d'une phase séparée, à valider expressément après l'actualisation prioritaire. Ne pas utiliser Bilan Carbone® ou revendiquer BEGES réglementaire/conformité B3 sans preuve. Cette décision prévaut sur les orientations précédentes.
- Aucun merge, déploiement production, paiement réel, migration de données ou changement de DNS sans autorisation explicite. Maintenir les garde-fous de la PR, aucune donnée client réelle en recette. Préserver le site qui vend.
- **Lot courant : A — inventaire et protection du patrimoine.** A01 et A02 validés ; A03 : recette publique réussie, 24 PDF historiques régénérés, empreintes et planches vérifiées ; dernier contrôle ciblé du formulaire à corriger (FR réussi ; EN arrêté sur deux requêtes API bloquées). A04 : incident potentiel de secrets publics à traiter en priorité.

## Protocole obligatoire à chaque reprise
1. Lire ce fichier, le journal et les décisions. Vérifier la branche, le SHA, l'état de la PR et les écarts de production. Ne pas ouvrir un nouveau chantier si le lot courant n'est pas clôturé, sauf incident de sécurité.
2. Choisir les identifiants du lot courant. Lire le code et les sources primaires avant de modifier. Distinguer existant vérifié, existant non vérifié, manquant et hors périmètre.
3. Faire des commits limités au lot, sans régression de l'ancien produit. Ajouter des tests ciblés. Ne jamais cocher un point faute de preuve.
4. Mettre à jour le journal (date, ID, fichiers, commit de code, commandes/résultats, preuve, limites, prochain ID). Ne pas inclure de secrets ou de données personnelles.
5. Pour clôturer un lot, tous ses critères bloquants doivent être validés avec preuves ; toute exception doit être explicitement acceptée et documentée, sans déroger aux obligations légales ou de sécurité. Rejouer les tests des lots affectés après toute modification. Aucune case validée uniquement sur la base de l'existence de code.
6. Si un point nouveau apparaît, lui attribuer un ID, une priorité et une dépendance ; ne pas le perdre dans le chat. Les travaux différables restent dans le backlog. Le plan est un minimum évolutif, pas une garantie d'exhaustivité absolue.
Légende : [ ] non validé ; [x] preuve inscrite au journal. Un point bloqué est marqué dans le registre des blocages (pas coché).

## Lots séquentiels — critères de sortie
**Règle de périmètre :** les tâches portant uniquement sur une nouvelle offre (nouveau formulaire physique, nouveau prix/checkout, scope 3, nouveaux pays et PDF distinct) sont reportées dans une phase optionnelle non autorisée à la vente. Pour la première livraison, appliquer les lots B à H à l'attestation historique et au site existant ; préserver les composants existants, réutiliser les contrôles déjà réussis, ne modifier que les éléments justifiés par la matrice réglementaire et l'audit. Séparer chaque changement de la phase optionnelle ; ne pas cocher une tâche reportée comme réalisée. Les obligations de sécurité et de non-régression restent bloquantes.
### A — Inventaire, protection et référence de production
- [x] A01 Identifier déploiement réellement actif (projet, branche, SHA, domaines) et comparer à la base PR #108 ; intégrer les changements ultérieurs sans écraser la production.
- [x] A02 Inventorier routes FR/EN/DE et 21 autres langues européennes, pages SEO, composants, formulaire, moteur, PDF, vérification, commandes, crédits, packs, services, emails, Stripe et flux de données.
- [ ] A03 Capturer référence fonctionnelle et visuelle de l'ancien site et PDF avec données fictives ; définir tests de non-régression et inventaire des URL.
- [ ] A04 Auditer présence de secrets dans dépôt/historique, notamment .env.local (sans afficher ses valeurs) ; si exposition, bloquer, organiser révocation/rotation avec accord et sécuriser.
- [ ] A05 Documenter stratégie de sauvegarde et retour arrière, isoler les environnements, maintenir verrou preview et déploiement automatique désactivé.
- [ ] A06 Inventorier coûts/services et ressources réellement nécessaires ; aucun abonnement ajouté sans accord.
**Sortie :** inventaire daté, référence vérifiable, risques critiques traités ou explicitement bloquants, production intacte.

### B — Cadre réglementaire, méthode et offre
- [ ] B01 Vérifier sur EUR-Lex les textes officiels 2026/470 et 2026/1560, dates, périmètres, exceptions, dispositions transitoires et éventuels correctifs.
- [ ] B02 Matrice B3 : exigences, conditions, unité, source, couverture produit, exclusions et texte exact référencé ; distinguer norme volontaire, obligations des grandes entreprises et demandes fournisseurs.
- [ ] B03 Documenter les limites spend-based vs données physiques, périmètres organisationnels, facteurs, scopes, données manquantes, énergie, déclaratif/non audité ; vérifier aussi règles applicables aux allégations environnementales.
- [ ] B04 Valider le positionnement de l'attestation existante actualisée, prix 89 €, packs, langues, usages et limites ; définir explicitement les éventuelles évolutions nécessaires. Nouveau produit, intitulé distinct et extension scope 3 hors première livraison.
- [ ] B05 Revue juridique et méthodologique qualifiée des textes, limitations, CGV, TVA, facturation, mentions légales et RGPD ; consigner réserves.
**Sortie :** matrice réglementaire sourcée, spécifications produit et méthode approuvées ; pas de promesse de certification.

### C — Moteurs et facteurs
- [ ] C01 Auditer le moteur historique et ses hypothèses, catégories de dépenses, unités, monnaie, année, provenance et droits de réutilisation.
- [ ] C02 Actualiser/justifier les facteurs ADEME et autres sources appropriées ; registre de version, date, géographie, unité, frontière, licence et proxies ; ne pas inventer de facteur.
- [ ] C03 Vérifier le périmètre du modèle historique et ses exclusions, notamment les scopes non couverts. Les calculs physiques scopes 1/2, énergie et autres sources restent dans la phase optionnelle sauf décision spécifique après analyse B.
- [ ] C04 Corriger modèle des exercices 2027+, périodes partielles et futures, dates invalides, pays, conversions ; limiter clairement la vente aux pays réellement supportés (FR actuellement).
- [ ] C05 Gérer zéro vs inconnu, exclusions, preuves, qualité des données, incertitudes, limites, arrondis et critères d'éligibilité ; ne pas présenter une somme partielle comme total.
- [ ] C06 Calcul serveur autoritatif, schémas validés, protection contre manipulation client ; tests numériques indépendants et cas limites, régression historique.
- [ ] C07 Geler et versionner méthode et facteurs par document émis afin que résultats anciens restent reproductibles.
**Sortie :** tests reproductibles, cas de référence chiffrés et validation méthodologique ; facteurs et limites traçables.

### D — PDF et parcours produits
- [ ] D01 Améliorer PDF historique sans casser format/droits/vérification ; sources, catégories, réserves, cohérence calcul/PDF, date, identité, version.
- [ ] D02 Adapter seulement les champs et textes du formulaire et du PDF historiques dont la modification est justifiée par B/C. Le formulaire physique et son spécimen restent isolés, hors première livraison.
- [ ] D03 Vérification documentaire et identifiants, intégrité, accès sécurisé, conservation et récupération ; ne pas confondre authenticité du fichier et véracité des déclarations.
- [ ] D04 Préserver le gabarit historique de deux pages et ses 24 langues ; actualiser les textes nécessaires, contrôler accents, valeurs, unités, sauts de page et pagination ; spécimens fictifs identifiés.
- [ ] D05 Tester erreurs de génération, reprises, cohérence formulaire/calcul/CSV/PDF, données minimales et maximales.
**Sortie :** PDF et formulaires testés avec preuves visuelles et fonctionnelles, aucun remplacement du produit historique.

### E — Site, contenu et référencement
- [ ] E01 Préserver design, navigation, responsive, routes et pages historiques des 24 langues ; actualiser les textes de l'offre existante sur accueil/produit/prix sans CTA trompeurs ni publicité d'un produit non commercialisé.
- [ ] E02 Actualiser uniquement les exemples PDF, FAQ, méthode, usages, restrictions réglementaires et mentions prix nécessaires ; conserver le parcours avant achat.
- [ ] E03 Vérifier intégralité des textes FR/EN/DE, erreurs, emails, pages légales et SEO ; préserver les parcours historiques des 21 autres langues et leurs PDF/emails ; pas de langue ou de pays vendu sans support correspondant.
- [ ] E04 Préserver URL, redirections, liens internes, canonicals, hreflang, sitemap, robots, données structurées ; pages réglementaires sourcées utiles, pas de pages dupliquées.
- [ ] E05 Recette UX desktop/mobile, accessibilité clavier/contraste, performance, formulaires, analytics et consentement approprié ; préparer suivi Search Console et conversions.
**Sortie :** preview visuelle comparable, liens et indexabilité de production vérifiés en recette, aucune modification publique.

### F — Commerce, clients et sécurité
- [ ] F01 Inventorier droits et soldes historiques ; rapprocher packs/commandes/documents, plan de compatibilité et restauration ; pas de conversion destructrice.
- [ ] F02 Stripe en mode test isolé : prix, devises, TVA, factures, métadonnées produit et commandes ; contrôler le serveur, pas le montant envoyé par le navigateur.
- [ ] F03 Webhooks signés/idempotents, tentatives multiples et événements désordonnés ; pas de livraison avant paiement confirmé ; protection des crédits contre concurrence.
- [ ] F04 Livraison PDF/email, retours, paiements refusés/abandonnés, remboursement, litiges, récupération et support ; tester échecs et reprises.
- [ ] F05 Audit API, authentification/autorisation, entrées, accès PDF, débit, confidentialité, rétention/purge, logs sans données sensibles, dépendances et vulnérabilités ; gérer les secrets.
- [ ] F06 Sauvegarde/restauration testée sur données fictives, observabilité, alertes et coûts ; aucune clé live dans la preview.
**Sortie :** parcours complet du produit historique actualisé et droits historiques testés en mode test ; sécurité critique résolue.

### G — Recette de release
- [ ] G01 CI sur SHA candidat : npm ci, tests moteur/historique, tests intégration, TypeScript, build, lint fonctionnel, audit dépendances et smoke HTTP.
- [ ] G02 Recette navigateur desktop/mobile du parcours historique actualisé FR/EN/DE et des 21 autres langues, PDF contrôlés visuellement et cas d'erreur ; validation de non-régression des routes/SEO.
- [ ] G03 Recette bout en bout avec Stripe test, crédits, emails, vérification, accès et restauration ; rapport résultats et défauts.
- [ ] G04 Revue finale juridique/méthodologique et sécurité, vérification de la matrice B3, validation des prix et périmètre.
- [ ] G05 Préparer candidat en environnement isolé avec garde-fous de preview ; plan de transition des verrous API/noindex vers configuration de production testé sans activer de paiements réels.
- [ ] G06 Fixer SHA exact, consigner preuves, défauts résiduels et rollback ; soumettre au propriétaire. Toute modification du candidat impose revalidation proportionnée.
**Sortie :** dossier de recette, aucun blocage critique, autorisation explicite de production pour ce candidat.

### H — Publication et contrôle (uniquement sur autorisation)
- [ ] H01 Confirmer SHA approuvé, sauvegardes, rollback, domaine, variables, isolation, migration autorisée et prix live validés ; ne pas exécuter de paiement réel sans accord distinct.
- [ ] H02 Déployer la version approuvée ; contrôler garde-fous adaptés, indexabilité, routes, API, logs et page de vente ; pas de changement de DNS imprévu.
- [ ] H03 Vérifier flux de délivrance et observations Stripe sans déclencher de paiement réel non autorisé ; contrôler Search Console, emails, erreurs, performances et coûts.
- [ ] H04 Si incident bloquant, appliquer procédure de retour arrière approuvée ; enregistrer résultat, SHA actif et suivi après lancement.
**Sortie :** production saine vérifiée et journal à jour.

## Registre initial des blocages
| ID | Constat vérifié sur la branche | Lot |
|---|---|---|
| R01 | Facteurs ADEME historiques, provenance et licence à revalider | C |
| R02 | Schéma France uniquement et années 2023–2026 ; éligibilité exclut 2026 ; sources non supportées | C |
| R03 | PDF fournisseur = spécimen fixe ; pas de document personnalisé vendable | D |
| R04 | Proxy bloque API et flux privés, noindex global ; verrou intentionnel de preview, ne pas supprimer maintenant | G/H |
| R05 | Ancien plan évoque restriction du produit historique ; direction de travail désormais maintien des deux offres, validation du périmètre en B | B |
| R06 | Fichier .env.local suivi sur main public ; noms KEY_SECRET, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET et RESEND_API_KEY associés à des valeurs non vides, dont trois de forme credential. Validité/live non vérifiées. Historique de cinq commits sur main ; rotation/révocation et examen historique requis avec accord avant livraison. Aucune valeur reproduite. | A |
| R07 | CI historique verte mais ne valide pas parcours paiement ni recette juridique/visuelle ; à rejouer sur candidat | G |
| R08 | Résolu le 27/11 : SHA actif identique à la base PR #108, aucune divergence à intégrer. Revérifier avant livraison. | A01 |
| R09 | A03 : 133 HTTP 200 et 132 captures inspectées par planches ; référence visuelle partielle (animations/illustrations à stabiliser). Recette PDF réussie : 24 PDF de deux pages, 576 combinaisons UI/PDF, contrôles de saisie numérique et contrats simulés. PDF examinés ; contrôle FR réussi, EN arrêté sur deux tentatives API bloquées. Relance diagnostique en cours. | A03 |

## Backlog différable
Nouvelle offre physique B3 distincte, scope 3 additionnel, nouveau formulaire/checkout/PDF, internationalisation géographique supplémentaire, campagnes payantes, abonnements, automatisations avancées : hors lancement tant que leur utilité et leur coût ne sont pas validés. Ne pas retarder une version sûre pour un enrichissement facultatif.

## Journal de reprise
| Date | ID | Action / preuve | État / prochain |
|---|---|---|---|
| 2026-11-26 | INIT | PR #108 vérifiée ouverte, brouillon, non fusionnée ; tête c041c22e8866a46f03fb6dfd5a5d36391cc5d674 avant création du plan. Historique CI success constaté ; aucun nouveau test exécuté. | Plan initial créé. Prochain : A01, puis A02–A06. |

| 2026-11-27 | A01 | Vercel : [production](https://vercel.com/jeason1/certif-scopev01/477nglz8o) ID `dpl_89K5rMzS2fyFDmneFfhYF4XwqDiv`, READY, alias certif-scope.com et www.certif-scope.com, branche `fix/multilingual-fr-en-de-20261001`, SHA `71e6cd87a8c04041ff58be4db99a6fa49cb8c40a`. Projet de revue séparé `certif-scope-revue-2026`, staging READY ID `dpl_9pm7ybrxmarqu6jzWvt5gFwQvZPk`, SHA `c041c22e8866a46f03fb6dfd5a5d36391cc5d674`. [Comparaison GitHub](https://github.com/BACOUL/certif-scopev01/compare/71e6cd87a8c04041ff58be4db99a6fa49cb8c40a...c2ab0df29c0f5926ecc0220b56c42f03e2340871) : 57 commits d'avance, 0 de retard, 29 fichiers (dont plan directeur), aucune suppression de fichier ; branche de base identique à production. PR brouillon, vercel.json désactive déploiements Git. | A01 validé par métadonnées Vercel et comparaison GitHub ; pas de test HTTP, paiement ou déploiement. Preview en retard d'un commit documentaire avant cette mise à jour. Prochain : A02. |

| 2026-11-27 | A02 | [Inventaire de référence](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/docs/refonte/A02_INVENTAIRE_PRODUCTION.md), commit `9f11ec98e17d0dd378137dc43edec2aa736d1202` : 120 fichiers page, 16 API, 108 URL des sitemaps, 24 langues, 7 catégories historiques, packs et dépendances. Pages publiques FR/DE consultées via cache web ; EN/sitemap live non récupérés. | Inventaire statique validé, pas de recette live ou de services externes ; A03 capture visuelle et comportement réel, A04/A06 sécurité/coûts. Aucun paiement, API commerciale ni déploiement. |

| 2026-11-27 | A03 (en cours) | [Référence et matrice A03](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/docs/refonte/A03_REFERENCE_VISUELLE_FONCTIONNELLE.md), commit `a2120e8f563d92f524a8a27c6b0232b96bf147a5`. Script `635c24bb`, workflow `37aad89b`, [exécution Actions](https://github.com/BACOUL/certif-scopev01/actions/runs/46022869856) observée en cours. Captures historiques et 24 aperçus retrouvés, non régénérés. | Non validé : examiner rapport/captures, compléter PDF fictifs hors production et cas de saisie. DNS local indisponible, cache web non suffisant. Aucun paiement, API commerciale, changement de production. Prochain : terminer A03. |

| 2026-11-27 | A03 (suite) | [Recette publique réussie](https://github.com/BACOUL/certif-scopev01/actions/runs/46022869856), 133 HTTP 200, 132 captures, archive analysée, 0 échec. [Rapport actualisé](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/docs/refonte/A03_REFERENCE_VISUELLE_FONCTIONNELLE.md), commit `d141dd916387a01b668dd73455adcf5d23aeee20`. [Recette PDF hors ligne](https://github.com/BACOUL/certif-scopev01/actions/runs/46025669212) en cours lors du contrôle ; premier essai `46025558529` arrêté avant tests sur absence pdfinfo, corrigé en `50f203b6`. | A03 reste ouverte : PDF fictifs, cas de saisie et stabilisation visuelle à terminer. Aucun paiement, migration ou déploiement. |

| 2026-11-27 | DECISION OFFRE | Le propriétaire souhaite adapter la nouvelle offre comme un bilan carbone plutôt qu'une simple fiche fournisseur. Intitulé de travail : bilan d'émissions de GES simplifié — énergie, scopes 1 et 2, indicateurs B3. Étudier l'extension scope 3 au lot B et les conditions d'usage des appellations. Sources : [règlement 2026/1560](https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj), [BEGES](https://www.ecologie.gouv.fr/presse/decret-bilan-emissions-gaz-effet-serre-beges), [marque Bilan Carbone®](https://associationbilancarbone.fr/f-a-q/). | Orientation de travail consignée ; intitulé et périmètre définitifs à valider au lot B. Aucun changement de code, prix ni production. A03 reste prioritaire. |

| 2026-11-27 | DECISION PRIORITAIRE / A03 | Le propriétaire confirme : actualiser site et attestation existants, sans tout modifier. Première livraison ciblée ; prototype physique isolé, extensions facultatives reportées. [Recette PDF historique](https://github.com/BACOUL/certif-scopev01/actions/runs/46025669212) : job 140596294176 success, 24 PDF de 2 pages et 10 rubriques sans coupure détectée, 576 combinaisons UI/PDF, 24 contrats email/webhook et contrôles numériques historiques réussis ; [archive fictive](https://github.com/BACOUL/certif-scopev01/actions/runs/46025669212/artifacts/15211882927). | A03 non cochée : examen visuel et saisie interactive à terminer ; aucun paiement ni déploiement. Recentrage du périmètre, pas de modification du produit. |

| 2026-11-27 | A03 + périmètre | [Rapport A03](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/docs/refonte/A03_REFERENCE_VISUELLE_FONCTIONNELLE.md), commit 8a0f9cc2 : 24 PDF (48 pages), 24 empreintes vérifiées, planches examinées, contrats hors ligne réussis. Contrôle ciblé FR/EN/DE/ES ajouté en f74e56e1. Checklist B–G précisée pour actualiser exclusivement l'existant en première livraison. | A03 : résultat du dernier contrôle à vérifier ; pas de refonte ni nouveau produit imposé, pas de déploiement. |

Pour chaque validation : ajouter une ligne avec ID, commit de code, lien vers résultat/test, date, limite et prochaine action. Aucun secret ni donnée client dans ce fichier.


| 2026-11-27 | A03 reprise | [Contrôle ciblé](https://github.com/BACOUL/certif-scopev01/actions/runs/46030288957), job 140612056570 : FR trois étapes et 7 dépenses, total historique 1,9/1,92 tCO2e réussi ; EN atteint le contrôle réseau mais échoue sur deux tentatives API bloquées, DE/ES non atteints. Aucun appel commercial transmis. Commit 4a5e6132288a0420370dc003d8f737554f9c8d26 : journalisation des requêtes bloquées (méthode et chemin sans query), distinction stricte des GET/HEAD de spécimens et autres API ; toutes les requêtes API restent interdites. | A03 non cochée ; consulter relance et vérifier la nature des requêtes avant clôture. |

| 2026-11-27 | A04 incident prioritaire | Métadonnées GitHub : dépôt public ; .env.local présent sur main, blob 8e87072cb1d6e5366f3f57695475b2c8753a05c2 ; cinq commits historiques affectant ce chemin (17–24 janvier 2026). Inspection sans sortie de valeurs : KEY_SECRET non vide, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, RESEND_API_KEY de forme credential. Fichier non récupéré aux refs de production et de la PR (absence non confirmée indépendamment). Validité des clés et exposition d'autres secrets non établies ; aucune authentification avec les valeurs. | R06 bloquant : vérifier les services et préparer rotation coordonnée, examiner historique/branches et retirer le fichier suivi de main ; aucune révocation, réécriture historique, suppression, modification production sans accord. A04 non cochée. A05/A06 restent à faire après A03/A04. |
