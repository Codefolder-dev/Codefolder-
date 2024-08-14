import React from 'react'
import SocialMedia from '../icon/SocialMedia'

type Props = {}

const Newslatter = (props: Props) => {
    return (
        <div className='bg-slate-950 flex items-center justify-between flex-col h-auto  sm:py-32 p-5'>
            <div className='border flex border-indigo-500 lg:py-20 flex-col gap-10 h-full p-5 justify-center items-center rounded-md border-gray-400/20'>

            <div className='flex gap-5 sm:flex-row flex-col   font-bold font-sans items-center justify-center'>
                <h1 className='sm:text-4xl text-2xl'>
                    Connect with us
                    </h1><span className='flex items-center justify-center text-3xl text-indigo-500 pt-3'>

                <SocialMedia />
                </span>
            </div>
            <div className='flex text-center gap-5 justify-center items-center flex-col'>
                <h2 className='sm:text-5xl font-semibold text-2xl '>Kickstart your dev journey here!</h2>
                <p className='sm:w-1/2 text-xl'>we&apos;d love to have you join us. Let&apos;s work together to make a positive impact on the tech world!</p>
                <button className='bg-indigo-500 rounded-md px-3 py-2 text-xl font-bold'>
                    Quick start
                </button>
            </div>
            </div>
        </div>
    )
}

export default Newslatter
