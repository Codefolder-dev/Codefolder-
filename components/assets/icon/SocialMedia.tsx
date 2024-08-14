import React from 'react'
import { FaDiscord } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <div className='flex  gap-3 '>
            <Link href='https://discord.com/invite/Brn5Qg5h' target='blank' className='hover:text-blue-600'>             <FaDiscord />
            </Link>
            <Link href='https://chat.whatsapp.com/IcqkQVIigwrBMvTx1SlMDq' target='blank' className='hover:text-green-600'>             <IoLogoWhatsapp />
            </Link>
            <Link href='' target='blank' className='hover:text-pink-600'>            <AiFillInstagram />
            </Link>
            <Link href='https://github.com/Codefolder-dev' target='blank' className='hover:text-white'> <FaGithubAlt />
            </Link>
            <Link href='https://www.linkedin.com/company/codefolder/?viewAsMember=true' target='blank' className='hover:text-blue-600'>
                <FaLinkedinIn />
            </Link>


        </div>
    )
}

export default SocialMedia
