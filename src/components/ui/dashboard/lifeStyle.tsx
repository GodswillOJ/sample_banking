import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faReceipt, faClipboard, faKey, faLink } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Lifestyle = () => {
  // Define the type of selectedAction
  const [selectedAction, setSelectedAction] = useState<'generateReceipt' | 'layComplaints' | 'getToken' | 'linkAddress' | null>(null);

  // Explicitly type the action parameter
  const handleButtonClick = (action: 'generateReceipt' | 'layComplaints' | 'getToken' | 'linkAddress') => {
    setSelectedAction(action);
  };

  // Explicitly type the event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
  };

  return (
    <div>
      {/* Buttons */}
      <div className="space-y-4">
        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={() => handleButtonClick('generateReceipt')}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faReceipt} className="text-xl" />
            <span className="font-medium">Generate Receipt</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={() => handleButtonClick('layComplaints')}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faClipboard} className="text-xl" />
            <span className="font-medium">Lay Complaints</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={() => handleButtonClick('getToken')}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faKey} className="text-xl" />
            <span className="font-medium">Get Token</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>

        <div
          className="flex items-center justify-between p-4 bg-yellow-500 rounded cursor-pointer hover:shadow-lg"
          onClick={() => handleButtonClick('linkAddress')}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLink} className="text-xl" />
            <span className="font-medium">Link Address</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-xl text-black" />
        </div>
      </div>

      {/* Forms */}
      {selectedAction && (
        <div className="mt-8 p-6 border rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            {selectedAction === 'generateReceipt' && 'Generate Receipt'}
            {selectedAction === 'layComplaints' && 'Lay Complaints'}
            {selectedAction === 'getToken' && 'Get Token'}
            {selectedAction === 'linkAddress' && 'Link Address'}
          </h2>
          <form onSubmit={handleSubmit}>
            {selectedAction === 'generateReceipt' && (
              <>
                <input
                  type="text"
                  placeholder="Enter receipt number"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter date"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="block w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            {selectedAction === 'layComplaints' && (
              <>
                <input
                  type="text"
                  placeholder="Enter complaint subject"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter complaint description"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter contact details"
                  className="block w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            {selectedAction === 'getToken' && (
              <>
                <input
                  type="text"
                  placeholder="Enter user ID"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter request type"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter token duration"
                  className="block w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            {selectedAction === 'linkAddress' && (
              <>
                <input
                  type="text"
                  placeholder="Enter address name"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter address line 1"
                  className="block w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter city/state"
                  className="block w-full p-2 mb-4 border rounded"
                />
              </>
            )}

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="mt-6">
        <Image src="/icons/loan.jpg" alt="Online security" width={400} height={300} className="image" />
      </div>      
    </div>
  );
};

export default Lifestyle;
