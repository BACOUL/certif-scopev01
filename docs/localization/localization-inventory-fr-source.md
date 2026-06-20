# Inventaire de localisation — Source française Certif-Scope

## 1. Objectif du document

Ce document établit l'inventaire de référence de la version française de Certif-Scope avant extension internationale.

Il sert à préparer de futures localisations sans modifier la version FR validée, sans toucher à la logique produit et sans importer de contenu partiel dans d'autres langues.

Source inspectée :

| Élément | Valeur |
| --- | --- |
| Repo | `BACOUL/certif-scopev01` |
| Branche source | `fr-clean` |
| SHA source confirmé | `d2f7f361a66c4ee3614d50e36a231868e2cb52b8` |
| Branche de base internationale | `certif-scope-international` |
| Branche de travail | `p001-localization-inventory-fr-source` |
| Fichier créé | `docs/localization/localization-inventory-fr-source.md` |

L'objectif n'est pas de traduire maintenant. L'objectif est d'identifier précisément ce qui devra être localisé plus tard, ce qui doit rester stable, et les risques à contrôler avant chaque nouvelle langue.

## 2. Périmètre inspecté

L'inspection couvre les fichiers visibles ou indirectement visibles pour l'expérience française actuelle :

| Zone | Chemins inspectés | Rôle |
| --- | --- | --- |
| Pages FR | `src/app/fr/**` | Pages publiques, SEO, génération, vérification, légal, produit |
| Composants FR | `src/components/fr/**` | Header, footer, homepage, pricing, sections commerciales et pédagogiques |
| Page success | `src/app/success/page.tsx`, `src/app/success/SuccessClient.tsx` | Retour après paiement, téléchargement PDF, pack de clés |
| Menu global historique | `src/components/Header/menuData.tsx` | Navigation non-FR encore présente dans le code |
| Attestation PDF | `src/app/api/attestation/issue/route.ts`, `src/app/api/sample/route.ts`, `src/lib/attestation-i18n/**` | Textes visibles dans les PDF et PDF exemple |
| Vérification | `src/app/fr/verify/**`, `src/lib/sign.ts` | Pages de contrôle documentaire et vérification technique |
| Paiement et clés | `src/app/api/checkout/**`, `src/app/api/checkout-pack/**`, `src/app/api/session-type/**`, `src/app/api/stripe/session-type/**`, `src/app/api/check-key/**`, `src/app/api/redeem-key/**`, `src/app/api/key/consume/**` | Flux techniques avec messages visibles ou metadata |
| SEO global | `src/app/layout.tsx`, `src/app/fr/layout.tsx`, `public/sitemap.xml`, `public/robots.txt` | Metadata, JSON-LD, sitemap, robots |
| Email | `src/lib/mailer.ts` | Email transactionnel de pack de clés |

Ce document exclut volontairement toute modification de code, de prix, de calcul, de PDF, de signature, de Stripe, d'API, de facteurs d'émission ou de pages `/fr/`.

## 3. Pages FR publiques à localiser

Les routes ci-dessous constituent le corpus public français. Les futures langues devront être créées à partir de cette structure, mais sans copier mécaniquement les contraintes SEO françaises lorsque la stratégie de marché diffère.

