import type { Metadata } from "next";
import MilletsClient from "./MilletsClient";

export const metadata: Metadata = {
  title: "Millets Exporter | Riyan Foods & Spices LLP, Gujarat, India",
  description:
    "Riyan Foods & Spices LLP is a millets exporter based in Bhavnagar, Gujarat, India. We export pearl millet, finger millet, foxtail millet, sorghum, and other Indian millets to global markets.",
};

export default function MilletsPage() {
  return <MilletsClient />;
}
