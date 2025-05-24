'use client' // Ensure client-side rendering to avoid hydration errors

import { useState, useEffect } from 'react'

const PrivacyPolicyPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString())
  }, [])

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f3f3f1] via-[#d2e823]/20 to-[#254f1a]/10 py-12 px-2'>
      <div className='max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in'>
        {/* Hero Section */}
        <div className='flex flex-col items-center mb-8'>
          <div className='bg-[#d2e823]/80 rounded-full p-4 mb-4 shadow-md'>
            <svg
              width='48'
              height='48'
              fill='none'
              viewBox='0 0 24 24'
              className='text-[#254f1a]'
            >
              <path
                d='M12 2C7 2 2 4 2 8v6c0 4 5 6 10 6s10-2 10-6V8c0-4-5-6-10-6zm0 2c4.42 0 8 1.72 8 4v6c0 2.28-3.58 4-8 4s-8-1.72-8-4V8c0-2.28 3.58-4 8-4zm0 2a2 2 0 100 4 2 2 0 000-4z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#254f1a] text-center mb-2 drop-shadow-lg'>
            Privacy Policy
          </h1>
          <div className='h-1 w-16 bg-[#d2e823] rounded-full mb-2' />
          <span className='inline-block bg-[#254f1a] text-[#d2e823] text-xs font-semibold rounded-full px-3 py-1 mb-2'>
            Last Updated: {lastUpdated}
          </span>
        </div>
        {/* Sections */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Introduction
          </h2>
          <p className='text-gray-700'>
            Welcome to EasilyFamous! Your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your data
            when using our website. Our website provides AI-generated content
            and offers promotional features, such as likes.
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            1. Information We Collect
          </h2>
          <h3 className='text-xl font-semibold mt-4 mb-2'>
            1.1 Personal Information
          </h3>
          <p className='text-gray-700'>
            When you sign up or interact with our site, we may collect personal
            information such as:
          </p>
          <ul className='list-disc pl-6 text-gray-700'>
            <li>Name</li>
            <li>Email address</li>
            <li>Other details voluntarily provided</li>
          </ul>
          <h3 className='text-xl font-semibold mt-4 mb-2'>
            1.2 Automatically Collected Information
          </h3>
          <p className='text-gray-700'>
            We also collect certain data automatically, including:
          </p>
          <ul className='list-disc pl-6 text-gray-700'>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Usage data (pages visited, time spent)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            2. How We Use Your Information
          </h2>
          <p className='text-gray-700'>We use your data to:</p>
          <ul className='list-disc pl-6 text-gray-700'>
            <li>Generate AI-powered content tailored to your needs</li>
            <li>Provide "Offers" such as likes and promotional features</li>
            <li>Improve website performance and security</li>
            <li>Display relevant advertisements via Google AdSense</li>
          </ul>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            3. Google AdSense & Cookies
          </h2>
          <p className='text-gray-700'>
            We use Google AdSense to display advertisements on our website.
            Google, as a third-party vendor, uses cookies to serve ads based on
            user visits to our site and other websites.
          </p>
          <h3 className='text-xl font-semibold mt-4 mb-2'>
            How Google Uses Cookies:
          </h3>
          <ul className='list-disc pl-6 text-gray-700'>
            <li>
              Google uses cookies (such as the{' '}
              <strong>DoubleClick cookie</strong>) to serve ads based on
              previous visits to this or other websites.
            </li>
            <li>
              Users may opt-out of personalized advertising by visiting{' '}
              <a
                href='https://www.google.com/settings/ads'
                className='text-blue-600 underline hover:text-blue-800 transition-colors'
              >
                Google's Ads Settings
              </a>
              .
            </li>
            <li>
              For more details, check{' '}
              <a
                href='https://policies.google.com/technologies/ads'
                className='text-blue-600 underline hover:text-blue-800 transition-colors'
              >
                Google's Privacy & Terms
              </a>
              .
            </li>
          </ul>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            4. Data Security
          </h2>
          <p className='text-gray-700'>
            We implement security measures to protect your personal information.
            However, no online service is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            5. Your Rights & Choices
          </h2>
          <p className='text-gray-700'>
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete your data. You can also control cookie settings
            in your browser.
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            6. Changes to This Privacy Policy
          </h2>
          <p className='text-gray-700'>
            We may update this Privacy Policy periodically. Please check this
            page for updates.
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            7. Contact Us
          </h2>
          <p className='text-gray-700'>
            If you have any questions, contact us at{' '}
            <a
              href='mailto:im.thegod883@gmail.com'
              className='text-blue-600 underline hover:text-blue-800 transition-colors'
            >
              im.thegod883@gmail.com
            </a>
            .
          </p>
        </section>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.8s ease;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
