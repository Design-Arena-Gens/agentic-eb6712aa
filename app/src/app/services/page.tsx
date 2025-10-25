import { ServicesPage } from "@/components/services/services-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Nexari Labs",
  description:
    "Strategy, automation engineering, and intelligent platforms for Fortune 500 enterprises deploying AI at scale.",
};

export default function Services() {
  return <ServicesPage />;
}
