import RegulatoryArticle, { regulatoryMetadata } from "@/components/fr/RegulatoryArticle";
import { articles } from "@/lib/fr/marches-publics-2026-content";

export const metadata = regulatoryMetadata(articles.guide);

export default function CritereEnvironnementalAppelOffres() {
  return <RegulatoryArticle articleKey="guide" />;
}
