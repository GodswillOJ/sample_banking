import React, { useState } from "react";

const PayBills: React.FC = () => {
  const [serviceProvider, setServiceProvider] = useState("");
  const [bouquet, setBouquet] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const serviceProviders = ["DSTV", "GOTV", "Startimes", "Netflix"];
  const bouquets = [
    { provider: "DSTV", options: ["Compact (1 Month - 5000)", "Premium (1 Month - 15000)", "Premium (3 Months - 45000)"] },
    { provider: "GOTV", options: ["Lite (1 Month - 3500)", "Max (1 Month - 9500)", "Max (3 Months - 28500)"] },
    { provider: "Startimes", options: ["Basic (1 Month - 2500)", "Classic (1 Month - 7500)", "Classic (3 Months - 20500)"] },
    { provider: "Netflix", options: ["Basic (1 Month - 5000)", "Standard (1 Month - 8000)", "Premium (1 Month - 12000)"] },
  ];

  const availableBouquets =
    bouquets.find((provider) => provider.provider === serviceProvider)?.options || [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmPayment(true);
  };

  const handleConfirmPayment = () => {
    setShowConfirmPayment(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSuccessMessage(true);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {isSubmitting && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
          <div className="text-xl">Processing...</div>
        </div>
      )}

      {showConfirmPayment && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Confirm Payment</h2>
          <div>
            <p>Service Provider: {serviceProvider}</p>
            <p>Bouquet: {bouquet}</p>
            <p>Account Number: {accountNumber}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleConfirmPayment}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setShowConfirmPayment(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Payment Successful</h2>
          <p>Your payment has been processed successfully.</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            onClick={() => setShowSuccessMessage(false)}
          >
            Close
          </button>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Pay Bills</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-lg space-y-4">
        <div>
          <label htmlFor="serviceProvider" className="block text-sm font-medium text-gray-700">
            Service Provider
          </label>
          <select
            id="serviceProvider"
            value={serviceProvider}
            onChange={(e) => setServiceProvider(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="">Select a Provider</option>
            {serviceProviders.map((provider, index) => (
              <option key={index} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bouquet" className="block text-sm font-medium text-gray-700">
            Bouquet
          </label>
          <select
            id="bouquet"
            value={bouquet}
            onChange={(e) => setBouquet(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="">Select a Bouquet</option>
            {availableBouquets.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
            IUC 
          </label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter iuc number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PayBills;