| Route | Fichier | Type de contenu | Points de localisation |
| --- | --- | --- | --- |
| `/fr/` | `src/app/fr/page.tsx` | Homepage FR | Metadata, hero, CTAs, sections importées, JSON-LD Organization/WebSite |
| `/fr/generate/` | `src/app/fr/generate/page.tsx` | Formulaire d'attestation | Metadata, titre, intro, intégration `AssessmentForm` |
| `/fr/pricing/` | `src/app/fr/pricing/page.tsx` | Prix | Metadata, prix, FAQ prix, JSON-LD |
| `/fr/product/` | `src/app/fr/product/page.tsx` | Page produit | Metadata, sections produit, JSON-LD Organization |
| `/fr/product/compliance/` | `src/app/fr/product/compliance/page.tsx` | Conformité et limites | Metadata, table des matières, sections 1 à 10 |
| `/fr/product/methodology/` | `src/app/fr/product/methodology/page.tsx` | Méthodologie | Metadata, table des matières, sections 1 à 12 |
| `/fr/verify/` | `src/app/fr/verify/page.tsx` | Vérification documentaire QR | Metadata, explication QR, limites, JSON-LD |
| `/fr/verify/demo/` | `src/app/fr/verify/demo/page.tsx` | Démo de vérification | Metadata, exemple de contrôle, FAQPage |
| `/fr/verify/technical/` | `src/app/fr/verify/technical/page.tsx` | Vérification technique avancée | Metadata, sections techniques 1 à 8 |
| `/fr/bilan-carbone-pme/` | `src/app/fr/bilan-carbone-pme/page.tsx` | Pilier SEO PME | Metadata, FAQ, JSON-LD, sections longues |
| `/fr/bilan-carbone-pme/cout/` | `src/app/fr/bilan-carbone-pme/cout/page.tsx` | SEO coût | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-pme/exemple/` | `src/app/fr/bilan-carbone-pme/exemple/page.tsx` | SEO exemple | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-pme/modele-pdf/` | `src/app/fr/bilan-carbone-pme/modele-pdf/page.tsx` | SEO modèle PDF | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-pme/obligation/` | `src/app/fr/bilan-carbone-pme/obligation/page.tsx` | SEO obligation | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-appel-offres/` | `src/app/fr/bilan-carbone-appel-offres/page.tsx` | SEO appel d'offres | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-fournisseur/` | `src/app/fr/bilan-carbone-fournisseur/page.tsx` | SEO fournisseur | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-entreprise/` | `src/app/fr/bilan-carbone-entreprise/page.tsx` | Guide entreprise | Metadata, FAQ, liens internes |
| `/fr/attestation-carbone/` | `src/app/fr/attestation-carbone/page.tsx` | SEO attestation carbone | Metadata, FAQ, JSON-LD |
| `/fr/attestation-co2-pme/` | `src/app/fr/attestation-co2-pme/page.tsx` | SEO attestation CO2 PME | Metadata, FAQ, JSON-LD |
| `/fr/scope-1-2-3-explication/` | `src/app/fr/scope-1-2-3-explication/page.tsx` | Guide scopes | Metadata, FAQ, JSON-LD |
| `/fr/bilan-carbone-banque-pme/` | `src/app/fr/bilan-carbone-banque-pme/page.tsx` | Use case banque | `BusinessUseCasePage`, metadata, données de page |
| `/fr/bilan-carbone-assurance-pme/` | `src/app/fr/bilan-carbone-assurance-pme/page.tsx` | Use case assurance | `BusinessUseCasePage`, metadata, données de page |
| `/fr/document-carbone-fournisseur/` | `src/app/fr/document-carbone-fournisseur/page.tsx` | Use case document fournisseur | `BusinessUseCasePage`, metadata, données de page |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `src/app/fr/difference-bilan-carbone-attestation-co2e/page.tsx` | Use case différenciation | `BusinessUseCasePage`, metadata, données de page |
| `/fr/why-companies-ask/` | `src/app/fr/why-companies-ask/page.tsx` | Hub pédagogique | Metadata, JSON-LD, liens internes |
| `/fr/why-companies-ask/guide/` | `src/app/fr/why-companies-ask/guide/page.tsx` | Guide pédagogique | Metadata, JSON-LD |
| `/fr/why-companies-ask/attestation-carbone-fournisseur/` | `src/app/fr/why-companies-ask/attestation-carbone-fournisseur/page.tsx` | Guide fournisseur | Metadata, FAQ, noindex observé |
| `/fr/why-companies-ask/attestation-carbone-appel-offres/` | `src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx` | Guide appel d'offres | Metadata, FAQ, table des matières |
| `/fr/why-companies-ask/attestation-carbone-pme/` | `src/app/fr/why-companies-ask/attestation-carbone-pme/page.tsx` | Guide PME | Metadata, JSON-LD |
| `/fr/why-companies-ask/exigences-co2-banques-assurances/` | `src/app/fr/why-companies-ask/exigences-co2-banques-assurances/page.tsx` | Guide banques/assurances | Metadata, FAQ, JSON-LD |
| `/fr/why-companies-ask/preuve-carbone-entreprise/` | `src/app/fr/why-companies-ask/preuve-carbone-entreprise/page.tsx` | Guide preuve carbone | Metadata, JSON-LD |
| `/fr/partners/` | `src/app/fr/partners/page.tsx` | Partenaires | Metadata, sections 1 à 6 |
| `/fr/contact/` | `src/app/fr/contact/page.tsx` | Contact | Metadata, texte institutionnel |
| `/fr/privacy/` | `src/app/fr/privacy/page.tsx` | Confidentialité | Metadata, JSON-LD BreadcrumbList, processeurs |
| `/fr/terms/` | `src/app/fr/terms/page.tsx` | Conditions | Metadata, JSON-LD BreadcrumbList |
| `/fr/cookies/` | `src/app/fr/cookies/page.tsx` | Cookies | Metadata, JSON-LD BreadcrumbList, absence tracking |
| `/fr/legal/` | `src/app/fr/legal/page.tsx` | Mentions légales | Metadata, JSON-LD WebSite/BreadcrumbList |
| `/fr/data-processing/` | `src/app/fr/data-processing/page.tsx` | Traitement des données | Metadata, JSON-LD BreadcrumbList, processeurs |
| `/fr/cancel/` | `src/app/fr/cancel/page.tsx` | Paiement annulé | Metadata, CTAs retour |

