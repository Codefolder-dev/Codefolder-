import React from 'react'
import Google from "../images/google2.png"
import Meta from "../images/meta.png"
import Amazon from "../images/Amazon.png"
import Microsfoft from "../images/Microsoft.png"
import Nvidia from "../images/nvidia.png"
import Image from 'next/image'
type Props = {}

const Bigtech = (props: Props) => {
  return (
      <div className='flex justify-between gap-10'>

          <Image src={Google} alt="codefolder Google Icon"/>
          <Image src={Meta} alt="codefolder Meta icon"/>
          <Image src={Amazon} alt="codefolder Amazon icon"/>
          <Image src={Nvidia} alt="codefolder Nvidia icon"/>
          <Image src={Microsfoft} alt="codefolder Amazon icon"/>
    </div>
  )
}

export default Bigtech
