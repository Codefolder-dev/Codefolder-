// app/languages/[language]/cheatsheets/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Cheatsheet from '@/components/cheetsheet';
import Filter from '@/components/Filter';

type CheatsheetItem = {
  title: string;
  content: string;
  level: string;
};

const LanguageCheatsheetPage = () => {
  const params = useParams();
  const language = params.language as string;
  const [cheatsheetItems, setCheatsheetItems] = useState<CheatsheetItem[]>([]);
  const [filteredCheatsheetItems, setFilteredCheatsheetItems] = useState<CheatsheetItem[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  useEffect(() => {
    const fetchCheatsheet = async () => {
      try {
        const response = await fetch(`/data/${language}-cheatsheet.json`);
        if (!response.ok) throw new Error('Failed to load cheatsheet');
        const data = await response.json();
        setCheatsheetItems(data);
        setFilteredCheatsheetItems(data); // Initialize with all cheatsheet items
      } catch (error) {
        console.error(error);
      }
    };

    fetchCheatsheet();
  }, [language]);

  useEffect(() => {
    if (selectedLevel) {
      setFilteredCheatsheetItems(
        cheatsheetItems.filter((item) => item.level === selectedLevel)
      );
    } else {
      setFilteredCheatsheetItems(cheatsheetItems);
    }
  }, [selectedLevel, cheatsheetItems]);

  return (
    <div  className='flex flex-col gap-10 px-5 py-20 sm:p-20'>
      <div className='flex justify-between'>
              <h2 className='sm:text-4xl text-xl'>{language} Cheatsheet</h2>
      <Filter selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
</div>
      <Cheatsheet items={filteredCheatsheetItems} />
    </div>
  );
};

export default LanguageCheatsheetPage;
