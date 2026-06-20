# Translation Memory européenne — Certif-Scope

## 1. Objectif du document

Cette Translation Memory européenne harmonise les termes récurrents de Certif-Scope entre les langues futures, sans remplacer les Country Packs locaux et sans imposer de traduction mot à mot.

Elle part de la version française comme source produit et structurelle, puis intègre les formulations allemandes validées par le Country Pack Allemagne, le Regulatory Scan Allemagne et la Route Map SEO Allemagne.

Cette mémoire est documentaire. Elle n'autorise pas encore la création de `/de/`, ne traduit pas le site, ne crée aucune route et ne modifie aucune logique produit.

## 2. Sources utilisées

| Source | Rôle | Statut |
| --- | --- | --- |
| `docs/localization/localization-inventory-fr-source.md` | Source produit, pages FR, composants, flux, PDF, verify, generate et zones visibles. | Source principale obligatoire. |
| `docs/localization/de-DE-country-pack.md` | Vocabulaire allemand prudent, termes interdits, style Allemagne et premières hypothèses. | Source DE validée pour terminologie. |
| `docs/localization/de-DE-regulatory-scan.md` | Limites réglementaires, risques, sources institutionnelles et termes dangereux Allemagne. | Source DE validée pour prudence réglementaire. |
| `docs/localization/de-DE-route-map.md` | Slugs DE proposés uniquement depuis routes FR existantes. | Source DE validée pour routes futures. |
| Structure réelle `/fr/` | Vérification des pages et parcours réellement présents côté FR. | Source structurelle complémentaire. |

## 3. Règles d’utilisation

- `/fr/` reste la source produit et structurelle.
- Chaque pays garde son Country Pack local.
- La Translation Memory ne doit jamais imposer une traduction mot à mot.
- Les termes réglementaires doivent rester prudents.
- Les termes interdits locaux priment toujours sur la mémoire centrale.
- Aucune langue précédente ne devient source pour une autre langue.
- L'allemand ne doit pas devenir source pour l'espagnol, l'italien, le portugais, le néerlandais ou le polonais.
- Aucun terme réglementaire ne doit être validé sans Country Pack et Regulatory Scan locaux.
- Aucune route ne doit être validée sans Route Map locale.
- Toute page, route, section, composant ou flux absent de l'inventaire FR source doit être marqué : "Non présent dans l’inventaire FR source — ne pas créer à cette étape."

## 4. Concepts produit principaux

| Concept FR | Définition FR contrôlée | DE validé | ES | IT | PT | NL | PL | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| attestation CO2e | Document CO2e indicatif, daté, structuré et transmissible. | `indikative CO₂e-Bescheinigung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Toujours éviter un terme équivalent à certification. |
| document carbone | Support documentaire carbone lisible, standardisé et archivable. | `CO₂e-Dokument` ou `CO₂-Nachweis` avec limite indicative | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `Nachweis` doit rester documentaire. |
| bilan carbone PME | Intention SEO FR autour du bilan PME, sans promettre un inventaire complet. | `CO₂-Bilanz für KMU` avec disclaimer fort | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À utiliser surtout dans les pages SEO de distinction. |
| estimation carbone | Résultat indicatif fondé sur les données déclarées. | `CO₂e-Schätzung` ou `Emissionsschätzung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Terme prudent. |
| empreinte carbone | Notion large à encadrer, car elle peut impliquer un périmètre complet. | `CO₂-Fußabdruck` avec précision indicative | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas promettre une empreinte exhaustive. |
| spend-based | Méthode fondée sur dépenses agrégées et facteurs d'émission monétaires. | `ausgabenbasierter Ansatz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Conserver l'explication méthodologique. |
| facteur d'émission | Coefficient utilisé pour convertir une dépense agrégée en estimation CO2e. | `Emissionsfaktor` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Valeur métier intangible. |
| émissions indirectes | Émissions associées indirectement à l'activité ou aux achats. | `indirekte Emissionen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas transformer en inventaire Scope 3 complet. |
| méthode indicative | Méthode d'estimation qui informe sans audit ni validation réglementaire. | `indikative Methode` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À lier à `nicht regulatorisch`. |
| document standardisé | Format homogène, lisible et transmissible. | `standardisiertes CO₂e-Dokument` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas suggérer norme officielle. |
| PDF vérifiable | PDF avec identifiant, QR code et éléments de contrôle documentaire. | `dokumentarisch prüfbares PDF` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Vérifiable ne signifie pas audité. |
| vérification indépendante | Contrôle documentaire ou technique pouvant être effectué par un tiers. | `dokumentarisch prüfbar` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Éviter `geprüft` seul. |
| intégrité du document | Cohérence du payload, du hash, de la signature et des éléments PDF. | `Dokumentintegrität` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Terme technique, pas promesse réglementaire. |
| attestation valable 1 an | Période de validité documentaire du PDF si règle produit maintenue. | `ein Jahr gültig` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas changer la règle produit. |
| données traitées localement | Traitement des données d'entrée selon le flux technique réel. | `lokale Verarbeitung der Eingabedaten, soweit technisch vorgesehen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À utiliser seulement si techniquement confirmé. |
| absence de conservation des données d'entrée | Pas de stockage des dépenses financières détaillées par Certif-Scope. | `keine Speicherung detaillierter Finanzdaten durch Certif-Scope` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas promettre absence de processeurs. |
| responsabilité des données côté utilisateur | L'utilisateur reste responsable des données saisies. | `Verantwortung für die eingegebenen Daten liegt beim Nutzer` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À conserver dans formulaire, PDF et conditions. |

