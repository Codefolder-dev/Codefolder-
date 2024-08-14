// app/languages/[language]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProjectList from '@/components/ProjectList';

type Project = {
  id: number;
  title: string;
  img: string;
  description: string;
};

const LanguagePage = () => {
  const router = useRouter();
  const params = useParams();
  const language = params.language as string;
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      const languageData = data.find((item: any) => item.language === language);
      setProjects(languageData ? languageData.projects : []);
    };

    if (language) {
      fetchProjects();
    }
  }, [language]);

  const handleProjectClick = (projectId: number) => {
    router.push(`/Dashboard/projects/${projectId}`);
  };

  const handleQuestionsClick = () => {
    router.push(`/Dashboard/languages/${language}/questions`);
  };

  const handleCheatsheetClick = () => {
    router.push(`/Dashboard/languages/${language}/cheatsheets`);
  };

  return (
    <div className='flex p-10 w-auto h-auto flex-col gap-10'>
      <h2 className='sm:text-4xl text-2xl'>{language} Projects</h2>
      <div className='flex gap-10'>
        <button
          onClick={handleCheatsheetClick}
          className='bg-purple-600/70 px-6 py-2 rounded-xl text-xl '
        >
          View Cheatsheet
        </button>
        <button
          onClick={handleQuestionsClick}
          className='bg-purple-600/70 px-6 py-2 rounded-xl text-xl '
        >
          View Interview Questions
        </button>
      </div>
      <ProjectList projects={projects} onProjectClick={handleProjectClick} />
    </div>
  );
};

export default LanguagePage;
