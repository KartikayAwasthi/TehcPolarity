// File: src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const BRAND = "#ed1b24";
const BRAND_DARK = "#c50f17";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.975 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const AboutPage: React.FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* HEADER */}
        <motion.header
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND }}
            variants={fadeUp}
            custom={0}
          >
            Tech Polarity
          </motion.h1>

          <motion.p
            className="mt-3 text-lg text-gray-700"
            variants={fadeUp}
            custom={1}
          >
            A Technology-Related Blog
          </motion.p>
        </motion.header>

        {/* CONTENT CARD */}
        <motion.div
          className="bg-white border border-gray-200 shadow-md rounded-2xl p-7 sm:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={zoomIn}
        >
          <motion.p
            className="text-lg text-gray-800 leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            <strong>Tech Polarity exists to decode technology and make it usable for all.</strong>{" "}
            Whether you're a casual reader, tech enthusiast, or budding professional,
            Tech Polarity was founded to keep you informed, inspired, and always ahead.
          </motion.p>

          <motion.p
            className="mt-5 text-gray-700 leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            Since <strong>2025</strong>, our blog has focused on breaking down the fast-paced
            world of technology. From smartphone reviews to discussions of AI, gaming,
            and futuristic gadgets — we cover it all with clarity and precision.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold mt-10 mb-4"
            style={{ color: BRAND }}
            variants={fadeUp}
            custom={3}
          >
            What makes us different?
          </motion.h3>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={listContainer}
          >
            {[
              "Crystal clear reviews",
              "Thorough comparisons",
              "Honest opinions",
              "Understandable language",
            ].map((item, index) => (
              <motion.li
                key={item}
                className="flex gap-3 items-start"
                variants={listItem}
              >
                <span
                  className="flex-none w-7 h-7 rounded-lg grid place-items-center text-white font-bold"
                  style={{ backgroundColor: BRAND }}
                >
                  ✓
                </span>
                <span className="text-[15px]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-6 text-gray-700 leading-relaxed"
            variants={fadeUp}
            custom={6}
          >
            We also provide advisory content, how-to guides, and buying suggestions
            to help you improve your tech skills. No theories — just real, useful tech.
          </motion.p>

          <motion.blockquote
            className="mt-6 border-l-4 pl-4 italic font-medium"
            style={{ borderColor: BRAND, color: BRAND }}
            variants={fadeUp}
            custom={7}
          >
            Let's do tech together — real, simple, and useful!
          </motion.blockquote>
        </motion.div>

        {/* SUBSCRIBE SECTION */}
        <motion.div
          className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          custom={8}
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            Stay Updated with Tech Polarity
          </h4>
          <p className="text-gray-600 mb-5 text-sm">
            Subscribe to receive curated tech stories and helpful guides.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              // placeholder behavior
              alert("Thanks — subscription handling not implemented in this demo.");
            }}
          >
            <motion.input
              type="email"
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{
                boxShadow: isHover ? `0 0 0 4px rgba(237,27,36,0.08)` : undefined,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />

            <motion.button
              type="submit"
              className="px-5 py-2 rounded-lg text-white font-medium transition-all duration-150"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                backgroundColor: isHover ? BRAND_DARK : BRAND,
                boxShadow: isHover
                  ? "0 6px 18px rgba(197,15,23,0.18)"
                  : "0 4px 10px rgba(0,0,0,0.06)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
