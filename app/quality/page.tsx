import type { Metadata } from "next";
import QualityClient from "./QualityClient";

export const metadata: Metadata = {
  title: "Quality Control & Export Standards | Riyan Foods & Spices LLP",
  description:
    "Riyan Foods & Spices LLP follows strict quality control, grading, and export compliance systems for spices, grains, pulses, millets, and dehydrated food products supplied globally from Gujarat, India.",
};

export default function QualityPage() {
  return <QualityClient />;
}
