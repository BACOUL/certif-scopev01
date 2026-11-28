const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),ts=require("typescript"),puppeteer=require("puppeteer-core"),{execFileSync}=require("node:child_process");
const root=path.resolve(__dirname,"../src/lib/carbon"),cache=new Map();
function load(file){
 file=path.resolve(root,file);if(!file.startsWith(root+path.sep))throw Error("PATH");
 if(cache.has(file))return cache.get(file).exports;
 const module={exports:{}};cache.set(file,module);
 vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{module,exports:module.exports,require:n=>n==="zod"?require("zod"):n.startsWith("./")?load(n+".ts"):(()=>{throw Error("DEPENDENCY "+n)})()},{filename:file});
 return module.exports;
}
const {calculate}=load("calculate.ts"),{CATEGORIES}=load("factors.ts"),{renderDeclarationSpecimen}=load("declaration-specimen.ts");
const template=fs.readFileSync(path.resolve(__dirname,"../src/lib/attestation-pdf-template.ts"),"utf8");
const marker="const RAW_CERTIF_SCOPE_LOGO_BASE64 = "+String.fromCharCode(96);
const start=template.indexOf(marker);assert.ok(start>=0);
// The historical literal contains a trailing quote and semicolon inside its
// backticks. Decode only the canonical PNG base64; never change the paid template.
const rawLogo=template.slice(start+marker.length).split(String.fromCharCode(96))[0].trim();
const match=rawLogo.match(/^([A-Za-z0-9+/=\s]+?)(?:";)?$/);
assert.ok(match,"Historical logo has unexpected syntax");
const logo=match[1].replace(/\s/g,"");
const png=Buffer.from(logo,"base64");
assert.ok(png.length>1000);
assert.equal(png.toString("base64"),logo,"Non-canonical base64");
assert.equal(png.subarray(0,8).toString("hex"),"89504e470d0a1a0a","Expected PNG signature");
const base=()=>({locale:"fr",company:"ENTREPRISE EXEMPLE — DONNÉES FICTIVES",identifier:"TEST-ONLY",country:"FR",year:2023,boundary:"Un site administratif fictif — France continentale",declarant:"Exemple",start:"2023-01-01",end:"2023-12-31",sources:Object.fromEntries(CATEGORIES.map(k=>[k,"not_applicable"])),activities:[],exclusions:"",confirmed:true});
function example(){let x=base();x.sources.electricity=x.sources.gas="known";x.activities=[{id:"e",kind:"electricity",quantity:12000,unit:"kWh",renewableEnergyKwh:8000,quality:"invoice",evidence:"FICTIVE-E"},{id:"g",kind:"gas_pci",quantity:18000,unit:"kWh PCI",renewableEnergyKwh:0,quality:"invoice",evidence:"FICTIVE-G"}];return x;}
const out="artifacts/d01-declaration";fs.mkdirSync(out,{recursive:true});
(async()=>{let browser;try{
 const partial=example();partial.sources.purchased_heat="unknown";
 const zero=base();
 const wood=example();wood.sources.other_fuels="known";wood.activities.push({id:"w",kind:"wood_commercial_pci",quantity:10000,unit:"kWh PCI",renewableEnergyKwh:10000,quality:"invoice",evidence:"FICTIVE-W"});
 const thermal=example();thermal.sources.purchased_heat="known";thermal.thermalPurchases=[{id:"th",kind:"heat",network:"Réseau fictif",quantityKwh:5000,renewableEnergyKwh:2000,evidence:"FICTIVE-TH"}];
 const process=example();process.sources.processes="known";process.processEmissions=[{id:"p",process:"Réaction fictive",grossTCO2e:2.5,method:"Mesure documentée",gwpBasis:"AR6 100 ans",evidence:"FICTIVE-P",confirmedBoundary:true}];
 const cases=[["declaration-carbone-b3",example()],["couverture-partielle",partial],["zero",zero],["biomasse",wood],["chaleur-achetee",thermal],["procedes",process]];
 browser=await puppeteer.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH,headless:true,pipe:true,args:["--no-sandbox","--no-zygote","--disable-gpu"]});
 for(const [name,input] of cases){
  const result=calculate(input),html=renderDeclarationSpecimen(result,logo);
  if(name==="declaration-carbone-b3"){assert.equal(result.report.energy.value,30);assert.ok(Math.abs(result.report.total.value-4.0908)<1e-10);}
  if(name==="couverture-partielle"){assert.equal(result.report.total.value,null);assert.equal(result.report.energy.value,null);assert.match(html,/Couverture partielle/);assert.doesNotMatch(html,/class="bar navy"/);}
  if(name==="zero"){assert.equal(result.report.total.value,0);assert.doesNotMatch(html,/class="bar navy"/);}
  if(name==="biomasse"){assert.ok(Math.abs(result.report.total.value-4.421712)<1e-10);assert.ok(Math.abs(result.biogenicCO2T-4.032)<1e-10);assert.match(html,/PRG AR6/);}
  if(name==="procedes"){assert.ok(Math.abs(result.report.total.value-6.5908)<1e-10);assert.equal(result.report.energy.value,30);assert.match(html,/non recalculés ni vérifiés/);}
  if(name==="chaleur-achetee"){assert.equal(result.report.energy.value,35);assert.equal(result.report.scope2.value,null);assert.equal(result.report.total.value,null);assert.doesNotMatch(html,/class="bar navy"/);}
  const page=await browser.newPage();await page.setRequestInterception(true);page.on("request",r=>r.url().startsWith("data:")||r.url()==="about:blank"?r.continue():r.abort());
  await page.setContent(html,{waitUntil:"load"});await page.emulateMediaType("print");
  const check=await page.evaluate(()=>[...document.querySelectorAll("section.page")].map(s=>{const b=s.getBoundingClientRect(),f=s.querySelector("footer").getBoundingClientRect(),els=[...s.querySelectorAll("header,.specimen,h1,h2,p,table,.metrics,.track,.note")];return {logo:s.querySelector("img").naturalWidth>0,overflow:els.some(e=>{const r=e.getBoundingClientRect();return r.bottom>f.top-4||r.left<b.left-1||r.right>b.right+1||e.scrollWidth>e.clientWidth+2;})}}));
  assert.equal(check.length,4);assert.ok(check.every(c=>c.logo&&!c.overflow),JSON.stringify(check));
  const pdf=out+"/"+name+".pdf";await page.pdf({path:pdf,preferCSSPageSize:true,printBackground:true});await page.close();
  assert.match(execFileSync("pdfinfo",[pdf],{encoding:"utf8"}),/Pages:\s+4\b/);
  const pages=execFileSync("pdftotext",["-layout",pdf,"-"],{encoding:"utf8"}).split("\f").filter(s=>s.trim());assert.equal(pages.length,4);assert.ok(pages.every(s=>s.includes("SPÉCIMEN FICTIF")));
  if(name==="declaration-carbone-b3")assert.match(pages[0],/4,091/);
  if(name==="couverture-partielle")assert.match(pages[0],/Non disponible/);
  if(name==="zero")assert.match(pages[0],/0,000/);
  if(name==="biomasse"){assert.match(pages[0],/4,422/);assert.match(pages[2],/4,032/);}
  if(name==="procedes"){assert.match(pages[0],/6,591/);assert.match(pages[2],/Non recalculé/);}
  if(name==="chaleur-achetee"){assert.match(pages[0],/35,000/);assert.match(pages[0],/Non disponible/);assert.match(pages[2],/Chaleur/);}
  execFileSync("pdftoppm",["-scale-to","1200","-png",pdf,out+"/"+name]);
  console.log("PASS "+name+": 4 A4 pages, historical logo, coverage and chart contract, no detected clipping, specimen label on each page");
 }
 console.log("PASS 6 synthetic documents generated by actual engine; no production data, no signed document");
 }finally{if(browser)await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
