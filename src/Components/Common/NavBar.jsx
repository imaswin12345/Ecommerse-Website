import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from '../Common/SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center: Links + Search */}
        <div className="flex items-center hidden md:flex space-x-6">
          <Link to="#" className="text-lg text-gray-700 hover:text-rabbit font-medium uppercase">
            MEN
          </Link>
          <Link to="#" className="text-lg text-gray-700 hover:text-rabbit font-medium uppercase">
            WOMEN
          </Link>
          <Link to="#" className="text-lg text-gray-700 hover:text-rabbit font-medium uppercase">
            TOP WEAR
          </Link>
          <Link to="#" className="text-lg text-gray-700 hover:text-rabbit font-medium uppercase">
            BOTTOM WEAR
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-gray-700 hover:text-black">
            <CiUser className="h-6 w-6" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative text-gray-700 hover:text-black">
            <MdOutlineShoppingBag className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-rabbit text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              4
            </span>
          </button>

          {/* Search bar */}
          <div className="hidden md:block ml-4">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleNavDrawer} className="text-gray-700 hover:text-black md:hidden">
            <HiBars3BottomRight className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile navigation overlay */}
      {navDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleNavDrawer}
        />
      )}

      {/* mobile navigation drawer */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>        <div className='flex justify-end p-4 border-b'>
          <button onClick={toggleNavDrawer}>
            <IoMdClose className='h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors' /> 
          </button>  
        </div>    

        <div className='p-4 space-y-4'>
          {/* <h2 className='text-xl font-semibold'>Menu</h2> */}
          <nav className='space-y-4'>
            <Link 
              to="#" 
              onClick={toggleNavDrawer} 
              className='block py-2 text-gray-600 hover:text-black font-medium'
            >
              Men
            </Link>
            <Link 
              to="#" 
              onClick={toggleNavDrawer} 
              className='block py-2 text-gray-600 hover:text-black font-medium'
            >
              Women
            </Link>
            <Link 
              to="#" 
              onClick={toggleNavDrawer} 
              className='block py-2 text-gray-600 hover:text-black font-medium'   
            >
              Top Wear
            </Link>
            <Link 
              to="#" 
              onClick={toggleNavDrawer} 
              className='block py-2 text-gray-600 hover:text-black font-medium'
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar;