# Route Map SEO — Allemagne — de-DE

## 1. Objectif de la route map

Cette route map prépare les futures routes allemandes `/de/` de Certif-Scope pour le marché Allemagne (`de-DE`) sans créer les pages, sans traduire le site et sans modifier la version française existante.

Elle définit un mapping SEO opérationnel entre les routes françaises déjà inventoriées et leurs futurs équivalents allemands possibles. Elle sert à préparer la future translation memory et le registre de décisions Allemagne, mais elle n'autorise pas encore la création de `/de/`.

Cette route map ne modifie aucun contenu produit, aucun prix, aucun calcul carbone, aucun facteur d'émission, aucune API, aucun PDF runtime, aucune signature, aucun checkout, aucune clé et aucun fichier de configuration produit.

## 2. Sources utilisées

| Source | Rôle | Statut d'utilisation |
| --- | --- | --- |
| `docs/localization/localization-inventory-fr-source.md` | Source de vérité des pages, flux, composants et zones visibles FR. | Source principale obligatoire. |
| `docs/localization/de-DE-country-pack.md` | Cadrage pays Allemagne, vocabulaire prudent, risques et premières hypothèses SEO. | Utilisé comme garde-fou, pas comme autorisation de créer de nouvelles pages. |
| `docs/localization/de-DE-regulatory-scan.md` | Scan réglementaire Allemagne, termes dangereux, formulations prudentes et limites. | Utilisé pour qualifier le risque wording. |
| Structure réelle `/fr/` | Vérification terrain des pages réellement présentes dans `src/app/fr/**`. | Source structurelle complémentaire. |

La source produit et structurelle reste `/fr/`. Les routes allemandes ci-dessous sont uniquement des équivalents futurs de routes ou parcours déjà présents dans l'inventaire FR source.

## 3. Règle anti-invention

Règle obligatoire pour toute future localisation allemande :

- aucune page non présente dans l'inventaire FR source ;
- aucune route SEO nouvelle inventée ;
- aucune section ajoutée ;
- aucune page légale ou technique inventée ;
- aucun flux utilisateur nouveau ;
- aucun composant produit nouveau ;
- les routes allemandes sont uniquement des équivalents SEO de routes FR existantes.

Si une zone, page, route, section, composant ou flux mentionné dans le Document Maître ou dans le Country Pack n'existe pas dans l'inventaire FR source, elle doit être traitée comme suit :

> Non présent dans l’inventaire FR source — ne pas créer à cette étape.

Cette route map peut proposer une route allemande uniquement lorsqu'une route FR source existe déjà. Elle ne crée ni `/de/`, ni sitemap, ni canonical, ni hreflang, ni traduction publique.

## 4. Convention URL Allemagne

| Élément | Convention future |
| --- | --- |
| Locale | `de-DE` |
| Préfixe officiel | `/de/` |
| Domaine | `https://www.certif-scope.com/de/` |
| Canonical future | Chaque page allemande aura une canonical vers elle-même. |
| Hreflang futur | `de-DE` |
| Source structurelle | `/fr/` |
| Future branche langue | `intl-de` |
| Base de création future | `certif-scope-international` |

Les routes ci-dessous sont des slugs de travail SEO. Elles devront être validées dans la future branche langue avant toute création de fichier, toute mise à jour du sitemap et tout ajout de hreflang.

## 5. Tableau principal de mapping des routes

