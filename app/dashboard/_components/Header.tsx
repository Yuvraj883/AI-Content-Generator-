import { Search } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <div className='flex border justify-between h-16  items-center px-6'>
      <span className='flex px-3 py-2 border-2  gap-2 gray-200 w-[30%] rounded-md '>
      <Search/>
      <input className='outline-none min-w-[90%] ' placeholder='search...'/>
      </span>
      <span>
        <p  className='bg-blue-500 rounded-md text-md px-3 font-semibold py-2'>
          Get the membership for &#8377; 999🔥
        </p>
      </span>

    </div>
  )
}

export default Header;
