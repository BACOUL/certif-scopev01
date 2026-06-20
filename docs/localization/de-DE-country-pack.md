# Country Pack — Allemagne — de-DE

## 1. Objectif du Country Pack

Ce Country Pack prépare la future localisation allemande de Certif-Scope pour le marché Allemagne, avec la locale `de-DE`, sans créer immédiatement de site `/de/`, sans traduire les pages existantes et sans modifier la logique produit.

Il sert de document de cadrage pour les prochaines PR internationales : regulatory scan Allemagne, route map Allemagne, translation memory, registre de décisions et QA finale. Il complète l'inventaire source français déjà présent dans `docs/localization/localization-inventory-fr-source.md`.

Ce fichier n'autorise pas encore la création de pages allemandes. Il définit seulement le vocabulaire, les risques, les routes probables, les références à vérifier et les garde-fous nécessaires avant toute implémentation.

## 2. Périmètre pays et locale

| Élément | Valeur retenue |
| --- | --- |
| Pays cible | Allemagne |
| Locale | `de-DE` |
| Préfixe URL | `/de/` |
| Langue | Allemand d'Allemagne |
| Devise | EUR |
| Pays par défaut formulaire | `DE` |
| Locale d'attestation par défaut | `de` |
| URL officielle future | `https://www.certif-scope.com/de/` |
| Source structurelle | `/fr/` |
| Branche source future | `certif-scope-international` |
| Branche langue future | `intl-de` |

Décision de cadrage : l'Allemagne doit être traitée comme marché spécifique `de-DE`, et non comme simple traduction germanophone générique. Les formulations doivent viser les PME allemandes, le Mittelstand, les demandes B2B, les dossiers fournisseurs, bancaires, assurantiels et les appels d'offres.

## 3. Positionnement produit à conserver

Certif-Scope EST :

| Positionnement | Formulation opérationnelle pour l'Allemagne |
| --- | --- |
| Une attestation CO2e indicative | Un document qui présente une estimation CO2e indicative, datée et structurée. |
| Un document carbone standardisé | Un format documentaire homogène, lisible et transmissible. |
| Une estimation spend-based | Une estimation fondée sur des dépenses agrégées et des facteurs d'émission monétaires. |
| Un PDF vérifiable et archivable | Un PDF avec identifiant, QR code, éléments de contrôle documentaire et conservation possible par le destinataire. |
| Un outil utile pour demandes client, fournisseur, banque, assurance et appels d'offres | Un support documentaire rapide pour répondre à une demande simple lorsque aucun audit carbone complet n'est exigé. |

Certif-Scope N'EST PAS :

| À exclure | Raison |
| --- | --- |
| Un audit carbone | Aucun audit externe, aucune vérification terrain, aucune revue exhaustive des données. |
| Une certification carbone | Ne pas utiliser `Zertifikat` ou `Zertifizierung` comme promesse produit. |
| Un reporting CSRD ou ESRS | Le document ne constitue pas un reporting réglementaire. |
| Un inventaire GES complet | Le périmètre n'est pas un GHG inventory complet Scope 1, 2 et 3. |
| Une preuve réglementaire officielle | Ne pas présenter le PDF comme preuve exigée ou reconnue par une autorité. |
| Une garantie de conformité | Aucune conformité CSRD, ESRS, Taxonomie UE ou droit allemand n'est garantie. |
| Un document reconnu officiellement par l'État allemand | Ne pas suggérer une reconnaissance par une administration allemande. |

## 4. Terminologie allemande recommandée

