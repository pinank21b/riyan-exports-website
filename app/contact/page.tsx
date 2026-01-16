import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Riyan Foods & Spices LLP | Food Exporter in Gujarat, India",
  description:
    "Contact Riyan Foods & Spices LLP, a merchant exporter based in Bhavnagar, Gujarat, India. Enquire for spices, rice, grains, pulses, millets, and dehydrated food exports.",
};

export default function ContactPage() {
  return <ContactClient />;
}
