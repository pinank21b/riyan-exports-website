
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Riyan Foods & Spices LLP | Food Exporter in Gujarat, India",
  description:
    "Riyan Foods & Spices LLP is a merchant exporter based in Bhavnagar, Gujarat, India, exporting spices, rice, grains, pulses, millets, and dehydrated food products to Middle East and global markets.",
};

export default function HomePage() {
  return <HomeClient />;
}
