'use client'
import React, { useState } from 'react'
import TemplateSection from './_components/TemplateSection'
import HeroSection from './_components/HeroSection'
import ReactGA from 'react-ga4'

function Page() {
  const [searchInput, setSearchInput] = useState<string>('')

  const handleSearchInput = (value: string) => {
    setSearchInput(value)
    ReactGA.event({
      category: 'Dashboard',
      action: 'Template Search Input',
      label: value, // Optionally log the search term
    })
  }

  return (
    <div>
      <HeroSection
        onSearchInput={handleSearchInput}
        searchInput={searchInput}
      />
      <section className=''>
        <TemplateSection searchInput={searchInput} />
      </section>
    </div>
  )
}

export default Page