| Concept FR | Terme allemand recommandé | Niveau de prudence | Commentaire d'usage |
| --- | --- | --- | --- |
| Attestation CO2e | `indikative CO₂e-Bescheinigung` | Élevé | Terme recommandé pour éviter `Zertifikat`. Toujours accompagner de `indikativ`. |
| Document carbone | `CO₂e-Dokument` ou `CO₂-Nachweis` | Moyen | `Nachweis` est naturel en B2B, mais préciser qu'il est indicatif. |
| Bilan carbone PME | `CO₂-Bilanz für KMU` | Élevé | Bon mot-clé SEO, mais ne pas l'utiliser comme promesse produit complète. |
| Estimation carbone | `CO₂e-Schätzung` ou `Emissionsschätzung` | Faible | Terme prudent et naturel pour le produit. |
| Empreinte carbone | `CO₂-Fußabdruck` | Moyen | Mot courant, mais peut impliquer un périmètre plus large que le document. |
| Spend-based | `ausgabenbasierter Ansatz` | Faible | Formulation claire ; ajouter `auf aggregierten Ausgaben basierend`. |
| Non réglementaire | `nicht regulatorisch` ou `nicht als regulatorische Meldung gedacht` | Élevé | À utiliser dans les disclaimers et pages conformité. |
| Non audit | `kein Audit` ou `nicht geprüft` | Élevé | Éviter de laisser `geprüft` seul ; toujours dans une négation claire. |
| Vérifiable | `dokumentarisch prüfbar` | Moyen | Préférer `dokumentarisch` pour limiter la portée de la vérification. |
| Données traitées localement | `lokal verarbeitete Daten` | Moyen | À clarifier techniquement dans privacy/formulaire si exact dans le flux. |
| Sans conservation des données d'entrée | `ohne Speicherung der Eingabedaten` | Élevé | À réserver aux dépenses détaillées si c'est la promesse exacte. |
| Valable 1 an | `ein Jahr gültig` | Faible | Utilisable dans PDF et page produit si la règle produit est maintenue. |
| Appel d'offres | `Ausschreibung` | Faible | Terme naturel pour procurement public/privé. |
| Dossier fournisseur | `Lieferantenunterlagen` | Faible | Plus naturel que traduction littérale de dossier. |
| Dossier bancaire | `Bankunterlagen` | Faible | À utiliser pour demandes de financement ou ESG banking. |
| Assurance professionnelle | `Unterlagen für die Geschäftsversicherung` | Moyen | Plus large et naturel que traduction littérale. Adapter selon contexte. |
| Procurement | `Einkauf / Beschaffung` | Faible | Les deux termes sont compréhensibles en B2B. |
| Émissions indirectes | `indirekte Emissionen` | Faible | Terme standard. |
| Facteur d'émission | `Emissionsfaktor` | Faible | Terme technique standard. |
| Méthode indicative | `indikative Methode` | Moyen | Ajouter `standardisiert` si besoin de rassurer sans promettre certification. |

## 5. Termes allemands interdits ou dangereux

| Terme allemand risqué | Équivalent français | Raison du risque | Alternative prudente recommandée |
| --- | --- | --- | --- |
| `zertifiziert` | certifié | Suggère une validation externe ou officielle. | `standardisiert`, `dokumentarisch prüfbar` |
| `Zertifizierung` | certification | Implique un processus de certification. | `Bescheinigung`, `Dokument`, `Nachweis mit Hinweis auf Grenzen` |
| `auditiert` | audité | Suggère audit indépendant. | `nicht auditiert`, `ohne externes Audit` |
| `geprüft` | vérifié/audité | Peut suggérer une validation complète. | `dokumentarisch prüfbar`, `technisch prüfbar` selon contexte |
| `konform` | conforme | Peut être lu comme conformité réglementaire. | `orientiert an`, `im Kontext von`, `nicht regulatorisch` |
| `garantierte Konformität` | conformité garantie | Promesse juridique excessive. | `keine Konformitätsgarantie` |
| `offiziell` | officiel | Suggère reconnaissance administrative. | `standardisiert`, `von Certif-Scope ausgestellt` |
| `rechtsgültig` | légalement valide | Promesse juridique trop forte. | `dokumentarisch nutzbar`, `zur internen/externen Dokumentation` |
| `rechtlicher Nachweis` | preuve légale | Peut être perçu comme preuve opposable. | `indikatives Dokument`, `unterstützender Nachweis` |
| `regulatorischer Nachweis` | preuve réglementaire | Risque de confusion avec obligation légale. | `nicht regulatorisches Dokument` |
| `staatlich anerkannt` | reconnu par l'État | Faux niveau de reconnaissance. | `privat ausgestellte Bescheinigung` |
| `CSRD-konform` | conforme CSRD | Promesse de conformité CSRD. | `nicht als CSRD-Bericht geeignet` |
| `ESRS-konform` | conforme ESRS | Promesse de conformité ESRS. | `kein ESRS-Reporting` |
| `vollständige CO₂-Bilanz` | bilan carbone complet | Produit non exhaustif. | `indikative CO₂e-Schätzung` |
| `vollständiges Carbon Audit` | audit carbone complet | Suggère audit complet. | `kein Carbon Audit` |
| `klimaneutral` | neutralité carbone | Claim environnemental fort et très encadré. | Ne pas utiliser. |
| `CO₂-Kompensation` | compensation carbone | Hors périmètre produit. | Ne pas utiliser. |
| `Null Emissionen` | zéro émission | Claim impossible à soutenir ici. | Ne pas utiliser. |
| `von Behörden validiert` | validé par autorité publique | Suggère validation administrative. | `nicht behördlich validiert` |

