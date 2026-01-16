"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

/* =========================================================
   MILLETS CATEGORY PAGE – FINAL REFINED VERSION
========================================================= */
const ITEMS_PER_PAGE = 9;

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProductCollection",
      "name": "Indian Millets Export",
      "description":
        "Export of Indian millets including pearl millet, finger millet, foxtail millet, sorghum and other nutrient-rich millets.",
      "brand": {
        "@type": "Organization",
        "name": "Riyan Foods & Spices LLP"
      },
      "areaServed": [
        "Middle East",
        "Africa",
        "Europe",
        "Asia",
        "Global"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhavnagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    }),
  }}
/>


export default function MilletsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(millets.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = millets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="bg-white overflow-hidden">






<Head>
  <title>
    Millets Exporter from Gujarat, India | Riyan Foods & Spices LLP
  </title>

  <meta
    name="description"
    content="Riyan Foods & Spices LLP is a merchant exporter based in Bhavnagar, Gujarat, India, exporting premium Indian Millets to Middle East and global markets with export-grade quality and compliance."
  />

  <meta name="keywords" content="
    Millets exporter india,
    Millets exporter gujarat,
    Millets exporter bhavnagar,
    indian Millets exporter,
    Pearl Millet exporter india,
    Finger Millet exporter india,
    Foxtail Millet exporter india,
    merchant exporter india
  " />

  {/* LOCATION SEO */}
  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Bhavnagar, Gujarat, India" />
  <meta name="geo.position" content="21.7645;72.1519" />
  <meta name="ICBM" content="21.7645, 72.1519" />

  {/* BUSINESS INFO */}
  <meta name="author" content="Riyan Foods & Spices LLP" />
  <meta name="copyright" content="Riyan Foods & Spices LLP" />

  {/* INDEXING */}
  <meta name="robots" content="index, follow" />

  {/* OPEN GRAPH (NO VISUAL SEO, JUST META) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Millets Exporter from India | Riyan Foods & Spices LLP" />
  <meta
    property="og:description"
    content="Merchant exporter of Indian Millets from Gujarat supplying Middle East and global markets."
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.riyanexim.parvamsoftech.com/products/millets"
  />
</Head>

      {/* ================= HERO ================= */}
      <section className="relative">
        <MilletsHeroGraphics />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-25 pb-28 sm:pb-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs font-semibold tracking-wider text-brand-main uppercase">
              Product Category
            </span>

            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold text-neutral-900">
              Indian Millets
              <span className="block text-brand-main">
                for Global Markets
              </span>
            </h1>

            <p className="mt-6 text-[16px] leading-[1.7] text-neutral-600 max-w-xl">
              Nutrient-rich Indian millets supplied with export-grade cleaning,
              grading, and packaging for international buyers.
            </p>
          </motion.div>

          <motion.img
            src="/images/product/Millets.png"
            alt="Indian millets export"
            className="h-[260px] sm:h-[420px] w-full object-cover rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-28">

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-16">
            Millets We Export
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
            >
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 rounded-2xl p-4 transition
                    hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <div className="h-28 w-28 rounded-xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        Export-grade quality available
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ================= PAGINATION ================= */}
          <div className="mt-20 flex justify-center gap-3 flex-wrap">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-10 w-10 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105
                  ${
                    page === i + 1
                      ? "bg-brand-main text-white"
                      : "bg-white border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900">
              Quality & Specifications
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
              Our millets are cleaned, graded, and processed to retain nutrition,
              uniformity, and compliance with global food safety standards.
            </p>

            <ul className="mt-8 space-y-3 text-sm font-semibold text-neutral-700">
              <li>✔ Machine cleaned & graded</li>
              <li>✔ Low moisture content</li>
              <li>✔ Uniform grain size</li>
              <li>✔ Export documentation ready</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <p className="text-sm font-semibold text-neutral-700 mb-4">
              Available Forms
            </p>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>• Whole millets</li>
              <li>• Dehulled millets</li>
              <li>• Customized specifications</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= PACKAGING ================= */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36">
          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 mb-16">
            Packaging Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
            <PackagingItem label="25kg / 50kg PP Bags" />
            <PackagingItem label="Paper & Laminated Bags" />
            <PackagingItem label="Private Label Packaging" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-white">
        <MilletsCTAGraphics />

        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
              Millets Export Enquiry
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-5xl font-semibold text-neutral-900">
              Enquire for
              <span className="block text-brand-main">
                Indian Millets Export
              </span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600">
              Contact our export team to discuss grades, packaging,
              destination markets, and pricing.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center mt-12 px-10 py-5 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              Contact Export Team →
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

/* ================= DATA ================= */

const millets = [
  { name: "Pearl Millet (Bajra)", image: "/images/products/millets/Pearl Millet.png" },
  { name: "Finger Millet (Ragi)", image: "/images/products/millets/Finger Millet.png" },
  { name: "Foxtail Millet", image: "/images/products/millets/Foxtail Millet.png" },
  { name: "Kodo Millet", image: "/images/products/millets/Kodo Millet.png" },
  { name: "Sorghum Millet (Jowar)", image: "/images/products/millets/Sorghum Millet.png" },
];

/* ================= GRAPHICS ================= */

function MilletsHeroGraphics() {
  return (
    <motion.div
      className="absolute -top-40 -right-48 h-[600px] w-[600px] rounded-full bg-brand-main/12 blur-[140px]"
      animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function MilletsCTAGraphics() {
  return (
    <motion.div
      className="absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-main/16 blur-[140px]"
      animate={{ y: [0, -60, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function PackagingItem({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] text-sm font-semibold text-neutral-700 text-center"
    >
      {label}
    </motion.div>
  );
}
