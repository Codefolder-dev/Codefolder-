"use client";

import React, { useState, useEffect } from 'react';
import { RiMenuUnfoldLine } from "react-icons/ri";

type Language = {
  name: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  languages: Language[];
  onSelectLanguage: (language: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ languages, onSelectLanguage }) => {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if the screen size is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
    };

    // Initial check
    checkIsMobile();

    // Event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleLanguageClick = (language: string) => {
    setActiveLanguage(language);
    onSelectLanguage(language);

    // Close the sidebar if on mobile
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative z-10 '>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-[250px]' : 'w-0'
        } transition-width duration-300 border-r py-20 border-gray-400/30 absolute z-10 bg-slate-950/50 backdrop-blur-3xl h-screen sm:relative overflow-hidden`}
      >
        {isOpen && (
          <div className='p-5'>
            <h3 className='text-lg font-bold mb-4'>Languages</h3>
            <ul className='list-none p-0'>
              {languages.map((language) => (
                <li key={language.name} className='my-2 w-full flex items-center'>
                  <button
                    onClick={() => handleLanguageClick(language.name)}
                    className={`bg-none border-none cursor-pointer flex items-center gap-3 ${
                      activeLanguage === language.name
                        ? 'text-white bg-purple-600/70 px-6 rounded-lg py-1 font-semibold'
                        : 'text-white/70'
                    }`}
                  >
                    <span className='text-xl'>{language.icon}</span>
                    <span className='text-xl'>{language.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute z-50 text-white top-2 py-20 left-2 ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        } transition-transform duration-300`}
      >
        {isOpen ? (
          <p className='left-44 z-50 bg-zinc-800/20 text-white border border-gray-400/20 rounded-full p-2 text-xl absolute'>
            <RiMenuUnfoldLine />
          </p>
        ) : (
          <p className='left-40 bg-zinc-800/20 border text-white border-gray-400/20 rounded-full p-2 text-xl'>
            <RiMenuUnfoldLine />
          </p>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
