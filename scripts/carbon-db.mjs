import {Pool} from "pg";import {readFile} from "node:fs/promises";
if(!process.env.CARBON_DATABASE_URL)throw Error("CARBON_DATABASE_URL required");
const db=new Pool({connectionString:process.env.CARBON_DATABASE_URL});
try{if(process.argv[2]==="migrate")await db.query(await readFile(new URL("../migrations/001_carbon.sql",import.meta.url),"utf8"));else if(process.argv[2]==="purge")await db.query("BEGIN; DELETE FROM carbon_redemptions WHERE report_id IN (SELECT id FROM carbon_reports WHERE expires_at<now()); DELETE FROM carbon_reports WHERE expires_at<now(); DELETE FROM carbon_events WHERE created_at<now()-interval '30 days'; DELETE FROM carbon_limits WHERE expires_at<now(); COMMIT;");else throw Error("migrate or purge required");}finally{await db.end();}
