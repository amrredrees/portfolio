import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amr Edrees | Performance Marketing & Growth Specialist",
    template: "%s"
  },
  description:
    "Performance marketing and growth for GCC B2B and real estate teams focused on qualified pipeline, tracking, CRM feedback, and revenue decisions."
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