Notes importantes :

- Les pages business `banque`, `assurance`, `document fournisseur` et `différence bilan carbone / attestation CO2e` utilisent `src/components/fr/BusinessUseCasePage.tsx`.
- Certaines canonicals observées ne terminent pas toutes par un slash dans les fichiers `partners`, `why-companies-ask/guide` et `verify/technical`. Une future localisation doit définir une règle canonical cohérente avant duplication.
- Les pages `why-companies-ask` incluent des stratégies d'indexation différentes selon les contenus ; ne pas appliquer automatiquement `index: true` partout.

## 4. Composants FR partagés avec texte visible

| Fichier | Usage | Textes visibles à localiser |
| --- | --- | --- |
| `src/components/fr/Header.tsx` | Navigation FR desktop/mobile | Menus, sous-menus, CTA génération, liens produit/méthodologie/conformité/confidentialité |
| `src/components/fr/Footer.tsx` | Footer FR | Colonnes produit, ressources, entreprise, légal, JSON-LD Organization |
| `src/components/fr/Hero.tsx` | Hero homepage | Proposition de valeur, badges confiance, CTA `Générer mon attestation — 89 €`, CTA `/api/sample` |
| `src/components/fr/UseCaseDecisionTable.tsx` | Section "Est-ce adapté à votre demande ?" | Cas adaptés/non adaptés, CTA principal, CTA exemple |
| `src/components/fr/ProblemSolution.tsx` | Problème / solution | Arguments sur demande réelle, solutions classiques, réponse rapide |
| `src/components/fr/Differentiation.tsx` | Différenciation | Niveau de réponse, format PDF, vérification indépendante, absence complexité |
| `src/components/fr/Features.tsx` | Aperçu document | Titre "Aperçu du document", image `/preview.webp`, pills sous image, cartes de droite, CTA méthodologie |
| `src/components/fr/RecipientView.tsx` | Ce que le destinataire verra | Liste des éléments visibles dans le PDF, CTA exemple `/api/sample` |
| `src/components/fr/OfficialReferences.tsx` | Sources officielles | EFRAG, VSME, GHG Protocol, CSRD, ESRS, Code de l'environnement, CTA |
| `src/components/fr/HowItWorks.tsx` | Processus | Étapes formulaire, moteur, PDF, ID unique, vérification |
| `src/components/fr/Testimonials.tsx` | Cas d'usage | Fournisseur, appel d'offres, lecture/vérification |
| `src/components/fr/Pricing.tsx` | Pricing homepage | Prix `89€`, inclusions, liens prix/use cases |
| `src/components/fr/FAQ.tsx` | FAQ homepage | Questions/réponses sur attestation indicative, spend-based, limites |
| `src/components/fr/Trust.tsx` | Confiance | Preuves, confidentialité, limites, non-réglementaire |
| `src/components/fr/BusinessUseCasePage.tsx` | Template pages business | Hero, comparaison, checklist, FAQ, CTA, JSON-LD WebSite/BreadcrumbList/Organization/FAQPage |
| `src/app/fr/product/sections/Section1.tsx` à `Section7.tsx` | Page produit | Blocs produit détaillés |
| `src/app/fr/product/compliance/sections/Section1.tsx` à `Section10.tsx` | Page conformité | Limites légales, non-équivalence, responsabilités |
| `src/app/fr/product/methodology/sections/Section1.tsx` à `Section12.tsx` | Page méthodologie | Méthode spend-based, étapes, limites, références |
| `src/app/fr/partners/sections/Section1.tsx` à `Section6.tsx` | Page partenaires | Propositions partenaires, intégration, conditions |
| `src/app/fr/verify/technical/Sections/Section1.tsx` à `Section8.tsx` | Vérification technique | Signature PDF, payload signé, vérification lecteur PDF, procédure avancée |

