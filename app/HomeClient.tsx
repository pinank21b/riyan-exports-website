"use client";
import Head from "next/head";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
/* ================= IMAGE SETS ================= */

const MAIN_IMAGES = [
  "/images/hero-main-1.png",
  "/images/hero-main-2.png",
  "/images/hero-main-3.png",
];

const SIDE_IMAGES = [
  "/images/hero-main-2.png",
  "/images/hero-main-3.png",
  "/images/hero-main-1.png",
];

const ACCENT_IMAGES = [
    "/images/hero-main-3.png",
  "/images/hero-main-1.png",
  "/images/hero-main-2.png",
];

export default function HomePage() {
  const heroRef = useRef(null);

  /* ================= IMAGE INDEX ================= */
  const [mainIndex, setMainIndex] = useState(0);
  const [sideIndex, setSideIndex] = useState(0);
  const [accentIndex, setAccentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainIndex((i) => (i + 1) % MAIN_IMAGES.length);
      setSideIndex((i) => (i + 1) % SIDE_IMAGES.length);
      setAccentIndex((i) => (i + 1) % ACCENT_IMAGES.length);
    }, 5200); // slow & premium

    return () => clearInterval(interval);
  }, []);

  /* ================= SCROLL MOTION ================= */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.88]);

  const mainImageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const sideImageY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const imageFade = useTransform(scrollYProgress, [0, 0.25], [1, 0.75]);

  return (
    <main>


<Head>
  <title>
    Riyan Foods & Spices LLP | Merchant Food Exporter from Gujarat, India
  </title>

  <meta
    name="description"
    content="Riyan Foods & Spices LLP is a merchant food exporter based in Bhavnagar, Gujarat, India. We export Indian spices, rice, grains, pulses, millets, and dehydrated food products to Middle East and global markets."
  />

  <meta name="keywords" content="
    exporter in gujarat,
    food exporter india,
    merchant exporter india,
    exporter in bhavnagar,
    indian food exporter,
    spices exporter india,
    grains exporter india,
    pulses exporter india
  " />

  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Bhavnagar, Gujarat, India" />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://www.riyanexim.parvamsoftech.com/" />
</Head>






      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-semibold leading-[1.15] tracking-tight text-neutral-900">
                Delivering India’s Finest Food Products
                <span className="block mt-2 text-brand-main">
                  from Gujarat to Global Buyers
                </span>
              </h1>

              <p className="mt-5 max-w-[500px] text-[16px] leading-[1.65] text-neutral-600">
                Riyan Foods & Spices LLP exports premium Indian spices, grains,
                pulses, millets, and dehydrated food products with a strong focus
                on quality, export compliance, and reliable international supply
                chains.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-brand-main px-9 py-3.5 text-sm font-medium text-white hover:bg-brand-dark transition"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/products"
                  className="rounded-md border border-neutral-300 px-9 py-3.5 text-sm font-medium text-neutral-800 hover:border-brand-main hover:text-brand-main transition"
                >
                  View Products
                </Link>
              </div>

              {/* ================= METRICS ================= */}
              <div className="mt-10 grid grid-cols-3 gap-6 text-[12px]">
                <div>
                  <span className="block text-lg font-semibold text-neutral-900 leading-tight">
                    30+
                  </span>
                  <span className="text-neutral-500">
                    Products
                  </span>
                </div>

                <div>
                  <span className="block text-lg font-semibold text-neutral-900 leading-tight">
                    15+
                  </span>
                  <span className="text-neutral-500">
                    Countries Served
                  </span>
                </div>

                <div>
                  <span className="block text-lg font-semibold text-neutral-900 leading-tight">
                    Export Ready
                  </span>
                  <span className="text-neutral-500">
                    Supply Chain
                  </span>
                </div>
              </div>

            </motion.div>

            {/* ================= RIGHT VISUAL STACK ================= */}
            <div className="relative hidden lg:block">

              {/* MAIN IMAGE */}
              <motion.div
                style={{ y: mainImageY, opacity: imageFade }}
                className="relative z-30 rounded-2xl bg-white shadow-2xl p-4"
              >
                <div className="relative h-[380px] w-[539px] overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mainIndex}
                      initial={{ opacity: 0.98, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.98, scale: 0.94 }}
                      transition={{
                        duration: 4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={MAIN_IMAGES[mainIndex]}
                        alt="Indian food export"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* SECONDARY IMAGE */}
              <motion.div
                style={{ y: sideImageY, opacity: imageFade }}
                className="absolute top-36 -left-28 z-20 rounded-xl bg-white shadow-xl p-3"
              >
                <div className="relative h-[180px] w-[260px] overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={sideIndex}
                      initial={{ opacity: 0.95, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.95, scale: 1.08 }}
                      transition={{
                        duration: 4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={SIDE_IMAGES[sideIndex]}
                        alt="Grains export"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ACCENT IMAGE */}
              <motion.div
                style={{ y: sideImageY, opacity: imageFade }}
                className="absolute bottom-4 -right-24 z-10 rounded-xl bg-white shadow-xl p-3"
              >
                <div className="relative h-[160px] w-[240px] overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={accentIndex}
                      initial={{ opacity: 0.9, scale: 1.12 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.9, scale: 0.92 }}
                      transition={{
                        duration: 4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={ACCENT_IMAGES[accentIndex]}
                        alt="Pulses export"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      {/* ================= HERO : END================= */}


      {/* ================= COMPANY SNAPSHOT================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-2 py-23">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-32">

            <CompanySnapshotTextUltra />
            <CompanySnapshotPillarsUltra />

          </div>
        </div>
      </section>
      {/* ================= COMPANY SNAPSHOT : END================= */}




      {/* ================= PRODUCT CATEGORIES ================= */}

<section className="relative bg-white">
  <div className="mx-auto max-w-7xl px-6 py-28">

    {/* HEADER */}
    <div className="max-w-3xl mb-24">
      <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
        Product Categories
      </span>
      <h2 className="mt-5 text-4xl sm:text-5xl font-semibold text-neutral-900">
        Our Export Portfolio
      </h2>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-28">
      <ProductTile
        title="Spices"
        subtitle="Whole & Ground"
        image="/images/product/Spices&Herbs.png"
        href="/products/spices"
        offset="down"
      />

      <ProductTile
        title="Rice & Grains"
        subtitle="Basmati & Non-Basmati"
        image="/images/product/Grains&Pulses.png"
        href="/products/grains"
        offset="up"
      />

      <ProductTile
        title="Pulses & Lentils"
        subtitle="Export Grade"
        image="/images/product/Pulses & Lentils.png"
        href="/products/pulses"
        offset="down"
      />

      <ProductTile
        title="Millets"
        subtitle="Cleaned & Processed"
        image="/images/product/Millets.png"
        href="/products/millets"
        offset="up"
      />

      <ProductTile
        title="Dehydrated Foods"
        subtitle="Onion, Garlic & More"
        image="/images/product/DehydratedFoods.png"
        href="/products/dehydrated"
        offset="down"
      />
    </div>
  </div>
</section>

      {/* ================= PRODUCT CATEGORIES : END ================= */}



{/* ================= WHY CHOOSE US ================= */}
<section className="relative bg-white overflow-hidden">
  <div className="mx-auto max-w-7xl px-6 py-28">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
        Why Choose Us
      </span>

      <h2 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight text-neutral-900">
        Built for Global Trade,
        <span className="block text-brand-main">
          Trusted by Serious Buyers
        </span>
      </h2>
    </motion.div>

    {/* TRUST SIGNALS */}
    <div className="relative mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-28">
      <TrustSignalUltra
        index="01"
        title="Export-Only Operations"
        subtitle="Every system, process, and decision is designed specifically for international trade."
        delay={0}
      />

      <TrustSignalUltra
        index="02"
        title="Quality Without Variations"
        subtitle="Standardized grading, controlled packaging, and consistency across shipments."
        delay={0.1}
      />

      <TrustSignalUltra
        index="03"
        title="Compliance-Ready Supply"
        subtitle="Documentation, labeling, and regulations handled with export accuracy."
        delay={0.2}
      />

      <TrustSignalUltra
        index="04"
        title="Supply Chain Stability"
        subtitle="Strong sourcing networks and predictable logistics execution."
        delay={0.3}
      />

      <TrustSignalUltra
        index="05"
        title="Clear & Direct Communication"
        subtitle="Timelines, updates, and commitments communicated transparently."
        delay={0.4}
      />

      <TrustSignalUltra
        index="06"
        title="Long-Term Export Mindset"
        subtitle="Focused on repeat business, private labels, and sustained partnerships."
        delay={0.5}
      />
    </div>
  </div>
</section>

{/* ================= WHY CHOOSE US : END================= */}


{/* ================= GLOBAL PRESENCE ================= */}
<section className="relative bg-white overflow-hidden">
  <div className="mx-auto max-w-7xl px-6 py-2">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-4xl"
    >
      <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
        Global Presence
      </span>

      <h2 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-neutral-900">
        Serving International Markets
        <span className="block text-brand-main">
          Across Continents
        </span>
      </h2>

      <p className="mt-5 text-[16px] leading-[1.65] text-neutral-600">
        Our export operations extend across key global regions, supporting
        importers, distributors, and private labels with consistent supply.
      </p>
    </motion.div>

    {/* METRICS */}
    <div className="relative mt-24 grid grid-cols-2 md:grid-cols-4 gap-12">
      <GlobalMetric label="Countries Served" value="15+" delay={0} />
      <GlobalMetric label="Product Categories" value="30+" delay={0.1} />
      <GlobalMetric label="Export Ready Supply" value="100%" delay={0.2} />
      
    </div>

    {/* REGIONS */}
    <div className="relative mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      <RegionCard
        title="Middle East"
        desc="UAE, Saudi Arabia, Qatar, Oman, Kuwait"
        delay={0}
      />

      <RegionCard
        title="Africa"
        desc="Kenya, Tanzania, Nigeria, South Africa"
        delay={0.1}
      />

      <RegionCard
        title="Asia"
        desc="Bangladesh, Sri Lanka, Nepal, Southeast Asia"
        delay={0.2}
      />

      <RegionCard
        title="Europe"
        desc="United Kingdom, Germany, Eastern Europe"
        delay={0.3}
      />
    </div>

  </div>
</section>
{/* ================= GLOBAL PRESENCE : END================= */}



{/* ================= FINAL CTA ================= */}
<section className="relative overflow-hidden bg-white">
  {/* SOFT DEPTH BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-main/5 to-white" />

  <div className="relative mx-auto max-w-7xl px-6 py-36">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-4xl"
    >
      {/* TAGLINE */}
      <span className="text-sm font-semibold tracking-wider text-brand-main uppercase">
        Work With Us
      </span>

      {/* HEADLINE */}
      <h2 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-neutral-900">
        Looking for a Reliable
        <span className="block text-brand-main">
          Food Export Partner?
        </span>
      </h2>

      {/* SUBTEXT */}
      <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-neutral-600">
        Share your requirements with us. Our team will review your inquiry and
        respond with export-ready solutions tailored to your market.
      </p>

      {/* ACTIONS */}
      <div className="mt-14 flex flex-col sm:flex-row gap-6">
        <motion.a
          href="/contact"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="inline-flex items-center justify-center rounded-full bg-brand-main px-10 py-4 text-sm font-semibold text-white shadow-lg"
        >
          Request a Quote
        </motion.a>

        <motion.a
          href="/products"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-10 py-4 text-sm font-semibold text-neutral-700 hover:border-brand-main hover:text-brand-main transition"
        >
          View Products
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>
<p className="sr-only">
        Riyan Foods & Spices LLP is a merchant exporter in Bhavnagar, Gujarat,
        India exporting spices, rice, grains, pulses, millets and dehydrated food
        products to Middle East, Africa, Europe and global markets.
      </p>

    </main>
  );
}


























{/* ================= COMPANY SNAPSHOT : FUNCTIONS================= */ }
function CompanySnapshotTextUltra() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const x = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.15, 1, 1]);

  return (
    <motion.div ref={ref} style={{ y, x, scale, opacity }}>

      {/* BACKGROUND TYPO */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
          opacity: useTransform(scrollYProgress, [0, 1], [0.04, 0.08]),
        }}
        className="pointer-events-none absolute -top-24 left-0 text-[160px] font-bold text-neutral-200 select-none"
      >
        EXPORT
      </motion.div>

      <span className="relative z-10 text-sm font-semibold tracking-wider text-brand-main uppercase">
        Company Snapshot
      </span>

      <h2 className="relative z-10 mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-neutral-900">
        Structured for
        <span className="block text-brand-main">
          Global Food Exports
        </span>
      </h2>

      <p className="relative z-10 mt-8 max-w-[560px] text-[17px] leading-[1.7] text-neutral-600">
        Riyan Foods & Spices LLP operates as a professionally managed Indian
        export house supplying food products to international markets through
        disciplined, export-ready operations.
      </p>

      <p className="relative z-10 mt-6 max-w-[560px] text-[17px] leading-[1.7] text-neutral-600">
        Our systems are built around documentation accuracy, quality consistency,
        packaging discipline, and long-term buyer confidence.
      </p>
    </motion.div>
  );
}

