import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

// ✅ Fixed favicon path (store logo.png in /public)
export const metadata: Metadata = {
  title: 'Easily Famous',
  description:
    'One stop solution to all your generative AI and creative needs.',
  icons: {
    icon: '/logo.png', // ✅ Use absolute path (Next.js serves from /public)
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics /> {/* ✅ Corrected placement */}
      </body>
    </html>
  )
}