À surveiller pour chaque langue :

- Les composants FR sont fortement éditoriaux ; une traduction littérale risque de dégrader le positionnement juridique.
- Les CTAs doivent rester cohérents avec le prix et le parcours local réellement disponible.
- Les références réglementaires françaises ou européennes doivent être conservées seulement si elles sont pertinentes pour la langue et le marché cible.

## 5. Parcours génération, paiement et succès

Le parcours génération est concentré dans `src/app/fr/generate/AssessmentForm.tsx`, avec plusieurs routes API en support.

| Zone | Fichiers | Textes ou états visibles |
| --- | --- | --- |
| Page génération | `src/app/fr/generate/page.tsx` | Titre "Attestation CO2e indicative - Génération PME", introduction, metadata |
| Formulaire | `src/app/fr/generate/AssessmentForm.tsx` | Étapes, labels, secteurs, pays, langue d'attestation, dépenses, erreurs, résumé, case obligatoire |
| Checkout attestation | `src/app/api/checkout/route.ts` | Metadata Stripe, produit attestation, URLs success/cancel |
| Checkout pack | `src/app/api/checkout-pack/route.ts` | Labels packs "Pack of 5/10/50 attestations", metadata Stripe |
| Type de session | `src/app/api/session-type/route.ts`, `src/app/api/stripe/session-type/route.ts` | Distinction pack/attestation, support clés `key_` |
| Clés d'accès | `src/app/api/check-key/route.ts`, `src/app/api/redeem-key/route.ts`, `src/app/api/key/consume/route.ts` | États clé valide/invalide, crédits restants, consommation |
| Success | `src/app/success/page.tsx`, `src/app/success/SuccessClient.tsx` | Téléchargement PDF, pack envoyé par email, erreurs session, avertissements |
| Cancel | `src/app/fr/cancel/page.tsx` | Paiement annulé, retour génération/pricing |
| Email pack | `src/lib/mailer.ts` | Expéditeur, réponse contact, contenu email transactionnel |

Textes de formulaire source à conserver comme base :

