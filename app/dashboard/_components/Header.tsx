import { Search } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <div className='flex border justify-between h-16  items-center md:px-6'>
      <span className='flex px-3 py-2 border-2  gap-2 gray-200 w-[30%] rounded-md '>
      <Search/>
      <input className='outline-none  ' placeholder='search...'/>
      </span>
      <span>
        <p  className='bg-purple-600 rounded-md text-md md:px-3 text-white font-semibold md:py-2 py-1 px-2'>
          Get the membership for &#8377; 999🔥
        </p>
      </span>

    </div>
  )
}

export default Header;
