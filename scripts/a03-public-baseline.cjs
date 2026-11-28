// A03: public, read-only capture. Never call any production API or submit a form.
const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer-core");
const origin = "https://www.certif-scope.com";
const root = process.env.BASELINE_DIR || "artifacts/a03";
const locales = "bg hr cs da nl en et fi fr de el hu ga it lv lt mt pl pt ro sk sl es sv".split(" ");
const sitemapPaths = [...new Set(["sitemap.xml","sitemap-eu.xml"].flatMap(file =>
 [...fs.readFileSync(path.join(process.env.BASELINE_SOURCE || ".", "public", file), "utf8").matchAll(/<loc>(.*?)<\/loc>/gs)].map(m=>m[1].trim())
))].map(s=>new URL(s)).filter(u=>u.origin===origin && !u.search && !u.hash && /^\/[a-z]{2}\/(?:[a-z0-9-]+\/)*$/.test(u.pathname)).map(u=>u.pathname);
const core = {
 fr:["product","pricing","generate","verify","verify/demo","product/methodology","product/compliance"],
 en:["product","pricing","generate","verify","verify/demo","product/methodology","product/compliance"],
 de:["produkt","preise","erstellen","pruefen","pruefen/demo","methodik","grenzen-und-compliance"]
};
const capturePaths = [...new Set([...locales.flatMap(l=>["/"+l+"/","/"+l+"/"+(l==="de"?"erstellen":"generate")+"/"]), ...Object.entries(core).flatMap(([l,rs])=>rs.map(r=>"/"+l+"/"+r+"/"))])];
const routes = [...new Set([...sitemapPaths,...capturePaths])];
const allowed = new Set([...routes,"/robots.txt","/sitemap.xml","/sitemap-eu.xml"]);
const sensitive = /(?:^|\/)(?:api|success|erfolg|checkout|redeem-key|signin|signup)(?:\/|$)/i;
const isPublic = u=>u.origin===origin && !u.username && !u.password && !sensitive.test(u.pathname);
const report = {observedAt:new Date().toISOString(),origin,productionReference:"71e6cd87a8c04041ff58be4db99a6fa49cb8c40a",sitemapCount:sitemapPaths.length,http:[],captures:[],failures:[],limitations:["No form submissions, no API requests, no payments; third-party assets blocked for privacy and reproducibility. HTTP and screenshots are observations, not live checkout tests."]};
fs.mkdirSync(root,{recursive:true});
const fail=(s)=>report.failures.push(s);
async function getPublic(p) {
 const u=new URL(p,origin);
 if(!isPublic(u)||!allowed.has(u.pathname)||u.search||u.hash)throw Error("Non-allowlisted path");
 const r=await fetch(u,{redirect:"manual",signal:AbortSignal.timeout(20000),headers:{"user-agent":"Certif-Scope read-only QA"}});
 return {path:p,status:r.status,location:r.headers.get("location"),contentType:r.headers.get("content-type"),robots:r.headers.get("x-robots-tag")};
}
(async()=>{
 let browser;
 try {
  for(const p of [...routes,"/robots.txt","/sitemap.xml","/sitemap-eu.xml"]){
   try {const r=await getPublic(p);report.http.push(r);if(r.status!==200)fail("HTTP "+p+" "+r.status);}
   catch(e){fail("HTTP "+p+" "+e.message);}
   await new Promise(r=>setTimeout(r,150));
  }
  browser=await puppeteer.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH,headless:true,args:["--no-sandbox","--disable-dev-shm-usage","--disable-background-networking"]});
  const page=await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request",async req=>{
    try {
      const u=new URL(req.url());
      if(["data:","blob:"].includes(u.protocol))return await req.continue();
      const staticAsset=/^\/_next\/(?:static\/|image(?:\/|$))/.test(u.pathname)||/\.(?:png|webp|svg|jpe?g|ico|woff2?|ttf|css|js)$/i.test(u.pathname);
      if(!["GET","HEAD"].includes(req.method())||!isPublic(u)||(!allowed.has(u.pathname)&&!staticAsset))return await req.abort();
      await req.continue();
    }catch{try{await req.abort()}catch{}}
  });
  for(const p of capturePaths){
    for(const width of [1440,390]){
      const errors=[];const handle=e=>errors.push(e.message);page.on("pageerror",handle);
      try{
        await page.setViewport({width,height:width===1440?900:844,deviceScaleFactor:1});
        const r=await page.goto(origin+p,{waitUntil:"domcontentloaded",timeout:25000});
        await page.waitForSelector("h1",{timeout:10000});
        await page.evaluate(()=>document.fonts.ready);
        const facts=await page.evaluate(()=>({
          title:document.title,lang:document.documentElement.lang,h1:[...document.querySelectorAll("h1")].map(x=>x.innerText),
          overflow:document.documentElement.scrollWidth>innerWidth+1,canonical:document.querySelector('link[rel="canonical"]')?.href||null,
          alternateCount:document.querySelectorAll('link[rel="alternate"][hreflang]').length,
          links:[...document.querySelectorAll("a[href]")].map(a=>a.getAttribute("href")).filter(h=>h && !h.includes("?") && !h.includes("/api/")).slice(0,200)
        }));
        const file=p.replace(/^\/|\/$/g,"").replace(/\//g,"-")+"-"+width+".png";
        await page.screenshot({path:path.join(root,file),fullPage:true});
        report.captures.push({path:p,width,status:r?.status(),file,...facts,errors});
        if(r?.status()!==200||facts.overflow||facts.lang!==p.split("/")[1]||errors.length)fail("Browser "+p+" "+width+" "+JSON.stringify({status:r?.status(),overflow:facts.overflow,lang:facts.lang,errors}));
      }catch(e){fail("Browser "+p+" "+width+" "+e.message);}
      finally{page.off("pageerror",handle);}
    }
  }
 }catch(e){fail(e.message);}
 finally{if(browser)await browser.close();fs.writeFileSync(path.join(root,"report.json"),JSON.stringify(report,null,2));console.log(JSON.stringify({http:report.http.length,captures:report.captures.length,failures:report.failures},null,2));if(report.failures.length)process.exitCode=1;}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
