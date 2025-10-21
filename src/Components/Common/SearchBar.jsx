import React from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiMagnifyingGlass } from 'react-icons/hi2';


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSaearchToggle = () => {
        setIsOpen(!isOpen);
    }

    
  return (

    <div>
        {isOpen ? (
            <form className= "relative flex items-center justify-center w-full">
                <div className='relative w-1/2'>
                <input  className='bg-gray-100  px-4 py-4' type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

               </div>
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