import type { Metadata } from "next";
import DehydratedClient from "./DehydratedClient";

export const metadata: Metadata = {
  title: "Dehydrated Food Exporter | Riyan Foods & Spices LLP, Gujarat",
  description:
    "Riyan Foods & Spices LLP is a dehydrated food exporter based in Bhavnagar, Gujarat, India. We export dehydrated onion, garlic, ginger, and vegetable products to global markets.",
};

export default function DehydratedPage() {
  return <DehydratedClient />;
}
