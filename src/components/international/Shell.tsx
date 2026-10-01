import Header from "@/components/fr/Header";
import Footer from "@/components/fr/Footer";
import { getHomeContent, getHomeNavigation } from "@/lib/home-content";
import type { EuHomeLocale } from "@/lib/eu-home-locales";

export default function Shell({
  locale,
  children,
}: {
  locale: EuHomeLocale;
  children: React.ReactNode;
}) {
  const copy = getHomeContent(locale);
  const navigation = getHomeNavigation(locale, copy);
  return (
    <div lang={locale} className="bg-white text-gray-800">
      <Header locale={locale} navigation={navigation} />
      <main id="main-content" className="pt-[88px] lg:pt-[110px]">
        {children}
      </main>
      <Footer copy={copy} navigation={navigation} />
    </div>
  );
}