| Élément | Source observée |
| --- | --- |
| Secteurs | Services aux entreprises ; Numérique, informatique & technologies ; Industrie, fabrication & production ; BTP, construction & immobilier ; Commerce, distribution & vente ; Transport, logistique & livraison ; Hôtellerie, restauration, tourisme & événementiel ; Autres activités |
| Pays | France ; Allemagne ; Autre UE |
| Langues d'attestation | Français ; Anglais ; Allemand |
| CTA paiement | `Générer mon attestation carbone — 89 €` |
| CTA crédit | `Générer mon attestation carbone (1 crédit)` |
| Résumé | Résultat estimé, document, année, livraison |
| Confidentialité | Certif-Scope ne conserve pas les PDF émis ; pas de copie récupérable ; pas de stockage des données financières détaillées |
| Case obligatoire | Attestation indicative, non auditée, non réglementaire, ne remplace pas un bilan carbone complet ni une obligation CSRD/ESRS |

Pour une future langue, ne pas déplacer les calculs, les facteurs, les montants ou la logique Stripe. Seuls les libellés et aides visibles doivent être externalisés.

## 6. Textes PDF, attestation et PDF exemple

Les textes visibles dans les PDF ne se limitent pas aux pages React. Ils sont générés côté API.

| Fichier | Rôle | Éléments visibles |
| --- | --- | --- |
| `src/app/api/attestation/issue/route.ts` | Génération PDF finale | HTML/CSS PDF, titres, sections, blocs résultat, QR, signature, références |
| `src/app/api/sample/route.ts` | PDF exemple | Document de démonstration, mention sample, textes PDF |
| `src/lib/attestation-i18n/fr.ts` | Dictionnaire PDF français | Libellés structurés de l'attestation française |
| `src/lib/attestation-i18n/en.ts` | Dictionnaire PDF anglais | Version PDF anglaise existante |
| `src/lib/attestation-i18n/de.ts` | Dictionnaire PDF allemand | Version PDF allemande existante |
| `src/lib/attestation-i18n/index.ts` | Registre locales PDF | Locales `en`, `fr`, `de`, fallback `en` |
| `src/lib/sign.ts` | Payload canonique signé | Champs immuables utilisés pour signature |

Textes et blocs PDF à inventorier avant toute nouvelle langue :

- Titre principal de l'attestation.
- Eyebrow documentaire : document CO2e indicatif, standardisé, vérifiable.
- Sous-titre : non réglementaire, méthodologie, attestation indicative.
- Résultat agrégé en tCO2e.
- Référence d'attestation et identifiant unique.
- Date d'émission, année de référence, période de validité.
- Émetteur, entité déclarante, pays, site émetteur.
- Nature de l'attestation.
- Périmètre, description, note et limites.
- Usage prévu : fournisseur, client, appel d'offres, banque, assurance, interne.
- Lecture par un tiers et confidentialité.
- Bloc vérification documentaire.
- Méthodologie spend-based et formule.
- Références de contexte méthodologique.
- Éléments techniques : hash, algorithme, signature Base64, clé publique.
- Conclusion finale et footer.
- Texte QR et URL de vérification.

Points sensibles :

- Le fallback PDF est actuellement `en` dans `DEFAULT_ATTESTATION_LOCALE`. Ce choix doit rester explicite si de nouvelles langues sont ajoutées.
- Les dictionnaires PDF existants `en` et `de` ne signifient pas que le site anglais ou allemand existe déjà.
- Le fichier `src/lib/sign.ts` définit un payload canonique ; ne pas traduire, renommer ou réordonner ces clés.
- La génération utilise des données agrégées et un résultat CO2e ; elle ne doit pas être transformée en audit, certification ou bilan réglementaire par la traduction.

## 7. Vérification QR et vérification technique

La vérification comporte deux niveaux de discours qui doivent rester distincts dans chaque langue.

| Niveau | Fichiers | Message à préserver |
| --- | --- | --- |
| Contrôle documentaire rapide | `src/app/fr/verify/page.tsx`, `src/app/fr/verify/demo/page.tsx` | Le QR code permet un contrôle documentaire rapide du payload de vérification et des éléments lisibles |
| Vérification technique avancée | `src/app/fr/verify/technical/page.tsx`, `src/app/fr/verify/technical/Sections/**`, `src/lib/sign.ts` | La vérification technique porte sur le PDF signé, le payload, le hash, la signature et la clé publique |
| Génération du lien QR | `src/app/api/attestation/issue/route.ts`, `src/app/api/sample/route.ts` | URL officielle de vérification, token/payload, QR code |

