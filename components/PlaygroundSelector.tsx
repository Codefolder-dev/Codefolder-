import React from 'react';
import { PlaygroundSelectorProps, PlaygroundType } from '../types';
import Dsa from "@/components/assets/images/Amazon.png"
// Define images and texts for each option
const cardData = {
  dsa: {
    imgSrc: '/dsa-new.webp',
    text: 'Improve your data structures and algorithms skills with a variety of problems.'
  },
  coding: {
    imgSrc: '/coding.jpeg',
    text: 'Practice coding problems across multiple programming languages.'
  },
  'web development': {
    imgSrc: '/web.png',
    text: 'Build and test web applications using HTML, CSS, and JavaScript.'
  }
};

const PlaygroundSelector: React.FC<PlaygroundSelectorProps> = ({ onSelect }) => {
  const options: PlaygroundType[] = ['dsa', 'coding', 'web development'];

  const handleSelection = (option: PlaygroundType) => {
    onSelect(option);
  };

  return (
    <div style={{ padding: '20px', marginBottom: '20px' }} className='flex flex-col justify-center items-center w-full gap-10'>
      <h3 className='sm:text-4xl text-xl text-center'>Select Playground Type</h3>
      <div className='flex gap-4 sm:flex-row flex-col justify-center'>
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleSelection(option)}
            className='bg-white  text-black/80  rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg'
            style={{ width: '300px', height: '350px' }}
          >
            <img
              src={cardData[option].imgSrc}
              alt={option}
              className='w-full h-1/2 object-cover rounded-t-lg'
            />
            <div className='p-4'>
              <h4 className='text-xl font-semibold'>{option.charAt(0).toUpperCase() + option.slice(1)} Practice</h4>
              <p className='mt-2'>{cardData[option].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaygroundSelector;
