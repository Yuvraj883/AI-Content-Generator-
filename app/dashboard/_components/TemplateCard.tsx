import Image from 'next/image';
import React from 'react';
import { TEMPLATE } from './TemplateSection';
import Link from 'next/link';

const TemplateCard = (template: TEMPLATE) => {
  return (
    <Link href={`dashboard/content/${template?.slug}`}>
      <div className='flex flex-row  items-start justify-between  border border-gray-200 rounded-lg cursor-pointer bg-white hover:border-gray-300 transition-colors duration-200 ease-in-out h-[150px]   overflow-hidden'>
        {/* Top Half - Image Section */}
        <div className='w-full h-full'>
          <Image 
            src={`https://picsum.photos/650/350?random=${template.name}`} 
            height={150} 
            width={350} 
            alt="icon" 
            className='object-cover w-full h-full' 
          />
        </div>

        {/* Bottom Half - Title and Description Section */}
        <div className='flex flex-col items-start w-full p-3'>
          <h3 className='font-semibold text-gray-800 text-start text-[12px]'>{template.name}</h3>
          <p className='text-gray-600 line-clamp-3 text-start mt-2 text-[10px]'>{template.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
