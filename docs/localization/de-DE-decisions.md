# Registre de décisions — Allemagne — de-DE

## 1. Objectif du registre

Ce registre verrouille les décisions Allemagne avant la création de la branche `intl-de` et avant toute création publique de `/de/`.

Il consolide les choix validés dans l'inventaire FR source, le Country Pack Allemagne, le Regulatory Scan Allemagne, la Route Map Allemagne et la Translation Memory européenne. Il reste strictement documentaire : il ne crée aucune page allemande, ne traduit pas le site, ne modifie aucune page FR et ne change aucune logique produit.

## 2. Sources de décision

| Source | Rôle dans la décision | Statut |
| --- | --- | --- |
| `docs/localization/localization-inventory-fr-source.md` | Source produit, structurelle, pages FR, flux, PDF, generate, verify, légal et composants visibles. | Source obligatoire. |
| `docs/localization/de-DE-country-pack.md` | Cadre pays, locale, ton allemand, termes recommandés, termes interdits et adaptations futures. | Validé pour Allemagne. |
| `docs/localization/de-DE-regulatory-scan.md` | Risques CSRD, ESRS, Taxonomy, Green Claims, procurement, banque, assurance, DSGVO et méthode spend-based. | Validé pour prudence réglementaire. |
| `docs/localization/de-DE-route-map.md` | Routes DE futures uniquement depuis routes FR inventoriées, priorités, mots-clés et risques. | Validé pour mapping futur. |
| `docs/localization/translation-memory.md` | Mémoire terminologique européenne et termes DE validés. | Validé comme base documentaire. |

## 3. Décisions générales Allemagne

| Sujet | Décision validée | Source | Statut | Note |
| --- | --- | --- | --- | --- |
| Locale | `de-DE` | Country Pack Allemagne | Validé | Marché allemand, pas allemand générique. |
| Préfixe futur | `/de/` | Country Pack Allemagne, Route Map Allemagne | Validé | Ne pas créer dans cette PR. |
| Marché | Allemagne | Country Pack Allemagne | Validé | Cible PME, Mittelstand et demandes B2B. |
| Langue | Allemand d'Allemagne | Country Pack Allemagne | Validé | Ton naturel, B2B, institutionnel. |
| Devise | EUR | Country Pack Allemagne | Validé | Ne modifie aucun prix ni montant Stripe. |
| Source structurelle | `/fr/` | Inventaire FR source, Translation Memory | Validé | `/fr/` reste la source produit et structurelle. |
| Branche future | `intl-de` | Country Pack Allemagne, Route Map Allemagne | Validé | À créer plus tard depuis `certif-scope-international`. |
| Branche base | `certif-scope-international` | Document maître, Route Map Allemagne | Validé | Base internationale active. |
| Pages hors inventaire FR | Aucune page nouvelle hors inventaire FR | Inventaire FR source, Route Map Allemagne | Verrouillé | Ne pas inventer de route, page, flux, section ou composant. |
| Traduction | Aucune traduction mot à mot | Country Pack Allemagne, Translation Memory | Validé | Adapter le sens, pas copier littéralement. |
| Ton | Allemand naturel, B2B, institutionnel, prudent | Country Pack Allemagne | Validé | Limites visibles, pas de promesse réglementaire. |

## 4. Routes validées

