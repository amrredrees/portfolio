import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "عمرو إدريس | متخصص تسويق أداء ونمو",
  description:
    "أنظمة نمو لفرق B2B والعقارات في الخليج تربط الإعلانات بالفرص المؤهلة، التتبع، CRM، والإيرادات.",
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
      "حوّل الإنفاق الإعلاني في الخليج إلى فرص B2B وعقارية مؤهلة.",
    type: "website"
  }
};

export default function ArabicHome() {
  return <PortfolioPage locale="ar" />;
}
