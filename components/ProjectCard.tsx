// components/ProjectCard.tsx
import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  img: string;
  onClick: (id: number) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, img, onClick }) => {
  return (
    <div
      onClick={() => onClick(id)}
      style={{
        cursor: 'pointer',

        transition: 'transform 0.2s',
      }}
      className=' w-auto'
    >
      <Image src={img} alt='project img' width={2000} height={1000} className=' w-96 h-52 rounded-t-3xl' />
      <div className=' border border-gray-400/40 rounded-b-2xl p-2 w-auto'>

        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