Objectif : empêcher toute promesse excessive dans la future version `/de/`, surtout autour de conformité, certification, audit, reconnaissance officielle et performance environnementale.

## 6. Termes prudents à privilégier

| Expression allemande recommandée | Usage conseillé | Contexte |
| --- | --- | --- |
| `indikativ` | Marquer la nature non définitive de l'estimation. | Hero, PDF, formulaire, légal. |
| `standardisiert` | Rassurer sur le format sans promettre une norme officielle. | Produit, PDF, pricing. |
| `dokumentarisch prüfbar` | Décrire la vérification QR et les éléments lisibles. | Verify, PDF, FAQ. |
| `archivierbar` | Expliquer que le PDF peut être conservé par le destinataire. | Produit, appels d'offres, fournisseurs. |
| `auf Ausgaben basierend` | Expliquer le calcul spend-based simplement. | Méthodologie, formulaire. |
| `nicht regulatorisch` | Encadrer l'usage du document. | Legal, compliance, PDF. |
| `kein Audit` | Écarter toute confusion avec audit carbone. | FAQ, compliance, formulaire. |
| `Schätzung` | Positionner le résultat carbone comme estimation. | Résultat, SEO, PDF. |
| `Arbeitsdokument` | Décrire un document de travail utilisable dans des échanges simples. | Pages use case. |
| `für einfache Anfragen` | Limiter le cas d'usage. | Hero, use cases, FAQ. |
| `für Kunden-, Lieferanten-, Bank-, Versicherungs- und Ausschreibungsunterlagen` | Décrire les usages B2B cibles. | Homepage, business pages, PDF usage. |
| `Verantwortung für die eingegebenen Daten liegt beim Nutzer` | Clarifier la responsabilité utilisateur. | Formulaire, terms, PDF. |
| `lokale Verarbeitung der Eingabedaten` | Décrire la promesse de traitement local si confirmée par le flux technique. | Privacy, formulaire. |
| `keine Speicherung detaillierter Finanzdaten` | Maintenir la promesse privacy-by-design. | Privacy, formulaire, PDF. |

## 7. SEO Allemagne — mots-clés initiaux

Ces mots-clés préparent le mapping SEO. Ils ne promettent aucun classement et doivent être validés par une recherche SEO dédiée avant publication.

