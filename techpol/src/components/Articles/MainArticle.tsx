/*
================================================================================
File: src/components/Articles/MainArticle.tsx
Description: Converted to a Client Component for state and side effects.
             Data fetching remains on the client-side for now.
             Uses Next.js <Image> component. Now in TypeScript.
             FIXED: Type casting for querySelector results.
================================================================================
*/
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface ArticleState {
    title: string;
    image: string;
    description: string;
}

interface MainArticleProps {
    onClick?: () => void;
}

const MainArticle: React.FC<MainArticleProps> = ({ onClick }) => {
    const [article, setArticle] = useState<ArticleState>({
        title: "Loading...",
        image: "/placeholder.png",
        description: "Fetching article content...",
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.gadgets360.com/mobiles/news/realme-14t-design-render-leak-features-expected-colour-options-report-8004720")}`
                );
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data.contents, "text/html");
                
                // Type cast the querySelector results to the specific element type
                const imageElement = doc.querySelector<HTMLMetaElement>("meta[property='og:image']");
                const descriptionElement = doc.querySelector<HTMLMetaElement>("meta[name='description']");

                const title = doc.querySelector("h1")?.innerText || "Title Not Found";
                const image = imageElement?.content || "/placeholder.png";
                const description = descriptionElement?.content || "Description not available.";

                setArticle({ title, image, description });
            } catch (error) {
                console.error("Error fetching article:", error);
                setArticle({
                    title: "Error loading content",
                    image: "/error.png",
                    description: "Unable to fetch the article.",
                });
            }
        };
        fetchArticle();
    }, []);

    return (
        <div
            onClick={onClick}
            className="cursor-pointer p-4 shadow-lg rounded-lg mb-6 border-4 border-gray-300"
        >
            <div className="relative mb-6 w-full h-80">
                <Image
                    src={article.image}
                    alt="Article"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <h2 className="text-lg font-bold text-gray-900">{article.title}</h2>
            <p className="text-gray-700 mt-2 text-base">{article.description}</p>
            <a
                href="https://www.gadgets360.com/mobiles/news/realme-14t-design-render-leak-features-expected-colour-options-report-8004720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
            >
                Read Full Article
            </a>
        </div>
    );
};

export default MainArticle;