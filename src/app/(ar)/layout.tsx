import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "عمرو إدريس | متخصص تسويق أداء ونمو",
    template: "%s"
  },
  description:
    "تسويق أداء ونمو لفرق الخليج يركز على الفرص المؤهلة، التتبع، ملاحظات المبيعات، وقرارات الإيرادات."
};

export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
