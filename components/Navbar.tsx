"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ================= PRODUCT CATEGORIES ================= */

const PRODUCT_CATEGORIES = [
  { name: "Spices", href: "/products/spices" },
  { name: "Grains & Rice", href: "/products/grains" },
  { name: "Pulses", href: "/products/pulses" },
  { name: "Millets", href: "/products/millets" },
  { name: "Dehydrated Products", href: "/products/dehydrated" },
];

/* ================= ANIMATION ================= */

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white"
      >
        <div className={`transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-16 sm:h-20 items-center justify-between">
              {/* LOGO */}
              <Link href="/" className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-semibold text-neutral-900">
                  Riyan Foods & Spices LLP
                </span>
                <span className="hidden sm:block text-xs text-neutral-500">
                  Global Food Exporter
                </span>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="relative group">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-main transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}

                {/* PRODUCTS (HOVER + CLICK) */}
               <Link
  href="/products"
  onMouseEnter={() => setProductsOpen(true)}
  onClick={() => setProductsOpen(false)}
  className="relative group hover:text-brand-main transition"
>
  Products
  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-main transition-transform duration-300 group-hover:scale-x-100" />
</Link>


                {[
                  { label: "Quality", href: "/quality" },
                  { label: "Logistics", href: "/logistics" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="relative group">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-main transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
              </nav>

              {/* CTA + MOBILE BUTTON */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex rounded-md bg-brand-main px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark transition"
                >
                  Request Quote
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                  onClick={() => setMenuOpen(true)}
                  className="lg:hidden h-10 w-10 flex items-center justify-center rounded-md border border-neutral-300"
                  aria-label="Open menu"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= PRODUCTS OVERLAY (DESKTOP) ================= */}
      <AnimatePresence>
        {productsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProductsOpen(false)}
            className="hidden lg:block fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setProductsOpen(false)}
              className="absolute top-24 inset-x-4 mx-auto max-w-screen-lg rounded-2xl bg-white shadow-2xl p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCT_CATEGORIES.map((cat, i) => (
                  <motion.div
                    key={cat.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={staggerItem}
                  >
                    <Link
                      href={cat.href}
                      onClick={() => setProductsOpen(false)}
                      className="group block rounded-lg border border-neutral-200 p-6 hover:border-brand-main transition"
                    >
                      <h4 className="text-sm font-semibold group-hover:text-brand-main transition">
                        {cat.name}
                      </h4>
                      <p className="mt-2 text-xs text-neutral-500">
                        Export-grade products for global markets
                      </p>
                      <span className="mt-4 block h-[2px] w-6 bg-brand-main transition-all duration-300 group-hover:w-12" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU (ONLY VIA ☰) ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-semibold">
                  Riyan Foods & Spices LLP
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-md border"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-6 text-base font-medium">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Quality", href: "/quality" },
                  { label: "Logistics", href: "/logistics" },
                  { label: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={staggerItem}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="relative group inline-block"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-main transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </motion.div>
                ))}

                {/* PRODUCTS (MOBILE) */}
                <div className="pt-6 border-t">
                  <p className="mb-4 text-sm font-semibold text-neutral-500">
                    Products
                  </p>
                  <div className="space-y-4">
                    {PRODUCT_CATEGORIES.map((cat, i) => (
                      <motion.div
                        key={cat.name}
                        custom={i + 6}
                        initial="hidden"
                        animate="visible"
                        variants={staggerItem}
                      >
                        <Link
                          href={cat.href}
                          onClick={() => setMenuOpen(false)}
                          className="relative group inline-block text-sm"
                        >
                          {cat.name}
                          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-main transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
