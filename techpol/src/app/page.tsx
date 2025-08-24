/*
================================================================================
File: src/app/page.tsx
Description: UPDATED - The conflicting horizontal padding classes have been
             removed from the root div. The main layout container in layout.tsx
             now handles the page's width and centering.
================================================================================
*/
"use client"; // This directive is necessary to use hooks like useState

import React, { useState } from "react";
import Header from "../components/Header/Header";
import TabBar from "../components/TabBar/TabBar";
import MainArticle from "../components/Articles/MainArticle";
import LeftSideBarSmall from "../components/Articles/LeftSideBarSmall";
import LeftSideBarLarge from "../components/Articles/LeftSideBarLarge";
import TrendingAppStory from "../components/Articles/TrendingAppStory";
import SideBarArticle from "../components/Articles/SideBarArticle";
import TrendingStory from "../components/Articles/TrendingStory";
import Footer from "../components/Footer/Footer";
// import RightSidebar from "../component/Sidebar/RightSideBar";

const Home: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  return (
    // The large horizontal padding classes have been removed from here.
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-1/2 right-0 z-50 bg-gray-400 text-black px-3 py-2 rounded-l-lg opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer hidden lg:block"
        style={{ transform: "translateY(-50%)" }}
        onClick={() => setSidebarVisible(true)}
      >
        &#9776;
      </button>

      {/* Right Sidebar (pops out on button click, hides on mouse leave)
      <RightSidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      /> */}

      {/* TabBar Component */}
      <TabBar />

      {/* Main Content Area */}
      <div className="flex flex-col sm:flex-row flex-grow ">
        {/* Main Article and LeftSideBarSmall */}
        <div className="w-full sm:w-1/2 flex flex-col p-2">
          <MainArticle />
          <LeftSideBarSmall />
        </div>

        {/* Sidebar Article Component */}
        <div className="w-full sm:w-2/4 p-2">
          <SideBarArticle />
          <SideBarArticle />
          <SideBarArticle />
          <SideBarArticle />
        </div>
      </div>

      {/* Container for LeftSideBarLarge and TrendingAppStory with respective widths */}
      <div className="flex sm:flex-row flex-col gap-1">
        {/* LeftSideBarLarge taking 75% of the width */}
        <div className="w-full sm:w-3/4 p-1">
          <LeftSideBarLarge />
        </div>

        {/* TrendingAppStory taking 25% of the width */}
        <div className="w-full sm:w-1/4 p-1">
          <TrendingAppStory />
        </div>
      </div>

      {/* Trending Story */}
      <div className="p-3">
        <TrendingStory />
      </div>

      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
}

export default Home;