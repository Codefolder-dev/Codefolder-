"use client";

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';

const Judge0API = {
  endpoint: 'https://api.judge0.com/submissions/?base64_encoded=false&wait=true',
};

const PlaygroundPage = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRunCode = async () => {
    const languageIds: { [key: string]: number } = {
      javascript: 62,
      python: 71,
      'c++': 54,
      c: 50,
      java: 60,
      html: 20,
      css: 21,
      rust: 72,
      go: 63,
      // Add more languages and their corresponding Judge0 IDs
    };

    const languageId = languageIds[language];
    if (!languageId) {
      setError('Language not supported.');
      return;
    }

    try {
      const response = await fetch(Judge0API.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageId,
          stdin: '',
          expected_output: '',
          compiler_options: '',
        }),
      });

      const result = await response.json();
      if (result.stdout) {
        setOutput(result.stdout);
      } else if (result.stderr) {
        setOutput(result.stderr);
      } else {
        setOutput('No output received.');
      }
    } catch (error) {
      setError(`An error occurred: ${(error as Error).message}`);
    }
  };

  const handleEditorChange = (value: string) => {
    setCode(value);
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    console.log('Editor mounted:', editor);
    console.log('Monaco instance:', monaco);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Code Playground</h2>
      <div style={{ marginBottom: '20px' }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c++">C++</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="rust">Rust</option>
          <option value="go">Go</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <CodeEditor
        language={language}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
      />
      <button
        onClick={handleRunCode}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Run Code
      </button>
      {output && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #f00', borderRadius: '8px', color: '#f00' }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default PlaygroundPage;
