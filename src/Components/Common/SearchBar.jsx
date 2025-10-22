import React from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoMdClose } from "react-icons/io";



const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSaearchToggle = () => {
        setIsOpen(!isOpen);
    }
    

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log("Searching for:", searchTerm);
        setIsOpen(false);
        setSearchTerm('');
    }

    
  return (

    <div className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
        {isOpen ? (

            <form onSubmit={handleSearch} className= "relative flex items-center justify-center w-full">
                <div className='relative w-1/2'>
                <input  className='bg-gray-100  px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-400'
                 type="text" 
                 placeholder="Search..."
                  value={searchTerm} 
                  onChange={(e)=> setSearchTerm(e.target.value)}
                  
                  />

                  {/* search Icon */}
                 <button type="submit" className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black'>
                    <CiSearch className='h-6 w-6 ' />
                 </button>

               </div>

               {/* close Button */}
               <button>
                <IoMdClose/>
               </button>
                    </form>
        ) : (
            <button>
                <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-black" onClick={handleSaearchToggle} />     
            </button>
        )}
    </div>
  )
}

export default SearchBar