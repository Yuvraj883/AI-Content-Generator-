"use client"
import React, { useState } from 'react'
import TemplateSection from './_components/TemplateSection'


function Page() {
  const [searchInput, setSearchInput] = useState<string>('');
  return (
    <div>
      <section className=''>
          <TemplateSection onSearchInput={(value:string)=>setSearchInput(value)} searchInput={searchInput}/>
      </section>

    </div>
  )
}

export default Page
