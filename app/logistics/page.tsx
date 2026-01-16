import type { Metadata } from "next";
import LogisticsClient from "./LogisticsClient";

export const metadata: Metadata = {
  title: "Export Logistics & Shipment Handling | Riyan Foods & Spices LLP",
  description:
    "Riyan Foods & Spices LLP manages export logistics including containerized shipments, port coordination, documentation, and international delivery for food products exported from Gujarat, India to global markets.",
};

export default function LogisticsPage() {
  return <LogisticsClient />;
}