## 5. Concepts d’usage commercial

| Concept FR | Usage contrôlé | DE validé | ES | IT | PT | NL | PL | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| demande client | Demande documentaire simple venant d'un client. | `Kundenanfrage` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas promettre acceptation. |
| dossier fournisseur | Documents demandés à un fournisseur ou transmis par un fournisseur. | `Lieferantenunterlagen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Terme B2B naturel. |
| appel d'offres | Dossier où une information carbone peut être demandée. | `Ausschreibung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Pas de garantie d'acceptation. |
| dossier bancaire | Pièces ESG ou CO2e demandées dans un contexte bancaire. | `Bankunterlagen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Pas de promesse bancaire. |
| dossier assurance | Pièces ESG ou CO2e demandées par un assureur. | `Unterlagen für die Geschäftsversicherung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Pas de promesse de prime ou d'acceptation. |
| procurement | Fonction achat ou commande publique/privée. | `Einkauf / Beschaffung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Employer selon contexte. |
| chaîne de valeur | Réseau de clients, fournisseurs et partenaires. | `Wertschöpfungskette` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas confondre avec conformité chaîne d'approvisionnement. |
| demande documentaire simple | Cas d'usage limité, sans audit exigé. | `einfache Dokumentationsanfrage` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Formulation recommandée Allemagne. |
| justificatif environnemental indicatif | Document de support, pas preuve officielle. | `unterstützender, indikativer Umweltnachweis` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Éviter officialité. |
| PME | Petite ou moyenne entreprise. | `KMU` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `Mittelstand` possible selon ton, pas comme équivalent juridique strict. |
| entreprise | Organisation cliente ou déclarante. | `Unternehmen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Terme générique. |
| donneur d'ordre | Client ou entité qui demande un document. | `Auftraggeber` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas créer nouvelle page. |
| fournisseur | Entreprise qui transmet un document à un client. | `Lieferant` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | B2B supply chain. |
| prestataire | Fournisseur de service ou sous-traitant. | `Dienstleister` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À adapter selon secteur. |

## 6. Concepts réglementaires prudents

