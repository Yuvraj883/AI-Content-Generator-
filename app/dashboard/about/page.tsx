'use client'

export default function AboutUsPage() {
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
                d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z'
                fill='#254f1a'
              />
            </svg>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#254f1a] text-center mb-2 drop-shadow-lg'>
            About Us
          </h1>
          <div className='h-1 w-16 bg-[#d2e823] rounded-full mb-2' />
          <p className='text-gray-700 text-lg text-center max-w-xl'>
            Welcome to <span className='font-semibold'>Easily Famous</span> –
            your one-stop solution for all generative AI and creative needs.
          </p>
        </div>

        {/* Sections */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Our Mission
          </h2>
          <p className='text-gray-700'>
            We aim to empower individuals, businesses, and creators by offering
            AI-driven content generation tools that make creativity effortless
            and accessible. Whether you need engaging text, social media growth,
            or branding assistance, we've got you covered.
          </p>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            What We Offer
          </h2>
          <ul className='list-disc pl-6 text-gray-700 space-y-1'>
            <li>
              AI-powered content generation for blogs, social media, and
              marketing.
            </li>
            <li>"Offers" section providing likes and promotional services.</li>
            <li>Seamless user experience with intuitive AI tools.</li>
          </ul>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section className='mb-8'>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Why Choose Us?
          </h2>
          <ul className='list-disc pl-6 text-gray-700 space-y-1'>
            <li>Cutting-edge AI models tailored for high-quality content.</li>
            <li>User-friendly platform for effortless engagement.</li>
            <li>Fast, reliable, and affordable services.</li>
          </ul>
        </section>
        <hr className='my-6 border-[#d2e823]/30' />
        <section>
          <h2 className='text-2xl font-bold text-[#254f1a] mb-2 flex items-center gap-2'>
            <span className='inline-block w-2 h-6 bg-[#d2e823] rounded-full mr-2' />
            Get in Touch
          </h2>
          <p className='text-gray-700'>
            Have questions or need assistance? Feel free to reach out at
            <span className='font-semibold'> im.thegod883@gmail.com</span>.
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
