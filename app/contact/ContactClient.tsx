"use client";

import { motion } from "framer-motion";
import Head from "next/head";
/* =========================================================
   CONTACT PAGE – PREMIUM VERSION
========================================================= */
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Riyan Foods & Spices LLP",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhavnagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7874574687",
        "contactType": "sales",
        "email": "sales@riyanexims.parvamsoftech.com"
      },
      "areaServed": "Worldwide",
      "description":
        "Merchant exporter of Indian spices, grains, pulses, millets, and dehydrated food products serving Middle East and global markets."
    }),
  }}
/>


export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">


<Head>
  <title>
    Contact Us | Food Export Enquiry | Riyan Foods & Spices LLP
  </title>

  <meta
    name="description"
    content="Contact Riyan Foods & Spices LLP for food export enquiries. Based in Bhavnagar, Gujarat, India, we serve Middle East and global markets."
  />

  <meta name="keywords" content="
    contact food exporter india,
    export enquiry gujarat,
    merchant exporter contact india
  " />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/contact" />
</Head>


      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <ContactHeroGraphics />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-35 pb-24 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-main uppercase">
              Get in Touch
            </span>

            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-semibold leading-tight text-neutral-900">
              Let’s Discuss Your
              <span className="relative block text-brand-main">
                Export Requirements
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] w-full bg-brand-main/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h1>

            <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.7] text-neutral-600">
              Share your product requirements, destination market, and quantity.
              Our export team will respond with specifications, pricing, and next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
         FORM + CONTEXT
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-10 sm:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              Export Enquiry
            </h2>
            <p className="text-sm text-neutral-500 mb-8">
              All enquiries are handled confidentially by our export team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Full Name" />
              <Input label="Company Name" />
              <Input label="Email Address" />
              <Input label="Contact Number" />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Product Category
              </label>
              <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-main">
                <option>Select category</option>
                <option>Spices</option>
                <option>Rice & Grains</option>
                <option>Pulses & Lentils</option>
                <option>Millets</option>
                <option>Dehydrated Products</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Message / Export Details
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-main"
                placeholder="Quantity, destination country, packaging, incoterms, etc."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative mt-10 inline-flex items-center px-10 py-4 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              Submit Export Enquiry →
            </motion.button>

            <p className="mt-6 text-xs text-neutral-500">
              Typical response time: 24–48 business hours
            </p>
          </motion.form>

          {/* RIGHT CONTEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-neutral-900">
              Why Contact Us?
            </h3>

            <ul className="mt-8 space-y-4 text-[15px] text-neutral-700">
              <li>✔ Export-ready products & documentation</li>
              <li>✔ Flexible packaging & labeling</li>
              <li>✔ Competitive international pricing</li>
              <li>✔ Reliable logistics coordination</li>
              <li>✔ Long-term supply partnerships</li>
            </ul>

            <div className="mt-12 text-sm text-neutral-600">
              📍 India<br />
              📧 sales@riyanfoods.com<br />
              📞 +91 78745 74687
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   GRAPHICS
========================================================= */

function ContactHeroGraphics() {
  return (
    <>
      <motion.div
        className="absolute -top-40 -right-48 h-[600px] w-[600px] rounded-full bg-brand-main/12 blur-[140px]"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-48 h-[500px] w-[500px] rounded-full bg-brand-main/10 blur-[140px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* =========================================================
   INPUT COMPONENT
========================================================= */

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-main transition"
      />
    </div>
  );
}
