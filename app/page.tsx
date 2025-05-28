'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactGA from 'react-ga4'

export default function Home() {
  const handleGoToDashboardClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Go to Dashboard Button',
    })
  }

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f3f3f1] via-[#d2e823]/20 to-[#254f1a]/10 py-12 px-2'>
      {/* Hero Section */}
      <div className='flex flex-col items-center mb-12 animate-fade-in'>
        <Image
          src='/images/logo.png'
          alt='EasilyFamous Logo'
          width={80}
          height={80}
          className='mb-4 rounded-lg bg-white p-2 shadow-lg'
        />
        <h1 className='text-4xl md:text-5xl font-extrabold text-[#254f1a] text-center mb-2 drop-shadow-lg'>
          EasilyFamous
        </h1>
        <div className='h-1 w-16 bg-[#d2e823] rounded-full mb-4' />
        <p className='text-gray-700 text-lg text-center max-w-xl mb-6'>
          AI-powered content, social growth, and creative tools—all in one
          place. Effortless, fast, and designed for you.
        </p>
        <Link
          href='/dashboard'
          className='inline-block bg-[#254f1a] text-[#d2e823] font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg hover:scale-105 hover:bg-[#3a7d2c] focus:outline-none focus:shadow-outline'
          onClick={handleGoToDashboardClick}
        >
          Go to Dashboard
        </Link>
      </div>
      {/* Features Section */}
      <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all'>
          <div className='bg-[#d2e823]/30 rounded-full p-3 mb-3'>
            <svg
              width='32'
              height='32'
              fill='none'
              viewBox='0 0 24 24'
              className='text-[#254f1a]'
            >
              <path
                d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-[#254f1a] mb-2'>
            AI Content Generation
          </h3>
          <p className='text-gray-700'>
            Generate blogs, captions, and more with cutting-edge AI models.
          </p>
        </div>
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all'>
          <div className='bg-[#d2e823]/30 rounded-full p-3 mb-3'>
            <svg
              width='32'
              height='32'
              fill='none'
              viewBox='0 0 24 24'
              className='text-[#254f1a]'
            >
              <path
                d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.1 17 14.03 17 15.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-[#254f1a] mb-2'>
            Social Growth Tools
          </h3>
          <p className='text-gray-700'>
            Boost your reach with free likes, tags, and viral content ideas.
          </p>
        </div>
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all'>
          <div className='bg-[#d2e823]/30 rounded-full p-3 mb-3'>
            <svg
              width='32'
              height='32'
              fill='none'
              viewBox='0 0 24 24'
              className='text-[#254f1a]'
            >
              <path
                d='M12 4.14V2c-5.05.5-9 4.81-9 10 0 5.19 3.95 9.5 9 10v-2.14c-3.95-.49-7-3.85-7-7.86s3.05-7.37 7-7.86zM20.54 7.5l-1.41 1.41C20.07 10.07 21 11.97 21 14c0 2.03-.93 3.93-2.46 5.09l1.41 1.41C21.07 18.07 22 16.07 22 14c0-2.07-.93-4.07-2.46-5.09z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-[#254f1a] mb-2'>
            Effortless Creativity
          </h3>
          <p className='text-gray-700'>
            Save time and unlock new ideas with intuitive, easy-to-use tools.
          </p>
        </div>
      </div>
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
  )
}
