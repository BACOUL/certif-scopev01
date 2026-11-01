import RegulatoryArticle, { regulatoryMetadata } from "@/components/fr/RegulatoryArticle";
import { articles } from "@/lib/fr/marches-publics-2026-content";

export const metadata = regulatoryMetadata(articles.exemple);

export default function ExempleCritereEnvironnemental10() {
  return <RegulatoryArticle articleKey="exemple" />;
}