| Statut source FR | Route FR | Fichier FR source | Route allemande proposée | Mot-clé principal Allemagne | Intention SEO | Priorité | Risque wording | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Présent dans inventaire FR source | `/fr/` | `src/app/fr/page.tsx` | `/de/` | `CO2-Bescheinigung Deutschland` | Accueil produit Allemagne, conversion et confiance. | P0 | élevé | Limites visibles près des CTAs ; éviter `Zertifikat`. |
| Présent dans inventaire FR source | `/fr/generate/` | `src/app/fr/generate/page.tsx` | `/de/erstellen/` | `CO2-Bescheinigung erstellen` | Générer une attestation indicative. | P0 | élevé | Ne pas modifier calcul, prix, checkout ou PDF runtime. |
| Présent dans inventaire FR source | `/success` | `src/app/success/page.tsx` | `/de/erfolg/` | `CO2e PDF herunterladen` | Retour après paiement, téléchargement et pack. | P0 | moyen | Parcours success partagé inventorié ; route future à valider sans nouveau flux. |
| Présent dans inventaire FR source | `/fr/cancel/` | `src/app/fr/cancel/page.tsx` | `/de/abbruch/` | `Zahlung abgebrochen CO2-Bescheinigung` | Paiement annulé et retour parcours. | P2 | faible | Garder le ton utilitaire, sans créer de nouveau checkout. |
| Présent dans inventaire FR source | `/fr/pricing/` | `src/app/fr/pricing/page.tsx` | `/de/preise/` | `CO2-Bescheinigung Preis` | Prix, offre et limites. | P0 | élevé | Prix lié au document, pas à une certification. |
| Présent dans inventaire FR source | `/fr/contact/` | `src/app/fr/contact/page.tsx` | `/de/kontakt/` | `Certif-Scope Kontakt` | Contact institutionnel. | P2 | faible | Ne pas promettre conseil juridique ou audit. |
| Présent dans inventaire FR source | `/fr/product/` | `src/app/fr/product/page.tsx` | `/de/produkt/` | `CO2e-Dokument Unternehmen` | Page produit générale. | P1 | moyen | Présenter un document standardisé indicatif. |
| Présent dans inventaire FR source | `/fr/product/compliance/` | `src/app/fr/product/compliance/page.tsx` | `/de/grenzen-und-compliance/` | `CO2-Bescheinigung Grenzen` | Limites, non audit, non réglementaire. | P0 | élevé | Page centrale pour éviter surpromesse CSRD/ESRS. |
| Présent dans inventaire FR source | `/fr/product/methodology/` | `src/app/fr/product/methodology/page.tsx` | `/de/methodik/` | `spend-based Emissionsschätzung` | Méthode spend-based et sources de contexte. | P0 | élevé | Expliquer estimation, facteurs et limites sans modifier le calcul. |
| Présent dans inventaire FR source | `/fr/verify/` | `src/app/fr/verify/page.tsx` | `/de/pruefen/` | `CO2-Bescheinigung prüfen` | Contrôle documentaire QR. | P0 | élevé | Distinguer QR rapide et vérification technique du PDF signé. |
| Présent dans inventaire FR source | `/fr/verify/demo/` | `src/app/fr/verify/demo/page.tsx` | `/de/pruefen/demo/` | `CO2-Bescheinigung Prüfung Demo` | Démonstration de contrôle. | P2 | moyen | Ne pas présenter la démo comme validation officielle. |
| Présent dans inventaire FR source | `/fr/verify/technical/` | `src/app/fr/verify/technical/page.tsx` | `/de/technische-pruefung/` | `PDF Signatur prüfen CO2` | Vérification technique avancée. | P1 | élevé | Expliquer hash, signature et clé sans promettre audit. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-pme/` | `src/app/fr/bilan-carbone-pme/page.tsx` | `/de/co2-bilanz-kmu/` | `CO2-Bilanz KMU` | Pilier SEO PME. | P0 | élevé | Clarifier estimation indicative, pas bilan GES complet. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-pme/cout/` | `src/app/fr/bilan-carbone-pme/cout/page.tsx` | `/de/co2-bilanz-kmu/kosten/` | `CO2-Bilanz KMU Kosten` | Coût et alternatives. | P1 | moyen | Éviter de comparer à un audit comme équivalent. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-pme/exemple/` | `src/app/fr/bilan-carbone-pme/exemple/page.tsx` | `/de/co2-bilanz-kmu/beispiel/` | `CO2-Bilanz KMU Beispiel` | Exemple de document et lecture. | P1 | moyen | Exemple indicatif, non preuve réglementaire. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-pme/modele-pdf/` | `src/app/fr/bilan-carbone-pme/modele-pdf/page.tsx` | `/de/co2-bilanz-kmu/pdf-vorlage/` | `CO2-Bilanz PDF Vorlage` | Modèle PDF et attentes destinataire. | P1 | moyen | Ne pas faire croire à un modèle officiel. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-pme/obligation/` | `src/app/fr/bilan-carbone-pme/obligation/page.tsx` | `/de/co2-bilanz-kmu/pflicht/` | `CO2-Bilanz KMU Pflicht` | Obligations, contexte et limites. | P1 | élevé | Ne pas généraliser une obligation à toutes les PME. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-appel-offres/` | `src/app/fr/bilan-carbone-appel-offres/page.tsx` | `/de/co2-angaben-ausschreibung/` | `CO2-Angaben Ausschreibung` | Réponse documentaire pour appels d'offres. | P0 | élevé | Ne pas promettre acceptation ou conformité marché public. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-fournisseur/` | `src/app/fr/bilan-carbone-fournisseur/page.tsx` | `/de/co2-nachweis-lieferanten/` | `CO2-Nachweis Lieferanten` | Demandes fournisseurs et supply chain. | P0 | élevé | `Nachweis` doit rester indicatif et documentaire. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-entreprise/` | `src/app/fr/bilan-carbone-entreprise/page.tsx` | `/de/co2-fussabdruck-unternehmen/` | `CO2-Fußabdruck Unternehmen` | Guide entreprise et estimation. | P1 | élevé | Éviter de promettre empreinte complète. |
| Présent dans inventaire FR source | `/fr/attestation-carbone/` | `src/app/fr/attestation-carbone/page.tsx` | `/de/co2-bescheinigung/` | `CO2-Bescheinigung` | Recherche document carbone simple. | P0 | élevé | Bannir `Zertifikat`; utiliser `Bescheinigung`. |
| Présent dans inventaire FR source | `/fr/attestation-co2-pme/` | `src/app/fr/attestation-co2-pme/page.tsx` | `/de/co2-bescheinigung-kmu/` | `CO2-Bescheinigung KMU` | Attestation CO2e pour PME. | P0 | élevé | Toujours qualifier `indikativ`. |
| Présent dans inventaire FR source | `/fr/scope-1-2-3-explication/` | `src/app/fr/scope-1-2-3-explication/page.tsx` | `/de/scope-1-2-3-erklaert/` | `Scope 1 2 3 Erklärung` | Pédagogie scopes. | P1 | moyen | Ne pas promettre calcul complet Scope 1/2/3. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-banque-pme/` | `src/app/fr/bilan-carbone-banque-pme/page.tsx` | `/de/bank-esg-unterlagen-kmu/` | `Bank ESG Unterlagen KMU` | Dossier bancaire ESG PME. | P1 | élevé | Ne pas promettre acceptation bancaire. |
| Présent dans inventaire FR source | `/fr/bilan-carbone-assurance-pme/` | `src/app/fr/bilan-carbone-assurance-pme/page.tsx` | `/de/versicherung-esg-unterlagen-kmu/` | `Versicherung ESG Unterlagen KMU` | Dossier assurance PME. | P1 | élevé | Ne pas promettre réduction de prime ou acceptation. |
| Présent dans inventaire FR source | `/fr/document-carbone-fournisseur/` | `src/app/fr/document-carbone-fournisseur/page.tsx` | `/de/co2-dokument-lieferanten/` | `CO2-Dokument Lieferanten` | Document fournisseur simple. | P0 | moyen | Très aligné produit, garder limites près CTA. |
| Présent dans inventaire FR source | `/fr/difference-bilan-carbone-attestation-co2e/` | `src/app/fr/difference-bilan-carbone-attestation-co2e/page.tsx` | `/de/co2-bilanz-vs-co2-bescheinigung/` | `CO2-Bilanz vs CO2-Bescheinigung` | Différencier bilan complet et attestation indicative. | P0 | élevé | Page clé pour réduire la confusion réglementaire. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/` | `src/app/fr/why-companies-ask/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/` | `warum Unternehmen CO2 Angaben anfordern` | Hub pédagogique demande carbone. | P1 | moyen | Long slug acceptable ; peut être arbitré plus tard. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/guide/` | `src/app/fr/why-companies-ask/guide/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/` | `CO2 Angaben Unternehmen Leitfaden` | Guide pédagogique. | P2 | moyen | Ne pas créer de guide hors structure existante. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/attestation-carbone-fournisseur/` | `src/app/fr/why-companies-ask/attestation-carbone-fournisseur/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/` | `CO2-Bescheinigung Lieferanten` | Guide fournisseur. | P2 | élevé | Source noindex observée ; stratégie index à réarbitrer. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/attestation-carbone-appel-offres/` | `src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/` | `CO2-Bescheinigung Ausschreibung` | Guide appel d'offres. | P2 | élevé | Ne pas promettre conformité dossier public. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/attestation-carbone-pme/` | `src/app/fr/why-companies-ask/attestation-carbone-pme/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/` | `CO2-Bescheinigung KMU Nachfrage` | Guide PME. | P2 | élevé | Éviter obligation généralisée. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/exigences-co2-banques-assurances/` | `src/app/fr/why-companies-ask/exigences-co2-banques-assurances/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/` | `CO2 Anforderungen Banken Versicherungen` | Guide banques et assurances. | P2 | élevé | Aucune garantie d'acceptation. |
| Présent dans inventaire FR source | `/fr/why-companies-ask/preuve-carbone-entreprise/` | `src/app/fr/why-companies-ask/preuve-carbone-entreprise/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | `CO2-Nachweis Unternehmen` | Preuve/document carbone entreprise. | P1 | élevé | `Nachweis` à limiter à un support indicatif. |
| Présent dans inventaire FR source | `/fr/partners/` | `src/app/fr/partners/page.tsx` | `/de/partner/` | `Certif-Scope Partner` | Partenaires. | P3 | faible | Après pages principales, pas de nouvelle promesse commerciale. |
| Présent dans inventaire FR source | `/fr/privacy/` | `src/app/fr/privacy/page.tsx` | `/de/datenschutz/` | `Certif-Scope Datenschutz` | Confidentialité DSGVO. | P0 | élevé | Processeurs, Stripe, Resend, Cloudflare KV, PDFShift à expliquer précisément. |
| Présent dans inventaire FR source | `/fr/terms/` | `src/app/fr/terms/page.tsx` | `/de/agb/` | `Certif-Scope AGB` | Conditions d'utilisation. | P0 | moyen | Responsabilité utilisateur et absence de garantie d'acceptation. |
| Présent dans inventaire FR source | `/fr/cookies/` | `src/app/fr/cookies/page.tsx` | `/de/cookies/` | `Certif-Scope Cookies` | Cookies strictement nécessaires. | P2 | faible | Maintenir absence tracking marketing et analytics comportementales. |
| Présent dans inventaire FR source | `/fr/legal/` | `src/app/fr/legal/page.tsx` | `/de/impressum/` | `Certif-Scope Impressum` | Mentions légales. | P0 | moyen | `Impressum` attendu en Allemagne, mais source FR = mentions légales. |
| Présent dans inventaire FR source | `/fr/data-processing/` | `src/app/fr/data-processing/page.tsx` | `/de/datenverarbeitung/` | `Certif-Scope Datenverarbeitung` | Traitement des données. | P0 | élevé | Clarifier données nécessaires, PDFShift, Stripe, Resend, Cloudflare KV. |

