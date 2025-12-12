// File: src/app/about/page.tsx
// Simple, red-themed About page for Tech Polarity
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-600">
        About Tech Polarity
      </h1>

      <p className="text-lg mb-4">
        <strong>Welcome to Tech Polarity — a technology blog.</strong>
      </p>

      <p className="mb-6">
        At <strong>Tech Polarity</strong> we believe technology should be{" "}
        <em>understandable, practical, and inspiring</em> for everyone — whether
        you're a curious reader, a budding enthusiast, or a working professional.
        Our mission is simple: <strong>decode technology and make it useful.</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-500">Who we are</h2>
      <p className="mb-6">
        Founded recently, Tech Polarity focuses on clear explainers, hands-on
        reviews, and useful how-to guides so readers can make informed decisions.
      </p>

      <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
        <li>Smartphone & gadget reviews</li>
        <li>AI & software explainers</li>
        <li>Gaming coverage & guides</li>
        <li>Practical buying advice</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-500">
        What makes us different
      </h2>
      <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
        <li>✅ Clear, unbiased reviews</li>
        <li>🔎 Practical comparisons</li>
        <li>✍️ Simple language — no jargon</li>
        <li>🔁 Honest pros & cons</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-500">
        Extras we offer
      </h2>
      <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
        <li>Step-by-step how-to guides</li>
        <li>Short buying checklists</li>
        <li>Compact explainers for trending tech</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-500">
        Why follow us
      </h2>
      <p className="mb-6">
        Because you deserve clear, practical tech writing that helps you pick
        the right products and understand important trends — quickly and
        reliably.
      </p>

      <blockquote className="border-l-4 border-red-600 pl-4 italic text-red-800">
        Let's keep tech simple — useful content, no fluff.
      </blockquote>
    </div>
  );
};

export default AboutPage;
