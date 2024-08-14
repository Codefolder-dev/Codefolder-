// components/Cheatsheet.tsx
import React from 'react';

type CheatsheetItem = {
  title: string;
  content: string;
};

type CheatsheetProps = {
  items: CheatsheetItem[];
};

const Cheatsheet: React.FC<CheatsheetProps> = ({ items }) => {
  return (
    <div className='text-black grid grid-flow-row grid-cols-4 h-auto'>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px',
              backgroundColor: '#f9f9f9',
              fontWeight: 'bold',
            }}
          >
            {item.title}
          </div>
          <div style={{ padding: '10px', backgroundColor: '#fff' }}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cheatsheet;
