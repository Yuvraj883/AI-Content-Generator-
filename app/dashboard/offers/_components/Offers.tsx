"use client"
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

import OrderProcessingMessage from './OrderProcessingMessage';
import PopupForm from './PopupForm';

const Offers: React.FC = () => {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Offers Page" });
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (profileUrl: string) => {
    // Handle form submission logic here
    // console.log('Submitted profile URL:', profileUrl);

    // Show the processing message
    setIsProcessing(true);

    // Simulate a delay for demonstration purposes (replace with actual logic)
    setTimeout(() => {
      // After processing, hide the message
      setIsProcessing(false);
      // Close the pop-up
      handleClosePopup();
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 w-[90%]">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          Get your free likes now! 🚀❤️
        </h2>
        <p className="text-gray-600">
          Increase your social media presence with our free likes service.
          Don't miss out on this amazing opportunity!
        </p>
        <button
          className="bg-[#254f1a] text-white py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleOpenPopup}
        >
          Claim Now
        </button>
      </div>

      {isPopupOpen && !isProcessing && (
        <PopupForm onClose={handleClosePopup} onSubmit={handleFormSubmit} />
      )}

      {isProcessing && <OrderProcessingMessage onClose={handleClosePopup} />}
    </div>
  );
};

export default Offers;
