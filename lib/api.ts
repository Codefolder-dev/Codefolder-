// /src/lib/api.ts
import { Project } from '@/types/projects';

export const getProjects = async (): Promise<Project[]> => {
  // This would be replaced by an actual API call
  return [
    { id: '1', title: 'HTML Project', description: 'Learn HTML basics.', content: '<p>HTML project details...</p>' },
    { id: '2', title: 'CSS Project', description: 'Explore CSS styling.', content: '<p>CSS project details...</p>' },
    { id: '3', title: 'JavaScript Project', description: 'Master JavaScript.', content: '<p>JavaScript project details...</p>' },
  ];
};

export const getProjectById = async (id: string): Promise<Project> => {
  const projects = await getProjects();
  return projects.find(project => project.id === id)!;
};
