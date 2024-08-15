import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Placeholder for a card */}
      <div className="bg-gray-300 h-40 rounded-md"></div>
      <div className="bg-gray-300 h-6 rounded-md"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
    </div>
  );
};

export default Skeleton;
