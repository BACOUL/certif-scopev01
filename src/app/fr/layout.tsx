import "../../styles/index.css";

/* ======================================================
   CONFIG FR
====================================================== */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ======================================================
   METADATA FR — BLOQUÉ SEO TEMPORAIREMENT
====================================================== */
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

/* ======================================================
   LAYOUT FR
   - volontairement minimal
   - aucun header/footer
====================================================== */
export default function FRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
