import RegulatoryArticle, { regulatoryMetadata } from "@/components/fr/RegulatoryArticle";
import { articles } from "@/lib/fr/marches-publics-2026-content";

export const metadata = regulatoryMetadata(articles.obligations);

export default function MarchesPublics2026() {
  return <RegulatoryArticle articleKey="obligations" />;
}
