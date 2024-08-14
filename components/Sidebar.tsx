"use client"
import React, { useState } from 'react';

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

  const handleLanguageClick = (language: string) => {
    setActiveLanguage(language);
    onSelectLanguage(language);
  };

  return (
    <div className='relative w-[250px] border-r border-gray-400/30'>
      <div className='h-screen fixed p-5'>
        <h3 className='text-lg font-bold mb-4'>Languages</h3>
        <ul className='list-none p-0'>
          {languages.map((language) => (
            <li key={language.name} className='my-2 w-full  flex items-center'>
              <button
                onClick={() => handleLanguageClick(language.name)}
                className={`bg-none border-none cursor-pointer flex items-center gap-3  ${
                  activeLanguage === language.name
                    ? 'text-white bg-purple-600/70 px-6 rounded-lg py-1 font-semibold' // Active styles
                    : 'text-white/70 ' // Inactive styles
                }`}
              >
                <span className='text-xl'>{language.icon}</span>
                <span className='text-xl'>{language.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