| Route FR source | Fichier FR source | Route DE validée | Priorité | Mot-clé principal | Risque | Décision |
| --- | --- | --- | --- | --- | --- | --- |
| `/fr/` | `src/app/fr/page.tsx` | `/de/` | P0 | `CO2-Bescheinigung Deutschland` | Élevé | Autorisée plus tard, limites près des CTAs. |
| `/fr/generate/` | `src/app/fr/generate/page.tsx` | `/de/erstellen/` | P0 | `CO2-Bescheinigung erstellen` | Élevé | Autorisée plus tard, sans toucher calcul, prix, checkout ou PDF runtime. |
| `/success` | `src/app/success/page.tsx` | `/de/erfolg/` | P0 | `CO2e PDF herunterladen` | Moyen | Autorisée plus tard comme parcours success inventorié. |
| `/fr/cancel/` | `src/app/fr/cancel/page.tsx` | `/de/abbruch/` | P2 | `Zahlung abgebrochen CO2-Bescheinigung` | Faible | Autorisée plus tard, page utilitaire. |
| `/fr/pricing/` | `src/app/fr/pricing/page.tsx` | `/de/preise/` | P0 | `CO2-Bescheinigung Preis` | Élevé | Autorisée plus tard, prix du document indicatif. |
| `/fr/contact/` | `src/app/fr/contact/page.tsx` | `/de/kontakt/` | P2 | `Certif-Scope Kontakt` | Faible | Autorisée plus tard, contact institutionnel. |
| `/fr/product/` | `src/app/fr/product/page.tsx` | `/de/produkt/` | P1 | `CO2e-Dokument Unternehmen` | Moyen | Autorisée plus tard, document standardisé indicatif. |
| `/fr/product/compliance/` | `src/app/fr/product/compliance/page.tsx` | `/de/grenzen-und-compliance/` | P0 | `CO2-Bescheinigung Grenzen` | Élevé | Autorisée plus tard, page centrale des limites. |
| `/fr/product/methodology/` | `src/app/fr/product/methodology/page.tsx` | `/de/methodik/` | P0 | `spend-based Emissionsschätzung` | Élevé | Autorisée plus tard, méthode sans changer la formule. |
| `/fr/verify/` | `src/app/fr/verify/page.tsx` | `/de/pruefen/` | P0 | `CO2-Bescheinigung prüfen` | Élevé | Autorisée plus tard, QR = contrôle documentaire rapide. |
| `/fr/verify/demo/` | `src/app/fr/verify/demo/page.tsx` | `/de/pruefen/demo/` | P2 | `CO2-Bescheinigung Prüfung Demo` | Moyen | Autorisée plus tard, démo non officielle. |
| `/fr/verify/technical/` | `src/app/fr/verify/technical/page.tsx` | `/de/technische-pruefung/` | P1 | `PDF Signatur prüfen CO2` | Élevé | Autorisée plus tard, technique PDF signé, pas audit. |
| `/fr/bilan-carbone-pme/` | `src/app/fr/bilan-carbone-pme/page.tsx` | `/de/co2-bilanz-kmu/` | P0 | `CO2-Bilanz KMU` | Élevé | Autorisée plus tard, pas inventaire GES complet. |
| `/fr/bilan-carbone-pme/cout/` | `src/app/fr/bilan-carbone-pme/cout/page.tsx` | `/de/co2-bilanz-kmu/kosten/` | P1 | `CO2-Bilanz KMU Kosten` | Moyen | Autorisée plus tard, ne pas équivaloir à un audit. |
| `/fr/bilan-carbone-pme/exemple/` | `src/app/fr/bilan-carbone-pme/exemple/page.tsx` | `/de/co2-bilanz-kmu/beispiel/` | P1 | `CO2-Bilanz KMU Beispiel` | Moyen | Autorisée plus tard, exemple indicatif. |
| `/fr/bilan-carbone-pme/modele-pdf/` | `src/app/fr/bilan-carbone-pme/modele-pdf/page.tsx` | `/de/co2-bilanz-kmu/pdf-vorlage/` | P1 | `CO2-Bilanz PDF Vorlage` | Moyen | Autorisée plus tard, pas modèle officiel. |
| `/fr/bilan-carbone-pme/obligation/` | `src/app/fr/bilan-carbone-pme/obligation/page.tsx` | `/de/co2-bilanz-kmu/pflicht/` | P1 | `CO2-Bilanz KMU Pflicht` | Élevé | Autorisée plus tard, ne pas généraliser d'obligation. |
| `/fr/bilan-carbone-appel-offres/` | `src/app/fr/bilan-carbone-appel-offres/page.tsx` | `/de/co2-angaben-ausschreibung/` | P0 | `CO2-Angaben Ausschreibung` | Élevé | Autorisée plus tard, sans promesse d'acceptation. |
| `/fr/bilan-carbone-fournisseur/` | `src/app/fr/bilan-carbone-fournisseur/page.tsx` | `/de/co2-nachweis-lieferanten/` | P0 | `CO2-Nachweis Lieferanten` | Élevé | Autorisée plus tard, `Nachweis` toujours encadré. |
| `/fr/bilan-carbone-entreprise/` | `src/app/fr/bilan-carbone-entreprise/page.tsx` | `/de/co2-fussabdruck-unternehmen/` | P1 | `CO2-Fußabdruck Unternehmen` | Élevé | Autorisée plus tard, pas empreinte exhaustive. |
| `/fr/attestation-carbone/` | `src/app/fr/attestation-carbone/page.tsx` | `/de/co2-bescheinigung/` | P0 | `CO2-Bescheinigung` | Élevé | Autorisée plus tard, bannir `Zertifikat`. |
| `/fr/attestation-co2-pme/` | `src/app/fr/attestation-co2-pme/page.tsx` | `/de/co2-bescheinigung-kmu/` | P0 | `CO2-Bescheinigung KMU` | Élevé | Autorisée plus tard, toujours `indikativ`. |
| `/fr/scope-1-2-3-explication/` | `src/app/fr/scope-1-2-3-explication/page.tsx` | `/de/scope-1-2-3-erklaert/` | P1 | `Scope 1 2 3 Erklärung` | Moyen | Autorisée plus tard, pédagogie sans calcul complet. |
| `/fr/bilan-carbone-banque-pme/` | `src/app/fr/bilan-carbone-banque-pme/page.tsx` | `/de/bank-esg-unterlagen-kmu/` | P1 | `Bank ESG Unterlagen KMU` | Élevé | Autorisée plus tard, aucune acceptation bancaire garantie. |
| `/fr/bilan-carbone-assurance-pme/` | `src/app/fr/bilan-carbone-assurance-pme/page.tsx` | `/de/versicherung-esg-unterlagen-kmu/` | P1 | `Versicherung ESG Unterlagen KMU` | Élevé | Autorisée plus tard, aucune acceptation assurance garantie. |
| `/fr/document-carbone-fournisseur/` | `src/app/fr/document-carbone-fournisseur/page.tsx` | `/de/co2-dokument-lieferanten/` | P0 | `CO2-Dokument Lieferanten` | Moyen | Autorisée plus tard, très alignée produit. |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `src/app/fr/difference-bilan-carbone-attestation-co2e/page.tsx` | `/de/co2-bilanz-vs-co2-bescheinigung/` | P0 | `CO2-Bilanz vs CO2-Bescheinigung` | Élevé | Autorisée plus tard, page clé anti-confusion. |
| `/fr/why-companies-ask/` | `src/app/fr/why-companies-ask/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/` | P1 | `warum Unternehmen CO2 Angaben anfordern` | Moyen | Autorisée plus tard, hub pédagogique. |
| `/fr/why-companies-ask/guide/` | `src/app/fr/why-companies-ask/guide/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/` | P2 | `CO2 Angaben Unternehmen Leitfaden` | Moyen | Autorisée plus tard, pas de guide hors structure. |
| `/fr/why-companies-ask/attestation-carbone-fournisseur/` | `src/app/fr/why-companies-ask/attestation-carbone-fournisseur/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/` | P2 | `CO2-Bescheinigung Lieferanten` | Élevé | Autorisée plus tard, stratégie index à réarbitrer. |
| `/fr/why-companies-ask/attestation-carbone-appel-offres/` | `src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/` | P2 | `CO2-Bescheinigung Ausschreibung` | Élevé | Autorisée plus tard, aucune conformité dossier public. |
| `/fr/why-companies-ask/attestation-carbone-pme/` | `src/app/fr/why-companies-ask/attestation-carbone-pme/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/` | P2 | `CO2-Bescheinigung KMU Nachfrage` | Élevé | Autorisée plus tard, éviter obligation généralisée. |
| `/fr/why-companies-ask/exigences-co2-banques-assurances/` | `src/app/fr/why-companies-ask/exigences-co2-banques-assurances/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/` | P2 | `CO2 Anforderungen Banken Versicherungen` | Élevé | Autorisée plus tard, aucune garantie d'acceptation. |
| `/fr/why-companies-ask/preuve-carbone-entreprise/` | `src/app/fr/why-companies-ask/preuve-carbone-entreprise/page.tsx` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | P1 | `CO2-Nachweis Unternehmen` | Élevé | Autorisée plus tard, `Nachweis` indicatif. |
| `/fr/partners/` | `src/app/fr/partners/page.tsx` | `/de/partner/` | P3 | `Certif-Scope Partner` | Faible | Autorisée plus tard, après les pages principales. |
| `/fr/privacy/` | `src/app/fr/privacy/page.tsx` | `/de/datenschutz/` | P0 | `Certif-Scope Datenschutz` | Élevé | Autorisée plus tard, DSGVO et processeurs à expliquer. |
| `/fr/terms/` | `src/app/fr/terms/page.tsx` | `/de/agb/` | P0 | `Certif-Scope AGB` | Moyen | Autorisée plus tard, responsabilités et absence de garantie. |
| `/fr/cookies/` | `src/app/fr/cookies/page.tsx` | `/de/cookies/` | P2 | `Certif-Scope Cookies` | Faible | Autorisée plus tard, pas de tracking marketing. |
| `/fr/legal/` | `src/app/fr/legal/page.tsx` | `/de/impressum/` | P0 | `Certif-Scope Impressum` | Moyen | Autorisée plus tard, équivalent mentions légales. |
| `/fr/data-processing/` | `src/app/fr/data-processing/page.tsx` | `/de/datenverarbeitung/` | P0 | `Certif-Scope Datenverarbeitung` | Élevé | Autorisée plus tard, traitements strictement nécessaires. |

