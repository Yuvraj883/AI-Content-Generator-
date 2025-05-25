'use client'
import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga4'

import OrderProcessingMessage from './OrderProcessingMessage'
import PopupForm from './PopupForm'

const baseURL = `https://backend-easily-famous.vercel.app/getInstaLikes`

const Offers: React.FC = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Offers Page',
    })
  }, [])

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
    setError(null)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setIsProcessing(false)
    setIsSubmitting(false)
    setError(null)
  }

  const handleFormSubmit = async (profileUrl: string) => {
    setIsSubmitting(true)
    setError(null)
    ReactGA.event({
      category: 'Offer Claimed',
      action: 'Offer button clicked',
    })
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: profileUrl }),
      })
      if (response.status === 429) {
        setError(
          'You have already used the offer. Please come back after 6 hours.'
        )
        setIsSubmitting(false)
        return
      }
      if (!response.ok) {
        setError('An error occurred. Please try again.')
        setIsSubmitting(false)
        return
      }
      // Success: show processing popup
      setIsProcessing(true)
      setIsPopupOpen(false)
      setIsSubmitting(false)
    } catch (error: any) {
      setError('Please try again after 6 hours.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mt-12 w-full min-h-[60vh]'>
      <div className='bg-gradient-to-br from-[#d2e823] via-[#f3f3f1] to-[#254f1a] max-w-md w-full p-8 rounded-3xl shadow-2xl border border-[#e0e0e0] text-center relative overflow-hidden animate-fade-in'>
        {/* Fun Icon/Illustration */}
        <div className='flex justify-center mb-4'>
          <span className='inline-block bg-white/80 rounded-full p-4 shadow-lg animate-bounce'>
            <svg
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#254f1a]'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                fill='#254f1a'
              />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl font-extrabold mb-2 text-[#254f1a] drop-shadow-lg'>
          Get your free likes now! 🚀❤️
        </h2>
        <p className='text-[#254f1a] text-lg mb-6 font-medium'>
          Boost your social media presence instantly with our free likes
          service.
          <br />
          Don&apos;t miss out on this amazing opportunity!
        </p>
        <button
          className='bg-[#254f1a] text-[#d2e823] font-bold py-3 px-8 mt-2 rounded-full shadow-lg transition-all duration-200 text-lg animate-glow hover:scale-105 hover:bg-[#3a7d2c] focus:outline-none focus:shadow-outline'
          onClick={handleOpenPopup}
        >
          Claim Now
        </button>
        {/* Animated Glow for Button */}
        <style jsx>{`
          .animate-glow {
            box-shadow: 0 0 16px 2px #d2e82399, 0 2px 8px 0 #254f1a33;
            animation: glow 2s infinite alternate;
          }
          @keyframes glow {
            0% {
              box-shadow: 0 0 16px 2px #d2e82399, 0 2px 8px 0 #254f1a33;
            }
            100% {
              box-shadow: 0 0 32px 8px #d2e823cc, 0 2px 16px 0 #254f1a55;
            }
          }
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

      {isPopupOpen && !isProcessing && (
        <PopupForm
          onClose={handleClosePopup}
          onSubmit={handleFormSubmit}
          error={error || undefined}
          isSubmitting={isSubmitting}
        />
      )}

      {isProcessing && <OrderProcessingMessage onClose={handleClosePopup} />}
    </div>
  )
}

export default Offers
