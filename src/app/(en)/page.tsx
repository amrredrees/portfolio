import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Amr Edrees | Performance Marketing & Growth Specialist",
  description:
    "Growth systems for GCC teams that connect paid media, qualified pipeline, tracking, sales feedback, and revenue.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar"
    }
  },
  openGraph: {
    title: "Amr Edrees | Performance Marketing & Growth Specialist",
    description: "Turn marketing spend into measurable growth with clearer tracking and stronger decisions.",
    type: "website"
  }
};

export default function Home() {
  return <PortfolioPage locale="en" />;
}
