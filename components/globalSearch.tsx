  // components/GlobalSearch.tsx
  "use client"
  import React, { useState, useCallback } from 'react';
  import { debounce } from 'lodash';
  import { useRouter } from 'next/navigation';

  type Project = {
    id: number;
    title: string;
    description: string;
  };

  const GlobalSearch: React.FC = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Project[]>([]);

    const fetchProjects = async (query: string) => {
      if (!query) {
        setSearchResults([]);
        return;
      }
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      const allProjects = data.flatMap((item: any) => item.projects);
      const results = allProjects.filter((project: Project) =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    };

    const debouncedFetch = useCallback(
      debounce((nextValue: string) => fetchProjects(nextValue), 300),
      []
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setQuery(value);
      debouncedFetch(value);
    };

    const handleProjectClick = (projectId: number) => {
      setQuery('');
      setSearchResults([]);
      router.push(`/Dashboard/projects/${projectId}`);
    };

    return (
      <div className='relative w-auto flex'>
     <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search projects..."
      className=" px-3 py-1 border border-gray-400/30 bg-transparent rounded-md"
    />
        {searchResults.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              right: '0',
              borderRadius: '4px',
              maxHeight: '200px',
              overflowY: 'auto',
              zIndex: 1000,
            }}
            className='bg-zinc-900 backdrop-blur-3xl text-white'
          >
            {searchResults.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                    borderBottom: '1px solid #eee',
                }}
              >
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default GlobalSearch;
