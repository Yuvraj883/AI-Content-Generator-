import { Search } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <div className='flex border justify-between h-16  items-center px-2 md:px-6'>
      <span className='flex px-3 py-2 border-2 gap-1  md:gap-2 gray-200 md:w-[30%] w-[40%] rounded-md '>
      <Search/>
      <input className='outline-none  ' placeholder='search...'/>
      </span>
      <span className='px-0 w-[50%] md:w-[30%]'>
        <p  className='bg-purple-600  rounded-md text-md md:px-3 text-white font-semibold md:py-2 py-1 px-1'>
        🔥Get the membership for &#8377; 999/month
        </p>
      </span>

    </div>
  )
}

export default Header;
