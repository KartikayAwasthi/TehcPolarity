/*
================================================================================
File: src/components/Articles/LeftSideBarSmall.tsx
Description: Uses Next.js <Image> component. Now in TypeScript.
================================================================================
*/
import React from 'react';
import Image from 'next/image';

interface LeftSideBarSmallProps {
    onClick?: () => void;
}

const LeftSideBarSmall: React.FC<LeftSideBarSmallProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="flex flex-col sm:flex-row w-full p-3 bg-gray-100 rounded-lg ">
            {['1', '2'].map((_, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mb-6 sm:mb-0 p-2">
                    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-md">
                        <div className="relative w-full h-48">
                            <Image
                                src="/Keyboard3.png"
                                alt="About Keyboard"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">About Keyboard</h2>
                        <div className="space-y-1">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftSideBarSmall;