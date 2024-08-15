"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fevicon from "@/public/fevicon2.png";
import GlobalSearch from '../globalSearch';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
        setTimeout(() => setIsOpen(false), 2000); // Close the menu after 2 seconds
    };

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className="bg-black/20 sm:hidden block">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <Link href='/' className='relative flex gap-2 justify-center items-center'>
                        <Image src={Fevicon} alt='codefolder icon' width={32} />
                        <h1>codefolder</h1>
                    </Link>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} absolute bg-zinc-800/20 backdrop-blur-3xl w-screen z-50`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>
                        Home
                    </Link>
                    <Link href="/languages" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>
                        Tutorials
                    </Link>
                    <Link href="/Dashboard" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>
                        Projects
                    </Link>
                    <Link href="/playground" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>
                        Playground
                    </Link>
                    <Link href="" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>
                        Guides
                    </Link>
                    <GlobalSearch />
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;
