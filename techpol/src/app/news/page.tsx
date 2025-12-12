"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * TechPolarity News Page
 * Colors: #ed1b24 (red), #000000, #808080, #ffffff.
 */

const BRAND = {
  accent: "#ed1b24",
  black: "#000000",
  grey: "#808080",
  white: "#ffffff",
};

const MOCK_NEWS = [
  {
    id: 1,
    title: "TechPolarity launches lightweight dev tool for Next.js performance",
    date: "Dec 12, 2025",
    image: "/news-img-1.jpg",
    excerpt:
      "A new developer-first toolkit promises instant edge-optimizations for Next.js apps with minimal config—here's what we tested.",
    tags: ["Next.js", "Performance", "Tooling"],
  },
  {
    id: 2,
    title: "How to shave 200ms off your Lighthouse score",
    date: "Dec 10, 2025",
    image: "/news-img-2.jpg",
    excerpt:
      "Practical checklist and automated steps to improve TTI and LCP on modern single-page applications.",
    tags: ["WebPerf", "Guide"],
  },
  {
    id: 3,
    title: "Interview: Lead Engineer on stateful serverless patterns",
    date: "Dec 8, 2025",
    image: "/news-img-3.jpg",
    excerpt:
      "We spoke with TechPolarity's lead engineer about mixing stateful patterns with serverless architectures for scalability.",
    tags: ["Architecture", "Serverless"],
  },
  {
    id: 4,
    title: "Open-source alternative for paid monitoring tools",
    date: "Dec 1, 2025",
    image: "/news-img-4.jpg",
    excerpt:
      "A community project brings reliable, low-cost monitoring to indie teams—setup guide and comparison included.",
    tags: ["OSS", "Monitoring"],
  },
];

function useScrollReveal() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return { ref, controls };
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function NewsPage() {
  const featured = MOCK_NEWS[0];

  const { ref: heroRef, controls: heroControls } = useScrollReveal();
  const { ref: listRef, controls: listControls } = useScrollReveal();

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section ref={heroRef} className="max-w-6xl mx-auto px-3 md:px-4 py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate={heroControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <p
              className="inline-block rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ background: BRAND.accent }}
            >
              TechPolarity News
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Latest technology updates, deep dives, and tools for developers
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl">
              Stay updated with concise guides, interviews and product launches from the world of modern web development.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-md border font-medium shadow-sm"
                style={{ borderColor: BRAND.accent }}>
                Subscribe
              </button>

              <button
                className="px-4 py-2 rounded-md bg-white border font-medium shadow-sm"
                style={{ borderColor: BRAND.accent, color: BRAND.accent }}
              >
                Submit a tip
              </button>
            </div>
          </div>

          {/* FEATURED CARD */}
          <div>
            <motion.article
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            >
              <div className="h-44 md:h-52 bg-gray-200">
                <img src={featured.image} className="object-cover w-full h-full" />
              </div>

              <div className="p-4 bg-white">
                <div className="text-sm text-gray-500">{featured.date}</div>
                <h3 className="mt-2 font-semibold text-lg">{featured.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{featured.excerpt}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-black">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* NEWS LIST */}
      <section className="max-w-6xl mx-auto px-3 md:px-4 py-8">
        <motion.div
          ref={listRef}
          initial="hidden"
          animate={listControls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {MOCK_NEWS.map((item) => (
            <motion.article
              key={item.id}
              className="rounded-lg border bg-white overflow-hidden shadow-sm border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="h-40 md:h-44 bg-gray-100">
                <img src={item.image} className="object-cover w-full h-full" />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{item.date}</div>
                  <div className="text-xs font-medium text-gray-700">#{item.tags[0]}</div>
                </div>

                <h4 className="mt-2 font-semibold text-lg">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.excerpt}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-black">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="text-sm font-semibold underline" style={{ color: BRAND.accent }}>
                    Read
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-3 md:px-4 py-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200">
          <div>
            <h5 className="font-semibold">Want weekly highlights?</h5>
            <p className="text-sm text-gray-600">
              Get TechPolarity's newsletter with curated articles, tools and jobs.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="your@email.com"
              className="px-3 py-2 border rounded-md border-gray-300"
            />
            <button className="px-4 py-2 rounded-md bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-3 md:px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} TechPolarity</div>

          <div className="flex gap-4">
            <a className="underline">Privacy</a>
            <a className="underline">Terms</a>
            <a className="underline">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
