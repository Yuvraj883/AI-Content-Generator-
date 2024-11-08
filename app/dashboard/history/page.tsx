// app/history/page.tsx
"use client"
import { useState, useEffect } from 'react';

type Transaction = {
  id: number;
  url: string;
  date: string;
};

const HistoryPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, url: 'https://example.com/page1', date: '2024-11-09 10:30:00' },
    { id: 2, url: 'https://example.com/page2', date: '2024-11-09 11:00:00' },
    { id: 3, url: 'https://example.com/page3', date: '2024-11-09 12:15:00' },
  ]);

  useEffect(() => {
    // Fetch transaction data from an API or local storage
    // Example: fetch('/api/transactions').then(...)
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b font-semibold text-gray-600 text-left">Sr. No.</th>
              <th className="px-4 py-2 border-b font-semibold text-gray-600 text-left">URL</th>
              <th className="px-4 py-2 border-b font-semibold text-gray-600 text-left">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 border-b text-blue-600 underline">
                  <a href={transaction.url} target="_blank" rel="noopener noreferrer">
                    {transaction.url}
                  </a>
                </td>
                <td className="px-4 py-2 border-b text-gray-700">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
