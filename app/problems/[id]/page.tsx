"use client";

import { useEffect, useState } from 'react';
import CodeEditor from '@/components/CodeEditor';

const languageHandlers: { [key: string]: (code: string) => string } = {
  javascript: (code: string) => {
    try {
      const result = eval(code);
      return `Output: ${result}`;
    } catch (error) {
      return `Error: ${(error as Error).message}`;
    }
  },
  python: (code: string) => {
    // Placeholder for Python execution
    return 'Python execution is not supported in the offline playground.';
  },
  java: (code: string) => {
    // Placeholder for Java execution
    return 'Java execution is not supported in the offline playground.';
  },
  // Add more languages as needed
};

const ProblemPage = ({ params }: { params: { id: string } }) => {
  const [problem, setProblem] = useState<any | null>(null);
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    const fetchProblem = async () => {
      const response = await fetch('/data/problems.json');
      const data = await response.json();
      const foundProblem = data.find((p: any) => p.id === params.id);
      setProblem(foundProblem);
      setCode(''); // Clear code when problem is loaded
    };

    fetchProblem();
  }, [params.id]);

  const handleEditorChange = (value: string) => {
    setCode(value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = () => {
    const handler = languageHandlers[language];
    if (handler) {
      const result = handler(code);
      setOutput(result);
    } else {
      setOutput('Language not supported.');
    }
  };

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }} className='flex flex-col gap-4'>
      <h2 className='bg-zinc-900 sm:text-xl border border-gray-400/30 rounded-lg w-fit px-3 py-1 font-semibold'>{problem.title}</h2>
      <p>{problem.description}</p>
      <p><strong>Example:</strong> {problem.example}</p>

      <div style={{ marginBottom: '20px' }}>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{ padding: '10px', fontSize: '16px' }}
          className='bg-zinc-900 border border-gray-400/30 rounded-lg'
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      <CodeEditor
        language={language}
        value={code}
        onChange={handleEditorChange}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          width:'5vw'
        }}
      >
        Submit
      </button>

      {output !== null && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default ProblemPage;
