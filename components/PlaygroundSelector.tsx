import React from 'react';
import { PlaygroundSelectorProps, PlaygroundType } from '../types';

const PlaygroundSelector: React.FC<PlaygroundSelectorProps> = ({ onSelect }) => {
  const options: PlaygroundType[] = ['dsa', 'web development'];

  const handleSelection = (option: PlaygroundType) => {
    onSelect(option); // Correctly invoke the onSelect function with the selected playground type
  };

  return (
    <div style={{ padding: '20px', marginBottom: '20px' }} className='flex flex-col gap-10'>
      <h3 className='sm:text-4xl text-xl'>Select Playground Type</h3>
      <div >

      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelection(option)} // Correctly pass the selected option
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)} Practice
        </button>
      ))}
      </div>
    </div>
  );
};

export default PlaygroundSelector;
