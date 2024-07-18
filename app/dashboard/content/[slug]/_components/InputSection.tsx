"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplateSection'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function InputSection({currentTemplate, userInput, loading}:any) {
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e:any)=>{
    e.preventDefault();
    userInput(formData);
  }
  const handleOnChange = (e:any)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});

  }

  return (
    <div className='col-span-1 flex flex-col mt-8 '>
      <Link href={'/dashboard'}>
      <button className='bg-purple-600 px-4 py-2 w-32 ml-5 mb-2 rounded-sm text-white font-semibold flex items-center gap-2 '><ArrowLeft/> Go Back</button>
      </Link>
      <div className='bg-white flex flex-col px-4 py-6 justify-center w-[90%] rounded-md shadow-md mx-auto'>
        <Image src={currentTemplate?.icon} height={60} width={60} alt="icon"/>
        <h3 className='font-bold text-xl mt-2'>{currentTemplate?.name}</h3>
        <p>{currentTemplate?.desc}</p>
        <form className='mt-8' onSubmit={onSubmit}>

        {
          currentTemplate?.form?.map((item:any, index:number)=>(
            <section key={index} className='mb-6'>
              <label className='font-semibold'>{item.label}</label>
              {
                item.field==='input' && <Input name={item.name} required={item?.required} onChange={handleOnChange}/>
              }
              {
                item.field==='textarea' && <Textarea  name={item.name} required={item?.required} onChange={handleOnChange}/>
              }
            </section>
          ))
        }
        <button type='submit'
        disabled={loading}
        className='w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md flex items-center justify-center'>
          {loading?(<>Generating Content <Loader2Icon className='animate-spin'/></>):<>Generate Content</>}</button>

        </form>

      </div>
    </div>
  )
}

export default InputSection
