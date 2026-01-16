import type { Metadata } from "next";
import PulsesClient from "./PulsesClient";

export const metadata: Metadata = {
  title: "Pulses & Lentils Exporter | Riyan Foods & Spices LLP, Gujarat",
  description:
    "Riyan Foods & Spices LLP is a pulses and lentils exporter based in Bhavnagar, Gujarat, India. We export chickpeas, lentils, kidney beans, green gram, and other pulses to global markets.",
};

export default function PulsesPage() {
  return <PulsesClient />;
}
