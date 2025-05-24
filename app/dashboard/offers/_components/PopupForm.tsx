'use client'
import React, { useState, useEffect, FormEvent } from 'react'

// const baseURL = 'https://backend-easily-famous-8nbw.vercel.app/api/orders/create';
const baseURL = `http://localhost:8000/api/orders/create`

interface PopupFormProps {
  onClose: () => void
  onSubmit: (profileUrl: string) => void
  error?: string
  isSubmitting?: boolean
}

const SUBMIT_COUNTDOWN = 20

const PopupForm: React.FC<PopupFormProps> = ({
  onClose,
  onSubmit,
  error,
  isSubmitting,
}) => {
  const [profileUrl, setProfileUrl] = useState<string>('')
  const [countdown, setCountdown] = useState<number>(SUBMIT_COUNTDOWN)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isSubmitting) {
      setCountdown(SUBMIT_COUNTDOWN)
      timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
      }, 1000)
    } else {
      setCountdown(SUBMIT_COUNTDOWN)
    }
    return () => clearInterval(timer)
  }, [isSubmitting])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(profileUrl)
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Themed, blurred overlay */}
      <div
        className='absolute inset-0 bg-gradient-to-br from-[#254f1a]/80 via-[#d2e823]/30 to-[#f3f3f1]/80 backdrop-blur-sm transition-opacity duration-300'
        onClick={onClose}
      />
      {/* Popup Card */}
      <div className='relative z-10 bg-gradient-to-br from-[#f3f3f1] via-white to-[#d2e823]/20 p-8 rounded-2xl shadow-2xl border border-[#e0e0e0] w-full max-w-md text-center animate-popup-fade-in'>
        {/* Header with fun icon */}
        <div className='flex items-center justify-center gap-2 mb-4'>
          <span className='text-2xl'>🔗</span>
          <h2 className='text-2xl font-extrabold text-[#254f1a] drop-shadow'>
            Enter Post URL
          </h2>
        </div>
        {/* Error message */}
        {error && (
          <div className='mb-4 text-red-600 font-semibold animate-popup-fade-in'>
            {error}
          </div>
        )}
        {/* Progress bar for submitting */}
        {isSubmitting && (
          <div className='w-full mb-4'>
            <div className='h-2 w-full bg-[#e0e0e0] rounded-full overflow-hidden'>
              <div
                className='h-2 bg-[#d2e823] rounded-full transition-all duration-1000'
                style={{ width: `${(countdown / SUBMIT_COUNTDOWN) * 100}%` }}
              />
            </div>
            <div className='text-xs text-[#254f1a] mt-1'>
              Submitting... ({countdown}s)
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='profileUrl'
              className='block text-sm font-semibold text-[#254f1a] mb-1'
            >
              Post URL
            </label>
            <input
              type='text'
              id='profileUrl'
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              className='mt-1 p-3 w-full border border-[#d2e823] rounded-xl focus:ring-2 focus:ring-[#254f1a] focus:outline-none text-[#254f1a] bg-white/80 placeholder:text-[#254f1a]/60'
              required
              placeholder='https://instagram.com/p/xyz...'
              disabled={isSubmitting}
            />
          </div>
          <div className='flex justify-center gap-4'>
            <button
              type='button'
              className='bg-gray-200 hover:bg-gray-300 text-[#254f1a] font-semibold py-2 px-6 rounded-full transition-all duration-200 focus:outline-none focus:shadow-outline'
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-[#254f1a] text-[#d2e823] font-bold py-2 px-8 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#3a7d2c] focus:outline-none focus:shadow-outline'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </form>
        {/* Popup animation styles */}
        <style jsx>{`
          .animate-popup-fade-in {
            animation: popupFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes popupFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(24px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default PopupForm