function CompanySnapshotPillarsUltra() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.2, 1, 1]);

  const pillars = [
    {
      title: "Product Capability",
      desc: "Spices, rice, grains, pulses, millets, oilseeds, and dehydrated food products aligned with global demand.",
    },
    {
      title: "Quality & Compliance",
      desc: "Food safety standards, export documentation, and packaging systems designed for international trade.",
    },
    {
      title: "Export Operations",
      desc: "Port coordination, containerized logistics, and shipment planning for reliable global deliveries.",
    },
    {
      title: "Long-Term Partnerships",
      desc: "Working with importers, distributors, and private labels for repeat and stable supply relationships.",
    },
  ];

  return (
    <div ref={ref} className="relative pl-14">

      {/* ENERGY LINE */}
      <motion.div
        style={{ height: lineHeight, opacity: lineOpacity }}
        className="absolute left-0 top-0 w-[3px] bg-brand-main origin-top"
      />

      <div className="space-y-20">
        {pillars.map((item, index) => {
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [140 + index * 40, -120 - index * 30]
          );

          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [index % 2 === 0 ? 40 : -40, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [0, 0.6, 1],
            [0.92, 1, 1.04]
          );

          return (
            <motion.div
              key={item.title}
              style={{ y, x, scale }}
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[420px] text-[15px] leading-[1.6] text-neutral-600">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
{/* ================= COMPANY SNAPSHOT : FUNCTIONS : END ================= */ }




{/* ================= PRODUCT CATEGORIES : FUNCTION ================= */ }


function ProductTile({
  title,
  subtitle,
  image,
  href,
  offset,
}: {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  offset: "up" | "down";
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle vertical drift (very slow)
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    offset === "up" ? [-24, 24] : [24, -24]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* IMAGE WRAPPER */}

<div className="relative overflow-hidden rounded-2xl">

  {/* CLICKABLE OVERLAY */}
  <Link
    href={href}
    aria-label={`Open ${title}`}
    className="absolute inset-0 z-10"
  />

  {/* IMAGE */}
  <motion.img
    src={image}
    alt={title}
    className="h-[280px] w-full object-cover"
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.035 }}
  />

  {/* DARKEN LAYER */}
  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700" />

  {/* SIGNATURE GREEN LINE */}
  <div className="pointer-events-none absolute left-6 top-6 h-0 w-[2px] bg-brand-main group-hover:h-16 transition-all duration-700 ease-out" />
</div>


      {/* TEXT BLOCK */}
      <div className="mt-6">
        <motion.h3
          className="text-2xl font-semibold text-neutral-900"
          initial={false}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {title}
        </motion.h3>

        <p className="mt-1 text-sm uppercase tracking-wider text-neutral-500">
          {subtitle}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-main"
        >
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
              Explore
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
              Explore →
            </span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}



{/* ================= PRODUCT CATEGORIES : FUNCTION : END. ================= */ }

{/* ================= WHY CHOOSE US : FUNCTION ================= */}
function TrustSignalUltra({
  index,
  title,
  subtitle,
  delay,
}: {
  index: string;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 rounded-xl bg-brand-main/5 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* CONTENT */}
      <div className="relative">
        {/* INDEX */}
        <div className="text-[24px] font-semibold text-neutral-300 group-hover:text-brand-main transition">
          {index}
        </div>

        {/* ANIMATED LINE */}
        <motion.div
          className="mt-3 h-[2px] w-10 bg-brand-main"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ originX: 0 }}
        />

        {/* TITLE */}
        <h3 className="mt-6 text-xl font-semibold text-neutral-900">
          {title}
        </h3>

        {/* SUBTITLE */}
        <p className="mt-3 text-[15px] leading-[1.6] text-neutral-600">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}
{/* ================= WHY CHOOSE US : FUNCTION :END ================= */}


{/* ================= GLOBAL PRESENCE : FUNCTTION ================= */}
function GlobalMetric({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="relative"
    >
      <div className="text-4xl sm:text-5xl font-bold text-neutral-900">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-neutral-500">
        {label}
      </div>
    </motion.div>
  );
}
function RegionCard({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      <h3 className="text-xl font-semibold text-neutral-900">
        {title}
      </h3>

      <div className="mt-3 h-[2px] w-10 bg-brand-main" />

      <p className="mt-4 text-[15px] leading-[1.6] text-neutral-600">
        {desc}
      </p>
    </motion.div>
  );
}
{/* ================= GLOBAL PRESENCE : FUNCTION : END  ================= */}