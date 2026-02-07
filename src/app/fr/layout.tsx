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