## 6. Zones du Document Maître non présentes dans l’inventaire FR source

| Zone mentionnée dans le Document Maître | Statut | Décision |
| --- | --- | --- |
| Page SEO allemande dédiée `CSRD KMU Deutschland` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO allemande dédiée `ESRS KMU` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO allemande dédiée `Emissionsschätzung Unternehmen` | Non présent comme page dédiée dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO allemande dédiée `Scope 3 Schätzung` | Non présent comme page dédiée dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page allemande autonome `/de/sources/` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page allemande autonome `/de/limits/` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page allemande autonome `/de/security/` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page légale allemande autonome hors équivalent `legal`, `privacy`, `terms`, `cookies`, `data-processing`, `contact` | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Registre de décisions Allemagne | Document de gouvernance futur, pas une page FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Translation memory Allemagne | Document de traduction futur, pas une page FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Branche `intl-de` | Branche langue future, pas une route FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Pages `/en/`, `/es/`, `/it/`, `/pt/`, `/nl/`, `/pl/` | Autres langues non demandées | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Nouveau flux utilisateur Allemagne distinct du flux generate/checkout/success existant | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Nouveau composant produit allemand dédié | Non présent dans l'inventaire FR source | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |

## 7. Routes produit et conversion

| Route FR | Route DE proposée | CTA à surveiller | Risque réglementaire | Note d'adaptation allemande |
| --- | --- | --- | --- | --- |
| `/fr/` | `/de/` | CTA principal de génération, CTA exemple gratuit. | Élevé | Ajouter limites visibles : indicatif, non audit, non certification, non CSRD/ESRS. |
| `/fr/generate/` | `/de/erstellen/` | Paiement `89 €`, génération via crédit, case obligatoire. | Élevé | Conserver prix et logique ; traduire seulement les libellés futurs. |
| `/success` | `/de/erfolg/` | Télécharger le PDF, sauvegarder le document, pack envoyé par email. | Moyen | Parcours inventorié mais partagé ; ne pas créer un nouveau flux. |
| `/fr/cancel/` | `/de/abbruch/` | Retour génération, retour pricing. | Faible | Page utilitaire, wording sobre. |
| `/fr/pricing/` | `/de/preise/` | Générer, packs si affichés, liens use cases. | Élevé | Prix = document indicatif ; aucune certification vendue. |
| `/fr/contact/` | `/de/kontakt/` | Contact institutionnel. | Faible | Ne pas promettre diagnostic, audit ou conseil juridique. |
| `/fr/verify/` | `/de/pruefen/` | Vérifier un document, lien technique. | Élevé | QR = contrôle documentaire rapide, pas validation réglementaire. |
| `/fr/verify/demo/` | `/de/pruefen/demo/` | Tester une vérification exemple. | Moyen | Exemple pédagogique, pas preuve officielle. |
| `/fr/verify/technical/` | `/de/technische-pruefung/` | Procédure avancée, vérification PDF. | Élevé | Vérification technique du PDF signé, pas audit carbone. |

