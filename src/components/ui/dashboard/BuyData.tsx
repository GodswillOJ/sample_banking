import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

const BuyData: React.FC = () => {
  const [dataService, setDataService] = useState("");
  const [dataPlan, setDataPlan] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showConfirmPurchase, setShowConfirmPurchase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSentMessage, setShowSentMessage] = useState(false);

  const dataServices = ["MTN", "Airtel", "Glo", "9Mobile"];
  const dataPlans = [
    { service: "MTN", plans: ["100MB", "500MB", "1GB", "5GB"] },
    { service: "Airtel", plans: ["200MB", "1GB", "2GB", "10GB"] },
    { service: "Glo", plans: ["250MB", "2GB", "3GB", "12GB"] },
    { service: "9Mobile", plans: ["300MB", "1.5GB", "4GB", "20GB"] },
  ];

  const availablePlans =
    dataPlans.find((service) => service.service === dataService)?.plans || [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmPurchase(true);
  };

  const handleConfirmPurchase = () => {
    setShowConfirmPurchase(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSentMessage(true);
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

      {showConfirmPurchase && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Confirm Purchase</h2>
          <div>
            <p>Service: {dataService}</p>
            <p>Plan: {dataPlan}</p>
            <p>Phone Number: {phoneNumber}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleConfirmPurchase}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setShowConfirmPurchase(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showSentMessage && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Data Purchase Sent</h2>
          <p>Your purchase has been processed successfully.</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            onClick={() => setShowSentMessage(false)}
          >
            Close
          </button>
        </div>
      )}
        <Box className="breadcrumbs" sx={{ display: "flex", alignItems: "center", padding: "8px 16px", backgroundColor: "", borderRadius: 1 }}>
        <div className="breadcrumbs__content">
            <span property="itemListElement" typeof="ListItem">
            <Link property="item" typeof="WebPage" title="Go to Home." href="/dashboard" className="home">
                <span style={{ color: "#2563eb" }} property="name">Dashboard</span>
            </Link>
            </span>
            &nbsp;&gt;&nbsp;
            <span property="itemListElement" typeof="ListItem">
            <span property="name" className="post post-page current-item" style={{ color: "#525355" }}>
                transactions
            </span>
            </span>
        </div>
        </Box>

      <h1 className="transfer_text text-2xl font-bold mb-6">Buy Data</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-lg space-y-4">
        <div>
          <label htmlFor="dataService" className="block text-sm font-medium text-gray-700">
            Data Service
          </label>
          <select
            id="dataService"
            value={dataService}
            onChange={(e) => setDataService(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="">Select a Service</option>
            {dataServices.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dataPlan" className="block text-sm font-medium text-gray-700">
            Data Plan
          </label>
          <select
            id="dataPlan"
            value={dataPlan}
            onChange={(e) => setDataPlan(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="">Select a Plan</option>
            {availablePlans.map((plan, index) => (
              <option key={index} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default BuyData;
