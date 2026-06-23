import "../../styles/index.css";

/* ======================================================
   CONFIG DE
====================================================== */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ======================================================
   METADATA DE - PUBLIC DEFAULT
====================================================== */
export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

/* ======================================================
   LAYOUT DE
   - volontairement minimal
   - aucun header/footer
====================================================== */
export default function DELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
