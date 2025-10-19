import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";


const NavBar = () => {
  return (
  <>
  <nav className='container mx-auto flex items-center justify-between py-4 px-6 '>

    {/* logo left */}

    <div>
        <Link to="/" className='text-2xl font-medium '>
        Rabbit 
        </Link>
    </div>

    <div >
        <Link to="#" className='text-lg text-gray-700 hover:text-rabbit mx-4 font-medium uppercase'>

          MEN
        </Link>
                <Link to="#" className='text-lg text-gray-700 hover:text-rabbit mx-4 font-medium uppercase'>

          WOMEN
        </Link>
                <Link to="#" className='text-lg text-gray-700 hover:text-rabbit mx-4 font-medium uppercase'>

          TOP WEAR
        </Link>
                <Link to="#" className='text-lg text-gray-700 hover:text-rabbit mx-4 font-medium uppercase'>

          BOTTOM WEAR
        </Link>
    </div>
            {/* right Section */}
        <div className='flex items-center space-x-4'>
            <Link to="/profile" className='hover:text-black text-sm font-medium uppercase'>

            <CiShoppingCart className='h-6 w-6' />


            
            </Link>

        </div>
  </nav>
  </>
  )
}

export default NavBar