"use client";

import React, { useState } from 'react';
import PlaygroundSelector from '@/components/PlaygroundSelector';
import CodeEditor from '@/components/CodeEditor';
import { PlaygroundType } from '@/types';

const PlaygroundPage = () => {
  const [selectedPlayground, setSelectedPlayground] = useState<PlaygroundType | null>(null);
  const [html, setHtml] = useState<string>('<h1>Hello, World!</h1>');
  const [css, setCss] = useState<string>('');
  const [js, setJs] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');
  const [output, setOutput] = useState<string>('');

  const executeCode = () => {
    if (language === 'javascript') {
      try {
        // Capture console.log output
        const log: string[] = [];
        const consoleLog = console.log;
        console.log = (msg: string) => log.push(msg);

        // Evaluate JavaScript code
        eval(code);

        // Restore console.log
        console.log = consoleLog;

        setOutput(log.join('\n'));
      } catch (error) {
        setOutput(`Error: ${(error as Error).message}`);
      }
    } else {
      // Placeholder for non-JavaScript execution
      setOutput('Code execution for this language is not yet supported.');
    }
  };

  const renderPlayground = () => {
    switch (selectedPlayground) {
      case 'dsa':
        return (
          <div style={{ padding: '20px' }} className='flex flex-col gap-5'>
            <h2 className='sm:text-xl'>DSA Practice Playground</h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className='bg-zinc-800 border border-gray-400/20 rounded-xl px-3 py-2 text-white w-fit' >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              {/* Add more languages as needed */}
            </select>
            <div className='flex sm:flex-row flex-col gap-5 '>
              <CodeEditor
                language={language}
                value={code}
                onChange={setCode}
              />
              <div className='flex flex-col p-4 rounded-lg border border-gray-400/20 bg-zinc-800/60 w-full'>
                <button
                  onClick={executeCode}
                  className='bg-purple-600/70 w-fit px-8 rounded-xl font-semibold py-2'
                >
                  Run
                </button>
                <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
                  <h3>Output:</h3>
                  <pre>{output}</pre>
                </div>
              </div>
            </div>
          </div>
        );
      // case 'coding':
      //   return (
      //     <div style={{ padding: '20px' }}>
      //       <h2>Coding Practice Playground</h2>
      //       <select
      //         value={language}
      //         onChange={(e) => setLanguage(e.target.value)}
      //         style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      //       >
      //         <option value="javascript">JavaScript</option>
      //         <option value="python">Python</option>
      //         <option value="java">Java</option>
      //         {/* Add more languages as needed */}
      //       </select>
      //       <CodeEditor
      //         language={language}
      //         value={code}
      //         onChange={setCode}
      //       />
      //       <button
      //         onClick={executeCode}
      //         style={{
      //           padding: '10px 20px',
      //           marginTop: '20px',
      //           cursor: 'pointer',
      //           backgroundColor: '#0070f3',
      //           color: 'white',
      //           border: 'none',
      //           borderRadius: '5px',
      //         }}
      //       >
      //         Run
      //       </button>
      //       <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
      //         <h3>Output:</h3>
      //         <pre>{output}</pre>
      //       </div>
      //     </div>
      //   );
      case 'web development':
        return (
          <div style={{ padding: '20px' }} >
            <h2>Web Development Playground</h2>
            <div className='flex sm:flex-row flex-col gap-5 '>
              <div className='flex flex-col gap-5 '>
                  <h1>html</h1>
              <CodeEditor
                language="html"
                value={html}
                onChange={setHtml}
              />
              </div>
              <div className='flex flex-col gap-5 '>
              <h1>css</h1>
              <CodeEditor
                language="css"
                value={css}
                onChange={setCss}
              />
              </div>
              <div className='flex flex-col gap-5 '>
<h1>javascript</h1>
              <CodeEditor
                language="javascript"
                value={js}
                onChange={setJs}
              />
              </div>
            </div>
            <div style={{ marginTop: '20px' }} className='border border-gray-400/20 rounded-xl w-auto h-auto'>
              <iframe
                style={{ width: '100%', height: '100vh', border: 'none' }}
                title="Output"
                srcDoc={`
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <style>${css}</style>
                  </head>
                  <body>
                    ${html}
                    <script>${js}<\/script>
                  </body>
                  </html>
                `}
              />
            </div>
          </div>
        );
      default:
        return <div>Please select a playground type above.</div>;
    }
  };

  return (
    <div className='h-auto'>
      <PlaygroundSelector onSelect={setSelectedPlayground} />
      {renderPlayground()}
    </div>
  );
};

export default PlaygroundPage;
