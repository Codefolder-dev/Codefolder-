"use client";

import React, { useState } from 'react';
import PlaygroundSelector from '@/components/PlaygroundSelector';
import CodeEditor from '@/components/CodeEditor';
import { PlaygroundType } from '@/types';
import ProblemsPage from '../problems/page';
import { AiFillCode } from "react-icons/ai";
import { MdOutput } from "react-icons/md";

const PlaygroundPage = () => {
  const [selectedPlayground, setSelectedPlayground] = useState<PlaygroundType | null>(null);
  const [html, setHtml] = useState<string>(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>

</body>
</html>`);
  const [css, setCss] = useState<string>('');
  const [js, setJs] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');
  const [output, setOutput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('editor');

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
    if (selectedPlayground === 'dsa') {
      return <ProblemsPage />;
    } else if (selectedPlayground === 'coding') {
      return (
        <div>

        <div className='w-auto sm:hidden flex flex-col p-5 gap-4 justify-center items-center'>
          <h2>Coding Practice Playground</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='bg-zinc-800 px-4 py-2 w-fit rounded-xl border border-gray-400/20'
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            {/* Add more languages as needed */}
          </select>
          <div className='tabs flex justify-center items-center gap-20'>
            <button onClick={() => setActiveTab('editor')} className={`tab-button ${activeTab === 'editor' ? 'active' : ''} bgzinc-900 text-white/80 border flex gap-3 items-center justify-center border-gray-400/20 px-4 py-1 rounded-lg` }>
                Editor
                <AiFillCode />

            </button>
            <button onClick={() => setActiveTab('output')} className={`tab-button ${activeTab === 'output' ? 'active' : ''} bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg`}>
                Output
                <MdOutput/>
            </button>
          </div>
          {activeTab === 'editor' && (
            <CodeEditor
              language={language}
              value={code}
              onChange={setCode}
            />
          )}
          {activeTab === 'output' && (
            <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
              <button
                onClick={executeCode}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                Run
              </button>
              <h3>Output:</h3>
              <pre>{output}</pre>
            </div>
          )}
          </div>
          <div className='sm:flex hidden gap-5'>
            <div>
              <CodeEditor
              language={language}
              value={code}
              onChange={setCode}
            />
            </div>
               <div className='w-full bg-zinc-900 p-5 border border-gray-400/20 rounded-lg'>
              <button
                onClick={executeCode}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                Run
              </button>
              <h3>Output:</h3>
              <pre>{output}</pre>
            </div>
          </div>
        </div>

      );
    } else if (selectedPlayground === 'web development') {
      return (
        <div>

          <div className='sm:hidden flex flex-col p-5 gap-5 justify-center items-center'>
            <h2 className='bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg'>Web Development Playground</h2>
            <div className='tabs flex gap-2'>
              <button onClick={() => setActiveTab('html')} className={`tab-button ${activeTab === 'html' ? 'active' : ''} bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg`}>
                HTML
              </button>
              <button onClick={() => setActiveTab('css')} className={`tab-button ${activeTab === 'css' ? 'active' : ''} bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg`}>
                CSS
              </button>
              <button onClick={() => setActiveTab('js')} className={`tab-button ${activeTab === 'js' ? 'active' : ''} bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg`}>
                JavaScript
              </button>
                <button onClick={() => setActiveTab('output')} className={`tab-button ${activeTab === 'output' ? 'active' : ''} bgzinc-900 border text-white/80 flex justify-center items-center gap-3 border-gray-400/20 px-4 py-1 rounded-lg`}>
                Output
                <MdOutput/>
            </button>
            </div>
            {activeTab === 'html' && (
              <CodeEditor
                language="html"
                value={html}
                onChange={setHtml}
              />
            )}
            {activeTab === 'css' && (
              <CodeEditor
                language="css"
                value={css}
                onChange={setCss}
              />
            )}
            {activeTab === 'js' && (
              <CodeEditor
                language="javascript"
                value={js}
                onChange={setJs}
              />
            )}
            {activeTab === 'output' && (
              <div className='border border-gray-400/20 rounded-xl w-full h-auto'>
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
            )}
          </div>
          <div className='hidden sm:flex sm:flex-col'>
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
          </div>
        </div>
      );
    } else {
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
