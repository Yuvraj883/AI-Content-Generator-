"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function InputSection({ currentTemplate, userInput, loading }: any) {
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    userInput(formData);
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="col-span-1 flex flex-col mt-8 h-full">
      {/* Back Button */}
      <Link href={'/dashboard'}>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2 w-36 ml-5 mb-4 rounded-lg text-white font-semibold flex items-center gap-2 shadow-md hover:opacity-90 transition-all">
          <ArrowLeft size={18} /> Go Back
        </button>
      </Link>

      {/* Input Form Card */}
      <div className="bg-white flex flex-col px-6 py-8 justify-center w-[90%] rounded-xl shadow-lg mx-auto border border-gray-200">
        {/* Template Icon */}
        <div className="flex items-center gap-3">
          <Image src={currentTemplate?.icon} height={60} width={60} alt="icon" />
          <div>
            <h3 className="font-bold text-2xl text-gray-800">{currentTemplate?.name}</h3>
            <p className="text-gray-600 text-sm">{currentTemplate?.desc}</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          {currentTemplate?.form?.map((item: any, index: number) => (
            <section key={index} className="mb-4">
              <label className="block font-semibold text-gray-700 mb-1">{item.label}</label>
              {item.field === 'input' && (
                <Input
                  name={item.name}
                  required={item?.required}
                  onChange={handleOnChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              )}
              {item.field === 'textarea' && (
                <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={handleOnChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              )}
            </section>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg flex items-center justify-center shadow-md transition-all disabled:opacity-70"
          >
            {loading ? (
              <>
                Generating Content <Loader2Icon className="animate-spin ml-2" />
              </>
            ) : (
              <>Generate Content</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputSection;
 