| Mot-clé allemand | Intention de recherche | Priorité | Page future probable | Risque de promesse excessive | Note |
| --- | --- | --- | --- | --- | --- |
| `CO2-Bescheinigung` | Obtenir un document carbone simple. | Haute | `/de/co2-bescheinigung/` | Moyen | Associer à `indikativ`, éviter `Zertifikat`. |
| `CO2-Nachweis Unternehmen` | Fournir un justificatif CO2 entreprise. | Haute | `/de/co2-nachweis-unternehmen/` | Élevé | `Nachweis` doit rester documentaire et indicatif. |
| `CO2-Nachweis KMU` | Répondre à une demande PME. | Haute | `/de/co2-nachweis-kmu/` | Élevé | Page centrale pour Mittelstand. |
| `CO2-Dokument Lieferanten` | Dossier fournisseur. | Haute | `/de/co2-dokument-lieferanten/` | Moyen | Naturel pour supply chain. |
| `Nachhaltigkeitsnachweis Lieferanten` | Preuve durabilité fournisseur. | Moyenne | `/de/nachhaltigkeitsnachweis-lieferanten/` | Élevé | Clarifier que le document porte sur CO2e indicatif. |
| `CO2-Angaben Ausschreibung` | Répondre à une demande d'appel d'offres. | Haute | `/de/co2-angaben-ausschreibung/` | Moyen | Ne pas suggérer conformité marchés publics. |
| `CO2-Bilanz KMU` | Chercher une solution bilan carbone PME. | Haute | `/de/co2-bilanz-kmu/` | Élevé | Page de distinction bilan complet vs attestation indicative. |
| `CO2-Fußabdruck Unternehmen` | Comprendre/obtenir empreinte carbone entreprise. | Moyenne | `/de/co2-fussabdruck-unternehmen/` | Élevé | Préciser estimation spend-based. |
| `Emissionsschätzung Unternehmen` | Estimation émissions entreprise. | Moyenne | `/de/emissionsschaetzung-unternehmen/` | Faible | Bon alignement produit. |
| `Scope 3 Schätzung` | Estimation Scope 3. | Moyenne | `/de/scope-3-schaetzung/` | Moyen | Éviter de promettre inventaire Scope 3 complet. |
| `CSRD KMU Deutschland` | Comprendre obligations PME et CSRD. | Moyenne | `/de/csrd-kmu-deutschland/` | Très élevé | Page explicative, pas page produit promesse. |
| `ESRS KMU` | Comprendre ESRS pour PME. | Moyenne | `/de/esrs-kmu/` | Très élevé | Nécessite regulatory scan avant publication. |
| `Lieferkette CO2 Nachweis` | Demandes supply chain. | Haute | `/de/lieferkette-co2-nachweis/` | Élevé | Éviter "conforme Lieferkettengesetz" sans analyse. |
| `Bank ESG Unterlagen Unternehmen` | Dossier bancaire ESG. | Moyenne | `/de/bank-esg-unterlagen-unternehmen/` | Moyen | Positionner comme pièce indicative. |
| `Versicherung ESG Unterlagen Unternehmen` | Dossier assurance ESG. | Moyenne | `/de/versicherung-esg-unterlagen-unternehmen/` | Moyen | Ne pas promettre acceptation par assureur. |

## 8. Routes allemandes proposées

Les routes ci-dessous sont des propositions pour la future route map. Elles ne doivent pas être créées dans cette PR.

