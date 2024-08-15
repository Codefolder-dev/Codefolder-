"use client"
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import DNavbar from '@/components/Navbar/DNavbar';
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNodejs } from "react-icons/tb";
import { DiPython } from "react-icons/di";
import { RiJavaLine } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { TbBrandPhp } from "react-icons/tb";
import { SiRuby } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiRust } from "react-icons/si";
import { SiScala } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const languages = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <RiTailwindCssFill /> },
  { name: 'JavaScript', icon:  <RiJavascriptFill />},
  { name: 'TypeScript', icon: <BiLogoTypescript /> },
  { name: 'Node.js', icon: <TbBrandNodejs /> },
  { name: 'Python', icon: <DiPython /> },
  { name: 'Java', icon: <RiJavaLine /> },
  { name: 'C#', icon: <SiCsharp /> },
  { name: 'PHP', icon: <TbBrandPhp /> },
  { name: 'Ruby', icon: <SiRuby /> },
  { name: 'Swift', icon: <SiSwift /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'Go', icon: <TbBrandGolang /> },
  { name: 'Rust', icon: <SiRust /> },
  { name: 'Scala', icon: <SiScala /> },
  { name: 'SQL', icon:  <SiSqlite />},
];




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     const router = useRouter();

  const handleSelectLanguage = (language: string) => {
    router.push(`/Dashboard/languages/${language}`);
  };
  return (
      <div className='flex w-full bg-cyan-900 h-[90vh] overflow-hidden '>
          <Sidebar languages={languages} onSelectLanguage={handleSelectLanguage} />
      <main className=' overflow-y-scroll w-full bg-cyan-900'>

              {children}
          </main>
    </div>
  );
}
