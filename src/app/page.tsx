import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Amr Edrees | Performance Marketing & Growth Specialist",
  description:
    "Performance marketing and growth portfolio focused on lead generation, funnels, tracking, CRM feedback loops, reporting, and growth decisions.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar"
    }
  },
  openGraph: {
    title: "Amr Edrees | Performance Marketing & Growth Specialist",
    description:
      "Better leads, cleaner tracking, stronger funnels, and smarter growth decisions.",
    type: "website"
  }
};

export default function Home() {
  return <PortfolioPage locale="en" />;
}
