import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact | Nexari Labs",
  description:
    "Start a conversation with Nexari Labs to activate AI automation and intelligent operations across your enterprise.",
};

export default function Contact() {
  return <ContactPage />;
}
