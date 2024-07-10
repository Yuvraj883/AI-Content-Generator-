import { History, HomeIcon, Mail, Settings } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Sidebar() {

const Menu = [
  {
    text:'Home',
    icon: HomeIcon,
    link: '/dashboard',

  },
  {
    text: 'History',
    icon: History,
    link:'/dashboard/history',
  },
  {
    text: 'Billing',
    icon: Mail,
    link:'/dashboard/history',
  },
  {
    text: 'Settings',
    icon: Settings,
    link:'/dashboard/settings',
  },

]

  return (
      <div className='md:flex md:flex-col hidden md:w-[20%] '>
        <section className='flex flex-col justify-center items-start border p-2'>
          <Image
          className='h-12 w-auto'
          src='./images/logo.svg' height={100} width={100} alt="Logo"/>
        </section>

        <section className='p-2' >
            {
              Menu.map((item, index)=>(
               <span className='flex items-center justify-start px-2 py-6 gap-2 font-semibold text-lg cursor-pointer' key={index}>
                 <item.icon/>
                 <p>{item.text}</p>
               </span>
              ))
            }
        </section>

        </div>
  )
}

export default Sidebar;
