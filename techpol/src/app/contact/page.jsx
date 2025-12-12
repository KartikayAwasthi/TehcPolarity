"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BRAND = "#ed1b24";

export default function ContactPage() {
  const socialLinks = [
    { href: "https://www.facebook.com/techpolarity/", icon: "/facebook-icon.png", alt: "Facebook" },
    { href: "https://www.youtube.com/channel/UCx2s9TZZK7lfV47GrP32OBg", icon: "/youtube-icon.png", alt: "YouTube" },
    { href: "https://www.instagram.com/techpolarity/", icon: "/instagram-icon.png", alt: "Instagram" },
    { href: "https://twitter.com", icon: "/twitter-icon.png", alt: "Twitter" },
    { href: "mailto:techpolarity@gmail.com", icon: "/gmail-icon.png", alt: "Gmail" },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <motion.header
          className="text-center mb-14"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 text-[15px] max-w-lg mx-auto leading-relaxed">
            Have a question or want to collaborate?  
            We’d love to hear from you.
          </p>
        </motion.header>

        {/* CONTACT CARD */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl border border-gray-100 p-10 sm:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          {/* FORM */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-14">
            {[
              { label: "Name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Subject", type: "text", span: true },
            ].map((field, index) => (
              <motion.div
                key={field.label}
                className={`flex flex-col gap-1 ${field.span ? "sm:col-span-2" : ""}`}
                initial="hidden"
                animate="visible"
                custom={index + 1}
                variants={fadeUp}
              >
                <label className="text-gray-700 font-medium">{field.label}</label>
                <input
                  type={field.type}
                  required
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none 
                             focus:ring-2 transition bg-gray-50 hover:bg-white"
                  style={{ "--tw-ring-color": BRAND }}
                />
              </motion.div>
            ))}

            {/* MESSAGE FIELD */}
            <motion.div
              className="flex flex-col gap-1 sm:col-span-2"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
            >
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="5"
                required
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none 
                           focus:ring-2 transition bg-gray-50 hover:bg-white"
                style={{ "--tw-ring-color": BRAND }}
              ></textarea>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              className="w-full sm:w-auto py-2.5 px-8 rounded-lg text-white font-semibold 
                         transition-all sm:col-span-2 shadow-md hover:shadow-lg hover:brightness-95"
              style={{ backgroundColor: BRAND }}
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeUp}
            >
              Send Message →
            </motion.button>
          </form>

          {/* SOCIAL LINKS */}
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-5" style={{ color: BRAND }}>
              Connect with us
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition"
                >
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item.alt}
                    className="opacity-80 hover:opacity-100"
                  />
                </motion.a>
              ))}
            </div>

            <p className="text-gray-600 text-sm mt-6">
              Email us at{" "}
              <a
                href="mailto:techpolarity@gmail.com"
                style={{ color: BRAND }}
                className="underline hover:text-black transition"
              >
                techpolarity@gmail.com
              </a>
            </p>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}
