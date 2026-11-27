# Certif-Scope — plan directeur de mise en production
Mis en place le 26 novembre 2026 après l'annonce par le propriétaire de la deuxième vente organique de l'attestation à 89 €.

## Source de vérité et point de reprise
- Dépôt BACOUL/certif-scopev01 ; PR #108 **brouillon** ; branche `refonte/conserver-site-existant-20261114`.
- État technique de départ observé : c041c22e8866a46f03fb6dfd5a5d36391cc5d674. Base historique de la PR : 71e6cd87a8c04041ff58be4db99a6fa49cb8c40a. Revérifier la production réelle avant toute modification ou livraison.
- Ce fichier pilote les travaux et remplace les anciennes orientations commerciales contradictoires (notamment réserver l'attestation historique aux anciens clients). Le document REPRISE_SITE_EXISTANT_2026-11-14.md reste une archive technique utile ; ne pas reprendre la PR #107 comme base.
- **Décision prioritaire du propriétaire : actualiser le site et l'attestation existante, pas reconstruire ni étendre sans nécessité.** La première livraison doit préserver design, navigation, URL, 24 langues, attestation à 89 €, packs, clients, moteur et parcours existants sauf correction justifiée. Actualiser textes, références, facteurs lorsque leur provenance est vérifiée, PDF historique et méthodologie selon les exigences applicables. Ne pas transformer le calcul par dépenses en calcul B3 par simple changement de libellé. Le prototype physique scopes 1/2 reste isolé, non commercialisé : une éventuelle offre distincte, extension scope 3, nouveau prix ou refonte substantielle relève d'une phase séparée, à valider expressément après l'actualisation prioritaire. Ne pas utiliser Bilan Carbone® ou revendiquer BEGES réglementaire/conformité B3 sans preuve. Cette décision prévaut sur les orientations précédentes.
- Aucun merge, déploiement production, paiement réel, migration de données ou changement de DNS sans autorisation explicite. Maintenir les garde-fous de la PR, aucune donnée client réelle en recette. Préserver le site qui vend.
- **Lot courant : B — analyse documentaire réglementaire autorisée, sans changement applicatif.** A04/A05/A06 restent ouverts et bloquants pour la publication, report de leurs contrôles externes accepté le 27 novembre 2026. Pour mémoire lot A : A01, A02 et A03 validés pour la référence historique. A04 : fichier d'environnement historique ; exemples Stripe/Resend confirmés, statut de la signature interne inconnu, isolation des variables à traiter. Contrôle expurgé ajouté. A05 : exercice de restauration fictive réussi ; export et restauration sur namespace isolé restent à vérifier. A06 : analyse statique historique complète dans le périmètre runtime défini ; Browserless sans référence détectée, coûts et attribution à confirmer.

## Protocole obligatoire à chaque reprise
1. Lire ce fichier, le journal et les décisions. Vérifier la branche, le SHA, l'état de la PR et les écarts de production. Ne pas ouvrir un nouveau chantier si le lot courant n'est pas clôturé, sauf incident de sécurité ou exception explicitement acceptée et documentée (analyse documentaire B autorisée malgré les contrôles externes A encore ouverts ; aucun assouplissement de la publication).
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
- [x] A03 Capturer référence fonctionnelle et visuelle de l'ancien site et PDF avec données fictives ; définir tests de non-régression et inventaire des URL.
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
- [ ] D01 Améliorer PDF historique à partir du gabarit commun existant (logo, hiérarchie, dix rubriques, QR, deux pages comme cible), sans casser format/droits/vérification ; sources, catégories, réserves, cohérence calcul/PDF, date, identité, version. Voir B03_METHODE_ET_CONSERVATION_PDF.md.
- [ ] D02 Adapter seulement les champs et textes du formulaire et du PDF historiques dont la modification est justifiée par B/C. Le formulaire physique et son spécimen restent isolés, hors première livraison.
- [ ] D03 Vérification documentaire et identifiants, intégrité, accès sécurisé, conservation et récupération ; ne pas confondre authenticité du fichier et véracité des déclarations.
- [ ] D04 Préserver le gabarit historique de deux pages et ses 24 langues ; actualiser les textes nécessaires, contrôler accents, valeurs, unités, sauts de page et pagination ; spécimens fictifs identifiés. Ne pas réduire la lisibilité ou retirer des réserves pour tenir sur deux pages ; proposer une annexe séparée si indispensable, à valider avant changement.
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
| R06 | Fichier d'environnement historique suivi sur main public ; valeurs Stripe/webhook/Resend reconnues comme exemples tronqués et non comme clés exploitables. Statut de la signature interne non établi ; vérification privée, isolation et remédiation conditionnelle requises. Contrôle automatisé limité sans détection de motifs ; ne prouve pas absence de secrets. Aucune valeur reproduite. | A |
| R07 | CI historique verte mais ne valide pas parcours paiement ni recette juridique/visuelle ; à rejouer sur candidat | G |
| R08 | Résolu le 27/11 : SHA actif identique à la base PR #108, aucune divergence à intégrer. Revérifier avant livraison. | A01 |
| R09 | A03 : 133 HTTP 200 et 132 captures inspectées par planches ; référence visuelle partielle (animations/illustrations à stabiliser). Recette PDF réussie : 24 PDF de deux pages, 576 combinaisons UI/PDF, contrôles de saisie numérique et contrats simulés. PDF examinés ; FR/EN/DE/ES réussis au test final, aucune requête commerciale transmise. Limites visuelles à revoir E/G. | A03 |

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


| 2026-11-27 | A03 reprise 2 | [Diagnostic](https://github.com/BACOUL/certif-scopev01/actions/runs/46035876535) : FR/EN passés ; DE deux GET /api/sample/ bloqués, slash final non prévu par le test. Correction e8f156cbf1c65efeaf54f75fbb86e9da379bb77a. [Contrôle suivant](https://github.com/BACOUL/certif-scopev01/actions/runs/46036451628) : FR/EN/DE réussis, ES mobile total 1,9 mais nom fictif tronqué d'une lettre ; cause non établie. Commit b3750a06e4c87b73dac7dd3fadba3debf0c20d8f : frappe temporisée et assertion de valeur avant transition, sans assouplissement fonctionnel. | A03 ouverte ; contrôler résultat et distinguer défaut produit/test. Tous les appels API restent bloqués. |

| 2026-11-27 | A04/A05/A06 préparation | [Dossier opérationnel](https://github.com/BACOUL/certif-scopev01/blob/refonte/conserver-site-existant-20261114/docs/refonte/A04_A05_SECURITE_RETOUR_ARRIERE.md), commit dab5f1c25c11a34f396c707d5ad15d180126f4af. Stripe de forme live confirmé sur main ; quatre versions historiques inspectées, une non récupérée ; pas de scan exhaustif. Vercel : production inchangée READY, 16 variables (tous environnements), 8 signalées readable-secret ; revue séparée zéro variable. Facturation Vercel non accessible. Plan de rotation avec préservation des droits, sauvegarde/rollback et pré-inventaire services. | A04 bloquante ; rotation et modifications live non exécutées. A05/A06 non validées ; sauvegarde/restauration et coûts réels à prouver. |


| 2026-11-27 | A03 clôture | [Recette finale](https://github.com/BACOUL/certif-scopev01/actions/runs/46036623127), job 140633539016, commit b3750a06e4c87b73dac7dd3fadba3debf0c20d8f : FR/EN/DE/ES PASS, nom exact, trois étapes, sept dépenses, total historique attendu ; seules requêtes GET de spécimen bloquées EN/DE. [Rapport A03](A03_REFERENCE_VISUELLE_FONCTIONNELLE.md), commit 53d28f98ab97564385a8c73c8aa5d6c53f8f37a1. | A03 validée comme référence, pas comme recette de livraison. Cause du caractère manquant au précédent test inconnue ; animations et recette candidat E/G. |

| 2026-11-27 | A04 contrôle préventif | Commit 59a2c28db7b98b450655c6c26f2da1e243cce00c : workflow de contrôle heuristique sur les blobs texte accessibles et les fichiers d'environnement suivis, auto-tests synthétiques, sortie limitée aux compteurs, aucun artefact ni secret transmis. | A04 reste bloquée ; vérifier exécution, règles limitées et éléments non inspectés ; aucune rotation ou modification live. |


| 2026-11-27 | A04 complément et rectification | [Contrôle](https://github.com/BACOUL/certif-scopev01/actions/runs/46036867940), job 140634371760 : 3 081 blobs texte, 77 binaires et 3 > 2 Mo écartés, 0 erreur, 0 motif détecté, 0 fichier d'environnement interdit dans le candidat. Réinspection : les valeurs Stripe/webhook/Resend sont des exemples courts répétitifs ; les alertes précédentes fondées sur préfixes ne prouvent pas de fuite de clés actives. Signature interne non confirmée. Commit b9689b22 renforce la détection des fichiers d'environnement historiques ; [dossier rectifié](A04_A05_SECURITE_RETOUR_ARRIERE.md), commit 1c04449c. | A04 ouverte ; vérifier contrôle renforcé, signature et isolation en privé. A06 : justificatifs historiques retrouvés, attribution et coûts actuels à confirmer ; aucun détail privé dans le dépôt. Aucun changement production. |


| 2026-11-27 | A04 contrôle renforcé | [Exécution](https://github.com/BACOUL/certif-scopev01/actions/runs/46037005024), job 140634831091 : 3 083 blobs texte, 77 binaires/3 volumineux exclus, aucune erreur de lecture ni motif détecté, aucun fichier d'environnement interdit dans candidat, un chemin d'environnement interdit dans historique. Échec attendu de la politique ; valeurs et chemins non émis par le contrôle. | A04 non validée ; pas de fuite active confirmée, mais historique et signature à traiter. Aucun changement de production. |


| 2026-11-27 | A05 exercice | [Test initial](https://github.com/BACOUL/certif-scopev01/actions/runs/46037909296), commit 21088534c85e5642bdbaa5d33bfd0f08e77cd316 : cinq enregistrements fictifs, instantané chiffré authentifié, restauration cible vide, comparaison via route historique check-key et mock KV ; premier essai arrêté avant assertions pour format CommonJS/await ambigu. Correction 6d1a620dcc22de5e2e0d6e9f99c2bf6c8da0a2a7 ; [nouvel essai](https://github.com/BACOUL/certif-scopev01/actions/runs/46038010929) en cours à ce contrôle. CI habituelle sur 21088534 réussie. | A05 non cochée ; lire résultat et distinguer exercice local de restauration Cloudflare réelle. Aucun accès à données clients. |

| 2026-11-27 | A04/A06 complément | [Dossier opérationnel](A04_A05_SECURITE_RETOUR_ARRIERE.md), commit bb8cd768c826e2c433e558631b2b0db238fb3119. Verrou proxy et déploiement Git désactivé confirmés ; rulesets vides, protection main non lisible (403). PDFShift utilisé pour émission FR/core et UE et spécimen historique ; Stripe, Resend, KV confirmés par code. Usage Browserless non établi. Facturation Vercel : 404 costs_not_found. | A04/A06 ouvertes ; vérification privée du secret générique, règles et coût effectif nécessaires. Aucune suppression, rotation, migration, facturation ou modification production. |


| 2026-11-27 | A05 résultat | [Exercice corrigé réussi](https://github.com/BACOUL/certif-scopev01/actions/runs/46038010929), job 140638264585, commit 6d1a620dcc22de5e2e0d6e9f99c2bf6c8da0a2a7. Logs vérifiés : snapshot chiffré authentifié, restauration exacte, refus corruption/cible non vide, mêmes réponses historiques crédits/expiration/legacy/clé absente, marqueur de commande conservé. | Exercice hors ligne validé. A05 reste ouverte pour export/restauration dans namespace isolé et vérification opérationnelle ; aucune donnée réelle. |


| 2026-11-27 | A04 garde continue | [Contrôle candidat réussi](https://github.com/BACOUL/certif-scopev01/actions/runs/46040783564), job 140647677424, workflow introduit en 5cf11f0812e3bae2a95941539b4bf8abcf7ef482. 414 blobs texte, 1 volumineux et 39 binaires exclus, 0 fichier d'environnement interdit, 0 motif de clé détecté. Exécution sur chaque push/PR du chantier ; obligation via protection GitHub non vérifiable. | Candidat conforme à ces règles limitées ; historique et signature interne restent à traiter, A04 non cochée. |

| 2026-11-27 | A05 procédure externe | [Dossier opérationnel](A04_A05_SECURITE_RETOUR_ARRIERE.md), commit 6c9ed6e77e0321a94c9ab4869ecc64e50fa02842 : documentation Cloudflare officielle vérifiée, liste paginée, métadonnées/expiration absolue, cohérence des écritures, chiffrage, rapprochement, cible isolée, coûts. Aucun connecteur direct de compte identifié lors de la recherche. | Exercice hors ligne déjà réussi ; accès autorisé, namespace et test externe manquants. Pas d'export réel, pas de création de ressource. |

| 2026-11-27 | A06 résultat statique | [Inventaire historique](https://github.com/BACOUL/certif-scopev01/actions/runs/46040772524), job 140647638458, commit 31dd24410d130bbaa82bac815afa299933adb06e : 332 fichiers source, Stripe 8, KV 6, Resend 11, PDFShift 3, Browserless 0, Chromium/Puppeteer 0, Vercel Analytics 1. | Browserless candidat à rationalisation après vérification compte, usages autres projets et facturation. Les coûts réels restent non prouvés ; aucune résiliation. A06 non cochée. |


| 2026-11-27 | Décision de séquencement et B01 | Accord utilisateur à l'analyse réglementaire B01 sans clôture fictive d'A04/A05/A06, qui restent bloquants avant publication. [Analyse B01](B01_REGLEMENTATION_EUROPEENNE.md), commit 37b998d42c1f88220bef78cf091eb1a9f3a4a39c : textes 2026/470 et 2026/1560, distinction annexe I et II, B3 volontaire <=10 salariés, plafond B3 limité au total énergie et émissions pour >10 salariés protégés, scope 3 selon pertinence, absence d'intensité obligatoire dans B3 final. | B01 en cours : transpositions, dispositions transitoires et éventuels correctifs à compléter ; aucun changement de code, paiement ou production. Prochaine étape B01 complément puis matrice B02. |


| 2026-11-27 | B01 complément | [Dossier B01](B01_REGLEMENTATION_EUROPEENNE.md), commit 8f8aac80b1cd5dd98de42ab76a56cdca2f25e197. Exemption transitoire facultative des États pour certains exercices 2025/2026, délai transposition 19/03/2027, distinction ESRS 2026/1563 et norme volontaire 2026/1560. Recherche de correctifs non concluante ; accès direct EUR-Lex et notifications nationales bloqué. | B01 non cochée ; recontrôler versions et transpositions avant B05/publication. Aucune conclusion juridique nationale. |

| 2026-11-27 | B02 préparation | [Matrice B3](B02_MATRICE_B3.md), commit f5724f160102be7d47d8bc702165c107c86d03c1 : 9 axes comparés au code spend-based et au prototype physique isolé. Lacunes : énergie, séparation scopes, facteurs historiques, catégories non supportées, pays/année/langues, effectif, scope 3, revendications commerciales. Tests d'acceptation proposés. | B02 non cochée : confronter aux PDF/formulaires et sources complètes ; B03/B04 doivent arbitrer périmètre et méthode, pas de nouveau produit automatique. A04/A05/A06 et B01 restent ouverts. Aucun changement applicatif ni production. |


| 2026-11-27 | Décision propriétaire + B03 | Conserver la base du document existant. [Cadrage B03](B03_METHODE_ET_CONSERVATION_PDF.md), commit a73ae8a72d303e5dbd863d41d3675d5013fee292 : matrice des dix rubriques, base commune 24 langues, séparation dépenses/physique/scope 3, sources primaires GHG Protocol/ADEME/UE, schéma signé historique et besoin de versionner toute nouvelle couverture vérifiable. | B03 ouvert : facteurs et droits à vérifier, allégations et revue qualifiée, périmètre à arbitrer en B04. Aucun changement de gabarit, code, PDF émis, paiement ou production. |


| 2026-11-27 | B03 registre et allégations | [Registre B03](B03_REGISTRE_FACTEURS_ET_ALLEGATIONS.md), commit 8fdde0c3bc0f5ca066b7ac1ff6c98eb525e136c8 : sept valeurs historiques et équivalents kgCO2e/kEUR, provenance externe non établie, familles candidates non approuvées ; contrôle documentation officielle ADEME (nouvelle méthode SDES/INSEE, HT, millésime, incertitude), métadonnées/licence Base Carbone, GHG Protocol et directive 2024/825 (B2C). Revue des sections méthodologiques historiques et des affirmations à étayer. | B03 ouvert : récupérer lignes officielles et justifier mapping, unités/géographie/année/droits, revue juridique B05. Aucun facteur remplacé, aucune modification du PDF historique ou de la production. |


| 2026-11-27 | B03 extraction officielle réussie | [Workflow ADEME](https://github.com/BACOUL/certif-scopev01/actions/runs/46065781033), job 140730615087, commit 405ea362c881dc280c749c1404d640b76e5b6e45. 280 éléments valides SDES/INSEE, 56 par millésime de prix 2019–2023, France continentale, kgCO2e/kEUR HT ; archive relue [JSON](evidence/B03_ADEME_SDES_INSEE_MONETARY_20261127.json) commit 13cb3e0810311fd9731cd32b388df6f5925d99f6. [Correspondances candidates](B03_REGISTRE_FACTEURS_ET_ALLEGATIONS.md), commit 5c76b21e18ca7266e9299a6e1eea621cf67a2067. | Provenance nouvelle documentée, pas de remplacement automatique des 7 coefficients. Prix 2023 ≠ validité 2026 ; zone et frontière/année de prix, mapping, HT et périmètre à valider. B03 reste ouvert. Préserver les sept rubriques et le PDF historique ; proposition de sélection facultative de sous-catégories à arbitrer en B04. Aucun changement de code commercial ni de production. |


| 2026-11-27 | B03 méthode hybride et millésimes | [Spécification](B03_METHODE_HYBRIDE_ET_MILLESIMES.md), commit 20f1925fee97741876fd1823ec0e3195f4518720. Documentation ADEME/GHG Protocol, indices INSEE BtoB hors taxes, pistes FIGARO. Formule de conversion des prix, base HT, frontière des facteurs et prévention doublons ; trois étapes et sept rubriques conservées, données physiques conditionnelles seulement après arbitrage B04. Vérification arithmétique indépendante sur archive : IT 75 kg et matériel 216 kg pour 1000 EUR HT prix 2023 ; indice fictif 100/110 et 1100 EUR donnent 75 kg ; zéro explicite et trois rejets d'entrées invalides. | Pas de série d'indices ou facteur 2026/2027 validé ; B03 ouverte, géographie et revue qualifiée requises. Exemples hors application. Constat C06/F : checkout reçoit total client sans recalcul des dépenses ; renforcer calcul serveur et toutes voies de délivrance avant publication, sans modification à cette étape. A04–A06, B01/B02/B05 restent ouverts. |
