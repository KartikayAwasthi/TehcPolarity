// File: src/app/ai/page.jsx
"use client";

import React, { useEffect, useState } from "react";

const BRAND = "#ed1b24";

/**
 * Client-only AI listing page.
 * - 6 mock articles (no backend)
 * - Modal popup with scrollable content
 * - Accessible: ESC to close, overlay click closes, background scroll locked while modal open
 * - Uses plain <img> and plain <a> tags (no next/image or next/link)
 * - No Tailwind plugins required
 */

export default function AiPage() {
  const [items, setItems] = useState(null); // null = loading
  const [active, setActive] = useState(null);

  // 6 mock articles
  const mockData = [
    {
      id: "1",
      title: "AI Revolution 2025 — What’s Next?",
      excerpt: "A quick breakdown of how AI models shape everyday life.",
      image: "/ai1.jpg",
      publishedAt: "2025-06-10",
      content:
        "<p><strong>AI is everywhere in 2025.</strong> Apps are smarter and more contextual — from camera features that edit for you to assistants that summarize your day.</p><p>Major trends: model compression, federated learning, privacy-preserving inference, and multimodal reasoning. We'll walk through examples and what to expect next.</p><p><em>Deep dive:</em> model distillation techniques, prompt engineering best practices, latency vs accuracy tradeoffs, and real-world edge deployments.</p>",
    },
    {
      id: "2",
      title: "Small AI Models Are Taking Over",
      excerpt: "Why small models outperform large ones in 2025.",
      image: "/ai2.jpg",
      publishedAt: "2025-06-12",
      content:
        "<p>Smaller, specialized models are more efficient for many real-world use-cases. They reduce inference cost, improve latency, and can be fine-tuned quickly.</p><p>Use-cases covered: mobile personalization, private on-device assistants, and fast recommender systems.</p>",
    },
    {
      id: "3",
      title: "Multimodal AI: Text, Image & Sound Together",
      excerpt: "How models are learning to reason across formats.",
      image: "/ai3.jpg",
      publishedAt: "2025-06-15",
      content:
        "<p>Multimodal models now process images, text and audio in a single pass. This enables image-aware chatbots, video summaries and cross-modal search.</p><p>Learn about cross-attention, representation fusion, and practical APIs for developers.</p>",
    },
    {
      id: "4",
      title: "Privacy-Preserving AI Techniques",
      excerpt: "Keep user data private while still using AI.",
      image: "/ai4.jpg",
      publishedAt: "2025-06-18",
      content:
        "<p>Privacy matters. Here we discuss differential privacy, federated learning, and on-device inference. Learn how companies minimize data exposure while maintaining model performance.</p>",
    },
    {
      id: "5",
      title: "AI for Creative Workflows",
      excerpt: "How creativity tools are evolving with AI.",
      image: "/ai5.jpg",
      publishedAt: "2025-06-20",
      content:
        "<p>From idea generation to final polish, AI augments creative workflows — writing, music, video editing and design. This article reviews tools and how to keep control over authorship and style.</p>",
    },
    {
      id: "6",
      title: "Responsible AI — Guardrails & Audits",
      excerpt: "Making AI safe, explainable, and reliable.",
      image: "/ai6.jpg",
      publishedAt: "2025-06-22",
      content:
        "<p>Responsible AI requires monitoring, audit trails, and clarity in model behavior. We cover evaluation metrics, bias audits, and small checks teams can run before shipping models to production.</p>",
    },
  ];

  // load mock data (simulate small delay)
  useEffect(() => {
    let mounted = true;
    setItems(null);
    const timer = setTimeout(() => {
      if (mounted) setItems(mockData);
    }, 300);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  // modal: escape to close + lock background scroll
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  function ArticleImage({ src, alt }) {
    if (!src) {
      return <div className="absolute inset-0 flex items-center justify-center text-gray-400">No image</div>;
    }
    return <img src={src} alt={alt} className="object-cover w-full h-full" />;
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold" style={{ color: "black" }}>
            AI Articles
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Latest AI insights, explainers & short guides from Tech Polarity.
          </p>
        </header>

        {/* status + controls */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="text-sm text-gray-700">
            {items === null ? "Loading articles…" : `${items.length} articles`}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setItems(null);
                setTimeout(() => setItems(mockData), 300);
              }}
              className="px-3 py-1 rounded-md border border-gray-200 text-sm hover:bg-gray-100 transition"
            >
              Refresh
            </button>

            <a
              href="/"
              className="px-3 py-1 rounded-md text-sm"
              style={{ border: `1px solid ${BRAND}`, color: BRAND }}
            >
              Back Home
            </a>
          </div>
        </div>

        {/* loading */}
        {items === null && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm animate-pulse bg-gray-50">
                <div className="h-44 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-gray-200 rounded w-5/6 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* grid */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((post) => (
              <article key={post.id} className="group rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative h-44 w-full bg-gray-100">
                  <ArticleImage src={post.image} alt={post.title} />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>

                  <p
                    className="text-sm text-gray-600 mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</span>

                    <button
                      type="button"
                      onClick={() => setActive(post)}
                      className="inline-flex items-center gap-2 text-sm font-medium"
                      style={{ color: BRAND }}
                    >
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* modal */}
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.title} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActive(null)} aria-hidden />

          {/* modal box */}
          <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* header */}
            <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: BRAND }}>{active.title}</h2>
                <p className="text-xs text-gray-500 mt-1">{active.publishedAt ? new Date(active.publishedAt).toLocaleDateString() : ""}</p>
              </div>

              <button onClick={() => setActive(null)} aria-label="Close" className="p-2 rounded-md hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* top image */}
            {active.image && (
              <div className="w-full h-56 sm:h-72 bg-gray-100">
                <img src={active.image} alt={active.title} className="object-cover w-full h-full" />
              </div>
            )}

            {/* scrollable content */}
            <div className="p-6 max-h-[60vh] overflow-auto text-gray-800" style={{ lineHeight: 1.6 }}>
              <div dangerouslySetInnerHTML={{ __html: active.content || active.excerpt || "" }} />

              <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <strong>Note:</strong> This popup shows an expanded preview. Click "Open full article" to view the dedicated page.
              </div>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between gap-4 p-4 sm:p-6 border-t border-gray-100">
              <div className="text-sm text-gray-600">Want the full article?</div>

              <div className="flex items-center gap-3">
                <a
                  href={`/ai/${active.id}`}
                  className="px-4 py-2 rounded-md text-white font-medium"
                  style={{ backgroundColor: BRAND }}
                >
                  Open full article
                </a>

                <button onClick={() => setActive(null)} className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