| Concept FR | Formulation prudente FR | DE validé | ES | IT | PT | NL | PL | Risque |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| non réglementaire | Document non réglementaire, destiné à une demande documentaire simple. | `nicht regulatorisch` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| non audit | L'attestation n'est pas un audit carbone. | `kein Audit` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| non certification | L'attestation ne constitue pas une certification. | `keine Zertifizierung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| non reporting CSRD | Le document ne constitue pas un reporting CSRD. | `kein CSRD-Reporting` ou `nicht als CSRD-Bericht geeignet` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| non reporting ESRS | Le document ne constitue pas un reporting ESRS. | `kein ESRS-Reporting` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| non inventaire GES complet | L'attestation ne couvre pas un inventaire GES complet. | `keine vollständige Treibhausgasbilanz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| non preuve officielle | Le document n'est pas une preuve officielle reconnue par une autorité. | `keine behördliche Anerkennung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| non garantie de conformité | Aucune conformité réglementaire ou contractuelle n'est garantie. | `keine Konformitätsgarantie` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| estimation indicative | Résultat calculé comme estimation non définitive. | `indikative CO₂e-Schätzung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Moyen |
| limites méthodologiques | Limites de la méthode spend-based et des données déclarées. | `methodische Grenzen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| responsabilité utilisateur | L'utilisateur est responsable de l'exactitude des données saisies. | `Verantwortung des Nutzers für die eingegebenen Daten` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| usage documentaire | Usage limité à un support documentaire. | `dokumentarische Nutzung` ou `unterstützendes Dokument` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| ne remplace pas un audit carbone | L'attestation ne remplace pas un audit carbone. | `kein Ersatz für ein CO₂-Audit` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |
| ne remplace pas un bilan carbone complet | L'attestation ne remplace pas un bilan carbone complet. | `kein Ersatz für eine vollständige CO₂-Bilanz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Très élevé |

## 7. Termes interdits ou dangereux par langue

| Concept dangereux FR | DE interdit / dangereux | ES | IT | PT | NL | PL | Alternative prudente DE | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| certifié | `zertifiziert` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `standardisiert`, `dokumentarisch prüfbar` | Suggère validation externe. |
| certification | `Zertifizierung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `Bescheinigung`, `Dokument`, `Nachweis mit Hinweis auf Grenzen` | Ne pas vendre une certification. |
| audité | `auditiert`, `geprüft` seul | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `nicht auditiert`, `dokumentarisch prüfbar` | `geprüft` doit être borné. |
| conforme | `konform` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `im Kontext von`, `nicht regulatorisch` | Risque de conformité réglementaire. |
| conforme CSRD | `CSRD-konform` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `nicht als CSRD-Bericht geeignet` | Interdit comme promesse produit. |
| conforme ESRS | `ESRS-konform` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `kein ESRS-Reporting` | Interdit comme promesse produit. |
| preuve légale | `rechtlicher Nachweis`, `rechtsgültig` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `indikatives Dokument`, `dokumentarisch nutzbar` | Éviter validité juridique. |
| preuve réglementaire | `regulatorischer Nachweis` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `nicht regulatorisches Dokument` | Ne pas suggérer obligation officielle. |
| reconnu par l'État | `staatlich anerkannt`, `gesetzlich anerkannt` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `privat ausgestellte Bescheinigung` | Fausse reconnaissance officielle. |
| officiel | `offiziell`, `offiziell anerkannt` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `von Certif-Scope ausgestellt`, `standardisiert` | Ne pas suggérer autorité. |
| légalement valide | `rechtsgültig`, `rechtssicher` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `dokumentarisch nutzbar` | Promesse juridique excessive. |
| garantie | `garantiert`, `garantierte Konformität` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `kann unterstützen`, `keine Konformitätsgarantie` | Aucune garantie d'acceptation. |
| bilan carbone complet | `vollständige CO₂-Bilanz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `indikative CO₂e-Schätzung` | Produit non exhaustif. |
| audit carbone complet | `vollständiges Carbon Audit`, `auditierter CO₂-Nachweis` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `kein Carbon Audit`, `indikative CO₂e-Bescheinigung` | Produit non audit. |
| neutralité carbone | `klimaneutral`, `CO₂-neutral` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas utiliser. | Claim environnemental fort. |
| compensation carbone | `CO₂-Kompensation`, `kompensiert` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas utiliser. | Hors périmètre produit. |
| zéro émission | `Null Emissionen`, `emissionsfrei` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas utiliser. | Claim impossible à soutenir ici. |
| validé par autorité publique | `von Behörden validiert`, `behördlich anerkannt` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | `nicht behördlich validiert` | Pas de validation administrative. |

