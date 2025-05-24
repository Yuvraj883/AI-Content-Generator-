'use client'
import { ReactNode, useState } from 'react'
import HeaderWithState from './_components/HeaderWithState'
import SidebarWithState from './_components/SidebarWithState'
import Footer from './_components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang='en'>
      <body className='min-h-screen bg-[#f3f3f1]'>
        {/* Sidebar (fixed on desktop) */}
        <SidebarWithState
          isOpen={isSidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
        {/* Main content beside sidebar, with left margin on desktop */}
        <div className='min-h-screen transition-all duration-300 md:ml-72'>
          {/* Header */}
          <HeaderWithState
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          />
          {/* Main content (scrollable) */}
          <main className='flex-grow p-2'>{children}</main>
        </div>
        {/* Footer always at the bottom, full width */}
        <Footer />
      </body>
    </html>
  )
}
