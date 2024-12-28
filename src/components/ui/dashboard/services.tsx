"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMoneyBill, faPlane, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Services = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showRemainingText, setShowRemainingText] = useState(false);

  const fullText = `
    By using this service, you acknowledge and agree to abide by our terms and conditions, 
    which are designed to ensure a safe, equitable, and compliant experience for all users. 
    These terms encompass adherence to all applicable laws, regulations, and policies governing 
    the use of our platform. Specifically, users are expected to comply with local, national, and 
    international laws that may apply to their activities while using this service. This includes, 
    but is not limited to, laws pertaining to data privacy, intellectual property rights, and the 
    ethical use of digital tools and platforms. By agreeing to these terms, you affirm that your 
    actions will not contravene any such regulations and that you will conduct yourself responsibly 
    while interacting with our service. Furthermore, these terms and conditions outline expectations 
    regarding proper usage of the platform. Any activity that could disrupt the functionality, integrity, 
    or security of the service is strictly prohibited. Examples of such activities include unauthorized 
    access attempts, the introduction of malicious software, and actions aimed at undermining the performance 
    or stability of the platform. By agreeing to our terms, you commit to refraining from any behavior 
    that could compromise the service or negatively affect other users experiences.
  `;

  const handleButtonClick = () => {
    setShowTerms(true);
  };

  const handleShowRemainingText = () => {
    setShowRemainingText(true);
  };

  const handleAccept = () => {
    setShowTerms(false);
    setShowRemainingText(false);
  };

  const handleCancel = () => {
    setShowTerms(false);
    setShowRemainingText(false);
  };

  const shortText = fullText.slice(0, 600);

  return (
    <div>
      <div className="relative p-6 space-y-4 bg-gray-100">
        {showTerms && (
          <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-white border rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Terms and Conditions</h2>
            <p className="mb-4 text-gray-600">
              {showRemainingText ? fullText : shortText}
            </p>
            {!showRemainingText && (
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleShowRemainingText}
              >
                Next
              </button>
            )}
            <div className="mt-4">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 mr-2"
                onClick={handleAccept}
              >
                Accept Conditions
              </button>
              <button
                className="px-4 py-2 text-white bg-red-400 rounded hover:bg-red-500"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={handleButtonClick}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faWallet} className="text-xl" />
            <span className="font-medium">Loan</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={handleButtonClick}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMoneyBill} className="text-xl" />
            <span className="font-medium">Pay Bills</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={handleButtonClick}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPlane} className="text-xl" />
            <span className="font-medium">Book Flight</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={handleButtonClick}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMobile} className="text-xl" />
            <span className="font-medium">Buy Data</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>
      </div>
      <div className="mt-6">
        <Image src="/icons/loans_cash.jpg" alt="Online security" width={400} height={300} className="image" />
      </div>
    </div>
  );
};

export default Services;
