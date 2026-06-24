// PATH: src/app/de/layout.tsx
import HeaderDE from "@/components/de/Header";
import FooterDE from "@/components/de/Footer";

import "../../styles/index.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function DELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="de"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <HeaderDE />
      <main className="pt-[110px]">{children}</main>
      <FooterDE />
    </div>
  );
}
