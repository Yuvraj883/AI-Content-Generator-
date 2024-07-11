import { Search } from 'lucide-react';
import React from 'react';
import Templates from '@/app/(data)/Templates';

import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}
export interface FORM{
  label: string,
  field:string,
  name:string,
  required?:boolean
}

function TemplateSection() {
  return (
    <div>
      <section className='min-w-full flex flex-col items-center bg-gradient-to-br from-purple-500 via-pink-600 to-purple-500 p-8'>
        <h1 className='text-2xl text-white font-bold mb-1'>Browse All Templates</h1>
        <h3 className='text-md text-white font-semibold'>What would you like to create today?</h3>
        <span className='flex items-center  bg-white rounded-sm gap-1 py-1 px-2 mt-2 w-[50%]'>
          <Search className='text-purple-600'/>
          <input placeholder='search...' className='outline-none px-2 py-1'/>
        </span>
      </section>
      <section className='grid md:grid-cols-4 grid-cols-2 gap-4 p-4 '>
        {
          Templates.map((template:TEMPLATE, index:number)=>(
            <div key={index}><TemplateCard {...template}/> </div>
          ))
        }
      </section>

    </div>
  );
}

export default TemplateSection;
