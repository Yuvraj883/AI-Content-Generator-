import Image from 'next/image';
import React from 'react';
import { TEMPLATE } from './TemplateSection';
import Link from 'next/link';
// import Template from './TemplateSection';


const TemplateCard = (template:TEMPLATE) => {
  return (
    <Link href={`dashboard/content/${template?.slug}`}>
    <div className='flex flex-col items-start justified-center p-4 shadow-md h-60 rounded-md cursor-pointer'>
      <Image src={template.icon} height={80} width={80} alt="icon" />
      <h3 className='text-lg font-semibold'>{template.name}</h3>
      <p className='line-clamp-3 font-normal'>{template.desc}</p>
    </div>
    </Link>
  );
};

export default TemplateCard;
