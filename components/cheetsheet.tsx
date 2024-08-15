import React, { useState } from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

type CheatsheetItem = {
  id: string;
  title: string;
  content: string;
  code: string;
};

type CheatsheetProps = {
  items: CheatsheetItem[];
  language: string;
};

const Cheatsheet: React.FC<CheatsheetProps> = ({ items, language }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content).then(
      () => {
        setCopiedIndex(index);
        setTimeout(() => {
          setCopiedIndex(null);
        }, 5000);
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  const handleShare = (id: string, title: string) => {
    const shareUrl = `https://codefolder.in/Dashboard/languages/${language}/cheatsheets#${id}`;
    const shareText = `Check out this cheat sheet: ${title}\n${shareUrl}`;
    navigator.clipboard.writeText(shareText).then(
      () => {
        alert('Share link copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <div className='text-black grid grid-flow-row gap-5 grid-cols-1 sm:grid-cols-4 w-auto h-auto'>
      {items.map((item, index) => (
        <div
          id={item.id}
          key={item.id}
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
            className='border-b border-gray-400/20 bg-white text-black flex justify-between items-center'
          >
            <span>{item.title}</span>
            <div className='flex space-x-2'>
              <button
                onClick={() => handleCopy(item.content, index)}
                className={`border border-gray-800/70 text-gray-700 font-bold py-1 px-2 rounded ${
                  copiedIndex === index ? 'border-gray-400/20' : ''
                }`}
              >
                {copiedIndex === index ? 'Copied' : <IoCopyOutline />}
              </button>
              <button
                onClick={() => handleShare(item.id, item.title)}
                className='border border-gray-800/70 text-gray-700 font-bold py-1 px-2 rounded'
              >
                <IoShareOutline />
              </button>
            </div>
          </div>
          <div style={{ padding: '10px' }} className='flex flex-col gap-2'>
            <p>{item.content}</p>
            {item.code && (
              <code className='code-scroll bg-black/30 px-3 py-2 rounded-md'>
                {item.code}
              </code>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cheatsheet;
