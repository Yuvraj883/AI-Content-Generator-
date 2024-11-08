import React, { useEffect, useState } from 'react';

interface OrderProcessingMessageProps {
  onClose: () => void;
}

const OrderProcessingMessage: React.FC<OrderProcessingMessageProps> = ({ onClose }) => {
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 30);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Use useEffect to automatically close the message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Clear the timer when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
        <p>Your order will be processed soon. Thank you!</p>
        <div className="mt-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
            </div>
            <div className="flex h-2 overflow-hidden rounded-full">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessingMessage;