Idée juridique source à conserver :

> Le QR code permet un contrôle documentaire rapide. Il ne remplace pas, à lui seul, la vérification technique avancée du PDF signé lorsque celle-ci est nécessaire.

États visibles à localiser sur les pages de vérification :

- payload détecté ;
- données lisibles ;
- cohérence documentaire ;
- limites de la vérification QR ;
- renvoi vers la vérification technique avancée ;
- distinction entre attestation indicative, non audit, non réglementaire, non CSRD/ESRS et absence d'inventaire GES complet.

## 8. SEO, metadata, JSON-LD, sitemap et robots

Les textes SEO sont dispersés dans les pages et doivent être inventoriés séparément du contenu visible.

| Élément | Fichiers | À localiser ou adapter |
| --- | --- | --- |
| Metadata globale | `src/app/layout.tsx` | Titre, description, icons, Organization, WebSite |
| Metadata FR | `src/app/fr/**/page.tsx`, `src/app/fr/**/layout.tsx` | `title`, `description`, Open Graph, Twitter, robots |
| Canonicals | `alternates.canonical` dans les pages FR | Slugs localisés, slash final, cohérence domaine |
| Hreflang | `alternates.languages` | À créer uniquement quand une vraie page locale existe |
| JSON-LD | Pages FR, `BusinessUseCasePage`, `Footer` | Organization, WebSite, BreadcrumbList, FAQPage, Service/Offer selon page |
| Sitemap | `public/sitemap.xml` | Ajouter seulement les URLs réellement publiées |
| Robots | `public/robots.txt` | Sitemap et règles d'indexation |

Risques SEO spécifiques :

- Ne pas générer de hreflang vers une langue non publiée.
- Ne pas dupliquer les URLs FR en gardant le contenu français.
- Ne pas conserver des claims français trop spécifiques sur des marchés où la demande, le vocabulaire ou la réglementation diffèrent.
- Ne pas changer la stratégie `robots` des pages existantes sans décision SEO explicite.

## 9. Pages légales et conformité éditoriale

Les pages légales contiennent une partie importante du positionnement de confiance et de conformité. Elles ne doivent pas être traduites comme du marketing.

| Route | Fichier | Contenu critique |
| --- | --- | --- |
| `/fr/privacy/` | `src/app/fr/privacy/page.tsx` | Données traitées, processeurs, absence de stockage des dépenses détaillées, Stripe, Resend, Cloudflare KV, PDFShift |
| `/fr/cookies/` | `src/app/fr/cookies/page.tsx` | Pas de tracking marketing, pas d'analytics comportementales, cookies strictement nécessaires |
| `/fr/data-processing/` | `src/app/fr/data-processing/page.tsx` | Traitements nécessaires, sous-traitants techniques, PDF, paiement, clés |
| `/fr/terms/` | `src/app/fr/terms/page.tsx` | Conditions d'utilisation, limites, prix, remboursement, responsabilités |
| `/fr/legal/` | `src/app/fr/legal/page.tsx` | Mentions légales, éditeur, contact |
| `/fr/contact/` | `src/app/fr/contact/page.tsx` | Contact institutionnel |
| `/fr/product/compliance/` | `src/app/fr/product/compliance/**` | Non-équivalence réglementaire, non audit, non certification, usage interdit |
| `/fr/product/methodology/` | `src/app/fr/product/methodology/**` | Explication méthode, limites, absence de collecte détaillée |

Formulations sensibles à préserver dans toutes les langues :

- Attestation indicative.
- Non auditée.
- Non réglementaire.
- Ne remplace pas un bilan carbone complet.
- Ne constitue pas une certification.
- Ne constitue pas une conformité CSRD/ESRS.
- N'inclut pas un inventaire GES complet.
- Les données financières détaillées ne sont pas stockées par Certif-Scope.
- Les données de paiement sont traitées par Stripe et ne sont pas stockées par Certif-Scope.
- Les processeurs techniques peuvent recevoir uniquement les données strictement nécessaires au service.

