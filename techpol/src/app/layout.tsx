/*
================================================================================
File: src/app/layout.tsx
Description: UPDATED - A wrapper div has been added inside the <body> to act
             as the main, centered container for the entire application,
             replicating the behavior of the old #root element.
             The import for App.css has been removed as it's no longer needed.
================================================================================
*/

import "@/app/globals.css" // Your global styles
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPolarity',
  description: 'All the buzz you need to know about!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* This div now acts as the main centered container for ALL pages.
            max-w-7xl is Tailwind's class for 1280px. */}
        <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-48">
          {children}
        </div>
      </body>
    </html>
  );
}