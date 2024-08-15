import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { CodeEditorProps } from '../types';
import { BsFillSave2Fill } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { GiResize } from "react-icons/gi";

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  onChange,
  onMount,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSaveOptions, setShowSaveOptions] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [theme, setTheme] = useState<'vs-dark' | 'light'>('vs-dark');
  const [fileName, setFileName] = useState('code');
  const [fileExtension, setFileExtension] = useState(language);
  const [editorWidth, setEditorWidth] = useState(400); // Initial width in pixels
  const [editorHeight, setEditorHeight] = useState(600); // Initial height in pixels

  const editorRef = useRef<HTMLDivElement | null>(null);
  const resizeRef = useRef<HTMLDivElement | null>(null);

  const toggleSettings = () => setShowSettings(!showSettings);
  const toggleSaveOptions = () => setShowSaveOptions(!showSaveOptions);

  const downloadCodeFile = () => {
    const blob = new Blob([value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowSaveOptions(false); // Close the modal after download
  };

  const handleMouseDown = (e: MouseEvent) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = editorRef.current?.offsetWidth || 0;
    const startHeight = editorRef.current?.offsetHeight || 0;

    const onMouseMove = (e: MouseEvent) => {
      if (editorRef.current) {
        setEditorWidth(startWidth + (e.clientX - startX));
        setEditorHeight(startHeight + (e.clientY - startY));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    if (resizeRef.current) {
      resizeRef.current.addEventListener('mousedown', handleMouseDown);
    }
    return () => {
      if (resizeRef.current) {
        resizeRef.current.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, []);

  return (
    <div className='relative'>
      <button
        onClick={toggleSettings}
        className='absolute z-10 bottom-4 right-4 p-2 bg-zinc-800 text-white rounded-xl border text-white/40 border-gray-400/20 hover:bg-gray-700'
      >
        <IoSettingsOutline />
      </button>

      {showSettings && (
        <div className='absolute top-0 border border-gray-400/20 right-0 bg-transparent backdrop-blur-3xl shadow-md p-4 rounded w-64 z-10'>
          <h4 className='text-lg font-semibold mb-2'>Editor Settings</h4>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <label htmlFor='font-size' className='text-sm'>
                Font Size
              </label>
              <input
                id='font-size'
                type='number'
                min='10'
                max='20'
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className='w-16 p-1 border border-gray-400/30 rounded bg-transparent'
              />
            </div>
            <div className='flex justify-between items-center'>
              <label className='text-sm'>Line Numbers</label>
              <input
                type='checkbox'
                checked={showLineNumbers}
                onChange={(e) => setShowLineNumbers(e.target.checked)}
                className='cursor-pointer'
              />
            </div>
            <div className='flex justify-between items-center'>
              <label className='text-sm'>Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'vs-dark' | 'light')}
                className='p-1 border bg-transparent border-gray-400/30 rounded'
              >
                <option value='vs-dark'>Dark</option>
                <option value='light'>Light</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleSaveOptions}
        className='absolute z-10 bottom-14 right-4 p-2 bg-zinc-800 text-white rounded-xl border text-white/40 border-gray-400/20 hover:bg-gray-700 '
      >
        <BsFillSave2Fill />
      </button>

      {showSaveOptions && (
        <div className='absolute top-0 right-0 bg-transparent border border-gray-400/20 shadow-md p-4 backdrop-blur-3xl rounded w-64 z-20'>
          <h4 className='text-lg font-semibold mb-2'>Save Options</h4>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <label htmlFor='file-name' className='text-sm'>
                File Name
              </label>
              <input
                id='file-name'
                type='text'
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className='p-1 bg-transparent border border-gray-400/20 rounded w-28'
              />
            </div>
            <div className='flex justify-between items-center'>
              <label htmlFor='file-extension' className='text-sm'>
                Format
              </label>
              <select
                id='file-extension'
                value={fileExtension}
                onChange={(e) => setFileExtension(e.target.value)}
                className='p-1 border bg-transparent border-gray-400/20 rounded'
              >
                <option value='js'>Js</option>
                <option value='ts'>ts</option>
                <option value='py'>py</option>
                <option value='java'>Java</option>
                <option value='txt'>txt</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button
              onClick={downloadCodeFile}
              className='mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            >
              Download
            </button>
          </div>
        </div>
      )}

      <div
        ref={editorRef}
        className='relative'
        style={{ width: `${editorWidth}px`, height: `${editorHeight}px` }}
      >
        <Editor
          height='100%'
          width='100%'
          language={language}
          value={value}
          onChange={(value) => onChange(value ?? '')}
          onMount={onMount}
          beforeMount={(monaco) => {
            console.log('beforeMount: the monaco instance:', monaco);
          }}
          onValidate={(markers) => {
            markers.forEach((marker) => {
              console.log(
                `Marker: ${marker.message} at line ${marker.startLineNumber}`
              );
            });
          }}
          className='bg-zinc-800 text-white'
          theme={theme}
          options={{
            fontSize,
            lineNumbers: showLineNumbers ? 'on' : 'off',
          }}
        />
        <div
          ref={resizeRef}
          className='absolute right-0 bottom-0 hover:w-24 text-xl hover:text-3xl w-5 h-5 bg-transparent cursor-se-resize text-white z-10'
          style={{ borderRadius: '0 0 0 2px' }}
        />
    <GiResize className='absolute bottom-0 right-0  '/>

      </div>
    </div>
  );
};

export default CodeEditor;
