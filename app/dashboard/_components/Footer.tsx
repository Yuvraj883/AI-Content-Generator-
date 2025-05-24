// components/Footer.tsx
import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-gradient-to-tl from-[#254f1a] via-[#3a7d2c] to-[#6b8e23] text-[#d2e823] py-6 mt-8'>
      <div className='max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center'>
        {/* Logo or Brand Name */}
        <div className='mb-4'>
          <h2 className='text-5xl font-bold text-white drop-shadow'>
            EasilyFamous
          </h2>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center space-x-4 mb-4 my-6 text-white'>
          <Link href='/dashboard' passHref>
            <span className='hover:text-[#d2e823] cursor-pointer transition-colors'>
              Home
            </span>
          </Link>
          <Link href='/dashboard/privacy-policy' passHref>
            <span className='hover:text-[#d2e823] cursor-pointer transition-colors'>
              Privacy Policy
            </span>
          </Link>
          <Link href='/dashboard/about' passHref>
            <span className='hover:text-[#d2e823] cursor-pointer transition-colors'>
              About
            </span>
          </Link>
          <Link href='/dashboard/contact' passHref>
            <span className='hover:text-[#d2e823] cursor-pointer transition-colors'>
              Contact
            </span>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className='flex space-x-4 justify-center mb-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <svg
              className='w-5 h-5 text-[#d2e823] hover:text-white transition-colors'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.61 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.917 2.203-4.917 4.917 0 .39.044.765.128 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.584-.666 2.475 0 1.708.87 3.213 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.848.171-1.296.171-.317 0-.626-.03-.929-.086.631 1.953 2.445 3.376 4.6 3.417-1.684 1.32-3.809 2.107-6.102 2.107-.396 0-.787-.023-1.175-.068 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.962-.695 1.797-1.562 2.457-2.549z' />
            </svg>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <svg
              className='w-5 h-5 text-[#d2e823] hover:text-white transition-colors'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.326v21.348c0 .73.595 1.326 1.326 1.326h11.494v-9.294h-3.13v-3.622h3.13v-2.67c0-3.1 1.892-4.787 4.656-4.787 1.325 0 2.462.099 2.795.144v3.237l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.105c.73 0 1.326-.595 1.326-1.326v-21.35c0-.73-.595-1.326-1.326-1.326z' />
            </svg>
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <svg
              className='w-5 h-5 text-[#d2e823] hover:text-white transition-colors'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.242 1.317 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.012-4.947.071-1.676.074-3.176.343-4.307 1.474-1.131 1.131-1.401 2.631-1.474 4.307-.059 1.277-.071 1.688-.071 4.947s.012 3.67.071 4.947c.074 1.676.343 3.176 1.474 4.307 1.131 1.131 2.631 1.401 4.307 1.474 1.277.059 1.688.071 4.947.071s3.67-.012 4.947-.071c1.676-.074 3.176-.343 4.307-1.474 1.131-1.131 1.401-2.631 1.474-4.307.059-1.277.071-1.688.071-4.947s-.012-3.67-.071-4.947c-.074-1.676-.343-3.176-1.474-4.307-1.131-1.131-2.631-1.401-4.307-1.474-1.277-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.325c-2.3 0-4.162-1.861-4.162-4.162s1.861-4.162 4.162-4.162 4.162 1.861 4.162 4.162-1.861 4.162-4.162 4.162zm6.406-11.845c0 .796-.646 1.442-1.442 1.442-.796 0-1.442-.646-1.442-1.442 0-.796.646-1.442 1.442-1.442.796 0 1.442.646 1.442 1.442z' />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className='text-center mt-6 text-[#d2e823] text-xs opacity-80'>
          &copy; {new Date().getFullYear()} EasilyFamous. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
