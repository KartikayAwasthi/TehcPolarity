/*
================================================================================
File: src/components/TabBar/TabBar.tsx
Description: Converted to a Client Component to use the useRef hook for
             scrolling functionality. Now in TypeScript.
================================================================================
*/
"use client";

import React, { useRef } from "react";

const TabBar: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const tabItems: string[] = ["Windows 11", "Tech", "iOS 18", "GTA 6", "Google Gemini", "Roblox", "Arun"];

    const scrollLeft = (): void => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
        }
    };

    const scrollRight = (): void => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white w-full max-w-screen-xl mx-auto">
            <h3 className="text-center text-[clamp(1.5rem,2.5vw,3rem)] font-bold p-0">
                Trending
            </h3>
            <div className="border-b-2 border-black p-4">
                <div className="relative bg-gray-200 py-1 px-3.5 rounded-full overflow-hidden max-w-4xl mx-auto flex items-center">
                    <button
                        aria-label="Scroll left"
                        className="text-black text-xl px-3 py-2 rounded-full bg-gray-200 transition duration-300"
                        onClick={scrollLeft}
                    >
                        &lt;
                    </button>
                    <div
                        className="flex items-center space-x-3 overflow-hidden flex-grow px-3"
                        ref={scrollContainerRef}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {tabItems.map((item, index) => (
                            <button
                                key={index}
                                className="bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 hover:scale-105 text-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button
                        aria-label="Scroll right"
                        className="text-black text-xl px-3 py-2 rounded-full bg-gray-200 transition duration-300"
                        onClick={scrollRight}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabBar;