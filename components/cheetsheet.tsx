
import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";

type CheatsheetItem = {
  title: string;
  content: string;
};

type CheatsheetProps = {
  items: CheatsheetItem[];
};

const Cheatsheet: React.FC<CheatsheetProps> = ({ items }) => {
  // Track which item has been copied
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content).then(
      () => {
        setCopiedIndex(index); // Set the index of the copied item
        setTimeout(() => {
          setCopiedIndex(null); // Reset the copied index after 5 seconds
        }, 5000);
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <div className='text-black grid grid-flow-row gap-5 grid-cols-1 sm:grid-cols-4 h-auto'>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: '10px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          className='bg-zinc-900/40 border text-white/80 border-gray-400/20'
        >
          <div
            style={{
              padding: '10px',
              fontWeight: 'bold',
            }}
            className='border-b border-gray-400/20 flex justify-between items-center'
          >
            <span>{item.title}</span>
            <button
              onClick={() => handleCopy(item.content, index)}
              className={`border border-gray-400/20 text-white/60 font-bold py-1 px-2 rounded ${
                copiedIndex === index ? ' border border-gray-400/20' : ''
              }`}
            >
              {copiedIndex === index ? "copied"
 : <IoCopyOutline />
}
            </button>
          </div>
          <div style={{ padding: '10px' }}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cheatsheet;
