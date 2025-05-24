import Image from 'next/image'
import React from 'react'
import { TEMPLATE } from './TemplateSection'
import Link from 'next/link'

const CARD_HEIGHT = 180
const ICON_SIZE = 56

const TemplateCard = (template: TEMPLATE) => {
  return (
    <div
      className='relative flex flex-col justify-between items-stretch rounded-2xl cursor-pointer bg-white/70 backdrop-blur-md border-2 border-transparent hover:border-[#d2e823] shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out overflow-hidden group'
      style={{
        minHeight: CARD_HEIGHT,
        maxHeight: CARD_HEIGHT,
        height: CARD_HEIGHT,
      }}
    >
      {/* Gradient Border Animation */}
      <div className='absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-[#d2e823]/60 transition-all duration-200' />
      {/* Top Section: Icon and Title/Desc */}
      <div className='flex flex-row gap-3 items-center px-4 pt-4'>
        <div
          className='flex items-center justify-center bg-gradient-to-br from-[#d2e823]/20 to-[#254f1a]/10 rounded-xl shadow-md p-2'
          style={{ minWidth: ICON_SIZE, minHeight: ICON_SIZE }}
        >
          <Image
            src={template?.icon}
            height={ICON_SIZE}
            width={ICON_SIZE}
            alt='icon'
            className='object-contain w-12 h-12 drop-shadow-md'
          />
        </div>
        <div className='flex flex-col flex-1 min-w-0'>
          <h3 className='font-bold text-base text-[#254f1a] mb-0.5 truncate'>
            {template.name}
          </h3>
          <p className='text-gray-700 text-xs line-clamp-2'>{template.desc}</p>
        </div>
      </div>
      {/* Bottom Section: Button */}
      <div className='flex-1 flex flex-col justify-end px-4 pb-4 mt-2'>
        <Link href={`dashboard/content/${template?.slug}`} className='w-full'>
          <button className='flex items-center gap-2 bg-[#254f1a] w-full justify-center px-5 py-2 rounded-full text-sm text-white font-semibold shadow hover:bg-[#3a7d2c] hover:text-[#d2e823] transition-all'>
            <span>Try Now</span>
            <svg width='18' height='18' fill='none' viewBox='0 0 24 24'>
              <path
                d='M5 12h14M13 6l6 6-6 6'
                stroke='#d2e823'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TemplateCard
