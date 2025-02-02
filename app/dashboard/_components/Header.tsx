'use client'
import { Search, Menu } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // console.log(toggleSidebar);
  return (
    <div className='flex border justify-between h-16 items-center px-2 md:px-6 md:hidden'>
      {/* Mobile Menu Button */}
      <Link href='/dashboard'>
        <section className='flex md:hidden flex-col h-16 justify-center items-center shadow-md p-2'>
          <Image
            className='h-12 w-auto cursor-pointer'
            src='/images/logo.png'
            height={100}
            width={100}
            alt='Logo'
          />
        </section>
      </Link>
      <button
        onClick={toggleSidebar}
        className='md:hidden p-2 text-gray-700'
        aria-label='Toggle Menu'
      >
        <Menu size={24} />
      </button>

      {/* Search Bar */}
      {/* <span className="flex px-3 py-2 border-2 gap-1 md:gap-2 gray-200 md:w-[30%] w-[40%] rounded-md">
        <Search />
        <input className="outline-none" placeholder="Search..." />
      </span> */}

      {/* Membership Info */}
      {/* <span className="px-0 w-[50%] md:w-[30%]">
        <p className="bg-purple-600 rounded-md text-md md:px-3 text-white font-semibold md:py-2 py-1 px-1">
          🔥Get the membership for &#8377; 999/month
        </p>
      </span> */}
    </div>
  )
}

export default Header
