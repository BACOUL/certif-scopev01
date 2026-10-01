export const EU_HOME_LOCALES = [
  "bg", "hr", "cs", "da", "nl", "en", "et", "fi", "fr", "de", "el", "hu",
  "ga", "it", "lv", "lt", "mt", "pl", "pt", "ro", "sk", "sl", "es", "sv",
] as const;

export type EuHomeLocale = (typeof EU_HOME_LOCALES)[number];

export const EU_LOCALE_NAMES: Record<EuHomeLocale, string> = {
  bg: "Български", hr: "Hrvatski", cs: "Čeština", da: "Dansk", nl: "Nederlands",
  en: "English", et: "Eesti", fi: "Suomi", fr: "Français", de: "Deutsch",
  el: "Ελληνικά", hu: "Magyar", ga: "Gaeilge", it: "Italiano", lv: "Latviešu",
  lt: "Lietuvių", mt: "Malti", pl: "Polski", pt: "Português", ro: "Română",
  sk: "Slovenčina", sl: "Slovenščina", es: "Español", sv: "Svenska",
};

export const EU_OG_LOCALES: Record<EuHomeLocale, string> = {
  bg: "bg_BG", hr: "hr_HR", cs: "cs_CZ", da: "da_DK", nl: "nl_NL",
  en: "en_GB", et: "et_EE", fi: "fi_FI", fr: "fr_FR", de: "de_DE",
  el: "el_GR", hu: "hu_HU", ga: "ga_IE", it: "it_IT", lv: "lv_LV",
  lt: "lt_LT", mt: "mt_MT", pl: "pl_PL", pt: "pt_PT", ro: "ro_RO",
  sk: "sk_SK", sl: "sl_SI", es: "es_ES", sv: "sv_SE",
};

export const EU_HOME_PATHS = Object.fromEntries(
  EU_HOME_LOCALES.map((locale) => [locale, `/${locale}/`]),
) as Record<EuHomeLocale, string>;

export const HOME_LANGUAGE_ALTERNATES = Object.fromEntries([
  ...EU_HOME_LOCALES.map((locale) => [
    locale,
    `https://www.certif-scope.com/${locale}/`,
  ]),
  ["x-default", "https://www.certif-scope.com/fr/"],
]);

export function isEuHomeLocale(value: string): value is EuHomeLocale {
  return EU_HOME_LOCALES.includes(value as EuHomeLocale);
}

type HomeCopy = {
  title: string;
  description: string;
  tagline: string;
  hero: string;
  intro: string;
  cta: string;
  sample: string;
  fitTitle: string;
  fitText: string;
  contentsTitle: string;
  contents: string[];
  stepsTitle: string;
  steps: string[];
  limitTitle: string;
  limitText: string;
};