## 8. Routes confiance, méthode et limites

| Route FR | Route DE proposée | Mot-clé Allemagne | Risque de promesse excessive | Wording prudent recommandé |
| --- | --- | --- | --- | --- |
| `/fr/product/` | `/de/produkt/` | `standardisiertes CO2e-Dokument` | Moyen | `standardisiertes CO2e-Dokument`, `indikativ`, `archivierbar`. |
| `/fr/product/methodology/` | `/de/methodik/` | `spend-based Emissionsschätzung` | Élevé | `auf aggregierten Ausgaben und Emissionsfaktoren basierend`. |
| `/fr/product/compliance/` | `/de/grenzen-und-compliance/` | `CO2-Bescheinigung Grenzen` | Élevé | `kein Audit`, `keine Zertifizierung`, `kein CSRD- oder ESRS-Reporting`. |
| `/fr/verify/` | `/de/pruefen/` | `CO2-Bescheinigung prüfen` | Élevé | `dokumentarischer Schnellcheck per QR-Code`. |
| `/fr/verify/technical/` | `/de/technische-pruefung/` | `PDF Signatur prüfen` | Élevé | `technische Prüfung der signierten PDF-Elemente`. |
| `/fr/why-companies-ask/preuve-carbone-entreprise/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | `CO2-Nachweis Unternehmen` | Élevé | `unterstützendes Dokument`, `keine behördliche Anerkennung`. |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `/de/co2-bilanz-vs-co2-bescheinigung/` | `CO2-Bilanz vs CO2-Bescheinigung` | Élevé | `keine vollständige Treibhausgasbilanz`. |
| `/fr/scope-1-2-3-explication/` | `/de/scope-1-2-3-erklaert/` | `Scope 1 2 3 Erklärung` | Moyen | `pädagogische Einordnung`, pas de calcul exhaustif promis. |
| `/fr/privacy/` | `/de/datenschutz/` | `Datenschutz Certif-Scope` | Élevé | `keine Speicherung detaillierter Finanzdaten durch Certif-Scope`. |
| `/fr/data-processing/` | `/de/datenverarbeitung/` | `Datenverarbeitung Certif-Scope` | Élevé | `nur die technisch notwendigen Daten`. |

Il n'existe pas de page FR autonome `/fr/sources/`, `/fr/limits/` ou `/fr/security/`. Les contenus équivalents sont portés par les pages produit, méthodologie, conformité, vérification, confidentialité et traitement des données.

## 9. Routes légales

| Route FR | Fichier FR source | Route DE proposée | Type | Note anti-invention |
| --- | --- | --- | --- | --- |
| `/fr/legal/` | `src/app/fr/legal/page.tsx` | `/de/impressum/` | Mentions légales / Impressum | Équivalent autorisé car route FR source présente. |
| `/fr/privacy/` | `src/app/fr/privacy/page.tsx` | `/de/datenschutz/` | Confidentialité / DSGVO | Équivalent autorisé car route FR source présente. |
| `/fr/terms/` | `src/app/fr/terms/page.tsx` | `/de/agb/` | Conditions d'utilisation | Équivalent autorisé car route FR source présente. |
| `/fr/cookies/` | `src/app/fr/cookies/page.tsx` | `/de/cookies/` | Cookies | Équivalent autorisé car route FR source présente. |
| `/fr/data-processing/` | `src/app/fr/data-processing/page.tsx` | `/de/datenverarbeitung/` | Traitement des données | Équivalent autorisé car route FR source présente. |
| `/fr/contact/` | `src/app/fr/contact/page.tsx` | `/de/kontakt/` | Contact institutionnel | Équivalent autorisé car route FR source présente. |
| Page légale allemande additionnelle non listée ci-dessus | Non applicable | Non applicable | Hors périmètre | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |

## 10. Routes SEO prioritaires Allemagne

| Intention Allemagne | Route FR source correspondante | Route DE proposée | Décision anti-invention |
| --- | --- | --- | --- |
| `CO2-Bescheinigung` | `/fr/attestation-carbone/` | `/de/co2-bescheinigung/` | Autorisé comme équivalent d'une route FR existante. |
| `CO2-Nachweis Unternehmen` | `/fr/why-companies-ask/preuve-carbone-entreprise/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | Autorisé comme équivalent d'une route FR existante. |
| `CO2-Nachweis KMU` | `/fr/attestation-co2-pme/` | `/de/co2-bescheinigung-kmu/` | Autorisé comme équivalent d'une route FR existante ; `Nachweis` à encadrer. |
| `CO2-Dokument Lieferanten` | `/fr/document-carbone-fournisseur/` | `/de/co2-dokument-lieferanten/` | Autorisé comme équivalent d'une route FR existante. |
| `Nachhaltigkeitsnachweis Lieferanten` | `/fr/bilan-carbone-fournisseur/` | `/de/co2-nachweis-lieferanten/` | Autorisé uniquement comme angle fournisseur CO2e ; ne pas créer page dédiée durabilité générale. |
| `CO2-Angaben Ausschreibung` | `/fr/bilan-carbone-appel-offres/` | `/de/co2-angaben-ausschreibung/` | Autorisé comme équivalent d'une route FR existante. |
| `CO2-Bilanz KMU` | `/fr/bilan-carbone-pme/` | `/de/co2-bilanz-kmu/` | Autorisé avec disclaimer fort : pas bilan GES complet. |
| `CO2-Fußabdruck Unternehmen` | `/fr/bilan-carbone-entreprise/` | `/de/co2-fussabdruck-unternehmen/` | Autorisé avec prudence : estimation, pas empreinte exhaustive. |
| `Emissionsschätzung Unternehmen` | `/fr/product/methodology/` | `/de/methodik/` | Rattaché à la méthodologie existante ; ne pas créer page dédiée. |
| `Scope 3 Schätzung` | `/fr/scope-1-2-3-explication/` | `/de/scope-1-2-3-erklaert/` | Rattaché à la page scopes existante ; ne pas créer page dédiée. |
| `CSRD KMU Deutschland` | `/fr/bilan-carbone-pme/obligation/` et `/fr/product/compliance/` | `/de/co2-bilanz-kmu/pflicht/` ou `/de/grenzen-und-compliance/` | Intention à traiter dans pages existantes ; ne pas créer page CSRD dédiée. |
| `ESRS KMU` | `/fr/product/compliance/` | `/de/grenzen-und-compliance/` | Intention à traiter dans limites/conformité ; ne pas créer page ESRS dédiée. |
| `Lieferkette CO2 Nachweis` | `/fr/bilan-carbone-fournisseur/` | `/de/co2-nachweis-lieferanten/` | Autorisé comme équivalent fournisseur, sans promesse Lieferkettengesetz. |
| `Bank ESG Unterlagen Unternehmen` | `/fr/bilan-carbone-banque-pme/` | `/de/bank-esg-unterlagen-kmu/` | Autorisé comme use case banque existant, sans acceptation garantie. |
| `Versicherung ESG Unterlagen Unternehmen` | `/fr/bilan-carbone-assurance-pme/` | `/de/versicherung-esg-unterlagen-kmu/` | Autorisé comme use case assurance existant, sans acceptation garantie. |

