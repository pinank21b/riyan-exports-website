import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title:
    "Export Products | Spices, Rice, Grains & Pulses Exporter from India",
  description:
    "Explore the complete export product portfolio of Riyan Foods & Spices LLP, a merchant exporter based in Bhavnagar, Gujarat, India. We export Indian spices, basmati rice, grains, pulses, millets, and dehydrated food products to Middle East and global markets.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
