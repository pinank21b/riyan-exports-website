"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

/* =========================================================
   CONTACT PAGE – PREMIUM VERSION
========================================================= */

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myzdnqwd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white overflow-hidden">
      <Head>
        <title>Contact Us | Food Export Enquiry | Riyan Foods & Spices LLP</title>

        <meta
          name="description"
          content="Contact Riyan Foods & Spices LLP for food export enquiries. Based in Bhavnagar, Gujarat, India, we serve Middle East and global markets."
        />

        <meta
          name="keywords"
          content="contact food exporter india, export enquiry gujarat, merchant exporter contact india"
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.riyanexim.parvamsoftech.com/contact"
        />
      </Head>

      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <ContactHeroGraphics />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-wider text-brand-main uppercase">
              Get in Touch
            </span>

            <h1 className="mt-6 text-3xl sm:text-5xl font-semibold text-neutral-900">
              Let’s Discuss Your
              <span className="block text-brand-main">
                Export Requirements
              </span>
            </h1>

            <p className="mt-6 text-neutral-600">
              Share your product requirements, destination market, and quantity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
         FORM
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Export Enquiry
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <Input label="Full Name" name="name" required />
              <Input label="Company Name" name="company" />
              <Input label="Email Address" name="email" type="email" required />
              <Input label="Contact Number" name="phone" />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Product Category
              </label>
              <select
                name="category"
                className="w-full rounded-xl border px-4 py-3"
              >
                <option>Select category</option>
                <option>Spices</option>
                <option>Rice & Grains</option>
                <option>Pulses & Lentils</option>
                <option>Millets</option>
                <option>Dehydrated Products</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Message / Export Details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            <motion.button
              type="submit"
              className="mt-10 px-10 py-4 text-sm font-semibold text-white bg-brand-main rounded-full"
            >
              Submit Export Enquiry →
            </motion.button>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-600">
                ✅ Thank you! Your enquiry has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </motion.form>

          {/* Context (unchanged) */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold">Why Contact Us?</h3>
            <ul className="mt-8 space-y-3 text-neutral-700">
              <li>✔ Export-ready products</li>
              <li>✔ Flexible packaging</li>
              <li>✔ Global logistics</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  name,
  type = "text",
  required = false,
}: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border px-4 py-3"
      />
    </div>
  );
}

/* =========================================================
   GRAPHICS
========================================================= */

function ContactHeroGraphics() {
  return null;
}