Les intentions `CSRD KMU Deutschland`, `ESRS KMU`, `Emissionsschätzung Unternehmen` et `Scope 3 Schätzung` ne doivent pas produire de pages autonomes à cette étape. Elles peuvent seulement être rattachées à des pages FR existantes lorsque le contenu source couvre déjà l'intention.

## 11. Règles canonical et hreflang futures

Ces règles sont documentaires. Aucun code, sitemap ou metadata n'est modifié dans cette PR.

- Chaque future route `/de/` aura une canonical vers elle-même.
- Le hreflang futur de la version allemande sera `de-DE`.
- Le hreflang France existant sera `fr-FR`.
- Aucune canonical allemande ne doit pointer vers une page FR.
- Aucun hreflang ne doit être ajouté tant que la page allemande réelle n'existe pas.
- Aucun lien interne FR involontaire ne doit subsister dans le parcours allemand publié.
- Les liens FR sont autorisés uniquement dans un hreflang, un language switcher explicite ou une documentation interne.
- Le sitemap ne doit contenir des URLs `/de/` qu'après création réelle, contenu complet, canonical validée et QA des liens.

## 12. Risques SEO et réglementaires par type de route

| Type de page | Risque SEO | Risque réglementaire | Mesure de prévention |
| --- | --- | --- | --- |
| Homepage | Slug simple mais claims trop larges si le contenu reste marketing. | Surpromesse de conformité ou acceptation. | Limites visibles près CTAs, `indikative CO2e-Bescheinigung`, pas `Zertifikat`. |
| Generate | Conversion forte mais erreurs de libellés possibles. | Modification accidentelle prix/calcul/checkout. | Localiser labels seulement ; garder logique métier intacte. |
| Success | Liens ou messages FR involontaires. | Mauvaise compréhension conservation PDF et données. | Rappeler sauvegarde utilisateur et absence de stockage détaillé. |
| Verify | Confusion entre QR et vérification technique. | Surpromesse de validation. | QR = contrôle documentaire rapide ; technique = PDF signé. |
| Pricing | Intention commerciale sensible. | Prix perçu comme certification. | Présenter le prix comme document indicatif, non audit. |
| Methodology / méthode | Jargon trop dense ou incomplet. | Spend-based confondu avec inventaire GES complet. | Expliquer formule, limites et dépendance aux données déclarées. |
| Sources | Sources utilisées comme caution officielle. | Laisser croire à une validation institutionnelle. | Citer les sources comme contexte, jamais comme approbation Certif-Scope. |
| Limits / compliance | Peut cannibaliser pages SEO si trop abstrait. | Claim `konform` trop fort. | Utiliser `Grenzen`, `kein Audit`, `keine Zertifizierung`, `kein CSRD/ESRS-Reporting`. |
| Legal / privacy / terms | Traduction littérale insuffisante pour l'Allemagne. | DSGVO, processeurs et responsabilité mal expliqués. | Adapter professionnellement depuis la source FR, sans inventer nouvelle page. |
| Pages SEO PME | Risque de pages trop proches entre elles. | Confusion bilan complet vs attestation. | Différencier intention, ajouter disclaimers et maillage vers limites/méthode. |
| Pages fournisseurs / appels d'offres | Intention B2B forte mais vocabulaire risqué. | Acceptation ou conformité appel d'offres implicite. | `unterstützendes Dokument`, pas de promesse d'acceptation. |
| Pages banque / assurance | Risque de promesses commerciales. | Acceptation bancaire/assurance ou scoring ESG suggéré. | Aucune garantie, aucun score, aucun alignement BaFin. |

