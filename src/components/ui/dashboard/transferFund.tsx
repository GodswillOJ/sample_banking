import React, { useState } from "react";

const TransferFunds: React.FC<TransferFundsProps> = ({
  totalCurrentBalance,
  setTotalCurrentBalance,
  addTransaction,
}) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [banks] = useState(["Bank A", "Bank B", "Bank C"]);
  const [isAccountVerified, setIsAccountVerified] = useState(false);
  const [showConfirmTransfer, setShowConfirmTransfer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Stores transaction history

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
    setIsAccountVerified(e.target.value.length === 10); // Mock account verification
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmTransfer(true); // Show confirmation step
  };

  const handleConfirmTransfer = async () => {
    setShowConfirmTransfer(false);
    setIsSubmitting(true);

    const transferAmount = parseFloat(amount);
    const updatedBalance = totalCurrentBalance - transferAmount;
    setTotalCurrentBalance(updatedBalance); // Update balance

    const newTransaction: Transaction = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      description: description || `Transfer to ${bankName}`,
      amount: `-£${transferAmount.toFixed(2)}`,
      balance: `£${updatedBalance.toFixed(2)}`,
      location: "Online Transfer",
      transactionId: `TXN${Date.now()}`,
    };

    setTimeout(() => {
      setTransactions((prev) => [...prev, newTransaction]);
      setShowReceipt(true); // Show receipt after 3 seconds
      setIsSubmitting(false);
    }, 3000);

    // Save the transaction
    addTransaction(newTransaction);
    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    });

    // Clear input fields
    setDescription("");
    setAmount("");
    setAccountName("");
    setBankName("");
    setAccountNumber("");
  };

  return (
    <div className="relative">
      {isSubmitting && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
          <div className="text-xl">Please Wait...</div>
        </div>
      )}

      {showConfirmTransfer && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Confirm Transfer</h2>
          <div>
            <p>Bank: {bankName}</p>
            <p>Amount: {amount}</p>
            <p>Description: {description || `Transfer to ${bankName}`}</p>
            <p>Account Name: {accountName}</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleConfirmTransfer}
            >
              Confirm Transfer
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setShowConfirmTransfer(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showReceipt && (
        <div className="absolute top-20 left-0 right-0 p-4 bg-white shadow-lg z-20">
          <h2 className="text-xl font-bold">Transfer Sent</h2>
          <div>Transaction ID: {transactions[transactions.length - 1]?.transactionId}</div>
          <div>Amount: {transactions[transactions.length - 1]?.amount}</div>
          <div>Description: {transactions[transactions.length - 1]?.description}</div>
          <div>Time: {transactions[transactions.length - 1]?.time}</div>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => alert("Receipt Saved")}
            >
              Save Receipt
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setShowReceipt(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Transfer Funds</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded shadow-lg space-y-4"
      >
        <div>
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            placeholder="Enter account number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
          {isAccountVerified && (
            <div className="mt-2 text-sm text-white bg-green-500 p-2 rounded">
              Account Verified
            </div>
          )}
        </div>

        <div>
          <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter account name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <select
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="">Select a Bank</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description (Optional)
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default TransferFunds;
