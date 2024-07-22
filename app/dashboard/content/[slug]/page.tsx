"use client";
import { useEffect, useState } from 'react';
import Templates from '@/app/(data)/Templates';
import React from 'react';
import Image from 'next/image';
import InputSection from './_components/InputSection';
import OutputSection from './_components/OutputSection';
import { chatSession } from '@/utils/AiModel';

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
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>()

  useEffect(() => {
    console.log('Templates:', Templates);

    const current = Templates.find((item) => {
      return item.slug.toLowerCase() === slug.toLowerCase();
    });

    setCurrentTemplate(current);
  }, [slug]);

  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = currentTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result?.response?.text());
    setLoading(false);
  }

  return (
    <div>
      {currentTemplate ? (
        <div className='grid grid-cols-1 md:grid-cols-3 bg-slate-100 h-screen'>
          <InputSection
            currentTemplate={currentTemplate}
            userInput={(data: any) => generateAIContent(data)}
            loading={loading}
          />
          <OutputSection aiOutput={aiOutput} />
        </div>
      ) : (
        <p>Template not found</p>
      )}
    </div>
  );
};

// export async function generateStaticParams() {
//   return Templates.map(template => ({
//     slug: template.slug.toLowerCase()
//   }));
// }

export default ContentGeneration;
