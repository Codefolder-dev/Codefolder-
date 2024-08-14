import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { SiTorbrowser } from "react-icons/si";

type Props = {}

const FooterNewslatter = (props: Props) => {
  return (
      <div className=' flex sm:flex-row flex-col  sm:items-center border-t border-b border-gray-400/20 p-3 sm:py-10 justify-between gap-5'>

          <div>
              <h1 className='text-xl text-white/70 font-semibold'>Newsletter</h1>
          </div>
          <div className='flex sm:flex-row flex-col gap-5 sm:gap-10'>
              <button className='border text-gray-400/30 font-semibold  flex justify-center items-center border-gray-400/20 rounded-xl px-10 py-2'>
            <h1 className='flex gap-10 items-center'><span className='flex gap-2 items-center'><MdOutlineMailOutline />Email Address </span><SiTorbrowser /></h1>
              </button>
              <button className='font-bold bg-indigo-500 rounded-md px-4 py-2   flex justify-center items-center'>
                  Subscribe for updates
              </button>
          </div>
      </div>
  )
}

export default FooterNewslatter
