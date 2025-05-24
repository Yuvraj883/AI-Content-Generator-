'use client'
import React, { useState } from 'react'
import TemplateSection from './_components/TemplateSection'
import HeroSection from './_components/HeroSection'

function Page() {
  const [searchInput, setSearchInput] = useState<string>('')
  return (
    <div>
      <HeroSection
        onSearchInput={(value: string) => setSearchInput(value)}
        searchInput={searchInput}
      />
      <section className=''>
        <TemplateSection searchInput={searchInput} />
      </section>
    </div>
  )
}

export default Page
