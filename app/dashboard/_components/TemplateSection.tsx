'use client'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'
import ReactGA from 'react-ga4'
import Link from 'next/link'

export interface TEMPLATE {
  name: string
  desc: string
  category: string
  icon: string
  aiPrompt: string
  slug: string
  form?: FORM[]
}
export interface FORM {
  label: string
  field: string
  name: string
  required?: boolean
}

function TemplateSection({ searchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates)

  useEffect(() => {
    if (searchInput) {
      const filteredData = Templates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      setTemplateList(filteredData)
    } else {
      setTemplateList(Templates)
    }
  }, [searchInput])

  const handleTemplateClick = (templateName: string, slug: string) => {
    ReactGA.event({
      category: 'Dashboard',
      action: 'Clicked Template Card',
      label: templateName,
    })
    // Assuming TemplateCard is wrapped in a Link or handles navigation internally
    // If TemplateCard doesn't handle navigation, you might add it here
  }

  return (
    <div>
      <section className='grid md:grid-cols-3 justify-center items-center md:ml-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6'>
        {templateList.map((template: TEMPLATE, index: number) => (
          <div
            key={index}
            className='transform transition duration-300 hover:scale-105'
            onClick={() => handleTemplateClick(template.name, template.slug)}
          >
            <TemplateCard {...template} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default TemplateSection
