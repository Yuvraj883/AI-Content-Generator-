import Image from 'next/image';
import React from 'react';
import { TEMPLATE } from './TemplateSection';
import Link from 'next/link';

const TemplateCard = (template: TEMPLATE) => {
  return (
    <Link href={`dashboard/content/${template?.slug}`}>
      <div className="flex flex-row items-center border border-gray-200 rounded-lg cursor-pointer bg-white hover:border-gray-300 transition-colors duration-200 ease-in-out h-[150px] overflow-hidden">
        {/* Image Section */}
        <div className="w-32 h-32 flex-shrink-0 p-2">
          <Image
            src={template?.icon}
            height={100}
            width={100}
            alt="icon"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Title and Description Section */}
        <div className="flex flex-col justify-center w-full p-3">
          <h3 className="font-semibold text-gray-800 text-start text-sm">{template.name}</h3>
          <p className="text-gray-600 line-clamp-3 text-start mt-2 text-xs">{template.desc}</p>
          <Link href={`dashboard/content/${template?.slug}`}>
          <button className='bg-[#254f1a] px-4 py-2 rounded-md text-sm text-white hover:text-[#d2e823] mt-2 '>Try Now</button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
