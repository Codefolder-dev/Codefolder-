// /src/hooks/useProjectData.ts
import { useState, useEffect } from 'react';
import { Project } from '@/types/projects';
import { getProjects } from '../lib/api';

export const useProjectData = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return projects;
};
