import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amr Edrees | Performance Marketing & Growth Specialist",
    template: "%s"
  },
  description:
    "Performance marketing and growth for GCC teams focused on qualified pipeline, tracking, sales feedback, and revenue decisions."
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
