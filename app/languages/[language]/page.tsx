// // app/languages/[language]/page.tsx
// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import ProjectList from '../../../components/ProjectList';

// type Project = {
//   id: number;
//   title: string;
//   description: string;
// };

// const LanguagePage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const language = params.language as string;
//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const response = await fetch('/data/projects.json');
//       const data = await response.json();
//       const languageData = data.find((item: any) => item.language === language);
//       setProjects(languageData ? languageData.projects : []);
//     };

//     if (language) {
//       fetchProjects();
//     }
//   }, [language]);

//   const handleProjectClick = (projectId: number) => {
//     router.push(`/projects/${projectId}`);
//   };

//   const handleQuestionsClick = () => {
//     router.push(`/languages/${language}/questions`);
//   };

//   const handleCheatsheetClick = () => {
//     router.push(`/languages/${language}/cheatsheets`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{language} Projects</h2>
//       <button
//         onClick={handleCheatsheetClick}
//         style={{
//           padding: '10px 20px',
//           marginBottom: '20px',
//           cursor: 'pointer',
//           backgroundColor: '#0070f3',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//         }}
//       >
//         View Cheatsheet
//       </button>
//       <button
//         onClick={handleQuestionsClick}
//         style={{
//           padding: '10px 20px',
//           marginBottom: '20px',
//           cursor: 'pointer',
//           backgroundColor: '#0070f3',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//         }}
//       >
//         View Interview Questions
//       </button>
//       <ProjectList projects={projects} onProjectClick={handleProjectClick} />
//     </div>
//   );
// };

// export default LanguagePage;
