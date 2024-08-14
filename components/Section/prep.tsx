import React from 'react'

type Props = {}

const Prep = (props: Props) => {
  return (
      <div className='bg-slate-950 flex h-auto   sm:gap-20 sm:p-10 flex-col text-white'>


          <div className='flex prepBg rounded-t-[5vw]  relative  py-20 flex-col p-5 justify-center items-center gap-5'>
               <h1 className='sm:text-4xl text-2xl font-semibold'>Prepare everything here</h1>
              <p className='sm:text-xl sm:w-1/2 text-center'>With over 500+ practice questions curated by senior Software engineers, you get all-rounded coverage for your preparation — Front-end, Back-end, APIs, Database, System Design, DSA, Testing, App Development, Data science....</p>

          </div>
              <div className='flex relative flex-col justify-center items-center'>

                  {/* <h2 className='text-xl  sm:text-3xl  font-semibold'>Front-end Development</h2> */}


          </div>
    </div>
  )
}

export default Prep
