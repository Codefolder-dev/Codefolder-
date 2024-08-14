import React from 'react'
import Image from 'next/image'
import CodeFolderIcon from '../assets/icon/icon'
import SocialMedia from '../assets/icon/SocialMedia'
import GroupLinks from '../Navigation/groupLinks'
import FooterNewslatter from '../assets/Newslatter/footerNewslatter'



type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-slate-950   p-5  flex h-auto flex-col sm:justify-around  lg:py-20    sm:px-24  gap-10'>
      <div className='flex sm:flex-row sm :items-center flex-col justify-between  gap-10'>

      <div className='flex sm:flex-col items-center sm:items-start sm:justify-start justify-between gap-5'>

          <CodeFolderIcon />
          <span className='text-2xl '>

        <SocialMedia />
          </span>
      </div>
      <div>
        <GroupLinks/>
    </div>
      </div>
      <div>
      <FooterNewslatter/>
      <h1 className='pt-5 text-gray-400/90 text-semibold'>© 2024 CodeFolder</h1>
      </div>
    </div>
  )
}

export default Footer
