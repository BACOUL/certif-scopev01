import "./style.css";
import { headers } from "next/headers";
export const metadata={title:"Certif-Scope | Fiche de données carbone fournisseur",description:"Énergie et scopes 1 et 2 déclarés. Sans audit ni certification indépendante.",robots:{index:false,follow:false}};
export default async function Layout({children}:{children:React.ReactNode}){const h=await headers();return <html lang={h.get("x-site-locale")||"fr"}><body>{children}</body></html>}
