/*
================================================================================
File: src/components/Footer/Footer.tsx
Description: Uses Next.js <Link> for internal navigation and <Image> for logos
             and icons. Now in TypeScript.
================================================================================
*/
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialLink {
    href: string;
    icon: string;
    alt: string;
}

interface FooterLink {
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { href: "https://www.facebook.com/techpolarity/", icon: "/facebook-icon.png", alt: "Facebook" },
    { href: "https://www.youtube.com/channel/UCx2s9TZZK7lfV47GrP32OBg", icon: "/youtube-icon.png", alt: "YouTube" },
    { href: "https://www.instagram.com/techpolarity/", icon: "/instagram-icon.png", alt: "Instagram" },
    { href: "https://twitter.com", icon: "/twitter-icon.png", alt: "Twitter" },
    { href: "mailto:your-email@gmail.com", icon: "/gmail-icon.png", alt: "Gmail" },
];

const footerLinks: FooterLink[] = [
    { href: "/about", label: "About" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-6 w-full">
            <div className="w-full max-w-screen-lg mx-auto px-4 mb-4">
                <Image
                    src="/techpolarity-logo.png"
                    alt="Techpolarity Banner"
                    width={500}
                    height={128}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <Image
                            src={link.icon}
                            alt={link.alt}
                            width={40}
                            height={40}
                        />
                    </a>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-gray-600 font-medium mb-4 text-sm sm:text-base p-4">
                {footerLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="relative group px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-red-500 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
                        <span className="relative z-10">{link.label}</span>
                    </Link>
                ))}
            </div>

            <div className="text-gray-500 text-xs sm:text-sm font-semibold text-center pb-4">
                &copy; Techpolarity {new Date().getFullYear()} | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;