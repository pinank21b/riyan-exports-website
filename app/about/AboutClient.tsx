"use client";

import { motion } from "framer-motion";
import Head from "next/head";


/* =========================================================
   ABOUT PAGE – PREMIUM MAX-ANIMATION VERSION
========================================================= */
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Riyan Foods & Spices LLP",
      "url": "https://www.riyanfoods.com",
      "email": "sales@riyanexims.parvamsoftech.com",
      "telephone": "+91-7874574687",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhavnagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "foundingDate": "2024",
      "description":
        "Merchant exporter of Indian spices, grains, pulses, millets, and dehydrated food products serving Middle East and global markets."
    }),
  }}
/>

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
<Head>
  <title>
    About Us | Merchant Exporter from Gujarat, India | Riyan Foods & Spices LLP
  </title>

  <meta
    name="description"
    content="Learn about Riyan Foods & Spices LLP, a professionally managed merchant exporter based in Bhavnagar, Gujarat, India, supplying export-ready food products to Middle East and international markets."
  />

  <meta name="keywords" content="
    about exporter company india,
    merchant exporter gujarat,
    food export company india,
    exporter from bhavnagar
  " />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/about" />
</Head>

      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <HeroGraphicsUltra />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
                About Us
              </span>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-neutral-900">
                Designed for
                <span className="block text-brand-main">
                  Global Food Exports
                </span>
              </h1>

              <p className="mt-6 text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
                Riyan Foods & Spices LLP is a professionally structured export
                organization operating with compliance-driven systems and
                long-term international trade focus.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateZ: -1 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] overflow-hidden shadow-[0_60px_140px_rgba(0,0,0,0.2)]"
            >
              <motion.img
                src="/images/about/about.png"
                alt="Export operations"
                className="h-[440px] w-full object-cover"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black/12" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
         SNAPSHOT
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <SnapshotGraphicsUltra />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <Metric value="30+" label="Export Products" />
            <Metric value="15+" label="Countries Served" />
            <Metric value="100%" label="Export Ready Operations" />
            <Metric value="B2B" label="Trade Focused" />
          </div>
        </div>
      </section>

      {/* =====================================================
         OPERATIONS
      ===================================================== */}
      <section className="relative bg-white">
        <OperationsGraphics />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <h2 className="text-4xl font-semibold text-neutral-900 mb-28">
            How We Operate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
            <OperationCard step="01" title="Sourcing" image="/images/about/sourcing.jpg" />
            <OperationCard step="02" title="Processing" image="/images/about/processing.jpg" />
            <OperationCard step="03" title="Packaging" image="/images/about/packaging.jpg" />
            <OperationCard step="04" title="Logistics" image="/images/about/logistics.jpg" />
          </div>
        </div>
      </section>

      {/* =====================================================
         VALUES
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <ValuesGraphicsUltra />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <h2 className="text-4xl font-semibold text-neutral-900 mb-28">
            Our Commitments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
            <ValueCard title="Consistency" />
            <ValueCard title="Compliance" />
            <ValueCard title="Transparency" />
            <ValueCard title="Long-Term Partnerships" />
          </div>
        </div>
      </section>

      {/* =====================================================
         CTA – ENHANCED PREMIUM
      ===================================================== */}
      <section className="relative bg-white">
        <CTAGraphicsUltra />

        <div className="relative mx-auto max-w-7xl px-6 py-44">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
              Work With Us
            </span>

            <h2 className="mt-6 text-5xl font-semibold text-neutral-900">
              Build a Reliable
              <span className="block text-brand-main">
                Export Partnership
              </span>
            </h2>

            <p className="mt-6 text-[17px] leading-[1.7] text-neutral-600">
              We work with importers, distributors, and private labels seeking
              structured supply, documentation accuracy, and long-term
              collaboration.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center mt-12 px-10 py-5 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            >
              Start a Conversation →
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   GRAPHICS – ULTRA VERSION
========================================================= */

function HeroGraphicsUltra() {
  return (
    <>
      <motion.div
        className="absolute -top-40 -right-48 h-[700px] w-[700px] rounded-full bg-brand-main/12 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], rotate: [0, 12, -10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-72 left-20 h-[260px] w-[260px] rounded-full bg-brand-main/20 blur-3xl"
        animate={{ x: [0, -40, 60, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 h-[180px] w-[180px] rounded-full bg-brand-main/25 blur-2xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function SnapshotGraphicsUltra() {
  return (
    <motion.svg
      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08]"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="300" cy="300" r="260" stroke="#2f7d4e" strokeWidth="2" fill="none" />
      <circle cx="300" cy="300" r="200" stroke="#2f7d4e" strokeWidth="2" fill="none" />
    </motion.svg>
  );
}

function OperationsGraphics() {
  return (
    <motion.div
      className="absolute left-[-200px] top-1/2 h-[500px] w-[500px] rounded-full bg-brand-main/10 blur-[140px]"
      animate={{ y: [0, -80, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function ValuesGraphicsUltra() {
  return (
    <motion.div
      className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-main/12 blur-[150px]"
      animate={{ x: [0, -60, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function CTAGraphicsUltra() {
  return (
    <>
      <motion.div
        className="absolute -top-32 right-20 h-[420px] w-[420px] rounded-full bg-brand-main/18 blur-[120px]"
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 h-[260px] w-[260px] rounded-full bg-brand-main/22 blur-[100px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ rotateX: -8, rotateY: 6, scale: 1.06 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="rounded-2xl bg-white p-12 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="text-5xl font-semibold text-neutral-900">{value}</div>
      <div className="mt-4 text-sm uppercase tracking-wider text-neutral-500">
        {label}
      </div>
    </motion.div>
  );
}

function OperationCard({
  step,
  title,
  image,
}: {
  step: string;
  title: string;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -14 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="group"
    >
      <div className="relative rounded-xl overflow-hidden mb-8">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="text-brand-main text-sm font-semibold">{step}</div>
      <h3 className="mt-3 text-xl font-semibold text-neutral-900">{title}</h3>
    </motion.div>
  );
}

function ValueCard({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ rotateX: -6, rotateY: 6, scale: 1.07 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="relative rounded-3xl bg-white p-14 shadow-[0_40px_100px_rgba(0,0,0,0.16)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="mb-6 h-14 w-14 rounded-full bg-brand-main/12 flex items-center justify-center">
        <div className="h-6 w-6 rounded-full bg-brand-main" />
      </div>

      <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
      <div className="mt-6 h-1 w-20 bg-brand-main" />
    </motion.div>
  );
}