## 10. Flux techniques avec textes visibles

Même si les routes API ne sont pas des pages traduites, elles transportent des libellés ou messages qui peuvent être visibles dans Stripe, emails, erreurs, PDF ou redirections.

| Fichier | Visibilité potentielle | Attention localisation |
| --- | --- | --- |
| `src/app/api/checkout/route.ts` | Checkout Stripe attestation | Libellé produit, metadata, URLs |
| `src/app/api/checkout-pack/route.ts` | Checkout Stripe packs | Labels pack en anglais actuellement : `Pack of 5/10/50 attestations` |
| `src/app/api/session-type/route.ts` | Success | Type `pack` ou `attestation` |
| `src/app/api/stripe/session-type/route.ts` | Success | Type session Stripe ou clé |
| `src/app/api/attestation/issue/route.ts` | PDF | Texte PDF, erreurs metadata, nom de fichier |
| `src/app/api/sample/route.ts` | PDF exemple | Texte visible du PDF exemple |
| `src/app/api/check-key/route.ts` | Formulaire | Statut clé, crédits restants |
| `src/app/api/redeem-key/route.ts` | Formulaire | Attestation via clé, metadata, URL issue |
| `src/app/api/key/consume/route.ts` | Clés | Consommation crédit |
| `src/app/api/keys/route.ts` | Packs | Génération de clés |
| `src/app/api/admin/create-key/route.ts` | Admin | Clé admin, note, crédits |
| `src/lib/mailer.ts` | Email pack | Objet/contenu email transactionnel à inventorier avant internationalisation |

Règle de prudence :

- Localiser les libellés visibles uniquement après extraction contrôlée.
- Ne pas déplacer l'initialisation des clients API, Stripe, Resend, Cloudflare KV ou PDFShift dans une couche de traduction.
- Ne pas toucher aux montants, produits, packs, modes de paiement ou conditions de génération.

## 11. Fichiers et éléments à ne pas traduire directement

Ces éléments peuvent contenir du texte ou des identifiants, mais ne doivent pas être traduits ou modifiés sans décision technique séparée.

| Élément | Chemins | Raison |
| --- | --- | --- |
| Logique de calcul | `src/app/fr/generate/AssessmentForm.tsx` | Les labels se localisent, mais facteurs et calculs doivent rester stables |
| Facteurs d'émission | Constantes kgCO2e/€ dans le formulaire | Valeurs métier, pas du contenu |
| Prix et montants Stripe | `src/app/api/checkout/route.ts`, `src/app/api/checkout-pack/route.ts`, composants prix | Ne pas modifier les montants |
| Signature | `src/lib/sign.ts` | Payload canonique immuable |
| Génération PDF | `src/app/api/attestation/issue/route.ts` | Design et logique sensibles ; extraire les textes sans changer la mise en page |
| Images publiques | `public/hero-attestation.webp`, `public/preview.webp`, autres assets | Ne pas modifier pour une simple localisation texte |
| Variables d'environnement | `.env*`, `.env*.local` | Secrets ou configuration locale, jamais à committer |
| Routes API | `src/app/api/**` | Localiser seulement les messages visibles, pas la logique |
| Sitemap et robots | `public/sitemap.xml`, `public/robots.txt` | Modifier seulement quand des pages réelles existent |
| Fichiers de config | `next.config.*`, `package.json`, `tsconfig.json`, Tailwind/PostCSS | Hors périmètre localisation |
| Dictionnaires PDF existants | `src/lib/attestation-i18n/en.ts`, `src/lib/attestation-i18n/de.ts` | PDF uniquement ; ne pas les confondre avec des sites complets |

## 12. Méthode recommandée pour la future localisation

Approche proposée, sans implémentation dans cette PR :

