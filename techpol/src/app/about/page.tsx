// ================================================================
// File: src/app/about/page.js
// Description: This file creates the '/about' route.
// ================================================================

import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        About Tech Polarity
      </h1>

      <p className="text-lg mb-4">
        <strong>Welcome to Tech Polarity – A Technology-Related Blog.</strong>
      </p>

      <p className="mb-6">
        At <strong>Tech Polarity</strong>, we believe technology should be{" "}
        <em>understandable, practical, and inspiring</em> for everyone — whether
        you're a curious reader, a budding tech enthusiast, or a seasoned
        professional. Our mission is simple:{" "}
        <strong>decode technology and make it usable for all.</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">
        Who We Are
      </h2>
      <p className="mb-6">
        Founded in <strong>2025</strong>, Tech Polarity emerged with a clear
        purpose:
        <br />
        <em>
          To break down the fast-paced world of technology into content that’s
          engaging, insightful, and easy to understand.
        </em>
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>Smartphone Reviews</li>
        <li>AI & Tech Discussions</li>
        <li>Gaming Insights</li>
        <li>Futuristic Gadgets</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">
        What Makes Us Different?
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>✅ Crystal Clear Reviews</li>
        <li>🔄 Thorough Comparisons</li>
        <li>💬 Honest Opinions</li>
        <li>🗣️ Simple, Understandable Language</li>
      </ul>

      <p className="mb-6">We also provide:</p>
      <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
        <li>🎓 How-To Guides</li>
        <li>🛒 Buying Suggestions</li>
        <li>📘 Skill-Boosting Advisory Content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">
        Why Follow Tech Polarity?
      </h2>
      <p className="mb-6">
        Because you deserve more than just news and specs. You deserve tech
        that’s <strong>decoded, demystified, and delivered with clarity</strong>
        .
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-blue-800">
        Let’s do tech together — real, simple, and useful.
      </blockquote>
    </div>
  );
};

export default AboutPage;