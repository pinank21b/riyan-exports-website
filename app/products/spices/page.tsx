import type { Metadata } from "next";
import SpicesClient from "./SpicesClient";

export const metadata: Metadata = {
  title: "Indian Spices Exporter | Riyan Foods & Spices LLP, Gujarat",
  description:
    "Riyan Foods & Spices LLP is an Indian spices exporter based in Bhavnagar, Gujarat. We export cumin, coriander, chilli, turmeric, pepper, and other spices to Middle East and global markets.",
};

export default function SpicesPage() {
  return <SpicesClient />;
}
