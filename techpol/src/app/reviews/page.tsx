"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TechPolarity - Reviews Page (single-file React component)
// TailwindCSS required in the project for styling.
// This component uses mock data (simulates backend fetch with setTimeout).

export default function TechPolarityReviewsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const mock = [
        {
          id: "p1",
          title: "Edge 60 Stylus",
          subtitle: "Flagship productivity phone",
          img: "https://via.placeholder.com/400x240?text=Edge+60+Stylus",
          avgRating: 4.5,
          price: "₹29,999",
          reviews: [
            {
              author: "Rina Sharma",
              date: "2025-11-20",
              rating: 5,
              title: "Great for drawing & note-taking",
              text: "Stylus is extremely responsive, battery lasts whole day with heavy use. Camera is decent. A tiny heating while gaming.",
              pros: ["Responsive stylus", "Fast charging", "Nice display"],
              cons: ["Slight heating under heavy load"],
              images: [
                "https://via.placeholder.com/800x450?text=Edge+60+-+1",
                "https://via.placeholder.com/800x450?text=Edge+60+-+2",
              ],
            },
            {
              author: "Amit Verma",
              date: "2025-10-05",
              rating: 4,
              title: "Excellent value",
              text: "Smooth UI, good battery life. Would like better camera in low light.",
              pros: ["Smooth UI", "Battery life"],
              cons: ["Low-light camera"],
              images: [],
            },
          ],
        },
        {
          id: "p2",
          title: "G86 Power",
          subtitle: "Gaming focused powerhouse",
          img: "https://via.placeholder.com/400x240?text=G86+Power",
          avgRating: 4.3,
          price: "₹34,499",
          reviews: [
            {
              author: "Sonal Patel",
              date: "2025-09-12",
              rating: 4,
              title: "Beast for gaming",
              text: "Thermals are well-managed, throttle only on extreme settings. Display is buttery-smooth.",
              pros: ["Performance", "Display"],
              cons: ["A bit heavy"],
              images: ["https://via.placeholder.com/800x450?text=G86+-+1"],
            },
          ],
        },
        {
          id: "p3",
          title: "Virtus",
          subtitle: "Value all-rounder",
          img: "https://via.placeholder.com/400x240?text=Virtus",
          avgRating: 4.1,
          price: "₹16,999",
          reviews: [
            {
              author: "Kartik A.",
              date: "2025-08-01",
              rating: 4,
              title: "Solid daily driver",
              text: "Good battery and form factor. Camera is average but fine for casual snaps.",
              pros: ["Great battery", "Compact"],
              cons: ["Average camera"],
              images: [],
            },
          ],
        },
      ];

      setProducts(mock);
      setSelectedProductId(mock[0].id);
      setSelectedReviewIndex(0);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-gray-300 to-gray-100 animate-[shimmer_1.2s_infinite]" />
          </div>
          <p className="text-gray-600">Loading reviews from backend...</p>
        </div>
      </div>
    );
  }

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const selectedReview = selectedProduct.reviews[selectedReviewIndex] || null;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main review area (left) */}
        <div className="md:col-span-8 bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-start gap-4">
            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-36 h-24 object-cover rounded-lg shadow-sm" />
            <div>
              <h1 className="text-2xl font-semibold">{selectedProduct.title}</h1>
              <p className="text-sm text-gray-500">{selectedProduct.subtitle} • <span className="font-medium">{selectedProduct.price}</span></p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <StarRow rating={selectedProduct.avgRating} />
                  <span className="text-sm text-gray-600">{selectedProduct.avgRating.toFixed(1)}</span>
                </div>
                <div className="text-sm text-gray-400">•</div>
                <div className="text-sm text-gray-600">{selectedProduct.reviews.length} reviews</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProduct.id + "-review-" + selectedReviewIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {selectedReview ? (
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-semibold">{selectedReview.title}</h2>
                          <div className="text-sm text-gray-500 mt-1">
                            by <span className="font-medium text-gray-700">{selectedReview.author}</span> • {selectedReview.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <StarRow rating={selectedReview.rating} />
                            <span className="text-sm">{selectedReview.rating}/5</span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700 leading-relaxed">{selectedReview.text}</p>

                      {selectedReview.pros?.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium">Pros</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                            {selectedReview.pros.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedReview.cons?.length > 0 && (
                        <div className="mt-3">
                          <h4 className="text-sm font-medium">Cons</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                            {selectedReview.cons.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedReview.images?.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedReview.images.map((src, idx) => (
                            <img key={idx} src={src} alt={`review-${idx}`} className="w-full h-40 object-cover rounded-md" />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 bg-gray-50 border border-dashed border-gray-200 rounded-lg text-center text-gray-500">
                      No review selected.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-5">
                <h3 className="text-sm font-semibold text-gray-700">All reviews for this product</h3>
                <div className="mt-3 space-y-3">
                  {selectedProduct.reviews.map((r, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedReviewIndex(idx)}
                      className={`w-full text-left p-3 rounded-lg border ${idx === selectedReviewIndex ? "border-red-300 bg-red-50" : "border-gray-100 bg-white"}`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-medium">{r.title}</div>
                          <div className="text-xs text-gray-500">by {r.author} • {r.date}</div>
                        </div>
                        <div className="text-sm">
                          <StarRow rating={r.rating} />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{r.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick facts / share / CTA */}
            <aside className="space-y-4">
              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <div className="text-sm text-gray-500">Average rating</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="text-2xl font-semibold">{selectedProduct.avgRating.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">{selectedProduct.reviews.length} reviews</div>
                </div>
                <div className="mt-3">
                  <button className="w-full py-2 px-3 rounded-lg bg-red-500 text-white text-sm font-medium">Read full review</button>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <h4 className="text-sm font-medium">Share this review</h4>
                <p className="mt-2 text-xs text-gray-500">Copy link or share on social</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 py-2 rounded-lg border border-gray-200 text-sm">Copy link</button>
                  <button className="py-2 px-3 rounded-lg bg-gray-100 text-sm">Share</button>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Right side: list of all products available for review */}
        <div className="md:col-span-4">
          <div className="sticky top-6 space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold">Other products</h3>
              <p className="text-xs text-gray-500">Click any item to view its reviews</p>

              <div className="mt-4 space-y-3">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setSelectedProductId(p.id); setSelectedReviewIndex(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border ${p.id === selectedProductId ? 'border-red-300 bg-red-50' : 'border-gray-100 bg-white'}`}
                  >
                    <img src={p.img} alt={p.title} className="w-16 h-10 object-cover rounded-md" />
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium">{p.title}</div>
                      <div className="text-xs text-gray-500">{p.subtitle}</div>
                    </div>
                    <div className="text-sm text-gray-600">{p.avgRating.toFixed(1)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-sm font-medium">Filter & Sort</h4>
              <div className="mt-3 flex flex-col gap-2">
                <select className="p-2 border rounded-lg text-sm">
                  <option>Sort: Most recent</option>
                  <option>Sort: Highest rated</option>
                  <option>Sort: Lowest rated</option>
                </select>
                <select className="p-2 border rounded-lg text-sm">
                  <option>Filter: All</option>
                  <option>Filter: 4+ stars</option>
                  <option>Filter: With images</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center text-sm text-gray-500">
              Reviews are fetched from the backend. This example uses mock data and a simulated API call.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* Helper: simple star row (supports 0.5 increments visually via unicode) */
function StarRow({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center text-yellow-500">
      {Array.from({ length: full }).map((_, i) => (
        <span key={i}>★</span>
      ))}
      {half && <span>☆</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={i + 10} className="text-gray-300">★</span>
      ))}
    </div>
  );
}

/*
Notes:
- Paste this file in your React app (e.g. src/components/TechPolarityReviewsPage.jsx) and render it.
- Requires TailwindCSS and framer-motion installed (npm i framer-motion).
- The mock fetch is in useEffect; replace with real API call (fetch/axios) that returns the same shape.
- To connect to backend: fetch('/api/reviews') and setProducts(response.data).
*/
