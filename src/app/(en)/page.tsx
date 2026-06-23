import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Amr Edrees | Performance Marketing & Growth Specialist",
  description:
    "Growth systems for GCC B2B and real estate teams that connect paid media, qualified pipeline, tracking, CRM feedback, and revenue.",
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
      "Turn GCC ad spend into qualified B2B pipeline and real estate opportunities.",
    type: "website"
  }
};

export default function Home() {
  return <PortfolioPage locale="en" />;
}