| Route FR source | Route allemande proposée | Intention SEO | Priorité | Remarque |
| --- | --- | --- | --- | --- |
| `/fr/` | `/de/` | Accueil Allemagne | P0 | Page de synthèse, CTAs locaux, disclaimers visibles. |
| `/fr/generate/` | `/de/erstellen/` | Générer une attestation | P0 | Peut être plus naturel que `/de/generate/`. |
| `/fr/verify/` | `/de/pruefen/` | Vérifier un PDF/QR | P0 | Alternative possible : `/de/verify/` si cohérence technique prioritaire. |
| `/fr/pricing/` | `/de/preise/` | Prix | P0 | Afficher EUR et limites. |
| `/fr/product/methodology/` | `/de/methodik/` | Méthode spend-based | P0 | Central pour confiance Allemagne. |
| `/fr/product/` | `/de/produkt/` | Produit | P1 | Garder sobriété B2B. |
| `/fr/product/compliance/` | `/de/grenzen-und-compliance/` | Limites et conformité | P0 | Éviter promesse de conformité. |
| `/fr/verify/technical/` | `/de/technische-pruefung/` | Vérification technique | P1 | À aligner avec signature/PDF. |
| `/fr/legal/` | `/de/impressum/` | Mentions légales Allemagne | P0 | En Allemagne, `Impressum` est attendu. |
| `/fr/privacy/` | `/de/datenschutz/` | Confidentialité/DSGVO | P0 | Adapter RGPD/DSGVO. |
| `/fr/terms/` | `/de/agb/` | Conditions | P0 | Terme courant pour conditions générales. |
| `/fr/cookies/` | `/de/cookies/` | Cookies | P1 | Maintenir absence tracking marketing. |
| `/fr/contact/` | `/de/kontakt/` | Contact | P1 | Simple et standard. |
| `/fr/bilan-carbone-pme/` | `/de/co2-bilanz-kmu/` | SEO bilan carbone PME | P0 | Page prudente : différence bilan complet vs estimation. |
| `/fr/attestation-carbone/` | `/de/co2-bescheinigung/` | SEO attestation carbone | P0 | Éviter `Zertifikat`. |
| `/fr/attestation-co2-pme/` | `/de/co2-bescheinigung-kmu/` | SEO attestation PME | P0 | Route naturelle et ciblée. |
| `/fr/bilan-carbone-fournisseur/` | `/de/co2-nachweis-lieferanten/` | Dossier fournisseur | P0 | Fort potentiel B2B. |
| `/fr/bilan-carbone-appel-offres/` | `/de/co2-angaben-ausschreibung/` | Appels d'offres | P0 | À relire avec procurement allemand. |
| `/fr/bilan-carbone-entreprise/` | `/de/co2-fussabdruck-unternehmen/` | Guide entreprise | P1 | Attention à ne pas promettre empreinte complète. |
| `/fr/scope-1-2-3-explication/` | `/de/scope-1-2-3-erklaert/` | Pédagogie scopes | P1 | Conserver pédagogie sans surpromesse. |
| `/fr/bilan-carbone-banque-pme/` | `/de/bank-esg-unterlagen-kmu/` | Banque/ESG PME | P1 | Ne pas promettre acceptation bancaire. |
| `/fr/bilan-carbone-assurance-pme/` | `/de/versicherung-esg-unterlagen-kmu/` | Assurance/ESG PME | P1 | À valider avec wording assurantiel allemand. |
| `/fr/document-carbone-fournisseur/` | `/de/co2-dokument-lieferanten/` | Document fournisseur | P0 | Route très alignée avec le produit. |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `/de/co2-bilanz-vs-co2-bescheinigung/` | Différenciation | P0 | Page clé pour réduire le risque juridique. |
| `/fr/why-companies-ask/` | `/de/warum-unternehmen-co2-angaben-anfordern/` | Hub demande carbone | P1 | Long mais explicite ; route map à arbitrer. |
| `/fr/partners/` | `/de/partner/` | Partenaires | P2 | Après pages principales. |

## 9. Références réglementaires et institutionnelles à prendre en compte

Ce tableau prépare les sujets à vérifier dans la PR de regulatory scan. Il ne constitue pas encore une analyse juridique complète.

| Sujet | Référence Allemagne / UE | Implication pour le wording | Niveau de risque |
| --- | --- | --- | --- |
| CSRD | Directive UE CSRD et transposition allemande à vérifier | Ne jamais dire `CSRD-konform`. Présenter Certif-Scope comme non substitutif. | Très élevé |
| ESRS | Standards ESRS via actes délégués UE / EFRAG | Ne pas présenter l'attestation comme reporting ESRS. | Très élevé |
| EU Taxonomy | Taxonomie UE | Ne pas suggérer alignement Taxonomie. | Élevé |
| Green Claims / allégations environnementales | Cadre UE sur allégations environnementales à vérifier | Éviter claims de performance : neutralité, zéro émission, compensation. | Très élevé |
| Règles allemandes de concurrence et communication environnementale | UWG et jurisprudence sur claims environnementaux à vérifier | Ton sobre, preuves, limites visibles. | Très élevé |
| Marchés publics / procurement | Vergaberecht allemand et exigences d'acheteurs | Ne pas promettre acceptation en appel d'offres public. | Élevé |
| Exigences fournisseurs | Pratiques supply chain et demandes ESG | Positionner comme document indicatif pour demande simple. | Moyen |
| Banques / ESG | Pratiques ESG bancaires et BaFin si pertinent | Ne pas promettre acceptation bancaire. | Moyen |
| Assurances / ESG | Demandes ESG assurantielles | Ne pas promettre acceptation par assureur. | Moyen |
| RGPD / DSGVO | RGPD européen et cadre allemand de protection des données | Pages privacy et data-processing en allemand nécessaires. | Élevé |
| Traitement local des données | À vérifier dans le flux technique réel | Ne pas surpromettre si des processeurs reçoivent des données nécessaires. | Élevé |
| Absence de conservation des données d'entrée | Promesse actuelle Certif-Scope sur dépenses détaillées | Préciser : pas de conservation des dépenses financières détaillées par Certif-Scope. | Élevé |
| Limites d'une estimation spend-based | Méthode basée sur dépenses agrégées | Expliquer que c'est une estimation indicative, pas mesure physique exhaustive. | Élevé |

