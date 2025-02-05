"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import ReactGA from 'react-ga4';

const baseURL = 'https://backend-easily-famous-8nbw.vercel.app/api/orders/create';

interface PopupFormProps {
  onClose: () => void;
  onSubmit: (profileUrl: string) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
  const [profileUrl, setProfileUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false); // New state for loading indication
  const [countdown, setCountdown] = useState<number>(20); // Countdown timer

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
    } else if (countdown === 0 && isLoading) {
      setLoading(false); // If countdown reaches 0 and still loading, stop loading
      onSubmit(profileUrl); // Perform submit action
      onClose(); // Close the pop-up
      setCountdown(20);
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown, onSubmit, onClose, profileUrl]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    ReactGA.event({
      category: 'Offer Claimed',
      action: 'Offer button clicked',
    });

    setIsSubmitting(true);
    setLoading(true); // Show loading indication

    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: profileUrl }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }


      setTimeout(() => {
        setIsSubmitting(false);
        setLoading(false); // Stop loading indication
        // Show order processing pop-up
        alert('Order processing...');
      }, 2000); // Assuming API request takes 2 seconds
    } catch (error: any) {
      console.log('Error:', error);
      setIsSubmitting(false);
      setLoading(false); // Stop loading indication in case of error
      if (error.message === 'Error: 429') {
        // If 429 error, show alert
        alert('You can only avail the offer once every 6 hours.');
        setCountdown(20);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-12 rounded shadow-md relative">
        <h2 className="text-2xl font-bold mb-6">Enter Post URL</h2>
        {isLoading && (
          <div className="absolute top-0 right-0 mr-4 mt-2 text-sm text-gray-500">
            {`Submitting... (${countdown}s)`}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="profileUrl" className="block text-sm font-medium text-gray-600">
              Post URL
            </label>
            <input
              type="text"
              id="profileUrl"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#254f1a] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