## 5. Pages exclues ou non présentes

| Zone ou page | Raison | Décision |
| --- | --- | --- |
| Page SEO dédiée `CSRD KMU Deutschland` | Non présente comme route autonome dans l'inventaire FR source. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO dédiée `ESRS KMU` | Non présente comme route autonome dans l'inventaire FR source. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO dédiée `Emissionsschätzung Unternehmen` | Non présente comme route autonome dans l'inventaire FR source. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page SEO dédiée `Scope 3 Schätzung` | Non présente comme route autonome dans l'inventaire FR source. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page autonome `/de/sources/` | Pas d'équivalent FR autonome `/fr/sources/`. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page autonome `/de/limits/` | Contenu porté par produit, conformité, méthodologie et verify. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page autonome `/de/security/` | Pas d'équivalent FR autonome inventorié. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Page légale allemande additionnelle hors `impressum`, `datenschutz`, `agb`, `cookies`, `datenverarbeitung`, `kontakt` | Pas d'équivalent FR inventorié. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Nouveau flux utilisateur Allemagne | Le flux source reste generate, checkout, success, verify. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Nouveau composant produit allemand dédié | Aucun composant DE autorisé avant branche langue. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |
| Pages `/en/`, `/es/`, `/it/`, `/pt/`, `/nl/`, `/pl/` | Autres langues non demandées. | Non présent dans l’inventaire FR source — ne pas créer à cette étape. |

