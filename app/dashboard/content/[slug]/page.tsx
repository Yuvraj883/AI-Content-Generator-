"use client";
import { useEffect, useState } from "react";
import Templates from "@/app/(data)/Templates";
import React from "react";
import InputSection from "./_components/InputSection";
import OutputSection from "./_components/OutputSection";
import { chatSession } from "@/utils/AiModel";

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

const ContentGeneration: React.FC<PROPS> = ({ params }) => {
  const slug = params.slug;
  const [currentTemplate, setCurrentTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string | undefined>();

  useEffect(() => {
    const current = Templates.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
    setCurrentTemplate(current);
  }, [slug]);

  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = currentTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result?.response?.text());
    setLoading(false);
  };

  return (
    <div className="bg-slate-100 min-h-screen my-auto py-4 px-4">

      {currentTemplate ? (
        <div className="grid grid-cols-1 justify-center my-auto items-center md:grid-cols-3 gap-6  mx-auto">
          {/* Input Section */}
          <div className="bg-white shadow-md rounded-lg p-6 h-full">
            <InputSection
              currentTemplate={currentTemplate}
              userInput={(data: any) => generateAIContent(data)}
              loading={loading}
            />
          </div>

          {/* Output Section */}
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2 h-full">
            <OutputSection aiOutput={aiOutput} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Template not found</p>
      )}
    </div>
  );
};

export default ContentGeneration;
