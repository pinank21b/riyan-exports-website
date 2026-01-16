import type { Metadata } from "next";
import GrainsClient from "./GrainsClient";

export const metadata: Metadata = {
  title: "Rice & Grains Exporter | Riyan Foods & Spices LLP, Gujarat",
  description:
    "Riyan Foods & Spices LLP is a rice and grains exporter based in Bhavnagar, Gujarat, India. We export basmati rice, non-basmati rice, wheat, maize, and other grains to global markets.",
};

export default function GrainsPage() {
  return <GrainsClient />;
}