## 6. Termes allemands validés

| Concept FR | Terme DE validé | Source | Contexte d’usage | Note |
| --- | --- | --- | --- | --- |
| Attestation CO2e | `indikative CO2e-Bescheinigung` | Country Pack, Translation Memory, Regulatory Scan | Hero, PDF, FAQ, pages SEO. | Toujours éviter `Zertifikat`. |
| Document carbone | `CO2e-Dokument`, `CO2-Nachweis` | Country Pack, Translation Memory | Produit, fournisseurs, destinataire. | `Nachweis` doit rester indicatif et documentaire. |
| Bilan carbone PME | `CO2-Bilanz für KMU` | Country Pack, Translation Memory | SEO et pages de distinction. | Disclaimer fort obligatoire. |
| Estimation carbone | `CO2e-Schätzung`, `Emissionsschätzung` | Country Pack, Translation Memory, Regulatory Scan | Résultat, méthode, limites. | Terme prudent. |
| Empreinte carbone | `CO2-Fußabdruck` | Country Pack, Translation Memory | Guides entreprise. | Ne pas promettre une empreinte complète. |
| Spend-based | `ausgabenbasierter Ansatz` | Country Pack, Translation Memory, Regulatory Scan | Méthodologie. | Expliquer dépenses agrégées × facteurs. |
| Facteur d'émission | `Emissionsfaktor` | Country Pack, Translation Memory | Méthodologie. | Ne pas modifier les facteurs métier. |
| Émissions indirectes | `indirekte Emissionen` | Country Pack, Translation Memory | Explication méthode. | Pas inventaire Scope 3 complet. |
| Non réglementaire | `nicht regulatorisch` | Country Pack, Regulatory Scan, Translation Memory | Legal, compliance, PDF. | Limite centrale. |
| Non audit | `kein Audit`, `nicht auditiert` | Country Pack, Regulatory Scan, Translation Memory | FAQ, formulaire, PDF. | Éviter `geprüft` seul. |
| Vérifiable | `dokumentarisch prüfbar` | Country Pack, Translation Memory | Verify, PDF, produit. | Vérifiable ne signifie pas audité. |
| Intégrité du document | `Dokumentintegrität` | Translation Memory | Verify technique, PDF. | Terme technique. |
| Dossier fournisseur | `Lieferantenunterlagen` | Country Pack, Translation Memory | Use cases fournisseur. | B2B naturel. |
| Appel d'offres | `Ausschreibung`, `Vergabeunterlagen` | Country Pack, Regulatory Scan | Appels d'offres. | Aucune acceptation garantie. |
| Dossier bancaire | `Bankunterlagen` | Country Pack, Translation Memory | Banque / ESG. | Aucune promesse bancaire. |
| Dossier assurance | `Unterlagen für die Geschäftsversicherung` | Country Pack, Translation Memory | Assurance / ESG. | Aucune réduction ni acceptation garantie. |
| Confidentialité des dépenses | `keine Speicherung detaillierter Finanzdaten durch Certif-Scope` | Regulatory Scan, Translation Memory | Privacy, formulaire, légal. | Ne pas surpromettre sur les processeurs. |
| Responsabilité utilisateur | `Verantwortung für die eingegebenen Daten liegt beim Nutzer` | Country Pack, Translation Memory | Formulaire, PDF, terms. | L'utilisateur reste responsable des données. |

