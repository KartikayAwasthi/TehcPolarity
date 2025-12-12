"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND = "#ed1b24";

export default function PrivacyPage() {
  // Simple variants for fade-up and stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
    }),
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Header with fade-up */}
        <motion.header
          className="mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: BRAND }}
            variants={fadeUp}
            custom={0}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="mt-2 text-sm text-gray-600"
            variants={fadeUp}
            custom={1}
          >
            Effective Date: <strong>May 27, 2025</strong>
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <nav
            aria-label="Table of contents"
            className="order-2 lg:order-1 lg:sticky lg:top-24 self-start"
          >
            <motion.div
              className="hidden lg:block p-4 rounded-lg border border-gray-100 shadow-sm"
              style={{ backgroundColor: BRAND }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              <h4 className="text-sm font-bold mb-3" style={{ color: "white" }}>
                On this page
              </h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#info-we-collect" className="hover:underline">
                    1. Information We Collect
                  </a>
                </li>
                <li>
                  <a href="#how-we-use" className="hover:underline">
                    2. How We Use Your Information
                  </a>
                </li>
                <li>
                  <a href="#how-we-share" className="hover:underline">
                    3. How We Share Your Information
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:underline">
                    4. Data Security
                  </a>
                </li>
                <li>
                  <a href="#rights" className="hover:underline">
                    5. Your Data Protection Rights
                  </a>
                </li>
                <li>
                  <a href="#third-party" className="hover:underline">
                    6. Third-Party Websites & Services
                  </a>
                </li>
                <li>
                  <a href="#children" className="hover:underline">
                    7. Children’s Privacy
                  </a>
                </li>
                <li>
                  <a href="#changes" className="hover:underline">
                    8. Changes to This Policy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    9. Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* mobile small toc */}
            <div className="lg:hidden mb-4">
              <details className="p-3 border border-gray-100 rounded-lg bg-white shadow-sm">
                <summary className="font-medium" style={{ color: BRAND }}>
                  Contents
                </summary>
                <ul className="mt-3 text-sm space-y-2 text-gray-700">
                  <li>
                    <a href="#info-we-collect" className="hover:underline">
                      Information We Collect
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-use" className="hover:underline">
                      How We Use Your Information
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-share" className="hover:underline">
                      How We Share Your Information
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </details>
            </div>
          </nav>

          {/* Content */}
          <article className="order-1 lg:order-2 lg:col-span-3">
            <motion.section
              id="intro"
              className="mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
            >
              <motion.p className="text-gray-700" variants={fadeUp} custom={0}>
                This Privacy Policy describes how <strong>Tech Polarity</strong> ("we," "us," or "our")
                collects, uses, and discloses your information when you visit and use our website
                (the "Website"). We are committed to protecting your privacy and ensuring a positive
                experience on our Website. By accessing or using our Website, you agree to the terms
                of this Privacy Policy. If you do not agree, please do not use our Website.
              </motion.p>
            </motion.section>

            <motion.section
              id="info-we-collect"
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
            >
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={0}>
                1. Information We Collect
              </motion.h2>

              <motion.p className="text-gray-700 mb-2" variants={fadeUp} custom={1}>
                We collect various types of information from and about users of our Website, including:
              </motion.p>

              <motion.h3 className="font-medium mt-3" variants={fadeUp} custom={2}>A. Personal Information</motion.h3>
              <motion.p className="text-gray-700 mb-2" variants={fadeUp} custom={3}>
                Personal Information identifies you directly or indirectly. We may collect personal
                information when you voluntarily provide it, such as when you:
              </motion.p>
              <motion.ul className="list-disc list-inside ml-4 text-gray-700 mb-3" variants={fadeUp} custom={4}>
                <li>Create an account (e.g., name, email address, password)</li>
                <li>Subscribe to our newsletter (e.g., email address)</li>
                <li>Contact us (e.g., name, email, message content)</li>
                <li>Participate in surveys or contests (e.g., demographic data)</li>
              </motion.ul>

              <motion.h3 className="font-medium mt-3" variants={fadeUp} custom={5}>B. Usage Data</motion.h3>
              <motion.p className="text-gray-700 mb-2" variants={fadeUp} custom={6}>
                Usage Data is collected automatically and may include IP address, browser type and
                version, pages visited, time and date of your visit, time spent on pages, unique device
                identifiers, and diagnostic data. When you use the Website via a mobile device, we may
                also collect device type, OS version, and mobile browser type.
              </motion.p>

              <motion.h3 className="font-medium mt-3" variants={fadeUp} custom={7}>C. Cookies &amp; Tracking Technologies</motion.h3>
              <motion.p className="text-gray-700 mb-2" variants={fadeUp} custom={8}>
                We use cookies, web beacons, and pixels to track activity on our Website and store
                certain information. Cookies can be "Session" (deleted after you close your browser)
                or "Persistent" (remain on your device).
              </motion.p>

              <motion.div className="mt-3 border-l-4 pl-4 py-3 rounded-md" style={{ borderColor: BRAND }} variants={fadeUp} custom={9}>
                <motion.h4 className="font-semibold text-gray-800" variants={fadeUp} custom={10}>Common cookie types we use</motion.h4>
                <motion.ul className="list-disc list-inside ml-4 mt-2 text-gray-700" variants={fadeUp} custom={11}>
                  <li><strong>Necessary / Essential Cookies</strong> (Session) — required for core site features and authentication.</li>
                  <li><strong>Cookies Policy / Notice Acceptance Cookies</strong> (Persistent) — remember your cookie consent.</li>
                  <li><strong>Functionality Cookies</strong> (Persistent) — remember preferences like language or login state.</li>
                </motion.ul>
              </motion.div>
            </motion.section>

            <motion.section id="how-we-use" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={0}>
                2. How We Use Your Information
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={1}>
                We use collected information for various purposes, including:
              </motion.p>

              <motion.ul className="list-disc list-inside ml-4 text-gray-700 space-y-2" variants={fadeUp} custom={2}>
                <li>To provide and maintain our Website, and monitor its usage.</li>
                <li>To improve our Website, content, features, and functionality.</li>
                <li>To personalise your experience and deliver relevant content.</li>
                <li>To communicate with you, including newsletters and support messages (you may opt out).</li>
                <li>For security, fraud prevention, analytics, and legal compliance.</li>
              </motion.ul>
            </motion.section>

            <motion.section id="how-we-share" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={0}>
                3. How We Share Your Information
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={1}>
                We may share Personal Data in the following situations:
              </motion.p>

              <motion.ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-3" variants={fadeUp} custom={2}>
                <li><strong>Service Providers</strong>: vendors who help operate our Website or analyse usage.</li>
                <li><strong>Business transfers</strong>: in connection with mergers, acquisitions, or asset sales.</li>
                <li><strong>Affiliates and partners</strong>: where required to provide services or offers.</li>
                <li><strong>With your consent</strong> or as otherwise disclosed at the time of collection.</li>
                <li><strong>Public areas</strong>: information you share publicly may be viewable by others.</li>
              </motion.ul>

              <motion.p className="text-gray-700" variants={fadeUp} custom={3}>
                We may also use your information for internal analysis, research, and to measure the effectiveness of promotions.
              </motion.p>
            </motion.section>

            <motion.section id="security" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} custom={0}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={1}>
                4. Data Security
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={2}>
                We implement reasonable security measures—such as SSL/TLS encryption, access controls,
                and regular security reviews—to protect personal information. However, no method of
                transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </motion.p>
            </motion.section>

            <motion.section id="rights" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={0}>
                5. Your Data Protection Rights
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={1}>
                Depending on your jurisdiction, you may have rights including:
              </motion.p>

              <motion.ul className="list-disc list-inside ml-4 text-gray-700 space-y-2" variants={fadeUp} custom={2}>
                <li>Right to Access — request copies of your personal data.</li>
                <li>Right to Rectification — correct inaccurate or incomplete data.</li>
                <li>Right to Erasure — request deletion in certain cases.</li>
                <li>Right to Restrict Processing — request limits on how data is used.</li>
                <li>Right to Object — object to certain types of processing.</li>
                <li>Right to Data Portability — request transfer of your data to another provider.</li>
                <li>Right to Withdraw Consent — where processing relies on your consent.</li>
              </motion.ul>

              <motion.p className="text-gray-700 mt-3" variants={fadeUp} custom={3}>
                To exercise any of these rights, contact us using the details in the Contact section below. We will respond within a reasonable timeframe.
              </motion.p>
            </motion.section>

            <motion.section id="third-party" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} custom={0}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={1}>
                6. Third-Party Websites & Services
              </motion.h2>

              <motion.p className="text-gray-700" variants={fadeUp} custom={2}>
                Our Website may link to third-party websites or services. This Privacy Policy applies only to Tech Polarity.
                We are not responsible for third-party privacy practices; please review their privacy policies before interacting.
              </motion.p>
            </motion.section>

            <motion.section id="children" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} custom={0}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={1}>
                7. Children’s Privacy
              </motion.h2>

              <motion.p className="text-gray-700" variants={fadeUp} custom={2}>
                Our Website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                If you believe your child provided personal information, contact us and we will take steps to remove the information.
              </motion.p>
            </motion.section>

            <motion.section id="changes" className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} custom={0}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={1}>
                8. Changes to This Privacy Policy
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={2}>
                We may update this Privacy Policy periodically. We will post the updated policy on this page and, when appropriate,
                notify users by email or a prominent notice before changes take effect. Please review this policy regularly.
              </motion.p>
            </motion.section>

            <motion.section id="contact" className="mb-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container}>
              <motion.h2 className="text-2xl font-semibold mb-3" style={{ color: BRAND }} variants={fadeUp} custom={0}>
                9. Contact Us
              </motion.h2>

              <motion.p className="text-gray-700 mb-3" variants={fadeUp} custom={1}>
                If you have questions about this Privacy Policy or want to exercise your rights, contact us:
              </motion.p>

              <motion.ul className="list-inside ml-4 text-gray-700 space-y-2" variants={fadeUp} custom={2}>
                <li>
                  By email: <a href="mailto:ikartikay.awasthi@gmail.com" className="underline"> techpolarity@gmail.com</a>
                </li>
                <li>
                  By visiting our contact page: <a href="/contact" className="underline">Contact</a>
                </li>
              </motion.ul>

              <motion.p className="mt-4 text-sm text-gray-600" variants={fadeUp} custom={3}>
                Last updated: May 27, 2025
              </motion.p>
            </motion.section>
          </article>
        </div>
      </section>
    </main>
  );
}
