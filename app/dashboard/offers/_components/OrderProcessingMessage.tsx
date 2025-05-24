import React, { useEffect, useState } from 'react'

interface OrderProcessingMessageProps {
  onClose: () => void
}

const OrderProcessingMessage: React.FC<OrderProcessingMessageProps> = ({
  onClose,
}) => {
  const [progress, setProgress] = useState<number>(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => Math.max(prevProgress - 1, 0))
    }, 30)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress === 0) {
      onClose()
    }
  }, [progress, onClose])

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Themed, blurred overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#254f1a]/80 via-[#d2e823]/30 to-[#f3f3f1]/80 backdrop-blur-sm transition-opacity duration-300' />
      {/* Popup Card */}
      <div className='relative z-10 bg-gradient-to-br from-[#f3f3f1] via-white to-[#d2e823]/20 p-8 rounded-2xl shadow-2xl border border-[#e0e0e0] w-full max-w-md text-center animate-popup-fade-in'>
        {/* Header with fun icon */}
        <div className='flex items-center justify-center gap-2 mb-4'>
          <span className='text-2xl'>⏳</span>
          <h2 className='text-2xl font-extrabold text-[#254f1a] drop-shadow'>
            Order Processing
          </h2>
        </div>
        <p className='text-[#254f1a] text-lg mb-6 font-medium'>
          Your order is being processed. Thank you for your patience!
        </p>
        {/* Modern Progress Bar */}
        <div className='w-full mb-2'>
          <div className='h-2 w-full bg-[#e0e0e0] rounded-full overflow-hidden'>
            <div
              className='h-2 bg-[#d2e823] rounded-full transition-all duration-100'
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className='text-xs text-[#254f1a] mt-1'>
            Processing... ({Math.ceil(progress / 3)}s)
          </div>
        </div>
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

export default OrderProcessingMessage