## 7. Termes allemands interdits ou dangereux

| Terme allemand dangereux | Raison du risque | Alternative prudente | Gravité |
| --- | --- | --- | --- |
| `zertifiziert` | Suggère une certification externe. | `standardisiert`, `dokumentarisch prüfbar` | Très élevée |
| `Zertifizierung` | Implique un processus de certification. | `Bescheinigung`, `Dokument`, `Nachweis mit Hinweis auf Grenzen` | Très élevée |
| `geprüft` | Peut suggérer audit ou validation externe s'il est utilisé seul. | `dokumentarisch prüfbar` | Élevée |
| `Audit` | Le produit n'est pas un audit carbone. | `kein Audit` | Très élevée |
| `CSRD-konform` | Promesse de conformité CSRD. | `nicht als CSRD-Bericht geeignet` | Très élevée |
| `ESRS-konform` | Promesse de conformité ESRS. | `kein ESRS-Reporting` | Très élevée |
| `rechtssicher` | Promesse juridique excessive. | `dokumentarisch nutzbar` | Très élevée |
| `rechtsgültig` | Promesse de validité légale. | `unterstützendes Dokument` | Très élevée |
| `gesetzlich anerkannt` | Reconnaissance officielle non fondée. | `privat ausgestellte Bescheinigung` | Très élevée |
| `offiziell anerkannt` | Reconnaissance officielle non fondée. | `von Certif-Scope ausgestellt` | Très élevée |
| `vollständige CO2-Bilanz` | Confusion avec bilan carbone complet. | `indikative CO2e-Schätzung` | Très élevée |
| `klimaneutral` | Claim environnemental fort. | Ne pas utiliser. | Très élevée |
| `CO2-neutral` | Claim environnemental fort. | Ne pas utiliser. | Très élevée |
| `emissionsfrei` | Claim zéro émission impossible à soutenir. | Ne pas utiliser. | Très élevée |
| `garantiert` | Garantie excessive ou acceptation implicite. | `kann unterstützen`, `keine Garantie` | Élevée |

## 8. Choix SEO Allemagne

