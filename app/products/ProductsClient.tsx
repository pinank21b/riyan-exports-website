"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
/* =========================================================
   PRODUCTS – MAIN PAGE (FULL)
========================================================= */
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Export Product Portfolio",
      "description":
        "Export product categories including spices, rice, grains, pulses, millets, and dehydrated foods supplied by Riyan Foods & Spices LLP.",
      "provider": {
        "@type": "Organization",
        "name": "Riyan Foods & Spices LLP",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhavnagar",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      
      
      
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Spices", "url": "/products/spices" },
        { "@type": "ListItem", "position": 2, "name": "Rice & Grains", "url": "/products/grains" },
        { "@type": "ListItem", "position": 3, "name": "Pulses", "url": "/products/pulses" },
        { "@type": "ListItem", "position": 4, "name": "Millets", "url": "/products/millets" },
        { "@type": "ListItem", "position": 5, "name": "Dehydrated Products", "url": "/products/dehydrated" }
      ]
    }),
  }}
/>


export default function ProductsPage() {
  return (
    <main className="bg-white overflow-hidden">


<Head>
  <title>
    Export Products | Spices, Rice, Grains & Pulses Exporter from India
  </title>

  <meta
    name="description"
    content="Explore export products from Riyan Foods & Spices LLP including Indian spices, basmati rice, grains, pulses, millets, and dehydrated food products supplied globally."
  />

  <meta name="keywords" content="
    export products india,
    food exporter products,
    spices export india,
    rice export india,
    pulses export india
  " />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/products" />
</Head>

      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <ProductsHeroGraphics />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
                Our Products
              </span>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-neutral-900">
                Built for 
                <span className="block text-brand-main">
Global Markets                </span>
              </h1>

              <p className="mt-6 text-[17px] leading-[1.7] text-neutral-600 max-w-xl">
                A diversified range of Indian food products supplied with
                export-grade quality, packaging, and documentation for
                international markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.18)]"
            >
              <motion.img
                src="/images/product/product.jpg"
                alt="Export food products"
                className="h-[420px] w-full object-cover"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
         PRODUCT CATEGORIES
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-36">

          <h2 className="text-4xl font-semibold text-neutral-900 mb-24">
            Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-28">

            <ProductCategory title="Spices" subtitle="Whole & Ground Varieties" image="/images/product/Spices&Herbs.png" href="/products/spices" />
            <ProductCategory title="Rice & Grains" subtitle="Basmati & Non-Basmati" image="/images/product/Grains&Pulses.png" href="/products/grains" />
            <ProductCategory title="Pulses & Lentils" subtitle="Sorted & Export Grade" image="/images/product/Pulses & Lentils.png" href="/products/pulses" />
            <ProductCategory title="Millets" subtitle="Cleaned & Processed" image="/images/product/Millets.png" href="/products/millets" />
            <ProductCategory title="Dehydrated Products" subtitle="Onion, Garlic & More" image="/images/product/DehydratedFoods.png" href="/products/dehydrated" />

          </div>
        </div>
      </section>

      {/* =====================================================
         COMPLETE EXPORT PRODUCT RANGE
      ===================================================== */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-36">

          <div className="max-w-3xl mb-24">
            <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
              Product Portfolio
            </span>
            <h2 className="mt-6 text-4xl font-semibold text-neutral-900">
              Complete Export Product Range
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-neutral-600">
              Our full product offering grouped by export categories.
            </p>
          </div>

          <div className="space-y-24">

            <ProductGroup title="Spices" href="/products/spices" items={["Cumin Seeds","Coriander Seeds","Fennel Seeds","Black Pepper","Red Chilli","Turmeric","Cardamom","Cloves","Dry Ginger"]} />
            <ProductGroup title="Rice & Grains" href="/products/grains" items={["Basmati Rice","Non-Basmati Rice","Wheat","Maize","Barley","Sorghum"]} />
            <ProductGroup title="Pulses & Lentils" href="/products/pulses" items={["Chickpeas","Green Gram","Black Gram","Red Lentils","Yellow Lentils","Kidney Beans","Pigeon Peas"]} />
            <ProductGroup title="Millets" href="/products/millets" items={["Pearl Millet","Finger Millet","Foxtail Millet","Little Millet","Barnyard Millet","Sorghum Millet"]} />
            <ProductGroup title="Dehydrated Products" href="/products/dehydrated" items={["Dehydrated Onion","Dehydrated Garlic","Dehydrated Ginger","Dehydrated Vegetables"]} />

          </div>
        </div>
      </section>

      {/* =====================================================
         CTA
      ===================================================== */}
      <section className="relative bg-white">
        <ProductsCTAGraphics />

        <div className="relative mx-auto max-w-7xl px-6 py-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
              Export Enquiry
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-semibold text-neutral-900">
              Discuss Category-Level
              <span className="block text-brand-main">
                Export Opportunities
              </span>
            </h2>

            <p className="mt-6 text-[17px] leading-[1.7] text-neutral-600">
              Connect with our export team to explore specifications,
              packaging formats, and supply possibilities.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center mt-12 px-10 py-5 text-sm font-semibold text-white bg-brand-main rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              Contact Our Export Team →
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

function ProductsHeroGraphics() {
  return (
    <motion.div
      className="absolute -top-40 -right-48 h-[680px] w-[680px] rounded-full bg-brand-main/12 blur-[140px]"
      animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function ProductsCTAGraphics() {
  return (
    <motion.div
      className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-main/14 blur-[140px]"
      animate={{ y: [0, -60, 0] }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function ProductCategory({ title, subtitle, image, href }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.14)]">
          <img src={image} alt={title} className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-sm uppercase tracking-wider text-neutral-500">{subtitle}</p>
        </div>
      </Link>

      <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-brand-main">
        View Category →
      </Link>
    </motion.div>
  );
}

function ProductGroup({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-neutral-200 pt-14"
    >
      <div className="flex items-center gap-6 mb-10">
        <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
        <Link href={href} className="inline-flex px-4 py-1.5 text-xs font-semibold text-brand-main border border-brand-main/30 rounded-full hover:bg-brand-main hover:text-white transition">
          View →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-4">
        {items.map((item) => (
          <motion.div key={item} whileHover={{ x: 6 }} transition={{ duration: 0.3 }} className="text-[15px] text-neutral-700">
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
