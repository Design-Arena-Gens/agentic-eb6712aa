import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About | Nexari Labs",
  description:
    "Nexari Labs is a global AI automation and IT solutions agency delivering enterprise-scale transformation.",
};

export default function About() {
  return <AboutPage />;
}
