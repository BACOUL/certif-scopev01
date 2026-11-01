export type RegulatoryArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type RegulatoryArticleData = {
  path: string;
  metaTitle: string;
  shortTitle: string;
  title: string;
  description: string;
  intro: string;
  takeaways: string[];
  sections: RegulatoryArticleSection[];
  sources: { label: string; url: string }[];
};

// Editorial sources checked 2026-11-01: Légifrance, DAJ and BOAMP.
// Be precise about regulatory dates (21 and 22 Aug 2026) and never
// claim that a spend-based attestation automatically meets tender requirements.
export const articles: Record<"obligations" | "guide" | "exemple", RegulatoryArticleData> = {
  "obligations": {
    "path": "/fr/marches-publics-2026-obligations-environnementales/",
    "metaTitle": "Marchés publics 2026 : obligations environnementales des PME | Certif-Scope",
    "shortTitle": "Marchés publics 2026 : nouvelles règles",
    "title": "Marchés publics 2026 : ce qui change sur les critères environnementaux pour les PME",
    "description": "Critères environnementaux des marchés publics depuis août 2026 : règles, dates, pièces à examiner et limites d'une attestation CO₂e indicative.",
    "intro": "Depuis août 2026, les règles d'attribution des nouveaux marchés publics renforcent la place de l'environnement. Pour une PME candidate, l'enjeu n'est pas de produire automatiquement un « bilan carbone » : il est de lire les critères du marché et d'apporter les preuves adaptées.",
    "takeaways": [
      "Les nouvelles dispositions concernent les consultations lancées à compter de leur entrée en vigueur, pas une réécriture automatique des contrats déjà signés.",
      "Au moins un critère d'attribution prend en compte les caractéristiques environnementales de l'offre ; cela n'impose pas systématiquement un bilan carbone de l'entreprise.",
      "La preuve utile dépend du règlement de consultation, du mémoire technique demandé et des caractéristiques du marché.",
      "Un PDF CO₂e estimatif fondé sur les dépenses ne remplace pas les pièces imposées par l'acheteur."
    ],
    "sections": [
      {
        "title": "Qu'est-ce qui a changé en août 2026 ?",
        "paragraphs": [
          "L'article L. 2152-7 du Code de la commande publique, dans sa version applicable depuis le 22 août 2026, prévoit qu'au moins un critère d'attribution d'un marché prend en compte les caractéristiques environnementales de l'offre. Le dispositif réglementaire de l'article R. 2152-7 a évolué le 21 août 2026. Ces dates proches correspondent à des textes distincts.",
          "La Direction des affaires juridiques du ministère de l'Économie a publié le 23 juillet 2026 des fiches pratiques pour expliquer la prise en compte des considérations environnementales dans les critères et les conditions d'exécution. La règle vise d'abord la manière dont l'acheteur prépare et évalue son marché ; elle ne crée pas à elle seule une obligation générale de bilan GES pour chaque petite entreprise."
        ],
        "note": "Pour apprécier votre cas, reportez-vous aux documents de consultation propres au marché. Les secteurs, les marchés particuliers et les dates de lancement peuvent modifier l'analyse."
      },
      {
        "title": "Cela impose-t-il un bilan carbone à toutes les PME ?",
        "paragraphs": [
          "Non. La présence d'un critère environnemental n'est pas synonyme de demande obligatoire de bilan carbone de l'entreprise. Un acheteur peut évaluer les déplacements associés à la prestation, la gestion des déchets, la durabilité des matériaux, la sobriété énergétique ou d'autres caractéristiques liées au marché.",
          "Il faut distinguer l'empreinte globale d'une entreprise de l'empreinte d'une prestation, d'un produit ou d'un chantier. Ce ne sont pas les mêmes périmètres de calcul. Une estimation d'émissions obtenue à partir de dépenses annuelles ne fournit pas automatiquement les données exigées pour un chantier spécifique."
        ],
        "bullets": [
          "Si le marché demande un plan de gestion des déchets, répondez sur les flux, les moyens et les justificatifs prévus pour cette prestation.",
          "Si l'acheteur demande une empreinte produit, vérifiez les unités, les facteurs, les frontières de calcul et les documents exigés.",
          "Si une mesure complète des émissions selon une norme est exigée, une estimation indicative ne suffit pas."
        ]
      },
      {
        "title": "Quels documents lire avant de préparer une réponse ?",
        "paragraphs": [
          "Commencez par le règlement de consultation (RC), qui précise les critères de jugement, leur éventuelle pondération et les documents à transmettre. Analysez ensuite le cahier des clauses techniques particulières (CCTP) et le cahier des clauses administratives particulières (CCAP), lorsqu'ils sont présents, pour connaître les engagements concrets à respecter.",
          "Le mémoire technique, les annexes environnementales et les éventuelles questions-réponses publiées par l'acheteur peuvent compléter ces exigences. Si le dossier utilise l'expression « bilan carbone » sans dire quelle méthode ou quel périmètre est attendu, une demande de clarification sur la plateforme de consultation est plus sûre que d'acheter une pièce au hasard."
        ],
        "bullets": [
          "Identifier le critère et sa pondération exacte, sans supposer qu'un pourcentage standard s'applique à tous les marchés.",
          "Repérer si la preuve porte sur l'entreprise, le produit ou la prestation.",
          "Noter la méthode, la période, l'unité et l'existence d'une vérification tierce.",
          "Vérifier le calendrier et les modalités de dépôt de la réponse."
        ]
      },
      {
        "title": "Que peut faire une petite entreprise sans service RSE ?",
        "paragraphs": [
          "Une PME peut constituer un dossier de preuves à partir de ce qu'elle maîtrise déjà : politique de déplacements, quantités de déchets réellement suivies, fiches techniques de matériaux, factures d'énergie, pratiques de réemploi, caractéristiques des véhicules utilisés pour le marché. Ces informations doivent être exactes, liées au marché et présentées de manière compréhensible.",
          "Lorsque le destinataire demande seulement une information carbone indicative à l'échelle de l'entreprise et accepte explicitement cette méthode, une estimation agrégée peut être un complément documentaire. Elle n'est pas une garantie de recevabilité ni de points supplémentaires. Avant d'engager une dépense, faites confirmer par le destinataire que le document correspond à son exigence."
        ]
      },
      {
        "title": "Exemple concret et prochaines étapes",
        "paragraphs": [
          "Un avis BOAMP publié fin octobre 2026 prévoit un critère environnemental pondéré à 10 % faisant référence à plusieurs sujets, dont le bilan carbone, les déchets, la mobilité, la nature des matériaux et la durabilité. Il illustre la diversité des éléments pouvant être évalués, sans constituer une règle générale de pondération.",
          "Pour aller plus loin, lisez notre guide sur la préparation d'un critère environnemental et notre analyse pédagogique de cet avis. L'objectif est de répondre exactement au dossier, pas de remplacer toute la démarche environnementale par un seul PDF."
        ]
      }
    ],
    "sources": [
      {
        "label": "Code de la commande publique — article L. 2152-7 (Légifrance)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975064"
      },
      {
        "label": "Code de la commande publique — article R. 2152-7 (Légifrance)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045739587"
      },
      {
        "label": "Ministère de l'Économie — fiches pratiques, 23 juillet 2026",
        "url": "https://www.economie.gouv.fr/daj/considerations-environnementales-et-sociales-dans-les-marches-publics-publication-de-fiches-pratiques-pour-repondre-aux-nouvelles-exigences-de-la"
      },
      {
        "label": "BOAMP — avis 26-104757 (exemple de critère à 10 %)",
        "url": "https://www.boamp.fr/pages/avis/?q=idweb%3A26-104757"
      }
    ]
  },
  "guide": {
    "path": "/fr/critere-environnemental-appel-offres-comment-repondre/",
    "metaTitle": "Critère environnemental appel d'offres : répondre en 2026 | Certif-Scope",
    "shortTitle": "Répondre à un critère environnemental",
    "title": "Critère environnemental d'un appel d'offres : comment préparer une réponse utile ?",
    "description": "Guide PME 2026 : lire le DCE, identifier les preuves environnementales attendues, structurer le mémoire technique et éviter les justificatifs inadaptés.",
    "intro": "Votre règlement de consultation prévoit une notation environnementale ? Voici une méthode pratique pour analyser les attentes, produire un mémoire technique solide et choisir les documents à joindre, sans confondre preuve de prestation et bilan carbone d'entreprise.",
    "takeaways": [
      "Une note environnementale se prépare à partir du RC et du CCTP, pas d'un modèle de réponse universel.",
      "La pondération et les sous-critères doivent être relevés exactement dans le dossier.",
      "Chaque engagement environnemental doit être vérifiable et lié à la prestation.",
      "Une attestation indicative peut être un complément, uniquement si son périmètre répond à la demande et si l'acheteur l'accepte."
    ],
    "sections": [
      {
        "title": "Étape 1 — Repérer le critère et ses sous-critères",
        "paragraphs": [
          "Ouvrez le règlement de consultation (RC) et cherchez les expressions « valeur environnementale », « développement durable », « performance environnementale », « bilan carbone », « déchets », « mobilité » et « matériaux ». Copiez la pondération réelle, par exemple 10 % lorsque le dossier le prévoit, et relevez tous les sous-critères connus.",
          "Un acheteur peut noter la qualité d'un plan de gestion des déchets plutôt qu'un total d'émissions. Le texte de l'article L. 2152-7 oblige à prendre en compte des caractéristiques environnementales de l'offre, mais ne fixe pas une pondération générale de 10 %."
        ],
        "note": "Un avis public résume parfois les critères. Le RC et les pièces du DCE restent indispensables pour connaître la grille complète de notation."
      },
      {
        "title": "Étape 2 — Déterminer le périmètre de la preuve",
        "paragraphs": [
          "Demandez-vous ce qui sera évalué : l'entreprise dans son ensemble, une prestation particulière, un chantier, une livraison, un véhicule ou un produit. Une empreinte globale de PME n'a pas la même fonction qu'un calcul d'émissions associé à un lot de travaux.",
          "Ne transposez pas les chiffres d'un document d'entreprise à une prestation sans explication méthodologique. La transparence sur les hypothèses, les données et leurs limites est souvent plus utile qu'un chiffre très précis mais invérifiable."
        ],
        "bullets": [
          "Pour les déchets : organisation du tri, filières, bordereaux ou procédures et volumes quand ils existent.",
          "Pour la mobilité : trajets, véhicules affectés, modes de transport, regroupement des tournées et indicateurs associés.",
          "Pour les matériaux : origine, durabilité, fiches produits, réemploi, contenu recyclé et preuves prévues.",
          "Pour les émissions : périmètre, unité (kgCO₂e ou tCO₂e), période, méthode et éventuelle exigence de vérification."
        ]
      },
      {
        "title": "Étape 3 — Construire un mémoire technique lisible",
        "paragraphs": [
          "La partie environnementale peut suivre un plan simple : objectif du critère ; mesures concrètes ; moyens réellement disponibles ; indicateurs de suivi ; annexes justificatives. Évitez les engagements généraux comme « nous réduirons nos émissions » sans élément qui permet de savoir comment.",
          "Une entreprise de maintenance peut, par exemple, présenter la planification des déplacements, les consignes de collecte et le suivi des pièces usagées. Une entreprise de construction peut détailler les filières de déchets et les justificatifs des matériaux. Ces exemples ne remplacent pas les exigences propres au marché."
        ],
        "bullets": [
          "Répondre dans le même ordre que les questions du RC et du cadre de mémoire technique.",
          "Chiffrer seulement ce qui est étayé ; définir le mode de calcul des indicateurs.",
          "Joindre les attestations et preuves exactement demandées, sans annexes inutiles.",
          "Faire relire les engagements par la personne qui exécutera réellement le marché."
        ]
      },
      {
        "title": "Étape 4 — Décider si un document CO₂e indicatif a une place",
        "paragraphs": [
          "Une attestation CO₂e indicative fondée sur les dépenses de l'entreprise peut documenter un ordre de grandeur général. Elle ne calcule pas automatiquement l'empreinte de chaque chantier ni les scopes d'un inventaire GES complet. Sa vérifiabilité documentaire ne correspond pas à une vérification de fond par un organisme tiers.",
          "Si le dossier demande un bilan GES selon un référentiel, un facteur d'émission précis, une analyse du cycle de vie ou une donnée par unité de produit, ne présentez pas une attestation indicative comme équivalente. Si le format est libre, interrogez l'acheteur pour vérifier qu'il est accepté et utile à son analyse."
        ]
      },
      {
        "title": "Étape 5 — Vérifier avant dépôt",
        "paragraphs": [
          "Avant d'envoyer le dossier, passez une dernière revue : les intitulés des pièces correspondent-ils au DCE ? Les informations sont-elles cohérentes entre le mémoire et les annexes ? Avez-vous bien répondu aux questions environnementales plutôt que de vous limiter à une brochure d'entreprise ?",
          "Enfin, gardez la trace des sources et des hypothèses. Dans les marchés soumis aux nouvelles dispositions de 2026, la dimension environnementale est incontournable dans les critères d'attribution, mais une bonne réponse se construit marché par marché."
        ],
        "bullets": [
          "Comparer toutes les pièces avec la liste de documents demandés.",
          "Contrôler que le format et la méthode annoncés ne sont pas surévalués.",
          "Vérifier les dates, signatures, durées de validité et restrictions éventuelles.",
          "Déposer les documents avant la date limite sur la plateforme indiquée."
        ]
      }
    ],
    "sources": [
      {
        "label": "Code de la commande publique — article L. 2152-7 (Légifrance)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975064"
      },
      {
        "label": "Code de la commande publique — article R. 2152-7 (Légifrance)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045739587"
      },
      {
        "label": "Ministère de l'Économie — fiches pratiques, 23 juillet 2026",
        "url": "https://www.economie.gouv.fr/daj/considerations-environnementales-et-sociales-dans-les-marches-publics-publication-de-fiches-pratiques-pour-repondre-aux-nouvelles-exigences-de-la"
      }
    ]
  },
  "exemple": {
    "path": "/fr/exemple-marche-public-critere-environnemental-10-pour-cent/",
    "metaTitle": "Marché public : exemple de critère environnemental à 10 % | Certif-Scope",
    "shortTitle": "Exemple d'un critère environnemental à 10 %",
    "title": "Un marché public avec un critère environnemental à 10 % : ce que l'avis permet de comprendre",
    "description": "Analyse d'un avis BOAMP d'octobre 2026 : critère environnemental à 10 %, bilan carbone, déchets, mobilité, matériaux et limites d'une attestation CO₂e.",
    "intro": "Un avis BOAMP publié fin octobre 2026 prévoit un critère environnemental pondéré à 10 %, évoquant notamment le bilan carbone, la mobilité, les déchets et les matériaux. Ce cas réel aide à comprendre ce qu'un candidat doit vérifier, sans transformer une pondération particulière en règle générale.",
    "takeaways": [
      "Le taux de 10 % correspond à cet avis précis, et non à un minimum imposé par la réglementation.",
      "Le critère environnemental recouvre plusieurs aspects : le bilan carbone n'est pas le seul élément mentionné.",
      "L'avis ne suffit pas à connaître toutes les pièces ni les barèmes détaillés : le DCE et le RC restent déterminants.",
      "Une estimation CO₂e annuelle de l'entreprise ne prouve pas à elle seule la performance environnementale de la prestation."
    ],
    "sections": [
      {
        "title": "Que dit concrètement l'avis BOAMP ?",
        "paragraphs": [
          "Dans l'avis n° 26-104757, le critère environnemental est décrit avec plusieurs dimensions : valorisation des déchets, bilan carbone, mobilité, nature des matériaux et durabilité. Sa pondération affichée est de 10 %. Il s'agit d'un exemple daté d'utilisation de critères environnementaux dans une consultation publique.",
          "Le libellé ne signifie pas que le bilan carbone, pris isolément, représente 10 % de la note. Il regroupe plusieurs aspects environnementaux. Il ne permet pas non plus de déduire qu'une attestation standardisée est exigée ou acceptée."
        ],
        "note": "Le texte intégral de l'avis est accessible sur BOAMP (lien en fin d'article). Les conditions détaillées doivent être vérifiées dans le dossier de consultation publié par l'acheteur."
      },
      {
        "title": "Comment interpréter la pondération de 10 % ?",
        "paragraphs": [
          "Une pondération de 10 % indique la place de ce critère dans la grille d'évaluation du marché concerné, sous réserve des modalités précisées dans le RC. Elle n'impose pas à toutes les entreprises de calculer leur empreinte carbone, ni à tous les acheteurs de retenir la même pondération.",
          "Depuis août 2026, les textes de la commande publique renforcent la prise en compte des caractéristiques environnementales de l'offre. Ils ne définissent pas, dans l'article L. 2152-7, un seuil uniforme de 10 % pour tous les marchés."
        ]
      },
      {
        "title": "Que doit préparer une PME candidate ?",
        "paragraphs": [
          "La première étape consiste à récupérer le DCE et à relire le règlement de consultation. Pour chacun des sujets figurant dans l'avis, l'entreprise peut recenser les pratiques qu'elle appliquera effectivement au marché, puis réunir les preuves disponibles.",
          "Il est essentiel de séparer les engagements généraux de l'entreprise des moyens qui seront mobilisés pour la prestation. Dire « nous recyclons » est moins informatif que décrire les déchets concernés, l'organisation prévue et la preuve de suivi qui pourra être transmise."
        ],
        "bullets": [
          "Déchets : modalités de tri, de collecte, de valorisation et justification si demandée.",
          "Mobilité : organisation des déplacements liés au marché et moyens de réduction.",
          "Matériaux : caractéristiques techniques et environnementales utiles au chantier ou à la fourniture.",
          "Carbone : méthode et périmètre seulement si le RC demande une mesure d'émissions, en distinguant entreprise et prestation."
        ]
      },
      {
        "title": "Est-ce qu'un PDF CO₂e de l'entreprise suffit ?",
        "paragraphs": [
          "Pas nécessairement, et l'avis ne permet pas de l'affirmer. Une attestation basée sur les dépenses annuelles estime un total indicatif. Elle ne démontre pas à elle seule la valorisation des déchets, les caractéristiques de matériaux ou les émissions exactes d'un chantier.",
          "Si le RC demande un document carbone indicatif global, une telle pièce peut être étudiée comme annexe, à condition de présenter sa méthode et ses limites et de vérifier que l'acheteur l'accepte. Si un bilan GES complet, une analyse de cycle de vie ou une preuve spécifique à l'offre est demandé, il faut fournir les justificatifs attendus."
        ]
      },
      {
        "title": "Ce que cet exemple change dans la préparation commerciale",
        "paragraphs": [
          "La bonne question à poser avant de produire un document n'est pas « avez-vous un bilan carbone ? », mais « quelle information environnementale le règlement de consultation attend-il, pour quel périmètre et dans quel format ? ».",
          "Cet avis montre l'intérêt d'une démarche ciblée : partir d'une demande précise, identifier les preuves nécessaires et vérifier la compatibilité du livrable. Vous pouvez ensuite consulter le guide sur les règles de 2026 et la méthode de réponse à un critère environnemental."
        ]
      }
    ],
    "sources": [
      {
        "label": "BOAMP — avis de marché n° 26-104757",
        "url": "https://www.boamp.fr/pages/avis/?q=idweb%3A26-104757"
      },
      {
        "label": "Code de la commande publique — article L. 2152-7 (Légifrance)",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975064"
      },
      {
        "label": "Ministère de l'Économie — fiches pratiques, 23 juillet 2026",
        "url": "https://www.economie.gouv.fr/daj/considerations-environnementales-et-sociales-dans-les-marches-publics-publication-de-fiches-pratiques-pour-repondre-aux-nouvelles-exigences-de-la"
      }
    ]
  }
};
