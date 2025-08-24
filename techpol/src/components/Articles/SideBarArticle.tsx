/*
================================================================================
File: src/components/Articles/SideBarArticle.tsx
Description: Uses Next.js <Image> component. Now in TypeScript.
================================================================================
*/
import React from 'react';
import Image from 'next/image';

interface SidebarArticleItemProps {
    imgSrc: string;
    title: string;
}

const SidebarArticleItem: React.FC<SidebarArticleItemProps> = ({ imgSrc, title }) => (
    <div className="mb-6 flex flex-col sm:flex-row items-center p-3 sm:p-4 bg-white border-b-4 border-gray-300">
        <div className="w-full sm:w-1/2 lg:w-1/2 relative h-48">
            <Image
                src={imgSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-4 flex-grow p-2 sm:p-4">
            <h2 className="text-l sm:text-2xl font-semibold text-gray-900">{title}</h2>
            <div className="h-1 bg-black mb-1 w-[70%]"></div>
            <div className="h-1 bg-black mb-1 w-[100%]"></div>
            <div className="h-1 bg-black mb-1 w-[100%]"></div>
        </div>
    </div>
);

const SideBarArticle: React.FC = () => {
    const article = { imgSrc: "/Keyboard3.png", title: "About Keyboard" };
    return (
        <div className="w-full max-w-2xl mx-auto p-2 sm:p-3 bg-gray-100 rounded-lg">
            <SidebarArticleItem imgSrc={article.imgSrc} title={article.title} />
        </div>
    );
};

export default SideBarArticle;