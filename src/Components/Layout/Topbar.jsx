import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Topbar = () => {
  return (
<div className="bg-[#ea2c2c] text-white">
    <div className='container mx-auto flex justify-between items-center py-2 px-8 md:px-0'>
        <div className='hidden md:flex items-center space-x-4'> 
            <a href="" className='hover:text-gray-300'>
                <FaMeta className='h-5 w-5' />
            </a>
                        <a href="" className='hover:text-gray-300'>
                <FaInstagram className='h-5 w-5' />
            </a>
                        <a href="" className='hover:text-gray-300'>
                <FaXTwitter className='h-5 w-5' />
            </a>
        </div>

        <div className='text-sm text-center flex-grow'>

            <span> We ship Worldwide - Fast and Realiable Shipping</span>

        </div>

        <div className='text-sm hidden md:flex items-center space-x-2'>
             
             <a href="tel +12345658" className='hover:text-gray-300'> +9845754156</a>

        </div>

    </div>

</div>  )
}

export default Topbar