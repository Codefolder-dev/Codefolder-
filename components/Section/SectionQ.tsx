import React from 'react'
import TabSwitchCard from '../cards/tabswitchcards'

type Props = {}

const SectionQ = (props: Props) => {
  return (
      <div className='flex items-center p-10  h-auto overflow-x-hidden  bg-slate-950 justify-center'>
          <div className='flex sm:flex-row gap-10 flex-col   items-center justify-center'>
              <div className='flex ml-7 flex-col gap-2'>
                   <h4 className='text-gray-400 sm:text-xl text-lg text-sembold'>
                      Problem Solving                  </h4>
                  <h1 className='font-bold text-2xl sm:text-4xl sm:w-2/3'>Practice 500+ of the most important questions</h1>
                  <p className='w-auto sm:w-96 text-wrap'>With the largest, curated question bank supplemented with official solutions from ex-interviewers, you get all-rounded coverage for your preparation.</p>
              </div>
              <TabSwitchCard/>
          </div>
     </div>
  )
}

export default SectionQ
