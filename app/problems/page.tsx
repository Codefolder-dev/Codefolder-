// app/problems/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProblemsPage = () => {
  const [problems, setProblems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch('/data/problems.json');
      const data = await response.json();
      setProblems(data);
    };

    fetchProblems();
  }, []);

  const handleProblemClick = (id: string) => {
    router.push(`/problems/${id}`);
  };

  return (
    <div className='w-full p-5' id="dsa">
      <h2>DSA Problems</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Problems List:</h3>
        <ul>
          {problems.map((problem) => (
            <li
              key={problem.id}
              onClick={() => handleProblemClick(problem.id)}
              style={{ cursor: 'pointer', color: '#0070f3' }}
            >
              {problem.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProblemsPage;