| Page / route | Intention SEO | Mot-clé principal | Mot-clé secondaire | Niveau de priorité | Prudence wording |
| --- | --- | --- | --- | --- | --- |
| `/de/` | Accueil produit Allemagne. | `CO2-Bescheinigung Deutschland` | `indikative CO2e-Bescheinigung` | P0 | Limites près des CTAs. |
| `/de/erstellen/` | Générer une attestation indicative. | `CO2-Bescheinigung erstellen` | `CO2e-Dokument erstellen` | P0 | Ne pas modifier prix, calcul, checkout ou PDF. |
| `/de/preise/` | Comprendre prix et offre. | `CO2-Bescheinigung Preis` | `CO2e-Dokument Kosten` | P0 | Prix d'un document indicatif, pas d'une certification. |
| `/de/grenzen-und-compliance/` | Comprendre limites et non-conformité réglementaire. | `CO2-Bescheinigung Grenzen` | `kein CSRD-Reporting` | P0 | Bannir promesses CSRD/ESRS. |
| `/de/methodik/` | Comprendre méthode spend-based. | `spend-based Emissionsschätzung` | `ausgabenbasierter Ansatz` | P0 | Estimation, pas inventaire complet. |
| `/de/pruefen/` | Vérifier un document. | `CO2-Bescheinigung prüfen` | `dokumentarisch prüfbar` | P0 | QR = contrôle documentaire rapide. |
| `/de/co2-bilanz-kmu/` | Bilan carbone PME, différence avec attestation. | `CO2-Bilanz KMU` | `CO2e-Schätzung KMU` | P0 | Page prudente, pas bilan GES complet. |
| `/de/co2-bescheinigung/` | Attestation carbone simple. | `CO2-Bescheinigung` | `CO2e-Dokument` | P0 | Bannir `Zertifikat`. |
| `/de/co2-bescheinigung-kmu/` | Attestation PME. | `CO2-Bescheinigung KMU` | `CO2-Nachweis KMU` | P0 | Toujours `indikativ`. |
| `/de/co2-nachweis-lieferanten/` | Demandes fournisseurs. | `CO2-Nachweis Lieferanten` | `Lieferantenunterlagen CO2` | P0 | `Nachweis` limité à un support indicatif. |
| `/de/co2-angaben-ausschreibung/` | Appels d'offres. | `CO2-Angaben Ausschreibung` | `Vergabeunterlagen CO2` | P0 | Aucune conformité marché public. |
| `/de/co2-dokument-lieferanten/` | Document fournisseur simple. | `CO2-Dokument Lieferanten` | `Lieferanten CO2e-Dokument` | P0 | Très aligné produit, limites visibles. |
| `/de/co2-bilanz-vs-co2-bescheinigung/` | Différencier bilan complet et attestation. | `CO2-Bilanz vs CO2-Bescheinigung` | `keine vollständige CO2-Bilanz` | P0 | Page clé anti-surpromesse. |
| `/de/bank-esg-unterlagen-kmu/` | Dossier bancaire ESG PME. | `Bank ESG Unterlagen KMU` | `CO2 Unterlagen Bank` | P1 | Aucune acceptation bancaire garantie. |
| `/de/versicherung-esg-unterlagen-kmu/` | Dossier assurance ESG PME. | `Versicherung ESG Unterlagen KMU` | `CO2 Unterlagen Versicherung` | P1 | Aucune réduction ni acceptation garantie. |

## 9. Choix réglementaires et wording

| Sujet | Décision wording | Formulation à éviter | Formulation prudente | Source |
| --- | --- | --- | --- | --- |
| CSRD | Mentionner comme contexte, jamais comme conformité produit. | `CSRD-konform`, `erfüllt die CSRD-Pflicht` | `nicht als CSRD-Bericht geeignet` | Regulatory Scan |
| ESRS | Distinguer attestation et reporting ESRS complet. | `ESRS-konform`, `Nachhaltigkeitsbericht nach ESRS` | `kein ESRS-Reporting` | Regulatory Scan |
| EU Taxonomy | Ne pas suggérer alignement taxonomique. | `taxonomiekonform` | `keine EU-Taxonomie-Berichterstattung` | Regulatory Scan |
| Green Claims | Éviter claims de performance environnementale. | `klimaneutral`, `CO2-neutral`, `emissionsfrei` | `indikative CO2e-Schätzung` | Regulatory Scan |
| Marchés publics | Positionner comme support documentaire seulement. | `garantiert akzeptiert`, `Vergabe-konform` | `unterstützendes CO2e-Dokument` | Regulatory Scan, Route Map |
| Banques / ESG | Aucune promesse d'acceptation ou de score. | `von Banken anerkannt`, `ESG-Score verbessert` | `für einfache ESG- oder CO2e-bezogene Bankunterlagen` | Regulatory Scan |
| Assurances / ESG | Aucune réduction ou acceptation garantie. | `garantierte Annahme`, `Risikoprüfung` | `für einfache Unterlagen gegenüber Versicherern` | Regulatory Scan |
| DSGVO / RGPD | Transparence, minimisation, processeurs nécessaires. | `keine Datenverarbeitung durch Dritte`, `DSGVO-zertifiziert` | `keine Speicherung detaillierter Finanzdaten durch Certif-Scope` | Regulatory Scan, Translation Memory |
| Méthode spend-based | Expliquer une estimation fondée sur dépenses agrégées. | `vollständige CO2-Bilanz`, `physische Vollerhebung` | `ausgabenbasierte Emissionsschätzung` | Country Pack, Regulatory Scan |
| Limites méthodologiques | Afficher les limites près des résultats et CTAs. | `garantiert genau`, `rechtssicherer Nachweis` | `keine vollständige Treibhausgasbilanz` | Regulatory Scan, Translation Memory |

