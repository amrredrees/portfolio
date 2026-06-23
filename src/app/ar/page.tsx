import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "عمرو إدريس | متخصص تسويق أداء ونمو",
  description:
    "بورتفوليو تسويق أداء ونمو يركز على توليد الليدز، الفانلز، التتبع، CRM، التقارير، وقرارات النمو.",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar"
    }
  },
  openGraph: {
    title: "عمرو إدريس | متخصص تسويق أداء ونمو",
    description:
      "ليدز أفضل، تتبع أوضح، فانلز أقوى، وقرارات نمو أذكى.",
    type: "website"
  }
};

export default function ArabicHome() {
  return <PortfolioPage locale="ar" />;
}
