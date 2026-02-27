// PATH: src/app/fr/layout.tsx
import "../../styles/index.css";

/* ======================================================
   CONFIG FR
====================================================== */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ======================================================
   METADATA FR — SEO ON
====================================================== */
export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

/* ======================================================
   LAYOUT FR
   IMPORTANT (Next.js App Router):
   - Un seul <html>/<body> autorisé : dans le root layout (src/app/layout.tsx)
   - Un layout segmenté (/fr) doit retourner un wrapper simple (div/section) + children
====================================================== */
export default function FRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="fr"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {children}
    </div>
  );
}