## 10. Adaptations produit décidées pour plus tard

Ces adaptations sont décidées comme sujets à traiter uniquement quand `/de/` sera créé. Rien n'est implémenté dans cette PR.

- `defaultCountry = DE`
- `defaultAttestationLocale = de`
- verify URL locale : `/de/verify/`, à arbitrer contre la route publique validée `/de/pruefen/` avant implémentation pour éviter tout doublon.
- PDF en allemand
- clauses PDF allemandes
- generate allemand
- verify allemand
- success allemand si présent côté FR
- legal/privacy/terms allemands si présents côté FR
- JSON-LD `inLanguage: de-DE`
- canonical locale
- hreflang `de-DE`
- absence de liens FR involontaires

## 11. Risques acceptés et risques refusés

### Risques acceptés sous contrôle

| Risque | Condition d'acceptation | Mesure de contrôle |
| --- | --- | --- |
| Usage de `CO2-Bilanz` pour SEO | Seulement sur routes issues de l'inventaire FR. | Disclaimer fort : pas bilan GES complet. |
| Usage de `Nachweis` | Seulement avec limite documentaire et indicative. | Préférer `CO2e-Dokument` si ambigu. |
| Mention CSRD/ESRS | Seulement comme contexte explicatif. | Dire explicitement non reporting, non conformité. |
| Pages banque/assurance | Seulement comme cas d'usage documentaire. | Aucune acceptation garantie. |
| Verify allemand | Seulement si distinction QR / technique reste visible. | QR rapide, technique PDF signé séparée. |
| Privacy allemand | Seulement si processeurs nécessaires sont expliqués. | Pas de promesse "aucun tiers". |

### Risques refusés / bloquants

| Risque refusé | Décision | Gravité |
| --- | --- | --- |
| Promesse de conformité CSRD/ESRS | Refusé | Très élevée |
| Certification carbone | Refusé | Très élevée |
| Audit carbone | Refusé | Très élevée |
| Preuve officielle | Refusé | Très élevée |
| Reconnaissance par autorité publique | Refusé | Très élevée |
| Bilan carbone complet | Refusé | Très élevée |
| Neutralité carbone | Refusé | Très élevée |
| Garantie d'acceptation bancaire | Refusé | Élevée |
| Garantie d'acceptation assurance | Refusé | Élevée |
| Garantie d'acceptation appel d'offres | Refusé | Élevée |

## 12. Checklist avant création de `intl-de`

- [x] Inventaire FR source créé.
- [x] Country Pack Allemagne créé.
- [x] Regulatory Scan Allemagne créé.
- [x] Route Map Allemagne créée.
- [x] Translation Memory créée.
- [x] Registre de décisions Allemagne créé.
- [x] Aucune page `/de/` créée.
- [x] Aucune traduction site créée.
- [x] Aucune logique produit modifiée.
- [x] `fr-clean` intacte.
- [x] `main` intacte.
- [ ] Prochaine étape : créer `intl-de` depuis `certif-scope-international`, sans modifier de fichier.

## 13. Conclusion opérationnelle

Ce registre autorise uniquement la création future de la branche `intl-de` depuis `certif-scope-international`.

Il n'autorise pas encore la création de `/de/`, ni la traduction du site, ni l'ajout de sitemap, canonical, hreflang ou routes allemandes. Toute création future de pages allemandes devra rester limitée aux routes FR inventoriées, respecter le Country Pack Allemagne, le Regulatory Scan Allemagne, la Route Map Allemagne et la Translation Memory européenne.
