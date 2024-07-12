"use client";
import { useEffect, useState } from 'react';
import Templates from '@/app/(data)/Templates';
import React from 'react';
import Image from 'next/image';
import InputSection from './_components/InputSection';
import OutputSection from './_components/OutputSection';

interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface PROPS {
  params: {
    slug: string;
  };
}

const ContentGeneration: React.FC<PROPS> = ({ params }: PROPS) => {
  const slug = params.slug;
  const [currentTemplate, setCurrentTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [userInput, setUserInput] = useState<any>();

  useEffect(() => {
    console.log('Templates:', Templates);
    // console.log('Slug:', slug);

    const current = Templates.find((item) => {
      // console.log('Comparing:', item.slug.toLowerCase(), slug.toLowerCase());
      return item.slug.toLowerCase() === slug.toLowerCase();
    });

    // console.log('Current Template:', current);
    setCurrentTemplate(current);
  }, [slug]);

  return (
    <div>
      {currentTemplate ? (
       <div className='grid grid-cols-1 md:grid-cols-3 bg-slate-100 h-screen  '>
        <InputSection currentTemplate={currentTemplate} userInput={(data:any)=>setUserInput(data)} />
        <OutputSection/>

       </div>
      ) : (
        <p>Template not found </p>
      )}
    </div>
  );
};

export default ContentGeneration;
