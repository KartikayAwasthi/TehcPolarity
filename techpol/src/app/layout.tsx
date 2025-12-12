// src/app/layout.tsx
import "@/app/globals.css"; // Your global styles
import Header from "@/components/Header/Header"; // adjust path if your Header lives elsewhere
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechPolarity",
  description: "All the buzz you need to know about!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Main centered container for the app (max width controlled by tailwind classes) */}
        <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-48">
          {/* Header at top */}
          <Header />

          {/* Page content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Footer at bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
