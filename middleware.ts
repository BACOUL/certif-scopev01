import {NextRequest,NextResponse} from "next/server";
export function middleware(req:NextRequest){const h=new Headers(req.headers);const l=req.nextUrl.pathname.split("/")[1];h.set("x-site-locale",["fr","de","en"].includes(l)?l:"fr");const r=NextResponse.next({request:{headers:h}});r.headers.set("Referrer-Policy","no-referrer");r.headers.set("X-Content-Type-Options","nosniff");if(req.nextUrl.pathname.startsWith("/api")||req.nextUrl.pathname.includes("success"))r.headers.set("Cache-Control","no-store");return r;}
export const config={matcher:["/((?!_next/static|_next/image|favicon.ico).*)"]};
