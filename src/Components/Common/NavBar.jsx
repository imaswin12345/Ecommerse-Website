import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from '../Common/SearchBar';

const NavBar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Left: Logo */}
      <div>
        <Link to="/" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      {/* Center: Links + Search */}
      <div className="flex items-center space-x-6">
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
        <Link to="/cart" className="relative text-gray-700 hover:text-black">
          <MdOutlineShoppingBag className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-rabbit text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            4
          </span>
        </Link>

                {/* Search bar */}
        <div className="hidden md:block ml-4">
          <SearchBar />
        </div>

        {/* Mobile Menu Button */}
        <button className="text-gray-700 hover:text-black md:hidden">
          <HiBars3BottomRight className="h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar;
