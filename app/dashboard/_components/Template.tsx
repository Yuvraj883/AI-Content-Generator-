import { Search } from 'lucide-react';
import React from 'react';
import Templates from '@/app/(data)/Templates';

function Template() {
  return (
    <div>
      <section className='min-w-full flex flex-col items-center bg-gradient-to-br from-blue-500 via-pink-600 to-purple-500 p-8'>
        <h1 className='text-2xl text-white font-bold mb-1'>Browse All Templates</h1>
        <h3 className='text-md text-white font-semibold'>What would you like to create today?</h3>
        <span className='flex items-center justify-center bg-white rounded-sm gap-1 py-1 px-2 mt-2'>
          <Search/>
          <input placeholder='search...' className='outline-none px-2 py-1'/>
        </span>
      </section>
      <section>
        {
          Templates.map((template, index)=>(
            <div key={index}>{template.name}</div>
          ))
        }
      </section>

    </div>
  );
}

export default Template;
