"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
/* =========================================================
   QUALITY PAGE – REFINED PREMIUM VERSION
========================================================= */

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Riyan Foods & Spices LLP",
      "description":
        "Merchant exporter implementing export-grade quality control systems for food products including spices, grains, pulses, millets, and dehydrated foods.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhavnagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Export Quality Control",
        "Food Safety Standards",
        "Product Grading",
        "Packaging Compliance",
        "International Food Regulations"
      ]
    }),
  }}
/>


export default function QualityPage() {
  return (
    <main className="bg-white overflow-hidden">
<Head>
  <title>
    Quality & Compliance | Food Export Standards | Riyan Foods & Spices LLP
  </title>

  <meta
    name="description"
    content="Riyan Foods & Spices LLP follows strict quality control, food safety, and export compliance standards to ensure reliable supply for international food importers."
  />

  <meta name="keywords" content="
    food export quality india,
    export compliance india,
    quality control food export,
    indian food exporter quality
  " />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/quality" />
</Head>

      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <QualityHeroGraphics />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-29 pb-28 sm:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
                Quality Assurance
              </span>

              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-semibold leading-tight text-neutral-900">
                Built for 
                <span className="block text-brand-main">
                  Global Compliance
                </span>
              </h1>

              <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
                Every shipment is backed by structured quality controls,
                documentation accuracy, and packaging discipline aligned
                with global food trade standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            >
              <motion.img
                src="/images/quality/quality.jpg"
                alt="Food quality inspection"
                className="h-[260px] sm:h-[420px] w-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
         QUALITY CONTROL PROCESS
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36">

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-20">
            Quality Control Process
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20">

            {/* Animated Flow Line */}
            

            <QualityStep step="01" title="Raw Material Inspection" image="/images/quality/inspection.jpg" />
            <QualityStep step="02" title="Quality Testing" image="/images/quality/testing.jpg" />
            <QualityStep step="03" title="Controlled Packaging" image="/images/quality/packaging.jpg" />

          </div>
        </div>
      </section>

      {/* =====================================================
         CERTIFICATIONS
      ===================================================== */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36">

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-20">
            Certifications & Compliance
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            <ComplianceBadge label="FSSAI Registered" />
            <ComplianceBadge label="Export Documentation Ready" />
            <ComplianceBadge label="Global Food Standards" />
            <ComplianceBadge label="Customs & Port Compliance" />
          </div>
        </div>
      </section>

      {/* =====================================================
         PACKAGING
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900">
              Packaging & Handling
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
              Packaging formats are customized based on product type,
              destination market, transit duration, and buyer
              specifications to ensure product integrity until delivery.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl bg-white p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <ul className="space-y-4 text-sm font-semibold text-neutral-700">
              <li>✔ Food-grade packaging materials</li>
              <li>✔ Moisture & contamination protection</li>
              <li>✔ Export carton & pallet standards</li>
              <li>✔ Labeling as per destination norms</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
         CTA
      ===================================================== */}
      <section className="relative bg-white">
        <QualityCTAGraphics />

        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
              Quality Discussion
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-5xl font-semibold text-neutral-900">
              Request Detailed
              <span className="block text-brand-main">
                Quality Specifications
              </span>
            </h2>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center mt-12 px-10 py-5 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              Contact Quality Team →
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

function QualityHeroGraphics() {
  return (
    <>
      <motion.div
        className="absolute -top-40 -right-48 h-[680px] w-[680px] rounded-full bg-brand-main/12 blur-[140px]"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-brand-main/10 blur-[140px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function QualityCTAGraphics() {
  return (
    <motion.div
      className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-main/16 blur-[140px]"
      animate={{ y: [0, -60, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function QualityStep({ step, title, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
        <img src={image} alt={title} className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>

      <div className="text-brand-main text-sm font-bold">{step}</div>
      <h3 className="mt-2 text-xl font-semibold text-neutral-900">{title}</h3>
    </motion.div>
  );
}

function ComplianceBadge({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-neutral-200 py-8 text-center text-sm font-semibold text-neutral-700 shadow-sm"
    >
      {label}
    </motion.div>
  );
}
