'use client'
import { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import React from 'react'
import InputSection from './_components/InputSection'
import OutputSection from './_components/OutputSection'
import { chatSession } from '@/utils/AiModel'
import ReactGA from 'react-ga4'

interface TEMPLATE {
  name: string
  desc: string
  category: string
  icon: string
  aiPrompt: string
  slug: string
  form?: FORM[]
}

interface FORM {
  label: string
  field: string
  name: string
  required?: boolean
}

interface PROPS {
  params: {
    slug: string
  }
}

const ContentGeneration: React.FC<PROPS> = ({ params }) => {
  const slug = params.slug
  const [currentTemplate, setCurrentTemplate] = useState<TEMPLATE | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string | undefined>()

  useEffect(() => {
    const current = Templates.find(
      (item) => item.slug.toLowerCase() === slug.toLowerCase()
    )
    setCurrentTemplate(current)
  }, [slug])

  const generateAIContent = async (formData: any) => {
    setLoading(true)
    const selectedPrompt = currentTemplate?.aiPrompt
    const finalAIPrompt = JSON.stringify(formData) + ',' + selectedPrompt

    ReactGA.event({
      category: 'Content Generation',
      action: 'Generate Content Button Click',
      label: currentTemplate?.name || 'Unknown Template',
    })

    try {
      const result = await chatSession.sendMessage(finalAIPrompt)
      setAiOutput(result?.response?.text())

      ReactGA.event({
        category: 'Content Generation',
        action: 'Content Generated Successfully',
        label: currentTemplate?.name || 'Unknown Template',
      })
    } catch (error) {
      console.error('Error generating content:', error)
      ReactGA.event({
        category: 'Content Generation',
        action: 'Content Generation Failed',
        label: currentTemplate?.name || 'Unknown Template',
        value: 1, // Indicate a failure
      })
      // Optionally set an error state for the user
    }

    setLoading(false)
  }

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-[#f3f3f1] via-[#d2e823]/10 to-[#254f1a]/10 py-8 px-2 flex flex-col items-center justify-center'>
      {currentTemplate ? (
        <div className='w-full max-w-6xl mx-auto'>
          {/* Header Card */}
          <div className='flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-8 py-6 mb-8 border border-[#e5e7eb] min-h-[90px] max-h-[110px]'>
            <div className='flex items-center justify-center bg-gradient-to-br from-[#d2e823]/30 to-[#254f1a]/10 rounded-xl p-3 shadow'>
              <img
                src={currentTemplate.icon}
                alt='icon'
                className='w-14 h-14 object-contain'
              />
            </div>
            <div className='flex flex-col justify-center min-w-0'>
              <h2 className='font-extrabold text-2xl text-[#254f1a] mb-1 truncate'>
                {currentTemplate.name}
              </h2>
              <p className='text-gray-700 text-base line-clamp-2'>
                {currentTemplate.desc}
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Input Section */}
            <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-0 border border-[#e5e7eb] flex flex-col h-[520px]'>
              <div className='flex-1 min-h-0 overflow-y-auto'>
                <InputSection
                  currentTemplate={currentTemplate}
                  userInput={(data: any) => generateAIContent(data)}
                  loading={loading}
                />
              </div>
            </div>
            {/* Output Section */}
            <div className='bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-0 border border-[#e5e7eb] md:col-span-2 flex flex-col h-[520px]'>
              <div className='flex-1 min-h-0 overflow-y-auto'>
                <OutputSection aiOutput={aiOutput} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-600 text-lg'>Template not found</p>
      )}
    </div>
  )
}

export default ContentGeneration
