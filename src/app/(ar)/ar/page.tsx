import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "عمرو إدريس | متخصص تسويق أداء ونمو",
  description:
    "أنظمة نمو لفرق الخليج تربط الإعلانات بالفرص المؤهلة، التتبع، ملاحظات المبيعات، والإيرادات.",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar"
    }
  },
  openGraph: {
    title: "عمرو إدريس | متخصص تسويق أداء ونمو",
    description: "حوّل الإنفاق التسويقي إلى نمو يمكن قياسه بوضوح أكبر وقرارات أقوى.",
    type: "website"
  }
};

export default function ArabicHome() {
  return <PortfolioPage locale="ar" />;
}
