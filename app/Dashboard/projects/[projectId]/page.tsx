// app/projects/[projectId]/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  img: string; // Updated type for image URL
  description: string;
};

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        // Debugging log
        console.log("Fetched project data:", data);

        // Find the project by ID
        const project = data
          .flatMap((item: any) => item.projects)
          .find((proj: Project) => proj.id.toString() === projectId);

        setProject(project || null); // Set project or null if not found
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div  className='w-screen xl:w-auto h-screen px-5 py-20 sm:p-20 flex flex-col gap-5'>
      <h2 className='sm:text-4xl text-2xl'>{project.title}</h2>
      <div className='relative w-full h-96 sm:h-full'>
        <Image
          src={project.img}
          alt={project.title}
          layout="fill"
          // objectFit="cover"
        className='xl:w-full sm:h-[30vh] rounded-xl'
        />
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
