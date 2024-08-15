// components/ProjectCard.tsx
import Image from 'next/image';
import React from 'react';
import { IoArrowForward } from "react-icons/io5";

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
      <Image src={img} alt='project img' width={2000} height={1000} className=' w-96 h-52 rounded-t-xl' />
      <div className=' border border-gray-400/40 bg-white text-slate-900 rounded-b-xl gap-5 flex flex-col  p-2 w-auto'>

        <div>
          <h3 className='sm:text-xl text-lg'>{title}</h3>
        <p>{description}</p>
        </div>
        <p className='bg-slate-900 text-white  px-3 py-1 rounded-md flex justify-between items-center text-lg'>Learn more <IoArrowForward />
</p>
      </div>
    </div>
  );
};

export default ProjectCard;
