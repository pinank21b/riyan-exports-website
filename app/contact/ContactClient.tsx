"use client";

import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* =========================================================
   CONTACT PAGE – PREMIUM VERSION (FIXED)
========================================================= */

export default function ContactPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        setShowSuccess(true);

        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-white overflow-hidden relative">

      <Head>
        <title>Contact Us | Food Export Enquiry | Riyan Foods & Spices LLP</title>
      </Head>

      {/* =====================================================
         SUCCESS POPUP
      ===================================================== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="bg-white rounded-3xl px-10 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.35)] max-w-md"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                Enquiry Submitted
              </h3>
              <p className="mt-4 text-sm text-neutral-600">
                Thank you for contacting <b>Riyan Foods & Spices LLP</b>.<br />
                Our export team will reach out shortly.
              </p>
              <p className="mt-6 text-xs text-neutral-400">
                Redirecting to home page…
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
         HERO
      ===================================================== */}
      <section className="relative">
        <ContactHeroGraphics />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
          <h1 className="text-4xl font-semibold">Let’s Discuss Your Export Requirements</h1>
        </div>
      </section>

      {/* =====================================================
         FORM + RIGHT CONTEXT (UNCHANGED)
      ===================================================== */}
      <section className="relative bg-[#fafbfa]">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
          >
            <h2 className="text-2xl font-semibold mb-8">Export Enquiry</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Full Name" name="name" required />
              <Input label="Company Name" name="company" />
              <Input label="Email Address" type="email" name="email" required />
              <Input label="Contact Number" name="phone" />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Product Category
              </label>
              <select name="category" className="w-full rounded-xl border px-4 py-3">
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 text-sm font-semibold text-white bg-brand-main rounded-full"
            >
              Submit Export Enquiry →
            </motion.button>
          </motion.form>

          {/* RIGHT SIDE – 100% SAME CONTENT */}
          <motion.div className="flex flex-col justify-center">
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
              📍 India <br />
              📧 sales@riyanexims.parvamsoftech.com <br />
              📞 +91 78745 74687
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border px-4 py-3 transition focus:border-brand-main"
      />
    </div>
  );
}

/* =========================================================
   GRAPHICS (UNCHANGED)
========================================================= */

function ContactHeroGraphics() {
  return null;
}
