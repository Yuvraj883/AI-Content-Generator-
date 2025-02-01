"use client";
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateSection({ onSearchInput, searchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (searchInput) {
      const filteredData = Templates.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredData);
    } else {
      setTemplateList(Templates);
    }
  }, [searchInput]);

  return (
    <div>
      <section className='w-full flex flex-col md:ml-4 items-center justify-center bg-gradient-to-br from-[#254f1a] via-[#254f1a] to-[#254f1a] p-10 md:mt-0 rounded-b-3xl shadow-lg h-[50vh] '>
        {/* <h1 className='text-5xl text-[#d2e823] font-extrabold mb-2 drop-shadow-lg'>Browse All Templates</h1> */}
        <h1 className='text-2xl text-[#d2e823] font-bold mb-4 drop-shadow-md'>What would you like to create today?</h1>
        <div className='flex items-center bg-white rounded-full shadow-md gap-2 py-2 px-4 mt-2 w-[100%] transition-all duration-300 hover:shadow-lg'>
          <Search className='text-[#254f1a] w-5 h-5' />
          <input
            placeholder='Browse All Templates'
            className='outline-none px-3 py-2 w-full text-[#254f1a] rounded-full'
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </section>
      <section className='grid md:grid-cols-3 justify-center md:ml-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6'>
        {templateList.map((template: TEMPLATE, index: number) => (
          <div key={index} className='transform transition duration-300 hover:scale-105'>
            <TemplateCard {...template} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default TemplateSection;
