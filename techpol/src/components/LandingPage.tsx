/*
================================================================================
File: src/components/LandingPage.tsx
Description: A reusable landing page component that wraps content with the
             standard Header and Footer, and displays a dynamic title.
================================================================================
*/
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LandingPageProps {
  pageTitle: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ pageTitle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 my-12">
          {pageTitle}
        </h1>
        {/* You can add more content specific to landing pages here if needed */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;