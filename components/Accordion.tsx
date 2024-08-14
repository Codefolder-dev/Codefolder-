"use client"
// components/Accordion.tsx
import React, { useState } from 'react';

type AccordionProps = {
  title: string;
  content: string;
  onReadMore: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, onReadMore }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      className='bg-slate-950 w-full'
    >
      <div
        onClick={toggleAccordion}
        style={{
          cursor: 'pointer',
          padding: '10px',
          fontWeight: 'bold',
        }}
      >
        Q: {title}
      </div>
      <div className='bg-slate-950'>

      {isOpen && (
        <div style={{ padding: '10px' }} >
          <p>{content}</p>
          <button
            onClick={onReadMore}
            style={{
              cursor: 'pointer',
              border: 'none',
              textDecoration: 'underline',
            }}

          >
            Read More
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Accordion;