## 8. CTA et formulations commerciales contrôlées

| Intention FR | Formulation FR contrôlée | DE validé | ES | IT | PT | NL | PL | Risque |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| générer une attestation | Générer mon attestation carbone — 89 € | `CO₂e-Bescheinigung erstellen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| vérifier une attestation | Vérifier une attestation | `CO₂e-Bescheinigung prüfen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| comprendre la méthode | Consulter la méthodologie complète | `Methodik ansehen` ou `vollständige Methodik lesen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Moyen |
| consulter les limites | Comprendre les limites de l'attestation | `Grenzen verstehen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| voir les sources | Consulter les sources officielles | `offizielle Quellen ansehen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Moyen |
| obtenir un document carbone simple | Télécharger un exemple gratuit / obtenir un document standardisé | `ein einfaches CO₂e-Dokument erhalten` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Moyen |
| préparer un dossier fournisseur | Préparer un dossier fournisseur | `Lieferantenunterlagen vorbereiten` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| répondre à une demande client | Répondre à une demande client | `auf eine Kundenanfrage antworten` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Moyen |
| conserver une preuve vérifiable | Conserver un PDF vérifiable et archivable | `ein dokumentarisch prüfbares PDF aufbewahren` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |
| télécharger le PDF | Télécharger le PDF | `PDF herunterladen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Faible |
| vérifier l'intégrité | Vérifier l'intégrité du document | `Dokumentintegrität prüfen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Élevé |

## 9. Routes et slugs contrôlés

| Route FR source | Route DE validée par route map | ES | IT | PT | NL | PL | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/fr/` | `/de/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Accueil Allemagne futur. |
| `/fr/generate/` | `/de/erstellen/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Génération, sans changer calcul/prix. |
| `/success` | `/de/erfolg/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Parcours success partagé inventorié. |
| `/fr/cancel/` | `/de/abbruch/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Paiement annulé. |
| `/fr/pricing/` | `/de/preise/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Prix, sans modifier l'offre. |
| `/fr/contact/` | `/de/kontakt/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Contact institutionnel. |
| `/fr/product/` | `/de/produkt/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Page produit. |
| `/fr/product/compliance/` | `/de/grenzen-und-compliance/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Limites et conformité prudente. |
| `/fr/product/methodology/` | `/de/methodik/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Méthode spend-based. |
| `/fr/verify/` | `/de/pruefen/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Contrôle QR documentaire. |
| `/fr/verify/demo/` | `/de/pruefen/demo/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Démo de vérification. |
| `/fr/verify/technical/` | `/de/technische-pruefung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Vérification technique avancée. |
| `/fr/bilan-carbone-pme/` | `/de/co2-bilanz-kmu/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Pilier SEO PME. |
| `/fr/bilan-carbone-pme/cout/` | `/de/co2-bilanz-kmu/kosten/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Coût. |
| `/fr/bilan-carbone-pme/exemple/` | `/de/co2-bilanz-kmu/beispiel/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Exemple. |
| `/fr/bilan-carbone-pme/modele-pdf/` | `/de/co2-bilanz-kmu/pdf-vorlage/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Modèle PDF, non officiel. |
| `/fr/bilan-carbone-pme/obligation/` | `/de/co2-bilanz-kmu/pflicht/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Obligations, avec prudence. |
| `/fr/bilan-carbone-appel-offres/` | `/de/co2-angaben-ausschreibung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Appels d'offres. |
| `/fr/bilan-carbone-fournisseur/` | `/de/co2-nachweis-lieferanten/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Fournisseur. |
| `/fr/bilan-carbone-entreprise/` | `/de/co2-fussabdruck-unternehmen/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Entreprise, pas empreinte complète. |
| `/fr/attestation-carbone/` | `/de/co2-bescheinigung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Attestation carbone. |
| `/fr/attestation-co2-pme/` | `/de/co2-bescheinigung-kmu/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Attestation PME. |
| `/fr/scope-1-2-3-explication/` | `/de/scope-1-2-3-erklaert/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Pédagogie scopes. |
| `/fr/bilan-carbone-banque-pme/` | `/de/bank-esg-unterlagen-kmu/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Banque, sans acceptation garantie. |
| `/fr/bilan-carbone-assurance-pme/` | `/de/versicherung-esg-unterlagen-kmu/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Assurance, sans acceptation garantie. |
| `/fr/document-carbone-fournisseur/` | `/de/co2-dokument-lieferanten/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Document fournisseur. |
| `/fr/difference-bilan-carbone-attestation-co2e/` | `/de/co2-bilanz-vs-co2-bescheinigung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Différenciation clé. |
| `/fr/why-companies-ask/` | `/de/warum-unternehmen-co2-angaben-anfordern/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Hub pédagogique. |
| `/fr/why-companies-ask/guide/` | `/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Guide. |
| `/fr/why-companies-ask/attestation-carbone-fournisseur/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Guide fournisseur. |
| `/fr/why-companies-ask/attestation-carbone-appel-offres/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Guide appel d'offres. |
| `/fr/why-companies-ask/attestation-carbone-pme/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Guide PME. |
| `/fr/why-companies-ask/exigences-co2-banques-assurances/` | `/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Banques/assurances. |
| `/fr/why-companies-ask/preuve-carbone-entreprise/` | `/de/warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Preuve/document carbone. |
| `/fr/partners/` | `/de/partner/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Partenaires. |
| `/fr/privacy/` | `/de/datenschutz/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Confidentialité. |
| `/fr/terms/` | `/de/agb/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Conditions. |
| `/fr/cookies/` | `/de/cookies/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Cookies. |
| `/fr/legal/` | `/de/impressum/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Mentions légales. |
| `/fr/data-processing/` | `/de/datenverarbeitung/` | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Traitement des données. |

## 10. Formulations PDF contrôlées

| Élément PDF FR | DE validé / à utiliser plus tard | ES | IT | PT | NL | PL | Note de prudence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| titres | `indikative CO₂e-Bescheinigung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas utiliser `Zertifikat`. |
| sous-titres | `nicht regulatorisch`, `indikative Methode`, `keine Zertifizierung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Limites visibles dans le PDF. |
| clauses | `kein Audit`, `kein CSRD- oder ESRS-Reporting`, `keine vollständige Treibhausgasbilanz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Clauses non promissives. |
| méthode | `ausgabenbasierter Ansatz`, `auf aggregierten Ausgaben basierend` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas modifier la formule. |
| limites | `methodische Grenzen`, `indikative CO₂e-Schätzung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Pas d'inventaire GES complet. |
| footer | `von Certif-Scope ausgestellt`, `privat ausgestellte Bescheinigung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Éviter officialité. |
| vérification | `dokumentarisch prüfbar`, `technische Prüfung der signierten PDF-Elemente` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Distinguer QR et technique. |
| QR code | `dokumentarischer Schnellcheck per QR-Code` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne remplace pas la vérification technique avancée. |
| mentions juridiques | `nicht regulatorisch`, `keine behördliche Anerkennung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Aucune preuve officielle. |
| langue par défaut | `de` seulement dans la future branche langue si validé | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas modifier `DEFAULT_ATTESTATION_LOCALE` dans cette PR. |
| URL verify | Route verify locale future à valider par route map et implémentation | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | à valider par route map locale | Ne pas modifier les URLs maintenant. |

Tout élément PDF non identifié dans l'inventaire FR source doit être traité comme : "Non présent dans l’inventaire FR source — ne pas créer à cette étape."

## 11. Formulations verify / generate contrôlées

### Generate

| Élément FR | DE validé / à utiliser plus tard | ES | IT | PT | NL | PL | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Titre page génération | `indikative CO₂e-Bescheinigung erstellen` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Dérivé de `/fr/generate/`. |
| Secteurs | Labels sectoriels à adapter en allemand naturel | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas changer les catégories métier sans décision dédiée. |
| Pays | `Frankreich`, `Deutschland`, `Andere EU` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas changer le flux pays. |
| Langues d'attestation | `Französisch`, `Englisch`, `Deutsch` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | PDF i18n distinct du site. |
| CTA paiement | `CO₂e-Bescheinigung erstellen — 89 €` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas modifier le prix. |
| CTA crédit | `CO₂e-Bescheinigung erstellen (1 Guthaben)` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas modifier les packs ou crédits. |
| Résumé | `geschätztes Ergebnis`, `Dokument`, `Jahr`, `Lieferung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Résumé avant paiement. |
| Confidentialité | `keine Speicherung detaillierter Finanzdaten durch Certif-Scope` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Ne pas surpromettre sur les processeurs. |
| Case obligatoire | `indikativ`, `kein Audit`, `nicht regulatorisch`, `kein Ersatz für CSRD/ESRS` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Clause indispensable. |

