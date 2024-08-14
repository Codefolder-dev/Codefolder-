import React from 'react'
import Google from "../images/cpp.png"
import Meta from "../images/elephant.png"
import Amazon from "../images/html.jpg"
import Microsfoft from "../images/js.png"
import Nvidia from "../images/node-js.png"
import Python from "../images/python.png"
import Vuejs from "../images/vuejs.png"
import Typescript from "../images/typescript.png"
import Swift from "../images/swift.png"
import SQl from "../images/sql.png"
import picons from "../images/sciene.png"
import Image from 'next/image'
type Props = {}

const Bigtech = (props: Props) => {
  return (
      <div className='flex justify-between px-5  gap-10'>

          <Image src={Google} alt="codefolder Google Icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Meta} alt="codefolder Meta icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Amazon} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Nvidia} alt="codefolder Nvidia icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Microsfoft} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Python} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Typescript} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Swift} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={Vuejs} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={SQl} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
          <Image src={picons} alt="codefolder Amazon icon" width={60} className=" bg-blue-400/20 backdrop-blur-xl p-2 rounded-xl"/>
    </div>
  )
}

export default Bigtech
