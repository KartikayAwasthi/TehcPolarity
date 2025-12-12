// File: src/app/about/page.tsx
"use client";

import React, { useState } from "react";

const BRAND = "#ed1b24";
const BRAND_DARK = "#c50f17";

const AboutPage: React.FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND }}
          >
            Tech Polarity
          </h1>
          <p className="mt-3 text-lg text-gray-700">A Technology-Related Blog</p>
        </header>

        {/* CONTENT CARD */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-7 sm:p-10">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Tech Polarity exists to decode technology and make it usable for all.</strong>{" "}
            Whether you're a casual reader, tech enthusiast, or budding professional,
            Tech Polarity was founded to keep you informed, inspired, and always ahead.
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed">
            Since <strong>2025</strong>, our blog has focused on breaking down the fast-paced
            world of technology. From smartphone reviews to discussions of AI, gaming,
            and futuristic gadgets — we cover it all with clarity and precision.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4" style={{ color: BRAND }}>
            What makes us different?
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            {[
              "Crystal clear reviews",
              "Thorough comparisons",
              "Honest opinions",
              "Understandable language",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span
                  className="flex-none w-7 h-7 rounded-lg grid place-items-center text-white font-bold"
                  style={{ backgroundColor: BRAND }}
                >
                  ✓
                </span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed">
            We also provide advisory content, how-to guides, and buying suggestions
            to help you improve your tech skills. No theories — just real, useful tech.
          </p>

          <blockquote
            className="mt-6 border-l-4 pl-4 italic font-medium"
            style={{ borderColor: BRAND, color: BRAND }}
          >
            Let's do tech together — real, simple, and useful!
          </blockquote>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
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
              // handle the submit - currently a placeholder
              alert("Thanks — subscription handling not implemented in this demo.");
            }}
          >
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ boxShadow: isHover ? `0 0 0 4px rgba(237,27,36,0.08)` : undefined }}
            />

            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-white font-medium transition-all duration-150"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                backgroundColor: isHover ? BRAND_DARK : BRAND,
                boxShadow: isHover ? "0 6px 18px rgba(197,15,23,0.18)" : "0 4px 10px rgba(0,0,0,0.06)",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
