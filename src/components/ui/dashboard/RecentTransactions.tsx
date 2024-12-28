"use client";

import React, { useState, useEffect } from "react";

interface Transaction {
  date: string;
  time: string;
  description: string;
  amount: string;
  balance: string;
  location: string;
  transactionId: string;
}

interface RecentTransactionsProps {
  setActiveComponent: (component: string) => void;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ setActiveComponent }) => {
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("/api/transactions"); // Make sure the path matches the API route
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Transaction[] = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const rowsPerPage = 5;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="recent-transactions mt-8 bg-white p-4 rounded shadow">
      <div className="transactions-c flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <h2 className="text-xl font-bold text-center md:text-left">Recent Transactions</h2>
        <div
          id="transfer_details"
          className="flex flex-wrap justify-center md:justify-end gap-2"
        >
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setActiveComponent("transferFunds")}
          >
            Transfer
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Buy Data
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Pay Bills
          </button>
        </div>
      </div>


      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Balance</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((txn, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{txn.date}</td>
                <td className="px-4 py-2 border">{txn.time}</td>
                <td className="px-4 py-2 border">{txn.description}</td>
                <td className="px-4 py-2 border">{txn.amount}</td>
                <td className="px-4 py-2 border">{txn.balance}</td>
                <td className="px-4 py-2 border">{txn.location}</td>
                <td className="px-4 py-2 border">{txn.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
          >
            Prev
          </button>
        )}
        {endIndex < transactions.length && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
