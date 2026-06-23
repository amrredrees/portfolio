import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amr Edrees | Performance Marketing & Growth Specialist",
    template: "%s"
  },
  description:
    "Performance marketing and growth portfolio focused on lead generation, funnels, tracking, CRM feedback loops, reporting, and growth decisions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