## 13. Checklist avant création de `/de/`

- [ ] Route map validée.
- [ ] Aucune route non présente côté FR.
- [ ] Country Pack Allemagne respecté.
- [ ] Regulatory Scan Allemagne respecté.
- [ ] Termes interdits intégrés.
- [ ] Routes allemandes naturelles.
- [ ] Aucune promesse CSRD/ESRS.
- [ ] Aucune promesse de certification.
- [ ] Aucune promesse d'audit.
- [ ] Aucun lien FR involontaire prévu.
- [ ] Aucun ajout de page non validé.
- [ ] Canonicals futures définies uniquement pour pages réelles.
- [ ] Hreflang futurs définis uniquement après création réelle.
- [ ] Sitemap futur mis à jour uniquement après contenu complet.
- [ ] Prix, Stripe, checkout, packs et calculs verrouillés.
- [ ] PDF runtime, signature, clés et facteurs carbone verrouillés.
- [ ] Future branche `intl-de` à créer depuis `certif-scope-international`.

## 14. Conclusion opérationnelle

Cette route map autorise uniquement la préparation de la translation memory Allemagne et du registre de décisions Allemagne.

Elle n'autorise pas encore la création de `/de/`, ni la traduction du site, ni l'ajout de sitemap/hreflang/canonical allemands, ni la création de pages allemandes, ni la modification des pages françaises.

La future implémentation allemande devra être réalisée plus tard depuis `certif-scope-international`, dans une branche dédiée `intl-de`, en miroir structurel de `/fr/`, avec adaptation allemande naturelle, SEO Allemagne et wording réglementaire local prudent.

