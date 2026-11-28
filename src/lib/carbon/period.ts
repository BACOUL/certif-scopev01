// Civil reporting date for the currently supported mainland French perimeter.
export const FIRST_REVIEW_YEAR=2023;
export const REVIEW_GEOGRAPHY="FR-METROPOLITAN-CONTINENTAL" as const;
export function reportingToday(now:Date=new Date()):string {
 const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(now);
 const get=(type:string)=>parts.find(p=>p.type===type)?.value;
 return get("year")+"-"+get("month")+"-"+get("day");
}
export function reportingYears(now:Date=new Date()):number[]{
 const year=Number(reportingToday(now).slice(0,4));
 return Array.from({length:Math.max(0,year-FIRST_REVIEW_YEAR+1)},(_,i)=>year-i);
}
export function reportingPeriod(year:number,now:Date=new Date()){
 const today=reportingToday(now);
 return {start:year+"-01-01",end:year===Number(today.slice(0,4))?today:year+"-12-31"};
}
