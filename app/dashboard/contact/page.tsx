'use client'

const ContactPage: React.FC = () => {
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
                d='M21 8V7l-3 2.29V7a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-3.29l3 2.29V16a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#254f1a] text-center mb-2 drop-shadow-lg'>
            Contact Us
          </h1>
          <div className='h-1 w-16 bg-[#d2e823] rounded-full mb-2' />
          <p className='text-gray-700 text-lg text-center max-w-xl'>
            Have questions, feedback, or collaboration ideas? We'd love to hear
            from you! Reach out to us through the following channels:
          </p>
        </div>
        {/* Sections */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Email
          </h2>
          <p className='text-gray-700 mb-4'>
            📩{' '}
            <a
              href='mailto:im.thegod883@gmail.com'
              className='text-blue-600 underline hover:text-blue-800 transition-colors'
            >
              im.thegod883@gmail.com
            </a>
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Social Media
          </h2>
          <p className='text-gray-700 mb-4'>
            Follow and message us on our social media channels:
          </p>
          <ul className='list-disc pl-6 text-gray-700'>
            <li>
              <a
                href='#'
                className='text-blue-600 underline hover:text-blue-800 transition-colors'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-blue-600 underline hover:text-blue-800 transition-colors'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-blue-600 underline hover:text-blue-800 transition-colors'
              >
                LinkedIn
              </a>
            </li>
          </ul>
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

export default ContactPage
