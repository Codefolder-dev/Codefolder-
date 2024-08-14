"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Fevicon from "../../public/fevicon2.png"
import Image from 'next/image';
import { GoChevronRight } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { GiConqueror } from "react-icons/gi";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { RiGuideFill } from "react-icons/ri";
import { VscGithubProject } from "react-icons/vsc";
import { IoLogIn } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import GlobalSearch from '../globalSearch';

type DrawerProps = {
  isVisible: boolean;
  content: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isVisible, content }) => {
  if (!isVisible) return null;

  return (
    <div
      className="absolute  left-[15%] w-2/3  h-72 bg-slate-950  border-b backdrop-blur-3xl  border-gray-400 rounded-lg  shadow-lg"
    >
      <div>
        {content}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (item: string) => () => {
    setHoveredItem(item);
    setDrawerVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setDrawerVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawerVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="hidden sm:flex sticky  items-center space-x-4 p-4  top-0 bg-slate-950 backdrop-blur-lg   z-50  justify-between sm:px-28 text-white  border-b border-gray-700/30">
      <Link href="/" className="hover:underline  sm:text-xl flex justify-center items-center gap-2">
        <Image src={Fevicon} alt='Codefolder Icon' width={32} />
        <h1 className='font-semibold  font-sans'>
          Codefolder
        </h1>
      </Link>
      <div className=' flex gap-10  justify-center items-center  '>

        <Link href="" className='text-sm font-semibold flex justify-center items-center gap-2' > <AiOutlineAliwangwang />
          Solutions</Link>
        <div
          className=" inline-block "
          onMouseEnter={handleMouseEnter('resources')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cursor-pointer flex gap-2 justify-center items-center  text-sm font-semibold relative  hover:underline">
            <GrResources className='text-sm' />

            Resources
          </div>
          <Drawer
            isVisible={hoveredItem === 'resources' && drawerVisible}
            content={
              <div ref={drawerRef} className='w-auto relative   flex flex-col '>
                <div className='flex gap-10'>
                  <div className='flex flex-col bg-zinc-700 h-full p-10 gap-5'>
                    <h1 className=' '>Tutorial </h1>
                    <div className=' text-white text-sm font-semibold  flex flex-col gap-1'>


                      <Link href='' className="group flex items-center justify-start    text-sm font-semibold  hover:underline">
                        HTML <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                      </Link>
                      <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                        CSS  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                      </Link>
                      <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                        Javascript  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                      </Link>
                      <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                        Typescript  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                      </Link>
                    </div>
                  </div>
                  <div className='flex gap-10 p-10 justify-center items-center'>
                    <Link href='/problems' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40'>

                        <FaCode className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600 group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>coding Questions</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>JS, Ts, Node.js, React.js, Next.js</p>
                      </div>
                    </Link>
                    <Link href='' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40'>

                        <GiGearStickPattern className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600 group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>System Design Questions</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>Design Pattern </p>
                      </div>
                    </Link>
                    <Link href='' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40 '>

                        <GiConqueror className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600  group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>Quiz Questions</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>essential for interview</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='border-t border-gray-400/10 flex justify-end flex-col  items-end p-5'>
                  <Link href='/Dashboard' className='flex justify-center items-center gap-2 '> Coding Challenge
                    <IoArrowRedoCircleOutline /></Link>
                  <span className='text-gray-400/20 cursor-not-allowed'> Coming Soon</span>
                </div>
              </div>
            }
          />
        </div>
        <div
          className=" inline-block"
          onMouseEnter={handleMouseEnter('Solutions')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cursor-pointer text-sm font-semibold flex justify-center items-center gap-2  hover:underline">
            <RiGuideFill />

            Guide
          </div>
          <Drawer
            isVisible={hoveredItem === 'Solutions' && drawerVisible}
            content={
              <div ref={drawerRef} className='w-auto relative   flex flex-col '>
                <div className='flex gap-10'>
                  {/* <div className='flex flex-col bg-zinc-700 h-full p-10 gap-5'>
                  <h1 className=' '>Tutorial </h1>
                <div className=' text-white text-sm font-semibold  flex flex-col gap-1'>


                  <Link href='/HTML/HTML' className="group flex items-center justify-start    text-sm font-semibold  hover:underline">
                    HTML <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                  </Link>
                  <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                    CSS  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                  </Link>
                  <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                    Javascript  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                  </Link>
                  <Link href='#' className="group flex items-center justify-start    text-sm font-semibold  hover:underline cursor-not-allowed">
                    Typescript  <GoChevronRight className=' group-hover:opacity-100 text-xl  opacity-0' />
                  </Link>
                </div>
                </div> */}
                  <div className='flex gap-10 p-10 justify-between w-full items-center'>
                    <Link href='' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40'>

                        <FaCode className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600 group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>Interview Guide</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>JS, Ts, Node.js, React.js, Next.js</p>
                      </div>
                    </Link>
                    <Link href='' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40'>

                        <GiGearStickPattern className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600 group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>System Design Guide</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>Design Pattern </p>
                      </div>
                    </Link>
                    <Link href='' className='flex flex-col gap-5 group'>
                      <div className='bg-zinc-700 border border-gray-500 rounded-full w-fit p-3 group group-hover:border-green-500/40 '>

                        <GiConqueror className='bg-zinc-500 border border-gray-300 rounded-md p-1 text-2xl  group-hover:border-green-600  group-hover:bg-green-500/30' />
                      </div>
                      <div>
                        <h1>Behavioral Interview Guide</h1>
                        <p className='text-sm font-semibold text-gray-400/90'>Essential Strategies to prepare and ace the Behavioral Interview</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='border-t border-gray-400/10 flex justify-end flex-col  items-end p-5'>
                  <Link href='' className='flex justify-center items-center gap-2 cursor-not-allowed'> Coding Challenge
                    <IoArrowRedoCircleOutline /></Link>
                  <span className='text-gray-400/20 cursor-not-allowed'> Coming Soon</span>
                </div>
              </div>
            }
          />
        </div>
        {/* <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter('product')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cursor-pointer hover:underline">
          Product
        </div>
        <Drawer
          isVisible={hoveredItem === 'product' && drawerVisible}
          content={
            <div ref={drawerRef}>
              <p>Product one</p>
              <p>Product two</p>
            </div>
          }
        />
      </div> */}
        <Link href="/Dashboard" className='text-sm font-semibold flex justify-center items-center gap-2' > <VscGithubProject />
          Projects</Link>
          <Link href="/Projects/Html" className='text-sm font-semibold flex justify-center items-center gap-2' > <RiArticleFill />
          Article</Link>
        <GlobalSearch/>
      </div>
      <div className='flex justify-center text-sm font-semibold items-center gap-2'>
        <div >
          <Link href="" className='flex justify-center items-center gap-2'><IoLogIn />
            Sign in/up</Link>
        </div>
      </div>


    </main>
  );
};

export default Navbar;