## 10. Autorités, organismes et sources officielles à vérifier ensuite

Sources à mobiliser dans le futur regulatory scan Allemagne, sans analyse détaillée dans ce Country Pack :

| Source à vérifier | Utilité prévue |
| --- | --- |
| Commission européenne | CSRD, Taxonomie UE, Green Claims, politiques durabilité. |
| EFRAG | ESRS, ressources d'orientation, contexte VSME/SME. |
| EUR-Lex | Textes officiels UE : directives, règlements, actes délégués. |
| Umweltbundesamt | Références environnementales allemandes, vocabulaire institutionnel. |
| Bundesministerium für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz | Contexte environnement et communication institutionnelle allemande. |
| Bundesministerium für Wirtschaft und Klimaschutz | Contexte PME, économie, climat, transformation. |
| Bundesnetzagentur, si pertinent | À vérifier seulement si un sujet énergie/réseaux devient pertinent. |
| Datenschutzkonferenz / autorités de protection des données | Interprétation allemande DSGVO et lignes directrices privacy. |
| BaFin, si pertinent | Contexte financier, ESG, banque/assurance, sans en faire une promesse produit. |
| Organismes marchés publics allemands | À identifier précisément : portails fédéraux, achats durables, guides procurement. |
| Kompetenzstelle für nachhaltige Beschaffung, si confirmée | Achats publics durables et vocabulaire procurement. |

## 11. Adaptations de ton et de style pour l'Allemagne

Ton recommandé :

- institutionnel ;
- précis ;
- sobre ;
- non marketing excessif ;
- très clair sur les limites ;
- orienté conformité documentaire sans promettre de conformité réglementaire ;
- orienté PME / Mittelstand ;
- vocabulaire professionnel B2B.

Principes de rédaction `de-DE` :

- Préférer des phrases claires et explicites à des slogans.
- Placer les limites près des CTAs et des résultats.
- Expliquer `ausgabenbasiert` sans jargon inutile.
- Utiliser `KMU` et `Mittelstand` selon le contexte : `KMU` pour SEO/structure, `Mittelstand` pour tonalité business.
- Éviter la rhétorique de performance environnementale.
- Éviter les promesses d'acceptation par un client, une banque, un assureur ou une administration.

Erreurs à éviter :

- ton trop commercial ;
- promesse de conformité ;
- promesse officielle ;
- simplification excessive des obligations CSRD/ESRS ;
- confusion entre estimation indicative et bilan carbone complet ;
- traduction de `attestation` par `Zertifikat` ;
- traduction de `bilan carbone` comme si le produit réalisait un audit complet ;
- oubli du caractère non audit, non réglementaire et non certifiant.

## 12. Adaptations produit à prévoir plus tard

Adaptations futures à planifier, sans les implémenter dans ce Country Pack :

| Adaptation future | Zone probable | Remarque |
| --- | --- | --- |
| `defaultCountry = DE` | Formulaire generate | Seulement dans la branche langue future. |
| `defaultAttestationLocale = de` | Formulaire / PDF | Déjà une locale PDF `de` existe, mais le site allemand n'existe pas encore. |
| URL verify locale `/de/verify/` ou `/de/pruefen/` | Vérification | Arbitrer cohérence technique vs SEO dans la route map. |
| PDF en allemand | `src/lib/attestation-i18n/de.ts`, PDF runtime | Ne pas modifier le runtime sans PR dédiée. |
| Clauses PDF allemandes | PDF dictionnaire | Relecture juridique nécessaire. |
| Page success allemande | `src/app/success/**` ou future structure locale | Éviter liens FR involontaires. |
| Page cancel allemande si présente | Future route `/de/...` | Garder messages sobres. |
| Messages d'erreur allemands | Formulaire/API visibles | Extraire sans toucher logique métier. |
| JSON-LD `inLanguage: de-DE` | Metadata pages allemandes | Ajouter seulement quand pages publiées. |
| Canonical `/de/` | SEO | Ne pas créer avant la page réelle. |
| Hreflang `de-DE` | SEO | Ajouter seulement quand équivalent réel existe. |
| Sitemap avec URL `/de/` | `public/sitemap.xml` | Ajouter uniquement après publication. |
| Absence de liens FR involontaires | Header/footer/CTA | QA obligatoire. |
| Formulaire generate en allemand | Future `/de/erstellen/` | Labels oui, calcul non. |
| Pages légales allemandes | Datenschutz, AGB, Impressum, Cookies | À préparer après regulatory scan. |
| Footer/header/navigation allemands | Layout locale | Sans modifier `/fr/`. |

