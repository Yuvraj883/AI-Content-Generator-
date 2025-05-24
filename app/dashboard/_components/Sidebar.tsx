'use client'
import { Gift, HomeIcon, Info, Shield, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const pathName = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component only renders on client to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null // Avoid rendering on server

  const Menu = [
    { text: 'Home', icon: HomeIcon, link: '/dashboard' },
    { text: 'Offers', icon: Gift, link: '/dashboard/offers' },
    { text: 'About Us', icon: Info, link: '/dashboard/about' },
    { text: 'Privacy Policy', icon: Shield, link: '/dashboard/privacy-policy' },
    { text: 'Contact Us', icon: Phone, link: '/dashboard/contact' },
  ]

  return (
    <>
      {/* Backdrop for closing sidebar (Mobile) */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-gradient-to-br from-[#254f1a] via-[#3a7d2c] to-[#6b8e23] shadow-2xl border-r border-[#e0e0e0] rounded-r-3xl transition-transform duration-300
          ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 flex flex-col justify-between`}
      >
        {/* Sidebar Header */}
        <Link href='/dashboard'>
          <section className='flex flex-col items-start ml-5 py-8 border-b border-gray-200/30'>
            <Image
              className='w-[150px] h-auto cursor-pointer drop-shadow-lg'
              src='/images/logo.png'
              height={120}
              width={120}
              alt='Logo'
            />
          </section>
        </Link>

        {/* Sidebar Menu */}
        <section className='p-6 flex-1'>
          {Menu.map((item, index) => {
            const isActive = pathName === item.link
            return (
              <Link
                href={item.link}
                key={index}
                className={`flex items-center gap-4 my-4 font-semibold text-lg rounded-xl transition-all duration-300 relative px-5 py-3
                  group
                  ${
                    isActive
                      ? 'bg-white/90 text-[#254f1a] shadow-xl scale-[1.04]'
                      : 'text-white/90 hover:bg-white/10 hover:scale-[1.02]'
                  }`}
                onClick={closeSidebar}
                style={{
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {/* Active tab indicator */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-10 w-2 rounded-full transition-all duration-300
                  ${isActive ? 'bg-[#d2e823] shadow-lg' : 'bg-transparent'}`}
                ></span>
                <item.icon
                  className={`w-7 h-7 ${
                    isActive
                      ? 'text-[#254f1a]'
                      : 'text-white/90 group-hover:text-[#d2e823]'
                  }`}
                />
                <p
                  className={`text-base font-bold tracking-wide ${
                    isActive
                      ? 'text-[#254f1a]'
                      : 'text-white/90 group-hover:text-[#d2e823]'
                  }`}
                >
                  {item.text}
                </p>
              </Link>
            )
          })}
        </section>

        {/* Optional: User/Profile Section */}
        <section className='p-6 border-t border-gray-200/30 flex flex-col items-center'>
          <div className='w-14 h-14 rounded-full bg-[#d2e823]/30 flex items-center justify-center mb-2'>
            <Image
              src='/images/logo.png'
              alt='User'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
          <p className='text-[#254f1a] font-semibold text-sm'>Welcome!</p>
        </section>
      </div>
    </>
  )
}

export default Sidebar
