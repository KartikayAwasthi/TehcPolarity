/*
================================================================================
File: src/components/Articles/TrendingAppStory.tsx
Description: Simple presentational component. Now in TypeScript.
================================================================================
*/
import React from 'react';

const TrendingAppStory: React.FC = () => {
    return (
        <div className="bg-red-500 p-4 rounded-lg shadow-md w-full sm:w-[100%] m-0">
            <h2 className="text-white text-2xl font-bold mb-6">Trending Story App</h2>
            <div className="space-y-4">
                {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className="h-1 bg-white"></div>
                ))}
            </div>
        </div>
    );
};

export default TrendingAppStory;