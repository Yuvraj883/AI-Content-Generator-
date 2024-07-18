import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-purple-500 font-bold'>This Page Is Still Under Maintainance</h1>
      <p className='text-lg font-medium '>The page you are looking for is not functional, we are still working on it. Please comeback again later.</p>
      <Link className='underline' href='/dashboard'>Return to Dashboard</Link>

    </div>
  )
}