## 13. Risques spécifiques Allemagne

| Risque | Description | Gravité | Mesure de prévention |
| --- | --- | --- | --- |
| Confusion avec certification carbone officielle | `Zertifikat` ou `zertifiziert` peut être interprété comme certification. | Très élevée | Utiliser `indikative CO₂e-Bescheinigung`, bannir les claims officiels. |
| Confusion avec audit carbone | L'utilisateur peut croire à une vérification externe. | Très élevée | Répéter `kein Audit`, `nicht auditiert`, `keine externe Prüfung`. |
| Confusion avec bilan GHG complet | `CO₂-Bilanz` peut impliquer Scope 1/2/3 exhaustif. | Très élevée | Expliquer estimation spend-based et périmètre limité. |
| Promesse CSRD/ESRS excessive | Risque de wording `CSRD-konform` ou `ESRS-konform`. | Très élevée | Bannir ces termes, créer page explicative prudente. |
| Claims environnementaux trop forts | Neutralité, compensation ou zéro émission. | Très élevée | Interdire `klimaneutral`, `CO₂-Kompensation`, `Null Emissionen`. |
| Mauvaise traduction de "attestation" | `Zertifikat` surpromet. | Élevée | Utiliser `Bescheinigung`, `Dokument`, `Nachweis` avec limites. |
| Mauvaise traduction de "bilan carbone" | Peut faire croire à une prestation complète. | Élevée | Pour SEO seulement, avec page de différence claire. |
| Liens internes FR involontaires | Parcours allemand renvoie vers `/fr/`. | Moyenne | QA liens, header, footer, success, verify, sample. |
| PDF ou QR en mauvaise langue | Attestation allemande mais QR/page verify FR ou anglais. | Élevée | Définir règles locale PDF + verify avant `/de/`. |
| Données personnelles ou financières mal expliquées | DSGVO et confiance Mittelstand. | Élevée | Pages Datenschutz/Data-processing allemandes précises. |
| Attentes élevées du Mittelstand sur précision et preuve | Public allemand peut exiger preuves, méthode, limites. | Élevée | Ton sobre, références, méthode détaillée, disclaimers visibles. |

## 14. Checklist avant création de `/de/`

- [ ] Inventaire FR source lu.
- [ ] Country Pack Allemagne validé.
- [ ] Regulatory scan Allemagne créé.
- [ ] Route map Allemagne créée.
- [ ] Translation memory mise à jour.
- [ ] Décisions Allemagne enregistrées.
- [ ] Branche `intl-de` créée depuis `certif-scope-international`.
- [ ] Aucun fichier FR modifié.
- [ ] Aucune logique produit modifiée.
- [ ] Mapping des routes validé.
- [ ] Termes interdits connus.
- [ ] Termes prudents validés.
- [ ] Règles SEO `de-DE` prêtes.
- [ ] Règles PDF/verify/success prêtes.
- [ ] Pages légales allemandes prêtes ou planifiées avec responsable de validation.
- [ ] Hreflang/canonical/sitemap définis uniquement pour pages réellement créées.
- [ ] QA liens internes et absence de routes FR involontaires planifiée.

## 15. Conclusion opérationnelle

Ce Country Pack autorise uniquement la préparation de la PR suivante : regulatory scan Allemagne, puis route map Allemagne. Il n'autorise pas encore la création de `/de/`, ni la traduction du site, ni la modification du formulaire, du PDF runtime, de Stripe, des API, des prix, des facteurs carbone ou des pages françaises.

La future localisation allemande doit rester progressive : d'abord cadrage pays, ensuite vérification réglementaire, ensuite route map, ensuite mémoire de traduction et décisions, puis seulement création contrôlée des routes allemandes dans une branche dédiée `intl-de`.
