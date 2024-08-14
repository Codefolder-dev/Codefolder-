import React from 'react'
import Hero from '@/components/hero/hero'
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';

import Newslatter from '@/components/assets/Newslatter/Newslatter';
import SectionQ from "@/components/Section/SectionQ"
import Prep from '@/components/Section/prep';
type Props = {}

const Page = (props: Props) => {
  return (
    <div className='bg-slate-950'>
      <Hero />
      <SectionQ />
    <Prep/>
      {/* <TextScroll /> */}

      <Newslatter/>
      <Footer/>
    </div>
  )
}

export default Page