export const EU_HOME_COPY: Record<Exclude<EuHomeLocale, "fr" | "en" | "de">, HomeCopy> = {
  bg: {
    title: "Ориентировъчен CO₂e документ за МСП",
    description: "Стандартизиран, датиран и проверим ориентировъчен CO₂e PDF, базиран на декларирани разходи, за прости документални заявки от клиенти, доставчици, банки и търгове.",
    tagline: "За прости документални заявки",
    hero: "Имате заявка за въглеродни данни? Подгответе ориентировъчен CO₂e документ.",
    intro: "Certif-Scope превръща декларираните годишни разходи в агрегирана ориентировъчна оценка и PDF, който може да бъде архивиран и споделен, когато получателят приема този метод.",
    cta: "Подгответе удостоверение — 89 €", sample: "Изтеглете безплатен пример",
    fitTitle: "Кога е подходящо?", fitText: "За предварителни ESG проверки, заявки от доставчици, банки или търгове без задължително предписана методика. Потвърдете очакванията на получателя преди поръчка.",
    contentsTitle: "Какво съдържа документът", contents: ["Агрегиран резултат в tCO₂e", "Фирма, референтна година и дата на издаване", "Описана методика и ограничения", "Уникален идентификатор за документална проверка"],
    stepsTitle: "Три стъпки", steps: ["Въведете фирмата и годишните външни разходи.", "Прегледайте данните, годината и оценката преди плащане.", "Изтеглете и архивирайте PDF след потвърждение."],
    limitTitle: "Важно ограничение", limitText: "Това е ориентировъчна оценка на база разходи. Тя не е пълен инвентар на парникови газове, въглероден одит, външна верификация или отчет по CSRD/ESRS.",
  },
  hr: {
    title: "Indikativni CO₂e dokument za MSP-ove",
    description: "Standardizirani, datirani i provjerljivi indikativni CO₂e PDF temeljen na prijavljenim troškovima za jednostavne zahtjeve klijenata, dobavljača, banaka i natječaja.",
    tagline: "Za jednostavne dokumentacijske zahtjeve",
    hero: "Trebate odgovoriti na zahtjev za ugljičnim podacima? Pripremite indikativni CO₂e dokument.",
    intro: "Certif-Scope pretvara prijavljene godišnje troškove u agregiranu indikativnu procjenu i PDF koji se može arhivirati i dijeliti kada primatelj prihvaća takav pristup.",
    cta: "Pripremi potvrdu — 89 €", sample: "Preuzmi besplatni primjer",
    fitTitle: "Kada je prikladno?", fitText: "Za početni ESG screening, upite dobavljača, banaka ili natječaje bez propisane obvezne metode. Prije narudžbe potvrdite očekivanja primatelja.",
    contentsTitle: "Što dokument sadrži", contents: ["Agregirani rezultat u tCO₂e", "Tvrtku, referentnu godinu i datum izdavanja", "Opis metode i ograničenja", "Jedinstveni identifikator za dokumentacijsku provjeru"],
    stepsTitle: "Tri koraka", steps: ["Unesite tvrtku i godišnje vanjske troškove.", "Provjerite podatke, godinu i procjenu prije plaćanja.", "Nakon potvrde preuzmite i arhivirajte PDF."],
    limitTitle: "Važno ograničenje", limitText: "Ovo je indikativna procjena na temelju troškova. Nije potpuni inventar stakleničkih plinova, ugljični audit, vanjska verifikacija ni CSRD/ESRS izvještaj.",
  },
  cs: {
    title: "Orientační CO₂e dokument pro malé a střední podniky",
    description: "Standardizované, datované a ověřitelné orientační CO₂e PDF založené na deklarovaných výdajích pro jednoduché požadavky zákazníků, dodavatelů, bank a výběrových řízení.",
    tagline: "Pro jednoduché dokumentační požadavky",
    hero: "Potřebujete odpovědět na požadavek na uhlíkové údaje? Připravte orientační CO₂e dokument.",
    intro: "Certif-Scope převádí deklarované roční výdaje na souhrnný orientační odhad a PDF, které lze archivovat a sdílet, pokud příjemce tuto metodu akceptuje.",
    cta: "Připravit potvrzení — 89 €", sample: "Stáhnout bezplatný vzor",
    fitTitle: "Kdy je vhodný?", fitText: "Pro předběžný ESG screening, požadavky dodavatelů, bank nebo tendry bez povinně předepsané metody. Před objednáním potvrďte očekávání příjemce.",
    contentsTitle: "Co dokument obsahuje", contents: ["Souhrnný výsledek v tCO₂e", "Firmu, referenční rok a datum vydání", "Popsanou metodu a omezení", "Jedinečný identifikátor pro dokumentační kontrolu"],
    stepsTitle: "Tři kroky", steps: ["Zadejte firmu a roční externí výdaje.", "Před platbou zkontrolujte údaje, rok a odhad.", "Po potvrzení stáhněte a archivujte PDF."],
    limitTitle: "Důležité omezení", limitText: "Jde o orientační odhad založený na výdajích. Nejde o úplnou inventuru emisí, uhlíkový audit, externí ověření ani reporting CSRD/ESRS.",
  },
  da: {
    title: "Vejledende CO₂e-dokument til SMV'er",
    description: "Et standardiseret, dateret og verificerbart vejledende CO₂e-PDF baseret på oplyste udgifter til enkle dokumentationskrav fra kunder, leverandører, banker og udbud.",
    tagline: "Til enkle dokumentationskrav",
    hero: "Har du fået en forespørgsel om CO₂-data? Forbered et vejledende CO₂e-dokument.",
    intro: "Certif-Scope omregner oplyste årlige udgifter til et samlet vejledende estimat og en PDF, der kan arkiveres og deles, når modtageren accepterer denne metode.",
    cta: "Forbered attest — 89 €", sample: "Download gratis eksempel",
    fitTitle: "Hvornår passer det?", fitText: "Til indledende ESG-screening, leverandørkrav, bankforespørgsler eller udbud uden en obligatorisk metode. Bekræft modtagerens forventninger før bestilling.",
    contentsTitle: "Dokumentet indeholder", contents: ["Samlet resultat i tCO₂e", "Virksomhed, referenceår og udstedelsesdato", "Beskrivelse af metode og begrænsninger", "Unikt ID til dokumentkontrol"],
    stepsTitle: "Tre trin", steps: ["Indtast virksomheden og årlige eksterne udgifter.", "Kontrollér data, år og estimat før betaling.", "Download og arkivér PDF'en efter bekræftelse."],
    limitTitle: "Vigtig begrænsning", limitText: "Dette er et vejledende udgiftsbaseret estimat. Det er ikke et fuldt drivhusgasregnskab, en CO₂-audit, ekstern verifikation eller CSRD/ESRS-rapportering.",
  },
  nl: {
    title: "Indicatief CO₂e-document voor kmo's",
    description: "Een gestandaardiseerde, gedateerde en controleerbare indicatieve CO₂e-PDF op basis van opgegeven uitgaven voor eenvoudige vragen van klanten, leveranciers, banken en aanbestedingen.",
    tagline: "Voor eenvoudige documentverzoeken",
    hero: "Een verzoek om CO₂-informatie ontvangen? Bereid uw indicatieve CO₂e-document voor.",
    intro: "Certif-Scope zet opgegeven jaarlijkse uitgaven om in een geaggregeerde indicatieve raming en een PDF die kan worden gearchiveerd en gedeeld wanneer de ontvanger deze methode accepteert.",
    cta: "Mijn attest voorbereiden — 89 €", sample: "Gratis voorbeeld downloaden",
    fitTitle: "Wanneer is het geschikt?", fitText: "Voor eerste ESG-screening, leveranciersvragen, bankvragen of aanbestedingen zonder verplichte voorgeschreven methode. Bevestig vóór bestelling wat de ontvanger verwacht.",
    contentsTitle: "Wat staat in het document", contents: ["Geaggregeerd resultaat in tCO₂e", "Bedrijf, referentiejaar en uitgiftedatum", "Beschrijving van methode en beperkingen", "Unieke document-ID voor controle"],
    stepsTitle: "Drie stappen", steps: ["Vul uw bedrijf en jaarlijkse externe uitgaven in.", "Controleer gegevens, jaar en raming vóór betaling.", "Download en archiveer de PDF na bevestiging."],
    limitTitle: "Belangrijke beperking", limitText: "Dit is een indicatieve raming op basis van uitgaven. Het is geen volledige broeikasgasinventaris, CO₂-audit, externe verificatie of CSRD/ESRS-rapportage.",
  },
  et: {
    title: "Näitajalik CO₂e dokument VKEdele",
    description: "Standardiseeritud, kuupäevastatud ja kontrollitav näitajalik CO₂e PDF deklareeritud kulude põhjal lihtsate kliendi-, tarnija-, panga- ja hankepäringute jaoks.",
    tagline: "Lihtsate dokumentaalsete päringute jaoks",
    hero: "Kas peate vastama süsinikuandmete päringule? Koostage näitajalik CO₂e dokument.",
    intro: "Certif-Scope teisendab deklareeritud aastakulud koondatud näitajalikuks hinnanguks ja PDF-iks, mida saab arhiveerida ja jagada, kui saaja selle meetodi aktsepteerib.",
    cta: "Koosta tõend — 89 €", sample: "Laadi alla tasuta näidis",
    fitTitle: "Millal see sobib?", fitText: "Esmaseks ESG sõelumiseks, tarnija- või pangapäringuks või hankeks, kus kohustuslikku meetodit pole ette nähtud. Kinnitage enne tellimist saaja ootused.",
    contentsTitle: "Dokumendi sisu", contents: ["Koondtulemus tCO₂e", "Ettevõte, võrdlusaasta ja väljastamise kuupäev", "Meetodi ja piirangute kirjeldus", "Unikaalne ID dokumentaalseks kontrolliks"],
    stepsTitle: "Kolm sammu", steps: ["Sisestage ettevõte ja aastased väliskulud.", "Kontrollige andmeid, aastat ja hinnangut enne maksmist.", "Pärast kinnitamist laadige PDF alla ja arhiveerige."],
    limitTitle: "Oluline piirang", limitText: "See on kulupõhine näitajalik hinnang. See ei ole täielik kasvuhoonegaaside inventuur, süsinikuaudit, väline kontroll ega CSRD/ESRS aruanne.",
  },
  fi: {
    title: "Ohjeellinen CO₂e-asiakirja pk-yrityksille",
    description: "Standardisoitu, päivätty ja tarkistettava ohjeellinen CO₂e-PDF ilmoitettujen kulujen perusteella asiakkaiden, toimittajien, pankkien ja kilpailutusten yksinkertaisiin tietopyyntöihin.",
    tagline: "Yksinkertaisiin dokumenttipyyntöihin",
    hero: "Saitko pyynnön hiilitiedoista? Laadi ohjeellinen CO₂e-asiakirja.",
    intro: "Certif-Scope muuntaa ilmoitetut vuosikulut koontimuotoiseksi ohjeelliseksi arvioksi ja PDF:ksi, jonka voi arkistoida ja jakaa, jos vastaanottaja hyväksyy menetelmän.",
    cta: "Laadi todistus — 89 €", sample: "Lataa ilmainen esimerkki",
    fitTitle: "Milloin se sopii?", fitText: "Alustavaan ESG-seulontaan, toimittaja- tai pankkipyyntöihin tai kilpailutuksiin, joissa pakollista menetelmää ei ole määrätty. Vahvista vastaanottajan odotukset ennen tilausta.",
    contentsTitle: "Asiakirjan sisältö", contents: ["Koottu tulos tCO₂e", "Yritys, viitevuosi ja myöntämispäivä", "Menetelmän ja rajoitusten kuvaus", "Yksilöllinen tunniste dokumentin tarkistamiseen"],
    stepsTitle: "Kolme vaihetta", steps: ["Syötä yritys ja vuosittaiset ulkoiset kulut.", "Tarkista tiedot, vuosi ja arvio ennen maksua.", "Lataa ja arkistoi PDF vahvistuksen jälkeen."],
    limitTitle: "Tärkeä rajoitus", limitText: "Tämä on kuluihin perustuva ohjeellinen arvio. Se ei ole täydellinen kasvihuonekaasuinventaario, hiiliauditointi, ulkoinen varmennus eikä CSRD/ESRS-raportti.",
  },
  el: {
    title: "Ενδεικτικό έγγραφο CO₂e για ΜΜΕ",
    description: "Τυποποιημένο, χρονολογημένο και επαληθεύσιμο ενδεικτικό PDF CO₂e βάσει δηλωμένων δαπανών για απλά αιτήματα πελατών, προμηθευτών, τραπεζών και διαγωνισμών.",
    tagline: "Για απλά αιτήματα τεκμηρίωσης",
    hero: "Έχετε αίτημα για δεδομένα άνθρακα; Ετοιμάστε το ενδεικτικό έγγραφο CO₂e.",
    intro: "Το Certif-Scope μετατρέπει τις δηλωμένες ετήσιες δαπάνες σε συγκεντρωτική ενδεικτική εκτίμηση και PDF που μπορεί να αρχειοθετηθεί και να κοινοποιηθεί όταν ο παραλήπτης αποδέχεται αυτή τη μέθοδο.",
    cta: "Ετοιμάστε τη βεβαίωση — 89 €", sample: "Λήψη δωρεάν δείγματος",
    fitTitle: "Πότε είναι κατάλληλο;", fitText: "Για αρχικό ESG screening, αιτήματα προμηθευτών ή τραπεζών και διαγωνισμούς χωρίς υποχρεωτική μέθοδο. Επιβεβαιώστε τις προσδοκίες του παραλήπτη πριν από την παραγγελία.",
    contentsTitle: "Τι περιλαμβάνει", contents: ["Συγκεντρωτικό αποτέλεσμα σε tCO₂e", "Εταιρεία, έτος αναφοράς και ημερομηνία έκδοσης", "Περιγραφή μεθόδου και περιορισμών", "Μοναδικό αναγνωριστικό για έλεγχο εγγράφου"],
    stepsTitle: "Τρία βήματα", steps: ["Καταχωρίστε την εταιρεία και τις ετήσιες εξωτερικές δαπάνες.", "Ελέγξτε στοιχεία, έτος και εκτίμηση πριν από την πληρωμή.", "Μετά την επιβεβαίωση, κατεβάστε και αρχειοθετήστε το PDF."],
    limitTitle: "Σημαντικός περιορισμός", limitText: "Πρόκειται για ενδεικτική εκτίμηση βάσει δαπανών. Δεν είναι πλήρης απογραφή αερίων θερμοκηπίου, έλεγχος άνθρακα, εξωτερική επαλήθευση ή αναφορά CSRD/ESRS.",
  },
  hu: {
    title: "Tájékoztató CO₂e-dokumentum KKV-k számára",
    description: "Szabványosított, dátummal ellátott és ellenőrizhető, bejelentett kiadásokon alapuló tájékoztató CO₂e PDF egyszerű ügyfél-, beszállítói, banki és pályázati kérésekhez.",
    tagline: "Egyszerű dokumentációs kérésekhez",
    hero: "Karbonadat-kérést kapott? Készítse el tájékoztató CO₂e-dokumentumát.",
    intro: "A Certif-Scope a megadott éves kiadásokat összesített tájékoztató becsléssé és archiválható, megosztható PDF-fé alakítja, ha a címzett elfogadja ezt a módszert.",
    cta: "Tanúsítvány elkészítése — 89 €", sample: "Ingyenes minta letöltése",
    fitTitle: "Mikor megfelelő?", fitText: "Előzetes ESG-szűréshez, beszállítói vagy banki kéréshez, illetve olyan pályázathoz, ahol nincs kötelező módszer. Rendelés előtt egyeztesse a címzett elvárásait.",
    contentsTitle: "A dokumentum tartalma", contents: ["Összesített eredmény tCO₂e-ben", "Vállalat, referenciaév és kiállítás dátuma", "Módszer és korlátok leírása", "Egyedi azonosító dokumentumellenőrzéshez"],
    stepsTitle: "Három lépés", steps: ["Adja meg a vállalatot és az éves külső kiadásokat.", "Fizetés előtt ellenőrizze az adatokat, az évet és a becslést.", "Megerősítés után töltse le és archiválja a PDF-et."],
    limitTitle: "Fontos korlát", limitText: "Ez kiadásalapú tájékoztató becslés. Nem teljes ÜHG-leltár, karbonaudit, külső hitelesítés vagy CSRD/ESRS-jelentés.",
  },
  ga: {
    title: "Doiciméad táscach CO₂e do FBManna",
    description: "PDF CO₂e táscach caighdeánaithe, dátaithe agus infhíoraithe bunaithe ar chaiteachas dearbhaithe le haghaidh iarrataí simplí ó chustaiméirí, soláthraithe, bainc agus tairiscintí.",
    tagline: "Le haghaidh iarrataí simplí doiciméadacha",
    hero: "Iarratas ar shonraí carbóin agat? Ullmhaigh do dhoiciméad táscach CO₂e.",
    intro: "Athraíonn Certif-Scope caiteachas bliantúil dearbhaithe ina mheastachán táscach comhiomlán agus ina PDF is féidir a chartlannú agus a roinnt nuair a ghlacann an faighteoir leis an modh.",
    cta: "Ullmhaigh an deimhniú — 89 €", sample: "Íoslódáil sampla saor in aisce",
    fitTitle: "Cathain atá sé oiriúnach?", fitText: "Do scagadh ESG tosaigh, iarrataí soláthraithe nó bainc, nó tairiscintí gan modh éigeantach sonraithe. Deimhnigh ionchais an fhaighteora roimh ordú.",
    contentsTitle: "Ábhar an doiciméid", contents: ["Toradh comhiomlán i tCO₂e", "Cuideachta, bliain tagartha agus dáta eisiúna", "Cur síos ar an modh agus ar na teorainneacha", "Aitheantas uathúil le haghaidh seiceáil doiciméadach"],
    stepsTitle: "Trí chéim", steps: ["Cuir isteach an chuideachta agus caiteachas seachtrach bliantúil.", "Seiceáil na sonraí, an bhliain agus an meastachán roimh íocaíocht.", "Íoslódáil agus cartlannaigh an PDF tar éis deimhnithe."],
    limitTitle: "Teorainn thábhachtach", limitText: "Is meastachán táscach bunaithe ar chaiteachas é seo. Ní fardal iomlán GCT, iniúchadh carbóin, fíorú seachtrach ná tuairisciú CSRD/ESRS é.",
  },
  it: {
    title: "Documento CO₂e indicativo per PMI",
    description: "PDF CO₂e indicativo standardizzato, datato e verificabile basato sulle spese dichiarate, per richieste semplici di clienti, fornitori, banche e gare.",
    tagline: "Per richieste documentali semplici",
    hero: "Hai ricevuto una richiesta di dati sul carbonio? Prepara il tuo documento CO₂e indicativo.",
    intro: "Certif-Scope trasforma le spese annuali dichiarate in una stima aggregata indicativa e in un PDF archiviabile e condivisibile quando il destinatario accetta questo metodo.",
    cta: "Prepara l’attestazione — 89 €", sample: "Scarica un esempio gratuito",
    fitTitle: "Quando è adatto?", fitText: "Per screening ESG preliminare, richieste di fornitori o banche e gare senza un metodo obbligatorio prescritto. Conferma le aspettative del destinatario prima dell’ordine.",
    contentsTitle: "Cosa contiene il documento", contents: ["Risultato aggregato in tCO₂e", "Azienda, anno di riferimento e data di emissione", "Metodo e limiti dichiarati", "Identificativo univoco per la verifica documentale"],
    stepsTitle: "Tre passaggi", steps: ["Inserisci azienda e spese esterne annuali.", "Controlla dati, anno e stima prima del pagamento.", "Dopo la conferma, scarica e archivia il PDF."],
    limitTitle: "Limite importante", limitText: "È una stima indicativa basata sulla spesa. Non è un inventario GHG completo, un audit carbonico, una verifica esterna o un report CSRD/ESRS.",
  },
  lv: {
    title: "Indikatīvs CO₂e dokuments MVU",
    description: "Standartizēts, datēts un pārbaudāms indikatīvs CO₂e PDF, kas balstīts uz deklarētiem izdevumiem vienkāršiem klientu, piegādātāju, banku un iepirkumu pieprasījumiem.",
    tagline: "Vienkāršiem dokumentu pieprasījumiem",
    hero: "Saņēmāt pieprasījumu par oglekļa datiem? Sagatavojiet indikatīvu CO₂e dokumentu.",
    intro: "Certif-Scope pārvērš deklarētos gada izdevumus apkopotā indikatīvā novērtējumā un PDF, ko var arhivēt un kopīgot, ja saņēmējs pieņem šo metodi.",
    cta: "Sagatavot apliecinājumu — 89 €", sample: "Lejupielādēt bezmaksas paraugu",
    fitTitle: "Kad tas ir piemērots?", fitText: "Sākotnējam ESG skrīningam, piegādātāju vai banku pieprasījumiem un iepirkumiem bez obligāti noteiktas metodes. Pirms pasūtījuma apstipriniet saņēmēja prasības.",
    contentsTitle: "Dokumenta saturs", contents: ["Apkopots rezultāts tCO₂e", "Uzņēmums, atsauces gads un izdošanas datums", "Metodes un ierobežojumu apraksts", "Unikāls identifikators dokumentu pārbaudei"],
    stepsTitle: "Trīs soļi", steps: ["Ievadiet uzņēmumu un gada ārējos izdevumus.", "Pirms maksājuma pārbaudiet datus, gadu un novērtējumu.", "Pēc apstiprinājuma lejupielādējiet un arhivējiet PDF."],
    limitTitle: "Svarīgs ierobežojums", limitText: "Tas ir indikatīvs novērtējums, kas balstīts uz izdevumiem. Tas nav pilns SEG inventarizācijas pārskats, oglekļa audits, ārēja verifikācija vai CSRD/ESRS ziņojums.",
  },
  lt: {
    title: "Orientacinis CO₂e dokumentas MVĮ",
    description: "Standartizuotas, datuotas ir patikrinamas orientacinis CO₂e PDF pagal deklaruotas išlaidas paprastoms klientų, tiekėjų, bankų ir konkursų užklausoms.",
    tagline: "Paprastoms dokumentų užklausoms",
    hero: "Gavote užklausą dėl anglies duomenų? Parenkite orientacinį CO₂e dokumentą.",
    intro: "Certif-Scope deklaruotas metines išlaidas paverčia bendra orientacine sąmata ir PDF, kurį galima archyvuoti bei dalytis, jei gavėjas priima šį metodą.",
    cta: "Parengti pažymą — 89 €", sample: "Atsisiųsti nemokamą pavyzdį",
    fitTitle: "Kada tinka?", fitText: "Pradiniam ESG vertinimui, tiekėjų ar bankų užklausoms ir konkursams, kuriuose nenustatytas privalomas metodas. Prieš užsakydami patvirtinkite gavėjo lūkesčius.",
    contentsTitle: "Dokumento turinys", contents: ["Bendras rezultatas tCO₂e", "Įmonė, ataskaitiniai metai ir išdavimo data", "Metodo ir apribojimų aprašymas", "Unikalus ID dokumento patikrai"],
    stepsTitle: "Trys žingsniai", steps: ["Įveskite įmonę ir metines išorines išlaidas.", "Prieš mokėjimą patikrinkite duomenis, metus ir įvertį.", "Po patvirtinimo atsisiųskite ir archyvuokite PDF."],
    limitTitle: "Svarbus apribojimas", limitText: "Tai orientacinis išlaidomis pagrįstas įvertis. Tai nėra pilna ŠESD inventorizacija, anglies auditas, išorinis patvirtinimas ar CSRD/ESRS ataskaita.",
  },
  mt: {
    title: "Dokument CO₂e indikattiv għall-SMEs",
    description: "PDF CO₂e indikattiv standardizzat, datat u verifikabbli bbażat fuq spejjeż iddikjarati għal talbiet sempliċi minn klijenti, fornituri, banek u sejħiet għall-offerti.",
    tagline: "Għal talbiet dokumentarji sempliċi",
    hero: "Irċevejt talba għal data dwar il-karbonju? Ipprepara d-dokument CO₂e indikattiv tiegħek.",
    intro: "Certif-Scope jibdel l-ispejjeż annwali ddikjarati f’estima indikattiva aggregata u PDF li jista’ jinħażen u jinqasam meta r-riċevitur jaċċetta dan il-metodu.",
    cta: "Ipprepara l-attestazzjoni — 89 €", sample: "Niżżel kampjun b’xejn",
    fitTitle: "Meta huwa adattat?", fitText: "Għal screening ESG inizjali, talbiet ta’ fornituri jew banek, jew sejħiet għall-offerti mingħajr metodu obbligatorju. Ikkonferma l-aspettattivi tar-riċevitur qabel tordna.",
    contentsTitle: "X’fih id-dokument", contents: ["Riżultat aggregat f’tCO₂e", "Kumpanija, sena ta’ referenza u data tal-ħruġ", "Deskrizzjoni tal-metodu u l-limiti", "ID uniku għall-verifika dokumentarja"],
    stepsTitle: "Tliet passi", steps: ["Daħħal il-kumpanija u l-ispejjeż esterni annwali.", "Iċċekkja d-data, is-sena u l-estima qabel il-ħlas.", "Wara l-konferma, niżżel u arkivja l-PDF."],
    limitTitle: "Limitazzjoni importanti", limitText: "Din hija estima indikattiva bbażata fuq l-ispejjeż. Mhijiex inventarju sħiħ tal-GHG, audit tal-karbonju, verifika esterna jew rapport CSRD/ESRS.",
  },
  pl: {
    title: "Orientacyjny dokument CO₂e dla MŚP",
    description: "Standaryzowany, datowany i możliwy do weryfikacji orientacyjny PDF CO₂e oparty na zadeklarowanych wydatkach, do prostych zapytań klientów, dostawców, banków i przetargów.",
    tagline: "Do prostych zapytań dokumentacyjnych",
    hero: "Masz zapytanie o dane węglowe? Przygotuj orientacyjny dokument CO₂e.",
    intro: "Certif-Scope przelicza zadeklarowane roczne wydatki na zagregowane orientacyjne oszacowanie i PDF, który można archiwizować oraz udostępniać, jeśli odbiorca akceptuje tę metodę.",
    cta: "Przygotuj zaświadczenie — 89 €", sample: "Pobierz bezpłatny przykład",
    fitTitle: "Kiedy jest odpowiedni?", fitText: "Do wstępnego screeningu ESG, zapytań dostawców lub banków oraz przetargów bez obowiązkowo wskazanej metody. Przed zamówieniem potwierdź oczekiwania odbiorcy.",
    contentsTitle: "Co zawiera dokument", contents: ["Zagregowany wynik w tCO₂e", "Firmę, rok referencyjny i datę wystawienia", "Opis metody i ograniczeń", "Unikalny identyfikator do weryfikacji dokumentu"],
    stepsTitle: "Trzy kroki", steps: ["Wprowadź firmę i roczne wydatki zewnętrzne.", "Przed płatnością sprawdź dane, rok i oszacowanie.", "Po potwierdzeniu pobierz i zarchiwizuj PDF."],
    limitTitle: "Ważne ograniczenie", limitText: "To orientacyjne oszacowanie oparte na wydatkach. Nie jest pełnym inwentarzem GHG, audytem węglowym, zewnętrzną weryfikacją ani raportem CSRD/ESRS.",
  },
  pt: {
    title: "Documento CO₂e indicativo para PME",
    description: "PDF CO₂e indicativo, normalizado, datado e verificável, baseado em despesas declaradas para pedidos simples de clientes, fornecedores, bancos e concursos.",
    tagline: "Para pedidos documentais simples",
    hero: "Recebeu um pedido de dados de carbono? Prepare o seu documento CO₂e indicativo.",
    intro: "O Certif-Scope transforma as despesas anuais declaradas numa estimativa agregada indicativa e num PDF que pode ser arquivado e partilhado quando o destinatário aceita este método.",
    cta: "Preparar a declaração — 89 €", sample: "Descarregar exemplo gratuito",
    fitTitle: "Quando é adequado?", fitText: "Para triagem ESG inicial, pedidos de fornecedores ou bancos e concursos sem método obrigatório prescrito. Confirme as expectativas do destinatário antes de encomendar.",
    contentsTitle: "O que contém o documento", contents: ["Resultado agregado em tCO₂e", "Empresa, ano de referência e data de emissão", "Descrição do método e limitações", "Identificador único para verificação documental"],
    stepsTitle: "Três passos", steps: ["Introduza a empresa e as despesas externas anuais.", "Revise os dados, o ano e a estimativa antes do pagamento.", "Após confirmação, descarregue e arquive o PDF."],
    limitTitle: "Limitação importante", limitText: "É uma estimativa indicativa baseada em despesas. Não é um inventário completo de GEE, auditoria de carbono, verificação externa ou relatório CSRD/ESRS.",
  },
  ro: {
    title: "Document CO₂e indicativ pentru IMM-uri",
    description: "PDF CO₂e indicativ standardizat, datat și verificabil, bazat pe cheltuieli declarate, pentru solicitări simple de la clienți, furnizori, bănci și licitații.",
    tagline: "Pentru solicitări documentare simple",
    hero: "Ai primit o solicitare privind datele de carbon? Pregătește documentul CO₂e indicativ.",
    intro: "Certif-Scope transformă cheltuielile anuale declarate într-o estimare indicativă agregată și într-un PDF care poate fi arhivat și distribuit atunci când destinatarul acceptă această metodă.",
    cta: "Pregătește atestarea — 89 €", sample: "Descarcă un exemplu gratuit",
    fitTitle: "Când este potrivit?", fitText: "Pentru screening ESG inițial, solicitări de la furnizori sau bănci și licitații fără metodă obligatorie. Confirmă așteptările destinatarului înainte de comandă.",
    contentsTitle: "Ce conține documentul", contents: ["Rezultat agregat în tCO₂e", "Companie, an de referință și data emiterii", "Descrierea metodei și limitărilor", "Identificator unic pentru verificare documentară"],
    stepsTitle: "Trei pași", steps: ["Introdu compania și cheltuielile externe anuale.", "Verifică datele, anul și estimarea înainte de plată.", "După confirmare, descarcă și arhivează PDF-ul."],
    limitTitle: "Limitare importantă", limitText: "Aceasta este o estimare indicativă bazată pe cheltuieli. Nu este inventar GES complet, audit de carbon, verificare externă sau raportare CSRD/ESRS.",
  },
  sk: {
    title: "Orientačný CO₂e dokument pre MSP",
    description: "Štandardizovaný, datovaný a overiteľný orientačný CO₂e PDF založený na deklarovaných výdavkoch pre jednoduché požiadavky klientov, dodávateľov, bánk a tendrov.",
    tagline: "Pre jednoduché dokumentačné požiadavky",
    hero: "Potrebujete odpovedať na požiadavku o uhlíkové údaje? Pripravte orientačný CO₂e dokument.",
    intro: "Certif-Scope prevádza deklarované ročné výdavky na súhrnný orientačný odhad a PDF, ktoré možno archivovať a zdieľať, ak príjemca túto metódu akceptuje.",
    cta: "Pripraviť potvrdenie — 89 €", sample: "Stiahnuť bezplatnú ukážku",
    fitTitle: "Kedy je vhodný?", fitText: "Pre úvodný ESG screening, požiadavky dodávateľov či bánk alebo tendre bez povinne stanovenej metódy. Pred objednaním potvrďte očakávania príjemcu.",
    contentsTitle: "Čo dokument obsahuje", contents: ["Súhrnný výsledok v tCO₂e", "Firmu, referenčný rok a dátum vydania", "Opis metódy a obmedzení", "Jedinečný identifikátor pre dokumentačnú kontrolu"],
    stepsTitle: "Tri kroky", steps: ["Zadajte firmu a ročné externé výdavky.", "Pred platbou skontrolujte údaje, rok a odhad.", "Po potvrdení stiahnite a archivujte PDF."],
    limitTitle: "Dôležité obmedzenie", limitText: "Ide o orientačný odhad založený na výdavkoch. Nie je to úplná inventúra emisií, uhlíkový audit, externé overenie ani report CSRD/ESRS.",
  },
  sl: {
    title: "Okvirni dokument CO₂e za MSP",
    description: "Standardiziran, datiran in preverljiv okvirni CO₂e PDF na podlagi prijavljenih izdatkov za preproste zahteve strank, dobaviteljev, bank in razpisov.",
    tagline: "Za preproste dokumentacijske zahteve",
    hero: "Ste prejeli zahtevo za podatke o ogljiku? Pripravite okvirni dokument CO₂e.",
    intro: "Certif-Scope pretvori prijavljene letne izdatke v skupno okvirno oceno in PDF, ki ga je mogoče arhivirati in deliti, kadar prejemnik sprejema to metodo.",
    cta: "Pripravi potrdilo — 89 €", sample: "Prenesi brezplačen primer",
    fitTitle: "Kdaj je primeren?", fitText: "Za začetni ESG pregled, zahteve dobaviteljev ali bank ter razpise brez obvezno predpisane metode. Pred naročilom potrdite pričakovanja prejemnika.",
    contentsTitle: "Kaj dokument vsebuje", contents: ["Skupni rezultat v tCO₂e", "Podjetje, referenčno leto in datum izdaje", "Opis metode in omejitev", "Edinstven identifikator za dokumentacijsko preverjanje"],
    stepsTitle: "Trije koraki", steps: ["Vnesite podjetje in letne zunanje izdatke.", "Pred plačilom preverite podatke, leto in oceno.", "Po potrditvi prenesite in arhivirajte PDF."],
    limitTitle: "Pomembna omejitev", limitText: "To je okvirna ocena na podlagi izdatkov. Ni popoln popis TGP, ogljična revizija, zunanja verifikacija ali poročilo CSRD/ESRS.",
  },
  es: {
    title: "Documento CO₂e indicativo para pymes",
    description: "PDF CO₂e indicativo, estandarizado, fechado y verificable, basado en gastos declarados para solicitudes sencillas de clientes, proveedores, bancos y licitaciones.",
    tagline: "Para solicitudes documentales sencillas",
    hero: "¿Has recibido una solicitud de datos de carbono? Prepara tu documento CO₂e indicativo.",
    intro: "Certif-Scope convierte los gastos anuales declarados en una estimación agregada indicativa y un PDF que puede archivarse y compartirse cuando el destinatario acepta este método.",
    cta: "Preparar mi atestación — 89 €", sample: "Descargar un ejemplo gratuito",
    fitTitle: "¿Cuándo es adecuado?", fitText: "Para un screening ESG inicial, solicitudes de proveedores o bancos y licitaciones sin una metodología obligatoria prescrita. Confirma las expectativas del destinatario antes de comprar.",
    contentsTitle: "Qué contiene el documento", contents: ["Resultado agregado en tCO₂e", "Empresa, año de referencia y fecha de emisión", "Descripción del método y sus límites", "Identificador único para verificación documental"],
    stepsTitle: "Tres pasos", steps: ["Introduce la empresa y los gastos externos anuales.", "Revisa los datos, el año y la estimación antes del pago.", "Tras la confirmación, descarga y archiva el PDF."],
    limitTitle: "Limitación importante", limitText: "Es una estimación indicativa basada en gastos. No es un inventario completo de GEI, una auditoría de carbono, una verificación externa ni un informe CSRD/ESRS.",
  },
  sv: {
    title: "Indikativt CO₂e-dokument för små och medelstora företag",
    description: "Standardiserad, daterad och verifierbar indikativ CO₂e-PDF baserad på deklarerade utgifter för enkla förfrågningar från kunder, leverantörer, banker och upphandlingar.",
    tagline: "För enkla dokumentationsförfrågningar",
    hero: "Har du fått en förfrågan om koldioxiddata? Förbered ditt indikativa CO₂e-dokument.",
    intro: "Certif-Scope omvandlar deklarerade årliga utgifter till en aggregerad indikativ uppskattning och en PDF som kan arkiveras och delas när mottagaren accepterar metoden.",
    cta: "Förbered intyg — 89 €", sample: "Ladda ner gratis exempel",
    fitTitle: "När passar det?", fitText: "För inledande ESG-screening, leverantörs- eller bankförfrågningar och upphandlingar utan föreskriven obligatorisk metod. Bekräfta mottagarens förväntningar före beställning.",
    contentsTitle: "Dokumentet innehåller", contents: ["Aggregerat resultat i tCO₂e", "Företag, referensår och utfärdandedatum", "Beskrivning av metod och begränsningar", "Unikt ID för dokumentkontroll"],
    stepsTitle: "Tre steg", steps: ["Ange företag och årliga externa utgifter.", "Kontrollera data, år och uppskattning före betalning.", "Ladda ner och arkivera PDF-filen efter bekräftelse."],
    limitTitle: "Viktig begränsning", limitText: "Detta är en indikativ utgiftsbaserad uppskattning. Det är inte en fullständig växthusgasinventering, koldioxidrevision, extern verifiering eller CSRD/ESRS-rapportering.",
  },
};
