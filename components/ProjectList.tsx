// components/ProjectList.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
};

type ProjectListProps = {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick }) => {
  return (
    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-4 gap-10'>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          img={project.img}
          title={project.title}
          description={project.description}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
};

export default ProjectList;
