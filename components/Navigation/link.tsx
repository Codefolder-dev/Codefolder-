import  Link  from 'next/link'
import React from 'react'

type Props = {
    title: string
    url:string
}

const Links = (props: Props) => {
  return (

      <Link href={props.url} className='text-gray-400 hover:text-blue-600 font-semibold'>{props.title}</Link>
  )
}

export default Links
