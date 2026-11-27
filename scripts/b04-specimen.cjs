// Isolated design specimen; never calls issuing, payment or verification APIs.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const puppeteer=require('puppeteer-core');
const QRCode=require('qrcode');
const {load}=require('./check-multilingual.cjs');
const {getLocaleCopy}=load('src/lib/attestation-pdf-copy.ts');
const {renderAttestationPdfHtml}=load('src/lib/attestation-pdf-template.ts');
const {EMISSION_FACTORS}=load('src/lib/indicative-model.ts');
const root='artifacts/b04-specimen';
fs.mkdirSync(root,{recursive:true});
const total=Object.values(EMISSION_FACTORS).reduce((s,f)=>s+1000*f,0)/1000;
assert.ok(Math.abs(total-1.92)<1e-10);
const original=getLocaleCopy('fr');
const common={
 headerTagline:'SPÉCIMEN FICTIF — NON VALABLE',
 scanToVerifyLabel:'QR de démonstration\nNon vérifiable',
 footerText:'SPÉCIMEN FICTIF — NON VALABLE · Certif-Scope',
 validUntilLabel:'VALIDITÉ DOCUMENTAIRE',
 verificationSimpleText:'QR de démonstration. Aucune attestation réelle n’a été émise.',
 verificationText:'Identifiant et QR de démonstration, sans vérification réelle.',
 verifiableObjectText:'Exemple de présentation des éléments de contrôle documentaire.',
 technicalElementsIntro:'Valeurs fictives. Aucune signature réelle ni validation des déclarations.',
 publicKeyLabel:'CLÉ PUBLIQUE DE DÉMONSTRATION',
};
const updated={
 documentEyebrow:'ESTIMATION DÉCLARATIVE · MÉTHODE IDENTIFIÉE · DOCUMENT TRAÇABLE',
 subtitle:'Estimation non auditée — ne constitue pas un bilan GES réglementaire',
 resultLabel:'ÉMISSIONS ESTIMÉES POUR LES POSTES DÉCLARÉS',
 resultSubline:'Estimation monétaire des dépenses couvertes, pour l’exercice de référence.',
 resultBottomLine:'Support d’information carbone destiné aux échanges professionnels.',
 documentNatureText:'Ce document présente une estimation indicative des émissions de gaz à effet de serre associées aux dépenses déclarées par l’entité. Il ne constitue ni un audit ni une assurance indépendante.',
 scopeText:'L’estimation couvre uniquement les catégories de dépenses déclarées et prises en compte par la méthode indiquée en page 2. Elle ne constitue pas un inventaire exhaustif des émissions de l’entité.',
 intendedUseText:'Support d’information pour les échanges avec clients, fournisseurs et autres partenaires. Son adéquation aux exigences particulières du destinataire doit être vérifiée avant utilisation.',
 thirdPartyReadingText:'La référence, la date d’émission et les éléments de vérification facilitent le contrôle documentaire. Ils ne valident pas les données déclarées ni l’exactitude scientifique des estimations.',
 confidentialityText:'Les montants financiers détaillés ne figurent pas dans le PDF.',
 validityText:'La validité documentaire ne garantit pas l’actualité des données ni une validité réglementaire.',
 statusStripDocumentValue:'Estimation déclarative',
 statusStripDataValue:'Postes couverts',
 statusStripUseValue:'Échanges professionnels',
 methodologyText:'Les montants déclarés sont multipliés par les facteurs monétaires correspondant aux catégories couvertes. Le résultat est exprimé en tonnes équivalent CO₂.',
 formulaText:'Σ (dépense en € × facteur en kgCO₂e/€) / 1 000 = tCO₂e',
 referencesTitle:'CADRES DE RÉFÉRENCE',
 normativeText:'Le GHG Protocol décrit des méthodes monétaires pour certaines émissions indirectes. Les références ci-dessous ne constituent ni certification ni conformité.',
 referencesList:['GHG Protocol — méthodes de calcul du scope 3','Règlement délégué (UE) 2026/1560, annexe I, rubrique B3','EUR-Lex : eur-lex.europa.eu/eli/reg_del/2026/1560/oj'],
 scopeNote:'B3 concerne l’énergie et les scopes 1 et 2 dans une norme volontaire de durabilité. Cette estimation monétaire ne couvre pas à elle seule ces indicateurs.',
 perimeterLimitsIntro:'Estimation fondée sur les dépenses déclarées. Aucune assurance indépendante.',
 explicitExclusionsText:'Consommations énergétiques, scopes 1 et 2 et inventaire exhaustif du scope 3 non calculés. Les résultats dépendent des données et de la pertinence des facteurs.',
 responsibilityText:'L’entité est responsable des informations déclarées ; Certif-Scope applique la méthode identifiée.',
 methodologyNote:'CS-SB-v1 : coefficients internes historiques ; provenance externe à confirmer.',
 finalSynthesisText:'Ce document facilite la transmission d’une estimation carbone datée pour les postes couverts. Il ne se substitue pas aux informations ou bilans requis par le destinataire ou la réglementation.',
};
const metadata={issuerSite:'https://certif-scope.com',issuerName:'Certif-Scope',companyName:'Entreprise fictive Démonstration',country:'France',companySector:'Services professionnels',year:'2025',entityIdentifier:'FICTIF',totalCO2e:'1,92',attestationId:'DEMO-2026-NON-VALABLE',issuedDate:'27/11/2026',validUntil:'Non valable',methodology:'CS-SB-v1',factorVersion:'Certif-Scope factors v1 (historique)',verificationDisplayUrl:'https://example.invalid/specimen',algorithm:'DÉMONSTRATION',hash:'NON-SIGNÉ — EXEMPLE',signature:'NON-SIGNÉ — EXEMPLE',publicKey:'AUCUNE CLÉ RÉELLE'};
let browser;
(async()=>{
 const qrDataUrl=await QRCode.toDataURL('https://example.invalid/specimen',{width:600,errorCorrectionLevel:'H'});
 browser=await puppeteer.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH,headless:true,pipe:true,args:['--no-sandbox','--no-zygote','--disable-gpu']});
 const page=await browser.newPage();
 await page.setViewport({width:794,height:1123});await page.emulateMediaType('print');
 let reference;
 for(const [name,copy] of [['historique', {...original,...common}],['actualise',{...original,...updated,...common}]]){
   const html=renderAttestationPdfHtml({locale:'fr',copy,externalI18n:copy,metadata,qrDataUrl});
   await page.setContent(html,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
   const report=await page.evaluate(()=>{
     const pages=[...document.querySelectorAll('.page')],overflow=[];
     for(const [i,p] of pages.entries()){
       const b=p.getBoundingClientRect(), footer=p.querySelector('.footer'), f=footer.getBoundingClientRect();
       const walker=document.createTreeWalker(p,NodeFilter.SHOW_TEXT);
       while(walker.nextNode()){
         const t=walker.currentNode;if(!t.textContent.trim())continue;
         const range=document.createRange();range.selectNodeContents(t);
         for(const r of range.getClientRects()){
           if(r.bottom>b.bottom+1||r.right>b.right+1||r.left<b.left-1||(!footer.contains(t)&&r.bottom>f.top-2))overflow.push({page:i+1,text:t.textContent.slice(0,70)});
           const card=t.parentElement.closest('.card');if(card){const cb=card.getBoundingClientRect();if(r.bottom>cb.bottom+1||r.right>cb.right+1)overflow.push({page:i+1,card:t.textContent.slice(0,70)});}
         }
       }
     }
     const flow=document.querySelector('.page-two-flow').getBoundingClientRect(), final=document.querySelector('.final-card').getBoundingClientRect();
     if(flow.bottom>final.top+1)overflow.push({overlap:flow.bottom-final.top});
     return {pages:pages.length,headings:[...document.querySelectorAll('h2.card-title')].map(x=>Number(x.textContent.trim().match(/^\d+/)?.[0])),images:[...document.images].map(x=>x.complete&&x.naturalWidth>0),style:document.querySelector('style').textContent,overflow};
   });
   assert.equal(report.pages,2);assert.deepEqual(report.headings,[1,2,3,4,5,6,7,8,9,10]);assert.deepEqual(report.images,[true,true]);
   assert.deepEqual(report.overflow,[],name+' text overflow');
   if(reference)assert.equal(report.style,reference);else reference=report.style;
   const pdf=root+'/certif-scope-'+name+'.pdf';
   await page.pdf({path:pdf,format:'A4',printBackground:true,preferCSSPageSize:true});
   const info=execFileSync('pdfinfo',[pdf],{encoding:'utf8'});assert.match(info,/Pages:\s+2\b/);
   const txt=execFileSync('pdftotext',['-layout',pdf,'-'],{encoding:'utf8'});
   for(const p of txt.split('\f').filter(x=>x.trim()))assert.match(p,/SPÉCIMEN FICTIF/);
   assert.match(txt,/1,92 tCO₂e/);if(name==='actualise')assert.match(txt,/2026\/1560/);
   execFileSync('pdftoppm',['-scale-to','1500','-png',pdf,root+'/'+name]);
   console.log('PASS '+name+': 2 pages A4, 10 sections, identical original CSS, logo and demo QR, no detected clipping, specimen label on each page');
 }
 fs.writeFileSync(root+'/README.txt','Deux PDF fictifs comparatifs. Aucun paiement, aucune signature réelle, aucune attestation valable. Résultat de démonstration selon coefficients historiques non revalidés. Variante monétaire uniquement, sans scopes physiques. Textes français proposés, non validés juridiquement.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close()});
