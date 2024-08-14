import React from 'react'
import Fevicon from "../../../public/fevicon2.png"
import Image from 'next/image'
type Props = {}

const icon = (props: Props) => {
  return (
      <div className='flex  justify-center items-center gap-2'>

          <Image src={Fevicon} alt='codefolder icon' width={44}/><h1 className='sm:text-2xl font-semibold'>CodeFolder</h1>
    </div>
  )
}

export default icon
