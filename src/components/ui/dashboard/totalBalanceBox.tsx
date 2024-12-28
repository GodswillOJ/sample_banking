import React from 'react';
import DoughnutChart from './DoughnutChart';
import CountUp from 'react-countup';

// Animated Counter Component
export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white-800">
      <CountUp decimals={2} decimal="," prefix="$" end={amount} />
    </div>
  );
};

// Total Balance Box Component
const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance p-4 md:p-6 lg:p-8 bg-white rounded shadow-md flex flex-col md:flex-row gap-6">
      {/* Text Section */}
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="sm:text-2xl md:text-3xl font-semibold text-gray-700">
          Bank Accounts: <span className="text-blue-800">{totalBanks}</span>
        </h2>

        <div className="flex flex-col gap-2 text-white">
          <p className="text-sm sm:text-base md:text-lg font-small text-gray-500">
            Total Current Balance
          </p>
          <div className="total-balance-amount flex items-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="total-balance-chart flex-1 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <DoughnutChart  accounts={accounts} />
      </div>
    </section>
  );
};

export default TotalBalanceBox;
