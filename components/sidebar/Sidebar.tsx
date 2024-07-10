"use client"
import { History, HomeIcon, Mail, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

function Sidebar() {
const pathName = usePathname();

const Menu = [
  {
    text:'Home',
    icon: HomeIcon,
    link: '/',

  },
  {
    text: 'History',
    icon: History,
    link:'/history',
  },
  {
    text: 'Billing',
    icon: Mail,
    link:'/billing',
  },
  {
    text: 'Settings',
    icon: Settings,
    link:'/settings',
  },

]

  return (
      <div className='md:flex md:flex-col hidden md:w-[15%] fixed shadow-md h-screen'>
        <section className='flex flex-col justify-center items-start shadow-md p-2'>
          <Image
          className='h-12 w-auto'
          src='./images/logo.svg' height={100} width={100} alt="Logo"/>
        </section>

        <section className='p-2' >
            {
              Menu.map((item, index)=>(
               <Link href={item.link} className={`flex items-center  m-2 justify-start px-2 py-6 gap-2 font-semibold text-lg cursor-pointer hover:bg-blue-500 hover:text-white
                rounded-md ${pathName===item.link && 'bg-blue-500 text-white'}`}
                key={index}>
                 <item.icon/>
                 <p>{item.text}</p>
               </Link>
              ))
            }
        </section>

        </div>
  )
}

export default Sidebar;
