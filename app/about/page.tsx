import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Riyan Foods & Spices LLP | Merchant Exporter from Gujarat",
  description:
    "Riyan Foods & Spices LLP is a merchant exporter based in Bhavnagar, Gujarat, India, supplying export-ready food products to Middle East and global markets.",
};

export default function AboutPage() {
  return <AboutClient />;
}