import Image from 'next/image'
import { Search } from 'lucide-react'

interface HeroSectionProps {
  onSearchInput: (value: string) => void
  searchInput: string
}

const HeroSection = ({ onSearchInput, searchInput }: HeroSectionProps) => {
  return (
    <section className='w-full flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-[#d2e823] via-[#f3f3f1] to-[#254f1a] px-6 py-12 md:py-20 rounded-3xl shadow-xl mb-8 mt-2 transition-all duration-300'>
      <div className='flex-1 flex flex-col items-start justify-center text-left md:pr-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-[#254f1a] mb-4 drop-shadow-lg leading-tight'>
          Unleash Creativity with{' '}
          <span className='text-[#6b8e23]'>AI Content Generator</span>
        </h1>
        <p className='text-lg md:text-xl text-[#254f1a] mb-6 font-medium max-w-xl'>
          Instantly generate blog titles, content, social posts, code, and more.
          Supercharge your workflow with smart, ready-to-use templates powered
          by AI.
        </p>
        <a
          href='#templates'
          className='inline-block bg-[#254f1a] hover:bg-[#6b8e23] text-[#d2e823] font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg mb-6'
        >
          Get Started
        </a>
        <div className='flex items-center bg-white rounded-full shadow-md gap-2 py-2 px-4 w-full max-w-md transition-all duration-300 hover:shadow-lg'>
          <input
            placeholder='Browse All Templates'
            className='outline-none px-3 py-2 w-full text-[#254f1a] rounded-full'
            value={searchInput}
            onChange={(event) => onSearchInput(event.target.value)}
          />
          <Search className='text-[#254f1a] w-5 h-5' />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center mb-8 md:mb-0'>
        <Image
          src='/images/logo2.png'
          alt='AI Content Generator Illustration'
          width={400}
          height={400}
          className='w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl animate-float'
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection

// Add a floating animation for the illustration
// In globals.css, add:
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
// .animate-float { animation: float 3s ease-in-out infinite; }
