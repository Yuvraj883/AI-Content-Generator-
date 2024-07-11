import { Search } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <div className='flex border px-2 py-4 text-lg'>
      <Search/>
      <input className='outline-none' placeholder='search...'/>
    </div>
  )
}

export default Header;