1. Geler `certif-scope-international` comme base propre issue de `fr-clean`.
2. Créer une branche par lot de localisation, jamais directement sur `fr-clean` ou `main`.
3. Extraire les chaînes visibles par domaine : navigation, homepage, pages SEO, légal, formulaire, success, PDF, emails.
4. Définir une source de vérité par langue avant de créer des routes publiques.
5. Créer les routes locales uniquement quand le contenu, les metadata, les canonicals, le sitemap et les disclaimers sont complets.
6. Ajouter les hreflang uniquement après publication réelle de la page équivalente.
7. Valider chaque langue avec une checklist juridique et produit.
8. Lancer le build et une revue de diff garantissant l'absence de changement produit.

Structure possible à étudier plus tard :

| Domaine | Cible possible |
| --- | --- |
| Navigation et layout | dictionnaires par locale |
| Pages éditoriales longues | données structurées par page ou composants localisés |
| Formulaire | dictionnaire UI + conservation des constantes métier |
| PDF | extension contrôlée de `src/lib/attestation-i18n/**` |
| SEO | metadata par route/langue |
| Légal | textes validés par langue, non générés automatiquement |

## 13. Checklist avant création d'une nouvelle langue

Avant toute langue `/en/`, `/de/`, `/it/`, `/es/` ou autre :

- Confirmer la branche de base : `certif-scope-international`.
- Confirmer que `fr-clean` et `main` ne sont pas modifiées.
- Lister les routes à publier réellement.
- Produire les traductions complètes avant création du sitemap.
- Vérifier que les CTAs pointent vers des flux disponibles.
- Vérifier que le prix affiché reste conforme à l'offre active.
- Vérifier que le checkout accepte le marché et la devise souhaités si applicable.
- Vérifier que le PDF généré existe dans la langue choisie.
- Vérifier les disclaimers : indicatif, non audit, non réglementaire, non certification, non CSRD/ESRS.
- Vérifier les processeurs et pages privacy/cookies/data-processing.
- Vérifier les canonicals, hreflang, robots et sitemap.
- Vérifier la page success et les emails.
- Vérifier les états d'erreur et messages de clé.
- Lancer le build.
- Relire le diff pour confirmer l'absence de changement de logique métier.

## 14. Risques principaux

| Risque | Impact | Mesure de contrôle |
| --- | --- | --- |
| Traduction littérale des limites juridiques | Claims trop forts ou trompeurs | Relecture juridique par langue |
| Création de pages locales incomplètes | SEO faible, expérience cassée | Ne publier que des routes complètes |
| Hreflang vers pages inexistantes | Signal SEO incorrect | Ajouter hreflang après publication effective |
| Modification involontaire des prix | Risque commercial et Stripe | Diff dédié prix/Stripe interdit dans PR localisation |
| Modification des facteurs carbone | Risque méthodologique | Isoler labels et constantes métier |
| Modification du payload signé | Rupture vérification | Ne pas toucher à `src/lib/sign.ts` |
| Confusion QR vs signature PDF | Surpromesse de vérification | Garder la distinction documentaire/technique |
| Mélange dictionnaires PDF et site web | Fausses langues publiées | Traiter PDF i18n comme périmètre distinct |
| Oubli pages légales | Non-alignement confiance/privacy | Checklist légale obligatoire |
| Sitemap publié trop tôt | URLs non prêtes indexées | Sitemap seulement après pages finalisées |

## 15. Conclusion opérationnelle

La version française validée contient un socle complet : homepage, formulaire, parcours paiement/success, pages produit, pages légales, pages SEO, vérification QR, vérification technique, PDF généré et PDF exemple.

Pour l'internationalisation, la priorité n'est pas de créer immédiatement des routes en langues étrangères. La priorité est de séparer clairement les contenus localisables des éléments métier intangibles : prix, calcul, facteurs d'émission, Stripe, génération PDF, signature, API, clés et logique d'attestation.

La branche `certif-scope-international` peut servir de base stable à condition de rester alignée sur le SHA FR validé et de recevoir uniquement des PRs petites, vérifiées et limitées à leur objectif.
