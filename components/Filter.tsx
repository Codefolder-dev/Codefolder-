// components/Filter.tsx
import React from 'react';

type FilterProps = {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
};

const Filter: React.FC<FilterProps> = ({ selectedLevel, onLevelChange }) => {
  return (
    <div style={{ marginBottom: '20px' }} >
      <label htmlFor="level" style={{ marginRight: '10px' }}>
        Filter by level:
      </label>
      <select
        id="level"
        value={selectedLevel}
        onChange={(e) => onLevelChange(e.target.value)}
        style={{ padding: '5px',}}
        className='bg-slate-950 border rounded-lg  border-gray-400/20'>
        <option value="" >All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Filter;