### Verify

| Élément FR | DE validé / à utiliser plus tard | ES | IT | PT | NL | PL | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Contrôle documentaire rapide | `dokumentarischer Schnellcheck` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | QR code uniquement. |
| Payload détecté | `Prüfdatensatz erkannt` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | À valider en contexte UI. |
| Données lisibles | `lesbare Daten` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Données du payload. |
| Cohérence documentaire | `dokumentarische Kohärenz` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Pas validation officielle. |
| Limites de la vérification QR | `Grenzen der QR-Prüfung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | QR ne remplace pas vérification technique. |
| Vérification technique avancée | `erweiterte technische PDF-Prüfung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | PDF signé, payload, hash, signature, clé publique. |
| Attestation indicative | `indikative Bescheinigung` | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | à valider par Country Pack local | Non audit, non réglementaire. |

## 12. Règles de mise à jour de la mémoire

- Toute nouvelle langue doit compléter ses colonnes après son Country Pack.
- Aucun terme ne doit être validé sans Country Pack.
- Tout terme réglementaire doit être validé après Regulatory Scan.
- Toute route doit être validée après Route Map locale.
- Les modifications doivent rester documentaires tant que `/de/` n'est pas créé.
- Ne jamais remplacer une formulation prudente par une promesse plus forte.
- Ne jamais utiliser l'allemand validé comme source directe pour une autre langue.
- Ne jamais ajouter de route absente de l'inventaire FR source.
- Ne jamais modifier prix, Stripe, checkout, packs, calcul, facteurs carbone, PDF runtime, signatures, clés ou API depuis cette mémoire.

