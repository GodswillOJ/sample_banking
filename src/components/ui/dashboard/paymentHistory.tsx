import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import TotalBalanceBox from "./totalBalanceBox";

interface PaymentHistoryProps {
  transactions: Transaction[];
  totalCurrentBalance: number;
}

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ transactions, totalCurrentBalance }) => {
  const [activeTab, setActiveTab] = useState<"received" | "debited">("received");
  const [page, setPage] = useState(1);
  const [filteredDate, setFilteredDate] = useState("");
  const [accounts, setAccounts] = useState([
    { name: "Bank 1", balance: 7250 },
    { name: "Bank 2", balance: 12820 },
    { name: "Bank 3", balance: 3755 },
  ]);

  const rowsPerPage = 10;

  // Update bank balances based on the transactions
  useEffect(() => {
    const updateBankBalances = () => {
      setAccounts((prevAccounts) => {
        const updatedAccounts = [...prevAccounts];
        transactions.forEach((txn) => {
          if (txn.amount.startsWith("-")) {
            const amount = parseFloat(txn.amount.replace("-", ""));
            const bankIndex =
              txn.location === "Bank 1"
                ? 0
                : txn.location === "Bank 2"
                ? 1
                : txn.location === "Bank 3"
                ? 2
                : -1;

            if (bankIndex !== -1) {
              updatedAccounts[bankIndex].balance -= amount;
            }
          }
        });
        return updatedAccounts;
      });
    };

    updateBankBalances();
  }, [transactions]);

  // Filter transactions based on the active tab
  const tabFilteredTransactions = transactions.filter((txn) => {
    return activeTab === "received" ? txn.amount.startsWith("+") : txn.amount.startsWith("-");
  });

  // Filter transactions further by selected date
  const filteredTransactions = tabFilteredTransactions.filter((txn) =>
    filteredDate ? txn.date === filteredDate : true
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handleTabChange = (tab: "received" | "debited") => {
    setActiveTab(tab);
    setPage(1);
    setFilteredDate("");
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      {/* Top Container */}
      <div className="mb-6">
        <TotalBalanceBox
          accounts={accounts}
          totalBanks={accounts.length}
          totalCurrentBalance={totalCurrentBalance}
        />
      </div>

      {/* Tabs */}
      <div className="trans_button flex flex-col sm:flex-row mb-4 gap-2 sm:gap-0">
        <button
          className={`flex-1 px-4 py-2 text-sm sm:text-base ${
            activeTab === "received" ? "bg-blue-900 text-white" : "bg-gray-300"
          } rounded-md sm:rounded-l-md`}
          onClick={() => handleTabChange("received")}
        >
          Received
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm sm:text-base ${
            activeTab === "debited" ? "bg-yellow-400 text-black" : "bg-gray-300"
          } rounded-md sm:rounded-r-md`}
          onClick={() => handleTabChange("debited")}
        >
          Debited Payments
        </button>
      </div>

      {/* Transaction Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full border-collapse text-sm lg:text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">
                Date
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="ml-2 text-gray-500 cursor-pointer"
                  onClick={() => {
                    const date = prompt("Enter date (YYYY-MM-DD):");
                    if (date) setFilteredDate(date);
                  }}
                />
              </th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((txn, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{txn.description}</td>
                <td className="px-4 py-2 border">{txn.amount}</td>
                <td className="px-4 py-2 border">{txn.date}</td>
                <td
                  className={`px-4 py-2 border ${
                    activeTab === "received" ? "text-blue-500" : "text-red-500"
                  }`}
                >
                  {activeTab === "received" ? "Received" : "Debited"}
                </td>
                <td className="px-4 py-2 border">{txn.location}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-4 text-gray-500">No transactions found.</div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
          >
            Prev
          </button>
        )}
        {endIndex < filteredTransactions.length && (
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

export default PaymentHistory;
