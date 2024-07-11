"use client"
import React, { useState } from 'react'
import Header from './_components/Header'
import TemplateSection from './_components/TemplateSection'


function Page() {
  const [searchInput, setSearchInput] = useState<string>('');
  return (
    <div>
      <section className=''>
          <Header/>
          <TemplateSection onSearchInput={(value:string)=>setSearchInput(value)} searchInput={searchInput}/>
      </section>

    </div>
  )
}

export default Page