## 13. Checklist avant utilisation pour `/de/`

- [ ] Inventaire FR source lu.
- [ ] Country Pack Allemagne validé.
- [ ] Regulatory Scan Allemagne validé.
- [ ] Route Map Allemagne validée.
- [ ] Translation Memory créée.
- [ ] Termes interdits DE intégrés.
- [ ] Formulations prudentes DE intégrées.
- [ ] Routes DE uniquement issues de routes FR existantes.
- [ ] Aucune page nouvelle inventée.
- [ ] Aucune traduction du site réalisée à cette étape.
- [ ] Aucune modification produit, prix, Stripe, checkout, calcul, facteurs carbone, PDF runtime, signatures, clés ou API.
- [ ] Prochaine étape : registre de décisions Allemagne ou création contrôlée de branche `intl-de` selon procédure validée.

## 14. Conclusion opérationnelle

Cette Translation Memory autorise uniquement la préparation documentaire de la localisation allemande et des futures localisations européennes.

Elle n'autorise pas encore la création de `/de/`, ni la traduction du site, ni la création d'autres langues, ni l'ajout de routes, ni la modification des pages françaises.

Elle doit rester un outil de cohérence terminologique. Les Country Packs, Regulatory Scans et Route Maps locaux restent obligatoires avant toute validation publique d'une nouvelle langue.
