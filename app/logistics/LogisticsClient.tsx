"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
/* =========================================================
   LOGISTICS PAGE – UPDATED (DIRECTIONAL IDENTITY)
========================================================= */

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Riyan Foods & Spices LLP",
      "description":
        "Merchant exporter managing international food export logistics including container handling, port coordination, and shipment documentation.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhavnagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Export Logistics",
        "Containerized Shipping",
        "Port Operations",
        "Export Documentation",
        "International Freight Handling"
      ]
    }),
  }}
/>


export default function LogisticsPage() {
  return (
    <main className="bg-white overflow-hidden">



<Head>
  <title>
    Export Logistics & Shipping | Food Exporter India | Riyan Foods
  </title>

  <meta
    name="description"
    content="Efficient export logistics and global shipping solutions by Riyan Foods & Spices LLP ensuring timely delivery of food products from India to international markets."
  />

  <meta name="keywords" content="
    export logistics india,
    food export shipping,
    merchant exporter logistics,
    containerized food export india
  " />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/logistics" />
</Head>



      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <LogisticsHeroFlow />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-19 pb-28 sm:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
                Export Logistics
              </span>

              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-semibold leading-tight text-neutral-900">
                Structured Global
                <span className="block text-brand-main">
                  Shipping Operations
                </span>
              </h1>

              <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
                Logistics operations designed for international trade —
                documentation accuracy, port coordination, and predictable
                delivery timelines.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            >
              <motion.img
                src="/images/logistics/logistics.jpg"
                alt="Global export logistics"
                className="h-[260px] sm:h-[420px] w-full object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
         EXPORT FLOW
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36">

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-20">
            Export Execution Flow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

            <FlowStep step="01" title="Order Lock" desc="Final specifications, pricing, and dispatch schedule confirmation." />
            <FlowStep step="02" title="Export Packing" desc="Shipment-ready packaging and container planning." />
            <FlowStep step="03" title="Documentation" desc="Invoice, packing list, COO, BL, and regulatory clearance." />
            <FlowStep step="04" title="Shipment" desc="Port handling, vessel booking, and final dispatch." />

          </div>
        </div>
      </section>

      {/* =====================================================
         SHIPPING MODES
      ===================================================== */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36">

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-20">
            Shipping Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">

            <CapabilityCard title="Sea Freight" desc="Containerized bulk shipments for cost efficiency." />
            <CapabilityCard title="Air Freight" desc="Time-critical shipments with faster transit." />
            <CapabilityCard title="Multi-Modal" desc="Flexible logistics based on destination." />

          </div>
        </div>
      </section>

      {/* =====================================================
         INCOTERMS
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900">
              Trade Terms & Coordination
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
              We operate under internationally accepted Incoterms with
              transparent coordination across ports, freight forwarders,
              and shipping lines.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <ul className="space-y-4 text-sm font-semibold text-neutral-700">
              <li>✔ FOB / CIF / CFR / EXW</li>
              <li>✔ Buyer-nominated forwarders</li>
              <li>✔ Destination compliance</li>
              <li>✔ Predictable dispatch timelines</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
         CTA
      ===================================================== */}
      <section className="relative bg-white">
        <LogisticsCTAGraphics />

        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
              Shipment Planning
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-5xl font-semibold text-neutral-900">
              Plan Your
              <span className="block text-brand-main">
                Export Movement
              </span>
            </h2>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center mt-12 px-10 py-5 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              Contact Logistics Team →
            </motion.a>

          </motion.div>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   GRAPHICS
========================================================= */

function LogisticsHeroFlow() {
  return (
    <>
      <motion.div
        className="absolute top-32 -left-60 h-[420px] w-[420px] rounded-full bg-brand-main/10 blur-[140px]"
        animate={{ x: [0, 120, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-60 h-[520px] w-[520px] rounded-full bg-brand-main/14 blur-[160px]"
        animate={{ x: [0, -140, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function LogisticsCTAGraphics() {
  return (
    <motion.div
      className="absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-main/16 blur-[140px]"
      animate={{ x: [0, 120, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function FlowStep({ step, title, desc }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="bg-white rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
    >
      <div className="text-brand-main text-sm font-bold">{step}</div>
      <h3 className="mt-3 text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-neutral-600">{desc}</p>
    </motion.div>
  );
}

function CapabilityCard({ title, desc }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
    >
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-4 text-[15px] leading-[1.6] text-neutral-600">{desc}</p>
    </motion.div>
  );
}
